package main

import (
	"crypto/tls"
	"crypto/x509"
	"fmt"
	"github.com/Shopify/sarama"
	"github.com/sirupsen/logrus"
	"io/ioutil"
	"time"
)

const (
	kafkaAddr     = "kafka.kafka:9092"
	testTopicName = "mytopic"
	certFile      = "/var/otterize/credentials/cert.pem"
	keyFile       = "/var/otterize/credentials/key.pem"
	rootCAFile    = "/var/otterize/credentials/ca.pem"
)

func getTLSConfig() (*tls.Config, error) {
	cert, err := tls.LoadX509KeyPair(certFile, keyFile)
	if err != nil {
		return nil, fmt.Errorf("failed loading x509 key pair: %w", err)
	}

	pool := x509.NewCertPool()
	rootCAPEM, err := ioutil.ReadFile(rootCAFile)
	if err != nil {
		return nil, fmt.Errorf("failed loading root CA PEM file: %w ", err)
	}
	pool.AppendCertsFromPEM(rootCAPEM)

	return &tls.Config{
		Certificates: []tls.Certificate{cert},
		RootCAs:      pool,
	}, nil
}

func send_messages(producer sarama.SyncProducer) {
	i := 1
	for {
		msg := fmt.Sprintf("Message %d [sent by client]", i)
		_, _, err := producer.SendMessage(&sarama.ProducerMessage{
			Topic:     testTopicName,
			Partition: -1,
			Value:     sarama.StringEncoder(msg),
		})
		if err != nil {
			return
		}
		fmt.Printf("Sent message - %s\n", msg)
		time.Sleep(1 * time.Second)
		i++
	}
}

func loop_kafka() error {
	addrs := []string{kafkaAddr}

	config := sarama.NewConfig()
	fmt.Println("Loading mTLS certificates")
	config.Net.TLS.Enable = true
	tlsConfig, err := getTLSConfig()
	if err != nil {
		return err
	}
	config.Net.TLS.Config = tlsConfig
	fmt.Println("Connecting to Kafka")
	config.Net.DialTimeout = 5 * time.Second
	config.Net.ReadTimeout = 5 * time.Second
	config.Net.WriteTimeout = 5 * time.Second
	client, err := sarama.NewClient(addrs, config)
	if err != nil {
		return err
	}
	fmt.Println("Creating a producer and a consumer for -", testTopicName)
	config.Producer.Return.Successes = true
	config.Producer.Timeout = 5 * time.Second
	config.Consumer.MaxWaitTime = 5 * time.Second
	config.Producer.Return.Errors = true
	config.Consumer.Return.Errors = true
	producer, err := sarama.NewSyncProducerFromClient(client)
	if err != nil {
		return err
	}

	consumer, err := sarama.NewConsumerFromClient(client)
	if err != nil {
		return err
	}
	fmt.Println("Sending messages")
	go send_messages(producer)

	partConsumer, err := consumer.ConsumePartition(testTopicName, 0, 0)
	if err != nil {
		return err
	}

	for msg := range partConsumer.Messages() {
		fmt.Printf("Read message - %s\n", msg.Value)
	}
	return nil
}

func main() {
	for {
		err := loop_kafka()
		logrus.WithError(err).Println()
		fmt.Println("Loop exited")
		time.Sleep(2 * time.Second)
	}
}

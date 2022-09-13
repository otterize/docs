package main

import (
	"crypto/tls"
	"crypto/x509"
	"fmt"
	"github.com/Shopify/sarama"
	"github.com/sirupsen/logrus"
	"io/ioutil"
)

const (
	kafkaAddr     = "kafka.kafka:9092"
	testTopicName = "mytopic"
	certFile      = "/var/otterize/credentials/svid.pem"
	keyFile       = "/var/otterize/credentials/key.pem"
	rootCAFile    = "/var/otterize/credentials/bundle.pem"
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

func main() {
	addrs := []string{kafkaAddr}

	config := sarama.NewConfig()

	config.Net.TLS.Enable = true
	tlsConfig, err := getTLSConfig()
	if err != nil {
		logrus.WithError(err).Panic()
	}
	config.Net.TLS.Config = tlsConfig

	client, err := sarama.NewClient(addrs, config)
	if err != nil {
		logrus.WithError(err).Panic()
	}

	producer, err := NewSyncProducerFromClient(client)
	if err != nil {
		logrus.WithError(err).Panic()
	}
	consumer, err := sarama.NewConsumerFromClient(client)
	if err != nil {
		logrus.WithError(err).Panic()
	}

	partConsumer, err := consumer.ConsumePartition(testTopicName, 0, 0)
	if err != nil {
		logrus.WithError(err).Panic()
	}

	for msg := range partConsumer.Messages() {
		if msg.Key != nil {
			fmt.Printf("%s\t", string(msg.Key))
		}
		fmt.Println(string(msg.Value))
	}

}

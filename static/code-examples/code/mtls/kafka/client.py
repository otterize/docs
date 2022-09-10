from kafka import KafkaConsumer

ssl_kwargs = dict(
    security_protocol='SSL',
    ssl_cafile="/var/otterize/credentials/bundle.pem",
    ssl_keyfile="/var/otterize/credentials/key.pem",
    ssl_certfile="/var/otterize/credentials/svid.pem",
)

consumer = KafkaConsumer(
    "test",
    bootstrap_servers=["kafka.kafka:9092"],
    **ssl_kwargs)

print("Connected to kafka consumer")
for message in consumer:
    print("Read Kafka message: " + str(message))

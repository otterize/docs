const fs = require('fs')
const {Kafka} = require('kafkajs')

const kafka = new Kafka({
    brokers: ['kafka.kafka:9092'],
    ssl: {
        rejectUnauthorized: false,
        ca: [fs.readFileSync('/var/otterize/credentials/bundle.pem', 'utf-8')],
        key: fs.readFileSync('/var/otterize/credentials/key.pem', 'utf-8'),
        cert: fs.readFileSync('/var/otterize/credentials/svid.pem', 'utf-8')
    },
})

const consumer = kafka.consumer({groupId: 'test-group'})

consumer.connect().then(
    consumer.subscribe({topic: 'mytopic', fromBeginning: true}).then(
        consumer.run({
            eachMessage: async ({
                                    topic,
                                    partition,
                                    message
                                }) => {
                console.log({
                    value: message.value.toString(),
                })
            },
        })
    )
)
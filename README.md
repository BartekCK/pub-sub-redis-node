# Pub-sub-redis-node

The application shows the communication via the `message queue` between the console client application and the console subscriber in `Node.js`.
`Redis` was used as a `message broker` between two applications.

Client application reads the entered characters from the console and sends them to the Redis buffer. 
The subscriber receives these messages and saves them to a file. 
If the client issues the "clear" command, the content of the subscribing application's file will be cleared. 
The application end with the "close" command. You can also close the program with the `SIGINT` ***(^ C)*** event

![alt text](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FSOiCr%2FbtqRL2SU3Hp%2FKdSk9yghABqqoZkMO7CTe1%2Fimg.png)


# Run locally

***Requirements***
- [x] redis 6.0.9
- [x] Node.js >= v14.15.1
- [x] npm >= 7.5.4

## Subscriber
```
cd ./subscriber
npm i
npm start:dev
```
## Client
```
cd ./client
npm i
npm start:dev
```


# Run locally with docker

```
docker-compose up -d
```

## Client
```
cd ./client
npm i
npm start:dev
```
# Example
![alt text](https://i.ibb.co/mqBqSbV/Zrzut-ekranu-2021-03-31-o-00-13-25.png)


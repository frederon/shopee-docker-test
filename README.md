## How to run

#### 1. Clone this repo

```
$ git clone git@github.com:frederon/shopee-docker-test.git
$ cd shopee-docker-test
```

#### 2. Run in production environment

```
$ docker-compose up
```

#### 3. or run in development environment

Run redis using docker compose

```
$ docker-compose -f docker-compose.dev.yml up
```

Install dependecies

```
npm install
```

Run using nodemon

```
npx nodemon
```

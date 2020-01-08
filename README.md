# gostack

docker run --name database -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres
docker run --name gobarber -p 6379:6379 -d -t redis:alpine
docker run --name mongoDB -p 27017:27017 -d -t mongo
yarn sequelize db:migrate

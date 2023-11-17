docker build -t phone_store:latest .
docker run --network=phoneStoreNetwork -p 3307:3306 -d --name mysql-container phone_store

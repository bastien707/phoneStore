docker build -t phone_store:latest .
docker run -p 3307:3306 --network=phoneStoreNetwork -d --name db-container phone_store
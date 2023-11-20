docker build -t phone_service:latest .
docker run -p 8080:8080 --network=phoneStoreNetwork -d --name phone-container phone_service
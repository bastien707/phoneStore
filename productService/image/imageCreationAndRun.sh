docker build -t joel22222/phone_image:latest .
docker run -p 8080:8080 --network=phoneStoreNetwork -d --name phone-container joel22222/phone_image
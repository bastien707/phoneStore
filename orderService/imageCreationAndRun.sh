docker build -t order_service .
docker run --network=phoneStoreNetwork -p 8080:5000 -d --name order_container order_service


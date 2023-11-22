docker build -t order_service .
docker run --network=phoneStoreNetwork -p 5000:5000 -d --name order_container order_service

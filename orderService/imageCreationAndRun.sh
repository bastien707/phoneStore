docker build -t joel22222/order_image:latest .
docker run --network=phoneStoreNetwork -p 5000:5000 -d --name order_container joel22222/order_image

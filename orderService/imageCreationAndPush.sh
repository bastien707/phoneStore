docker build -t bastien707/order_image:latest .
docker push bastien707/order_image:latest
#docker run --network=phoneStoreNetwork -p 5000:5000 -d --name order_container bastien707/order_image

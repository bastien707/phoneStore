docker build -t db_service:latest .
docker run --network=phoneStoreNetwork -p 3307:3306 -d --name db_container db_service

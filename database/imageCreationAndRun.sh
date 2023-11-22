docker build -t db_service:latest .
docker run -p 3307:3306 --network=phoneStoreNetwork -d --name db-container db_service
<<<<<<< HEAD
docker build -t db_service:latest .
docker run --network=phoneStoreNetwork -p 3307:3306 -d --name db_container db_service
=======
docker build -t phone_store:latest .
docker run -p 3307:3306 -d phone_store
>>>>>>> dev_productService

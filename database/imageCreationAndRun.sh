docker build -t joel22222/phonestore_db_image:latest .
docker run --network=phoneStoreNetwork -p 3307:3306 -d --name db_container joel22222/phonestore_db_image

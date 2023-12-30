cd kubernetes
kubectl apply -f phoneStore-istio.yaml
kubectl apply -f java-service-deployment.yaml -f mysql-deployment.yaml -f python-service-deployment.yaml
minikube tunnel
#this command is to check the functionning of the cluster
#with this command you make the port available from outside the cluster
#the port forwarding is only active during the terminal session

kubectl port-forward service/python-service 5000:5000 &
kubectl port-forward service/java-service 8080:8080 &
FROM openjdk:17
COPY productService-0.0.1-SNAPSHOT.jar .
CMD java -jar -Dspring.profiles.active=prod productService-0.0.1-SNAPSHOT.jar
EXPOSE 8080
FROM openjdk:11.0.14.1-jdk-slim-bullseye
MAINTAINER avs
#RUN addgroup -S spring && adduser -S spring -G spring
#USER spring:spring
ARG JAR_FILE=target/*.jar
COPY ${JAR_FILE} poc-api-rest-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java", "-jar", "/poc-api-rest-0.0.1-SNAPSHOT.jar"]
FROM maven:3.8.5-openjdk-17 AS build
COPY . .
RUN mvn spring-boot:run  # This is the key change

FROM openjdk:17.0.1-jdk-slim
# COPY --from=build /target/pcm-back-0.0.1-SNAPSHOT.jar demo.jar  # Not needed anymore
EXPOSE 8081
# ENTRYPOINT ["java","-jar","demo.jar"]  # Not needed anymore
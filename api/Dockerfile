# CRIAR UM AMBIENTE COM JDK E MAVEM

FROM maven:3.8.5-openjdk-17 AS build
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
ADD . /usr/src/app

# COMPILAR
RUN mvn package -DskipTests

# EXECUTAR COMANDO JAVA PARA RODAR
FROM eclipse-temurin:17-jdk
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY --from=build /usr/src/app/target/api.jar app.jar
CMD ["java", "-jar", "app.jar"]




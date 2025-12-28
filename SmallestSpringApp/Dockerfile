FROM eclipse-temurin:8-jre

WORKDIR /app

COPY target/example.smallest-0.0.1-SNAPSHOT.jar app.jar

EXPOSE 8011

ENTRYPOINT ["java", "-Dserver.port=8011", "-Dserver.address=0.0.0.0", "-jar", "app.jar"]

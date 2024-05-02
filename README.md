
### Сборка Docker контейнера
`docker build -t rev1le/tvz-pwa:latest -f ./docker/Dockerfile .`

### Запуск Dcoker контейнера
`docker run -p 127.0.0.1:443:4173/tcp rev1le/tvz-pwa:latest`


### Сборка Docker контейнера
`docker build -t tvz-pwa -f .\docker\Dockerfile .`

### Запуск Dcoker контейнера
`docker run -p 127.0.0.1:80:4173/tcp localhost/tvz-pwa`

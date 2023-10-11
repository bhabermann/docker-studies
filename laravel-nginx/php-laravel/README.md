# PHP 8.1 wirth Laravel
> Project to practice writing dockerfile

## Commands
Create network
```bash
docker network create laravel-network
```

Build laravel image
```bash
docker build -t [docker-user]/php8-laravel:latest .
```

Push laravel image
```bash
docker push [docker-user]/php8-laravel:latest
```

Build prod image
```bash
docker build -t [docker-user]/php8-laravel:prod . -f Dockerfile.prod
```

Push prod image
```bash
docker push [docker-user]/php8-laravel:prod
```

Run laravel image
```bash
docker run --rm -d --name laravel --network laravel-network [docker-user]/php8-laravel:prod;
```

Build Nginx image
```bash
docker build -t [docker-user]/php8-laravel:nginx . -f Dockerfile.nginx
```

Push Nginx image
```bash
docker push [docker-user]/php8-laravel:nginx
```

Build Nginx image
```bash
docker run --rm -d --name laravel --network laravel-network -p 8080:80 [docker-user]/php8-laravel:nginx;
```
# PHP 8.1 wirth Laravel
> Project to practice writing dockerfile

## Commands
Build image
```bash
docker build -t [docker-user]/php8-laravel:[tag] .
```

Run image
```bash
docker run --rm -d -p 8000:8000 --name laravel [docker-user]/php8-laravel;
```

Push image
```bash
docker push [docker-user]/php8-laravel:[tag]
```
# docker-studies
Repository to hold some scratch from my docker studies

## Table of Contents
- [Nginx](./nginx-learning/README.md)
- [Laravel](./php-laravel/README.md)
- [Node](./node-express/README.md)

## Docker Compose

Will always rebuild before starting containers
```bash
docker compose up -d --build
```

```mysql
create table people(id int not null auto_increment, name varchar(255), primary key(id));
```


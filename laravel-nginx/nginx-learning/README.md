
Build yout image
```bash
docker build -t bhabermann/nginx-learning .
```

Run your image
```bash
docker run --rm -d -p 8080:80 bhabermann/nginx-learning
```

Login to dockerhub
```bash
docker login
```

```bash
docker push bhabermann/nginx-learning
```

Acessar sua máquina de dentro do docker sem adicionar ela na rede host
Acessar o endereço http://host.docker.internal:[porta]
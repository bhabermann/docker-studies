# Node 20 with Express
> Project to practice how to run directly inside docker

## Commands

This command will start a container sharing the current folder between host and container
```bash
docker run --rm -it -v $(pwd)/:/usr/src/app -p 3000:3000 node:20 bash;
```

Create build with running app
```bash
docker build -t [dockerhub-user]/node20-express .
```

Run docker with app running
```bash
docker run --rm --name node-express -d -p 3000:3000 [dockerhub-user]/node20-express
```

Push image to dockerhub
```bash
docker push [dockerhub-user]/node20-express:latest
```
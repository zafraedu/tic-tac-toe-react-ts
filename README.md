## Build

```bash
docker build -t tic-tac-toe .
```

## Run 

```bash
docker run -p 5173:5173 -v $(pwd):/app -v /app/node_modules tic-tac-toe
```

## clean containers

```bash
docker rm -f $(docker ps -aq)
```

## clean images

```bash
docker rmi -f tic-tac-toe
```
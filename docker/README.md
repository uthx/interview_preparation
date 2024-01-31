1- Basic Commands

  1 - Creating an image using docker file

    docker build -t getting-started .

  2 - Start a container using an image
    docker run -dp 127.0.0.3000:3000 getting-started

  3- Stop a running container
    docker stop container_id

  4- Remove the container 

    docker rm container_id
    Remove container without stopping the running container : docker rm -f container_id 

  5- Tag your existing image with new name

    docker tag existing_image_name new_name
    eg: docker tag getting-started rdrahuldhiman/getting-started

  6- Push a docker image to the default registry
    docker push rdrahuldhiman/getting-started

  7- Exec into a running container
    docker exec -it container_name sh
  8- Watch the logs
    docker logs -d container_id

2-Volumes

  1- Volume mount: Think of a volume mount as an opaque bucket of data. Docker fully manages the volume, including the storage location on disk. You only need to remember the name of the volume.
  
  2- Bind mount: It lets you share files between host and containers, this is really cool, just like magic. Data will not persists between container restarts.


  Basic Volume commands

  1- Create a volume mount
    docker volume create volume-name
  2- Attach/Mount that volume with the docker container
    Use the mount flag : --mount type=volume,src=volume_name,target=container/path
  3- Bind mount example : --mount type=bind,src="$(pwd)",target=/app


Rough notes



docker run -dp 127.0.0.1:3000:3000 \
-w /app --mount type=bind,src="$(pwd)",target=/app \
node:18-alpine \
sh -c "yarn install && yarn run dev"


docker run -d \
--network todo-app  --network-alias mysql \
-v todo-mysql-data:/var/lib/mysql \
-e MYSQL_ROOT_PASSWORD=secret \
-e MYSQL_DATABASE=todos \
mysql:8.0


docker run -dp 127.0.0.1:3000:3000 \
  -w /app -v "$(pwd):/app" \
  --network todo-app \
  -e MYSQL_HOST=mysql \
  -e MYSQL_USER=root \
  -e MYSQL_PASSWORD=secret \
  -e MYSQL_DB=todos \
  node:18-alpine \
  sh -c "yarn install && yarn run dev"
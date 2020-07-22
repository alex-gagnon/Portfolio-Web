# Use to clean up docker images and volumes
docker rmi $(docker images -a -q)
docker volume prune --force
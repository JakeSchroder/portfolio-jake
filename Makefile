# General Use commands
prune: # remove all unused images
	docker image prune -a

# Development commands
down-dev:
	docker-compose -f compose-dev.yaml down
start-dev:
	docker-compose -f compose-dev.yaml up -d
build-dev:
	docker-compose -f compose-dev.yaml up -d --no-deps --build

# Production commands
down-prod:
	docker-compose -f compose-prod.yaml down
start-prod:
	docker-compose -f compose-prod.yaml up -d
build-prod:
	docker-compose -f compose-prod.yaml up -d --no-deps --build
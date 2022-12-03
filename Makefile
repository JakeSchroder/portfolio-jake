down-dev:
	docker-compose -f compose-dev.yaml down
down-prod:
	docker-compose -f compose-prod.yaml down

# Development commands
start-dev:
	docker-compose -f compose-dev.yaml up -d
build-dev:
	docker-compose -f compose-dev.yaml up -d --no-deps --build

# Production commands
start-prod:
	docker-compose -f compose-prod.yaml up -d
build-prod:
	docker-compose -f compose-prod.yaml up -d --no-deps --build
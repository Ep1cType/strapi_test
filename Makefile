.PHONY: build-production
build-production: ## Build the production docker image.
	docker compose -f ./docker-compose.yml build

.PHONY: start-production
start-production: ## Start the production docker container.
	docker compose -f ./docker-compose.yml up -d

.PHONY: stop-production
stop-production: ## Stop the production docker container.
	docker compose -f ./docker-compose.yml down



.PHONY: build-develop
build-develop: ## Build the production docker image.
	docker compose -f ./docker-compose.dev.yml build

.PHONY: start-develop
start-develop: ## Start the production docker container.
	docker compose -f ./docker-compose.dev.yml up -d

.PHONY: stop-develop
stop-develop: ## Stop the production docker container.
	docker compose -f ./docker-compose.dev.yml down

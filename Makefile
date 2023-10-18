devserver:
	docker-compose up -d redis
	yarn dev

test:
	yarn test --passWithNoTests

stop:
	docker-compose down

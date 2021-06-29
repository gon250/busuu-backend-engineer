start:
	docker-compose up -d
	@npm run start&
	@npm run migrations:run

stop:
	docker-compose -f docker-compose.yml down;

app:
	docker-compose -f docker-compose.yml down;
	docker-compose -f docker-compose.yml up -d;
	docker compose logs -f nba-players-server;
bash:
	docker-compose run nba-players-server bash

.PHONY: laravel-vue down

laravel-vue:
	docker-compose up traefik laravel nginx_laravel -d

kill:
	docker-compose down
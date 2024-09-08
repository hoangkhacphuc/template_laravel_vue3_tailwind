ifneq (,$(wildcard .env))
	include .env
endif

.PHONY: fix
fix:
	./vendor/bin/pint -v

.PHONY: migrate
migrate:
	php artisan migrate --force

.PHONY: seed
seed:
	php artisan db:seed --force

.PHONY: test
test:
	php artisan test

.PHONY: env
env:
ifeq (,$(wildcard .env))
	# copy env
	cp .env.example .env
endif

.PHONY: npm-install
npm-install:
	npm install

.PHONY: setup
setup: env composer npm-install

.PHONY: composer
composer:
ifeq ($(APP_ENV),production)
	composer install --no-dev
else
	composer install
endif

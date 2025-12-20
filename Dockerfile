FROM php:8.2-cli

# Install system dependency
RUN apt-get update && apt-get install -y \
    git zip unzip libpq-dev \
    && docker-php-ext-install pdo pdo_pgsql

# Install composer
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

WORKDIR /var/www

COPY . .

RUN composer install --no-dev --optimize-autoloader

CMD php artisan serve --host=0.0.0.0 --port=8000

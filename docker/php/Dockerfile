FROM php:8.4.0RC4-fpm-alpine

# Install PHP extensions
RUN docker-php-ext-install mysqli pdo pdo_mysql sockets

# Set working directory
WORKDIR /var/www

USER $user
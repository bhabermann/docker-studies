FROM php:8.1-cli

WORKDIR /var/www

# Install zip lib
RUN apt update && \
    apt install libzip-dev -y && \
    apt clean && \
    docker-php-ext-install zip

# Install composer
RUN php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');" && \
    php composer-setup.php && \
    php -r "unlink('composer-setup.php');"

# Install Laravel
RUN php composer.phar create-project --prefer-dist laravel/laravel laravel

# Will always be executed
# Start laravel server
ENTRYPOINT [ "php", "laravel/artisan", "serve" ]

# May be replaced with commands in command line
# Enable laravel to be accessed by host
CMD [ "--host=0.0.0.0" ]
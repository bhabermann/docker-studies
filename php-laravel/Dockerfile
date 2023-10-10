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

# php -r "if (hash_file('sha384', 'composer-setup.php') === 'e21205b207c3ff031906575712edab6f13eb0b361f2085f1f1237b7126d785e826a450292b6cfd1d64d92e6563bbde02') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"

# Install Laravel
RUN php composer.phar create-project --prefer-dist laravel/laravel laravel

ENTRYPOINT [ "php", "laravel/artisan", "serve" ]

CMD [ "--host=0.0.0.0" ]
FROM php:7.4-fpm

# Set working directory
WORKDIR /usr/src/app

RUN docker-php-ext-install pdo_mysql
RUN docker-php-ext-install mysqli
RUN docker-php-ext-enable mysqli

COPY . .

EXPOSE 9000

CMD [ "php-fpm" ]
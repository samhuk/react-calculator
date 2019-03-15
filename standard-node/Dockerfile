FROM node:10-alpine

# packages
RUN apk add --update --no-cache \
    nginx \
    bash \
    supervisor

# config
COPY /config/nginx.conf /etc/nginx/nginx.conf
COPY /config/supervisord.conf /etc/supervisord.conf

EXPOSE 80
CMD ["/usr/bin/supervisord", "-c", "/etc/supervisord.conf"]
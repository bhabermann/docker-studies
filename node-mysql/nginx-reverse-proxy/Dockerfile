FROM nginx:1.25.0-alpine

# Replace default.conf with nginx.conf
RUN rm /etc/nginx/conf.d/default.conf
COPY default.conf /etc/nginx/conf.d

ENTRYPOINT ["/docker-entrypoint.sh"]

EXPOSE 80

STOPSIGNAL SIGQUIT

CMD ["nginx", "-g", "daemon off;"]
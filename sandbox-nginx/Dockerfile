# Stage: 0 Step up nginx
FROM nginx:1.21.3

RUN mkdir /usr/share/nginx/ag-legaspi.com
COPY ./frontend /usr/share/nginx/ag-legaspi.com/frontend
COPY ./nginx.conf /etc/nginx/nginx.conf
VOLUME ./nginx.conf:/etc/nginx/nginx.conf

EXPOSE 80
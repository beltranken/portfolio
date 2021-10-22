# Stage: 0 Step up nginx
FROM nginx:1.21.3-alpine

ARG PORTFOLIO_DIR=./portfolio
ARG WORK_DIR=/usr/share/nginx/ag-legaspi.com/frontend

RUN mkdir ${WORK_DIR}
WORKDIR ${WORK_DIR}

COPY ${PORTFOLIO_DIR} ${WORK_DIR}

EXPOSE 80

# Stage: 0 Step up nginx
FROM nginx:1.21.3-alpine

RUN mkdir /usr/share/nginx/ag-legaspi.com
COPY ./frontend /usr/share/nginx/ag-legaspi.com/
COPY ./nginx.conf /etc/nginx/nginx.conf
VOLUME ./nginx.conf:/etc/nginx/nginx.conf

EXPOSE 80
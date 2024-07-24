# FROM node:19

# # app la ten thu mua lam viec chinh trong docker
# WORKDIR home/app
# ENV bienmoitruong="hello vietnam"

# # copy toan bo file package.json  COPY <src> <dest> 
# #<dest>: Đường dẫn đích bên trong hệ thống tệp của container nơi bạn muốn sao chép các tệp hoặc thư mục.
# #<src>: Đường dẫn đến tệp hoặc thư mục trên hệ thống tệp cục bộ mà bạn muốn sao chép vào image Docker.
# # ./ đại diện cho home/app tùy vào WORKDIR
# COPY package*.json ./ 
# COPY package-lock.json ./

# # khi RUN npm i / trong thu muc home/app se tai ve node_modules

# RUN npm install

# EXPOSE 3000


# CMD [ "npm","run","dev" ]


FROM node:19

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install


COPY . .

#RUN npm run build
# co the build hoac khong build

EXPOSE 8889

CMD ["npm","run","dev","--","--host"]
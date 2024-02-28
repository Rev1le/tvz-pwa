FROM node:latest

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm i

COPY ../ ./

RUN npm run build

#RUN mv ./dist/pwa/assets ./dist/assets

EXPOSE 85:80

CMD ["npm", "run", "preview"]
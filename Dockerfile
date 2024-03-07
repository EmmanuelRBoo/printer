FROM node:20

COPY . .

RUN yarn

RUN yarn build

RUN yarn prisma migrate deploy

CMD [ "yarn", "start" ]
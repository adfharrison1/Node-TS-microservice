FROM node:18

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . .

ENV PORT=3000

RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]

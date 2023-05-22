FROM alpine:3.18

RUN apk add --no-cache nodejs=~18.16 yarn=~1.22

WORKDIR /app

COPY package.json .
COPY yarn.lock .

RUN yarn install --frozen-lockfile && \
    yarn cache clean

COPY . .

RUN yarn build

ENV HOST 0.0.0.0
ENV PORT 3000

EXPOSE 3000

CMD ["node", ".output/server/index.mjs"]

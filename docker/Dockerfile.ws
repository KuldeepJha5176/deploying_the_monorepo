FROM oven/bun:1

WORKDIR /usr/src/app

## Can you optimise this?
COPY . .

RUN bun install

RUN bun run generate:db

EXPOSE 8080

CMD ["bun", "start:ws"]
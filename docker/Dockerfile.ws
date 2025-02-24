FROM oven/bun:1.2.2

WORKDIR /usr/src/app




COPY . .

RUN bun install
RUN bun run db:generate


EXPOSE 8000

CMD ["bun", "run", "start:ws"]
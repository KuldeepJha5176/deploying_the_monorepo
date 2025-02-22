FROM oven/bun:1.2.2

WORKDIR /app

COPY ./packages ./packages
COPY ./bun.lockb ./bun.lockb
COPY .package.json ./package.json
COPY .package-lock.json ./package-lock.json
COPY .turbo.json ./turbo.json



COPY apps/ws-server ./apps/ws-server

RUN bun install
RUN bun run db:generate


EXPOSE 8000

CMD ["bun", "run", "start:ws"]
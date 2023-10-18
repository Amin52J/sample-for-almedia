# Aroundhome public-partner-profiles: FrontEnd

## Setup & Launch

### Development

```
    - yarn
    - yarn dev
```

This application uses Redis to cache Auth tokens. In order to simplify the development environment setup a **Makefile** below has been provided:

##### Makefile

- Use `make devserver` or only `make` to run the redis in Docker and the application locally without Docker.
- Use `make stop` to stop the redis container.
- If you choose to run the app and redis both in Docker, i.e., with `docker-compose up development`, make sure to set `NEXT_CACHE_REDIS_URL=//redis:6379` in `.env.development`.

### Production

```
    - yarn
    - yarn build
    - yarn start
```

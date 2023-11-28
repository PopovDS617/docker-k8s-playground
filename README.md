## DOCKER BUILD

## DOCKER RUN

## VOLUMES

## ARG & ENV

- ENV is runtime
- ARG is build-time

> _ENV example_

```Dockerfile
    ENV PORT 80

    EXPOSE $PORT
```

> _ARG example_

```Dockerfile
    ARG DEFAULT_PORT 80

    ENV PORT $DEFAULT_PORT

    EXPOSE $PORT

```

```

```

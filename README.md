# Node.js - RESTful API

## Init Project

```sh
pnpm init
pnpm add -D typescript
pnpm add @types/node

npx tsc --init --rootDir src --outDir build \
--esModuleInterop --resolveJsonModule --lib es6 \
--module commonjs --allowJs true --noImplicitAny true

echo "console.log('Hello world!');" > ./src/index.ts

# build
pnpm tsc

# OR
pnpm add -D ts-node nodemon
```

Add a nodemon.json config.

```json
{
  "watch": ["src"],
  "ext": ".ts,.js",
  "ignore": [],
  "exec": "pnpm ts-node ./src/index.ts"
}
```

./package.json

```json
{
  "scripts": {
    "start:dev": "pnpm nodemon"
  }
}
```

## Adding Api

```sh
pnpm add express @types/express
```

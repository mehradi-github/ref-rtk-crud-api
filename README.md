# Node.js - RESTful API

## Init Project

```sh
pnpm init
pnpm add -D typescript
pnpm add @types/node

npx tsc --init --rootDir src --outDir build \
--esModuleInterop --resolveJsonModule --lib es6 \
--module commonjs --allowJs true --noImplicitAny true
```

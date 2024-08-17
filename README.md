# 概要

typescriptの実行環境

# 環境構築

```
docker compose up -d
```

# tsファイルの実行

```
docker compose exec ts-app bash
```

```
cd lib/
npx ts-node hello.ts 
```
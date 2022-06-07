# pnpm add
> pnpm add add-one --workspace --filter add-two

```
"scripts": {
    "preinstall": "npx only-allow pnpm"
  }
```

# 全局的公共依赖包
pnpm install react -w

# 全局的公共开发依赖包
pnpm install rollup -wD

--filter 参数跟着的是package下的 package.json 的 name 字段，并不是目录名

# お願い
`yarnを使ってください。

# Team Blog Hub

ブログのRSSのURLを登録することで、チームメンバーの投稿を一覧にまとめて表示します。Zenn、Qiita、Medium、note、はてなブログなど、RSSフィードを取得できるサイトであれば、メンバーは好きな場所に投稿できます。

詳しくは下記の記事をご覧ください。

[チーム個々人のテックブログをRSSで集約するサイトを作った →](https://zenn.dev/catnose99/articles/cb72a73368a547756862)

## Demo
https://team-blog-hub.vercel.app

## Development
```bash
$ yarn install
$ yarn build
$ yarn dev
```
## ESlint
```bash
$ yarn lint
```
Next.jsのESLintに関するドキュメント:https://nextjs.org/docs/basic-features/eslint

- サイトの基本設定は`site.config.ts`で行います。
- メンバーのプロフィールやRSSの登録は`members.ts`で行います。
- 配色を変更するには`src/styles/variables.scss`を書き換えます。
- ロゴなどの画像を変更するには`public`内のファイルを置き換えます。

その他、ご自由にコードを書き換えてください。

## Deployment
VercelやNetlifyにデプロイすることを推奨します。`npm run build`（or `yarn build`）を実行することで、RSSからの投稿データの取得とサイトのビルドが行われます。1日に1回などの頻度で自動デプロイするのが良いかもしれません。

## Licence
MIT

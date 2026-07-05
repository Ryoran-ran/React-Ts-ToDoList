# ToDo List

ReactとTypeScriptで作成した、ブラウザ上で利用できるToDoリストです。
タスクと表示設定は`localStorage`に保存されるため、ページを再読み込みしても状態が保持されます。

[ToDoリスト](https://ryoran-ran.github.io/React-Ts-ToDoList/)

## 主な機能

- タスクの追加
- タスク内容の編集
- タスクの削除
- 完了・未完了状態の切り替え
- すべて・未完了・完了による絞り込み
- タスク総数・未完了数・完了数の表示
- タスクと表示設定のローカル保存

## 使用技術

- React 19
- TypeScript
- Vite
- CSS
- Web Storage API（`localStorage`）

## セットアップ

### 必要な環境

- Node.js
- npm

### インストールと起動

```bash
npm install
npm run dev
```

起動後、ターミナルに表示されたURLをブラウザで開いてください。

## コマンド

```bash
# 開発サーバーを起動
npm run dev

# 本番用にビルド
npm run build

# ESLintを実行
npm run lint

# ビルド結果をローカルで確認
npm run preview
```

## ディレクトリ構成

```text
src/
├── hooks/
│   └── localstrage.ts  # localStorageの保存・読み込み処理
├── style/
│   └── style.css       # ToDoリスト固有のスタイル
├── type/
│   └── tasks.ts        # タスクと設定の型定義
├── App.tsx             # 画面表示とToDo操作
└── index.css           # アプリ全体の共通スタイル
```

## 今後の改善案

- コンポーネントとロジックの分割
- 入力値の検証強化
- 自動テストの追加
- レスポンシブ表示の改善

## ライセンス

このプロジェクトのライセンスは未設定です。

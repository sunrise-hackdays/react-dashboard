# Reactダッシュボードポートフォリオ

## 概要
このアプリは、React + Next.jsで構築したダッシュボードUIのサンプルです。  
通知一覧・詳細表示・グラフ表示など、実務に近い構成を意識して制作しました。  
ポートフォリオや業務UIのたたき台として活用できます。

## 使用技術
- Next.js
- React
- TypeScript
- CSS Modules
- Recharts
- Vercel（デプロイ）

## 機能
実務を想定した情報表示UI（通知・統計・詳細表示）を実装しています。

- 通知一覧の表示（未読・既読）
- 通知の詳細表示とハイライト
- ダッシュボード統計グラフ（円グラフ）
- レスポンシブ対応

## デモ
![UIイメージ](./public/screenshot.png)

## セットアップ方法
```bash
git clone https://github.com/sunrise-hackdays/react-dashboard.git  
cd react-dashboard  
npm install  
npm run dev

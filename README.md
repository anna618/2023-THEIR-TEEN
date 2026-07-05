# THEIR-TEEN

手機優先的 Vue 3 + Vite 靜態網站，可部署到 GitHub Pages。

## 開發

```bash
pnpm install
pnpm dev
```

## 建置

```bash
pnpm build
```

## 更換內容

- 首頁海報：替換 `public/assets/2023東山吉他-海報A3_(ol).jpg`
- 歌單圖片：替換 `public/assets/playlist/playlist-1.jpg` 和 `public/assets/playlist/playlist-2.jpg`
- 學生照片：放在 `public/assets/students/`
- 心得圖片：放在 `public/assets/reflections/`
- 學生資料：編輯 `src/data/students.ts`

學生頁使用 hash 路由，例如 `/#/students/amy`，適合直接部署在 GitHub Pages。

## GitHub Pages 發布流程

專案已包含 `.github/workflows/deploy.yml`，之後只要推送到 `main` 分支就會自動建置並發布。

第一次設定 GitHub repo 時：

1. 到 GitHub 建立一個空 repo。
2. 把本地專案 push 到該 repo 的 `main` 分支。
3. 到 repo 的 `Settings > Pages`，將 Source 設為 `GitHub Actions`。
4. 等 Actions 跑完後，即可在 GitHub Pages 網址預覽。

之後更新網站：

```bash
git add -A
git commit -m "Update site content"
git push
```

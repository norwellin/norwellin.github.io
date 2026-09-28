# 林沁融 — 中英文履歷網站

淡粉背景、莓果重點色、深墨色文字。使用原生 HTML / CSS / JavaScript，沒有套件安裝、建置程序或後端服務需求，可直接使用 GitHub Pages。

## 發布到 GitHub Pages

你的帳號已有公開且目前空白的 `norwellin.github.io` 儲存庫（2026-09-28 檢查）。

1. 開啟 https://github.com/norwellin/norwellin.github.io 並登入你的 GitHub 帳號。
2. 在空白儲存庫頁面點選「uploading an existing file」。若已有檔案，使用 Add file → Upload files。
3. 上傳**本資料夾內的內容**：`index.html`、`styles.css`、`content.js`、`app.js`、`assets/`、`.nojekyll` 與本說明。不要把 `resume-website` 當成外層資料夾上傳；`index.html` 必須位於儲存庫根目錄。不要上傳 ZIP 本身。
4. Commit changes，將檔案存入 `main`。
5. Settings → Pages → Build and deployment → Source 選 **Deploy from a branch**。
6. Branch 選 **main**，資料夾選 **/(root)**，按 Save。
7. 等待 Pages 部署完成，以 Settings → Pages 顯示的網址確認結果。你的個人網站網址應為 **https://norwellin.github.io/**。

如果使用一般儲存庫，例如 `resume`，網址則是 `https://norwellin.github.io/resume/`。網站已使用相對資源路徑，也適用這種部署方式。

官方操作說明：https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## 本機預覽

直接以瀏覽器開啟 `index.html` 即可。也可在此資料夾執行：

```sh
python -m http.server 8765 --bind 127.0.0.1
```

接著開啟 http://127.0.0.1:8765/ 。

## 修改履歷

主要修改 `content.js`；每段中英文文字分別寫在 `zh`、`en`。

| 內容 | 修改位置 |
| --- | --- |
| 個人照片 | 將照片放入 `assets/portrait.jpg`，`PROFILE.portrait` 設成 `'./assets/portrait.jpg'` |
| CV 下載 | 將 CV 放入 `assets/CV.pdf`，`PROFILE.cv` 設成 `'./assets/CV.pdf'` |
| LinkedIn / GitHub / 104 | `PROFILE.linkedin`、`PROFILE.github`、`PROFILE.job104` |
| 預留個人介紹 | `PROFILE.introduction.zh` 與 `.en` |
| 專案內容 / 個人分工 | `PROJECTS` 中對應專案的各個欄位，個人分工為 `contribution` |
| 原始碼連結 | 各專案的 `source`；空字串表示不顯示 |
| 技能 | `SKILLS` |
| 學歷 | `EDUCATION` |
| 顏色與排版 | `styles.css` |

未放入照片和 CV 前會顯示待補文字；不會連到不存在的檔案。104 依照你的要求留空。CV 路徑一旦填寫，請一起上傳對應檔案。

## 內容來源與待補項目

- 依據「網頁製作描述.odt」與 HFT、TTU 附件整理，共 12 個專案。
- Dibuco 三份報告整合成一個專案，避免把同一項合作重複列為不同專案。
- 專案圖片取自提供的文件；語音 API 使用依報告整理的流程示意。
- 已連結經公開儲存庫檔案核對的 TestingRecorder、HFT_Database_System、game-programming 原始碼。
- 未提供的個人照片、CV、個人介紹與部分團隊分工保留待補；沒有推定職稱、工作經歷或其他證照。
- 論文數據、CNN 準確率、ETL 測試成果保留原報告的測試範圍與限制。
- `assets/SOURCES.md` 記錄各圖片的來源位置，方便往後更新。
- 本交付包沒有包含原始論文、完整報告、帳號密碼或其他原始資料夾。

網站支援中英文切換、語言偏好記憶、桌面右側導覽、手機底部導覽、專案詳情展開、鍵盤操作與減少動畫偏好。

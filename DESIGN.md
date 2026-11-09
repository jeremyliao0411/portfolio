# DESIGN.md：作品集「捲動說故事」專案頁的規格

最後更新：2026-11-03（PST）
範本：`/tsmc`（live：https://jeremyliao.vercel.app/tsmc，commit 92f05d7）
原始檔：`~/Jeremy/30-職涯/02-作品集專案/TSMC（Project 2）/notebooks/builders/tsmc-scrolly/template.html` + `data.json`
第二個專案：`/mlb`（commit 913db0c），原始檔 `~/Jeremy/30-職涯/02-作品集專案/portfolio-builders/mlb-scrolly/`（`build_data.py` → `data.json`；`head.css.part` + `body.part` + 推圖 script → `template.html`）。之後的專案原始檔也放 `~/Jeremy/30-職涯/02-作品集專案/portfolio-builders/<專案>/`，不要放進公開的分析 repo。

這份是**第一版就能用的規格**。換一個專案（MLB、之後的任何分析）時，照這份做：換內容、換資料，**版面、字體、顏色、動態、測試方法都不改**。

---

## 0. 一句話定位

深色、安靜、像 Linear / Stripe 的分析報告頁。左邊是故事（一段一段讀），右邊是一張**固定住的圖表**，讀到哪一段，圖就換到那一段要講的狀態。故事轉折的地方，用一整頁寬的「moment」把重點數字打出來。

- 大膽程度 ≈ 6/10：高級、不搶戲。只有 1 個強調色。
- 讀者：台灣的招募官、hiring manager。2 分鐘內要看懂「問題 → 我怎麼做 → 答案」。

---

## 1. 頁面結構（由上到下）

| 區塊 | class | 內容 |
|---|---|---|
| 網站 header | `.site-header` | 跟主站同一條導覽列（半透明 + blur） |
| 開場 | `.hero` | 大標題 = 這個專案的問題；一行副標 |
| 答案先講 | `.answer-strip` | 3–4 個關鍵數字（數字用 display 字體 + accent 色，說明用 mono） |
| 故事 | `section.scrolly#story` | 左 `.steps`、右 `aside.stage-panel`（固定的圖） |
| 結尾 | `.closing` | 限制、資料來源、GitHub 連結 |

故事區裡面只有 3 種東西：

1. **`.stage-break`**：章節標題（Stage 1、2、3…）。`min-height: 40vh`，字放在下方。
2. **`.step`**：一段故事。`data-chart="<圖的名字>"` + 可選的 `data-state="<n>"`，決定右邊的圖顯示什麼。
3. **`.moment`**：整頁寬的重點時刻，**整頁只放 2 個**，放在故事的 2 個轉折點（例：「模型其實只解釋 3%」、「這個錯的代價是 5 倍」）。

### 故事順序（每個專案都照這個走）

1. 問題是什麼、為什麼重要（商業語言）
2. 第一版答案（看起來不錯）
3. **轉折 1（moment）**：第一版哪裡有問題
4. 我怎麼修（為什麼選這個方法，像 business analyst 解釋給主管聽）
5. **轉折 2（moment）**：修完之後的代價或取捨
6. 最終答案 + 數字
7. 限制（誠實講模型解釋不到的部分）

---

## 2. 顏色（只用這些 token）

```css
:root {
  color-scheme: dark;
  --bg: #07080b;          /* 頁面底色，近黑 */
  --panel: #0d0f14;       /* 圖表卡片底色 */
  --fg: #e3e7ed;          /* 內文 */
  --ink: #f3f5f8;         /* 標題、重點數字 */
  --ink-2: #c2c8d1;       /* 次要文字 */
  --muted: #9aa3b0;       /* 軸、說明、來源 */
  --rule: #1d2129;        /* 細分隔線 */
  --rule-strong: #2a2f39; /* 卡片邊框 */
  --accent: #8b9cff;      /* 唯一強調色（periwinkle 長春花藍） */
  --flag: #e3b341;        /* 警告／轉折／「錯了」——整頁少量使用 */
}
```

- **只有 1 個強調色** `--accent`。`--flag`（琥珀色）只用在「這裡有問題」的地方（moment 標題的關鍵字、錯過的方向）。
- 圖表的系列顏色從這幾個來：我的估計 = `--accent`；官方／基準 = `--ink`（白、粗線或粗 bar）；範圍帶 = `rgba(139,156,255,.24)`；第 3 類 = `--muted` 或 `--flag`。超過 3 類 → 先用 dataviz skill 的 `validate_palette.js --mode dark` 跑過再用。
- 文字一律用文字 token（`--ink` / `--ink-2` / `--muted`），**不用系列色當文字顏色**。
- `::selection`、`:focus-visible` 都用 accent。

**禁止**：橘色當強調色（像 Claude 的品牌色）、任何公司品牌色（例：台積電紅）、漸層大色塊、彩虹配色。

---

## 3. 字體

| 用途 | token | 字體 | 設定 |
|---|---|---|---|
| 大標題、章節、數字 | `--f-display` | Archivo（可變寬度） | `font-stretch: 108–122%`，`font-weight: 650–800` |
| 內文 | `--f-body` | Source Serif 4 | 18px / 1.6（手機 17px） |
| 標籤、軸、圖例、來源、算式 | `--f-mono` | IBM Plex Mono | 12.5–15px，tag 用大寫 + `letter-spacing: .06em` |
| 導覽列、moment 的列名 | `--f-ui` | Geist 500/600（本機 woff2） | 跟主站一致 |

字級對照（桌機）：

- hero 標題：Archivo 800，stretch 118%
- `.stage-break h2`：800，stretch 122%，`clamp(30px, 4vw, 44px)`
- `.step h2`：700，stretch 112%，30px；`.step h3`：650，21px
- `.tag`：mono 14.5px、大寫、accent 色
- `.chart-title`：650，19px；`.chart-sub`：mono 13.5px muted
- `.legend`：mono 14px；`.source`：mono 12.5px muted
- moment 標題 `.m-head`：800，stretch 116%，`clamp(30px, 4.2vw, 50px)`，`max-width: 22ch`
- moment 數字 `.m-num`：800，34px，`tabular-nums`

數字一律 `font-variant-numeric: tabular-nums`。

---

## 4. 版面

- 內容寬度：`.wrap { max-width: 1180px; }`，左右 padding 至少 16px（含 safe-area）。
- 故事區：`.scrolly { grid-template-columns: minmax(0,5fr) minmax(0,7fr); gap: 48px; }` → 左文 5、右圖 7。
- 固定圖表：`.stage-panel { position: sticky; top: calc(env(safe-area-inset-top,0px) + 6vh); will-change: transform; }`
- 圖表卡片：`figure { background: var(--panel); border: 1px solid var(--rule-strong); border-radius: 4px; padding: 20px 20px 16px; }`
- `.step`：`min-height: 70vh`，沒讀到時 `opacity: .38`，讀到（`.is-active`）= 1，`transition: opacity .35s`。
- `.steps` 底部留 `padding-bottom: 30vh`，最後一段才能捲到中間。
- 圓角一律 4px（小色塊 3px）。不用大圓角、不用陰影卡片。

### moment（整頁寬重點）

```css
.moment {
  position: relative; z-index: 3;
  width: calc(240% + 48px);   /* 從左欄撐滿到右欄 = 5fr + gap + 7fr */
  min-height: 100vh; padding-block: 12vh;
  background: var(--bg); border-block: 1px solid var(--rule);
}
.m-in { width: min(940px, 100%); margin-inline: auto; display: grid; gap: 40px; }
```

- 內容 = 1 句大標題 + 2–3 列「名稱 / 長條 / 數字」+ 1 行 mono 註解。
- 長條只有 2 種：`.meter`（比例，例：R² 3% vs 78%）和 `.blocks`（倍數，例：5 格 = 5 倍）。
- 一個 moment 只講 1 個數字對比。

---

## 5. 捲動邏輯（最容易出錯的地方）

### 5.1 哪一段是「現在」

用 IntersectionObserver 看哪個 `.step` / `.stage-break` 在畫面中間：

- 桌機：`rootMargin: '-48% 0px -48% 0px'`（畫面正中間一條線）
- 手機：`rootMargin: '-72% 0px -20% 0px'`（圖在上面，線放在下方文字區）

變成「現在」的那段加 `.is-active`，然後依照 `data-chart` / `data-state` 換圖。

### 5.1b 直接跳到某個位置（End 鍵、往回捲到底、重新整理）

IntersectionObserver 只在「穿過中線」時觸發；一次跳很遠（End 鍵、重新整理停在頁中間）時，中線上可能沒有任何一段，圖會停在第一個狀態（11/3 MLB 頁反向測試抓到）。修法（在 `/mlb` 的 activation IIFE 裡）：

- 開頁時先找「頂部在畫面一半以上的最後一段」當起始狀態。
- `load` 和 `scrollend` 時跑一次 `sync()`（不支援 `scrollend` 就用 scroll + 160ms debounce）：有 moment 在畫面上就跳過；不然把「頂部在 50%（手機 80%）以上的最後一段」交給 `__lead`。

新專案從 `/mlb` 的 `body.part` 複製這段。

### 5.2 moment 經過時，圖要被「推走」，不是被「藏起來」

舊做法（藏起來）會出現「moment 過了，圖區一片空白」的問題（11/3 Jeremy 抓到）。現在的做法：

- moment 從下面上來 → 固定的圖**被往上推**，圖的底部永遠跟 moment 頂部保持 32px（手機 0）。
- moment 往上離開 → 圖**從 moment 底下滑回來**，而且滑回來時就已經換成「moment 後面那一段」的狀態（`window.__lead`），不會先閃一下舊的圖。
- 用 `transform: translate3d(0, dy, 0)` 移動，`scroll` 事件 passive。

程式碼直接從 `template.html` 複製（搜尋 `window.__lead` 和 `.moment` 那段 IIFE），不要重寫。

### 5.3 手機（≤ 860px）

- 單欄；圖在上面固定（`top: 0`，`z-index: 2`，底色 `--bg`，上下 padding 8px），文字在下面捲。
- 圖的高度**每一個狀態都要一樣**，不然下面的文字會跳：`.legend { min-height: 84px; }`、`.chart-box { aspect-ratio: 16/11; }`。
- 隱藏 `.chart-sub` 和 `.source`（空間不夠，來源放結尾）。
- moment 後面那一段要留出圖的高度：`.moment + .step, .moment + .stage-break { margin-top: var(--ph); }`，`--ph` 由 JS 量圖的高度填入。
- moment 改成 `width: auto; min-height: 100svh;`，列改成「名稱一行、長條 + 數字一行」。

---

## 6. 圖表規則

先載入 **dataviz skill**，照它的流程做。重點：

- 圖表用**手寫 SVG**（資料從 `data.json` 進來），不用截圖 PNG。這樣深色、字體、動態才會一致。
- **一個軸**。絕不用雙 y 軸。兩個不同單位的量 → 兩張圖或換成同基準。
- **≥ 2 個系列一定有圖例**，≤ 4 個系列另外在線尾直接標名字（`svg .lbl`，文字加 `--panel` 色描邊 5px 避免壓到線）。
- 線 2px；點 ≥ 8px；bar 之間 2px 空隙；格線和軸要很淡（`--rule`）。
- 不在每個點上都標數字，只標重點（最後一點、轉折點）。
- 顏色只靠顏色辨識 = 不行：再加線型（實線／虛線）、粗細或直接標字。
- 圖的標題是一句結論（講這張圖證明了什麼），不是「Figure 3」。
- 每張圖換狀態時用淡入淡出（`.lyr` 的 opacity），不要整張重畫閃一下。

---

## 7. 動態

- 緩動曲線：`cubic-bezier(.16, 1, .3, 1)`（expo ease-out，快出慢停）。
- moment 的長條：進入畫面時從 0 長到目標值（meter 1.3–1.6s；blocks 一格一格 .55s，間隔 .25s）。
- **預設狀態 = 最終狀態**。只有 JS 有跑、而且使用者沒開「減少動態」時，才加 `.armed` 先縮回 0，再加 `.in` 長出來。
- `@media (prefers-reduced-motion: reduce)`：全部 transition 關掉，moment 直接顯示最終值。
- 不用 parallax、不用整頁滑動特效、不用自動播放。

---

## 8. 文字規則

- **第一人稱「I」**，像 business analyst 跟主管解釋：我發現什麼 → 為什麼選這個方法 → 結果代表什麼。不用死板的報告語氣。
- 每個數字都要對得上履歷和 `~/Jeremy/30-職涯/01-找工作/resume facts/<公司或專案>/`。不確定的數字不放。
- 比喻要跟資料同單位，不可以偷渡沒驗證過的原因。
- 草稿句子用 `.draft`（琥珀虛線框）標出來，給 Jeremy 確認後才拿掉框。他要能在面試時講出每一句。
- 限制要寫：觀察資料只能講關聯、模型解釋不到的部分、資料修正。

---

## 9. 禁止清單

- 不用晶片、晶圓、die、台北 101、貨櫃船、港口照片（Jeremy：「patronizing」）。
- 不用任何公司的品牌元素（台積電的紅、logo、字體）。
- 不用橘色強調色、不用白底 + Inter + 藍按鈕的通用模板感。
- 不在一個畫面堆很多照片。
- 不用雙 y 軸、不用彩虹色、不用 3D 圖。
- 不放賺賠、不放沒來源的句子。

---

## 10. 測試（每次改到捲動或版面都要跑）

**全部 headless，不要在 Jeremy 螢幕上開視窗。**

1. 本機先 build 成單一 html，用 `python3 -m http.server` 開在 127.0.0.1。
2. 用 headless Chrome（`~/Desktop/USC/Google Chrome.app`，`--headless=new --remote-debugging-port`），Node 26 內建 WebSocket 走 CDP。
3. 兩種尺寸：**1440×900 桌機**、**390×844 手機**（mobile 模擬）。
4. 從故事開始到結束，每 1/4 個螢幕高度 `scrollTo` 一次，等 650ms，截圖 + 記錄：圖的 transform、圖的位置、每個 moment 的位置、現在 active 的是哪一段、圖的標題。
5. **正向捲一次、反向捲一次**（反向最容易出 bug）。
6. 把截圖拼成 contact sheet 一次看完。檢查：
   - 圖有沒有空白、有沒有被 moment 蓋住
   - 圖的狀態跟左邊文字對不對得上
   - 手機上文字有沒有跳
   - 字有沒有壓到線、超出卡片

---

## 11. Build 和上線

1. 改 `template.html`（版面、圖）或 `data.json`（數字）。改之前先備份成 `template.before-<日期或事由>.html`。
2. 產生頁面：
   ```bash
   python3 -I -c "open('index.html','w').write(open('template.html').read().replace('__DATA__', open('data.json').read()))"
   ```
3. 複製到作品集：`public/<專案>/index.html`，`next.config.mjs` 加 rewrite（例：`/tsmc` → `/tsmc/index.html`）。
4. 作品集卡片（`app/content.js`）的封面用**深色**的圖（從頁面的某個圖表狀態 headless 截圖），不用白底圖。
5. `npm run build` → `npx next start -p 8815 -H 127.0.0.1` 本機看。
6. commit 用 Jeremy 的身分，**不加 Co-Authored-By**。
7. Jeremy 自己 push：`git -C ~/Jeremy/30-職涯/02-作品集專案/portfolio push origin main`，Vercel 自動上線。
8. curl 確認 live 頁 200 + 內容是新的。

---

## 12. 換新專案時的清單

- [ ] 故事照第 1 節的 7 步排好，標出 2 個轉折點 → 2 個 moment
- [ ] 數字全部對過 resume facts
- [ ] 每一段 step 對應一個圖的狀態（先列表，再寫程式）
- [ ] 複製 `/mlb` 的 builder（已含 5.1b 的修正），只換內容、資料、圖的程式
- [ ] 圖過 dataviz 的檢查（顏色、圖例、單一 y 軸）
- [ ] 第 10 節的測試：桌機 + 手機、正向 + 反向
- [ ] 深色封面圖
- [ ] Jeremy 確認第一人稱的每一句

---

舊檔說明：`.impeccable/brief-home.md` 描述的是晶圓方向，**已被否決**，以這份為準。

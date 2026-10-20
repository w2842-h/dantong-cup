# 「单通哥杯」成绩公示

一个纯静态的成绩公示页面：`index.html` + `data.js` + 若干截图，无后端、无依赖、无第三方脚本。

## 文件说明

| 文件 | 作用 |
|---|---|
| `index.html` | 页面结构、样式、表格渲染脚本 |
| `data.js` | 成绩数据与页面元信息（`META` / `SCORES`） |
| `origin.jpg` | 赛事起源截图 |
| `newrules.jpg` | 「新单通哥杯」新规则视频截图 |
| `intro-video.jpg` | 《单通哥传奇》视频截图 |
| `intro-account.jpg` | 单通哥当前账号名称截图 |

## 更新成绩

只改 `data.js` 中的 `window.SCORES` 数组，每个对象形如：

```js
{ char: "角色", cons: 2, weapon: "r1武器", element: "火", dps: 62366, note: "备注", driver: "驾驶员" },
```

保存后刷新页面即可，表格会自动按角色名与 DPS 排序。

## 本地预览

在该目录下执行 `python -m http.server 8000`，然后访问 <http://127.0.0.1:8000/>（直接双击 `index.html` 也能看，但 `data.js` 在部分浏览器下可能被拦截）。

## 发布

仓库根目录即为本目录内容，GitHub Pages 选择 `main` 分支、`/ (root)` 即可。

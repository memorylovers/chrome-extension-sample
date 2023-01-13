import addOutline from "./scripts/addOutline?script";

// タブが更新されたときにcontent scriptsを実行する
chrome.tabs.onUpdated.addListener((tabId, info, tab) => {
  // chromeの画面などの場合は、content scriptsを実行できないので、スキップ
  if (!tab.url || tab.url.startsWith("chrome://")) return;
  // 読み込みが完了していない場合は、スキップ
  if (info.status != "complete") return;

  chrome.scripting.executeScript({
    target: { tabId },
    files: [addOutline],
  });
});

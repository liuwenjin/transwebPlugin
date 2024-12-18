chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'getManifest') {
    sendResponse({ manifest: chrome.runtime.getManifest() });
    return true; // 必须返回 true 以表示异步响应
  }
});
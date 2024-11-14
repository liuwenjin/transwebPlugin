let callback = function (appName) {
  // 获取当前活动的标签页
  chrome.tabs.query({
    active: true,
    currentWindow: true
  }, (tabs) => {
    const activeTab = tabs[0].id;
    // 发送消息到 content script
    chrome.tabs.sendMessage(activeTab, {
      appName: appName
    });
  });
}

document.getElementById("ppt").addEventListener("click", (e) => {
  callback('ppt');
});

document.getElementById("knowledgeTree").addEventListener("click", (e) => {
  callback('knowledgeTree');
});
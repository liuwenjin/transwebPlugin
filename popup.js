let _callback = function (appName) {
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

let callback = function(btn, appName){
    btn.setAttribute('disabled', true);
    _callback(appName);
    setTimeout(()=>{
      btn.setAttribute('disabled', false);  
    }, 30000)
}

document.getElementById("cardNotes").addEventListener("click", (e) => {
  debugger
  callback(e.target, "cardNotes");
});

document.getElementById("knowledgeTree").addEventListener("click", (e) => {

  callback(e.target, "knowledgeTree");
});
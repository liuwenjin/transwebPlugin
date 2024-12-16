// content.js
let transweb = "https://transweb.cn";
let iframe = aiPluginTool.loadAiService(transweb);

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.appName) {
    let content = document.body.innerText;
    try {
       html2canvas(document.body).then((canvas) => {
         const iData = canvas.toDataURL("image/png");
         let d = {
           title: document.title,
           url: location.href,
           content: content,
           appName: request.appName,
           articleImg: iData
         }
         aiPluginTool.activateTask(iframe, d);
       }) 
    }
    catch(e) {
        let d = {
          title: document.title,
          url: location.href,
          content: content,
          appName: request.appName
        }
        aiPluginTool.activateTask(iframe, d);
    }
    
  }
});
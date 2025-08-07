chrome.tabs.onUpdated.addListener((tabId, tab) => {
  if(tab.url && tab.url.includes("youtube.com/watch")){//אחר כך לשנות את זה למה שייחודי לדף של הMODDLE
      const queryParameters = tab.url.split("?")[1];//ככה נשמור את הקובץ בצורה יחודית ועקבית
      const urlParameters = new  URLSearchParams(queryParameters)
      console.log(urlParameters); 
      chrome.tabs.sendMessage(tabId, {
        type: "NEW",
        videoId: urlParameters.get("v")
      })
    }
} )

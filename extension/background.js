(() => {
  chrome.browserAction.onClicked.addListener(() => {
    chrome.tabs.query({currentWindow: true}, tabs => {
      tabs.map(currentTab => {
        tabs.map(tab => {
          if (currentTab.id === tab.id) {
            return;
          }

          if (currentTab.url === tab.url) {
            chrome.tabs.remove(tab.id);
          }
        });
      });
    });
  });
})();

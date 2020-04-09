let element = document.getElementById("textarea");

element.onblur = () => chrome.storage.sync.set({ key: element.value });

chrome.storage.sync.get(["key"], (result) => {
  if (result.key) element.value = result.key;
});

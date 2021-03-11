var searchContextMenu = {
    "id": "search",
    "title": "Search Wikipedia",
    "contexts": [
        "selection"
    ]
};
browser.contextMenus.create(searchContextMenu);

browser.contextMenus.onClicked.addListener(searchContextMenuAction);

function searchContextMenuAction(info, tab){
    if(localStorage.getItem("language") == "" || localStorage.getItem("language") == null || localStorage.getItem("language") == undefined || localStorage.getItem("language") == 0){
        const url = "https://en.wikipedia.org/wiki/Special:Search?search=" + info.selectionText;
        browser.tabs.create({url: url});
        
    } else {
        const url = "https://" + localStorage.getItem("language") + ".wikipedia.org/wiki/Special:Search?search=" + info.selectionText;
        browser.tabs.create({url: url});
    }
}
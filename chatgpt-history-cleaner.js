async function removeHistory() {
    let links = document.querySelectorAll('ol > li > a');
    if (links.length === 0) {
        console.log('History deletion completed');
        return;
    }
    for (let i = 0; i < links.length; i++) {
       let link = links[i];
       link.click();
       await new Promise(r => setTimeout(r, 500));
       let buttons = link.querySelectorAll("div > button");
       if (buttons.length > 1) {
           buttons[1].click();
       }
       await new Promise(r => setTimeout(r, 500));
       Array.from(document.querySelectorAll('div[class="flex w-full gap-2 items-center justify-center"]')).filter(el => el.innerText === 'Delete').forEach(el => el.click());
    }
    removeHistory();
}
removeHistory();

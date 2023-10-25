async function removeHistory() {
  let conversations = document.getElementsByClassName('conversation');
  if (!conversations || conversations.length < 1) {
     console.log('History deletion completed');
     return;
  }

  let showMoreBtn = document.querySelector('button[data-test-id="show-more-conversations-button"]')
  if (showMoreBtn && !showMoreBtn.classList.contains('expanded-show-more-button')) {
     showMoreBtn.click()
  }


  for (let i = 0; i < conversations.length; i++) {
    let conversation = conversations[i];
    conversation.click();
    await new Promise(r => setTimeout(r, 500));
    document.querySelector('.conversation-actions-container.selected > .conversation-actions-menu-button > .mat-mdc-button-touch-target').click();
    document.querySelector('button[data-test-id="delete-button"]').click();
    document.querySelector('button[data-test-id="confirm-button"]').click();
    await new Promise(r => setTimeout(r, 500));
  }
  removeHistory();
}
removeHistory();
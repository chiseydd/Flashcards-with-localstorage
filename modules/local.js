function saveCards(){
    localStorage.setItem('cardLoc', document.querySelector('.con').innerHTML);
}

function saveDone(){
    localStorage.setItem('cardDone', document.querySelector('.cards__good').innerHTML);
}

export {saveCards, saveDone};
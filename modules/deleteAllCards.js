function deleteAllCards(){
    const deleteBtn = document.querySelector('.delCard');
    
    deleteBtn.addEventListener('click', () => {
        const cardsAll = document.querySelectorAll('.cards__area');
        for(let i = 0; i < cardsAll.length; i++){
            cardsAll[i].remove();
        }
        localStorage.clear();
    });
}

export default deleteAllCards;
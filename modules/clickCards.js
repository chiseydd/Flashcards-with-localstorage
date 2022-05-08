function cardClick(){
    const oneCard = document.querySelectorAll('.cards__area');

    for (let i = 0; i < oneCard.length; i++) {
        oneCard[i].onclick = function() {
            oneCard[i].classList.toggle('rotated');
        };
    };
}

export default cardClick;
import cardClick from './modules/clickCards';
import addCard from './modules/cardAdd';
import deleteAllCards from './modules/deleteAllCards';

window.addEventListener('DOMContentLoaded', function(){

    addCard();
    cardClick();
    deleteAllCards();
    
});
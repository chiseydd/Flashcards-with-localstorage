import cardClick from './clickCards';
import {saveCards, saveDone} from './local';
import {done, deleteCard} from './doneDeleteCard';

function addCard(){

    const fromStorage = localStorage.getItem('cardLoc'),
          storageDone = localStorage.getItem('cardDone');
    if(fromStorage){
        document.querySelector('.con').innerHTML = fromStorage;
        document.querySelectorAll('.cards__area').forEach(item => {
            item.classList.remove('rotated');  
        });   
    }
    if(storageDone){
        document.querySelector('.cards__good').innerHTML = storageDone;
        document.querySelectorAll('.end').forEach(item => {
            item.classList.remove('rotated');  
        });
    }
    
    const front = document.querySelector('.create__word'),
          back = document.querySelector('.create__answer'),
          submitBtn = document.querySelector('.add__card'),
          cardArea = document.querySelector('.con'),
          inputs = document.querySelector('.form');
    done();
    deleteCard();
    submitBtn.addEventListener('click', (e)=>{
        if(front.value == '' || back.value == ''){
            e.preventDefault();
            console.log('Пустая строка');
        }else{
            e.preventDefault();
        
            let word = front.value;
            let answ = back.value;
        
            let card = document.createElement('div');
            card.innerHTML = `
                <div class="card__front front side">
                    <p class="card__word">${word}</p>
                </div>
                <div class="card__back back side">
                    <p class="card__word">${answ}</p>
                    <img class="done__img" src="./images/done.png" alt="done">
                    <img class="delete__img" src="./images/delete.png" alt="delete">
                </div>`;
            card.classList.add('cards__area');
            cardArea.append(card);
            cardClick();
            done();
            deleteCard();
        }
        inputs.reset();
        saveCards();
        saveDone();
    });
}

export default addCard;
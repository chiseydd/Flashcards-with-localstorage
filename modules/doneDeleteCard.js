import {saveCards, saveDone} from './local';

function done(){
    const endBtn = document.querySelectorAll('.done__img'),
          endArea = document.querySelector('.cards__good');

    endBtn.forEach(item => {
        item.addEventListener('click', () =>{
            let parentDone = item.parentElement;
            parentDone.parentElement.remove();
            let parent = parentDone.parentElement;
            parent.classList.add('end');
            endArea.append(parent);
            item.classList.add('done');
            const doneElements = document.querySelectorAll('.done');
            doneElements.forEach(i => {
                i.classList.add('hide');
            });
            saveCards();
            saveDone();
        });
    });
}

function deleteCard(){
    const deleteBtn = document.querySelectorAll('.delete__img');
    deleteBtn.forEach(item => {
        item.addEventListener('click', () =>{
            let parentDelete = item.parentElement;
            parentDelete.parentElement.remove();
            saveCards();
            saveDone();
        });
    });
}

export {done, deleteCard};
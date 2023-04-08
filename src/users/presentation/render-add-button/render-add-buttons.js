import { showModal } from '../render-modal/render-modal';
import './render-add-buttons.css';

/**
 * 
 * @param {HTMLDivElement} element 
 * 
 */
export const renderAddButtons = (element) => {
    
    const fabButton = document.createElement('button');
    fabButton.innerText = '+';
    fabButton.classList.add('fab-button');
    

    element.append( fabButton );

    fabButton.addEventListener('click', () => {
        showModal();
    })

}
import { renderAddButtons } from "./presentation/render-add-button/render-add-buttons";
import { renderButtons } from "./presentation/render-buttons/render-buttons";
import { renderTable } from "./presentation/render-table/render-table";
import usersStore from "./store/users-store";
import { renderModal } from "./presentation/render-modal/render-modal";
import { saveUser } from "./use-cases/save-users";
import { User } from "./models/user";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const UsersApp = async ( element ) => {
    element.innerHTML = 'Loading...';

    await usersStore.loadNextPage();
    element.innerHTML = '';

    renderTable(element);
    renderButtons(element);
    renderAddButtons(element);
    renderModal(element, async( userLike ) => {
        const user = await saveUser( userLike );
        usersStore.onUserChange( user );
        renderTable();
    });
}
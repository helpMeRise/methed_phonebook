import storage from './modules/storage.js';
import * as control from './modules/control.js';
import {renderPhoneBook} from './modules/render.js';


{
  const init = (selectorApp, title) => {
    const app = document.querySelector(selectorApp);

    const {
      list,
      thead,
      logo,
      btnAdd,
      formOverlay,
      form,
      btnDel,
    } = renderPhoneBook(app, title);
    console.log(storage.getStorage('data'));

    //  Функционал
    const allRow = control.renderContacts(list, storage.getStorage('data'));
    const {closeModal} = control.modalControl(btnAdd, formOverlay);
    control.hoverRow(allRow, logo);
    control.deleteControl(btnDel, list);
    control.sort(thead, list);
    control.trSort(localStorage.getItem('sort'), list);
    control.formControl(form, list, closeModal, allRow, logo);
  };

  window.phoneBookInit = init;
}


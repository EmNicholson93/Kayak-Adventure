import makeKayaker from './make-kayaker.js';
import api from '../api.js';

const kayakerForm = document.getElementById('kayak');
kayakerForm.addEventListener ('submit', event => {
    event.preventDefault();

    const formData = new FormData(kayakerForm);
    const kayaker = makeKayaker(formData);
    api.signUp(kayaker);

    window.location = 'rivers.html';
});
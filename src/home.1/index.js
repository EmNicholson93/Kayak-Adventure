import makeKayaker from './make-kayaker.js';
import api from '../services/api.js';

const kayakerForm = document.getElementById('kayaker');
kayakerForm.addEventListener('submit', event => {
    event.preventDefault();

    const formData = new FormData(kayakerForm);
    const kayaker = makeKayaker(formData);
    api.signUp(kayaker);

    window.location = 'rivers.html';
});
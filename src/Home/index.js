import makeKayaker from './makeKayaker.js';

const kayakerForm = document.getElementById('choose-a-kayak');
kayakerForm.addEventListener ('submit', event => {
    event.preventDefault();

    const formData = new FormData(kayakerForm);
    const kayaker = makeKayaker(formData);
});
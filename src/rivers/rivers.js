import api from '../api.js';

const kayak = document.getElementById('kayak');
const name = document.getElementById('name');
const energy = document.getElementById('energy');
const integrity = document.getElementById('integrity');

const kayaker = api.getKayaker();

kayak.src = '/assets/' + kayaker.kayak + '.png';
name.textContent = kayaker.name;
energy.textContent = 'Energy: ' + kayaker.energy;
integrity.textContent = 'Kayak Integrity: ' + kayaker.integrity;
import api from '../services/api.js';

const name = document.getElementById('name');
const kayak = document.getElementById('kayak');
const energy = document.getElementById('energy');
const integrity = document.getElementById('integrity');

const user = api.getKayaker();

name.textContent = user.name;
kayak.src = '../assets/' + user.kayak + '.png';
energy.textContent = 'Energy: ' + user.energy;
integrity.textContent = 'Integrity: ' + user.integrity;
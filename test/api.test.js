import api from '../src/api.js';
const test = QUnit.test;

QUnit.module('apiTest');
api.storage = sessionStorage;

test('signUp saves and getKayaker returns', assert => {
    const expected = {
        name: 'eli',
        kayak: 'creeker',
        energy: '100',
        integrity: '100'
    };

    api.signUp(expected);
    const result = api.getKayaker();

    assert.deepEqual(result, expected);
});
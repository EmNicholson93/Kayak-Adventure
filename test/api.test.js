import api from '../src/services/api.js';
const test = QUnit.test;

QUnit.module('apiTest');
api.storage = sessionStorage;

test('signUp saves and getKayaker returns', assert => {
    //arrange
    const expected = {
        name: 'eli',
        kayak: 'creeker',
        energy: '100',
        integrity: '100'
    };
    //act
    api.signUp(expected);
    const result = api.getKayaker();
    //assert
    assert.deepEqual(result, expected);
});
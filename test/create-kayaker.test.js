import makeKayaker from '../src/home/make-kayaker.js';

const test = QUnit.test;
QUnit.module('formData test');

test('test to create kayaker', assert => {
    //arrange
    const formData = new FormData();
    formData.set('name', 'eli');
    formData.set('kayak', 'creeker');

    const expected = {
        name: 'eli',
        kayak: 'creeker',
        energy: '100',
        kayakIntegrity: '100'

    };

    //act
    const kayaker = makeKayaker(formData);
    //assert
    assert.deepEqual(kayaker, expected);
});
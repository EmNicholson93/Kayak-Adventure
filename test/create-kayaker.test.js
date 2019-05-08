import makeKayaker from '../src/home/make-kayaker.js';

const test = QUnit.test;
QUnit.module('make kayaker test');

test('test to create kayaker', assert => {
    //arrange
    const formData = new FormData();
    formData.set('name', 'eli');
    formData.set('kayak', 'creeker');

    const expected = {
        name: 'eli',
        kayak: 'creeker',
        energy: '100',
        integrity: '100'

    };

    //act
    const kayaker = makeKayaker(formData);
    //assert
    assert.deepEqual(kayaker, expected);
});
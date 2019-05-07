const test = QUnit.test;

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

function makeKayaker(formData) {
    const kayaker = {
        name: formData.get('name'),
        kayak: formData.get('kayak'),
        energy: '100',
        kayakIntegrity: '100'
    };
    return kayaker;
}
function makeKayaker(formData) {
    const kayaker = {
        name: formData.get('name'),
        kayak: formData.get('kayak'),
        energy: '100',
        integrity: '100'
    };
    return kayaker;
    console.log(kayaker, 'test');
}

export default makeKayaker;
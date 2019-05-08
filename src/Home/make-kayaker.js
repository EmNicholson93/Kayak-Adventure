function makeKayaker(formData) {
    const kayaker = {
        name: formData.get('name'),
        kayak: formData.get('kayak'),
        energy: '100',
        kayakIntegrity: '100'
    };
    return kayaker;
}

export default makeKayaker;
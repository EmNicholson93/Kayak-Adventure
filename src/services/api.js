const api = {
    storage: localStorage,

    signUp(kayaker) {
        const json = JSON.stringify(kayaker);
        api.storage.setItem('kayaker', json);
    },

    getKayaker() {
        const json = api.storage.getItem('kayaker');
        const kayaker = JSON.parse(json);
        return kayaker;
    }
};

export default api;
const axios = require("axios").default;

const api = axios.create({
    baseURL: 'https://b2c-catalog-gateway.c24.tech',
    // timeout: 1000
});

const CMSService = {
    getPageData: (data) => {
        return api.post(`/listing/v1/buy-used-car`, data);
    }
};

module.exports = {
    CMSService
}
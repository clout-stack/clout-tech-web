const axios = require('axios');

module.exports = {
    subscribe: {
        new(email) {
            return axios.put(`/api/subscribe`, {
                email: email
            });
        }
    }
};

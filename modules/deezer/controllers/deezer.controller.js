const axios = require("axios");

const deezerUrl = 'https://api.deezer.com'

async function search(request, response) {
    const query = request.query.q;
    const url = `${deezerUrl}/search?q=${query}`;

    try {
        const res = await axios.get(url);
        response.json(res.data);
    } catch (error) {
        response.status(error.response ? error.response.status : 500).json({
            error: "An error occurred",
        });
    }
}

async function getAlbums(request, response) {
    const id = request.query.id;
    const url = `${deezerUrl}/artist/${id}/albums`;

    try {
        const res = await axios.get(url);
        response.json(res.data);
    } catch (error) {
        response.status(error.response ? error.response.status : 500).json({
            error: "An error occurred",
        });
    }
}

async function getTracks(request, response) {
    const id = request.query.id;
    const url = `${deezerUrl}/artist/${id}/top`;

    try {
        const res = await axios.get(url);
        response.json(res.data);
    } catch (error) {
        response.status(error.response ? error.response.status : 500).json({
            error: "An error occurred",
        });
    }
}

async function getArtist(request, response) {
    const id = request.query.id;
    const url = `${deezerUrl}/artist/${id}`;

    try {
        const res = await axios.get(url);
        response.json(res.data);
    } catch (error) {
        response.status(error.response ? error.response.status : 500).json({
            error: "An error occurred",
        });
    }
}

module.exports = {
    search,
    getArtist,
    getTracks,
    getAlbums
};

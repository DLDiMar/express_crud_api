const TVShow = require('./tvshows.controller');

module.exports = (router) => {
    router.post('/create', TVShow.createTvShow);
    router.get('/get', TVShow.getTvShows);
    router.get('/get/:name', TVShow.getTvShow);
    router.post('/update/:id', TVShow.updateTvShow);
    router.delete('/remove/:id', TVShow.deleteTvShow);
}
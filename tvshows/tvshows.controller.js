const TVShow = require('./tvshows.dao');

exports.createTvShow = (req, res) => {
    const tv_show = {
        id: req.body.id,
        url: req.body.url,
        name: req.body.name,
        genres: req.body.genres,
        premiered: req.body.premiered,
        ended: req.body.ended,
        image: {
            medium: req.body.medium,
            original: req.body.original
        },
        summary: req.body.summary
    };

    TVShow.create(tv_show, (err, tv_show) => {
        if(err) {
            res.json({
                error: err
            })
        }
        res.json({
            message: "TV Show successfully created!"
        })
    })
}

exports.getTvShows = (req, res, next) => {
    TVShow.get({}, (err, tv_show) => {
        if(err) {
            res.json({
                error: err
            })
        }
        res.json({
            tv_show: tv_show
        })
    })
}

exports.getTvShow = (req, res, next) => {
    TVShow.getByName({name: req.params.name}, function(err, tv_show) {
        if(err) {
            res.json({
                error: err
            })
        }
        res.json({
            tv_show: tv_show
        })
    })
}

exports.updateTvShow = (req, res, next) => {
    const tv_show = {
        id: req.body.id,
        url: req.body.url,
        name: req.body.name,
        genres: req.body.genres,
        premiered: req.body.premiered,
        ended: req.body.ended,
        image: {
            medium: req.body.medium,
            original: req.body.original
        },
        summary: req.body.summary
    };

    TVShow.update({id: req.params.id}, tv_show, (err, tv_show) => {
        if(err) {
            res.json({
                error: err
            })
        }
        res.json({
            message: "TV Show successfully updated."
        })
    })
}

exports.deleteTvShow = (req, res, next) => {
    TVShow.delete({id: req.params.id}, (err, tv_show) => {
        if(err) {
            res.json({
                error: err
            })
        }
        res.json({
            message: "Hero successfully deleted."
        })
    })
}
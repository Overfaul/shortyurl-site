const Url = require('../models/Url');
const shortid = require('shortid');
const randomstring = require("randomstring");
const validUrl = require('valid-url');

class urlController {
    // Creates unique short URL
    async createShortUrl(req, res) {
        try {
            const { origurl } = req.body
            if(validUrl.isUri(origurl)){
                const wpath = randomstring.generate({
                    length: 5,
                    charset: 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz1234567890_'
                });
                const shorturl = `localhost:3000/${wpath}`
                const response = new Url({ origurl: origurl, shortcode: wpath, shorturl: shorturl, expireAt : new Date()})
                await response.save()
                res.json(response)
            }else{
                res.json({error : 'Wrong URL'})
            }

        } catch (error) {
            console.log(error)
        }
    }
    // using of shorten URL
    async useShortUrl(req, res) {
        try {
            const url = await Url.findOne({ shortcode: req.params.code})
            if (url) {
                return res.redirect(url.origurl)
            }
            else {
                return res.status(404).json('No URL Found')
            }

        }
        catch (err) {
            console.error(err)
            res.status(500).json('Server Error')
        }
    }
}


module.exports = new urlController()
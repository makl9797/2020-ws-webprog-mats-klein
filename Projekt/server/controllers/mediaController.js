const media = require('../models/mediaModel')

exports.create_Media = async function (req, res) {
    const media = new media({
        media_type: req.params.media_type,
        url: req.body.url,
        preview_url: req.body.preview_url
    })
    try{
        const savedMedia = await media.save()
        res.json(savedMedia)
    }catch (err){
        res.json({"message": err})
    }
}

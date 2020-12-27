const Media = require('../models/mediaModel')

exports.get_Media = async (req, res) => {
    try{
        const media = Media.find()
        res.json(media)
    }catch (err){
        res.json({"message": err})
    }
}

exports.create_Media = async (req, res) => {
    const media = new Media({
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

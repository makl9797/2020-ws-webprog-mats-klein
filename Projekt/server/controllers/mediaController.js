const Media = require('../models/mediaModel')

exports.get_Media = async (req, res) => {
    try{
        const media = Media.find()
        res.json(media)
    }catch (err){
        res.json({"message": err})
    }
}

exports.create_Media = async (req, res, next) => {
    await req.media.forEach(media => {
        new Media({
            _id: media.media_key,
            media_type: media.type,
            url: media.url,
            preview_url: media.previw_image_url
        }).save()
    })
    next()
}

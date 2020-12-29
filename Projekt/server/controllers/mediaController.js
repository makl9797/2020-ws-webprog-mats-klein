const Media = require('../models/mediaModel')

exports.get_Media = async (req, res) => {
    try{
        const media = Media.find()
        res.json(media)
    }catch (err){
        res.json({"message": err})
    }
    console.log("mediaController: get_Media executed")
}

exports.create_Media = async (req, res, next) => {
    if (req.media.equals("no media")){
        await req.media.forEach(media => {
            const media_key = media.media_key || ""
            new Media({
                _id: media_key,
                media_type: media.type,
                url: media.url,
                preview_url: media.previw_image_url
            }).save()
        })
    }
    console.log("mediaController: create_Media executed")
    next()
}

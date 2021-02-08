const Media = require('../models/mediaModel')

exports.get_Media = async (req, res) => {
    try {
        const media = Media.find()
        res.json(media)
    } catch (err) {
        res.json({"message": err})
    }
}

exports.create_Media = async (req, res, next) => {
    if (req.media !== "no media") {
        await req.media.forEach(media => {
            const media_key = media.media_key || ""
            Media.exists({_id: media_key}).then(exists => {
                if (!exists) {
                    new Media({
                        _id: media_key,
                        media_type: media.type,
                        url: media.url,
                        preview_url: media.previw_image_url
                    }).save()
                }
            })
        })
    }
    next()
}

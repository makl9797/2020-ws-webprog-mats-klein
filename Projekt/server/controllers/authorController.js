const Author = require('../models/authorModel')

exports.get_Author = async (req, res) => {
    try {
        const author = await Author.find()
        res.json(author)
    } catch (err) {
        res.json({"message": err})
    }
    console.log("authorController: get_Author executed")
}

exports.create_Author = async (req, res, next) => {
    await req.author.forEach(author => {
        Author.exists({_id: author.id}).then(exists => {
            if (!exists) {
                new Author({
                    _id: author.id,
                    name: author.name,
                    username: author.username
                }).save()
            }
        })
    })
    console.log("authorController: create_Author executed")
    next()
}

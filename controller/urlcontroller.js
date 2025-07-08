const urls = require('../models/urls')
exports.getallurl = async (req, res, next) => {
    try {
        const findurls = await urls.find()
        return res.status(200).json({ "shorted url:": findurls })
    }
    catch (er) {
        return res.status(501).json({ message: 'internal server error..' })
    }
}

exports.addurl = async (req, res, next) => {
    try {
        const usave = await urls.create({ fullurl: req.body.fullurl })
        return res.status(200).json({ 'messages': 'Url is Shorted' })
    }
    catch (er) {
        return res.status(501).json({ message: 'internal server error..' })
    }
}

exports.shorturl = async (req, res, next) => {
    try {
        const shortid = req.params.id
        const findshortid = await urls.findOneAndUpdate({ short: shortid }, {
            $push: {
                visithistory: {
                    timestamp: Date.now()
                }
            }
        })
        if (!findshortid) {
            return res.status(404).json({ message: 'your shorted url Wrong please try again..' })
        }
        res.redirect(findshortid.fullurl)
    }
    catch (er) {
        console.log(er)
        return res.status(501).json({ message: 'internal server error..' })
    }
}
exports.getclicks = async (req, res, next) => {
    try {
        const shortid = req.params.id
        const findshortid = await urls.findOne({ short: shortid })
        if (!findshortid) {
            return res.status(404).json({ message: 'your shorted url is not found' })
        }
        const clicks = findshortid.visithistory.length
        return res.status(200).json({ 'Clicks': clicks })
    }
    catch (er) {
        console.log(er)
        return res.status(501).json({ message: 'internal server error..' })
    }
}
exports.delete = async (req, res, next) => {
    try {
        const id = req.params.id
        const findid = await urls.findByIdAndDelete({ _id: id })
        if (!findid) {
            return res.status(404).json({ message: 'your id is not found' })
        }
        return res.status(200).json({ 'message': 'This id is deleted..' })
    }
    catch(er){
        console.log(er)
        return res.status(501).json({ message: 'internal server error..' })
    }
}
let express = require('express')
let router = express.Router()
let cors = require('cors')

router.get('/', cors(), function(req, res, next) {

    const queryString = req.query
    const date = queryString.date

    const today = new Date().toISOString().substring(0, 10)

    if (date == '2021-01-21') {

        const json = {
            copywrite: 'Video Credit: NASA, JHUAPL, Naval Research Lab, Parker Solar Probe; Processing: Avi Solomon',
            date: '2021-01-21',
            explanation: 'Parker: Sounds of the Solar Wind',
            media_type: 'video',
            title: 'Temporary Placeholder Astronomy Picture of the Day',
            url: 'https://www.youtube.com/embed/hgzGET6owYk'
        }
        res.json(json)
    }

    else {

        const explanation = `Victorian astronomer Isaac Roberts' magnum opus is a photograph showing the structure of M31, the Great Nebula in Andromeda (now known as the Andromeda Galaxy). He made the photo on 29 December 1888, using his 20-inch (510 mm) aperture reflecting telescope, The long exposure photograph revealed that the nebula had a spiral structure, which was quite unexpected at the time. Photographs such as this changed astronomy by revealing the true form of nebulae and clusters, and eventually helped to develop the theories about galaxies.`

        const imageFile = 'img/Andromeda_Nebula.jpg'
        const fullServerUrl = req.protocol + '://' + req.get('host')
        const imageUrl = fullServerUrl + '/' + imageFile

        const json = {
            copywrite: 'Public domain image',
            date: today,
            explanation: explanation,
            media_type: 'image',
            title: 'Temporary Placeholder Astronomy Picture of the Day',
            url: imageUrl
        }

        return res.json(json)
    }

})

module.exports = router 
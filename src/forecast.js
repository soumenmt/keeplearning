const request = require('request')

const forecast = (address, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=2ddd926d1c77927bbc605a23312d6f60'+'&query='+address
    console.log(url)
    request({ url, json: true }, (error, { body }) => {
     if (error) {
     callback('Unable to connect to weather service!', undefined)
    } else if (body.error) {
     callback('Unable to find location', undefined)
    } else {
        callback(undefined, ' It is currently ' + body.current.temperature + ' degress out in '+body.location.name+' ,'+body.location.country)
          }
    })
}
module.exports = forecast
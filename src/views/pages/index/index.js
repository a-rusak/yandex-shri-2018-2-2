const template = require('./template.twig')
const {benefits, logo, actions} = require('./data')

module.exports = template({benefits, logo, actions})

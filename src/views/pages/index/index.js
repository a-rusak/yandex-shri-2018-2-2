const template = require('./template.twig')
const {benefits, logo} = require('./data')

module.exports = template({benefits, logo})

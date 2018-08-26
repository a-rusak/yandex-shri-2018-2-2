const template = require('./template.twig')
const {benefits, logo, actions, devices} = require('./data')

module.exports = template({benefits, logo, actions, devices})

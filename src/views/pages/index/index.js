const template = require('./template.twig')
const {benefits, logo, actions, devices, mainDevices} = require('./data')

module.exports = template({benefits, logo, actions, devices, mainDevices})

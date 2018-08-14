const template = require('./template.twig')
const {benefits} = require('./data')
// const symbolData = require('../../../images/cloud-drizzle.svg');
// console.log(symbolData)

module.exports = template({benefits})

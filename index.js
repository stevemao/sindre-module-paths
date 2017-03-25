'use strict';
const rpt = require('read-package-tree')

const recursivelyGetPackages = (data) => (
  [data].concat(data.children.reduce((acc, child) => (
    acc.concat(recursivelyGetPackages(child))
  ), []))
)

module.exports = () => {
  return new Promise((resolve, reject) => {
    rpt('./', (er, data) => {
      if (er) {
        reject(er)
        return
      }

      resolve(
        recursivelyGetPackages(data)
        .filter(nodeModule => nodeModule.package.author && nodeModule.package.author.name === 'Sindre Sorhus')
        .map(sindresModule => sindresModule.realpath)
      )
    })
  })
}

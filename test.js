const sindreModulePaths = require('./')
const path = require('path')

test('contains sindre\'s module: camelcase', () => (
  sindreModulePaths()
    .then((paths) => {
      expect(paths).toContain(
        path.resolve(__dirname, 'node_modules/camelcase')
      )
    })
))

test('transitive deps done right', () => (
  sindreModulePaths()
    .then((paths) => {
      expect(paths).toContain(
        path.resolve(__dirname, 'node_modules/test-transitive-deps/node_modules/repeating')
      )
    })
))

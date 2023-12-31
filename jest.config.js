module.exports = {
    testEnvironment: 'node',
    transform: {
      '^.+\\.js$': 'babel-jest'
    },
    moduleNameMapper: {
      '^@libs/(.*)$': '<rootDir>/src/libs/$1'
    },
    setupFilesAfterEnv: ['./jest.setup.js'],
    testMatch: ['**/test/**/*.test.js']
  }
  
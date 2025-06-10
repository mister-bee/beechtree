const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jsdom',
  testEnvironmentOptions: {
    url: 'http://localhost:3066'
  },
  testPathIgnorePatterns: ['<rootDir>/__tests__/api/']
}

module.exports = createJestConfig(customJestConfig)
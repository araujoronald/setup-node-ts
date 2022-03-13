module.exports = {
  roots: ['<rootDir>/src'],
  testEnvironment: 'node',
  transform: { '.+\\.ts$': 'ts-jest' },
  bail: false,
  clearMocks: true,
  testMatch: [
    '<rootDir>/src/**/*.test.ts',
    '<rootDir>/src/**/*.spec.ts'
  ],
  verbose: true,
  preset: 'ts-jest'
}
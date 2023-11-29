module.exports = {
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^~/(.*)$': '<rootDir>/$1',
  },
  moduleFileExtensions: ['js', 'ts', 'json', 'vue'],
  transform: {
    // '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.ts$': 'ts-jest',
    '^.+\\.vue$': 'vue-jest',
  },
  collectCoverage: true,
  collectCoverageFrom: [
    // '<rootDir>/components/**/*.vue',
    '<rootDir>/pages/**/*.vue',
  ],
};

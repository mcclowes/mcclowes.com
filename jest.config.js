module.exports = {
  testMatch: ["<rootDir>/(components|utils)/**/*.spec.js"],
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
  setupFilesAfterEnv: ["<rootDir>/setupTests.js"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
  },
  snapshotSerializers: ["enzyme-to-json/serializer"],
  collectCoverageFrom: ["src/**/*.js", "!src/index.js", "!**/node_modules/**"],
  coverageReporters: ["text"],
};

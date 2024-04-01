module.exports = {
  testEnvironment: "jest-environment-jsdom",
  // setupFiles: ['./jest.setup.js']
  transformIgnorePatterns: [
    "node_modules/(?!(decode-uri-component|filter-obj|split-on-first|query-string)/)",
  ],
};

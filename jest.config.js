module.exports = {
  collectCoverageFrom: [
    "src/**/*.{js,ts}",
    "!*.js", // ignore all config .js files
    "!**/*.d.ts",
    "!build/**",
    "!coverage/**",
    "!dist/**",
    "!examples/**",
  ],
  verbose: true,
  projects: ["<rootDir>"],
  testMatch: [
    "**/test/**/*.[jt]s?(x)",
    "**/?(*.)+(spec|test).[jt]s?(x)",
    "<rootDir>/src/**/*.test.(js|ts)",
  ],
  testPathIgnorePatterns: [
    "/(?:production_)?node_modules/",
    ".d.ts$",
    "<rootDir>/test/fixtures",
    "<rootDir>/test/helpers",
    "__mocks__",
    "/node_modules/",
  ],
  transform: {
    "^.+\\.[jt]sx?$": "ts-jest",
  },
  resetMocks: true,
  moduleDirectories: ["node_modules", "src"],
  testURL: "http://localhost",
  moduleFileExtensions: ["js", "jsx", "json", "ts", "tsx"],
  modulePathIgnorePatterns: ["/node_modules/"],
  coveragePathIgnorePatterns: [
    "<rootDir>/node_modules/",
    "<rootDir>/src/main.ts",
  ],
  globals: {
    "ts-jest": {
      isolatedModules: false,
    },
  },
};

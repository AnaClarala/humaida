const replace = require("replace");

replace({
  regex: "__BACKEND_URL__",
  replacement: `${process.env.BACKEND_PROD}`,
  paths: ['src/environments/environment.prod.ts'],
  recursive: true,
  silent: true,
});

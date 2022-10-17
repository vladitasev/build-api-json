const getAllEntities = require("@ui5/tooling-webc/lib/generate/utils/getAllEntities.js");
const fs = require("fs");

// for fiori

const apiFilesPaths = [
	require.resolve("@ui5/webcomponents/dist/api.json"),
	require.resolve("@ui5/webcomponents-fiori/dist/api.json")
];

const apiFiles = apiFilesPaths.map(apiFilePath => `${fs.readFileSync(apiFilePath)}`);
const allEntities = getAllEntities(apiFiles);

console.log(allEntities)

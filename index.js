const getAllEntities = require("@ui5/tooling-webc/lib/generate/utils/getAllEntities.js");
const fs = require("fs");

// for fiori

const apiFilesPaths = [
	"../../ui5-webcomponents/packages/main/dist/api.json",
	"../../ui5-webcomponents/packages/fiori/dist/api.json"
];

const apiFiles = apiFilesPaths.map(apiFilePath => `${fs.readFileSync(apiFilePath)}`);
const allEntities = getAllEntities(apiFiles);

console.log(allEntities)

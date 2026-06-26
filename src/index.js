import dotenv from "dotenv";
import PATHS from "./config.js";

import { readText, readJson, writeJson } from "./files.js";
import githubSearch from "./api.js";
import filterResponse from "./filter.js";

dotenv.config();

const query = readText(PATHS.query);
const variables = readJson(PATHS.apiVars);
const filterVars = readJson(PATHS.filterVars);

const data = await githubSearch(query, variables);

const filteredData = filterResponse(data, filterVars);

writeJson(PATHS.results, filteredData);

console.log("\nSee results from output/results.json");

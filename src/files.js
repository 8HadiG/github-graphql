import fs from "fs";

export function readText(path) {
  return fs.readFileSync(path, "utf8");
}

export function readJson(path) {
  return JSON.parse(fs.readFileSync(path, "utf8"));
}

export function writeJson(path, data) {
  fs.writeFileSync(path, JSON.stringify(data, null, 2));
}

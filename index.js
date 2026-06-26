import fs from "fs";
import dotenv from "dotenv";

dotenv.config();

const query = fs.readFileSync("query.graphql", "utf8");
const variables = JSON.parse(fs.readFileSync("var-api.json", "utf8"));

const response = await fetch("https://api.github.com/graphql", {
  method: "POST",
  headers: {
    Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    query,
    variables,
  }),
});

if (!response.ok) {
  throw new Error(
    `GitHub API request failed: ${response.status} ${response.statusText}`,
  );
}

const data = await response.json();

const jqVars = JSON.parse(fs.readFileSync("var-jq.json", "utf8"));

const search = data.data.search;

search.apiNodesCount = search.nodes.length;

search.nodes = search.nodes.filter(
  (node) =>
    node.repository.stargazerCount >= jqVars.minStars &&
    node.repository.pushedAt >= jqVars.minPushedAt,
);

search.jqNodesCount = search.nodes.length;

fs.writeFileSync("results.json", JSON.stringify(data, null, 2));

console.log("results saved to results.json");

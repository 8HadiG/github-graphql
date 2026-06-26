export default function filterResponse(data, filterVars) {
  const search = data.data.search;

  search.apiNodesCount = search.nodes.length;

  search.nodes = search.nodes.filter(
    (node) =>
      node.repository.stargazerCount >= filterVars.minStars &&
      node.repository.pushedAt >= filterVars.minPushedAt,
  );

  search.selectedNodesCount = search.nodes.length;

  return data;
}

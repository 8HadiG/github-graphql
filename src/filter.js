export default function filterResponse(data, searchType, filterVars) {
  // Declares if filters are available for this searchType
  let supportedSearchType = true;

  const search = data.data.search;

  search.apiNodesCount = search.nodes.length;

  search.nodes = search.nodes.filter((node) => {
    if (searchType === "REPOSITORY") {
      return (
        node.repository.stargazerCount >= filterVars.minStars &&
        node.repository.pushedAt >= filterVars.minPushedAt
      );
    } else if (searchType === "ISSUE") {
      return (
        node.repository.stargazerCount >= filterVars.minStars &&
        node.repository.pushedAt >= filterVars.minPushedAt
      );
    } else {
      supportedSearchType = false;
      return true;
    }
  });

  !supportedSearchType &&
    (search.message = `The filtering feature is not available for "${searchType}" search type yet.`);

  search.selectedNodesCount = search.nodes.length;

  return data;
}

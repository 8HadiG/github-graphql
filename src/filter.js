export default function filterResponse(data, searchType, filterVars) {
  // Declares if filters are available for this searchType
  let supportedSearchType = true;

  const search = data.data.search;

  search.apiNodesCount = search.nodes.length;

  search.nodes = search.nodes.filter((node) => {
    if (searchType === "REPOSITORY") {
      return (
        node.repository.stargazerCount >= filterVars.m_GR_stargazerCount &&
        node.repository.pushedAt >= filterVars.m_GR_pushedAt
      );
    } else if (searchType === "ISSUE") {
      return (
        node.repository.stargazerCount >= filterVars.m_GR_stargazerCount &&
        node.repository.pushedAt >= filterVars.m_GR_pushedAt
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

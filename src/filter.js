export default function filterResponse(data, searchType, filterVars) {
  // Declares if filters are available for this searchType
  let supportedSearchType = true;

  const search = data.data.search;

  search.apiNodesCount = search.nodes.length;
  if (search.apiNodesCount === 0) {
    supportedSearchType = false;
  }

  search.nodes = search.nodes.filter((node) => {
    if (searchType === "REPOSITORY") {
      return (
        node.pushedAt >= filterVars.m_GR_pushedAt &&
        node.stargazerCount >= filterVars.m_GR_stargazerCount
      );
    } else if (searchType === "ISSUE") {
      return (
        node.repository.pushedAt >= filterVars.m_GR_pushedAt &&
        node.repository.stargazerCount >= filterVars.m_GR_stargazerCount
      );
    } else {
      supportedSearchType = false;
      return true;
    }
  });

  !supportedSearchType &&
    (search.searchTypeMessage = `The filtering feature is not available for "${searchType}" search type yet.`);

  search.selectedNodesCount = search.nodes.length;

  return data;
}

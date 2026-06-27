export default function filterResponse(data, searchType, filterVars) {
  // Declares if filters are available for this searchType
  let supportedDataSize = true;
  let supportedSearchType = true;

  const search = data.data.search;

  search.apiNodesCount = search.nodes.length;
  if (search.apiNodesCount === 0) {
    supportedSearchType = false;
  }

  search.nodes = search.nodes.filter((node) => {
    if (node === null) {
      supportedDataSize = false;
      return false;
    } else if (searchType === "REPOSITORY") {
      return (
        node.pushedAt >= filterVars.GR_pushedAt_m &&
        node.stargazerCount >= filterVars.GR_stargazerCount_m
      );
    } else if (searchType === "ISSUE") {
      return (
        node.repository.pushedAt >= filterVars.GR_pushedAt_m &&
        node.repository.stargazerCount >= filterVars.GR_stargazerCount_m
      );
    } else {
      supportedSearchType = false;
      return true;
    }
  });

  !supportedDataSize &&
    (search.nodes = {
      supportMessage:
        "The GitHub GraphQL API couldn't process this request because the query is too complex. Try requesting fewer fields or reducing the number of results.",
    });

  !supportedSearchType &&
    (search.supportMessage = `The filtering feature is not available for "${searchType}" search type yet.`);

  search.selectedNodesCount = search.nodes.length;

  return data;
}

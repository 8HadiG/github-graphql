.data.search.apiNodesCount = (.data.search.nodes | length)
| .data.search.nodes |= map(
    select(
      .repository.stargazerCount >= $vars[0].minStars
      and
      .repository.pushedAt >= $vars[0].minPushedAt
    )
)
| .data.search.jqNodesCount =(.data.search.nodes | length)
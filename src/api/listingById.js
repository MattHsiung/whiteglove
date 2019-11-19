const algoliaUrl =
  "https://mnrwefss2q-dsn.algolia.net/1/indexes/Listing_production/query?x-algolia-agent=Algolia%20for%20JavaScript%20(3.33.0)%3B%20Browser&x-algolia-application-id=MNRWEFSS2Q&x-algolia-api-key=a3a4de2e05d9e9b463911705fb6323ad";
export default id =>
  fetch(algoliaUrl, {
    method: "post",
    body: JSON.stringify({
      params: `query=&filters=objectID:${id}`
    })
  })
    .then(res => res.json())
    .then(res => {
      const listing = res.hits[0];
      if (!listing) throw new Error("No listing found");
      return listing;
    });

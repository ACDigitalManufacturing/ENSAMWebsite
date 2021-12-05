export function getQueryParams(): { [key: string]: string } {
  let { search } = window.location;
  if (search.startsWith("?")) {
    search = search.slice(1);
  }

  const blocks = search.split("&");
  const pairs: { [key: string]: string } = {};

  blocks
    .filter((block) => block.includes("="))
    .forEach((block) => {
      const [key, value] = block.split("=");
      pairs[decodeURIComponent(key)] = decodeURIComponent(value);
    });

  return pairs;
}

const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;

const contentful = require("contentful");

const client = contentful.createClient({
  space: space,
  accessToken: accessToken,
});

export const fetchEntries = async (query) => {
  const entries = await client.getEntries(query);

  if (entries.items) return entries.items;

  console.log(`Error getting Entries for ${contentType.name}.`);
};

export default { fetchEntries };

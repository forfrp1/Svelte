export const load = async (loadEvent) => {
  console.log("universal side load functions");
  const { fetch, data, parent } = loadEvent;
  const parentData = await parent();
  const { username } = parentData;

  return { ...data, username };
};
export const prerender = true;
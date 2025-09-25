export const load = async (serverLoadEvent) => {
  console.log("server side load functions");
  const { fetch } = serverLoadEvent;
  const title = "List of available products";
  const url = "http://localhost:4000/products";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    const products = await response.json();
    return { title, products };
  } catch (error) {
    console.log(error);
  }
};

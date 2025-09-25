import Product from "./product.svelte";

export const load = async (loadEvent) => {
  console.log("universal side load functions");
  const { fetch, data } = loadEvent;
  //   const title = "List of available products";
  //   const url = "http://localhost:4000/products";
  //   try {
  //     const response = await fetch(url);
  //     if (!response.ok) {
  //       throw new Error(`Error: ${response.status}`);
  //     }
  //     const products = await response.json();
  //     return { title, products, Component: Product };
  //   } catch (error) {
  //     console.log(error);
  //   }

  return { ...data, Component: Product };
};

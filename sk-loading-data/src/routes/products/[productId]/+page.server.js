// import { error } from "@sveltejs/kit";

import { redirect } from "@sveltejs/kit";

export const load = async (serverLoadEvent) => {
  const { fetch, params } = serverLoadEvent;
  const { productId } = params;
  const notification = "End of season sale! 50% off!";
  const title = "Product details";
  const url = `http://localhost:4000/products/${productId}`;

  const response = await fetch(url);
  if (!response.ok) {
    // throw error(404, "Product not found!");
    throw redirect(307, "/products");
  }
  const product = await response.json();
  return { title, product, notification };
};

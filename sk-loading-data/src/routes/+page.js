export const load = async ({ fetch }) => {
  console.log("Home page universal load function called");
  const response = await fetch("/api/current-time");
  const currentTime = await response.text();
  return { currentTime };
};

export const prerender = true;
// turn off client side rendering
export const csr = false;

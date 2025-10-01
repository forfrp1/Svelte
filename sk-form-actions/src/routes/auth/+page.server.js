// export const load = ()=>{

import { fail } from "@sveltejs/kit";

// }

export const actions = {
  login: async ({ request, cookies }) => {
    const data = await request.formData();
    const username = data.get("username");
    const password = data.get("password");
    if (!username || !password) {
      return fail(400, { username, message: "Missing username or password" });
    }
    // @ts-ignore
    cookies.set("username", username, { path: "/" });
    return { message: "Logged in" };
  },
  register: async ({ request, cookies }) => {
    const data = await request.formData();
    const username = data.get("username");
    const password = data.get("password");
    if (!username || !password) {
      return fail(400, { username, message: "Missing username or password" });
    }
    // @ts-ignore
    cookies.set("username", username, { path: "/" });
    return { message: "successfully registered" };
  },
};

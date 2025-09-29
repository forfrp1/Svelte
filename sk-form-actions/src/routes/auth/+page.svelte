<script lang="ts">
  let username = "";
  let password = "";
  let message = "";
  const handleSubmit = async (e) => {
    e.preventDefault();
    message = "";
    const response = await fetch("/auth", {
      method: "POST",
      body: JSON.stringify({
        username,
        password,
      }),
    });
    const data = await response.json();
    message = data.message;
  };
</script>

<form class="flex flex-col w-72 mx-auto gap-2" onsubmit={handleSubmit}>
  <p>{message}</p>
  <input
    type="text"
    class="bg-blue-200 p-2"
    name="username"
    placeholder="Username"
    bind:value={username}
  />
  <input
    type="password"
    class="bg-blue-200 p-2"
    name="password"
    placeholder="Password"
    bind:value={password}
  />
  <button
    class="cursor-pointer hover:bg-red-500 duration-200 bg-red-400 p-1"
    type="submit">Login</button
  >
</form>

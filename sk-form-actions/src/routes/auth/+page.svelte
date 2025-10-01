<script lang="ts">
  let { form } = $props();
</script>

<form method="POST" class="flex flex-col w-72 mx-auto gap-2">
  <p>{form?.message || ""}</p>
  <input
    type="text"
    class="bg-blue-200 p-2"
    name="username"
    placeholder="Username"
    value={form?.username ?? ''}
  />
  <input
    type="password"
    class="bg-blue-200 p-2"
    name="password"
    placeholder="Password"
  />
  <button
    formaction="?/login"
    class="cursor-pointer hover:bg-red-500 duration-200 bg-red-400 p-1"
    type="submit">Login</button
  >
  <button
    formaction="?/register"
    class="cursor-pointer hover:bg-blue-500 duration-200 bg-blue-400 p-1"
    >Register</button
  >
</form>

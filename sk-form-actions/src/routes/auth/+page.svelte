<script lang="ts">
let {form} = $props()
</script>

<form method="POST" class="flex flex-col w-72 mx-auto gap-2" >
  <p>{form?.message|| ""}</p>
  <input
    type="text"
    class="bg-blue-200 p-2"
    name="username"
    placeholder="Username"
    
  />
  <input
    type="password"
    class="bg-blue-200 p-2"
    name="password"
    placeholder="Password"
    
  />
  <button
    class="cursor-pointer hover:bg-red-500 duration-200 bg-red-400 p-1"
    type="submit">Login</button
  >
</form>

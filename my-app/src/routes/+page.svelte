<script lang="ts">
  import { afterNavigate, beforeNavigate, goto } from "$app/navigation";

  function onclick() {
    goto("/products");
  }
  beforeNavigate((navigation) => {
    console.log({ before: navigation });
  });
  afterNavigate((navigation) => {
    console.log({ after: navigation });
  });
</script>

<h1>Welcome!</h1>

<button
  class="p-2 px-4 bg-teal-400 hover:bg-teal-500 duration-300 rounded-xl mt-4 cursor-pointer text-white"
  {onclick}>Place order</button
>

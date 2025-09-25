<script lang="ts">
  import "../app.css";
  import favicon from "$lib/assets/favicon.svg";

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>
<nav class="flex item-center p-4 item-center bg-teal-300 gap-4">
  <ul class="flex justify-center gap-4">
    <li class="list-item"><a href="/">home</a></li>
    <li class="list-item"><a href="/about">about</a></li>
    <li class="list-item"><a href="/profile">profile</a></li>
    <li class="list-item"><a href="/products">products</a></li>
    <li class="list-item"><a href="/docs">docs</a></li>
    <li class="list-item"><a href="/marketing">marketing</a></li>
    <li class="list-item"><a href="/demo-api">API</a></li>
  </ul>
</nav>
<section class="p-4">
  {@render children?.()}
</section>

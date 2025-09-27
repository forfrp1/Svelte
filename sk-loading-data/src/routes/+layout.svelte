<script lang="ts">
  import "../app.css";
  import favicon from "$lib/assets/favicon.svg";
  import { page } from "$app/state";

  let { children, data } = $props();
  const username = data.username;
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
  <title>{page.data.title || "sk-loading-data"}</title>
</svelte:head>
{#if page.data.notification}
  <p class="text-orange-600">{page.data.notification}</p>
{/if}
<div>Welcome, <span class="font-bold text-blue-700">{username}</span></div>
{@render children?.()}

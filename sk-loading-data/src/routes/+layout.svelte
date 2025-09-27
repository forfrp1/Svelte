<script lang="ts">
  import "../app.css";
  import favicon from "$lib/assets/favicon.svg";

  let { children,data } = $props();
  const username = data.username
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>
<div>Welcome, <span class="font-bold text-blue-700">{username}</span></div>
{@render children?.()}

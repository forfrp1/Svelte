<script lang="ts">
  let { data, children } = $props();
  const { title, featuredProducts, username } = data;
</script>

{@render children?.()}
<h1 class="text-sky-700">
  {title} for <span class="text-yellow-600">{username}</span>
</h1>

{#each featuredProducts as fProduct}
  <div class="inline-block w-52 m-3 border border-slate-300 p-3">
    <h2>{fProduct.title}</h2>
    <p>{fProduct.description}</p>
  </div>
{/each}

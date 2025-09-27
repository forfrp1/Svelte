<script lang="ts">
  let { data, children } = $props();
  const { title, featuredProducts } = data;
</script>
{@render children?.()}
<h1>{title}</h1>

{#each featuredProducts as fProduct}
<div class="inline-block w-52 m-3 border border-slate-300 p-3">
    <h2>{fProduct.title}</h2>
    <p>{fProduct.description}</p>
</div>
{/each}

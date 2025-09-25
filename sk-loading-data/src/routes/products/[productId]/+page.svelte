<script>
  import Product from "../product.svelte";

  let { data } = $props();
  console.log(data);

  const title = data.title;
  const product = data.product;
</script>

{#if data}
<h1 class="p-4 bg-slate-200">{title}</h1>
<Product {product} />
{:else}
<h1 class="p-4 bg-slate-200">{title}</h1>
<h1 class="p-4 font-bold text-rose-600 bg-slate-200">Product not found!</h1>
{/if}

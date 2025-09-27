<script>
  import Product from "../product.svelte";

  let { data } = $props();
  console.log(data);

  const title = data.title;
  const product = data.product;
  const username = data.username;
</script>

{#if data}
  <div class="p-2 bg-slate-200 flex gap-4 flex-col">
    <a href="/products">Back</a>
<h1 class="text-rose-700">{title} for <span class="text-yellow-500">{username}</span></h1>
  </div>
  <Product {product} />
{:else}
  <h1 class="p-4 bg-slate-200">{title}</h1>
  <h1 class="p-4 font-bold text-red-600 bg-slate-200">Product not found!</h1>
{/if}

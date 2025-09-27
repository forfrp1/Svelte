<script>
  let { data } = $props();
  const title = data.title;
  const products = data.products;
  const Component = data.Component;
  const username = data.username;
</script>

<h1 class="text-rose-700">{title} for <span class="text-yellow-600">{username}</span></h1>

{#each products as product}
  <Component {product} />
{/each}

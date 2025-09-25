<script>
     let {product} = $props()
</script>

  <div class="my-4 mx-4 border-b px-4 py-1 w-max">
    <h1 class="text-2xl font-bold">{product.title}</h1>
    <p class="text-blue-600">${product.price}</p>
    <p class="text-slate-500">{product.description}</p>
  </div>

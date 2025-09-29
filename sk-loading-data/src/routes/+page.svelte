<script>
  import { goto, preloadData } from "$app/navigation";
</script>

<!-- preload code -->
<!-- when scroll preside to the element -->
<!-- data-sveltekit-preload-code="viewport" -->
<!-- when page load -->
<!-- data-sveltekit-preload-code="eager" -->
<!-- data-sveltekit-preload-code="hover" -->
<!-- data-sveltekit-preload-code="tap" -->
<!-- data-sveltekit-preload-code="off" -->

<!-- preload data -->
<!-- data-sveltekit-preload-data="hover" -->
<!-- data-sveltekit-preload-data="tap" -->
<!-- data-sveltekit-preload-data="off" -->
<div class="flex py-4 flex-col gap-2">
  <a href="/products" data-sveltekit-preload-code="viewport">Products</a>
  <a href="/stocks">Stocks</a>
</div>
<button
  onfocus={async () => {
    await preloadData("/stocks");
  }}
  onmouseover={async () => {
    await preloadData("/stocks");
  }}
  onclick={() => {
    goto("/stocks");
  }}
>
  go to stocks
</button>

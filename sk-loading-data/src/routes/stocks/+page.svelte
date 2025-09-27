<script>
  import { invalidateAll } from '$app/navigation';

  // @ts-ignore
  let { data } = $props();
  function refresh(){
    invalidateAll();
  }
</script>

<h1>Actively trading stocks</h1>

{#each data.stocks as stock}
  <h2>{stock.symbol} - ${stock.price}</h2>
{/each}
<button class="px-4 py-2 bg-sky-400 rounded-md cursor-pointer hover:bg-sky-500" onclick={refresh}>Refresh</button>
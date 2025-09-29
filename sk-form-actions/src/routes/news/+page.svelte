<script>
  let {data} = $props();
</script>

<h1>Today's headlines</h1>
{#each data.news as article}
  <h2>{article.title}</h2>
{/each}

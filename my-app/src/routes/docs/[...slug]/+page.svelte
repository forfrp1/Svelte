<script lang="ts">
  import { page } from "$app/state";

  let slug = page.params.slug;
  console.log(slug);
  let slugPatrs: string[];
  if (slug) {
    slugPatrs = slug.split("/");
  }
</script>

<h1>Docs Home page</h1>
{#each slugPatrs as part}
  <p>{part}</p>
{/each}

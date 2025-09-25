<script>
  import { page } from "$app/state";
</script>

<div
  class="h-screen justify-center flex items-center flex-col gap-6 text-red-400 font-bold text-6xl"
>
  <h1>{page.status} :(</h1>
  <p>{page.error?.message}</p>
</div>

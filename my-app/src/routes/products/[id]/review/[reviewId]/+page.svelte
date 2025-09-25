<script lang="ts">
  import { page } from "$app/state";

    let productId = page.params.id
    let reviewId = page.params.reviewId
</script>

<h1>This is review {reviewId} of Product {productId}</h1>
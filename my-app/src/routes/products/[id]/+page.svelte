<script lang="ts">
  import { page } from "$app/state";
  type product = {
    id: number;
    name: string;
    detail: string;
  };

  let products: product[] = [
    {
      id: 1,
      name: "product 1",
      detail:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
    {
      id: 2,
      name: "product 2",
      detail:
        " the other is not recognizable; its mathee is not a vague version of a secret, but it is a certificate that was in play.",
    },
    {
      id: 3,
      name: "product 3",
      detail: "It's not true that the more you love the better you understand.",
    },
  ];

  let productId = page.params.id;

  let product = products.find((item) => item.id === Number(productId));
  let name = "";
  let detail = "";
  if (product) {
    name = product.name;
    detail = product.detail;
  } else {
    name = "Invalid Product";
    detail = "...";
  }
</script>

<h1>{product ? "About product " + name : "invalid product"}</h1>
<p>{detail}</p>
<div class="flex gap-4">
  <a
    class="cursor-poiner hover:text-sky-300"
    href="/products/{productId}/review/1">review 1</a
  >
  <a
    class="cursor-poiner hover:text-sky-300"
    href="/products/{productId}/review/2">review 2</a
  >
  <a
    class="cursor-poiner hover:text-sky-300"
    href="/products/{productId}/review/3">review 3</a
  >
</div>

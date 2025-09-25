<script lang="ts">
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
</script>

<ul>
  {#each products as product}
    <li class="list-item">
      <a href="/products/{product.id}">{product.name}</a>
    </li>
  {/each}
</ul>

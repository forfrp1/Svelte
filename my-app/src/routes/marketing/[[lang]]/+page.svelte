<script lang="ts">
  import { page } from "$app/state";

  const gteeting:Record<string,string> = {
    en: "Hello!",
    es: "Hola!",
    fr: "Bonjour!",
    fa: "سلام!",
  };
  const { lang="en" }: { lang?: string } = page.params;
  let text = "";
  if (lang) {
    text = gteeting[lang];
  } 
</script>

<h1 class="text-center">{text}</h1>

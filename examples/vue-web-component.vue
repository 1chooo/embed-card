<script setup lang="ts">
import { registerEmbedCard } from "embed-card/web-component"

registerEmbedCard()
</script>

<template>
  <embed-card
    url="https://www.google.com/maps?q=Tokyo+Station&output=embed"
    accent-color="#0f766e"
    radius="26px"
  />
</template>

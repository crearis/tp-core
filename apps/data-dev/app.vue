<template>
  <Body class="font-body" :class="bodyClass" />
  <VitePwaManifest />
    <NuxtPage />
</template>

<script setup lang="ts">
usePageTitle();

const bodyClass = ref('');

onMounted(() => {
  // Need this class for cypress testing
  bodyClass.value = 'hydrated';
});
</script>

<script setup>
import footervue from './components/footer.vue';
import headervue from './components/header.vue'
</script>

<template>

  <headervue />
<Suspense>
    <RouterView />
  </Suspense>
    <footervue />
  
</template>

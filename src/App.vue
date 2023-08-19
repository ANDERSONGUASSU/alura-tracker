<template>
  <main class="columns is-gapless is-multiline">
    <div class="column is-one-quarter">
      <barra_lateral />
    </div>
    <div class="column is-three-quarter">
      <myForm />
    </div>


  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import barra_lateral from './components/barra_lateral.vue';
import myForm from './components/myForm.vue';

export default defineComponent({
  name: 'App',
  components: {
    barra_lateral,
    myForm
  }
});
</script>

<style></style>

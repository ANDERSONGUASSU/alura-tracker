<template>
  <main class="columns is-gapless is-multiline" :class="{ 'modo-escuro': modoEscuroAtivo }">
    <div class="column is-one-quarter">
      <barra_lateral @aoTemaAlterado="trocarTema" />
    </div>
    <div class="column is-three-quarter conteudo">
      <RouterView>
        
      </RouterView>

    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import barra_lateral from './components/barra_lateral.vue';

export default defineComponent({
  name: 'App',
  components: {
    barra_lateral,
  },
  data() {
    return {
      modoEscuroAtivo: false

    }
  },

  methods: {
    trocarTema(modoEscuroAtivo: boolean) {
      this.modoEscuroAtivo = modoEscuroAtivo
    }
  }
});
</script>

<style>
.lista {
  padding: 1.25rem;
}

main {
  --bg-primario: #fff;
  --texto-primario: #000;

}

main.modo-escuro {
  --bg-primario: #2b2d42;
  --texto-primario: #ddd;

}

.conteudo {
  background-color: var(--bg-primario);
  color: var(--texto-primario);
}
</style>

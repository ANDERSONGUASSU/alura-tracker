<template>
  <main class="columns is-gapless is-multiline ">
    <div class="column is-one-quarter">
      <barra_lateral />
    </div>
    <div class="column is-three-quarter conteudo">
      <myForm @aoSalvarTarefa="salvarTarefa" />
      <div class="lista">
        <tarefaView v-for="(tarefa, index) in tarefas" :key="index" :tarefa="tarefa" />
        <boxView v-if="listaEstaVazia">
          Você não iniciou nenhuma atividade ainda!
        </boxView>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import barra_lateral from './components/barra_lateral.vue';
import myForm from './components/myForm.vue';
import tarefaView from './components/tarefaView.vue';
import iTarefa from './interface/iTarefa';
import boxView from './components/boxView.vue';

export default defineComponent({
  name: 'App',
  components: {
    barra_lateral,
    myForm,
    tarefaView,
    boxView
  },
  data() {
    return {
      tarefas: [] as iTarefa[]
    }
  },
  computed: {
    listaEstaVazia(): boolean {
      return this.tarefas.length == 0
    }
  },
  methods: {
    salvarTarefa(tarefa: iTarefa) {
      this.tarefas.push(tarefa)
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
}</style>

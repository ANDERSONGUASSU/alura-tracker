<template>
  <main class="columns is-gapless is-multiline">
    <div class="column is-one-quarter">
      <barra_lateral />
    </div>
    <div class="column is-three-quarter">
      <myForm @aoSalvarTarefa="salvarTarefa"/>
      <div class="lista">
        <tarefaView v-for="(tarefa, index) in tarefas" :key="index" :tarefa="tarefa"/>
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

export default defineComponent({
  name: 'App',
  components: {
    barra_lateral,
    myForm,
    tarefaView,
  },
  data() {
    return {
      tarefas: [] as iTarefa[]
    }
  },
  methods:{
    salvarTarefa (tarefa: iTarefa){
      this.tarefas.push(tarefa)
    }
  }
});
</script>

<style>
.lista {
  padding: 1.25rem;
}
</style>

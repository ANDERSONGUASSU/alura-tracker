<template>
    <myForm @aoSalvarTarefa="salvarTarefa" />
    <div class="lista">
        <boxView v-if="listaEstaVazia">
            Você não iniciou nenhuma atividade ainda!
        </boxView>
        <tarefaView v-for="(tarefa, index) in tarefas" :tarefa="tarefa" :key="index" />
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';
import myForm from '../components/myForm.vue';
import tarefaView from '../components/tarefaView.vue';
import iTarefa from '../interface/iTarefa';
import boxView from '../components/boxView.vue';

export default defineComponent({
    name: 'App',
    components: {
        myForm,
        tarefaView,
        boxView
    },
    data() {
        return {
            tarefas: [] as iTarefa[],

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
  

  
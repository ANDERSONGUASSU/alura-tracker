<template>
    <div class="box formulario">
        <div class="columns">
            <div class="column is-8" role="form" aria-label="Formulário para criação de uma nova tarefa">
                <input type="text" class="input" placeholder="Qual tarefa vocẽ deseja iniciar?" v-model="descricao">
            </div>
            <div class="column">
                <temporizadorView @ao-temporizador-finalizado="finalizarTarefa" />
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import temporizadorView from './temporizadorView.vue';
import { useStore } from 'vuex';

export default defineComponent({
    name: 'myForm',
    emits: ['aoSalvarTarefa'],
    components: {
        temporizadorView,
    },
    data() {
        return {
            descricao: ''
        }
    },
    methods: {
        finalizarTarefa(tempoDecorrido: number): void {

            this.$emit('aoSalvarTarefa', {
                duracaoEmSegundos: tempoDecorrido,
                descricao: this.descricao
            })
            this.descricao = ''
        }
    },
    setup() {
        const store = useStore
    }
});
</script>

<style>
.formulario {
    color: var(--texto-primario);
    background-color: var(--bg-primario);
}
</style>
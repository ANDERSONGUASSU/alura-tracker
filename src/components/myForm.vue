<template>
    <div class="box formulario">
        <div class="columns">
            <div class="column is-5" role="form" aria-label="Formulário para criação de uma nova tarefa">
                <input type="text" class="input" placeholder="Qual tarefa vocẽ deseja iniciar?" v-model="descricao">
            </div>
            <div class="column is-3">
                <div class=" select">
                    <select v-model="idProjeto">
                    <option value="">Selecione o Projeto</option>
                    <option :value="projeto.id" v-for="projeto in projetos" :key="projeto.id">{{ projeto.nome }}</option>
                    </select>

                </div>
            </div>
            <div class="column">
                <temporizadorView @ao-temporizador-finalizado="finalizarTarefa" />
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { computed, defineComponent } from 'vue';
import temporizadorView from './temporizadorView.vue';
import { useStore } from 'vuex';
import { key } from '@/store';

export default defineComponent({
    name: 'myForm',
    emits: ['aoSalvarTarefa'],
    components: {
        temporizadorView,
    },
    data() {
        return {
            descricao: '',
            idProjeto: '',
        }
    },
    methods: {
        finalizarTarefa(tempoDecorrido: number): void {

            this.$emit('aoSalvarTarefa', {
                duracaoEmSegundos: tempoDecorrido,
                descricao: this.descricao,
                projeto: this.projetos.find(proj => proj.id == this.idProjeto)
            })
            this.descricao = ''
        }
    },
    setup() {
        const store = useStore(key)
        return {
            projetos: computed(() => store.state.projetos)
        }
    }
});
</script>

<style>
.formulario {
    color: var(--texto-primario);
    background-color: var(--bg-primario);
}
</style>
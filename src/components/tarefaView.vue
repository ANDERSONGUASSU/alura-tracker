<template>
    <div class="box has-text-weight-bold">
        <div class="columns">
            <div class="column is-7">
                {{tarefa.descricao}}
            </div>
            <div class="column">
                <cronometroView :tempoEmSegundos="tarefa.duracaoEmSegundos" />
            </div>

        </div>

    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import cronometroView from './cronometroView.vue';
import iTarefa from '@/interface/iTarefa';


export default defineComponent({
    name: 'tarefaView',
    components: {
        cronometroView,
    },
    props: {
        tarefa: {
            type: Object as PropType<iTarefa>,
            required: true
        }
    }
})
</script>

<style scoped>
.box {
    background: #F0F0CA;
}
</style>
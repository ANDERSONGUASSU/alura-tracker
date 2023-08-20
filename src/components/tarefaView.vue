<template>
    <boxView>
        <div class="columns">
            <div class="column is-7">
                {{ tarefa.descricao || 'Tarefa sem descrição' }}
            </div>
            <div class="column">
                <cronometroView :tempoEmSegundos="tarefa.duracaoEmSegundos" />
            </div>
        </div>
    </boxView>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import cronometroView from './cronometroView.vue';
import iTarefa from '@/interface/iTarefa';
import boxView from './boxView.vue';



export default defineComponent({
    name: 'tarefaView',
    components: {
        cronometroView,
        boxView
    },
    props: {
        tarefa: {
            type: Object as PropType<iTarefa>,
            required: true
        }
    }
})
</script>


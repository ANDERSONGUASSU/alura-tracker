<template>
    <div class="is-flex is_align-items-center is-justify-content-space-between">
        <cronometroView :tempoEmSegundos="tempoEmSegundos" />
        <botaoView @clicado="iniciar" icone="fas fa-play" texto="play" :desabilitado="cronometroRodando"/>
        <botaoView @clicado="finalizar" icone="fas fa-stop" texto="stop" :desabilitado="!cronometroRodando"/>

    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import cronometroView from './cronometroView.vue';
import botaoView from './botaoView.vue';

export default defineComponent({
    name: 'temporizadorView',
    emits: ['ao-temporizador-finalizado'],
    components: {
        cronometroView,
        botaoView,
    },
    data() {
        return {
            tempoEmSegundos: 0,
            cronometro: 0,
            cronometroRodando: false
        }
    },

    methods: {
        iniciar() {
            this.cronometroRodando = true
            this.cronometro = setInterval(() => {
                this.tempoEmSegundos += 1
            }, 1000);
        },
        finalizar() {
            this.cronometroRodando = false
            clearInterval(this.cronometro)
            this.$emit('ao-temporizador-finalizado', this.tempoEmSegundos)
            this.tempoEmSegundos = 0
        }
    }
});
</script>
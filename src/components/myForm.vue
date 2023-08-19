<template>
    <div class="box">
        <div class="columns">
            <div class="column is-8" role="form" aria-label="Formulário para criação de uma nova tarefa">
                <input type="text" class="input" placeholder="Qual tarefa vocẽ deseja iniciar?">
            </div>
            <div class="column">
                <div class="is-flex is_align-items-center is-justify-content-space-between">
                    <cronometroView :tempoEmSegundos="tempoEmSegundos" />
                    <button class="button" @click="iniciar">
                        <span class="icon">
                            <i class="fas fa-play"></i>
                        </span>
                        <span>play</span>
                    </button>
                    <button class="button" @click="finalizar">
                        <span class="icon">
                            <i class="fas fa-stop"></i>
                        </span>
                        <span>stop</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import cronometroView from './cronometroView.vue';

export default defineComponent({
    name: 'myForm',
    components: {
        cronometroView,
    },
    data() {
        return {
            tempoEmSegundos: 0,
            cronometro: 0,
        }
    },

    methods: {
        iniciar() {
            this.cronometro = setInterval(() => {
                this.tempoEmSegundos += 1
            }, 1000);
            console.log('iniciando');
        },
        finalizar() {
            console.log('finalizando');
            clearInterval(this.cronometro)
        }
    }
});
</script>

<script>

</script>
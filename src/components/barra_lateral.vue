<template>
    <header>
        <h1>
            <img src="../assets/logo.png" alt="logo">
        </h1>]
        <div class="has-text-centered">
            <button class="button" @click="alterarTema"> {{ textoBotao }}</button>
        </div>
        <nav class="panel mt-5">
            <ul>
                <li>
                    <router-link to="/" class="link">
                        <i class="fas fa-tasks p-1"></i>Tarefas
                    </router-link>
                </li>
                <li>
                    <router-link to="/projetos" class="link">
                        <i class="fas fa-project-diagram p-1"></i>Projetos
                    </router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'barra_lateral',
    emits: ['aoTemaAlterado'],
    data() {
        return {
            modoEscuroAtivo: false
        }
    },
    computed: {
        textoBotao() {
            if (this.modoEscuroAtivo) {
                return 'Desativar modo escuro'
            }
            return 'Ativar modo escuro'
        }
    },
    methods: {
        alterarTema() {
            this.modoEscuroAtivo = !this.modoEscuroAtivo
            this.$emit('aoTemaAlterado', this.modoEscuroAtivo)

        }
    }
});
</script>
<style>
header {
    padding: 1rem;
    background: #0D3b66;
    width: 100%;
    height: 100vh;
    text-align: center;
}

.panel li {
    color: white;
}

.link {
    color: white;
}

.link:hover {
    color: #F0F0CA;
}

.link.router-link-active {
    color: #F0F0CA;
}

@media only screen and (max-width: 768px) {
    header {
        padding: 2.5rem;
        height: auto;
    }
}
</style>

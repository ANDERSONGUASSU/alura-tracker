<template>
    <section class="projetos">
        <h1 class="title">Projetos</h1>
        <form @submit.prevent="salvar">
            <div class="field m-2">
                <label for="nomeDoProjeto" class="label">Nome do projeto</label>
                <input type="text" class="input" v-model="nomeDoProjeto" id="nomeDoProjeto">
            </div>
            <div class="field m-2">
                <button class="button" type="submit">Salvar</button>
            </div>
        </form>
        <table class="table is-fullwidth">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="projeto in projetos" :key="projeto.id">
                    <td>{{ projeto.id }}</td>
                    <td>{{ projeto.nome }}</td>
                </tr>
            </tbody>

        </table>
    </section>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import iProjeto from "../interface/iProjeto"
export default defineComponent({
    name: 'ProjetosView',
    data() {
        return {
            nomeDoProjeto: "",
            projetos: [] as iProjeto []
        }
    },
    methods: {
        salvar(){
            const projeto: iProjeto = {
                nome: this.nomeDoProjeto,
                id: new Date().toISOString(),
            }
            this.projetos.push(projeto)
            this.nomeDoProjeto = ''
        }
    }
});

</script>

<style scoped>

.projetos {

    padding: 1.25rem;
}

</style>
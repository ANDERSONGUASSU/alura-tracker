<template>
    <div class="box has-text-weight-bold" :style="estilos">
        <slot></slot>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: 'boxView',
    data(){
        return{
            estilos: {
                backgroundColor: '#F0F0CA'
            }
        }
    }
})

</script>


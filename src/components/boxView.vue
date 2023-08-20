<template>
    <div class="box has-text-weight-bold">
        <slot></slot>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: 'boxView',
})

</script>

<style scoped>
.box {
    background: #F0F0CA;
}
</style>
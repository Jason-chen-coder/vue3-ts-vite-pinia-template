<template>
    <h1>测试 vueUse 的鼠标坐标</h1>
    <h3>Mouse:{{ x }}x {{ y }}y</h3>
    <p><router-link to="/">点击跳转至首页</router-link></p>
</template>
<script>
import { defineComponent } from 'vue';
import { useMouse } from '@vueuse/core';
export default defineComponent({
    name: 'UseVueUse',
    setup: () => {
        const { x, y } = useMouse();
        return { x, y };
    },
});
</script>
<style lang="scss" scoped></style>

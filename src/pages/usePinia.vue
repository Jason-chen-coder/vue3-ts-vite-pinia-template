<template>
    <div class="use-pinia">
        <div>欢迎使用Pinia</div>
        <div>{{ userStore.name }}</div>
        <button
            @click="updateUserName('TOM-' + Math.floor(Math.random() * 10))"
        >
            修改名字
        </button>
        <p>
            Index:
            <router-link to="/">点击跳转至首页</router-link>
        </p>
    </div>
</template>

<script lang="ts" setup>
import usePinia from '@/store/user';
const userStore = usePinia();
const updateUserName = userStore.updateName;
</script>

<style lang="scss" scoped>
.use-pinia {
}
</style>

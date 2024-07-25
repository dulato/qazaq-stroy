<script setup lang="ts">
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

onMounted(() => {
    if(localStorage.getItem('auth')) {
        return;
    } else {
        router.push('/login');
    }
});
</script>

<template>
    <div class="main">
        <div class="container">
            <div class="main__content">
                Main Page
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import '@/assets/styles/variables';

.main {
    position: relative;
    padding: 100px 0 30px 0;
}
</style>
<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const logout = () => {
    localStorage.removeItem('auth');
    router.push('/login');
};
</script>

<template>
    <header class="header" id="header">
        <div class="container">
            <div class="header__content">
                <div class="header__logo">
                    <img src="@/assets/icons/icon-logo.png" alt="logo">
                </div>
                <div class="header__logout" @click="logout">
                    <div class="header__logout-icon">
                        <img src="@/assets/icons/icon-logout.png" alt="icon">
                    </div>
                    <p class="header__logout-text">
                        Выйти
                    </p>
                </div>
            </div>
        </div>
    </header>
</template>

<style lang="scss">
@import '@/assets/styles/variables';

.header {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    border-bottom: 1px solid $gray-light;
    background: $white;
    z-index: 99;

    &__content {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    &__logo {
        display: block;
        flex: 0 0 140px;
        width: 140px;
        text-align: center;
        overflow: hidden;

        img {
            width: 100%;
            max-width: 100%;
        }
    }

    &__logout {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 15px 0;
        user-select: none;
        cursor: pointer;
    }

    &__logout-icon {
        display: block;
        width: 16px;
        margin: 0 0 4px 0;
        text-align: center;
        overflow: hidden;

        img {
            width: 100%;
            max-width: 100%;
            opacity: 0.6;
        }
    }

    &__logout-text {
        font-family: $roboto;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
        text-align: center;
        color: $gray;
    }
}
</style>
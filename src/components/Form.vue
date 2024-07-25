<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const username = ref('');
const passwor = ref('');
const wrongpass = ref(false);
const typeinput = ref('password');

const invisible = computed(() => typeinput.value === 'password');

const loginAccount = () => {
    if(passwor.value.length > 5) {
        wrongpass.value = false;
        localStorage.setItem('auth', 'true');
        router.push('/');
    } else {
        wrongpass.value = true;
    }
};

const showValue = () => {
    typeinput.value = 'text';
};

const hideValue = () => {
    typeinput.value = 'password';
};
</script>

<template>
    <div class="form">
        <div class="container">
            <div class="form__content">
                <form class="form__content-section" @submit.prevent="loginAccount">
                    <div class="form__content-logo">
                        <img src="@/assets/icons/icon-logo.png" alt="logo">
                    </div>
                    <h3 class="form__content-title">
                        Войти в аккаунт
                    </h3>
                    <div class="form__content-block">
                        <label 
                            for="form-username"
                            id="form-username__label"
                            class="form__content-label form__label-username"
                        >
                            Логин
                        </label>
                        <input 
                            type="text" 
                            id="form-username" 
                            v-model.trim="username"
                            class="form__content-input form__input-username" 
                            placeholder="Ваш логин" 
                            autocomplete="off"
                            required
                        />
                    </div>
                    <div class="form__content-block">
                        <label 
                            for="form-password"
                            id="form-password__label"
                            class="form__content-label form__label-password"
                        >
                            Пароль
                        </label>
                        <div class="form__content-wrapper">
                            <input 
                                :type="typeinput" 
                                id="form-password" 
                                v-model.trim="passwor"
                                class="form__content-input form__input-password" 
                                placeholder="Ваш пароль" 
                                autocomplete="off"
                                required
                            />
                            <button 
                                v-if="invisible"
                                type="button"
                                id="hide-password"
                                class="form__content-eye form__content-hide"
                                @click="showValue"
                            >
                                <img src="@/assets/icons/icon-closed-eye.png" alt="eye">
                            </button>
                            <button 
                                v-else
                                type="button"
                                id="show-password"
                                class="form__content-eye form__content-show"
                                @click="hideValue"
                            >
                                <img src="@/assets/icons/icon-open-eye.png" alt="eye">
                            </button>
                        </div>
                        <p v-if="wrongpass" class="form__content-warning">
                            Неверный пароль
                        </p>
                    </div>
                    <div class="form__content-btn">
                        <button 
                            type="submit"
                            id="button-submit"
                            class="form__content-submit"
                        >
                            Войти
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import '@/assets/styles/variables';

.form {
    position: relative;
    width: 100%;

    &__content {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        width: 100%;
    }

    &__content-section {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        max-width: 570px;
        padding: 60px 20px;
        border-radius: 8px;
        box-shadow: 10px 20px 30px rgba($black, 0.3);
        background: $white;
    }

    &__content-logo {
        display: block;
        width: 120px;
        margin: 0 0 20px 0;
        align-items: center;
        overflow: hidden;

        img {
            max-width: 100%;
            width: 100%;
        }
    }

    &__content-title {
        margin: 0 0 24px 0;
        font-family: $roboto;
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 24px;
        text-align: center;
        color: $black;
    }

    &__content-block {
        position: relative;
        max-width: 320px;
        width: 100%;
        margin: 0 0 16px 0;
    }

    &__content-label {
        display: block;
        width: 100%;
        max-width: 100%;
        margin: 0 0 4px 0;
        font-family: $roboto;
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 12px;
        text-align: left;
        color: $gray;
    }

    &__content-input {
        display: block;
        width: 100%;
        max-width: 100%;
        border-radius: 4px;
        border: 1px solid $gray-light;
        background: $white;
        padding: 12px 15px;
        font-family: $roboto;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
        text-align: left;
        color: $black;
        outline: none;

        &::placeholder {
            color: $gray-light;
        }

        &.form__input-password {
            padding: 12px 40px 12px 15px;
        }
    }

    &__content-warning {
        display: block;
        margin: 12px 0 0 0;
        font-family: $roboto;
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 14px;
        text-align: left;
        color: $red;
        text-indent: 8px;
    }

    &__content-wrapper {
        position: relative;
    }

    &__content-eye {
        position: absolute;
        top: 50%;
        transform: translate(0, -50%);
        right: 10px;
        display: block;
        width: 16px;
        background: transparent;
        overflow: hidden;
        
        img {
            display: block;
            width: 100%;
            max-width: 100%;
        }
    }
    
    &__content-btn {
        max-width: 320px;
        width: 100%;
        margin: 8px 0 0 0;
    }

    &__content-submit {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        max-width: 100%;
        padding: 12px 20px;
        border: none;
        border-radius: 4px;
        background: $blue;
        font-family: $roboto;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 18px;
        text-align: center;
        color: $white;
    }
}
</style>
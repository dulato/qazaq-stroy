<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useListStore } from '@/store/list';
import { Item } from '@/types/Docs';

const router = useRouter();
const store = useListStore();

const searchVal = ref('');
const resutlVal = ref('');
const cleanable = ref(false);

const listStore = computed(() => 
    store.listdocs.filter((elem: Item) => 
        elem.title.toLowerCase().includes(resutlVal.value.toLowerCase())
    )
);

const searchList = () => {
    if(cleanable.value) {
        cleanable.value = false;
        searchVal.value = '';
        resutlVal.value = '';
    } else {
        if(searchVal.value.length > 0) {
            resutlVal.value = searchVal.value;
            cleanable.value = true;
        }
    }
};

onMounted(() => {
    if(localStorage.getItem('auth')) {
        return;
    } else {
        router.push('/login');
    }
});
</script>

<template>
    <div class="content">
        <div class="container">
            <div class="content__content">
                <div class="content__searcher">
                    <form class="content__searcher-form" @submit.prevent="searchList">
                        <div class="content__searcher-field">
                            <div class="content__searcher-icon">
                                <img src="@/assets/icons/icon-search.png" alt="icon">
                            </div>
                            <input 
                                type="text" 
                                id="content__searcher-input"
                                v-model.trim="searchVal"
                                class="content__searcher-input"
                                placeholder="Введите текст"
                                autocomplete="off"
                            />
                        </div>
                        <button 
                            type="submit"
                            id="content__searcher-btn"
                            class="content__searcher-btn"
                        >
                            {{ cleanable ? 'Очистить' : 'Найти' }}
                        </button>
                    </form>
                </div>

                <div class="content__section">
                    <h2 class="content__title">
                        {{ listStore.length > 0 ? 'Все документы' : 'Не найдено' }}
                    </h2>

                    <div v-if="listStore.length > 0" class="content__grid">
                        <ul class="content__list content__list-id">
                            <li class="content__orders-title">
                                №
                            </li>
                            <li 
                                v-for="item in listStore" 
                                :key="item.id"
                                class="content__orders-li"
                            >
                                {{ item.id }}
                            </li>
                        </ul>
                        <ul class="content__list content__list-date">
                            <li class="content__orders-title">
                                Дата
                            </li>
                            <li 
                                v-for="item in listStore" 
                                :key="item.id"
                                class="content__orders-li"
                            >
                                {{ item.date }}
                            </li>
                        </ul>
                        <ul class="content__list content__list-status">
                            <li class="content__orders-title">
                                Статус
                            </li>
                            <li 
                                v-for="item in listStore" 
                                :key="item.id"
                                class="content__orders-li"
                                :class="{
                                    'content__orders-li--active': item.status === 'В работе'
                                }"
                            >
                                {{ item.status }}
                            </li>
                        </ul>
                        <ul class="content__list content__list-type">
                            <li class="content__orders-title">
                                Тип
                            </li>
                            <li 
                                v-for="item in listStore" 
                                :key="item.id"
                                class="content__orders-li"
                            >
                                {{ item.type }}
                            </li>
                        </ul>
                        <ul class="content__list content__list-number">
                            <li class="content__orders-title">
                                Номер
                            </li>
                            <li 
                                v-for="item in listStore" 
                                :key="item.id"
                                class="content__orders-li"
                            >
                                {{ item.number }}
                            </li>
                        </ul>
                        <ul class="content__list content__list-title">
                            <li class="content__orders-title">
                                Организация
                            </li>
                            <li 
                                v-for="item in listStore" 
                                :key="item.id"
                                class="content__orders-li"
                            >
                                {{ item.title }}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import '@/assets/styles/variables';

.content {
    position: relative;
    padding: 100px 0 40px 0;

    &__searcher {
        margin: 0 0 30px 0;
    }

    &__searcher-form {
        display: flex;
        align-items: center;
    }

    &__searcher-field {
        position: relative;
        flex: 0 1 300px;
        margin: 0 8px 0 0;
    }

    &__searcher-icon {
        position: absolute;
        left: 10px;
        top: 50%;
        transform: translate(0, -50%);
        display: block;
        height: 12px;
        width: 12px;
        text-align: center;
        overflow: hidden;

        img {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    &__searcher-input {
        display: block;
        width: 100%;
        max-width: 100%;
        border: 1px solid $gray-light;
        border-radius: 4px;
        background: $white;
        padding: 10px 20px 10px 30px;
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
    }

    &__searcher-btn {
        flex: 0 0 130px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px 20px;
        background: $blue;
        border-radius: 4px;
        border: none;
        font-family: $roboto;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
        text-align: center;
        color: $white;
    }
    
    &__title {
        margin: 0 0 20px 0;
        font-family: $roboto;
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 24px;
        text-align: left;
        color: $black;
    }
    
    &__grid {
        display: grid;
        grid-template-columns: 50px 2fr 3fr 1fr 2fr 4fr;
        grid-auto-rows: 1fr;
        gap: 2px;
        background: $gray-light;
        border: 2px solid $gray-light;
        border-radius: 4px;
        overflow: hidden;
    }

    &__list {
        display: grid;
        grid-template-columns: 1fr;
        grid-auto-rows: 1fr;
        gap: 2px;
        background: $gray-light;
    }

    &__orders-title {
        display: block;
        padding: 8px 12px;
        background: $blue;
        border: none;
        font-family: $roboto;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 16px;
        text-align: left;
        color: $white;
        user-select: none;
    }

    &__orders-li {
        display: block;
        padding: 8px 12px;
        background: $white;
        border: none;
        font-family: $roboto;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
        text-align: left;
        color: $black;
        user-select: none;

        &--active {
            color: $gray-light;
        }
    }

    @media screen and (max-width: 992px) {
        &__grid {
            grid-template-columns: 50px 1fr 2fr 1fr;
            grid-auto-rows: 1fr;
        }

        &__list-number {
            grid-column-start: 1;
            grid-column-end: 3;
        }

        &__list-title {
            grid-column-start: 3;
            grid-column-end: 5;
        }
    }

    @media screen and (max-width: 768px) {
        &__grid {
            grid-template-columns: 50px 1fr 2fr;
            grid-auto-rows: 1fr;
        }

        &__list-type {
            grid-column-start: 1;
            grid-column-end: 3;
        }

        &__list-number {
            grid-column-start: 3;
            grid-column-end: 4;
        }

        &__list-title {
            grid-column-start: 1;
            grid-column-end: 4;
        }
    }

    @media screen and (max-width: 600px) {
        &__searcher-form {
            display: block;
        }

        &__searcher-field {
            margin: 0 0 8px 0;
        }

        &__searcher-btn {
            width: 100%;
        }

        &__grid {
            grid-template-columns: 1fr 2fr;
            grid-auto-rows: 1fr;
        }

        &__list-status {
            grid-column-start: 1;
            grid-column-end: 3;
        }

        &__list-type {
            grid-column-start: 1;
            grid-column-end: 2;
        }

        &__list-number {
            grid-column-start: 2;
            grid-column-end: 3;
        }

        &__list-title {
            grid-column-start: 1;
            grid-column-end: 3;
        }
    }
}
</style>
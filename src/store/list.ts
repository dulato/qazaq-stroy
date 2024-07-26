import { defineStore } from 'pinia';
import { ref } from 'vue';
import { Item } from '@/types/Docs';

export const useListStore = defineStore('list', () => {
    const listdocs = ref([
        {
            id: 1,
            status: 'Ожидает подписания',
            type: 'ABP',
            number: 'TR-487/5',
            date: '03/26/2024',
            title: `Murray's Discount Auto Stores`
        },
        {
            id: 2,
            status: 'Подписано Заказчиком',
            type: 'ABP',
            number: 'TR-487/5',
            date: '03/26/2024',
            title: `Magna Architectural Design`
        },
        {
            id: 3,
            status: 'Подписано Заказчиком',
            type: 'ABP',
            number: 'TR-487/5',
            date: '03/26/2024',
            title: `Pro Property Maintenance`
        },
        {
            id: 4,
            status: 'Подписано',
            type: 'ABP',
            number: 'TR-487/5',
            date: '03/26/2024',
            title: `Johnson's General Stores`
        },
        {
            id: 5,
            status: 'В работе',
            type: 'ABP',
            number: 'TR-487/5',
            date: '03/26/2024',
            title: `Total Network Development`
        },
    ] as Item[]);

    return {
        listdocs
    }
});
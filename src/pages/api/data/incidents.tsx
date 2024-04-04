import {incidentType} from "@component/pages/api/incidents";

export const incidents: incidentType[] = [
    {
        id: '1',
        address: 'Зубовский бульвар 4с1',
        fireRank: '1',
        deceased: 0,
        injured: 3,
        rescued: 5,
        district: 201,
        date: '21.01.2023',
    },
    {
        id: '2',
        address: 'Москва, 1-я Вольская 22к1',
        fireRank: '1',
        deceased: 1,
        injured: 2,
        rescued: 4,
        district: 203,
        date: '21.01.2023',
    },
    {
        id: '3',
        address: 'Тестовская 8',
        fireRank: '3',
        deceased: 2,
        injured: 1,
        rescued: 3,
        district: 207,
        date: '21.01.2023',
    },
    {
        id: '4',
        address: 'Москва, Лесная 3',
        fireRank: '1 Бис',
        deceased: 0,
        injured: 0,
        rescued: 2,
        district: 211,
        date: '21.01.2023',
    },
    {
        id: '5',
        address: 'Гиляровского 29',
        fireRank: '2',
        deceased: 0,
        injured: 1,
        rescued: 6,
        district: 209,
        date: '21.01.2023',
    }
]
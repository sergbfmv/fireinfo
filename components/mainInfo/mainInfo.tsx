import {useEffect, useState} from "react";
import s from '../../src/styles/mainBlock.module.css'
import MapComponent from "../map/map";

export const fetchIncidents: incidentType[] = [
    {
        id: 1,
        address: 'Зубовский бульвар 4с1',
        fireRank: '1',
        deceased: 0,
        injured: 3,
        rescued: 5,
        district: 201,
        date: '21.01.2023',
    },
    {
        id: 2,
        address: 'Москва, 1-я Вольская 22к1',
        fireRank: '1',
        deceased: 1,
        injured: 2,
        rescued: 4,
        district: 203,
        date: '21.01.2023',
    },
    {
        id: 3,
        address: 'Тестовская 8',
        fireRank: '3',
        deceased: 2,
        injured: 1,
        rescued: 3,
        district: 207,
        date: '21.01.2023',
    },
    {
        id: 4,
        address: 'Москва, Лесная 3',
        fireRank: '1 Бис',
        deceased: 0,
        injured: 0,
        rescued: 2,
        district: 211,
        date: '21.01.2023',
    },
    {
        id: 5,
        address: 'Гиляровского 29',
        fireRank: '2',
        deceased: 0,
        injured: 1,
        rescued: 6,
        district: 209,
        date: '21.01.2023',
    }
]

const MainInfo = () => {
    const [data, setData] = useState<incidentType[]>(fetchIncidents)
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div>
            <h1>Fire Info</h1>
            <div className={s.staticInfo}>
                <p onClick={() => setIsOpen(prevState => !prevState)}>Статистические данные</p>
                {isOpen && <table>
                    <thead>
                    <tr>
                        <th>Адрес</th>
                        <th>Ранг пожара</th>
                        <th>Погибшие</th>
                        <th>Пострадавшие</th>
                        <th>Спасенные</th>
                        <th>Район выезда</th>
                        <th>Дата пожара</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data.map((incident) => (
                        <tr key={incident.id}>
                            <td>{incident.address}</td>
                            <td>{incident.fireRank}</td>
                            <td>{incident.deceased}</td>
                            <td>{incident.injured}</td>
                            <td>{incident.rescued}</td>
                            <td>{incident.district}</td>
                            <td>{incident.date}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>}
            </div>
            <MapComponent addresses={fetchIncidents.map(incident => ({
                address: incident.address,
                label: incident.address
            }))} />
        </div>
    )
}

export default MainInfo;

type incidentType = {
    id: number
    address: string
    fireRank: string
    deceased: number
    injured: number
    rescued: number
    district: number
    date: string
}

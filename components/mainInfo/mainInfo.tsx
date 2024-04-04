import {useEffect, useState} from "react";
import s from '../../src/styles/mainBlock.module.css'
import MapComponent from "../map/map";
import {incidents} from "@component/pages/api/data/incidents";

export const getStaticProps = async () => {
    const res = await fetch(`${process.env.API_HOST}/incidents`)
    const data = await res.json()

    if (!data) {
        return {
            notFound: true
        }
    }

    return {
        props: {incidents: data}
    }
}

const MainInfo = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div>
            <h1>Fire Info</h1>
            <div>
                <span onClick={() => setIsOpen(prevState => !prevState)} className={s.table}>Статистические данные</span>
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
                    {incidents.map((incident) => (
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
            <MapComponent addresses={incidents.map(incident => ({
                address: incident.address,
                label: incident.address
            }))} />
        </div>
    )
}

export default MainInfo;



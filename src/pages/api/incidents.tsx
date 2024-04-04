// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from "next";
import {incidents} from "@component/pages/api/data/incidents";

export type incidentType = {
    id: number
    address: string
    fireRank: string
    deceased: number
    injured: number
    rescued: number
    district: number
    date: string
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<incidentType[] | { message: string }>,
) {
    if (req.method === 'GET') {
        res.status(200).json(incidents);
    } else if (req.method === 'POST') { // Добавляем обработку POST-запроса
        // Получаем данные из тела запроса
        const {id, address, fireRank, deceased, injured, rescued, district, date} = req.body;

        // Проверяем, есть ли все необходимые данные для добавления инцидента
        if (!id || !address || !fireRank || !deceased || !injured || !rescued || !district || !date) {
            res.status(400).json({message: "Не хватает обязательных полей"});
            return;
        }

        // Создаем новый инцидент
        const newIncident: incidentType = {
            id,
            address,
            fireRank,
            deceased,
            injured,
            rescued,
            district,
            date
        };

        // Добавляем новый инцидент в массив
        incidents.push(newIncident);

        // Возвращаем успешный ответ
        res.status(201).json(incidents);
    } else {
        res.setHeader('Allow', ['GET', 'POST']); // Указываем доступные методы для данного эндпоинта
        res.status(405).end(`Метод ${req.method} не поддерживается`); // Возвращаем ошибку метода, если метод не GET или POST
    }
}


import { Request, Response } from "express";
import { countries } from "../data";

export const upDateCountry = (req: Request, res: Response) => {

    const id = req.params.id

    const { name, capital, continent } = req.body

    const upDateItem = countries.find((country) => country.id.toString() === id)

    if (upDateItem) {

        if (name) {
            upDateItem.name = name
        }
        if (capital) {
            upDateItem.capital = capital
        }
        if (continent) {
            upDateItem.continent = continent
        }

        res.send("País alterado com sucesso").status(200).end()

    } else {

        res.send("Id não encontrado").status(500).end()

    }

}
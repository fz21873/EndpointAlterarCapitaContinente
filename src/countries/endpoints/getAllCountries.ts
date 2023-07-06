import { Request, Response } from "express"
import { countries } from "../data"
import { country } from "../types"

export const getAllCountries = (req: Request, res: Response) => {

    var result: country[] = []

    const continent = req.query.continent as string
    const name = req.query.name as string

    if (continent && name) {
        res.status(422).statusMessage = "Passe apenas uma query"


    } else if (continent) {

        result = countries.filter(
            (country) =>
                country.continent.toLocaleLowerCase() === continent.toLocaleLowerCase())


    } else if (name) {
        result = countries.filter((country) => country.name.toLocaleLowerCase().includes(name.toLocaleLowerCase()))


    } else {
        result = countries
    }

    if (result.length > 0) {

        res.send(result).status(200).end()

    } else {
        res.send(result).status(422).end()

    }




}
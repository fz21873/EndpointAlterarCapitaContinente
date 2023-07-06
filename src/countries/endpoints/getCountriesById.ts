import { Request, Response } from "express"
import { country } from "../types"
import { countries } from "../data"

export const getCountriesById = (req: Request, res: Response) => {
    const id = req.params.id
    const result: country | undefined = countries.find(
        (country: country) => country.id.toString() === id)

        if(result){
            res.send(result)
        }else{
            res.statusMessage= "Esse id nao existe"
            res.statusCode= 404
            res.end()
        }
    
}
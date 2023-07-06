import { Request, Response } from 'express';
import { app } from './app';
import { getAllCountries } from './countries/endpoints/getAllCountries';

import { getCountriesById } from './countries/endpoints/getCountriesById';
import { upDateCountry } from './countries/endpoints/updateCountry';

//rotas para os endpoints do back
//countries
app.get("/countries", getAllCountries)

app.get("/countries/:id", getCountriesById)

app.put("/countries/:id", upDateCountry)








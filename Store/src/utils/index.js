// custom axios instance

import axios from "axios"

const baseUrl = ''

export const customFetch = axios.create({
    baseURL:baseUrl
})
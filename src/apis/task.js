import AxiosService from "../commons/AxiosService"
import { API_ENDPOINT } from "../constants/http"

const url = '/tasks'

export const fetchListTask = ()=>{
    return AxiosService.get(API_ENDPOINT+url)
}
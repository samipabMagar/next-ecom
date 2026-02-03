import axios from "axios";
import { config } from "@/config/config";

export const getProducts = async(searchParams) =>{
    const sort = (await searchParams)?.sort || "";
    const min = (await searchParams)?.minPrice ||  "";
    const max = (await searchParams)?.maxPrice || "";
    const category = (await searchParams)?.category || "";
    const brands = (await searchParams)?.brands || "";
    const name = (await searchParams)?.name || "";
    
    const response = await axios.get(`${config.apiUrl}/api/products?sort=${sort}&min=${min}&max=${max}&category=${category}&brand=${brands}&name=${name}`);
    return response.data;
}
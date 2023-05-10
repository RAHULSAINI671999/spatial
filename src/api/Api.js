import axios from "axios"

export async function gameData(){
    const products = await axios.get(
        "https://fakestoreapi.com/products"
    );
    return products;
}
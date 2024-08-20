export const apiCaller = async()=>{
    let data = fetch('https://fakestoreapi.com/products')
    return await (await data).json();

}
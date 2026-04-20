//it is asynchronous function
fetch("https://fakestoreapi.com/products")
.then((products)=>products.json())
.catch((error)=>console.log(error))//taaki crash na ho poora
.then((data)=>console.log(data))
.catch((error)=>console.log(error));

const getData= async()=>{
    try{
    const response=await fetch("https://fakestoreapi.com/products")
    //console.log(response);
    const data= await response.json()
    console.log(data);}
    catch(error){
        console.log("fetch error")
    }
}
//error handling ke liye use try catch as catch ni hota async await me 
getData();
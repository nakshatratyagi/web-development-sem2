const mypromise= new Promise((resolve,reject)=>{
    let age=20;
    if(age>18){
        resolve("elogible")
    }
    else{
        reject("not eligible")
    }
})
const checkVoteEligibility=async()=>{
    const response =await mypromise;
    console.log(response);
}

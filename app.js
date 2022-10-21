import axios from "axios"
const getUsers =() => {
    return new Promise(async(resolve,reject)=>{
        const{data:users}=await axios ("https://jsonplaceholder.typicode.com/users/1")
        
        resolve(users)
    })
}

const getPOSTS=() => {
    return new Promise(async(resolve,reject)=>{
        const{data}=await axios("https://jsonplaceholder.typicode.com/posts/1?userId=1")
        resolve(data)
    
    })
}

 const getDATA =async()=>{
    try {
        const users= await getUsers()
        const data =await getPOSTS()
        console.log(users)
        console.log("Posts",data)
    }
    catch(e) {
        console.log(e)
    }
}

export default getDATA
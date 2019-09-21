import axios from 'axios'
const url = `http://localhost:4000`


export const login = async (email, password) => {
    try{
        const res = await axios.post(`${url}/login`, {
            "user": {
                "email": email,
                "password": password
            }
        })
        console.log(res)
        localStorage.setItem("token",res.data)
        return true
    }catch{
        console.log("catch error")
        return false
    }
    
    // .then(res => {
    // }).catch(err => {
    //     console.log(err.response)
    // })
}

export const signup = async (name, email, password) => {
    const res = await axios.post(`${url}/signup`, {
        "user": {
            "name":name,
            "email": email,
            "password": password
        }
    })
    console.log(res)
    localStorage.setItem("token",res.data)
}

export const logout = ()=>{
    localStorage.setItem("token", null)
}


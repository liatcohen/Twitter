import axios from 'axios'
const url = `http://localhost:4000`


export const login = async (email, password) => {
    try {
        const res = await axios.post(`${url}/login`, {
            "user": {
                "email": email,
                "password": password
            }
        })
        console.log(res)
        localStorage.setItem("token", res.data)
        return true
    } catch{
        console.log("catch error")
        return false
    }
}

export const signup = async (name, email, password) => {
    const res = await axios.post(`${url}/signup`, {
        "user": {
            "name": name,
            "email": email,
            "password": password
        }
    })
    console.log(res)
    localStorage.setItem("token", res.data)
}

export const logout = () => {
    localStorage.setItem("token", null)
}

export const getTweet = async (id) => {
    const tweet=await axios.get(`${url}/tweet/${id}`)
    console.log("api client get tweet")
    console.log(tweet.data)

    return tweet.data
}


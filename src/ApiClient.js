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
        localStorage.setItem("token", res.data.token)
        return true
    } catch {
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
    localStorage.setItem("token", res.data.token)
}

export const logout = () => {
    localStorage.setItem("token", null)
}

export const getTweets = async (id) => {
    const res = await axios.get(`${url}/tweets`,
        { headers: { authorization: `Token ${localStorage.getItem('token')}`, } })
    console.log(res.data.tweets)
    return res.data.tweets
}

export const getTweet = async (id) => {
    const tweet = await axios.get(`${url}/tweet/${id}`,
        { headers: { authorization: `Token ${localStorage.getItem('token')}`, } })
    return tweet.data
}


export const getUserTweets = async (userId) => {
    const res = await axios.get(`${url}/user/${userId}`,
        { headers: { authorization: `Token ${localStorage.getItem('token')}`, } })
    return res.data
}


const url = `http://localhost:4000`

 const AddDummyData = async () => {
    console.log("AddDummyData")
    const user1 = new User({
        name: "Alice111",
        email: "alice@gmail.com",
        password: "123456",
        imageUrl:"https://m.media-amazon.com/images/S/aplus-media/vc/103001be-0873-43f1-97d4-c0c2bb4655e1._SL300__.jpg"})

        console.log(user1)
        const res = await axios.post(`${url}/signup`, {
            "user": {user1}
        })
        console.log(res)
}
AddDummyData()
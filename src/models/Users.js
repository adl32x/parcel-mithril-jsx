import m from "mithril"

let User = {
    list: [],
    loadList: () => {
        return m.request({
            method: "GET",
            url: "https://rem-rest-api.herokuapp.com/api/users",
            withCredentials: true,
        })
        .then((result) => {
            console.log('Result:', result)
            User.list = result.data
        })
    },

    current: {},
    load: (id) => {
        return m.request({
            method: "GET",
            url: "https://rem-rest-api.herokuapp.com/api/users/" + id,
            withCredentials: true,
        })
        .then((result) => {
            User.current = result
        })
    },

    save: () => {
        m.request({
            method: "PUT",
            url: "https://rem-rest-api.herokuapp.com/api/users/" + User.current.id,
            data: User.current,
            withCredentials: true,
        })
        return false
    }
}

export default User

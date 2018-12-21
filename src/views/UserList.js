import m from "mithril"
import User from "../models/Users"

export default {
    oninit: User.loadList,
    view: () => {
        return (<div class="user-list">
            { User.list.map((user) => {
                return (<a href={"/edit/" + user.id} oncreate={m.route.link} class="user-list-item">{user.firstName} {user.lastName}</a>)
            })}
        </div>)
    }
}
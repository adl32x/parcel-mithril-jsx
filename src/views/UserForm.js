import m from "mithril"
import User from "../models/Users"

export default {
    oninit: (vnode) => {User.load(vnode.attrs.id)},
    view: () => {
        return (<form>
            <label class="label">First name</label>
            <input class="input" type="text" placeholder="First name"
                oninput={(e) => {User.current.firstName = e.target.value}}
                value={User.current.firstName}
                />

            <label class="label">Last name</label>
            <input class="input" type="text" placeholder="Last name" 
                oninput={(e) => {User.current.lastName = e.target.value}}
                value={User.current.lastName}
                />

            <button class="button" type="button" onclick={User.save}>Save</button>
        </form>)
    }
}
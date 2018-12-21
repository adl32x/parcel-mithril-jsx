import m from "mithril"
import UserList from "./views/UserList"
import UserForm from "./views/UserForm"
import Layout from "./views/Layout"

console.log(UserList)

m.route(document.body, "/list", {
    "/list": {
        render: function() {
            return <Layout><UserList /></Layout>
        }
    },
    "/edit/:id": {
        render: function(vnode) {
            return <Layout><UserForm id={vnode.attrs.id} /></Layout>
        }
    },
})
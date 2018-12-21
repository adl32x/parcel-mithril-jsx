import m from "mithril"

export default {
    view: (vnode) => {
        return (<div class="layout">
            <nav class="menu">
                <a href="/list" oncreate={m.route.link}>Users</a>
                <section>{vnode.children}</section>
            </nav>
        </div>)
    }
}
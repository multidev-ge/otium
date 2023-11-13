import { createStore } from "vuex"
import pagesModule from './modules/pagesModule'
import contactModule from './modules/contactModule'
import mediaModule from './modules/mediaModule'
import projectsModule from './modules/projectsModule'

const store = createStore({
    modules: {
        "pages": pagesModule,
        "contact": contactModule,
        "media": mediaModule,
        "projects": projectsModule,
    },
})

export default store
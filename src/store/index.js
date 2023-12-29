import { createStore } from "vuex"
import pagesModule from './modules/pagesModule'
import contactModule from './modules/contactModule'
import mediaModule from './modules/mediaModule'
import projectsModule from './modules/projectsModule'
import flatsModule from './modules/flatsModule'
import menusModule from './modules/menus'
import mapModule from './modules/mapModule'

const store = createStore({
    modules: {
        "pages": pagesModule,
        "contact": contactModule,
        "media": mediaModule,
        "projects": projectsModule,
        "flats": flatsModule,
        "mainProject": flatsModule,
        "floors": flatsModule,
        "menus": menusModule,
        "maps": mapModule,
    },
})

export default store
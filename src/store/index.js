import { createStore } from "vuex"
import pagesModule from './modules/pagesModule'
import contactModule from './modules/contactModule'
import mediaModule from './modules/mediaModule'

const store = createStore({
    modules: {
        "pages": pagesModule,
        "contact": contactModule,
        "media": mediaModule,
    },
})

export default store
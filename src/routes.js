import {createRouter,createWebHashHistory} from 'vue-router'
import PageViewer from './components/PageViewer.vue'
import CreatePage from './components/CreatePage.vue'
import Pages from './views/Pages.vue';


const router = createRouter({
    history:createWebHashHistory(),
    routes:[
        {path: '/:index?',component : PageViewer, props: true},
        {
            path: '/pages', 
            component:Pages,
            children: [      
                {path: 'create', component:CreatePage}
            ]
        },
    
    
    ]
});


export default router;




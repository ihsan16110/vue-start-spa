<template>
   <navbar></navbar>

    <router-view></router-view>

</template>

<script>

import Navbar from './components/Navbar.vue';
import PageViewer from './components/PageViewer.vue';
import NavbarLink from './components/NavbarLink.vue';
import CreatePage from './components/CreatePage.vue';
 

export default {
    components:{
        Navbar
     
    },
    created(){
        this.getPages();
     
    },

    data() {
            return {
                pages: []
            };
    },
    methods:{
            async getPages(){
                    let res = await fetch('pages.json')
                    let data = await res.json();

                    this.pages = data;
                },
            pageCreated(pageObj){
                    this.pages.push(pageObj);
                }

            }
    }
</script>
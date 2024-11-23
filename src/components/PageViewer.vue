
<template>

    <div v-if="page" class="container">
            <h1 class="emphasize">{{ page.pageTitle }}</h1>
            <p>{{page.content}}</p>
    </div>

</template>

<script>
    export default{
        // props:{
        //     page : {
        //         type:Object,
        //         default(rawProps){
        //             return{
        //                 pageTitle: '',
        //                 content: ''

        //             }
        //         }
        //     }
        // }

        created(){
        // console.log(this.$route.params);
        this.page  = this.$pages.getSinglePage(this.$route.params.index);
        },
        data(){
            return {
                page :  null
            };
        }
       
    }
</script>

<style>
.emphasize{
    color: blue;
}
</style>
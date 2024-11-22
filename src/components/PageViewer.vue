
<template>

    <div class="container">
            <h1 class="emphasize">Page Title</h1>
            <p>{{$route.params.index}}</p>
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
        console.log(this.$route.params);
        }
       
    }
</script>

<style>
.emphasize{
    color: blue;
}
</style>
<template>
    <a 
        class="nav-link"
        :class="activeClasses"
        aria-current="page" 
        :href="page.link.url"
        :title="`This link will goes to the ${page.link.text} page`" 
        >{{ page.link.text }}</a>
     <!-- @click.prevent="navLinkClick(index)" -->
</template>

<script>
export default {
    props:['page', 'isActive'],
    computed:{
        activeClasses() {
            return {
                 active: this.isActive,
                 emphasize: this.isActive
            };

        }
    }
}

</script>
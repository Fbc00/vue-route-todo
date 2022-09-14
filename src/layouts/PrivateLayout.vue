<template>
    <v-main>
        <page-bar-vue />
            <router-view />
        <page-footer-vue />
    </v-main>
    
</template>

<script>
import PageBarVue from '@/components/PageBar.vue';
import PageFooterVue from '@/components/PageFooter.vue';
export default {
    components: {PageBarVue, PageFooterVue}

}
</script>

<style>

</style>
<template>
    <div>
        <site-header></site-header>
        <router-view></router-view>
        <site-footer></site-footer>
    </div>
</template>

<script>
    import FooterComponent from './FooterComponent'
    import HeaderComponent from './HeaderComponent'
    export default {
        components: {
            siteFooter: FooterComponent,
            siteHeader: HeaderComponent
        }
    }
</script>

<style lang="scss" scoped>

</style>

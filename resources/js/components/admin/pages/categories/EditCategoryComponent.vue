<template>
    <div>
        <h1>Editar Categoria</h1>
        <form-category :category="category" :updating="true"></form-category>
    </div>
</template>

<script>
    import FormCategoryComponent from './partials/FormCategoryComponent'
    export default {
        data(){
            return{
                category: {}

            }
        },
        props: {
            id: {
                require: true
            }
        },
        created(){
            this.loadCategory()
        },
        components: {
            formCategory: FormCategoryComponent
        },
        methods: {
            loadCategory(){
                this.$store.dispatch('loadCategory', this.id)
                .then(response => this.category = response)
                .catch(error=>{
                    this.$snotify.error('Categoria não encontrada', '404')
                    this.$router.push({name: 'admin.categories'})
                })
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>

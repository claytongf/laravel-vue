<template>
    <div>
        <h1>Listagem das Categorias</h1>
        <div class="row">
            <div class="col">
                <router-link :to="{name: 'admin.categories.create'}" class="btn btn-success">Cadastrar</router-link>
            </div>
            <div class="col">
                <search @searchCategory="search"></search>
            </div>
        </div>
        <table class="table table-dark">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th width="200">Ações</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(category, index) in categories.data" :key="index">
                    <td>{{category.id}}</td>
                    <td v-text="category.name"></td>
                    <td>
                        <router-link class="btn btn-primary" :to="{name: 'admin.categories.edit', params: {id: category.id}}">Editar</router-link>
                        <a href="#" class="btn btn-danger" @click.prevent="confirmDestroy(category)">Remover</a>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from "axios"
import SearchCategoryComponent from './partials/SearchCategoryComponent'
export default {
	created() {
		this.loadCategories()
	},
	computed: {
        categories(){
            return this.$store.state.categories.items
        }
    },
    data(){
        return {
            name: ''
        }
    },
    methods: {
        loadCategories(){
            this.$store.dispatch('loadCategories', {name: this.name})
        },
        confirmDestroy(category){
            this.$snotify.error(`Deseja realmente deletar a categoria: ${category.name}?`, 'Deletar?', {
                timeout: 10000,
                showProgressBar: true,
                closeOnClick: true,
                buttons: [
                    {text: 'Não', action: (value) => {console.log('Não deletou...'), this.$snotify.remove(value.id)}},
                    {text: 'Sim', action: (value) => {this.destroy(category), this.$snotify.remove(value.id)}}
                ]
            })
        },
        destroy(category){
            this.$store.dispatch('destroyCategory', category.id)
                .then(() =>{
                    this.$snotify.success(`Sucesso ao deletar a categoria: ${category.name}`)
                    this.loadCategories()
                })
                .catch(error=>{
                    this.$snotify.error('Erro ao deletar categoria', 'Erro')
                })
        },
        search(filter){
            this.name = filter
            this.loadCategories()
        }
    },
    components:{
        search: SearchCategoryComponent
    }
}
</script>

<style lang="scss" scoped>

</style>

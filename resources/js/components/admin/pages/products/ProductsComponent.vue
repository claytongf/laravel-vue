<template>
    <div>
        <h1>Listagem de Produtos</h1>
        <div class="row">
            <div class="col">
                <button class="btn btn-success" @click.prevent="create">Novo</button>
                <vodal :show="showModal" animation="zoom" @hide="hideModal" :width="600" :height="500">
                    <product-form @success="success" :product="product" :update="update"></product-form>
                </vodal>
            </div>
            <div class="col">
                <search @search="searchForm"></search>
            </div>
        </div>
        <table class="table table-dark">
            <thead>
                <tr>
                    <th>Imagem</th>
                    <th>Nome</th>
                    <th width="200">Ações</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="product in products.data" :key="product.id">
                    <td>
                        <div v-if="product.image">
                            <img :src="[`/storage/products/${product.image}`]" :alt="product.name" class="img-list">
                        </div>
                    </td>
                    <td>{{ product.name }}</td>
                    <td>
                        <a @click.prevent="edit(product.id)" href="#" class="btn btn-info">Editar</a>
                        <destroy :item="product" @destroy="destroy"></destroy>
                    </td>
                </tr>
            </tbody>
        </table>
        <pagination :pagination="products" :offset="6" @paginate="loadProducts"></pagination>
    </div>
</template>

<script>
    import PaginationComponent from '../../../layouts/PaginationComponent'
    import SearchComponent from '../../../layouts/SearchComponent'
    import ProductForm from './partials/ProductForm'
    import Vodal from 'vodal'
    import ButtonDestroyComponent from "../../layouts/ButtonDestroyComponent";

    export default {
        created () {
            this.loadProducts(1)
        },
        data(){
            return {
                search: '',
                showModal: false,
                product: {
                    id: '',
                    name: '',
                    description: '',
                    // image: '',
                    category_id: ''
                },
                update: false
            }
        },
        methods: {
            loadProducts(page) {
                this.$store.dispatch('loadProducts', {...this.params, page})
            },
            edit(id){
                this.reset()
                this.$store.dispatch('loadProduct', id)
                    .then(response => {
                        this.product = response
                        this.showModal = true
                        this.update = true
                    })
                    .catch(()=>{
                        this.$snotify.error('Erro ao carregar o produto', 'Erro')
                    })
            },
            searchForm(filter){
                this.search = filter
                this.loadProducts(1)
            },
            hideModal(){
                this.showModal = false;
            },
            success(){
                this.hideModal()
                this.loadProducts(1)
            },
            create(){
                this.update = false
                this.showModal = true
                this.reset()
            },
            reset(){
                this.product = {
                    id: '',
                    name: '',
                    description: '',
                    // image: '',
                    category_id: ''
                }
            },

            destroy(id){
                this.$store.dispatch('destroyProduct', id)
                .then(()=>{
                    this.$snotify.success('Deletado com sucesso!')
                    this.loadProducts(1)
                })
                .catch(()=>this.$snotify.error('Erro ao deletar'))
            }
        },
        computed: {
            products(){
                return this.$store.state.products.items
            },
            params(){
                return {
                    page: this.products.current_page,
                    filter: this.search
                }
            }
        },
        components: {
            pagination: PaginationComponent,
            search: SearchComponent,
            Vodal,
            ProductForm,
            destroy: ButtonDestroyComponent
        }
    }
</script>

<style lang="scss" scoped>
    .img-list{max-width: 100px;}
</style>

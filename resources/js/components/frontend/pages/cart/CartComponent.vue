<template>
    <div>
        <h1>Carrinho</h1>
        <div class="row">
            <div class="col-12" v-for="product in cart.products" :key="product.id">
                <div v-if="product.image">
                    <img :src="[`/storage/products/${product.image}`]" :alt="product.name" class="img-list">
                </div>
                <div v-else>
                    <img src="/imgs/no-image.png" :alt="product.name" class="img-list">
                </div>
                {{product.name}}
                <button class="btn btn-danger" @click.prevent="removeCart(product)">Remover</button>
                <hr>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        computed: {
            cart(){
                return this.$store.state.cart
            }
        },
        methods: {
            removeCart(product){
                this.$store.commit('REMOVE_PRODUCT_CART', product)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .img-list{max-width: 100px;}
</style>

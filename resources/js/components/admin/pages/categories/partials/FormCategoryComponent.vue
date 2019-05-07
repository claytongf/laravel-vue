<template>
    <div>
        <form @submit.prevent="onSubmit" method="post" class="form" >
            <div :class="['form-group', {'has-error': errors.name}]">
                <div v-if="errors.name">{{errors.name[0]}}</div>
                <input type="text" class="form-control" v-model="category.name">
            </div>
            <div class="form-group">
                <button type="submit" class="btn btn-primary">Cadastrar</button>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        props: {
            category: {
                require: false,
                type: Object|Array,
                default: () => {
                    return {
                        id: '',
                        name: ''
                    }
                }
            },
            updating: {
                require: false,
                type: Boolean,
                default: false
            }
        },
        data(){
            return {
                errors: {}
            }
        },
        methods: {
            onSubmit(){
                const action = this.updating ? 'updateCategory' : 'storeCategory'
                this.$store.dispatch(action, this.category)
                    .then(() => {
                        this.$snotify.success('Cadastro realizado com sucesso')
                        this.$router.push({name: 'admin.categories'})
                    })
                    .catch(error => {
                        this.$snotify.error('Erro ao cadastrar', 'Erro')
                        this.errors = error.response.data.errors
                    })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .has-error{
        color: red;
    }
    .has-error input{
        border: 1px solid red;
    }
</style>

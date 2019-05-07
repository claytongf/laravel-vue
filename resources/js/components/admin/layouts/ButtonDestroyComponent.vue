<template>
    <a @click.prevent="confirmDelete(item)" href="#" class="btn btn-danger">Remover</a>
</template>

<script>
    export default {
        props:{
            item: {
                require: true,
                type: Object
            }
        },
        methods: {
            confirmDelete(item){
                this.$snotify.error(`Deseja realmente deletar o registro ${item.name}?`, 'Confirma?', {
                    timeout: 10000,
                    showProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    buttons: [
                        {text: 'Não', action: (toast)=>this.$snotify.remove(toast.id)},
                        {text: 'Sim', action: (toast)=>{
                                this.$emit('destroy', item.id);
                                this.$snotify.remove(toast.id)
                            }
                        },
                    ]
                })
            },
        }
    }
</script>

<style lang="scss" scoped>

</style>

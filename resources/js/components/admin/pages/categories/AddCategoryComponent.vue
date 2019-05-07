<template>
    <div>
        <h1>Adicionar nova categoria</h1>
        <form-category></form-category>
    </div>
</template>

<script>
import FormCategoryComponent from './partials/FormCategoryComponent'
export default {
    components: {
        formCategory: FormCategoryComponent
    }
}
</script>

<style lang="scss" scoped>

</style>

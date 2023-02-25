<template>
    <div>
        <div class="grid grid-cols-4 gap-4">
            <div v-for="p in products" :key="p">
                <ProductCard :product="p" />
                
            </div>
        </div>

    </div>
</template>

<script setup>
definePageMeta({         //to grab the layout in currently component
    layout:'products'
})

const {data:products}=await useFetch('https://fakestoreapi.com/products')

//useHead composoble use for change defult meta data

useHead({
    title:'Nuxt Mart | Items'
})


</script>

<style scoped>

</style>
<template>
    <div>
        <head>
            <title>
                Nuxt Mart | {{ product.title }}
            </title>
            <Meta name="desciption" :content="product.desciption" />
        </head>
   <ProductDetails :product="product"/>

    </div>
   
</template>
<script setup>

const {id}=useRoute().params
const uri='https://fakestoreapi.com/products/' +id

const {data:product}=await useFetch(uri ,{key: id})

if(!product.value){
    throw createError({statusCode:404 , statusMessage:'Product not found' , fatal:true}) //craetError is by deafult finction that nuxt give us
    //fatal is the bydefault keyword of nuxt for showing the error page
}
definePageMeta({         //to grab the layout in currently component
    layout:'products'
})
</script>

<style scoped>

</style>
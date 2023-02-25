<template>
   <div>
        <h2 class="flex justify-center font-bold text-3xl">About</h2>
        <div>{{ data }}</div>

    </div>
</template>

<script setup>

const {data}=await useFetch('/server/api/currency/GBP')

</script>

<style scoped>


</style>
export default defineEventHandler( async (event) =>{

    // //handle query params
    // const {name}=useQuery(event) //is the bydefault function to use the query

    // //handle post data
    // const {age}= await useBody(event)

    //api call with private key
    //always use $fetch in server api fetch keys
    const {data}=await $fetch('https://api.currencyapi.com/v3/latest?apikey=aNpu8MBfzuDi0Caso2KqXz7nm7Xlqof01SJTHG6H')
    return data
})
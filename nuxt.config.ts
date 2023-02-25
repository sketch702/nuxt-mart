// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss'],
    //meta data
    app:{
        head:{
            title:'Nuxt Mart',
            meta:[
                {
                    name:'description', content:'Everything about Nuxt 3'

                }
            ],
            link:[
                {
                    rel:'stylesheet', href:'https://fonts.googleapis.com/css?family=Material+Icons'
                }
            ]

        }
    },
    //for exposing enviornment variable
    //runtimeConfig basically expose api key to sever routes
    runtimeConfig:{
        currencyKey:process.env.CURRENCY_API_KEY
    }

})

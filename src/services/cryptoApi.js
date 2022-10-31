import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const apiKey = process.env.REACT_APP_CHANGE_API_KEY

const cryptoApiHeaders = {
    'X-RapidAPI-Key': apiKey,
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com'

const createRequest = ( url ) => ({ url, headers: cryptoApiHeaders })

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`)
        }),
        
        getCryptoDetails: builder.query({
            query: (coinId) => createRequest(`/coin/${coinId}`)
        }),
        getCryptoHistory: builder.query({
            query: ({coinId, timePeriod}) => createRequest(`coin/${coinId}/history?timeperiod=${timePeriod}`)
        })
    })
})

export const {
    useGetCryptosQuery,
    
    useGetCryptoDetailsQuery,
    useGetCryptoHistoryQuery
} = cryptoApi
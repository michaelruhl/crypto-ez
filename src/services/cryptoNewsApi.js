import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const apiKey1 = process.env.REACT_APP_NEWS_API_KEY
const cryptoNewsHeaders = {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': apiKey1,
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
  
};

const baseUrl = 'https://bing-news-search1.p.rapidapi.com'

const createRequest = ( url ) => ({ url, headers: cryptoNewsHeaders })

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: (newsCategory, count) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=8`),
        })
    })
})

export const {
    useGetCryptoNewsQuery,
} = cryptoNewsApi
import { configureStore } from '@reduxjs/toolkit'

import { cryptoApi } from '../services/cryptoApi'
import { cryptoNewsApi } from '../services/cryptoNewsApi'
import cryptoDetailsReducer from '../app/cryptoDetails'

export default configureStore({
    reducer: {
        [cryptoApi.reducerPath]: cryptoApi.reducer,
        [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
        cryptoDetails: cryptoDetailsReducer,

    },
})
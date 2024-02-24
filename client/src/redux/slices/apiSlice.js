import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({base : ''})

export const apiSlice = createApi({
    baseQuery,
    tagTypes :['User'],
    endpoints : (builder)=>({}),
})

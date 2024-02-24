// "query" is for fetching 
// "mutation" is for posting , updation

import { apiSlice } from "./apiSlice";
const USERS_URL = '/api/users';

export const userApiSlice = apiSlice.injectEndpoints({
    endpoints : (builder)=>({
        login : builder.mutation({ //remember syntax 
            query : (data)=>({
                url : `${USERS_URL}/login`,
                method : 'POST',
                body : data
            })
        }),
        logout : builder.mutation({
            query : ()=>({
                url : `${USERS_URL}/logout`,
                method : 'POST',
            })
        }),
        register : builder.mutation({
            query : (data) =>({
                url : `${USERS_URL}`,
                method : 'POST',
                body : data
            })
        }),
        update : builder.mutation({
            query : (data) =>({
                url : `${USERS_URL}/profile`,
                method : 'PUT',
                body : data
            })
        })
    })
}) 

export const {useLoginMutation, useLogoutMutation, useRegisterMutation, useUpdateMutation} = userApiSlice;
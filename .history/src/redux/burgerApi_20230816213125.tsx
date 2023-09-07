import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const burgerApi = createApi({
    reducerPath: 'burgerApi',
    baseQuery: fetchBaseQuery({ baseUrl: "https://64be50915ee688b6250c2e7a.mockapi.io/" }),
    endpoints: (builder) => ({
        getAllBurger: builder.query({
            query: () => `BroBurger?sortBy=name`,

        })
    })
})

export const { useGetAllBurgerQuery } = burgerApi
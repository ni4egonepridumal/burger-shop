import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const burgerApi = createApi({
    reducerPath: 'burgerApi',
    baseQuery: fetchBaseQuery({ baseUrl: "https://64be50915ee688b6250c2e7a.mockapi.io/" }),
    endpoints: (builder) => ({
        getAllBurger: builder.query({
            query: () => `BroBurger`,

        }),
        sortBurgerFromName: builder.query({
            query: () => `BroBurger?sortBy=name`,
        }),
        // тестирую добавление коментария
        addCommentFromClient: builder.mutation({
            query: (body) => ({
                headers: { 'content-type': 'application/json' },
                url: "BroBurger",
                method: "PUT",
                body: JSON.stringify{ body }
            })
})
    })
})

export const { useGetAllBurgerQuery, useSortBurgerFromNameQuery, useAddCommentFromClientMutation } = burgerApi
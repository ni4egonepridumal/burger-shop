import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const burgerApi = createApi({
    reducerPath: 'burgerApi',
    tagTypes: ['Comments'],
    baseQuery: fetchBaseQuery({ baseUrl: "https://64be50915ee688b6250c2e7a.mockapi.io/" }),
    endpoints: (builder) => ({
        getAllBurger: builder.query({
            query: () => `BroBurger`,
            providesTags: (result) =>
                result
                    ? [
                        ...result.map(({ id }: never) => ({ type: 'Comments' as const, id })),
                        { type: 'Comments', id: 'LIST' },
                    ]
                    : [{ type: 'Comments', id: 'LIST' }],
        }),
        sortBurgerFromName: builder.query({
            query: () => `BroBurger?sortBy=name`,
        }),
        addCommentFromClient: builder.mutation({
            query: (body) => ({
                headers: { 'content-type': 'application/json' },
                url: `BroBurger/${body.id}`,
                method: "PUT",
                body: JSON.stringify(body)
            }),
            invalidatesTags: [{ type: "Comments", id: "LIST" }]
        })
    })
})

export const { useGetAllBurgerQuery, useSortBurgerFromNameQuery, useAddCommentFromClientMutation } = burgerApi
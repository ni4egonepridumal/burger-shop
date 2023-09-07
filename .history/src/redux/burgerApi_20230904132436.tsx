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
                url: `BroBurger/${body.id}`,
                method: "PUT",
                body: JSON.stringify({
                        id: body.id,
                        composition: body.composition,
                        deleted: false,
                        description: "",
                        discount: 0,
                        discountPrice: 139,
                        image: body.image,
                        isDailyDish: false,
                        limit: 100,
                        name: body.name,
                        order: 1,
                        count: body.counT,
                        price: body.price,
                        weight: body.weight,
                        comments: [
                            {
                                "name": "Саша",
                                "comment": "Вкусный, буду брать еще"
                            },
                            {
                                "name": "Олег",
                                "comment": "Сочный, пальчики оближешь !"
                            },
                            {
                                name: item.name,
                                commen: item.comment
                            }
                        ]
                    
                })
            })
        })
    })
})

export const { useGetAllBurgerQuery, useSortBurgerFromNameQuery, useAddCommentFromClientMutation } = burgerApi
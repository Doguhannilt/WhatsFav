import { SELECT_URL } from "../../constants";
import { apiSlice } from "../apiSlice";


export const selectCategory = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        selectHorror: builder.query({
            query: () => ({
                url: `${SELECT_URL}/select/horror`,
                method: 'GET',
            })
        }),
        selectSad: builder.query({
            query: () => ({
                url: `${SELECT_URL}/select/sad`,
                method: 'GET',
            })
        }),
        selectTheatre: builder.query({
            query: () => ({
                url: `${SELECT_URL}/select/theatre`,
                method: 'GET',
            })
        }),
        selectComedy: builder.query({
            query: () => ({
                url: `${SELECT_URL}/select/comedy`,
                method: 'GET',
            })
        }),
    })
}) 


export const {
    useSelectComedyQuery,
    useSelectHorrorQuery,
    useSelectSadQuery,
    useSelectTheatreQuery
} = selectCategory
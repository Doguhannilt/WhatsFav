import { SEARCH_URL } from "../constants";
import { apiSlice } from "./apiSlice";


export const searchSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        postSearch: builder.mutation({
            query: (data) => ({
                url: `${SEARCH_URL}`,
                method: 'POST',
                body: data
            })
        })
    })
})


export const {
    usePostSearchMutation
} = searchSlice

import { FILTER_URL } from "../constants";
import { apiSlice } from "./apiSlice";


export const filterApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        ratingFilter: builder.mutation({
            query: (data) => ({
                url: `${FILTER_URL}/rating`,
                method: 'POST',
                body: data,
            }),
        }),
        yearFilter: builder.mutation({
            query: (data) => ({
                url: `${FILTER_URL}/year`,
                method: 'POST',
                body: data,
            }),
        }),
        nameFilter: builder.mutation({
            query: (data) => ({
                url: `${FILTER_URL}/name`,
                method: 'POST',
                body: data,
            }),
        }),
    }),
});

export const {
    useNameFilterMutation,
    useRatingFilterMutation,
    useYearFilterMutation,
} = filterApiSlice;

// details.js
import { FAVORITE_URL } from "../../constants";
import { apiSlice } from "../apiSlice";

export const detailPage = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getDetail: builder.query({
            query: (id) => ({
                url: `${FAVORITE_URL}/${id}`, 
                method: 'GET', 
            }),
        }),
    }),
    overrideExisting: false,
});

export const {
    useGetDetailQuery
} = detailPage;

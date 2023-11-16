import { createApi } from '@reduxjs/toolkit/query/react';
import axiosBaseQuery from './axiosBaseQuery';

const advertsAPI = createApi({
  reducerPath: 'adverts',
  baseQuery: axiosBaseQuery(),
  endpoints: builder => ({
    getAdverts: builder.query({
      query: ({ limit = 1, page = 1 }) => {
        const queryParams = new URLSearchParams();
        queryParams.append('page', page);
        queryParams.append('limit', limit);

        return {
          url: `/adverts?${queryParams.toString()}`,
        };
      },
    }),
  }),
});

export default advertsAPI;
export const { useGetAdvertsQuery } = advertsAPI;

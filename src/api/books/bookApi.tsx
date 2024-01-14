import { api } from "@api/api";

export const bookApi = api.injectEndpoints({
  endpoints: (build) => ({
    getBooks: build.query<any, any>({
      query: () => ({
        url: '/books',
        method: "GET",
      }),
    }),
    getBookDetail: build.query<any, any>({
      query: (id) => ({
        url: `/books/${id}`,
      }),
    }),
  }),
});

export const { 
  useGetBooksQuery,
  useGetBookDetailQuery
 } = bookApi;

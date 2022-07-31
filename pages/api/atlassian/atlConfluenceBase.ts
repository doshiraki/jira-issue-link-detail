// Or from '@reduxjs/toolkit/query' if not using the auto-generated hooks
import {fetchBaseQuery, createApi} from "@reduxjs/toolkit/query/react"
import {buildEndpoint} from "./rtkBase"

// initialize an empty api service that we'll inject endpoints into later as needed
export const atlConfluenceBase = buildEndpoint(createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'http://confluence.atlassian.com/'}),
  reducerPath: "confluence",
  endpoints: () => ({}),
}));
 
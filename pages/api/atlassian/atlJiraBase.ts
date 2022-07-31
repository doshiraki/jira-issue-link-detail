import {fetchBaseQuery, createApi} from "@reduxjs/toolkit/query/react"
import {buildEndpoint} from "./rtkBase"

// initialize an empty api service that we'll inject endpoints into later as needed
export const atlJiraBase = buildEndpoint(createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'http://jira.atlassian.com/'}),
  reducerPath: "jira",
  endpoints: () => ({}),
}));


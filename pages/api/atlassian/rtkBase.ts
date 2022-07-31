// Or from '@reduxjs/toolkit/query' if not using the auto-generated hooks
import { Api, BaseQueryFn } from "@reduxjs/toolkit/query/react"
import { EndpointDefinitions } from "@reduxjs/toolkit/dist/query/endpointDefinitions"

type rktRequestInitType = {
    url: string,
    method?: string,
    body?: any,
    params?: any,    
}


export const buildEndpoint = <BaseQuery extends BaseQueryFn, Definitions extends EndpointDefinitions, ReducerPath extends string, TagTypes extends string>
    (base: Api<BaseQuery, Definitions, ReducerPath, TagTypes>) => {

    const build = {
        query: <Result, Arg>(my: {query:(x:Arg)=>rktRequestInitType}) => {
            return {query: my.query, type:{} as Result|null}
        },
        mutation: <Result, Arg>(my: {query:(x:Arg)=>rktRequestInitType}) => {
            return {query: my.query, type:{} as Result|null}
        },
    };
    
    type NewApi = Omit<Api<BaseQuery, Definitions, ReducerPath, TagTypes>, "injectEndpoints"> &
    {
        injectEndpoints<NewDefinitions>(_: {
            endpoints: (b: typeof build) => NewDefinitions;
            overrideExisting?: boolean;
        }): NewDefinitions
    };

    const baseNew = base as any as NewApi;
    const injectEndpoints: typeof baseNew.injectEndpoints = (arg) => arg.endpoints(build);


    return {
        ...base,
        injectEndpoints,
    };

}

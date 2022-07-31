import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import type _bridge from '@forge/bridge'

export type BridgeType = typeof _bridge | null;
export type ContextType = {
  localId: string,
  cloudId: string,
  moduleKey: string,
  extension: any,
  accountId: string,
  timezone: string,
  locale: string,
  siteUrl: string
} | null;

type ValueType = {
  bridge: BridgeType,
  context: ContextType,
};

const loadBridge = (state:ValueType, action: PayloadAction):ValueType => {
  return {...state, bridge: require('../../../../node_modules/@forge/bridge/out/index')};
};
const setContext = (state:ValueType, action: PayloadAction<ContextType>) => {
  return {...state, context: action.payload};
};


const slice = createSlice({
    name: 'atlassian',
    initialState: {
      bridge: null,
      context: null,
    } as ValueType,
    reducers: {
      loadBridge,
      setContext,
    },
  });

export default slice;

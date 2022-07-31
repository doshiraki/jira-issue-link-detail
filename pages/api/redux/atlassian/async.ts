import { useAppSelect } from '../store/hooks'
import {AppDispatch} from '../store/store'
import atlassian, {ContextType} from './slice'

export const useBridgeAction = ()=>{
    let {bridge, context} = useAppSelect((x)=>x.atlassian);

    return async(dispatch:AppDispatch)=>{
        if (bridge == null) {
            dispatch(atlassian.actions.loadBridge());
        } else if (context == null) {
            dispatch(atlassian.actions.setContext(await bridge?.view?.getContext() as ContextType));
        }
    }
}

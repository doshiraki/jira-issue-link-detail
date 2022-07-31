import { useState, useEffect } from 'react'
import { jira } from './generate/jira'
import {useAppSelect} from '../redux/store/hooks'

export const useIssue = (id: string|null) => {
    let bridge = useAppSelect((root)=>root.atlassian.bridge);
    let [issue, setIssue] = useState<typeof jira.getIssue.type>(null);

    useEffect(() => {
        console.log("issue"+JSON.stringify(issue));
        console.log("issue"+JSON.stringify(id));
        if (bridge != null && issue == null && id) {
            (async () => {

                let args = jira.getIssue.query?.({ issueIdOrKey: id });
                try {
                    const res = await bridge?.requestJira?.(args.url, args as RequestInit);
                    if (res?.ok) {
                        setIssue(await res?.json())
                    }

                } catch (e) {
                    console.log(e);
                }
            })();
        }
    }, [bridge, id, issue]);
    return issue;
}

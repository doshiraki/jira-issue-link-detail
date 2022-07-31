import { Grid, Box } from '@mui/material'
import { useIssue } from '../atlassian/issue'
import {PropsWithChildren, useEffect, useState} from 'react'
import {IssueLink as IssueLinkType} from '../atlassian/generate/jira'

type IssueLinkProps = PropsWithChildren & {
    data: IssueLinkType[],
};
export const IssueLink = (props: IssueLinkProps) => {
    let [datas, setDatas] = useState<JSX.Element[]>([]);
    useEffect(()=>{
        setDatas(props.data.map((x)=>{
            let targetissue :any = null;
            if (x.outwardIssue) {
              targetissue = x.outwardIssue;
            } else {
              targetissue = x.inwardIssue;
            }
            return <IssueLinkData key={targetissue.id} id={targetissue.id as string}/>;
          }));
    }, [props.data]);

    return <Grid container item xs={12}>
        <>
        <Box width="100%">
            <Grid container item xs={12}>
                <Grid item xs={3}>
                <Box>key</Box>
                </Grid>
                <Grid item xs={9}>
                <Box>summary</Box>
                </Grid>
                <Grid item xs={12}>
                <Box>json</Box>
                </Grid>
            </Grid>
        </Box>
        {datas}
        </>
    </Grid>;
}
type IssueLinkDataProps = {
    id: string,
};
const IssueLinkData = (props: IssueLinkDataProps) => {
    const issue = useIssue(props.id);


    return <Box width="100%">
        <Grid container item xs={12}>
            <Grid item xs={3}>
            <Box>{issue?.key}</Box>
            </Grid>
            <Grid item xs={9}>
            <Box>{issue?.fields?.summary}</Box>
            </Grid>
            <Grid item xs={12}>
            <Box>{issue ? JSON.stringify(issue):"　"}</Box>
            </Grid>
        </Grid>
    </Box>;

}
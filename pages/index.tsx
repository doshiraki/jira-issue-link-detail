import type { NextPage } from 'next'
import {Grid, Box} from '@mui/material'
import {IssueLink as IssueLinkType, jira} from './api/atlassian/generate/jira'
import {useState, useEffect} from 'react'
import {useIssue} from './api/atlassian/issue'
import { IssueLink } from './api/component/issuelink';
import {useAppSelect} from './api/redux/store/hooks'

const Home: NextPage = () => {
  let context = useAppSelect((root)=>root.atlassian.context);
  let issue = useIssue(context?.extension.issue.id);

  useEffect(()=>{
    if (issue) {
      let issuelinksdata = issue?.fields?.["issuelinks"] as IssueLinkType[];
      console.log(issuelinksdata);
    }

  }, [issue]);

  return <Grid container item xs={12} >
      <Grid item sm={11}>
        <Box>
        <span style={{backgroundColor: "#ff88ff"}}>
        {JSON.stringify(context)}
        </span>
        <span style={{backgroundColor: "#0022ff"}}>
        {JSON.stringify(issue?.fields)}
        </span>
        {issue ? <IssueLink data={issue?.fields?.["issuelinks"]} /> : <></>}
        </Box>
      </Grid>
    </Grid>
}

export default Home

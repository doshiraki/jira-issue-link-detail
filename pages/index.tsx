import type { NextPage } from 'next'
import {Grid, Box} from '@mui/material'
import {IssueLink as IssueLinkType, jira} from './api/atlassian/generate/jira'
import {useState, useEffect} from 'react'
import {useIssue} from './api/atlassian/issue'
import { IssueLink } from './api/component/issuelink';
import {useAppSelect} from './api/redux/store/hooks';
import YAML from 'yaml'

const Home: NextPage = () => {
  let context = useAppSelect((root)=>root.atlassian.context);
  let issue = useIssue(context?.extension.issue.id);

  useEffect(()=>{
    if (issue) {
      let issuelinksdata = issue?.fields?.["issuelinks"] as IssueLinkType[];
      console.log(issuelinksdata);
    }

  }, [issue]);

  return <Grid container item xs={12}>
        {issue ? <IssueLink data={issue?.fields?.["issuelinks"]} /> : <></>}
        <pre style={{backgroundColor: "#ff88ff"}}>
        {YAML.stringify(context)}
        </pre>
        <pre style={{backgroundColor: "#8822ff"}}>
        {YAML.stringify(issue?.fields)}
        </pre>
    </Grid>
}

export default Home

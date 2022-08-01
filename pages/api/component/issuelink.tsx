import { Grid, Box, Card, Accordion, AccordionSummary, AccordionDetails } from '@mui/material'
import { useIssue } from '../atlassian/issue'
import { PropsWithChildren, useEffect, useState } from 'react'
import { IssueLink as IssueLinkType, IssueTypeDetails, IssueTypeInfo, LinkedIssue } from '../atlassian/generate/jira'
import { CSSProperties, ReactNode } from 'react';
import { ExpandMore } from '@mui/icons-material';
import YAML from 'yaml'
import Image from './image'

type IssueLinkProps = PropsWithChildren & {
    data: IssueLinkType[],
};
export const IssueLink = (props: IssueLinkProps) => {

    return <Grid container item xs={12} padding={1} spacing={1}>
            <IssueLinkData issueLink={null} />
            {props.data.map((x) => {
                return <IssueLinkData key={x.id} issueLink={x} />;
            })}
    </Grid>;
}
type IssueLinkDataProps = {
    issueLink: IssueLinkType | null,
};

type OutputItems = {
    key: string,
    summary: string,
    yaml: string,
    relation: string,
    icon?: string,
};
const IssueLinkData = (props: IssueLinkDataProps) => {

    let outputItems: OutputItems = {
        key: "key",
        summary: "summary",
        yaml: "yaml",
        relation: "relation",
    };
    let linkedIssue: LinkedIssue | null = null;
    if (props.issueLink?.outwardIssue) {
        linkedIssue = props.issueLink.outwardIssue;
        outputItems.relation = props.issueLink?.type.outward as string;
    } else {
        linkedIssue = props.issueLink?.inwardIssue as LinkedIssue;
        outputItems.relation = props.issueLink?.type.inward as string;
    }

    const issue = useIssue(linkedIssue?.id as string);
    const [expanded, setExpanded] = useState(false);

    if (props.issueLink && issue) {
        outputItems.key = issue.key as string;
        outputItems.summary = issue.fields?.summary;
        outputItems.icon = (issue.fields?.issuetype as IssueTypeDetails).iconUrl;
        outputItems.yaml = YAML.stringify(issue);
    }

    const Cell = ({ children }: { children: ReactNode }) =>
        <Box style={{
            padding: "0px",
        }} >
            {children}
        </Box>;
    return <Grid item xs={12}>
    <Card variant="outlined" component="div" style={{width:"100%", borderColor: "#afafaf", borderWidth:"1px"}} >
        <Grid container item xs={12} justifyContent="center">
            <Accordion expanded={expanded} style={{ width: "100%" }}>
                <AccordionSummary expandIcon={<ExpandMore />} onClick={() => setExpanded(!expanded)}>
                    <Grid container item xs={12}>
                        <Grid item xs={2}>
                            <Cell>
                                {outputItems.relation}
                            </Cell>
                        </Grid>
                        <Grid item xs={3}>
                            <Cell>
                                {outputItems.icon ? <Image src={outputItems.icon} style={{ width: "3em", height: "1.5em" }} /> : ""}
                                {outputItems.key}
                            </Cell>
                        </Grid>
                        <Grid item xs={6}>
                            <Cell>{outputItems.summary}</Cell>
                        </Grid>
                    </Grid>
                </AccordionSummary>
                <AccordionDetails>
                    <Grid item xs={12}>
                        <Cell><pre>{outputItems.yaml}</pre></Cell>
                    </Grid>
                </AccordionDetails>
            </Accordion>
        </Grid>
    </Card>
    </Grid>

}
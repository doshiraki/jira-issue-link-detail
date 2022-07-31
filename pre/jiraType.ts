import type { ConfigFile } from "@rtk-query/codegen-openapi"
const prefix = "../pages/api/atlassian";
const config: ConfigFile = {
  schemaFile: 'https://developer.atlassian.com/cloud/jira/platform/swagger-v3.v3.json',
  apiFile: prefix+'/atlJiraBase.ts',
  apiImport: 'atlJiraBase',
  outputFile: prefix+'/generate/jira.ts',
  exportName: 'jira',
  hooks: false,  
}

export default config;

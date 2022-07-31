import type { ConfigFile } from "@rtk-query/codegen-openapi"
const prefix = "../pages/api/atlassian";
const config: ConfigFile = {
  schemaFile: 'https://developer.atlassian.com/cloud/confluence/swagger.v3.json',
  apiFile: prefix+'/atlConfluenceBase.ts',
  apiImport: 'atlConfluenceBase',
  outputFile: prefix+'/generate/confluence.ts',
  exportName: 'confluence',
  hooks: false,  
}

export default config;
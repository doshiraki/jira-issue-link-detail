import { atlJiraBase as api } from "../atlJiraBase";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    getBanner: build.query<GetBannerApiResponse, GetBannerApiArg>({
      query: () => ({ url: `/rest/api/3/announcementBanner` }),
    }),
    setBanner: build.mutation<SetBannerApiResponse, SetBannerApiArg>({
      query: (queryArg) => ({
        url: `/rest/api/3/announcementBanner`,
        method: "PUT",
        body: queryArg.announcementBannerConfigurationUpdate,
      }),
    }),
    updateMultipleCustomFieldValues: build.mutation<
      UpdateMultipleCustomFieldValuesApiResponse,
      UpdateMultipleCustomFieldValuesApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/app/field/value`,
        method: "POST",
        body: queryArg.multipleCustomFieldValuesUpdateDetails,
        params: { generateChangelog: queryArg.generateChangelog },
      }),
    }),
    getCustomFieldConfiguration: build.query<
      GetCustomFieldConfigurationApiResponse,
      GetCustomFieldConfigurationApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/app/field/${queryArg.fieldIdOrKey}/context/configuration`,
        params: {
          id: queryArg.id,
          fieldContextId: queryArg.fieldContextId,
          issueId: queryArg.issueId,
          projectKeyOrId: queryArg.projectKeyOrId,
          issueTypeId: queryArg.issueTypeId,
          startAt: queryArg.startAt,
          maxResults: queryArg.maxResults,
        },
      }),
    }),
    updateCustomFieldConfiguration: build.mutation<
      UpdateCustomFieldConfigurationApiResponse,
      UpdateCustomFieldConfigurationApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/app/field/${queryArg.fieldIdOrKey}/context/configuration`,
        method: "PUT",
        body: queryArg.customFieldConfigurations,
      }),
    }),
    updateCustomFieldValue: build.mutation<
      UpdateCustomFieldValueApiResponse,
      UpdateCustomFieldValueApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/app/field/${queryArg.fieldIdOrKey}/value`,
        method: "PUT",
        body: queryArg.customFieldValueUpdateDetails,
        params: { generateChangelog: queryArg.generateChangelog },
      }),
    }),
    getApplicationProperty: build.query<
      GetApplicationPropertyApiResponse,
      GetApplicationPropertyApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/application-properties`,
        params: {
          key: queryArg.key,
          permissionLevel: queryArg.permissionLevel,
          keyFilter: queryArg.keyFilter,
        },
      }),
    }),
    getAdvancedSettings: build.query<
      GetAdvancedSettingsApiResponse,
      GetAdvancedSettingsApiArg
    >({
      query: () => ({
        url: `/rest/api/3/application-properties/advanced-settings`,
      }),
    }),
    setApplicationProperty: build.mutation<
      SetApplicationPropertyApiResponse,
      SetApplicationPropertyApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/application-properties/${queryArg.id}`,
        method: "PUT",
        body: queryArg.simpleApplicationPropertyBean,
      }),
    }),
    getAllApplicationRoles: build.query<
      GetAllApplicationRolesApiResponse,
      GetAllApplicationRolesApiArg
    >({
      query: () => ({ url: `/rest/api/3/applicationrole` }),
    }),
    getApplicationRole: build.query<
      GetApplicationRoleApiResponse,
      GetApplicationRoleApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/applicationrole/${queryArg.key}`,
      }),
    }),
    getAttachmentContent: build.query<
      GetAttachmentContentApiResponse,
      GetAttachmentContentApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/attachment/content/${queryArg.id}`,
        params: { redirect: queryArg.redirect },
      }),
    }),
    getAttachmentMeta: build.query<
      GetAttachmentMetaApiResponse,
      GetAttachmentMetaApiArg
    >({
      query: () => ({ url: `/rest/api/3/attachment/meta` }),
    }),
    getAttachmentThumbnail: build.query<
      GetAttachmentThumbnailApiResponse,
      GetAttachmentThumbnailApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/attachment/thumbnail/${queryArg.id}`,
        params: {
          redirect: queryArg.redirect,
          fallbackToDefault: queryArg.fallbackToDefault,
          width: queryArg.width,
          height: queryArg.height,
        },
      }),
    }),
    getAttachment: build.query<GetAttachmentApiResponse, GetAttachmentApiArg>({
      query: (queryArg) => ({ url: `/rest/api/3/attachment/${queryArg.id}` }),
    }),
    removeAttachment: build.mutation<
      RemoveAttachmentApiResponse,
      RemoveAttachmentApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/attachment/${queryArg.id}`,
        method: "DELETE",
      }),
    }),
    expandAttachmentForHumans: build.query<
      ExpandAttachmentForHumansApiResponse,
      ExpandAttachmentForHumansApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/attachment/${queryArg.id}/expand/human`,
      }),
    }),
    expandAttachmentForMachines: build.query<
      ExpandAttachmentForMachinesApiResponse,
      ExpandAttachmentForMachinesApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/attachment/${queryArg.id}/expand/raw`,
      }),
    }),
    getAuditRecords: build.query<
      GetAuditRecordsApiResponse,
      GetAuditRecordsApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/auditing/record`,
        params: {
          offset: queryArg.offset,
          limit: queryArg.limit,
          filter: queryArg.filter,
          from: queryArg["from"],
          to: queryArg.to,
        },
      }),
    }),
    getAllSystemAvatars: build.query<
      GetAllSystemAvatarsApiResponse,
      GetAllSystemAvatarsApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/avatar/${queryArg["type"]}/system`,
      }),
    }),
    getCommentsByIds: build.mutation<
      GetCommentsByIdsApiResponse,
      GetCommentsByIdsApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/comment/list`,
        method: "POST",
        body: queryArg.issueCommentListRequestBean,
        params: { expand: queryArg.expand },
      }),
    }),
    getCommentPropertyKeys: build.query<
      GetCommentPropertyKeysApiResponse,
      GetCommentPropertyKeysApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/comment/${queryArg.commentId}/properties`,
      }),
    }),
    getCommentProperty: build.query<
      GetCommentPropertyApiResponse,
      GetCommentPropertyApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/comment/${queryArg.commentId}/properties/${queryArg.propertyKey}`,
      }),
    }),
    setCommentProperty: build.mutation<
      SetCommentPropertyApiResponse,
      SetCommentPropertyApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/comment/${queryArg.commentId}/properties/${queryArg.propertyKey}`,
        method: "PUT",
        body: queryArg.body,
      }),
    }),
    deleteCommentProperty: build.mutation<
      DeleteCommentPropertyApiResponse,
      DeleteCommentPropertyApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/comment/${queryArg.commentId}/properties/${queryArg.propertyKey}`,
        method: "DELETE",
      }),
    }),
    createComponent: build.mutation<
      CreateComponentApiResponse,
      CreateComponentApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/component`,
        method: "POST",
        body: queryArg.projectComponent,
      }),
    }),
    getComponent: build.query<GetComponentApiResponse, GetComponentApiArg>({
      query: (queryArg) => ({ url: `/rest/api/3/component/${queryArg.id}` }),
    }),
    updateComponent: build.mutation<
      UpdateComponentApiResponse,
      UpdateComponentApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/component/${queryArg.id}`,
        method: "PUT",
        body: queryArg.projectComponent,
      }),
    }),
    deleteComponent: build.mutation<
      DeleteComponentApiResponse,
      DeleteComponentApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/component/${queryArg.id}`,
        method: "DELETE",
        params: { moveIssuesTo: queryArg.moveIssuesTo },
      }),
    }),
    getComponentRelatedIssues: build.query<
      GetComponentRelatedIssuesApiResponse,
      GetComponentRelatedIssuesApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/component/${queryArg.id}/relatedIssueCounts`,
      }),
    }),
    getConfiguration: build.query<
      GetConfigurationApiResponse,
      GetConfigurationApiArg
    >({
      query: () => ({ url: `/rest/api/3/configuration` }),
    }),
    getSelectedTimeTrackingImplementation: build.query<
      GetSelectedTimeTrackingImplementationApiResponse,
      GetSelectedTimeTrackingImplementationApiArg
    >({
      query: () => ({ url: `/rest/api/3/configuration/timetracking` }),
    }),
    selectTimeTrackingImplementation: build.mutation<
      SelectTimeTrackingImplementationApiResponse,
      SelectTimeTrackingImplementationApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/configuration/timetracking`,
        method: "PUT",
        body: queryArg.timeTrackingProvider,
      }),
    }),
    getAvailableTimeTrackingImplementations: build.query<
      GetAvailableTimeTrackingImplementationsApiResponse,
      GetAvailableTimeTrackingImplementationsApiArg
    >({
      query: () => ({ url: `/rest/api/3/configuration/timetracking/list` }),
    }),
    getSharedTimeTrackingConfiguration: build.query<
      GetSharedTimeTrackingConfigurationApiResponse,
      GetSharedTimeTrackingConfigurationApiArg
    >({
      query: () => ({ url: `/rest/api/3/configuration/timetracking/options` }),
    }),
    setSharedTimeTrackingConfiguration: build.mutation<
      SetSharedTimeTrackingConfigurationApiResponse,
      SetSharedTimeTrackingConfigurationApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/configuration/timetracking/options`,
        method: "PUT",
        body: queryArg.timeTrackingConfiguration,
      }),
    }),
    getCustomFieldOption: build.query<
      GetCustomFieldOptionApiResponse,
      GetCustomFieldOptionApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/customFieldOption/${queryArg.id}`,
      }),
    }),
    getAllDashboards: build.query<
      GetAllDashboardsApiResponse,
      GetAllDashboardsApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/dashboard`,
        params: {
          filter: queryArg.filter,
          startAt: queryArg.startAt,
          maxResults: queryArg.maxResults,
        },
      }),
    }),
    createDashboard: build.mutation<
      CreateDashboardApiResponse,
      CreateDashboardApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/dashboard`,
        method: "POST",
        body: queryArg.dashboardDetails,
      }),
    }),
    getAllAvailableDashboardGadgets: build.query<
      GetAllAvailableDashboardGadgetsApiResponse,
      GetAllAvailableDashboardGadgetsApiArg
    >({
      query: () => ({ url: `/rest/api/3/dashboard/gadgets` }),
    }),
    getDashboardsPaginated: build.query<
      GetDashboardsPaginatedApiResponse,
      GetDashboardsPaginatedApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/dashboard/search`,
        params: {
          dashboardName: queryArg.dashboardName,
          accountId: queryArg.accountId,
          owner: queryArg.owner,
          groupname: queryArg.groupname,
          groupId: queryArg.groupId,
          projectId: queryArg.projectId,
          orderBy: queryArg.orderBy,
          startAt: queryArg.startAt,
          maxResults: queryArg.maxResults,
          status: queryArg.status,
          expand: queryArg.expand,
        },
      }),
    }),
    getAllGadgets: build.query<GetAllGadgetsApiResponse, GetAllGadgetsApiArg>({
      query: (queryArg) => ({
        url: `/rest/api/3/dashboard/${queryArg.dashboardId}/gadget`,
        params: {
          moduleKey: queryArg.moduleKey,
          uri: queryArg.uri,
          gadgetId: queryArg.gadgetId,
        },
      }),
    }),
    addGadget: build.mutation<AddGadgetApiResponse, AddGadgetApiArg>({
      query: (queryArg) => ({
        url: `/rest/api/3/dashboard/${queryArg.dashboardId}/gadget`,
        method: "POST",
        body: queryArg.dashboardGadgetSettings,
      }),
    }),
    updateGadget: build.mutation<UpdateGadgetApiResponse, UpdateGadgetApiArg>({
      query: (queryArg) => ({
        url: `/rest/api/3/dashboard/${queryArg.dashboardId}/gadget/${queryArg.gadgetId}`,
        method: "PUT",
        body: queryArg.dashboardGadgetUpdateRequest,
      }),
    }),
    removeGadget: build.mutation<RemoveGadgetApiResponse, RemoveGadgetApiArg>({
      query: (queryArg) => ({
        url: `/rest/api/3/dashboard/${queryArg.dashboardId}/gadget/${queryArg.gadgetId}`,
        method: "DELETE",
      }),
    }),
    getDashboardItemPropertyKeys: build.query<
      GetDashboardItemPropertyKeysApiResponse,
      GetDashboardItemPropertyKeysApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/dashboard/${queryArg.dashboardId}/items/${queryArg.itemId}/properties`,
      }),
    }),
    getDashboardItemProperty: build.query<
      GetDashboardItemPropertyApiResponse,
      GetDashboardItemPropertyApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/dashboard/${queryArg.dashboardId}/items/${queryArg.itemId}/properties/${queryArg.propertyKey}`,
      }),
    }),
    setDashboardItemProperty: build.mutation<
      SetDashboardItemPropertyApiResponse,
      SetDashboardItemPropertyApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/dashboard/${queryArg.dashboardId}/items/${queryArg.itemId}/properties/${queryArg.propertyKey}`,
        method: "PUT",
        body: queryArg.body,
      }),
    }),
    deleteDashboardItemProperty: build.mutation<
      DeleteDashboardItemPropertyApiResponse,
      DeleteDashboardItemPropertyApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/dashboard/${queryArg.dashboardId}/items/${queryArg.itemId}/properties/${queryArg.propertyKey}`,
        method: "DELETE",
      }),
    }),
    getDashboard: build.query<GetDashboardApiResponse, GetDashboardApiArg>({
      query: (queryArg) => ({ url: `/rest/api/3/dashboard/${queryArg.id}` }),
    }),
    updateDashboard: build.mutation<
      UpdateDashboardApiResponse,
      UpdateDashboardApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/dashboard/${queryArg.id}`,
        method: "PUT",
        body: queryArg.dashboardDetails,
      }),
    }),
    deleteDashboard: build.mutation<
      DeleteDashboardApiResponse,
      DeleteDashboardApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/dashboard/${queryArg.id}`,
        method: "DELETE",
      }),
    }),
    copyDashboard: build.mutation<
      CopyDashboardApiResponse,
      CopyDashboardApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/dashboard/${queryArg.id}/copy`,
        method: "POST",
        body: queryArg.dashboardDetails,
      }),
    }),
    getEvents: build.query<GetEventsApiResponse, GetEventsApiArg>({
      query: () => ({ url: `/rest/api/3/events` }),
    }),
    analyseExpression: build.mutation<
      AnalyseExpressionApiResponse,
      AnalyseExpressionApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/expression/analyse`,
        method: "POST",
        body: queryArg.jiraExpressionForAnalysis,
        params: { check: queryArg.check },
      }),
    }),
    evaluateJiraExpression: build.mutation<
      EvaluateJiraExpressionApiResponse,
      EvaluateJiraExpressionApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/expression/eval`,
        method: "POST",
        body: queryArg.jiraExpressionEvalRequestBean,
        params: { expand: queryArg.expand },
      }),
    }),
    getFields: build.query<GetFieldsApiResponse, GetFieldsApiArg>({
      query: () => ({ url: `/rest/api/3/field` }),
    }),
    createCustomField: build.mutation<
      CreateCustomFieldApiResponse,
      CreateCustomFieldApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/field`,
        method: "POST",
        body: queryArg.customFieldDefinitionJsonBean,
      }),
    }),
    getFieldsPaginated: build.query<
      GetFieldsPaginatedApiResponse,
      GetFieldsPaginatedApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/field/search`,
        params: {
          startAt: queryArg.startAt,
          maxResults: queryArg.maxResults,
          type: queryArg["type"],
          id: queryArg.id,
          query: queryArg.query,
          orderBy: queryArg.orderBy,
          expand: queryArg.expand,
        },
      }),
    }),
    getTrashedFieldsPaginated: build.query<
      GetTrashedFieldsPaginatedApiResponse,
      GetTrashedFieldsPaginatedApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/field/search/trashed`,
        params: {
          startAt: queryArg.startAt,
          maxResults: queryArg.maxResults,
          id: queryArg.id,
          query: queryArg.query,
          orderBy: queryArg.orderBy,
        },
      }),
    }),
    updateCustomField: build.mutation<
      UpdateCustomFieldApiResponse,
      UpdateCustomFieldApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/field/${queryArg.fieldId}`,
        method: "PUT",
        body: queryArg.updateCustomFieldDetails,
      }),
    }),
    getContextsForField: build.query<
      GetContextsForFieldApiResponse,
      GetContextsForFieldApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/field/${queryArg.fieldId}/context`,
        params: {
          isAnyIssueType: queryArg.isAnyIssueType,
          isGlobalContext: queryArg.isGlobalContext,
          contextId: queryArg.contextId,
          startAt: queryArg.startAt,
          maxResults: queryArg.maxResults,
        },
      }),
    }),
    createCustomFieldContext: build.mutation<
      CreateCustomFieldContextApiResponse,
      CreateCustomFieldContextApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/field/${queryArg.fieldId}/context`,
        method: "POST",
        body: queryArg.createCustomFieldContext,
      }),
    }),
    getDefaultValues: build.query<
      GetDefaultValuesApiResponse,
      GetDefaultValuesApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/field/${queryArg.fieldId}/context/defaultValue`,
        params: {
          contextId: queryArg.contextId,
          startAt: queryArg.startAt,
          maxResults: queryArg.maxResults,
        },
      }),
    }),
    setDefaultValues: build.mutation<
      SetDefaultValuesApiResponse,
      SetDefaultValuesApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/field/${queryArg.fieldId}/context/defaultValue`,
        method: "PUT",
        body: queryArg.customFieldContextDefaultValueUpdate,
      }),
    }),
    getIssueTypeMappingsForContexts: build.query<
      GetIssueTypeMappingsForContextsApiResponse,
      GetIssueTypeMappingsForContextsApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/field/${queryArg.fieldId}/context/issuetypemapping`,
        params: {
          contextId: queryArg.contextId,
          startAt: queryArg.startAt,
          maxResults: queryArg.maxResults,
        },
      }),
    }),
    getCustomFieldContextsForProjectsAndIssueTypes: build.mutation<
      GetCustomFieldContextsForProjectsAndIssueTypesApiResponse,
      GetCustomFieldContextsForProjectsAndIssueTypesApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/field/${queryArg.fieldId}/context/mapping`,
        method: "POST",
        body: queryArg.projectIssueTypeMappings,
        params: { startAt: queryArg.startAt, maxResults: queryArg.maxResults },
      }),
    }),
    getProjectContextMapping: build.query<
      GetProjectContextMappingApiResponse,
      GetProjectContextMappingApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/field/${queryArg.fieldId}/context/projectmapping`,
        params: {
          contextId: queryArg.contextId,
          startAt: queryArg.startAt,
          maxResults: queryArg.maxResults,
        },
      }),
    }),
    updateCustomFieldContext: build.mutation<
      UpdateCustomFieldContextApiResponse,
      UpdateCustomFieldContextApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/field/${queryArg.fieldId}/context/${queryArg.contextId}`,
        method: "PUT",
        body: queryArg.customFieldContextUpdateDetails,
      }),
    }),
    deleteCustomFieldContext: build.mutation<
      DeleteCustomFieldContextApiResponse,
      DeleteCustomFieldContextApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/field/${queryArg.fieldId}/context/${queryArg.contextId}`,
        method: "DELETE",
      }),
    }),
    addIssueTypesToContext: build.mutation<
      AddIssueTypesToContextApiResponse,
      AddIssueTypesToContextApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/field/${queryArg.fieldId}/context/${queryArg.contextId}/issuetype`,
        method: "PUT",
        body: queryArg.issueTypeIds,
      }),
    }),
    removeIssueTypesFromContext: build.mutation<
      RemoveIssueTypesFromContextApiResponse,
      RemoveIssueTypesFromContextApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/field/${queryArg.fieldId}/context/${queryArg.contextId}/issuetype/remove`,
        method: "POST",
        body: queryArg.issueTypeIds,
      }),
    }),
    getOptionsForContext: build.query<
      GetOptionsForContextApiResponse,
      GetOptionsForContextApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/field/${queryArg.fieldId}/context/${queryArg.contextId}/option`,
        params: {
          optionId: queryArg.optionId,
          onlyOptions: queryArg.onlyOptions,
          startAt: queryArg.startAt,
          maxResults: queryArg.maxResults,
        },
      }),
    }),
    updateCustomFieldOption: build.mutation<
      UpdateCustomFieldOptionApiResponse,
      UpdateCustomFieldOptionApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/field/${queryArg.fieldId}/context/${queryArg.contextId}/option`,
        method: "PUT",
        body: queryArg.bulkCustomFieldOptionUpdateRequest,
      }),
    }),
    createCustomFieldOption: build.mutation<
      CreateCustomFieldOptionApiResponse,
      CreateCustomFieldOptionApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/field/${queryArg.fieldId}/context/${queryArg.contextId}/option`,
        method: "POST",
        body: queryArg.bulkCustomFieldOptionCreateRequest,
      }),
    }),
    reorderCustomFieldOptions: build.mutation<
      ReorderCustomFieldOptionsApiResponse,
      ReorderCustomFieldOptionsApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/field/${queryArg.fieldId}/context/${queryArg.contextId}/option/move`,
        method: "PUT",
        body: queryArg.orderOfCustomFieldOptions,
      }),
    }),
    deleteCustomFieldOption: build.mutation<
      DeleteCustomFieldOptionApiResponse,
      DeleteCustomFieldOptionApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/field/${queryArg.fieldId}/context/${queryArg.contextId}/option/${queryArg.optionId}`,
        method: "DELETE",
      }),
    }),
    assignProjectsToCustomFieldContext: build.mutation<
      AssignProjectsToCustomFieldContextApiResponse,
      AssignProjectsToCustomFieldContextApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/field/${queryArg.fieldId}/context/${queryArg.contextId}/project`,
        method: "PUT",
        body: queryArg.projectIds,
      }),
    }),
    removeCustomFieldContextFromProjects: build.mutation<
      RemoveCustomFieldContextFromProjectsApiResponse,
      RemoveCustomFieldContextFromProjectsApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/field/${queryArg.fieldId}/context/${queryArg.contextId}/project/remove`,
        method: "POST",
        body: queryArg.projectIds,
      }),
    }),
    getContextsForFieldDeprecated: build.query<
      GetContextsForFieldDeprecatedApiResponse,
      GetContextsForFieldDeprecatedApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/field/${queryArg.fieldId}/contexts`,
        params: { startAt: queryArg.startAt, maxResults: queryArg.maxResults },
      }),
    }),
    getScreensForField: build.query<
      GetScreensForFieldApiResponse,
      GetScreensForFieldApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/field/${queryArg.fieldId}/screens`,
        params: {
          startAt: queryArg.startAt,
          maxResults: queryArg.maxResults,
          expand: queryArg.expand,
        },
      }),
    }),
    getAllIssueFieldOptions: build.query<
      GetAllIssueFieldOptionsApiResponse,
      GetAllIssueFieldOptionsApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/field/${queryArg.fieldKey}/option`,
        params: { startAt: queryArg.startAt, maxResults: queryArg.maxResults },
      }),
    }),
    createIssueFieldOption: build.mutation<
      CreateIssueFieldOptionApiResponse,
      CreateIssueFieldOptionApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/field/${queryArg.fieldKey}/option`,
        method: "POST",
        body: queryArg.issueFieldOptionCreateBean,
      }),
    }),
    getSelectableIssueFieldOptions: build.query<
      GetSelectableIssueFieldOptionsApiResponse,
      GetSelectableIssueFieldOptionsApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/field/${queryArg.fieldKey}/option/suggestions/edit`,
        params: {
          startAt: queryArg.startAt,
          maxResults: queryArg.maxResults,
          projectId: queryArg.projectId,
        },
      }),
    }),
    getVisibleIssueFieldOptions: build.query<
      GetVisibleIssueFieldOptionsApiResponse,
      GetVisibleIssueFieldOptionsApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/field/${queryArg.fieldKey}/option/suggestions/search`,
        params: {
          startAt: queryArg.startAt,
          maxResults: queryArg.maxResults,
          projectId: queryArg.projectId,
        },
      }),
    }),
    getIssueFieldOption: build.query<
      GetIssueFieldOptionApiResponse,
      GetIssueFieldOptionApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/field/${queryArg.fieldKey}/option/${queryArg.optionId}`,
      }),
    }),
    updateIssueFieldOption: build.mutation<
      UpdateIssueFieldOptionApiResponse,
      UpdateIssueFieldOptionApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/field/${queryArg.fieldKey}/option/${queryArg.optionId}`,
        method: "PUT",
        body: queryArg.issueFieldOption,
      }),
    }),
    deleteIssueFieldOption: build.mutation<
      DeleteIssueFieldOptionApiResponse,
      DeleteIssueFieldOptionApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/field/${queryArg.fieldKey}/option/${queryArg.optionId}`,
        method: "DELETE",
      }),
    }),
    replaceIssueFieldOption: build.mutation<
      ReplaceIssueFieldOptionApiResponse,
      ReplaceIssueFieldOptionApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/field/${queryArg.fieldKey}/option/${queryArg.optionId}/issue`,
        method: "DELETE",
        params: {
          replaceWith: queryArg.replaceWith,
          jql: queryArg.jql,
          overrideScreenSecurity: queryArg.overrideScreenSecurity,
          overrideEditableFlag: queryArg.overrideEditableFlag,
        },
      }),
    }),
    deleteCustomField: build.mutation<
      DeleteCustomFieldApiResponse,
      DeleteCustomFieldApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/field/${queryArg.id}`,
        method: "DELETE",
      }),
    }),
    restoreCustomField: build.mutation<
      RestoreCustomFieldApiResponse,
      RestoreCustomFieldApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/field/${queryArg.id}/restore`,
        method: "POST",
      }),
    }),
    trashCustomField: build.mutation<
      TrashCustomFieldApiResponse,
      TrashCustomFieldApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/field/${queryArg.id}/trash`,
        method: "POST",
      }),
    }),
    getAllFieldConfigurations: build.query<
      GetAllFieldConfigurationsApiResponse,
      GetAllFieldConfigurationsApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/fieldconfiguration`,
        params: {
          startAt: queryArg.startAt,
          maxResults: queryArg.maxResults,
          id: queryArg.id,
          isDefault: queryArg.isDefault,
          query: queryArg.query,
        },
      }),
    }),
    createFieldConfiguration: build.mutation<
      CreateFieldConfigurationApiResponse,
      CreateFieldConfigurationApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/fieldconfiguration`,
        method: "POST",
        body: queryArg.fieldConfigurationDetails,
      }),
    }),
    updateFieldConfiguration: build.mutation<
      UpdateFieldConfigurationApiResponse,
      UpdateFieldConfigurationApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/fieldconfiguration/${queryArg.id}`,
        method: "PUT",
        body: queryArg.fieldConfigurationDetails,
      }),
    }),
    deleteFieldConfiguration: build.mutation<
      DeleteFieldConfigurationApiResponse,
      DeleteFieldConfigurationApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/fieldconfiguration/${queryArg.id}`,
        method: "DELETE",
      }),
    }),
    getFieldConfigurationItems: build.query<
      GetFieldConfigurationItemsApiResponse,
      GetFieldConfigurationItemsApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/fieldconfiguration/${queryArg.id}/fields`,
        params: { startAt: queryArg.startAt, maxResults: queryArg.maxResults },
      }),
    }),
    updateFieldConfigurationItems: build.mutation<
      UpdateFieldConfigurationItemsApiResponse,
      UpdateFieldConfigurationItemsApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/fieldconfiguration/${queryArg.id}/fields`,
        method: "PUT",
        body: queryArg.fieldConfigurationItemsDetails,
      }),
    }),
    getAllFieldConfigurationSchemes: build.query<
      GetAllFieldConfigurationSchemesApiResponse,
      GetAllFieldConfigurationSchemesApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/fieldconfigurationscheme`,
        params: {
          startAt: queryArg.startAt,
          maxResults: queryArg.maxResults,
          id: queryArg.id,
        },
      }),
    }),
    createFieldConfigurationScheme: build.mutation<
      CreateFieldConfigurationSchemeApiResponse,
      CreateFieldConfigurationSchemeApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/fieldconfigurationscheme`,
        method: "POST",
        body: queryArg.updateFieldConfigurationSchemeDetails,
      }),
    }),
    getFieldConfigurationSchemeMappings: build.query<
      GetFieldConfigurationSchemeMappingsApiResponse,
      GetFieldConfigurationSchemeMappingsApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/fieldconfigurationscheme/mapping`,
        params: {
          startAt: queryArg.startAt,
          maxResults: queryArg.maxResults,
          fieldConfigurationSchemeId: queryArg.fieldConfigurationSchemeId,
        },
      }),
    }),
    getFieldConfigurationSchemeProjectMapping: build.query<
      GetFieldConfigurationSchemeProjectMappingApiResponse,
      GetFieldConfigurationSchemeProjectMappingApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/fieldconfigurationscheme/project`,
        params: {
          startAt: queryArg.startAt,
          maxResults: queryArg.maxResults,
          projectId: queryArg.projectId,
        },
      }),
    }),
    assignFieldConfigurationSchemeToProject: build.mutation<
      AssignFieldConfigurationSchemeToProjectApiResponse,
      AssignFieldConfigurationSchemeToProjectApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/fieldconfigurationscheme/project`,
        method: "PUT",
        body: queryArg.fieldConfigurationSchemeProjectAssociation,
      }),
    }),
    updateFieldConfigurationScheme: build.mutation<
      UpdateFieldConfigurationSchemeApiResponse,
      UpdateFieldConfigurationSchemeApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/fieldconfigurationscheme/${queryArg.id}`,
        method: "PUT",
        body: queryArg.updateFieldConfigurationSchemeDetails,
      }),
    }),
    deleteFieldConfigurationScheme: build.mutation<
      DeleteFieldConfigurationSchemeApiResponse,
      DeleteFieldConfigurationSchemeApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/fieldconfigurationscheme/${queryArg.id}`,
        method: "DELETE",
      }),
    }),
    setFieldConfigurationSchemeMapping: build.mutation<
      SetFieldConfigurationSchemeMappingApiResponse,
      SetFieldConfigurationSchemeMappingApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/fieldconfigurationscheme/${queryArg.id}/mapping`,
        method: "PUT",
        body: queryArg.associateFieldConfigurationsWithIssueTypesRequest,
      }),
    }),
    removeIssueTypesFromGlobalFieldConfigurationScheme: build.mutation<
      RemoveIssueTypesFromGlobalFieldConfigurationSchemeApiResponse,
      RemoveIssueTypesFromGlobalFieldConfigurationSchemeApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/fieldconfigurationscheme/${queryArg.id}/mapping/delete`,
        method: "POST",
        body: queryArg.issueTypeIdsToRemove,
      }),
    }),
    getFilters: build.query<GetFiltersApiResponse, GetFiltersApiArg>({
      query: (queryArg) => ({
        url: `/rest/api/3/filter`,
        params: { expand: queryArg.expand },
      }),
    }),
    createFilter: build.mutation<CreateFilterApiResponse, CreateFilterApiArg>({
      query: (queryArg) => ({
        url: `/rest/api/3/filter`,
        method: "POST",
        body: queryArg.filter,
        params: {
          expand: queryArg.expand,
          overrideSharePermissions: queryArg.overrideSharePermissions,
        },
      }),
    }),
    getDefaultShareScope: build.query<
      GetDefaultShareScopeApiResponse,
      GetDefaultShareScopeApiArg
    >({
      query: () => ({ url: `/rest/api/3/filter/defaultShareScope` }),
    }),
    setDefaultShareScope: build.mutation<
      SetDefaultShareScopeApiResponse,
      SetDefaultShareScopeApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/filter/defaultShareScope`,
        method: "PUT",
        body: queryArg.defaultShareScope,
      }),
    }),
    getFavouriteFilters: build.query<
      GetFavouriteFiltersApiResponse,
      GetFavouriteFiltersApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/filter/favourite`,
        params: { expand: queryArg.expand },
      }),
    }),
    getMyFilters: build.query<GetMyFiltersApiResponse, GetMyFiltersApiArg>({
      query: (queryArg) => ({
        url: `/rest/api/3/filter/my`,
        params: {
          expand: queryArg.expand,
          includeFavourites: queryArg.includeFavourites,
        },
      }),
    }),
    getFiltersPaginated: build.query<
      GetFiltersPaginatedApiResponse,
      GetFiltersPaginatedApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/filter/search`,
        params: {
          filterName: queryArg.filterName,
          accountId: queryArg.accountId,
          owner: queryArg.owner,
          groupname: queryArg.groupname,
          groupId: queryArg.groupId,
          projectId: queryArg.projectId,
          id: queryArg.id,
          orderBy: queryArg.orderBy,
          startAt: queryArg.startAt,
          maxResults: queryArg.maxResults,
          expand: queryArg.expand,
          overrideSharePermissions: queryArg.overrideSharePermissions,
        },
      }),
    }),
    getFilter: build.query<GetFilterApiResponse, GetFilterApiArg>({
      query: (queryArg) => ({
        url: `/rest/api/3/filter/${queryArg.id}`,
        params: {
          expand: queryArg.expand,
          overrideSharePermissions: queryArg.overrideSharePermissions,
        },
      }),
    }),
    updateFilter: build.mutation<UpdateFilterApiResponse, UpdateFilterApiArg>({
      query: (queryArg) => ({
        url: `/rest/api/3/filter/${queryArg.id}`,
        method: "PUT",
        body: queryArg.filter,
        params: {
          expand: queryArg.expand,
          overrideSharePermissions: queryArg.overrideSharePermissions,
        },
      }),
    }),
    deleteFilter: build.mutation<DeleteFilterApiResponse, DeleteFilterApiArg>({
      query: (queryArg) => ({
        url: `/rest/api/3/filter/${queryArg.id}`,
        method: "DELETE",
      }),
    }),
    getColumns: build.query<GetColumnsApiResponse, GetColumnsApiArg>({
      query: (queryArg) => ({
        url: `/rest/api/3/filter/${queryArg.id}/columns`,
      }),
    }),
    setColumns: build.mutation<SetColumnsApiResponse, SetColumnsApiArg>({
      query: (queryArg) => ({
        url: `/rest/api/3/filter/${queryArg.id}/columns`,
        method: "PUT",
        body: queryArg.body,
      }),
    }),
    resetColumns: build.mutation<ResetColumnsApiResponse, ResetColumnsApiArg>({
      query: (queryArg) => ({
        url: `/rest/api/3/filter/${queryArg.id}/columns`,
        method: "DELETE",
      }),
    }),
    setFavouriteForFilter: build.mutation<
      SetFavouriteForFilterApiResponse,
      SetFavouriteForFilterApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/filter/${queryArg.id}/favourite`,
        method: "PUT",
        params: { expand: queryArg.expand },
      }),
    }),
    deleteFavouriteForFilter: build.mutation<
      DeleteFavouriteForFilterApiResponse,
      DeleteFavouriteForFilterApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/filter/${queryArg.id}/favourite`,
        method: "DELETE",
        params: { expand: queryArg.expand },
      }),
    }),
    changeFilterOwner: build.mutation<
      ChangeFilterOwnerApiResponse,
      ChangeFilterOwnerApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/filter/${queryArg.id}/owner`,
        method: "PUT",
        body: queryArg.changeFilterOwner,
      }),
    }),
    getSharePermissions: build.query<
      GetSharePermissionsApiResponse,
      GetSharePermissionsApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/filter/${queryArg.id}/permission`,
      }),
    }),
    addSharePermission: build.mutation<
      AddSharePermissionApiResponse,
      AddSharePermissionApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/filter/${queryArg.id}/permission`,
        method: "POST",
        body: queryArg.sharePermissionInputBean,
      }),
    }),
    getSharePermission: build.query<
      GetSharePermissionApiResponse,
      GetSharePermissionApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/filter/${queryArg.id}/permission/${queryArg.permissionId}`,
      }),
    }),
    deleteSharePermission: build.mutation<
      DeleteSharePermissionApiResponse,
      DeleteSharePermissionApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/filter/${queryArg.id}/permission/${queryArg.permissionId}`,
        method: "DELETE",
      }),
    }),
    getGroup: build.query<GetGroupApiResponse, GetGroupApiArg>({
      query: (queryArg) => ({
        url: `/rest/api/3/group`,
        params: {
          groupname: queryArg.groupname,
          groupId: queryArg.groupId,
          expand: queryArg.expand,
        },
      }),
    }),
    createGroup: build.mutation<CreateGroupApiResponse, CreateGroupApiArg>({
      query: (queryArg) => ({
        url: `/rest/api/3/group`,
        method: "POST",
        body: queryArg.addGroupBean,
      }),
    }),
    removeGroup: build.mutation<RemoveGroupApiResponse, RemoveGroupApiArg>({
      query: (queryArg) => ({
        url: `/rest/api/3/group`,
        method: "DELETE",
        params: {
          groupname: queryArg.groupname,
          groupId: queryArg.groupId,
          swapGroup: queryArg.swapGroup,
          swapGroupId: queryArg.swapGroupId,
        },
      }),
    }),
    bulkGetGroups: build.query<BulkGetGroupsApiResponse, BulkGetGroupsApiArg>({
      query: (queryArg) => ({
        url: `/rest/api/3/group/bulk`,
        params: {
          startAt: queryArg.startAt,
          maxResults: queryArg.maxResults,
          groupId: queryArg.groupId,
          groupName: queryArg.groupName,
        },
      }),
    }),
    getUsersFromGroup: build.query<
      GetUsersFromGroupApiResponse,
      GetUsersFromGroupApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/group/member`,
        params: {
          groupname: queryArg.groupname,
          groupId: queryArg.groupId,
          includeInactiveUsers: queryArg.includeInactiveUsers,
          startAt: queryArg.startAt,
          maxResults: queryArg.maxResults,
        },
      }),
    }),
    addUserToGroup: build.mutation<
      AddUserToGroupApiResponse,
      AddUserToGroupApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/group/user`,
        method: "POST",
        body: queryArg.updateUserToGroupBean,
        params: { groupname: queryArg.groupname, groupId: queryArg.groupId },
      }),
    }),
    removeUserFromGroup: build.mutation<
      RemoveUserFromGroupApiResponse,
      RemoveUserFromGroupApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/group/user`,
        method: "DELETE",
        params: {
          groupname: queryArg.groupname,
          groupId: queryArg.groupId,
          username: queryArg.username,
          accountId: queryArg.accountId,
        },
      }),
    }),
    findGroups: build.query<FindGroupsApiResponse, FindGroupsApiArg>({
      query: (queryArg) => ({
        url: `/rest/api/3/groups/picker`,
        params: {
          accountId: queryArg.accountId,
          query: queryArg.query,
          exclude: queryArg.exclude,
          excludeId: queryArg.excludeId,
          maxResults: queryArg.maxResults,
          userName: queryArg.userName,
        },
      }),
    }),
    findUsersAndGroups: build.query<
      FindUsersAndGroupsApiResponse,
      FindUsersAndGroupsApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/groupuserpicker`,
        params: {
          query: queryArg.query,
          maxResults: queryArg.maxResults,
          showAvatar: queryArg.showAvatar,
          fieldId: queryArg.fieldId,
          projectId: queryArg.projectId,
          issueTypeId: queryArg.issueTypeId,
          avatarSize: queryArg.avatarSize,
          caseInsensitive: queryArg.caseInsensitive,
          excludeConnectAddons: queryArg.excludeConnectAddons,
        },
      }),
    }),
    getLicense: build.query<GetLicenseApiResponse, GetLicenseApiArg>({
      query: () => ({ url: `/rest/api/3/instance/license` }),
    }),
    createIssue: build.mutation<CreateIssueApiResponse, CreateIssueApiArg>({
      query: (queryArg) => ({
        url: `/rest/api/3/issue`,
        method: "POST",
        body: queryArg.issueUpdateDetails,
        params: { updateHistory: queryArg.updateHistory },
      }),
    }),
    createIssues: build.mutation<CreateIssuesApiResponse, CreateIssuesApiArg>({
      query: (queryArg) => ({
        url: `/rest/api/3/issue/bulk`,
        method: "POST",
        body: queryArg.issuesUpdateBean,
      }),
    }),
    getCreateIssueMeta: build.query<
      GetCreateIssueMetaApiResponse,
      GetCreateIssueMetaApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/issue/createmeta`,
        params: {
          projectIds: queryArg.projectIds,
          projectKeys: queryArg.projectKeys,
          issuetypeIds: queryArg.issuetypeIds,
          issuetypeNames: queryArg.issuetypeNames,
          expand: queryArg.expand,
        },
      }),
    }),
    getIssuePickerResource: build.query<
      GetIssuePickerResourceApiResponse,
      GetIssuePickerResourceApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/issue/picker`,
        params: {
          query: queryArg.query,
          currentJQL: queryArg.currentJql,
          currentIssueKey: queryArg.currentIssueKey,
          currentProjectId: queryArg.currentProjectId,
          showSubTasks: queryArg.showSubTasks,
          showSubTaskParent: queryArg.showSubTaskParent,
        },
      }),
    }),
    bulkSetIssuesPropertiesList: build.mutation<
      BulkSetIssuesPropertiesListApiResponse,
      BulkSetIssuesPropertiesListApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/issue/properties`,
        method: "POST",
        body: queryArg.issueEntityProperties,
      }),
    }),
    bulkSetIssuePropertiesByIssue: build.mutation<
      BulkSetIssuePropertiesByIssueApiResponse,
      BulkSetIssuePropertiesByIssueApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/issue/properties/multi`,
        method: "POST",
        body: queryArg.multiIssueEntityProperties,
      }),
    }),
    bulkSetIssueProperty: build.mutation<
      BulkSetIssuePropertyApiResponse,
      BulkSetIssuePropertyApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/issue/properties/${queryArg.propertyKey}`,
        method: "PUT",
        body: queryArg.bulkIssuePropertyUpdateRequest,
      }),
    }),
    bulkDeleteIssueProperty: build.mutation<
      BulkDeleteIssuePropertyApiResponse,
      BulkDeleteIssuePropertyApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/issue/properties/${queryArg.propertyKey}`,
        method: "DELETE",
        body: queryArg.issueFilterForBulkPropertyDelete,
      }),
    }),
    getIsWatchingIssueBulk: build.mutation<
      GetIsWatchingIssueBulkApiResponse,
      GetIsWatchingIssueBulkApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/issue/watching`,
        method: "POST",
        body: queryArg.issueList,
      }),
    }),
    getIssue: build.query<GetIssueApiResponse, GetIssueApiArg>({
      query: (queryArg) => ({
        url: `/rest/api/3/issue/${queryArg.issueIdOrKey}`,
        params: {
          fields: queryArg.fields,
          fieldsByKeys: queryArg.fieldsByKeys,
          expand: queryArg.expand,
          properties: queryArg.properties,
          updateHistory: queryArg.updateHistory,
        },
      }),
    }),
    editIssue: build.mutation<EditIssueApiResponse, EditIssueApiArg>({
      query: (queryArg) => ({
        url: `/rest/api/3/issue/${queryArg.issueIdOrKey}`,
        method: "PUT",
        body: queryArg.issueUpdateDetails,
        params: {
          notifyUsers: queryArg.notifyUsers,
          overrideScreenSecurity: queryArg.overrideScreenSecurity,
          overrideEditableFlag: queryArg.overrideEditableFlag,
        },
      }),
    }),
    deleteIssue: build.mutation<DeleteIssueApiResponse, DeleteIssueApiArg>({
      query: (queryArg) => ({
        url: `/rest/api/3/issue/${queryArg.issueIdOrKey}`,
        method: "DELETE",
        params: { deleteSubtasks: queryArg.deleteSubtasks },
      }),
    }),
    assignIssue: build.mutation<AssignIssueApiResponse, AssignIssueApiArg>({
      query: (queryArg) => ({
        url: `/rest/api/3/issue/${queryArg.issueIdOrKey}/assignee`,
        method: "PUT",
        body: queryArg.user,
      }),
    }),
    addAttachment: build.mutation<
      AddAttachmentApiResponse,
      AddAttachmentApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/issue/${queryArg.issueIdOrKey}/attachments`,
        method: "POST",
        body: queryArg.body,
      }),
    }),
    getChangeLogs: build.query<GetChangeLogsApiResponse, GetChangeLogsApiArg>({
      query: (queryArg) => ({
        url: `/rest/api/3/issue/${queryArg.issueIdOrKey}/changelog`,
        params: { startAt: queryArg.startAt, maxResults: queryArg.maxResults },
      }),
    }),
    getChangeLogsByIds: build.mutation<
      GetChangeLogsByIdsApiResponse,
      GetChangeLogsByIdsApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/issue/${queryArg.issueIdOrKey}/changelog/list`,
        method: "POST",
        body: queryArg.issueChangelogIds,
      }),
    }),
    getComments: build.query<GetCommentsApiResponse, GetCommentsApiArg>({
      query: (queryArg) => ({
        url: `/rest/api/3/issue/${queryArg.issueIdOrKey}/comment`,
        params: {
          startAt: queryArg.startAt,
          maxResults: queryArg.maxResults,
          orderBy: queryArg.orderBy,
          expand: queryArg.expand,
        },
      }),
    }),
    addComment: build.mutation<AddCommentApiResponse, AddCommentApiArg>({
      query: (queryArg) => ({
        url: `/rest/api/3/issue/${queryArg.issueIdOrKey}/comment`,
        method: "POST",
        body: queryArg.comment,
        params: { expand: queryArg.expand },
      }),
    }),
    getComment: build.query<GetCommentApiResponse, GetCommentApiArg>({
      query: (queryArg) => ({
        url: `/rest/api/3/issue/${queryArg.issueIdOrKey}/comment/${queryArg.id}`,
        params: { expand: queryArg.expand },
      }),
    }),
    updateComment: build.mutation<
      UpdateCommentApiResponse,
      UpdateCommentApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/issue/${queryArg.issueIdOrKey}/comment/${queryArg.id}`,
        method: "PUT",
        body: queryArg.comment,
        params: {
          notifyUsers: queryArg.notifyUsers,
          overrideEditableFlag: queryArg.overrideEditableFlag,
          expand: queryArg.expand,
        },
      }),
    }),
    deleteComment: build.mutation<
      DeleteCommentApiResponse,
      DeleteCommentApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/issue/${queryArg.issueIdOrKey}/comment/${queryArg.id}`,
        method: "DELETE",
      }),
    }),
    getEditIssueMeta: build.query<
      GetEditIssueMetaApiResponse,
      GetEditIssueMetaApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/issue/${queryArg.issueIdOrKey}/editmeta`,
        params: {
          overrideScreenSecurity: queryArg.overrideScreenSecurity,
          overrideEditableFlag: queryArg.overrideEditableFlag,
        },
      }),
    }),
    notify: build.mutation<NotifyApiResponse, NotifyApiArg>({
      query: (queryArg) => ({
        url: `/rest/api/3/issue/${queryArg.issueIdOrKey}/notify`,
        method: "POST",
        body: queryArg.notification,
      }),
    }),
    getIssuePropertyKeys: build.query<
      GetIssuePropertyKeysApiResponse,
      GetIssuePropertyKeysApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/issue/${queryArg.issueIdOrKey}/properties`,
      }),
    }),
    getIssueProperty: build.query<
      GetIssuePropertyApiResponse,
      GetIssuePropertyApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/issue/${queryArg.issueIdOrKey}/properties/${queryArg.propertyKey}`,
      }),
    }),
    setIssueProperty: build.mutation<
      SetIssuePropertyApiResponse,
      SetIssuePropertyApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/issue/${queryArg.issueIdOrKey}/properties/${queryArg.propertyKey}`,
        method: "PUT",
        body: queryArg.body,
      }),
    }),
    deleteIssueProperty: build.mutation<
      DeleteIssuePropertyApiResponse,
      DeleteIssuePropertyApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/issue/${queryArg.issueIdOrKey}/properties/${queryArg.propertyKey}`,
        method: "DELETE",
      }),
    }),
    getRemoteIssueLinks: build.query<
      GetRemoteIssueLinksApiResponse,
      GetRemoteIssueLinksApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/issue/${queryArg.issueIdOrKey}/remotelink`,
        params: { globalId: queryArg.globalId },
      }),
    }),
    createOrUpdateRemoteIssueLink: build.mutation<
      CreateOrUpdateRemoteIssueLinkApiResponse,
      CreateOrUpdateRemoteIssueLinkApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/issue/${queryArg.issueIdOrKey}/remotelink`,
        method: "POST",
        body: queryArg.remoteIssueLinkRequest,
      }),
    }),
    deleteRemoteIssueLinkByGlobalId: build.mutation<
      DeleteRemoteIssueLinkByGlobalIdApiResponse,
      DeleteRemoteIssueLinkByGlobalIdApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/issue/${queryArg.issueIdOrKey}/remotelink`,
        method: "DELETE",
        params: { globalId: queryArg.globalId },
      }),
    }),
    getRemoteIssueLinkById: build.query<
      GetRemoteIssueLinkByIdApiResponse,
      GetRemoteIssueLinkByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/issue/${queryArg.issueIdOrKey}/remotelink/${queryArg.linkId}`,
      }),
    }),
    updateRemoteIssueLink: build.mutation<
      UpdateRemoteIssueLinkApiResponse,
      UpdateRemoteIssueLinkApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/issue/${queryArg.issueIdOrKey}/remotelink/${queryArg.linkId}`,
        method: "PUT",
        body: queryArg.remoteIssueLinkRequest,
      }),
    }),
    deleteRemoteIssueLinkById: build.mutation<
      DeleteRemoteIssueLinkByIdApiResponse,
      DeleteRemoteIssueLinkByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/issue/${queryArg.issueIdOrKey}/remotelink/${queryArg.linkId}`,
        method: "DELETE",
      }),
    }),
    getTransitions: build.query<
      GetTransitionsApiResponse,
      GetTransitionsApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/issue/${queryArg.issueIdOrKey}/transitions`,
        params: {
          expand: queryArg.expand,
          transitionId: queryArg.transitionId,
          skipRemoteOnlyCondition: queryArg.skipRemoteOnlyCondition,
          includeUnavailableTransitions: queryArg.includeUnavailableTransitions,
          sortByOpsBarAndStatus: queryArg.sortByOpsBarAndStatus,
        },
      }),
    }),
    doTransition: build.mutation<DoTransitionApiResponse, DoTransitionApiArg>({
      query: (queryArg) => ({
        url: `/rest/api/3/issue/${queryArg.issueIdOrKey}/transitions`,
        method: "POST",
        body: queryArg.issueUpdateDetails,
      }),
    }),
    getVotes: build.query<GetVotesApiResponse, GetVotesApiArg>({
      query: (queryArg) => ({
        url: `/rest/api/3/issue/${queryArg.issueIdOrKey}/votes`,
      }),
    }),
    addVote: build.mutation<AddVoteApiResponse, AddVoteApiArg>({
      query: (queryArg) => ({
        url: `/rest/api/3/issue/${queryArg.issueIdOrKey}/votes`,
        method: "POST",
      }),
    }),
    removeVote: build.mutation<RemoveVoteApiResponse, RemoveVoteApiArg>({
      query: (queryArg) => ({
        url: `/rest/api/3/issue/${queryArg.issueIdOrKey}/votes`,
        method: "DELETE",
      }),
    }),
    getIssueWatchers: build.query<
      GetIssueWatchersApiResponse,
      GetIssueWatchersApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/issue/${queryArg.issueIdOrKey}/watchers`,
      }),
    }),
    addWatcher: build.mutation<AddWatcherApiResponse, AddWatcherApiArg>({
      query: (queryArg) => ({
        url: `/rest/api/3/issue/${queryArg.issueIdOrKey}/watchers`,
        method: "POST",
        body: queryArg.body,
      }),
    }),
    removeWatcher: build.mutation<
      RemoveWatcherApiResponse,
      RemoveWatcherApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/issue/${queryArg.issueIdOrKey}/watchers`,
        method: "DELETE",
        params: { username: queryArg.username, accountId: queryArg.accountId },
      }),
    }),
    getIssueWorklog: build.query<
      GetIssueWorklogApiResponse,
      GetIssueWorklogApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/issue/${queryArg.issueIdOrKey}/worklog`,
        params: {
          startAt: queryArg.startAt,
          maxResults: queryArg.maxResults,
          startedAfter: queryArg.startedAfter,
          startedBefore: queryArg.startedBefore,
          expand: queryArg.expand,
        },
      }),
    }),
    addWorklog: build.mutation<AddWorklogApiResponse, AddWorklogApiArg>({
      query: (queryArg) => ({
        url: `/rest/api/3/issue/${queryArg.issueIdOrKey}/worklog`,
        method: "POST",
        body: queryArg.worklog,
        params: {
          notifyUsers: queryArg.notifyUsers,
          adjustEstimate: queryArg.adjustEstimate,
          newEstimate: queryArg.newEstimate,
          reduceBy: queryArg.reduceBy,
          expand: queryArg.expand,
          overrideEditableFlag: queryArg.overrideEditableFlag,
        },
      }),
    }),
    getWorklog: build.query<GetWorklogApiResponse, GetWorklogApiArg>({
      query: (queryArg) => ({
        url: `/rest/api/3/issue/${queryArg.issueIdOrKey}/worklog/${queryArg.id}`,
        params: { expand: queryArg.expand },
      }),
    }),
    updateWorklog: build.mutation<
      UpdateWorklogApiResponse,
      UpdateWorklogApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/issue/${queryArg.issueIdOrKey}/worklog/${queryArg.id}`,
        method: "PUT",
        body: queryArg.worklog,
        params: {
          notifyUsers: queryArg.notifyUsers,
          adjustEstimate: queryArg.adjustEstimate,
          newEstimate: queryArg.newEstimate,
          expand: queryArg.expand,
          overrideEditableFlag: queryArg.overrideEditableFlag,
        },
      }),
    }),
    deleteWorklog: build.mutation<
      DeleteWorklogApiResponse,
      DeleteWorklogApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/issue/${queryArg.issueIdOrKey}/worklog/${queryArg.id}`,
        method: "DELETE",
        params: {
          notifyUsers: queryArg.notifyUsers,
          adjustEstimate: queryArg.adjustEstimate,
          newEstimate: queryArg.newEstimate,
          increaseBy: queryArg.increaseBy,
          overrideEditableFlag: queryArg.overrideEditableFlag,
        },
      }),
    }),
    getWorklogPropertyKeys: build.query<
      GetWorklogPropertyKeysApiResponse,
      GetWorklogPropertyKeysApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/issue/${queryArg.issueIdOrKey}/worklog/${queryArg.worklogId}/properties`,
      }),
    }),
    getWorklogProperty: build.query<
      GetWorklogPropertyApiResponse,
      GetWorklogPropertyApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/issue/${queryArg.issueIdOrKey}/worklog/${queryArg.worklogId}/properties/${queryArg.propertyKey}`,
      }),
    }),
    setWorklogProperty: build.mutation<
      SetWorklogPropertyApiResponse,
      SetWorklogPropertyApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/issue/${queryArg.issueIdOrKey}/worklog/${queryArg.worklogId}/properties/${queryArg.propertyKey}`,
        method: "PUT",
        body: queryArg.body,
      }),
    }),
    deleteWorklogProperty: build.mutation<
      DeleteWorklogPropertyApiResponse,
      DeleteWorklogPropertyApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/issue/${queryArg.issueIdOrKey}/worklog/${queryArg.worklogId}/properties/${queryArg.propertyKey}`,
        method: "DELETE",
      }),
    }),
    linkIssues: build.mutation<LinkIssuesApiResponse, LinkIssuesApiArg>({
      query: (queryArg) => ({
        url: `/rest/api/3/issueLink`,
        method: "POST",
        body: queryArg.linkIssueRequestJsonBean,
      }),
    }),
    getIssueLink: build.query<GetIssueLinkApiResponse, GetIssueLinkApiArg>({
      query: (queryArg) => ({
        url: `/rest/api/3/issueLink/${queryArg.linkId}`,
      }),
    }),
    deleteIssueLink: build.mutation<
      DeleteIssueLinkApiResponse,
      DeleteIssueLinkApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/issueLink/${queryArg.linkId}`,
        method: "DELETE",
      }),
    }),
    getIssueLinkTypes: build.query<
      GetIssueLinkTypesApiResponse,
      GetIssueLinkTypesApiArg
    >({
      query: () => ({ url: `/rest/api/3/issueLinkType` }),
    }),
    createIssueLinkType: build.mutation<
      CreateIssueLinkTypeApiResponse,
      CreateIssueLinkTypeApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/issueLinkType`,
        method: "POST",
        body: queryArg.issueLinkType,
      }),
    }),
    getIssueLinkType: build.query<
      GetIssueLinkTypeApiResponse,
      GetIssueLinkTypeApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/issueLinkType/${queryArg.issueLinkTypeId}`,
      }),
    }),
    updateIssueLinkType: build.mutation<
      UpdateIssueLinkTypeApiResponse,
      UpdateIssueLinkTypeApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/issueLinkType/${queryArg.issueLinkTypeId}`,
        method: "PUT",
        body: queryArg.issueLinkType,
      }),
    }),
    deleteIssueLinkType: build.mutation<
      DeleteIssueLinkTypeApiResponse,
      DeleteIssueLinkTypeApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/issueLinkType/${queryArg.issueLinkTypeId}`,
        method: "DELETE",
      }),
    }),
    getIssueSecuritySchemes: build.query<
      GetIssueSecuritySchemesApiResponse,
      GetIssueSecuritySchemesApiArg
    >({
      query: () => ({ url: `/rest/api/3/issuesecurityschemes` }),
    }),
    getIssueSecurityScheme: build.query<
      GetIssueSecuritySchemeApiResponse,
      GetIssueSecuritySchemeApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/issuesecurityschemes/${queryArg.id}`,
      }),
    }),
    getIssueSecurityLevelMembers: build.query<
      GetIssueSecurityLevelMembersApiResponse,
      GetIssueSecurityLevelMembersApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/issuesecurityschemes/${queryArg.issueSecuritySchemeId}/members`,
        params: {
          startAt: queryArg.startAt,
          maxResults: queryArg.maxResults,
          issueSecurityLevelId: queryArg.issueSecurityLevelId,
          expand: queryArg.expand,
        },
      }),
    }),
    getIssueAllTypes: build.query<
      GetIssueAllTypesApiResponse,
      GetIssueAllTypesApiArg
    >({
      query: () => ({ url: `/rest/api/3/issuetype` }),
    }),
    createIssueType: build.mutation<
      CreateIssueTypeApiResponse,
      CreateIssueTypeApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/issuetype`,
        method: "POST",
        body: queryArg.issueTypeCreateBean,
      }),
    }),
    getIssueTypesForProject: build.query<
      GetIssueTypesForProjectApiResponse,
      GetIssueTypesForProjectApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/issuetype/project`,
        params: { projectId: queryArg.projectId, level: queryArg.level },
      }),
    }),
    getIssueType: build.query<GetIssueTypeApiResponse, GetIssueTypeApiArg>({
      query: (queryArg) => ({ url: `/rest/api/3/issuetype/${queryArg.id}` }),
    }),
    updateIssueType: build.mutation<
      UpdateIssueTypeApiResponse,
      UpdateIssueTypeApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/issuetype/${queryArg.id}`,
        method: "PUT",
        body: queryArg.issueTypeUpdateBean,
      }),
    }),
    deleteIssueType: build.mutation<
      DeleteIssueTypeApiResponse,
      DeleteIssueTypeApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/issuetype/${queryArg.id}`,
        method: "DELETE",
        params: { alternativeIssueTypeId: queryArg.alternativeIssueTypeId },
      }),
    }),
    getAlternativeIssueTypes: build.query<
      GetAlternativeIssueTypesApiResponse,
      GetAlternativeIssueTypesApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/issuetype/${queryArg.id}/alternatives`,
      }),
    }),
    createIssueTypeAvatar: build.mutation<
      CreateIssueTypeAvatarApiResponse,
      CreateIssueTypeAvatarApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/issuetype/${queryArg.id}/avatar2`,
        method: "POST",
        body: queryArg.body,
        params: { x: queryArg.x, y: queryArg.y, size: queryArg.size },
      }),
    }),
    getIssueTypePropertyKeys: build.query<
      GetIssueTypePropertyKeysApiResponse,
      GetIssueTypePropertyKeysApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/issuetype/${queryArg.issueTypeId}/properties`,
      }),
    }),
    getIssueTypeProperty: build.query<
      GetIssueTypePropertyApiResponse,
      GetIssueTypePropertyApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/issuetype/${queryArg.issueTypeId}/properties/${queryArg.propertyKey}`,
      }),
    }),
    setIssueTypeProperty: build.mutation<
      SetIssueTypePropertyApiResponse,
      SetIssueTypePropertyApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/issuetype/${queryArg.issueTypeId}/properties/${queryArg.propertyKey}`,
        method: "PUT",
        body: queryArg.body,
      }),
    }),
    deleteIssueTypeProperty: build.mutation<
      DeleteIssueTypePropertyApiResponse,
      DeleteIssueTypePropertyApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/issuetype/${queryArg.issueTypeId}/properties/${queryArg.propertyKey}`,
        method: "DELETE",
      }),
    }),
    getAllIssueTypeSchemes: build.query<
      GetAllIssueTypeSchemesApiResponse,
      GetAllIssueTypeSchemesApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/issuetypescheme`,
        params: {
          startAt: queryArg.startAt,
          maxResults: queryArg.maxResults,
          id: queryArg.id,
          orderBy: queryArg.orderBy,
          expand: queryArg.expand,
          queryString: queryArg.queryString,
        },
      }),
    }),
    createIssueTypeScheme: build.mutation<
      CreateIssueTypeSchemeApiResponse,
      CreateIssueTypeSchemeApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/issuetypescheme`,
        method: "POST",
        body: queryArg.issueTypeSchemeDetails,
      }),
    }),
    getIssueTypeSchemesMapping: build.query<
      GetIssueTypeSchemesMappingApiResponse,
      GetIssueTypeSchemesMappingApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/issuetypescheme/mapping`,
        params: {
          startAt: queryArg.startAt,
          maxResults: queryArg.maxResults,
          issueTypeSchemeId: queryArg.issueTypeSchemeId,
        },
      }),
    }),
    getIssueTypeSchemeForProjects: build.query<
      GetIssueTypeSchemeForProjectsApiResponse,
      GetIssueTypeSchemeForProjectsApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/issuetypescheme/project`,
        params: {
          startAt: queryArg.startAt,
          maxResults: queryArg.maxResults,
          projectId: queryArg.projectId,
        },
      }),
    }),
    assignIssueTypeSchemeToProject: build.mutation<
      AssignIssueTypeSchemeToProjectApiResponse,
      AssignIssueTypeSchemeToProjectApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/issuetypescheme/project`,
        method: "PUT",
        body: queryArg.issueTypeSchemeProjectAssociation,
      }),
    }),
    updateIssueTypeScheme: build.mutation<
      UpdateIssueTypeSchemeApiResponse,
      UpdateIssueTypeSchemeApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/issuetypescheme/${queryArg.issueTypeSchemeId}`,
        method: "PUT",
        body: queryArg.issueTypeSchemeUpdateDetails,
      }),
    }),
    deleteIssueTypeScheme: build.mutation<
      DeleteIssueTypeSchemeApiResponse,
      DeleteIssueTypeSchemeApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/issuetypescheme/${queryArg.issueTypeSchemeId}`,
        method: "DELETE",
      }),
    }),
    addIssueTypesToIssueTypeScheme: build.mutation<
      AddIssueTypesToIssueTypeSchemeApiResponse,
      AddIssueTypesToIssueTypeSchemeApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/issuetypescheme/${queryArg.issueTypeSchemeId}/issuetype`,
        method: "PUT",
        body: queryArg.issueTypeIds,
      }),
    }),
    reorderIssueTypesInIssueTypeScheme: build.mutation<
      ReorderIssueTypesInIssueTypeSchemeApiResponse,
      ReorderIssueTypesInIssueTypeSchemeApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/issuetypescheme/${queryArg.issueTypeSchemeId}/issuetype/move`,
        method: "PUT",
        body: queryArg.orderOfIssueTypes,
      }),
    }),
    removeIssueTypeFromIssueTypeScheme: build.mutation<
      RemoveIssueTypeFromIssueTypeSchemeApiResponse,
      RemoveIssueTypeFromIssueTypeSchemeApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/issuetypescheme/${queryArg.issueTypeSchemeId}/issuetype/${queryArg.issueTypeId}`,
        method: "DELETE",
      }),
    }),
    getIssueTypeScreenSchemes: build.query<
      GetIssueTypeScreenSchemesApiResponse,
      GetIssueTypeScreenSchemesApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/issuetypescreenscheme`,
        params: {
          startAt: queryArg.startAt,
          maxResults: queryArg.maxResults,
          id: queryArg.id,
          queryString: queryArg.queryString,
          orderBy: queryArg.orderBy,
          expand: queryArg.expand,
        },
      }),
    }),
    createIssueTypeScreenScheme: build.mutation<
      CreateIssueTypeScreenSchemeApiResponse,
      CreateIssueTypeScreenSchemeApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/issuetypescreenscheme`,
        method: "POST",
        body: queryArg.issueTypeScreenSchemeDetails,
      }),
    }),
    getIssueTypeScreenSchemeMappings: build.query<
      GetIssueTypeScreenSchemeMappingsApiResponse,
      GetIssueTypeScreenSchemeMappingsApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/issuetypescreenscheme/mapping`,
        params: {
          startAt: queryArg.startAt,
          maxResults: queryArg.maxResults,
          issueTypeScreenSchemeId: queryArg.issueTypeScreenSchemeId,
        },
      }),
    }),
    getIssueTypeScreenSchemeProjectAssociations: build.query<
      GetIssueTypeScreenSchemeProjectAssociationsApiResponse,
      GetIssueTypeScreenSchemeProjectAssociationsApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/issuetypescreenscheme/project`,
        params: {
          startAt: queryArg.startAt,
          maxResults: queryArg.maxResults,
          projectId: queryArg.projectId,
        },
      }),
    }),
    assignIssueTypeScreenSchemeToProject: build.mutation<
      AssignIssueTypeScreenSchemeToProjectApiResponse,
      AssignIssueTypeScreenSchemeToProjectApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/issuetypescreenscheme/project`,
        method: "PUT",
        body: queryArg.issueTypeScreenSchemeProjectAssociation,
      }),
    }),
    updateIssueTypeScreenScheme: build.mutation<
      UpdateIssueTypeScreenSchemeApiResponse,
      UpdateIssueTypeScreenSchemeApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/issuetypescreenscheme/${queryArg.issueTypeScreenSchemeId}`,
        method: "PUT",
        body: queryArg.issueTypeScreenSchemeUpdateDetails,
      }),
    }),
    deleteIssueTypeScreenScheme: build.mutation<
      DeleteIssueTypeScreenSchemeApiResponse,
      DeleteIssueTypeScreenSchemeApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/issuetypescreenscheme/${queryArg.issueTypeScreenSchemeId}`,
        method: "DELETE",
      }),
    }),
    appendMappingsForIssueTypeScreenScheme: build.mutation<
      AppendMappingsForIssueTypeScreenSchemeApiResponse,
      AppendMappingsForIssueTypeScreenSchemeApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/issuetypescreenscheme/${queryArg.issueTypeScreenSchemeId}/mapping`,
        method: "PUT",
        body: queryArg.issueTypeScreenSchemeMappingDetails,
      }),
    }),
    updateDefaultScreenScheme: build.mutation<
      UpdateDefaultScreenSchemeApiResponse,
      UpdateDefaultScreenSchemeApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/issuetypescreenscheme/${queryArg.issueTypeScreenSchemeId}/mapping/default`,
        method: "PUT",
        body: queryArg.updateDefaultScreenScheme,
      }),
    }),
    removeMappingsFromIssueTypeScreenScheme: build.mutation<
      RemoveMappingsFromIssueTypeScreenSchemeApiResponse,
      RemoveMappingsFromIssueTypeScreenSchemeApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/issuetypescreenscheme/${queryArg.issueTypeScreenSchemeId}/mapping/remove`,
        method: "POST",
        body: queryArg.issueTypeIds,
      }),
    }),
    getProjectsForIssueTypeScreenScheme: build.query<
      GetProjectsForIssueTypeScreenSchemeApiResponse,
      GetProjectsForIssueTypeScreenSchemeApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/issuetypescreenscheme/${queryArg.issueTypeScreenSchemeId}/project`,
        params: {
          startAt: queryArg.startAt,
          maxResults: queryArg.maxResults,
          query: queryArg.query,
        },
      }),
    }),
    getAutoComplete: build.query<
      GetAutoCompleteApiResponse,
      GetAutoCompleteApiArg
    >({
      query: () => ({ url: `/rest/api/3/jql/autocompletedata` }),
    }),
    getAutoCompletePost: build.mutation<
      GetAutoCompletePostApiResponse,
      GetAutoCompletePostApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/jql/autocompletedata`,
        method: "POST",
        body: queryArg.searchAutoCompleteFilter,
      }),
    }),
    getFieldAutoCompleteForQueryString: build.query<
      GetFieldAutoCompleteForQueryStringApiResponse,
      GetFieldAutoCompleteForQueryStringApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/jql/autocompletedata/suggestions`,
        params: {
          fieldName: queryArg.fieldName,
          fieldValue: queryArg.fieldValue,
          predicateName: queryArg.predicateName,
          predicateValue: queryArg.predicateValue,
        },
      }),
    }),
    matchIssues: build.mutation<MatchIssuesApiResponse, MatchIssuesApiArg>({
      query: (queryArg) => ({
        url: `/rest/api/3/jql/match`,
        method: "POST",
        body: queryArg.issuesAndJqlQueries,
      }),
    }),
    parseJqlQueries: build.mutation<
      ParseJqlQueriesApiResponse,
      ParseJqlQueriesApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/jql/parse`,
        method: "POST",
        body: queryArg.jqlQueriesToParse,
        params: { validation: queryArg.validation },
      }),
    }),
    migrateQueries: build.mutation<
      MigrateQueriesApiResponse,
      MigrateQueriesApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/jql/pdcleaner`,
        method: "POST",
        body: queryArg.jqlPersonalDataMigrationRequest,
      }),
    }),
    sanitiseJqlQueries: build.mutation<
      SanitiseJqlQueriesApiResponse,
      SanitiseJqlQueriesApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/jql/sanitize`,
        method: "POST",
        body: queryArg.jqlQueriesToSanitize,
      }),
    }),
    getAllLabels: build.query<GetAllLabelsApiResponse, GetAllLabelsApiArg>({
      query: (queryArg) => ({
        url: `/rest/api/3/label`,
        params: { startAt: queryArg.startAt, maxResults: queryArg.maxResults },
      }),
    }),
    getMyPermissions: build.query<
      GetMyPermissionsApiResponse,
      GetMyPermissionsApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/mypermissions`,
        params: {
          projectKey: queryArg.projectKey,
          projectId: queryArg.projectId,
          issueKey: queryArg.issueKey,
          issueId: queryArg.issueId,
          permissions: queryArg.permissions,
          projectUuid: queryArg.projectUuid,
          projectConfigurationUuid: queryArg.projectConfigurationUuid,
          commentId: queryArg.commentId,
        },
      }),
    }),
    getPreference: build.query<GetPreferenceApiResponse, GetPreferenceApiArg>({
      query: (queryArg) => ({
        url: `/rest/api/3/mypreferences`,
        params: { key: queryArg.key },
      }),
    }),
    setPreference: build.mutation<
      SetPreferenceApiResponse,
      SetPreferenceApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/mypreferences`,
        method: "PUT",
        body: queryArg.body,
        params: { key: queryArg.key },
      }),
    }),
    removePreference: build.mutation<
      RemovePreferenceApiResponse,
      RemovePreferenceApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/mypreferences`,
        method: "DELETE",
        params: { key: queryArg.key },
      }),
    }),
    getLocale: build.query<GetLocaleApiResponse, GetLocaleApiArg>({
      query: () => ({ url: `/rest/api/3/mypreferences/locale` }),
    }),
    setLocale: build.mutation<SetLocaleApiResponse, SetLocaleApiArg>({
      query: (queryArg) => ({
        url: `/rest/api/3/mypreferences/locale`,
        method: "PUT",
        body: queryArg.locale,
      }),
    }),
    deleteLocale: build.mutation<DeleteLocaleApiResponse, DeleteLocaleApiArg>({
      query: () => ({
        url: `/rest/api/3/mypreferences/locale`,
        method: "DELETE",
      }),
    }),
    getCurrentUser: build.query<
      GetCurrentUserApiResponse,
      GetCurrentUserApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/myself`,
        params: { expand: queryArg.expand },
      }),
    }),
    getNotificationSchemes: build.query<
      GetNotificationSchemesApiResponse,
      GetNotificationSchemesApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/notificationscheme`,
        params: {
          startAt: queryArg.startAt,
          maxResults: queryArg.maxResults,
          expand: queryArg.expand,
        },
      }),
    }),
    getNotificationScheme: build.query<
      GetNotificationSchemeApiResponse,
      GetNotificationSchemeApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/notificationscheme/${queryArg.id}`,
        params: { expand: queryArg.expand },
      }),
    }),
    getAllPermissions: build.query<
      GetAllPermissionsApiResponse,
      GetAllPermissionsApiArg
    >({
      query: () => ({ url: `/rest/api/3/permissions` }),
    }),
    getBulkPermissions: build.mutation<
      GetBulkPermissionsApiResponse,
      GetBulkPermissionsApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/permissions/check`,
        method: "POST",
        body: queryArg.bulkPermissionsRequestBean,
      }),
    }),
    getPermittedProjects: build.mutation<
      GetPermittedProjectsApiResponse,
      GetPermittedProjectsApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/permissions/project`,
        method: "POST",
        body: queryArg.permissionsKeysBean,
      }),
    }),
    getAllPermissionSchemes: build.query<
      GetAllPermissionSchemesApiResponse,
      GetAllPermissionSchemesApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/permissionscheme`,
        params: { expand: queryArg.expand },
      }),
    }),
    createPermissionScheme: build.mutation<
      CreatePermissionSchemeApiResponse,
      CreatePermissionSchemeApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/permissionscheme`,
        method: "POST",
        body: queryArg.permissionScheme,
        params: { expand: queryArg.expand },
      }),
    }),
    getPermissionScheme: build.query<
      GetPermissionSchemeApiResponse,
      GetPermissionSchemeApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/permissionscheme/${queryArg.schemeId}`,
        params: { expand: queryArg.expand },
      }),
    }),
    updatePermissionScheme: build.mutation<
      UpdatePermissionSchemeApiResponse,
      UpdatePermissionSchemeApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/permissionscheme/${queryArg.schemeId}`,
        method: "PUT",
        body: queryArg.permissionScheme,
        params: { expand: queryArg.expand },
      }),
    }),
    deletePermissionScheme: build.mutation<
      DeletePermissionSchemeApiResponse,
      DeletePermissionSchemeApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/permissionscheme/${queryArg.schemeId}`,
        method: "DELETE",
      }),
    }),
    getPermissionSchemeGrants: build.query<
      GetPermissionSchemeGrantsApiResponse,
      GetPermissionSchemeGrantsApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/permissionscheme/${queryArg.schemeId}/permission`,
        params: { expand: queryArg.expand },
      }),
    }),
    createPermissionGrant: build.mutation<
      CreatePermissionGrantApiResponse,
      CreatePermissionGrantApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/permissionscheme/${queryArg.schemeId}/permission`,
        method: "POST",
        body: queryArg.permissionGrant,
        params: { expand: queryArg.expand },
      }),
    }),
    getPermissionSchemeGrant: build.query<
      GetPermissionSchemeGrantApiResponse,
      GetPermissionSchemeGrantApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/permissionscheme/${queryArg.schemeId}/permission/${queryArg.permissionId}`,
        params: { expand: queryArg.expand },
      }),
    }),
    deletePermissionSchemeEntity: build.mutation<
      DeletePermissionSchemeEntityApiResponse,
      DeletePermissionSchemeEntityApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/permissionscheme/${queryArg.schemeId}/permission/${queryArg.permissionId}`,
        method: "DELETE",
      }),
    }),
    getPriorities: build.query<GetPrioritiesApiResponse, GetPrioritiesApiArg>({
      query: () => ({ url: `/rest/api/3/priority` }),
    }),
    createPriority: build.mutation<
      CreatePriorityApiResponse,
      CreatePriorityApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/priority`,
        method: "POST",
        body: queryArg.createPriorityDetails,
      }),
    }),
    searchPriorities: build.query<
      SearchPrioritiesApiResponse,
      SearchPrioritiesApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/priority/search`,
        params: {
          startAt: queryArg.startAt,
          maxResults: queryArg.maxResults,
          id: queryArg.id,
          onlyDefault: queryArg.onlyDefault,
        },
      }),
    }),
    getPriority: build.query<GetPriorityApiResponse, GetPriorityApiArg>({
      query: (queryArg) => ({ url: `/rest/api/3/priority/${queryArg.id}` }),
    }),
    updatePriority: build.mutation<
      UpdatePriorityApiResponse,
      UpdatePriorityApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/priority/${queryArg.id}`,
        method: "PUT",
        body: queryArg.updatePriorityDetails,
      }),
    }),
    getAllProjects: build.query<
      GetAllProjectsApiResponse,
      GetAllProjectsApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/project`,
        params: {
          expand: queryArg.expand,
          recent: queryArg.recent,
          properties: queryArg.properties,
        },
      }),
    }),
    createProject: build.mutation<
      CreateProjectApiResponse,
      CreateProjectApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/project`,
        method: "POST",
        body: queryArg.createProjectDetails,
      }),
    }),
    getRecent: build.query<GetRecentApiResponse, GetRecentApiArg>({
      query: (queryArg) => ({
        url: `/rest/api/3/project/recent`,
        params: { expand: queryArg.expand, properties: queryArg.properties },
      }),
    }),
    searchProjects: build.query<
      SearchProjectsApiResponse,
      SearchProjectsApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/project/search`,
        params: {
          startAt: queryArg.startAt,
          maxResults: queryArg.maxResults,
          orderBy: queryArg.orderBy,
          id: queryArg.id,
          keys: queryArg.keys,
          query: queryArg.query,
          typeKey: queryArg.typeKey,
          categoryId: queryArg.categoryId,
          action: queryArg.action,
          expand: queryArg.expand,
          status: queryArg.status,
          properties: queryArg.properties,
          propertyQuery: queryArg.propertyQuery,
        },
      }),
    }),
    getAllProjectTypes: build.query<
      GetAllProjectTypesApiResponse,
      GetAllProjectTypesApiArg
    >({
      query: () => ({ url: `/rest/api/3/project/type` }),
    }),
    getAllAccessibleProjectTypes: build.query<
      GetAllAccessibleProjectTypesApiResponse,
      GetAllAccessibleProjectTypesApiArg
    >({
      query: () => ({ url: `/rest/api/3/project/type/accessible` }),
    }),
    getProjectTypeByKey: build.query<
      GetProjectTypeByKeyApiResponse,
      GetProjectTypeByKeyApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/project/type/${queryArg.projectTypeKey}`,
      }),
    }),
    getAccessibleProjectTypeByKey: build.query<
      GetAccessibleProjectTypeByKeyApiResponse,
      GetAccessibleProjectTypeByKeyApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/project/type/${queryArg.projectTypeKey}/accessible`,
      }),
    }),
    getProject: build.query<GetProjectApiResponse, GetProjectApiArg>({
      query: (queryArg) => ({
        url: `/rest/api/3/project/${queryArg.projectIdOrKey}`,
        params: { expand: queryArg.expand, properties: queryArg.properties },
      }),
    }),
    updateProject: build.mutation<
      UpdateProjectApiResponse,
      UpdateProjectApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/project/${queryArg.projectIdOrKey}`,
        method: "PUT",
        body: queryArg.updateProjectDetails,
        params: { expand: queryArg.expand },
      }),
    }),
    deleteProject: build.mutation<
      DeleteProjectApiResponse,
      DeleteProjectApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/project/${queryArg.projectIdOrKey}`,
        method: "DELETE",
        params: { enableUndo: queryArg.enableUndo },
      }),
    }),
    archiveProject: build.mutation<
      ArchiveProjectApiResponse,
      ArchiveProjectApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/project/${queryArg.projectIdOrKey}/archive`,
        method: "POST",
      }),
    }),
    updateProjectAvatar: build.mutation<
      UpdateProjectAvatarApiResponse,
      UpdateProjectAvatarApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/project/${queryArg.projectIdOrKey}/avatar`,
        method: "PUT",
        body: queryArg.avatar,
      }),
    }),
    deleteProjectAvatar: build.mutation<
      DeleteProjectAvatarApiResponse,
      DeleteProjectAvatarApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/project/${queryArg.projectIdOrKey}/avatar/${queryArg.id}`,
        method: "DELETE",
      }),
    }),
    createProjectAvatar: build.mutation<
      CreateProjectAvatarApiResponse,
      CreateProjectAvatarApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/project/${queryArg.projectIdOrKey}/avatar2`,
        method: "POST",
        body: queryArg.body,
        params: { x: queryArg.x, y: queryArg.y, size: queryArg.size },
      }),
    }),
    getAllProjectAvatars: build.query<
      GetAllProjectAvatarsApiResponse,
      GetAllProjectAvatarsApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/project/${queryArg.projectIdOrKey}/avatars`,
      }),
    }),
    getProjectComponentsPaginated: build.query<
      GetProjectComponentsPaginatedApiResponse,
      GetProjectComponentsPaginatedApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/project/${queryArg.projectIdOrKey}/component`,
        params: {
          startAt: queryArg.startAt,
          maxResults: queryArg.maxResults,
          orderBy: queryArg.orderBy,
          query: queryArg.query,
        },
      }),
    }),
    getProjectComponents: build.query<
      GetProjectComponentsApiResponse,
      GetProjectComponentsApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/project/${queryArg.projectIdOrKey}/components`,
      }),
    }),
    deleteProjectAsynchronously: build.mutation<
      DeleteProjectAsynchronouslyApiResponse,
      DeleteProjectAsynchronouslyApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/project/${queryArg.projectIdOrKey}/delete`,
        method: "POST",
      }),
    }),
    getFeaturesForProject: build.query<
      GetFeaturesForProjectApiResponse,
      GetFeaturesForProjectApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/project/${queryArg.projectIdOrKey}/features`,
      }),
    }),
    toggleFeatureForProject: build.mutation<
      ToggleFeatureForProjectApiResponse,
      ToggleFeatureForProjectApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/project/${queryArg.projectIdOrKey}/features/${queryArg.featureKey}`,
        method: "PUT",
        body: queryArg.projectFeatureState,
      }),
    }),
    getProjectPropertyKeys: build.query<
      GetProjectPropertyKeysApiResponse,
      GetProjectPropertyKeysApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/project/${queryArg.projectIdOrKey}/properties`,
      }),
    }),
    getProjectProperty: build.query<
      GetProjectPropertyApiResponse,
      GetProjectPropertyApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/project/${queryArg.projectIdOrKey}/properties/${queryArg.propertyKey}`,
      }),
    }),
    setProjectProperty: build.mutation<
      SetProjectPropertyApiResponse,
      SetProjectPropertyApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/project/${queryArg.projectIdOrKey}/properties/${queryArg.propertyKey}`,
        method: "PUT",
        body: queryArg.body,
      }),
    }),
    deleteProjectProperty: build.mutation<
      DeleteProjectPropertyApiResponse,
      DeleteProjectPropertyApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/project/${queryArg.projectIdOrKey}/properties/${queryArg.propertyKey}`,
        method: "DELETE",
      }),
    }),
    restore: build.mutation<RestoreApiResponse, RestoreApiArg>({
      query: (queryArg) => ({
        url: `/rest/api/3/project/${queryArg.projectIdOrKey}/restore`,
        method: "POST",
      }),
    }),
    getProjectRoles: build.query<
      GetProjectRolesApiResponse,
      GetProjectRolesApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/project/${queryArg.projectIdOrKey}/role`,
      }),
    }),
    getProjectRole: build.query<
      GetProjectRoleApiResponse,
      GetProjectRoleApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/project/${queryArg.projectIdOrKey}/role/${queryArg.id}`,
        params: { excludeInactiveUsers: queryArg.excludeInactiveUsers },
      }),
    }),
    setActors: build.mutation<SetActorsApiResponse, SetActorsApiArg>({
      query: (queryArg) => ({
        url: `/rest/api/3/project/${queryArg.projectIdOrKey}/role/${queryArg.id}`,
        method: "PUT",
        body: queryArg.projectRoleActorsUpdateBean,
      }),
    }),
    addActorUsers: build.mutation<
      AddActorUsersApiResponse,
      AddActorUsersApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/project/${queryArg.projectIdOrKey}/role/${queryArg.id}`,
        method: "POST",
        body: queryArg.actorsMap,
      }),
    }),
    deleteActor: build.mutation<DeleteActorApiResponse, DeleteActorApiArg>({
      query: (queryArg) => ({
        url: `/rest/api/3/project/${queryArg.projectIdOrKey}/role/${queryArg.id}`,
        method: "DELETE",
        params: {
          user: queryArg.user,
          group: queryArg.group,
          groupId: queryArg.groupId,
        },
      }),
    }),
    getProjectRoleDetails: build.query<
      GetProjectRoleDetailsApiResponse,
      GetProjectRoleDetailsApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/project/${queryArg.projectIdOrKey}/roledetails`,
        params: {
          currentMember: queryArg.currentMember,
          excludeConnectAddons: queryArg.excludeConnectAddons,
        },
      }),
    }),
    getAllStatuses: build.query<
      GetAllStatusesApiResponse,
      GetAllStatusesApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/project/${queryArg.projectIdOrKey}/statuses`,
      }),
    }),
    updateProjectType: build.mutation<
      UpdateProjectTypeApiResponse,
      UpdateProjectTypeApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/project/${queryArg.projectIdOrKey}/type/${queryArg.newProjectTypeKey}`,
        method: "PUT",
      }),
    }),
    getProjectVersionsPaginated: build.query<
      GetProjectVersionsPaginatedApiResponse,
      GetProjectVersionsPaginatedApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/project/${queryArg.projectIdOrKey}/version`,
        params: {
          startAt: queryArg.startAt,
          maxResults: queryArg.maxResults,
          orderBy: queryArg.orderBy,
          query: queryArg.query,
          status: queryArg.status,
          expand: queryArg.expand,
        },
      }),
    }),
    getProjectVersions: build.query<
      GetProjectVersionsApiResponse,
      GetProjectVersionsApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/project/${queryArg.projectIdOrKey}/versions`,
        params: { expand: queryArg.expand },
      }),
    }),
    getProjectEmail: build.query<
      GetProjectEmailApiResponse,
      GetProjectEmailApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/project/${queryArg.projectId}/email`,
      }),
    }),
    updateProjectEmail: build.mutation<
      UpdateProjectEmailApiResponse,
      UpdateProjectEmailApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/project/${queryArg.projectId}/email`,
        method: "PUT",
        body: queryArg.projectEmailAddress,
      }),
    }),
    getHierarchy: build.query<GetHierarchyApiResponse, GetHierarchyApiArg>({
      query: (queryArg) => ({
        url: `/rest/api/3/project/${queryArg.projectId}/hierarchy`,
      }),
    }),
    getProjectIssueSecurityScheme: build.query<
      GetProjectIssueSecuritySchemeApiResponse,
      GetProjectIssueSecuritySchemeApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/project/${queryArg.projectKeyOrId}/issuesecuritylevelscheme`,
      }),
    }),
    getNotificationSchemeForProject: build.query<
      GetNotificationSchemeForProjectApiResponse,
      GetNotificationSchemeForProjectApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/project/${queryArg.projectKeyOrId}/notificationscheme`,
        params: { expand: queryArg.expand },
      }),
    }),
    getAssignedPermissionScheme: build.query<
      GetAssignedPermissionSchemeApiResponse,
      GetAssignedPermissionSchemeApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/project/${queryArg.projectKeyOrId}/permissionscheme`,
        params: { expand: queryArg.expand },
      }),
    }),
    assignPermissionScheme: build.mutation<
      AssignPermissionSchemeApiResponse,
      AssignPermissionSchemeApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/project/${queryArg.projectKeyOrId}/permissionscheme`,
        method: "PUT",
        body: queryArg.idBean,
        params: { expand: queryArg.expand },
      }),
    }),
    getSecurityLevelsForProject: build.query<
      GetSecurityLevelsForProjectApiResponse,
      GetSecurityLevelsForProjectApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/project/${queryArg.projectKeyOrId}/securitylevel`,
      }),
    }),
    getAllProjectCategories: build.query<
      GetAllProjectCategoriesApiResponse,
      GetAllProjectCategoriesApiArg
    >({
      query: () => ({ url: `/rest/api/3/projectCategory` }),
    }),
    createProjectCategory: build.mutation<
      CreateProjectCategoryApiResponse,
      CreateProjectCategoryApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/projectCategory`,
        method: "POST",
        body: queryArg.projectCategory,
      }),
    }),
    getProjectCategoryById: build.query<
      GetProjectCategoryByIdApiResponse,
      GetProjectCategoryByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/projectCategory/${queryArg.id}`,
      }),
    }),
    updateProjectCategory: build.mutation<
      UpdateProjectCategoryApiResponse,
      UpdateProjectCategoryApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/projectCategory/${queryArg.id}`,
        method: "PUT",
        body: queryArg.projectCategory,
      }),
    }),
    removeProjectCategory: build.mutation<
      RemoveProjectCategoryApiResponse,
      RemoveProjectCategoryApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/projectCategory/${queryArg.id}`,
        method: "DELETE",
      }),
    }),
    validateProjectKey: build.query<
      ValidateProjectKeyApiResponse,
      ValidateProjectKeyApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/projectvalidate/key`,
        params: { key: queryArg.key },
      }),
    }),
    getValidProjectKey: build.query<
      GetValidProjectKeyApiResponse,
      GetValidProjectKeyApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/projectvalidate/validProjectKey`,
        params: { key: queryArg.key },
      }),
    }),
    getValidProjectName: build.query<
      GetValidProjectNameApiResponse,
      GetValidProjectNameApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/projectvalidate/validProjectName`,
        params: { name: queryArg.name },
      }),
    }),
    getResolutions: build.query<
      GetResolutionsApiResponse,
      GetResolutionsApiArg
    >({
      query: () => ({ url: `/rest/api/3/resolution` }),
    }),
    getResolution: build.query<GetResolutionApiResponse, GetResolutionApiArg>({
      query: (queryArg) => ({ url: `/rest/api/3/resolution/${queryArg.id}` }),
    }),
    getAllProjectRoles: build.query<
      GetAllProjectRolesApiResponse,
      GetAllProjectRolesApiArg
    >({
      query: () => ({ url: `/rest/api/3/role` }),
    }),
    createProjectRole: build.mutation<
      CreateProjectRoleApiResponse,
      CreateProjectRoleApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/role`,
        method: "POST",
        body: queryArg.createUpdateRoleRequestBean,
      }),
    }),
    getProjectRoleById: build.query<
      GetProjectRoleByIdApiResponse,
      GetProjectRoleByIdApiArg
    >({
      query: (queryArg) => ({ url: `/rest/api/3/role/${queryArg.id}` }),
    }),
    fullyUpdateProjectRole: build.mutation<
      FullyUpdateProjectRoleApiResponse,
      FullyUpdateProjectRoleApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/role/${queryArg.id}`,
        method: "PUT",
        body: queryArg.createUpdateRoleRequestBean,
      }),
    }),
    partialUpdateProjectRole: build.mutation<
      PartialUpdateProjectRoleApiResponse,
      PartialUpdateProjectRoleApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/role/${queryArg.id}`,
        method: "POST",
        body: queryArg.createUpdateRoleRequestBean,
      }),
    }),
    deleteProjectRole: build.mutation<
      DeleteProjectRoleApiResponse,
      DeleteProjectRoleApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/role/${queryArg.id}`,
        method: "DELETE",
        params: { swap: queryArg.swap },
      }),
    }),
    getProjectRoleActorsForRole: build.query<
      GetProjectRoleActorsForRoleApiResponse,
      GetProjectRoleActorsForRoleApiArg
    >({
      query: (queryArg) => ({ url: `/rest/api/3/role/${queryArg.id}/actors` }),
    }),
    addProjectRoleActorsToRole: build.mutation<
      AddProjectRoleActorsToRoleApiResponse,
      AddProjectRoleActorsToRoleApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/role/${queryArg.id}/actors`,
        method: "POST",
        body: queryArg.actorInputBean,
      }),
    }),
    deleteProjectRoleActorsFromRole: build.mutation<
      DeleteProjectRoleActorsFromRoleApiResponse,
      DeleteProjectRoleActorsFromRoleApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/role/${queryArg.id}/actors`,
        method: "DELETE",
        params: {
          user: queryArg.user,
          groupId: queryArg.groupId,
          group: queryArg.group,
        },
      }),
    }),
    getScreens: build.query<GetScreensApiResponse, GetScreensApiArg>({
      query: (queryArg) => ({
        url: `/rest/api/3/screens`,
        params: {
          startAt: queryArg.startAt,
          maxResults: queryArg.maxResults,
          id: queryArg.id,
          queryString: queryArg.queryString,
          scope: queryArg.scope,
          orderBy: queryArg.orderBy,
        },
      }),
    }),
    createScreen: build.mutation<CreateScreenApiResponse, CreateScreenApiArg>({
      query: (queryArg) => ({
        url: `/rest/api/3/screens`,
        method: "POST",
        body: queryArg.screenDetails,
      }),
    }),
    addFieldToDefaultScreen: build.mutation<
      AddFieldToDefaultScreenApiResponse,
      AddFieldToDefaultScreenApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/screens/addToDefault/${queryArg.fieldId}`,
        method: "POST",
      }),
    }),
    updateScreen: build.mutation<UpdateScreenApiResponse, UpdateScreenApiArg>({
      query: (queryArg) => ({
        url: `/rest/api/3/screens/${queryArg.screenId}`,
        method: "PUT",
        body: queryArg.updateScreenDetails,
      }),
    }),
    deleteScreen: build.mutation<DeleteScreenApiResponse, DeleteScreenApiArg>({
      query: (queryArg) => ({
        url: `/rest/api/3/screens/${queryArg.screenId}`,
        method: "DELETE",
      }),
    }),
    getAvailableScreenFields: build.query<
      GetAvailableScreenFieldsApiResponse,
      GetAvailableScreenFieldsApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/screens/${queryArg.screenId}/availableFields`,
      }),
    }),
    getAllScreenTabs: build.query<
      GetAllScreenTabsApiResponse,
      GetAllScreenTabsApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/screens/${queryArg.screenId}/tabs`,
        params: { projectKey: queryArg.projectKey },
      }),
    }),
    addScreenTab: build.mutation<AddScreenTabApiResponse, AddScreenTabApiArg>({
      query: (queryArg) => ({
        url: `/rest/api/3/screens/${queryArg.screenId}/tabs`,
        method: "POST",
        body: queryArg.screenableTab,
      }),
    }),
    renameScreenTab: build.mutation<
      RenameScreenTabApiResponse,
      RenameScreenTabApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/screens/${queryArg.screenId}/tabs/${queryArg.tabId}`,
        method: "PUT",
        body: queryArg.screenableTab,
      }),
    }),
    deleteScreenTab: build.mutation<
      DeleteScreenTabApiResponse,
      DeleteScreenTabApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/screens/${queryArg.screenId}/tabs/${queryArg.tabId}`,
        method: "DELETE",
      }),
    }),
    getAllScreenTabFields: build.query<
      GetAllScreenTabFieldsApiResponse,
      GetAllScreenTabFieldsApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/screens/${queryArg.screenId}/tabs/${queryArg.tabId}/fields`,
        params: { projectKey: queryArg.projectKey },
      }),
    }),
    addScreenTabField: build.mutation<
      AddScreenTabFieldApiResponse,
      AddScreenTabFieldApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/screens/${queryArg.screenId}/tabs/${queryArg.tabId}/fields`,
        method: "POST",
        body: queryArg.addFieldBean,
      }),
    }),
    removeScreenTabField: build.mutation<
      RemoveScreenTabFieldApiResponse,
      RemoveScreenTabFieldApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/screens/${queryArg.screenId}/tabs/${queryArg.tabId}/fields/${queryArg.id}`,
        method: "DELETE",
      }),
    }),
    moveScreenTabField: build.mutation<
      MoveScreenTabFieldApiResponse,
      MoveScreenTabFieldApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/screens/${queryArg.screenId}/tabs/${queryArg.tabId}/fields/${queryArg.id}/move`,
        method: "POST",
        body: queryArg.moveFieldBean,
      }),
    }),
    moveScreenTab: build.mutation<
      MoveScreenTabApiResponse,
      MoveScreenTabApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/screens/${queryArg.screenId}/tabs/${queryArg.tabId}/move/${queryArg.pos}`,
        method: "POST",
      }),
    }),
    getScreenSchemes: build.query<
      GetScreenSchemesApiResponse,
      GetScreenSchemesApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/screenscheme`,
        params: {
          startAt: queryArg.startAt,
          maxResults: queryArg.maxResults,
          id: queryArg.id,
          expand: queryArg.expand,
          queryString: queryArg.queryString,
          orderBy: queryArg.orderBy,
        },
      }),
    }),
    createScreenScheme: build.mutation<
      CreateScreenSchemeApiResponse,
      CreateScreenSchemeApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/screenscheme`,
        method: "POST",
        body: queryArg.screenSchemeDetails,
      }),
    }),
    updateScreenScheme: build.mutation<
      UpdateScreenSchemeApiResponse,
      UpdateScreenSchemeApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/screenscheme/${queryArg.screenSchemeId}`,
        method: "PUT",
        body: queryArg.updateScreenSchemeDetails,
      }),
    }),
    deleteScreenScheme: build.mutation<
      DeleteScreenSchemeApiResponse,
      DeleteScreenSchemeApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/screenscheme/${queryArg.screenSchemeId}`,
        method: "DELETE",
      }),
    }),
    searchForIssuesUsingJql: build.query<
      SearchForIssuesUsingJqlApiResponse,
      SearchForIssuesUsingJqlApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/search`,
        params: {
          jql: queryArg.jql,
          startAt: queryArg.startAt,
          maxResults: queryArg.maxResults,
          validateQuery: queryArg.validateQuery,
          fields: queryArg.fields,
          expand: queryArg.expand,
          properties: queryArg.properties,
          fieldsByKeys: queryArg.fieldsByKeys,
        },
      }),
    }),
    searchForIssuesUsingJqlPost: build.mutation<
      SearchForIssuesUsingJqlPostApiResponse,
      SearchForIssuesUsingJqlPostApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/search`,
        method: "POST",
        body: queryArg.searchRequestBean,
      }),
    }),
    getIssueSecurityLevel: build.query<
      GetIssueSecurityLevelApiResponse,
      GetIssueSecurityLevelApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/securitylevel/${queryArg.id}`,
      }),
    }),
    getServerInfo: build.query<GetServerInfoApiResponse, GetServerInfoApiArg>({
      query: () => ({ url: `/rest/api/3/serverInfo` }),
    }),
    getIssueNavigatorDefaultColumns: build.query<
      GetIssueNavigatorDefaultColumnsApiResponse,
      GetIssueNavigatorDefaultColumnsApiArg
    >({
      query: () => ({ url: `/rest/api/3/settings/columns` }),
    }),
    setIssueNavigatorDefaultColumns: build.mutation<
      SetIssueNavigatorDefaultColumnsApiResponse,
      SetIssueNavigatorDefaultColumnsApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/settings/columns`,
        method: "PUT",
        body: queryArg.body,
      }),
    }),
    getStatuses: build.query<GetStatusesApiResponse, GetStatusesApiArg>({
      query: () => ({ url: `/rest/api/3/status` }),
    }),
    getStatus: build.query<GetStatusApiResponse, GetStatusApiArg>({
      query: (queryArg) => ({ url: `/rest/api/3/status/${queryArg.idOrName}` }),
    }),
    getStatusCategories: build.query<
      GetStatusCategoriesApiResponse,
      GetStatusCategoriesApiArg
    >({
      query: () => ({ url: `/rest/api/3/statuscategory` }),
    }),
    getStatusCategory: build.query<
      GetStatusCategoryApiResponse,
      GetStatusCategoryApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/statuscategory/${queryArg.idOrKey}`,
      }),
    }),
    getStatusesById: build.query<
      GetStatusesByIdApiResponse,
      GetStatusesByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/statuses`,
        params: { expand: queryArg.expand, id: queryArg.id },
      }),
    }),
    updateStatuses: build.mutation<
      UpdateStatusesApiResponse,
      UpdateStatusesApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/statuses`,
        method: "PUT",
        body: queryArg.statusUpdateRequest,
      }),
    }),
    createStatuses: build.mutation<
      CreateStatusesApiResponse,
      CreateStatusesApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/statuses`,
        method: "POST",
        body: queryArg.statusCreateRequest,
      }),
    }),
    deleteStatusesById: build.mutation<
      DeleteStatusesByIdApiResponse,
      DeleteStatusesByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/statuses`,
        method: "DELETE",
        params: { id: queryArg.id },
      }),
    }),
    search: build.query<SearchApiResponse, SearchApiArg>({
      query: (queryArg) => ({
        url: `/rest/api/3/statuses/search`,
        params: {
          expand: queryArg.expand,
          projectId: queryArg.projectId,
          startAt: queryArg.startAt,
          maxResults: queryArg.maxResults,
          searchString: queryArg.searchString,
          statusCategory: queryArg.statusCategory,
        },
      }),
    }),
    getTask: build.query<GetTaskApiResponse, GetTaskApiArg>({
      query: (queryArg) => ({ url: `/rest/api/3/task/${queryArg.taskId}` }),
    }),
    cancelTask: build.mutation<CancelTaskApiResponse, CancelTaskApiArg>({
      query: (queryArg) => ({
        url: `/rest/api/3/task/${queryArg.taskId}/cancel`,
        method: "POST",
      }),
    }),
    getUiModifications: build.query<
      GetUiModificationsApiResponse,
      GetUiModificationsApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/uiModifications`,
        params: {
          startAt: queryArg.startAt,
          maxResults: queryArg.maxResults,
          expand: queryArg.expand,
        },
      }),
    }),
    createUiModification: build.mutation<
      CreateUiModificationApiResponse,
      CreateUiModificationApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/uiModifications`,
        method: "POST",
        body: queryArg.createUiModificationDetails,
      }),
    }),
    updateUiModification: build.mutation<
      UpdateUiModificationApiResponse,
      UpdateUiModificationApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/uiModifications/${queryArg.uiModificationId}`,
        method: "PUT",
        body: queryArg.updateUiModificationDetails,
      }),
    }),
    deleteUiModification: build.mutation<
      DeleteUiModificationApiResponse,
      DeleteUiModificationApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/uiModifications/${queryArg.uiModificationId}`,
        method: "DELETE",
      }),
    }),
    getAvatars: build.query<GetAvatarsApiResponse, GetAvatarsApiArg>({
      query: (queryArg) => ({
        url: `/rest/api/3/universal_avatar/type/${queryArg["type"]}/owner/${queryArg.entityId}`,
      }),
    }),
    storeAvatar: build.mutation<StoreAvatarApiResponse, StoreAvatarApiArg>({
      query: (queryArg) => ({
        url: `/rest/api/3/universal_avatar/type/${queryArg["type"]}/owner/${queryArg.entityId}`,
        method: "POST",
        body: queryArg.body,
        params: { x: queryArg.x, y: queryArg.y, size: queryArg.size },
      }),
    }),
    deleteAvatar: build.mutation<DeleteAvatarApiResponse, DeleteAvatarApiArg>({
      query: (queryArg) => ({
        url: `/rest/api/3/universal_avatar/type/${queryArg["type"]}/owner/${queryArg.owningObjectId}/avatar/${queryArg.id}`,
        method: "DELETE",
      }),
    }),
    getAvatarImageByType: build.query<
      GetAvatarImageByTypeApiResponse,
      GetAvatarImageByTypeApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/universal_avatar/view/type/${queryArg["type"]}`,
        params: { size: queryArg.size, format: queryArg.format },
      }),
    }),
    getAvatarImageById: build.query<
      GetAvatarImageByIdApiResponse,
      GetAvatarImageByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/universal_avatar/view/type/${queryArg["type"]}/avatar/${queryArg.id}`,
        params: { size: queryArg.size, format: queryArg.format },
      }),
    }),
    getAvatarImageByOwner: build.query<
      GetAvatarImageByOwnerApiResponse,
      GetAvatarImageByOwnerApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/universal_avatar/view/type/${queryArg["type"]}/owner/${queryArg.entityId}`,
        params: { size: queryArg.size, format: queryArg.format },
      }),
    }),
    getUser: build.query<GetUserApiResponse, GetUserApiArg>({
      query: (queryArg) => ({
        url: `/rest/api/3/user`,
        params: {
          accountId: queryArg.accountId,
          username: queryArg.username,
          key: queryArg.key,
          expand: queryArg.expand,
        },
      }),
    }),
    createUser: build.mutation<CreateUserApiResponse, CreateUserApiArg>({
      query: (queryArg) => ({
        url: `/rest/api/3/user`,
        method: "POST",
        body: queryArg.newUserDetails,
      }),
    }),
    removeUser: build.mutation<RemoveUserApiResponse, RemoveUserApiArg>({
      query: (queryArg) => ({
        url: `/rest/api/3/user`,
        method: "DELETE",
        params: {
          accountId: queryArg.accountId,
          username: queryArg.username,
          key: queryArg.key,
        },
      }),
    }),
    findBulkAssignableUsers: build.query<
      FindBulkAssignableUsersApiResponse,
      FindBulkAssignableUsersApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/user/assignable/multiProjectSearch`,
        params: {
          query: queryArg.query,
          username: queryArg.username,
          accountId: queryArg.accountId,
          projectKeys: queryArg.projectKeys,
          startAt: queryArg.startAt,
          maxResults: queryArg.maxResults,
        },
      }),
    }),
    findAssignableUsers: build.query<
      FindAssignableUsersApiResponse,
      FindAssignableUsersApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/user/assignable/search`,
        params: {
          query: queryArg.query,
          sessionId: queryArg.sessionId,
          username: queryArg.username,
          accountId: queryArg.accountId,
          project: queryArg.project,
          issueKey: queryArg.issueKey,
          startAt: queryArg.startAt,
          maxResults: queryArg.maxResults,
          actionDescriptorId: queryArg.actionDescriptorId,
          recommend: queryArg.recommend,
        },
      }),
    }),
    bulkGetUsers: build.query<BulkGetUsersApiResponse, BulkGetUsersApiArg>({
      query: (queryArg) => ({
        url: `/rest/api/3/user/bulk`,
        params: {
          startAt: queryArg.startAt,
          maxResults: queryArg.maxResults,
          username: queryArg.username,
          key: queryArg.key,
          accountId: queryArg.accountId,
        },
      }),
    }),
    bulkGetUsersMigration: build.query<
      BulkGetUsersMigrationApiResponse,
      BulkGetUsersMigrationApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/user/bulk/migration`,
        params: {
          startAt: queryArg.startAt,
          maxResults: queryArg.maxResults,
          username: queryArg.username,
          key: queryArg.key,
        },
      }),
    }),
    getUserDefaultColumns: build.query<
      GetUserDefaultColumnsApiResponse,
      GetUserDefaultColumnsApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/user/columns`,
        params: { accountId: queryArg.accountId, username: queryArg.username },
      }),
    }),
    setUserColumns: build.mutation<
      SetUserColumnsApiResponse,
      SetUserColumnsApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/user/columns`,
        method: "PUT",
        body: queryArg.body,
        params: { accountId: queryArg.accountId },
      }),
    }),
    resetUserColumns: build.mutation<
      ResetUserColumnsApiResponse,
      ResetUserColumnsApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/user/columns`,
        method: "DELETE",
        params: { accountId: queryArg.accountId, username: queryArg.username },
      }),
    }),
    getUserEmail: build.query<GetUserEmailApiResponse, GetUserEmailApiArg>({
      query: (queryArg) => ({
        url: `/rest/api/3/user/email`,
        params: { accountId: queryArg.accountId },
      }),
    }),
    getUserEmailBulk: build.query<
      GetUserEmailBulkApiResponse,
      GetUserEmailBulkApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/user/email/bulk`,
        params: { accountId: queryArg.accountId },
      }),
    }),
    getUserGroups: build.query<GetUserGroupsApiResponse, GetUserGroupsApiArg>({
      query: (queryArg) => ({
        url: `/rest/api/3/user/groups`,
        params: {
          accountId: queryArg.accountId,
          username: queryArg.username,
          key: queryArg.key,
        },
      }),
    }),
    findUsersWithAllPermissions: build.query<
      FindUsersWithAllPermissionsApiResponse,
      FindUsersWithAllPermissionsApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/user/permission/search`,
        params: {
          query: queryArg.query,
          username: queryArg.username,
          accountId: queryArg.accountId,
          permissions: queryArg.permissions,
          issueKey: queryArg.issueKey,
          projectKey: queryArg.projectKey,
          startAt: queryArg.startAt,
          maxResults: queryArg.maxResults,
        },
      }),
    }),
    findUsersForPicker: build.query<
      FindUsersForPickerApiResponse,
      FindUsersForPickerApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/user/picker`,
        params: {
          query: queryArg.query,
          maxResults: queryArg.maxResults,
          showAvatar: queryArg.showAvatar,
          exclude: queryArg.exclude,
          excludeAccountIds: queryArg.excludeAccountIds,
          avatarSize: queryArg.avatarSize,
          excludeConnectUsers: queryArg.excludeConnectUsers,
        },
      }),
    }),
    getUserPropertyKeys: build.query<
      GetUserPropertyKeysApiResponse,
      GetUserPropertyKeysApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/user/properties`,
        params: {
          accountId: queryArg.accountId,
          userKey: queryArg.userKey,
          username: queryArg.username,
        },
      }),
    }),
    getUserProperty: build.query<
      GetUserPropertyApiResponse,
      GetUserPropertyApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/user/properties/${queryArg.propertyKey}`,
        params: {
          accountId: queryArg.accountId,
          userKey: queryArg.userKey,
          username: queryArg.username,
        },
      }),
    }),
    setUserProperty: build.mutation<
      SetUserPropertyApiResponse,
      SetUserPropertyApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/user/properties/${queryArg.propertyKey}`,
        method: "PUT",
        body: queryArg.body,
        params: {
          accountId: queryArg.accountId,
          userKey: queryArg.userKey,
          username: queryArg.username,
        },
      }),
    }),
    deleteUserProperty: build.mutation<
      DeleteUserPropertyApiResponse,
      DeleteUserPropertyApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/user/properties/${queryArg.propertyKey}`,
        method: "DELETE",
        params: {
          accountId: queryArg.accountId,
          userKey: queryArg.userKey,
          username: queryArg.username,
        },
      }),
    }),
    findUsers: build.query<FindUsersApiResponse, FindUsersApiArg>({
      query: (queryArg) => ({
        url: `/rest/api/3/user/search`,
        params: {
          query: queryArg.query,
          username: queryArg.username,
          accountId: queryArg.accountId,
          startAt: queryArg.startAt,
          maxResults: queryArg.maxResults,
          property: queryArg.property,
        },
      }),
    }),
    findUsersByQuery: build.query<
      FindUsersByQueryApiResponse,
      FindUsersByQueryApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/user/search/query`,
        params: {
          query: queryArg.query,
          startAt: queryArg.startAt,
          maxResults: queryArg.maxResults,
        },
      }),
    }),
    findUserKeysByQuery: build.query<
      FindUserKeysByQueryApiResponse,
      FindUserKeysByQueryApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/user/search/query/key`,
        params: {
          query: queryArg.query,
          startAt: queryArg.startAt,
          maxResults: queryArg.maxResults,
        },
      }),
    }),
    findUsersWithBrowsePermission: build.query<
      FindUsersWithBrowsePermissionApiResponse,
      FindUsersWithBrowsePermissionApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/user/viewissue/search`,
        params: {
          query: queryArg.query,
          username: queryArg.username,
          accountId: queryArg.accountId,
          issueKey: queryArg.issueKey,
          projectKey: queryArg.projectKey,
          startAt: queryArg.startAt,
          maxResults: queryArg.maxResults,
        },
      }),
    }),
    getAllUsersDefault: build.query<
      GetAllUsersDefaultApiResponse,
      GetAllUsersDefaultApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/users`,
        params: { startAt: queryArg.startAt, maxResults: queryArg.maxResults },
      }),
    }),
    getAllUsers: build.query<GetAllUsersApiResponse, GetAllUsersApiArg>({
      query: (queryArg) => ({
        url: `/rest/api/3/users/search`,
        params: { startAt: queryArg.startAt, maxResults: queryArg.maxResults },
      }),
    }),
    createVersion: build.mutation<
      CreateVersionApiResponse,
      CreateVersionApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/version`,
        method: "POST",
        body: queryArg.version,
      }),
    }),
    getVersion: build.query<GetVersionApiResponse, GetVersionApiArg>({
      query: (queryArg) => ({
        url: `/rest/api/3/version/${queryArg.id}`,
        params: { expand: queryArg.expand },
      }),
    }),
    updateVersion: build.mutation<
      UpdateVersionApiResponse,
      UpdateVersionApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/version/${queryArg.id}`,
        method: "PUT",
        body: queryArg.version,
      }),
    }),
    deleteVersion: build.mutation<
      DeleteVersionApiResponse,
      DeleteVersionApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/version/${queryArg.id}`,
        method: "DELETE",
        params: {
          moveFixIssuesTo: queryArg.moveFixIssuesTo,
          moveAffectedIssuesTo: queryArg.moveAffectedIssuesTo,
        },
      }),
    }),
    mergeVersions: build.mutation<
      MergeVersionsApiResponse,
      MergeVersionsApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/version/${queryArg.id}/mergeto/${queryArg.moveIssuesTo}`,
        method: "PUT",
      }),
    }),
    moveVersion: build.mutation<MoveVersionApiResponse, MoveVersionApiArg>({
      query: (queryArg) => ({
        url: `/rest/api/3/version/${queryArg.id}/move`,
        method: "POST",
        body: queryArg.versionMoveBean,
      }),
    }),
    getVersionRelatedIssues: build.query<
      GetVersionRelatedIssuesApiResponse,
      GetVersionRelatedIssuesApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/version/${queryArg.id}/relatedIssueCounts`,
      }),
    }),
    deleteAndReplaceVersion: build.mutation<
      DeleteAndReplaceVersionApiResponse,
      DeleteAndReplaceVersionApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/version/${queryArg.id}/removeAndSwap`,
        method: "POST",
        body: queryArg.deleteAndReplaceVersionBean,
      }),
    }),
    getVersionUnresolvedIssues: build.query<
      GetVersionUnresolvedIssuesApiResponse,
      GetVersionUnresolvedIssuesApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/version/${queryArg.id}/unresolvedIssueCount`,
      }),
    }),
    getDynamicWebhooksForApp: build.query<
      GetDynamicWebhooksForAppApiResponse,
      GetDynamicWebhooksForAppApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/webhook`,
        params: { startAt: queryArg.startAt, maxResults: queryArg.maxResults },
      }),
    }),
    registerDynamicWebhooks: build.mutation<
      RegisterDynamicWebhooksApiResponse,
      RegisterDynamicWebhooksApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/webhook`,
        method: "POST",
        body: queryArg.webhookRegistrationDetails,
      }),
    }),
    deleteWebhookById: build.mutation<
      DeleteWebhookByIdApiResponse,
      DeleteWebhookByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/webhook`,
        method: "DELETE",
        body: queryArg.containerForWebhookIDs,
      }),
    }),
    getFailedWebhooks: build.query<
      GetFailedWebhooksApiResponse,
      GetFailedWebhooksApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/webhook/failed`,
        params: { maxResults: queryArg.maxResults, after: queryArg.after },
      }),
    }),
    refreshWebhooks: build.mutation<
      RefreshWebhooksApiResponse,
      RefreshWebhooksApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/webhook/refresh`,
        method: "PUT",
        body: queryArg.containerForWebhookIDs,
      }),
    }),
    getAllWorkflows: build.query<
      GetAllWorkflowsApiResponse,
      GetAllWorkflowsApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/workflow`,
        params: { workflowName: queryArg.workflowName },
      }),
    }),
    createWorkflow: build.mutation<
      CreateWorkflowApiResponse,
      CreateWorkflowApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/workflow`,
        method: "POST",
        body: queryArg.createWorkflowDetails,
      }),
    }),
    getWorkflowTransitionRuleConfigurations: build.query<
      GetWorkflowTransitionRuleConfigurationsApiResponse,
      GetWorkflowTransitionRuleConfigurationsApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/workflow/rule/config`,
        params: {
          startAt: queryArg.startAt,
          maxResults: queryArg.maxResults,
          types: queryArg.types,
          keys: queryArg.keys,
          workflowNames: queryArg.workflowNames,
          withTags: queryArg.withTags,
          draft: queryArg.draft,
          expand: queryArg.expand,
        },
      }),
    }),
    updateWorkflowTransitionRuleConfigurations: build.mutation<
      UpdateWorkflowTransitionRuleConfigurationsApiResponse,
      UpdateWorkflowTransitionRuleConfigurationsApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/workflow/rule/config`,
        method: "PUT",
        body: queryArg.workflowTransitionRulesUpdate,
      }),
    }),
    deleteWorkflowTransitionRuleConfigurations: build.mutation<
      DeleteWorkflowTransitionRuleConfigurationsApiResponse,
      DeleteWorkflowTransitionRuleConfigurationsApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/workflow/rule/config/delete`,
        method: "PUT",
        body: queryArg.workflowsWithTransitionRulesDetails,
      }),
    }),
    getWorkflowsPaginated: build.query<
      GetWorkflowsPaginatedApiResponse,
      GetWorkflowsPaginatedApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/workflow/search`,
        params: {
          startAt: queryArg.startAt,
          maxResults: queryArg.maxResults,
          workflowName: queryArg.workflowName,
          expand: queryArg.expand,
          queryString: queryArg.queryString,
          orderBy: queryArg.orderBy,
          isActive: queryArg.isActive,
        },
      }),
    }),
    getWorkflowTransitionProperties: build.query<
      GetWorkflowTransitionPropertiesApiResponse,
      GetWorkflowTransitionPropertiesApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/workflow/transitions/${queryArg.transitionId}/properties`,
        params: {
          includeReservedKeys: queryArg.includeReservedKeys,
          key: queryArg.key,
          workflowName: queryArg.workflowName,
          workflowMode: queryArg.workflowMode,
        },
      }),
    }),
    updateWorkflowTransitionProperty: build.mutation<
      UpdateWorkflowTransitionPropertyApiResponse,
      UpdateWorkflowTransitionPropertyApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/workflow/transitions/${queryArg.transitionId}/properties`,
        method: "PUT",
        body: queryArg.workflowTransitionProperty,
        params: {
          key: queryArg.key,
          workflowName: queryArg.workflowName,
          workflowMode: queryArg.workflowMode,
        },
      }),
    }),
    createWorkflowTransitionProperty: build.mutation<
      CreateWorkflowTransitionPropertyApiResponse,
      CreateWorkflowTransitionPropertyApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/workflow/transitions/${queryArg.transitionId}/properties`,
        method: "POST",
        body: queryArg.workflowTransitionProperty,
        params: {
          key: queryArg.key,
          workflowName: queryArg.workflowName,
          workflowMode: queryArg.workflowMode,
        },
      }),
    }),
    deleteWorkflowTransitionProperty: build.mutation<
      DeleteWorkflowTransitionPropertyApiResponse,
      DeleteWorkflowTransitionPropertyApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/workflow/transitions/${queryArg.transitionId}/properties`,
        method: "DELETE",
        params: {
          key: queryArg.key,
          workflowName: queryArg.workflowName,
          workflowMode: queryArg.workflowMode,
        },
      }),
    }),
    deleteInactiveWorkflow: build.mutation<
      DeleteInactiveWorkflowApiResponse,
      DeleteInactiveWorkflowApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/workflow/${queryArg.entityId}`,
        method: "DELETE",
      }),
    }),
    getAllWorkflowSchemes: build.query<
      GetAllWorkflowSchemesApiResponse,
      GetAllWorkflowSchemesApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/workflowscheme`,
        params: { startAt: queryArg.startAt, maxResults: queryArg.maxResults },
      }),
    }),
    createWorkflowScheme: build.mutation<
      CreateWorkflowSchemeApiResponse,
      CreateWorkflowSchemeApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/workflowscheme`,
        method: "POST",
        body: queryArg.workflowScheme,
      }),
    }),
    getWorkflowSchemeProjectAssociations: build.query<
      GetWorkflowSchemeProjectAssociationsApiResponse,
      GetWorkflowSchemeProjectAssociationsApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/workflowscheme/project`,
        params: { projectId: queryArg.projectId },
      }),
    }),
    assignSchemeToProject: build.mutation<
      AssignSchemeToProjectApiResponse,
      AssignSchemeToProjectApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/workflowscheme/project`,
        method: "PUT",
        body: queryArg.workflowSchemeProjectAssociation,
      }),
    }),
    getWorkflowScheme: build.query<
      GetWorkflowSchemeApiResponse,
      GetWorkflowSchemeApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/workflowscheme/${queryArg.id}`,
        params: { returnDraftIfExists: queryArg.returnDraftIfExists },
      }),
    }),
    updateWorkflowScheme: build.mutation<
      UpdateWorkflowSchemeApiResponse,
      UpdateWorkflowSchemeApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/workflowscheme/${queryArg.id}`,
        method: "PUT",
        body: queryArg.workflowScheme,
      }),
    }),
    deleteWorkflowScheme: build.mutation<
      DeleteWorkflowSchemeApiResponse,
      DeleteWorkflowSchemeApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/workflowscheme/${queryArg.id}`,
        method: "DELETE",
      }),
    }),
    createWorkflowSchemeDraftFromParent: build.mutation<
      CreateWorkflowSchemeDraftFromParentApiResponse,
      CreateWorkflowSchemeDraftFromParentApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/workflowscheme/${queryArg.id}/createdraft`,
        method: "POST",
      }),
    }),
    getDefaultWorkflow: build.query<
      GetDefaultWorkflowApiResponse,
      GetDefaultWorkflowApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/workflowscheme/${queryArg.id}/default`,
        params: { returnDraftIfExists: queryArg.returnDraftIfExists },
      }),
    }),
    updateDefaultWorkflow: build.mutation<
      UpdateDefaultWorkflowApiResponse,
      UpdateDefaultWorkflowApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/workflowscheme/${queryArg.id}/default`,
        method: "PUT",
        body: queryArg.defaultWorkflow,
      }),
    }),
    deleteDefaultWorkflow: build.mutation<
      DeleteDefaultWorkflowApiResponse,
      DeleteDefaultWorkflowApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/workflowscheme/${queryArg.id}/default`,
        method: "DELETE",
        params: { updateDraftIfNeeded: queryArg.updateDraftIfNeeded },
      }),
    }),
    getWorkflowSchemeDraft: build.query<
      GetWorkflowSchemeDraftApiResponse,
      GetWorkflowSchemeDraftApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/workflowscheme/${queryArg.id}/draft`,
      }),
    }),
    updateWorkflowSchemeDraft: build.mutation<
      UpdateWorkflowSchemeDraftApiResponse,
      UpdateWorkflowSchemeDraftApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/workflowscheme/${queryArg.id}/draft`,
        method: "PUT",
        body: queryArg.workflowScheme,
      }),
    }),
    deleteWorkflowSchemeDraft: build.mutation<
      DeleteWorkflowSchemeDraftApiResponse,
      DeleteWorkflowSchemeDraftApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/workflowscheme/${queryArg.id}/draft`,
        method: "DELETE",
      }),
    }),
    getDraftDefaultWorkflow: build.query<
      GetDraftDefaultWorkflowApiResponse,
      GetDraftDefaultWorkflowApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/workflowscheme/${queryArg.id}/draft/default`,
      }),
    }),
    updateDraftDefaultWorkflow: build.mutation<
      UpdateDraftDefaultWorkflowApiResponse,
      UpdateDraftDefaultWorkflowApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/workflowscheme/${queryArg.id}/draft/default`,
        method: "PUT",
        body: queryArg.defaultWorkflow,
      }),
    }),
    deleteDraftDefaultWorkflow: build.mutation<
      DeleteDraftDefaultWorkflowApiResponse,
      DeleteDraftDefaultWorkflowApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/workflowscheme/${queryArg.id}/draft/default`,
        method: "DELETE",
      }),
    }),
    getWorkflowSchemeDraftIssueType: build.query<
      GetWorkflowSchemeDraftIssueTypeApiResponse,
      GetWorkflowSchemeDraftIssueTypeApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/workflowscheme/${queryArg.id}/draft/issuetype/${queryArg.issueType}`,
      }),
    }),
    setWorkflowSchemeDraftIssueType: build.mutation<
      SetWorkflowSchemeDraftIssueTypeApiResponse,
      SetWorkflowSchemeDraftIssueTypeApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/workflowscheme/${queryArg.id}/draft/issuetype/${queryArg.issueType}`,
        method: "PUT",
        body: queryArg.issueTypeWorkflowMapping,
      }),
    }),
    deleteWorkflowSchemeDraftIssueType: build.mutation<
      DeleteWorkflowSchemeDraftIssueTypeApiResponse,
      DeleteWorkflowSchemeDraftIssueTypeApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/workflowscheme/${queryArg.id}/draft/issuetype/${queryArg.issueType}`,
        method: "DELETE",
      }),
    }),
    publishDraftWorkflowScheme: build.mutation<
      PublishDraftWorkflowSchemeApiResponse,
      PublishDraftWorkflowSchemeApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/workflowscheme/${queryArg.id}/draft/publish`,
        method: "POST",
        body: queryArg.publishDraftWorkflowScheme,
        params: { validateOnly: queryArg.validateOnly },
      }),
    }),
    getDraftWorkflow: build.query<
      GetDraftWorkflowApiResponse,
      GetDraftWorkflowApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/workflowscheme/${queryArg.id}/draft/workflow`,
        params: { workflowName: queryArg.workflowName },
      }),
    }),
    updateDraftWorkflowMapping: build.mutation<
      UpdateDraftWorkflowMappingApiResponse,
      UpdateDraftWorkflowMappingApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/workflowscheme/${queryArg.id}/draft/workflow`,
        method: "PUT",
        body: queryArg.issueTypesWorkflowMapping,
        params: { workflowName: queryArg.workflowName },
      }),
    }),
    deleteDraftWorkflowMapping: build.mutation<
      DeleteDraftWorkflowMappingApiResponse,
      DeleteDraftWorkflowMappingApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/workflowscheme/${queryArg.id}/draft/workflow`,
        method: "DELETE",
        params: { workflowName: queryArg.workflowName },
      }),
    }),
    getWorkflowSchemeIssueType: build.query<
      GetWorkflowSchemeIssueTypeApiResponse,
      GetWorkflowSchemeIssueTypeApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/workflowscheme/${queryArg.id}/issuetype/${queryArg.issueType}`,
        params: { returnDraftIfExists: queryArg.returnDraftIfExists },
      }),
    }),
    setWorkflowSchemeIssueType: build.mutation<
      SetWorkflowSchemeIssueTypeApiResponse,
      SetWorkflowSchemeIssueTypeApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/workflowscheme/${queryArg.id}/issuetype/${queryArg.issueType}`,
        method: "PUT",
        body: queryArg.issueTypeWorkflowMapping,
      }),
    }),
    deleteWorkflowSchemeIssueType: build.mutation<
      DeleteWorkflowSchemeIssueTypeApiResponse,
      DeleteWorkflowSchemeIssueTypeApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/workflowscheme/${queryArg.id}/issuetype/${queryArg.issueType}`,
        method: "DELETE",
        params: { updateDraftIfNeeded: queryArg.updateDraftIfNeeded },
      }),
    }),
    getWorkflow: build.query<GetWorkflowApiResponse, GetWorkflowApiArg>({
      query: (queryArg) => ({
        url: `/rest/api/3/workflowscheme/${queryArg.id}/workflow`,
        params: {
          workflowName: queryArg.workflowName,
          returnDraftIfExists: queryArg.returnDraftIfExists,
        },
      }),
    }),
    updateWorkflowMapping: build.mutation<
      UpdateWorkflowMappingApiResponse,
      UpdateWorkflowMappingApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/workflowscheme/${queryArg.id}/workflow`,
        method: "PUT",
        body: queryArg.issueTypesWorkflowMapping,
        params: { workflowName: queryArg.workflowName },
      }),
    }),
    deleteWorkflowMapping: build.mutation<
      DeleteWorkflowMappingApiResponse,
      DeleteWorkflowMappingApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/workflowscheme/${queryArg.id}/workflow`,
        method: "DELETE",
        params: {
          workflowName: queryArg.workflowName,
          updateDraftIfNeeded: queryArg.updateDraftIfNeeded,
        },
      }),
    }),
    getIdsOfWorklogsDeletedSince: build.query<
      GetIdsOfWorklogsDeletedSinceApiResponse,
      GetIdsOfWorklogsDeletedSinceApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/worklog/deleted`,
        params: { since: queryArg.since },
      }),
    }),
    getWorklogsForIds: build.mutation<
      GetWorklogsForIdsApiResponse,
      GetWorklogsForIdsApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/worklog/list`,
        method: "POST",
        body: queryArg.worklogIdsRequestBean,
        params: { expand: queryArg.expand },
      }),
    }),
    getIdsOfWorklogsModifiedSince: build.query<
      GetIdsOfWorklogsModifiedSinceApiResponse,
      GetIdsOfWorklogsModifiedSinceApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/worklog/updated`,
        params: { since: queryArg.since, expand: queryArg.expand },
      }),
    }),
    getRestAtlassianConnect1AddonsByAddonKeyProperties: build.query<
      GetRestAtlassianConnect1AddonsByAddonKeyPropertiesApiResponse,
      GetRestAtlassianConnect1AddonsByAddonKeyPropertiesApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/atlassian-connect/1/addons/${queryArg.addonKey}/properties`,
      }),
    }),
    getRestAtlassianConnect1AddonsByAddonKeyPropertiesAndPropertyKey:
      build.query<
        GetRestAtlassianConnect1AddonsByAddonKeyPropertiesAndPropertyKeyApiResponse,
        GetRestAtlassianConnect1AddonsByAddonKeyPropertiesAndPropertyKeyApiArg
      >({
        query: (queryArg) => ({
          url: `/rest/atlassian-connect/1/addons/${queryArg.addonKey}/properties/${queryArg.propertyKey}`,
        }),
      }),
    putRestAtlassianConnect1AddonsByAddonKeyPropertiesAndPropertyKey:
      build.mutation<
        PutRestAtlassianConnect1AddonsByAddonKeyPropertiesAndPropertyKeyApiResponse,
        PutRestAtlassianConnect1AddonsByAddonKeyPropertiesAndPropertyKeyApiArg
      >({
        query: (queryArg) => ({
          url: `/rest/atlassian-connect/1/addons/${queryArg.addonKey}/properties/${queryArg.propertyKey}`,
          method: "PUT",
          body: queryArg.body,
        }),
      }),
    deleteRestAtlassianConnect1AddonsByAddonKeyPropertiesAndPropertyKey:
      build.mutation<
        DeleteRestAtlassianConnect1AddonsByAddonKeyPropertiesAndPropertyKeyApiResponse,
        DeleteRestAtlassianConnect1AddonsByAddonKeyPropertiesAndPropertyKeyApiArg
      >({
        query: (queryArg) => ({
          url: `/rest/atlassian-connect/1/addons/${queryArg.addonKey}/properties/${queryArg.propertyKey}`,
          method: "DELETE",
        }),
      }),
    getRestAtlassianConnect1AppModuleDynamic: build.query<
      GetRestAtlassianConnect1AppModuleDynamicApiResponse,
      GetRestAtlassianConnect1AppModuleDynamicApiArg
    >({
      query: () => ({ url: `/rest/atlassian-connect/1/app/module/dynamic` }),
    }),
    postRestAtlassianConnect1AppModuleDynamic: build.mutation<
      PostRestAtlassianConnect1AppModuleDynamicApiResponse,
      PostRestAtlassianConnect1AppModuleDynamicApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/atlassian-connect/1/app/module/dynamic`,
        method: "POST",
        body: queryArg.connectModules,
      }),
    }),
    deleteRestAtlassianConnect1AppModuleDynamic: build.mutation<
      DeleteRestAtlassianConnect1AppModuleDynamicApiResponse,
      DeleteRestAtlassianConnect1AppModuleDynamicApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/atlassian-connect/1/app/module/dynamic`,
        method: "DELETE",
        params: { moduleKey: queryArg.moduleKey },
      }),
    }),
    putRestAtlassianConnect1MigrationField: build.mutation<
      PutRestAtlassianConnect1MigrationFieldApiResponse,
      PutRestAtlassianConnect1MigrationFieldApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/atlassian-connect/1/migration/field`,
        method: "PUT",
        body: queryArg.connectCustomFieldValues,
        headers: { "Atlassian-Transfer-Id": queryArg["Atlassian-Transfer-Id"] },
      }),
    }),
    putRestAtlassianConnect1MigrationPropertiesByEntityType: build.mutation<
      PutRestAtlassianConnect1MigrationPropertiesByEntityTypeApiResponse,
      PutRestAtlassianConnect1MigrationPropertiesByEntityTypeApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/atlassian-connect/1/migration/properties/${queryArg.entityType}`,
        method: "PUT",
        body: queryArg.body,
        headers: { "Atlassian-Transfer-Id": queryArg["Atlassian-Transfer-Id"] },
      }),
    }),
    postRestAtlassianConnect1MigrationWorkflowRuleSearch: build.mutation<
      PostRestAtlassianConnect1MigrationWorkflowRuleSearchApiResponse,
      PostRestAtlassianConnect1MigrationWorkflowRuleSearchApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/atlassian-connect/1/migration/workflow/rule/search`,
        method: "POST",
        body: queryArg.workflowRulesSearch,
        headers: { "Atlassian-Transfer-Id": queryArg["Atlassian-Transfer-Id"] },
      }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as jira };
export type GetBannerApiResponse =
  /** status 200 Returned if the request is successful. */ AnnouncementBannerConfiguration;
export type GetBannerApiArg = void;
export type SetBannerApiResponse =
  /** status 204 Returned if the request is successful. */ any;
export type SetBannerApiArg = {
  announcementBannerConfigurationUpdate: AnnouncementBannerConfigurationUpdate;
};
export type UpdateMultipleCustomFieldValuesApiResponse =
  /** status 204 Returned if the request is successful. */ any;
export type UpdateMultipleCustomFieldValuesApiArg = {
  /** Whether to generate a changelog for this update. */
  generateChangelog?: boolean;
  multipleCustomFieldValuesUpdateDetails: MultipleCustomFieldValuesUpdateDetails;
};
export type GetCustomFieldConfigurationApiResponse =
  /** status 200 Returned if the request is successful. */ PageBeanContextualConfiguration;
export type GetCustomFieldConfigurationApiArg = {
  /** The ID or key of the custom field, for example `customfield_10000`. */
  fieldIdOrKey: string;
  /** The list of configuration IDs. To include multiple configurations, separate IDs with an ampersand: `id=10000&id=10001`. Can't be provided with `fieldContextId`, `issueId`, `projectKeyOrId`, or `issueTypeId`. */
  id?: number[];
  /** The list of field context IDs. To include multiple field contexts, separate IDs with an ampersand: `fieldContextId=10000&fieldContextId=10001`. Can't be provided with `id`, `issueId`, `projectKeyOrId`, or `issueTypeId`. */
  fieldContextId?: number[];
  /** The ID of the issue to filter results by. If the issue doesn't exist, an empty list is returned. Can't be provided with `projectKeyOrId`, or `issueTypeId`. */
  issueId?: number;
  /** The ID or key of the project to filter results by. Must be provided with `issueTypeId`. Can't be provided with `issueId`. */
  projectKeyOrId?: string;
  /** The ID of the issue type to filter results by. Must be provided with `projectKeyOrId`. Can't be provided with `issueId`. */
  issueTypeId?: string;
  /** The index of the first item to return in a page of results (page offset). */
  startAt?: number;
  /** The maximum number of items to return per page. */
  maxResults?: number;
};
export type UpdateCustomFieldConfigurationApiResponse =
  /** status 200 Returned if the request is successful. */ any;
export type UpdateCustomFieldConfigurationApiArg = {
  /** The ID or key of the custom field, for example `customfield_10000`. */
  fieldIdOrKey: string;
  customFieldConfigurations: CustomFieldConfigurations;
};
export type UpdateCustomFieldValueApiResponse =
  /** status 204 Returned if the request is successful. */ any;
export type UpdateCustomFieldValueApiArg = {
  /** The ID or key of the custom field. For example, `customfield_10010`. */
  fieldIdOrKey: string;
  /** Whether to generate a changelog for this update. */
  generateChangelog?: boolean;
  customFieldValueUpdateDetails: CustomFieldValueUpdateDetails;
};
export type GetApplicationPropertyApiResponse =
  /** status 200 Returned if the request is successful. */ ApplicationProperty[];
export type GetApplicationPropertyApiArg = {
  /** The key of the application property. */
  key?: string;
  /** The permission level of all items being returned in the list. */
  permissionLevel?: string;
  /** When a `key` isn't provided, this filters the list of results by the application property `key` using a regular expression. For example, using `jira.lf.*` will return all application properties with keys that start with *jira.lf.*. */
  keyFilter?: string;
};
export type GetAdvancedSettingsApiResponse =
  /** status 200 Returned if the request is successful. */ ApplicationProperty[];
export type GetAdvancedSettingsApiArg = void;
export type SetApplicationPropertyApiResponse =
  /** status 200 Returned if the request is successful. */ ApplicationProperty;
export type SetApplicationPropertyApiArg = {
  /** The key of the application property to update. */
  id: string;
  simpleApplicationPropertyBean: SimpleApplicationPropertyBean;
};
export type GetAllApplicationRolesApiResponse =
  /** status 200 Returned if the request is successful. */ ApplicationRole[];
export type GetAllApplicationRolesApiArg = void;
export type GetApplicationRoleApiResponse =
  /** status 200 Returned if the request is successful. */ ApplicationRole;
export type GetApplicationRoleApiArg = {
  /** The key of the application role. Use the [Get all application roles](#api-rest-api-3-applicationrole-get) operation to get the key for each application role. */
  key: string;
};
export type GetAttachmentContentApiResponse =
  /** status 200 Returned if the request is successful when `redirect` is set to `false`. */
    | object
    | /** status 206 Returned if the request is successful when a `Range` header is provided and `redirect` is set to `false`. */ undefined;
export type GetAttachmentContentApiArg = {
  /** The ID of the attachment. */
  id: string;
  /** Whether a redirect is provided for the attachment download. Clients that do not automatically follow redirects can set this to `false` to avoid making multiple requests to download the attachment. */
  redirect?: boolean;
};
export type GetAttachmentMetaApiResponse =
  /** status 200 Returned if the request is successful. */ AttachmentSettings;
export type GetAttachmentMetaApiArg = void;
export type GetAttachmentThumbnailApiResponse =
  /** status 200 Returned if the request is successful when `redirect` is set to `false`. */ object;
export type GetAttachmentThumbnailApiArg = {
  /** The ID of the attachment. */
  id: string;
  /** Whether a redirect is provided for the attachment download. Clients that do not automatically follow redirects can set this to `false` to avoid making multiple requests to download the attachment. */
  redirect?: boolean;
  /** Whether a default thumbnail is returned when the requested thumbnail is not found. */
  fallbackToDefault?: boolean;
  /** The maximum width to scale the thumbnail to. */
  width?: number;
  /** The maximum height to scale the thumbnail to. */
  height?: number;
};
export type GetAttachmentApiResponse =
  /** status 200 Returned if the request is successful. */ AttachmentMetadata;
export type GetAttachmentApiArg = {
  /** The ID of the attachment. */
  id: string;
};
export type RemoveAttachmentApiResponse = unknown;
export type RemoveAttachmentApiArg = {
  /** The ID of the attachment. */
  id: string;
};
export type ExpandAttachmentForHumansApiResponse =
  /** status 200 Returned if the request is successful. If an empty list is returned in the response, the attachment is empty, corrupt, or not an archive. */ AttachmentArchiveMetadataReadable;
export type ExpandAttachmentForHumansApiArg = {
  /** The ID of the attachment. */
  id: string;
};
export type ExpandAttachmentForMachinesApiResponse =
  /** status 200 Returned if the request is successful. If an empty list is returned in the response, the attachment is empty, corrupt, or not an archive. */ AttachmentArchiveImpl;
export type ExpandAttachmentForMachinesApiArg = {
  /** The ID of the attachment. */
  id: string;
};
export type GetAuditRecordsApiResponse =
  /** status 200 Returned if the request is successful. */ AuditRecords;
export type GetAuditRecordsApiArg = {
  /** The number of records to skip before returning the first result. */
  offset?: number;
  /** The maximum number of results to return. */
  limit?: number;
  /** The strings to match with audit field content, space separated. */
  filter?: string;
  /** The date and time on or after which returned audit records must have been created. If `to` is provided `from` must be before `to` or no audit records are returned. */
  from?: string;
  /** The date and time on or before which returned audit results must have been created. If `from` is provided `to` must be after `from` or no audit records are returned. */
  to?: string;
};
export type GetAllSystemAvatarsApiResponse =
  /** status 200 Returned if the request is successful. */ SystemAvatars;
export type GetAllSystemAvatarsApiArg = {
  /** The avatar type. */
  type: "issuetype" | "project" | "user";
};
export type GetCommentsByIdsApiResponse =
  /** status 200 Returned if the request is successful. */ PageBeanComment;
export type GetCommentsByIdsApiArg = {
  /** Use [expand](#expansion) to include additional information about comments in the response. This parameter accepts a comma-separated list. Expand options include:
    
     *  `renderedBody` Returns the comment body rendered in HTML.
     *  `properties` Returns the comment's properties. */
  expand?: string;
  /** The list of comment IDs. */
  issueCommentListRequestBean: IssueCommentListRequestBean;
};
export type GetCommentPropertyKeysApiResponse =
  /** status 200 Returned if the request is successful. */ PropertyKeys;
export type GetCommentPropertyKeysApiArg = {
  /** The ID of the comment. */
  commentId: string;
};
export type GetCommentPropertyApiResponse =
  /** status 200 Returned if the request is successful. */ EntityProperty;
export type GetCommentPropertyApiArg = {
  /** The ID of the comment. */
  commentId: string;
  /** The key of the property. */
  propertyKey: string;
};
export type SetCommentPropertyApiResponse =
  /** status 200 Returned if the comment property is updated. */
    | any
    | /** status 201 Returned if the comment property is created. */ any;
export type SetCommentPropertyApiArg = {
  /** The ID of the comment. */
  commentId: string;
  /** The key of the property. The maximum length is 255 characters. */
  propertyKey: string;
  body: any;
};
export type DeleteCommentPropertyApiResponse = unknown;
export type DeleteCommentPropertyApiArg = {
  /** The ID of the comment. */
  commentId: string;
  /** The key of the property. */
  propertyKey: string;
};
export type CreateComponentApiResponse =
  /** status 201 Returned if the request is successful. */ ProjectComponent;
export type CreateComponentApiArg = {
  projectComponent: ProjectComponent;
};
export type GetComponentApiResponse =
  /** status 200 Returned if the request is successful. */ ProjectComponent;
export type GetComponentApiArg = {
  /** The ID of the component. */
  id: string;
};
export type UpdateComponentApiResponse =
  /** status 200 Returned if the request is successful. */ ProjectComponent;
export type UpdateComponentApiArg = {
  /** The ID of the component. */
  id: string;
  projectComponent: ProjectComponent;
};
export type DeleteComponentApiResponse = unknown;
export type DeleteComponentApiArg = {
  /** The ID of the component. */
  id: string;
  /** The ID of the component to replace the deleted component. If this value is null no replacement is made. */
  moveIssuesTo?: string;
};
export type GetComponentRelatedIssuesApiResponse =
  /** status 200 Returned if the request is successful. */ ComponentIssuesCount;
export type GetComponentRelatedIssuesApiArg = {
  /** The ID of the component. */
  id: string;
};
export type GetConfigurationApiResponse =
  /** status 200 Returned if the request is successful. */ Configuration;
export type GetConfigurationApiArg = void;
export type GetSelectedTimeTrackingImplementationApiResponse =
  /** status 200 Returned if the request is successful and time tracking is enabled. */
    | TimeTrackingProvider
    | /** status 204 Returned if the request is successful but time tracking is disabled. */ any;
export type GetSelectedTimeTrackingImplementationApiArg = void;
export type SelectTimeTrackingImplementationApiResponse =
  /** status 204 Returned if the request is successful. */ any;
export type SelectTimeTrackingImplementationApiArg = {
  timeTrackingProvider: TimeTrackingProvider;
};
export type GetAvailableTimeTrackingImplementationsApiResponse =
  /** status 200 Returned if the request is successful. */ TimeTrackingProvider[];
export type GetAvailableTimeTrackingImplementationsApiArg = void;
export type GetSharedTimeTrackingConfigurationApiResponse =
  /** status 200 Returned if the request is successful. */ TimeTrackingConfiguration;
export type GetSharedTimeTrackingConfigurationApiArg = void;
export type SetSharedTimeTrackingConfigurationApiResponse =
  /** status 200 Returned if the request is successful. */ TimeTrackingConfiguration;
export type SetSharedTimeTrackingConfigurationApiArg = {
  timeTrackingConfiguration: TimeTrackingConfiguration;
};
export type GetCustomFieldOptionApiResponse =
  /** status 200 Returned if the request is successful. */ CustomFieldOption;
export type GetCustomFieldOptionApiArg = {
  /** The ID of the custom field option. */
  id: string;
};
export type GetAllDashboardsApiResponse =
  /** status 200 Returned if the request is successful. */ PageOfDashboards;
export type GetAllDashboardsApiArg = {
  /** The filter applied to the list of dashboards. Valid values are:
    
     *  `favourite` Returns dashboards the user has marked as favorite.
     *  `my` Returns dashboards owned by the user. */
  filter?: "my" | "favourite";
  /** The index of the first item to return in a page of results (page offset). */
  startAt?: number;
  /** The maximum number of items to return per page. */
  maxResults?: number;
};
export type CreateDashboardApiResponse =
  /** status 200 Returned if the request is successful. */ Dashboard;
export type CreateDashboardApiArg = {
  /** Dashboard details. */
  dashboardDetails: DashboardDetails;
};
export type GetAllAvailableDashboardGadgetsApiResponse =
  /** status 200 Returned if the request is successful. */ AvailableDashboardGadgetsResponse;
export type GetAllAvailableDashboardGadgetsApiArg = void;
export type GetDashboardsPaginatedApiResponse =
  /** status 200 Returned if the request is successful. */ PageBeanDashboard;
export type GetDashboardsPaginatedApiArg = {
  /** String used to perform a case-insensitive partial match with `name`. */
  dashboardName?: string;
  /** User account ID used to return dashboards with the matching `owner.accountId`. This parameter cannot be used with the `owner` parameter. */
  accountId?: string;
  /** This parameter is deprecated because of privacy changes. Use `accountId` instead. See the [migration guide](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. User name used to return dashboards with the matching `owner.name`. This parameter cannot be used with the `accountId` parameter. */
  owner?: string;
  /** As a group's name can change, use of `groupId` is recommended. Group name used to return dashboards that are shared with a group that matches `sharePermissions.group.name`. This parameter cannot be used with the `groupId` parameter. */
  groupname?: string;
  /** Group ID used to return dashboards that are shared with a group that matches `sharePermissions.group.groupId`. This parameter cannot be used with the `groupname` parameter. */
  groupId?: string;
  /** Project ID used to returns dashboards that are shared with a project that matches `sharePermissions.project.id`. */
  projectId?: number;
  /** [Order](#ordering) the results by a field:
    
     *  `description` Sorts by dashboard description. Note that this sort works independently of whether the expand to display the description field is in use.
     *  `favourite_count` Sorts by dashboard popularity.
     *  `id` Sorts by dashboard ID.
     *  `is_favourite` Sorts by whether the dashboard is marked as a favorite.
     *  `name` Sorts by dashboard name.
     *  `owner` Sorts by dashboard owner name. */
  orderBy?:
    | "description"
    | "-description"
    | "+description"
    | "favorite_count"
    | "-favorite_count"
    | "+favorite_count"
    | "id"
    | "-id"
    | "+id"
    | "is_favorite"
    | "-is_favorite"
    | "+is_favorite"
    | "name"
    | "-name"
    | "+name"
    | "owner"
    | "-owner"
    | "+owner";
  /** The index of the first item to return in a page of results (page offset). */
  startAt?: number;
  /** The maximum number of items to return per page. */
  maxResults?: number;
  /** The status to filter by. It may be active, archived or deleted. */
  status?: "active" | "archived" | "deleted";
  /** Use [expand](#expansion) to include additional information about dashboard in the response. This parameter accepts a comma-separated list. Expand options include:
    
     *  `description` Returns the description of the dashboard.
     *  `owner` Returns the owner of the dashboard.
     *  `viewUrl` Returns the URL that is used to view the dashboard.
     *  `favourite` Returns `isFavourite`, an indicator of whether the user has set the dashboard as a favorite.
     *  `favouritedCount` Returns `popularity`, a count of how many users have set this dashboard as a favorite.
     *  `sharePermissions` Returns details of the share permissions defined for the dashboard.
     *  `editPermissions` Returns details of the edit permissions defined for the dashboard.
     *  `isWritable` Returns whether the current user has permission to edit the dashboard. */
  expand?: string;
};
export type GetAllGadgetsApiResponse =
  /** status 200 Returned if the request is successful. */ DashboardGadgetResponse;
export type GetAllGadgetsApiArg = {
  /** The ID of the dashboard. */
  dashboardId: number;
  /** The list of gadgets module keys. To include multiple module keys, separate module keys with ampersand: `moduleKey=key:one&moduleKey=key:two`. */
  moduleKey?: string[];
  /** The list of gadgets URIs. To include multiple URIs, separate URIs with ampersand: `uri=/rest/example/uri/1&uri=/rest/example/uri/2`. */
  uri?: string[];
  /** The list of gadgets IDs. To include multiple IDs, separate IDs with ampersand: `gadgetId=10000&gadgetId=10001`. */
  gadgetId?: number[];
};
export type AddGadgetApiResponse =
  /** status 200 Returned if the request is successful. */ DashboardGadget;
export type AddGadgetApiArg = {
  /** The ID of the dashboard. */
  dashboardId: number;
  dashboardGadgetSettings: DashboardGadgetSettings;
};
export type UpdateGadgetApiResponse =
  /** status 204 Returned if the request is successful. */ any;
export type UpdateGadgetApiArg = {
  /** The ID of the dashboard. */
  dashboardId: number;
  /** The ID of the gadget. */
  gadgetId: number;
  dashboardGadgetUpdateRequest: DashboardGadgetUpdateRequest;
};
export type RemoveGadgetApiResponse =
  /** status 204 Returned if the request is successful. */ any;
export type RemoveGadgetApiArg = {
  /** The ID of the dashboard. */
  dashboardId: number;
  /** The ID of the gadget. */
  gadgetId: number;
};
export type GetDashboardItemPropertyKeysApiResponse =
  /** status 200 Returned if the request is successful. */ PropertyKeys;
export type GetDashboardItemPropertyKeysApiArg = {
  /** The ID of the dashboard. */
  dashboardId: string;
  /** The ID of the dashboard item. */
  itemId: string;
};
export type GetDashboardItemPropertyApiResponse =
  /** status 200 Returned if the request is successful. */ EntityProperty;
export type GetDashboardItemPropertyApiArg = {
  /** The ID of the dashboard. */
  dashboardId: string;
  /** The ID of the dashboard item. */
  itemId: string;
  /** The key of the dashboard item property. */
  propertyKey: string;
};
export type SetDashboardItemPropertyApiResponse =
  /** status 200 Returned if the dashboard item property is updated. */
    | any
    | /** status 201 Returned if the dashboard item property is created. */ any;
export type SetDashboardItemPropertyApiArg = {
  /** The ID of the dashboard. */
  dashboardId: string;
  /** The ID of the dashboard item. */
  itemId: string;
  /** The key of the dashboard item property. The maximum length is 255 characters. For dashboard items with a spec URI and no complete module key, if the provided propertyKey is equal to "config", the request body's JSON must be an object with all keys and values as strings. */
  propertyKey: string;
  body: any;
};
export type DeleteDashboardItemPropertyApiResponse = unknown;
export type DeleteDashboardItemPropertyApiArg = {
  /** The ID of the dashboard. */
  dashboardId: string;
  /** The ID of the dashboard item. */
  itemId: string;
  /** The key of the dashboard item property. */
  propertyKey: string;
};
export type GetDashboardApiResponse =
  /** status 200 Returned if the request is successful. */ Dashboard;
export type GetDashboardApiArg = {
  /** The ID of the dashboard. */
  id: string;
};
export type UpdateDashboardApiResponse =
  /** status 200 Returned if the request is successful. */ Dashboard;
export type UpdateDashboardApiArg = {
  /** The ID of the dashboard to update. */
  id: string;
  /** Replacement dashboard details. */
  dashboardDetails: DashboardDetails;
};
export type DeleteDashboardApiResponse =
  /** status 204 Returned if the dashboard is deleted. */ undefined;
export type DeleteDashboardApiArg = {
  /** The ID of the dashboard. */
  id: string;
};
export type CopyDashboardApiResponse =
  /** status 200 Returned if the request is successful. */ Dashboard;
export type CopyDashboardApiArg = {
  id: string;
  /** Dashboard details. */
  dashboardDetails: DashboardDetails;
};
export type GetEventsApiResponse =
  /** status 200 Returned if the request is successful. */ IssueEvent[];
export type GetEventsApiArg = void;
export type AnalyseExpressionApiResponse =
  /** status 200 Returned if the request is successful. */ JiraExpressionsAnalysis;
export type AnalyseExpressionApiArg = {
  /** The check to perform:
    
     *  `syntax` Each expression's syntax is checked to ensure the expression can be parsed. Also, syntactic limits are validated. For example, the expression's length.
     *  `type` EXPERIMENTAL. Each expression is type checked and the final type of the expression inferred. Any type errors that would result in the expression failure at runtime are reported. For example, accessing properties that don't exist or passing the wrong number of arguments to functions. Also performs the syntax check.
     *  `complexity` EXPERIMENTAL. Determines the formulae for how many [expensive operations](https://developer.atlassian.com/cloud/jira/platform/jira-expressions/#expensive-operations) each expression may execute. */
  check?: "syntax" | "type" | "complexity";
  /** The Jira expressions to analyse. */
  jiraExpressionForAnalysis: JiraExpressionForAnalysis;
};
export type EvaluateJiraExpressionApiResponse =
  /** status 200 Returned if the evaluation results in a value. The result is a JSON primitive value, list, or object. */ JiraExpressionResult;
export type EvaluateJiraExpressionApiArg = {
  /** Use [expand](#expansion) to include additional information in the response. This parameter accepts `meta.complexity` that returns information about the expression complexity. For example, the number of expensive operations used by the expression and how close the expression is to reaching the [complexity limit](https://developer.atlassian.com/cloud/jira/platform/jira-expressions/#restrictions). Useful when designing and debugging your expressions. */
  expand?: string;
  /** The Jira expression and the evaluation context. */
  jiraExpressionEvalRequestBean: JiraExpressionEvalRequestBean;
};
export type GetFieldsApiResponse =
  /** status 200 Returned if the request is successful. */ FieldDetails[];
export type GetFieldsApiArg = void;
export type CreateCustomFieldApiResponse =
  /** status 201 Returned if the custom field is created. */ FieldDetails;
export type CreateCustomFieldApiArg = {
  /** Definition of the custom field to be created */
  customFieldDefinitionJsonBean: CustomFieldDefinitionJsonBean;
};
export type GetFieldsPaginatedApiResponse =
  /** status 200 Returned if the request is successful. */ PageBeanField;
export type GetFieldsPaginatedApiArg = {
  /** The index of the first item to return in a page of results (page offset). */
  startAt?: number;
  /** The maximum number of items to return per page. */
  maxResults?: number;
  /** The type of fields to search. */
  type?: ("custom" | "system")[];
  /** The IDs of the custom fields to return or, where `query` is specified, filter. */
  id?: string[];
  /** String used to perform a case-insensitive partial match with field names or descriptions. */
  query?: string;
  /** [Order](#ordering) the results by a field:
    
     *  `contextsCount` sorts by the number of contexts related to a field
     *  `lastUsed` sorts by the date when the value of the field last changed
     *  `name` sorts by the field name
     *  `screensCount` sorts by the number of screens related to a field */
  orderBy?:
    | "contextsCount"
    | "-contextsCount"
    | "+contextsCount"
    | "lastUsed"
    | "-lastUsed"
    | "+lastUsed"
    | "name"
    | "-name"
    | "+name"
    | "screensCount"
    | "-screensCount"
    | "+screensCount";
  /** Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Expand options include:
    
     *  `key` returns the key for each field
     *  `lastUsed` returns the date when the value of the field last changed
     *  `screensCount` returns the number of screens related to a field
     *  `contextsCount` returns the number of contexts related to a field
     *  `isLocked` returns information about whether the field is [locked](https://confluence.atlassian.com/x/ZSN7Og)
     *  `searcherKey` returns the searcher key for each custom field */
  expand?: string;
};
export type GetTrashedFieldsPaginatedApiResponse =
  /** status 200 Returned if the request is successful. */ PageBeanField;
export type GetTrashedFieldsPaginatedApiArg = {
  /** The index of the first item to return in a page of results (page offset). */
  startAt?: number;
  /** The maximum number of items to return per page. */
  maxResults?: number;
  id?: string[];
  /** String used to perform a case-insensitive partial match with field names or descriptions. */
  query?: string;
  /** [Order](#ordering) the results by a field:
    
     *  `name` sorts by the field name
     *  `trashDate` sorts by the date the field was moved to the trash
     *  `plannedDeletionDate` sorts by the planned deletion date */
  orderBy?:
    | "name"
    | "-name"
    | "+name"
    | "trashDate"
    | "-trashDate"
    | "+trashDate"
    | "plannedDeletionDate"
    | "-plannedDeletionDate"
    | "+plannedDeletionDate";
};
export type UpdateCustomFieldApiResponse =
  /** status 204 Returned if the request is successful. */ any;
export type UpdateCustomFieldApiArg = {
  /** The ID of the custom field. */
  fieldId: string;
  /** The custom field update details. */
  updateCustomFieldDetails: UpdateCustomFieldDetails;
};
export type GetContextsForFieldApiResponse =
  /** status 200 Returned if the request is successful. */ PageBeanCustomFieldContext;
export type GetContextsForFieldApiArg = {
  /** The ID of the custom field. */
  fieldId: string;
  /** Whether to return contexts that apply to all issue types. */
  isAnyIssueType?: boolean;
  /** Whether to return contexts that apply to all projects. */
  isGlobalContext?: boolean;
  /** The list of context IDs. To include multiple contexts, separate IDs with ampersand: `contextId=10000&contextId=10001`. */
  contextId?: number[];
  /** The index of the first item to return in a page of results (page offset). */
  startAt?: number;
  /** The maximum number of items to return per page. */
  maxResults?: number;
};
export type CreateCustomFieldContextApiResponse =
  /** status 201 Returned if the custom field context is created. */ CreateCustomFieldContext;
export type CreateCustomFieldContextApiArg = {
  /** The ID of the custom field. */
  fieldId: string;
  createCustomFieldContext: CreateCustomFieldContext;
};
export type GetDefaultValuesApiResponse =
  /** status 200 Returned if the request is successful. */ PageBeanCustomFieldContextDefaultValue;
export type GetDefaultValuesApiArg = {
  /** The ID of the custom field, for example `customfield\_10000`. */
  fieldId: string;
  /** The IDs of the contexts. */
  contextId?: number[];
  /** The index of the first item to return in a page of results (page offset). */
  startAt?: number;
  /** The maximum number of items to return per page. */
  maxResults?: number;
};
export type SetDefaultValuesApiResponse =
  /** status 204 Returned if operation is successful. */ any;
export type SetDefaultValuesApiArg = {
  /** The ID of the custom field. */
  fieldId: string;
  customFieldContextDefaultValueUpdate: CustomFieldContextDefaultValueUpdate;
};
export type GetIssueTypeMappingsForContextsApiResponse =
  /** status 200 Returned if operation is successful. */ PageBeanIssueTypeToContextMapping;
export type GetIssueTypeMappingsForContextsApiArg = {
  /** The ID of the custom field. */
  fieldId: string;
  /** The ID of the context. To include multiple contexts, provide an ampersand-separated list. For example, `contextId=10001&contextId=10002`. */
  contextId?: number[];
  /** The index of the first item to return in a page of results (page offset). */
  startAt?: number;
  /** The maximum number of items to return per page. */
  maxResults?: number;
};
export type GetCustomFieldContextsForProjectsAndIssueTypesApiResponse =
  /** status 200 Returned if the request is successful. */ PageBeanContextForProjectAndIssueType;
export type GetCustomFieldContextsForProjectsAndIssueTypesApiArg = {
  /** The ID of the custom field. */
  fieldId: string;
  /** The index of the first item to return in a page of results (page offset). */
  startAt?: number;
  /** The maximum number of items to return per page. */
  maxResults?: number;
  /** The list of project and issue type mappings. */
  projectIssueTypeMappings: ProjectIssueTypeMappings;
};
export type GetProjectContextMappingApiResponse =
  /** status 200 Returned if the request is successful. */ PageBeanCustomFieldContextProjectMapping;
export type GetProjectContextMappingApiArg = {
  /** The ID of the custom field, for example `customfield\_10000`. */
  fieldId: string;
  /** The list of context IDs. To include multiple context, separate IDs with ampersand: `contextId=10000&contextId=10001`. */
  contextId?: number[];
  /** The index of the first item to return in a page of results (page offset). */
  startAt?: number;
  /** The maximum number of items to return per page. */
  maxResults?: number;
};
export type UpdateCustomFieldContextApiResponse =
  /** status 204 Returned if the context is updated. */ any;
export type UpdateCustomFieldContextApiArg = {
  /** The ID of the custom field. */
  fieldId: string;
  /** The ID of the context. */
  contextId: number;
  customFieldContextUpdateDetails: CustomFieldContextUpdateDetails;
};
export type DeleteCustomFieldContextApiResponse =
  /** status 204 Returned if the context is deleted. */ any;
export type DeleteCustomFieldContextApiArg = {
  /** The ID of the custom field. */
  fieldId: string;
  /** The ID of the context. */
  contextId: number;
};
export type AddIssueTypesToContextApiResponse =
  /** status 204 Returned if operation is successful. */ any;
export type AddIssueTypesToContextApiArg = {
  /** The ID of the custom field. */
  fieldId: string;
  /** The ID of the context. */
  contextId: number;
  issueTypeIds: IssueTypeIds;
};
export type RemoveIssueTypesFromContextApiResponse =
  /** status 204 Returned if operation is successful. */ any;
export type RemoveIssueTypesFromContextApiArg = {
  /** The ID of the custom field. */
  fieldId: string;
  /** The ID of the context. */
  contextId: number;
  issueTypeIds: IssueTypeIds;
};
export type GetOptionsForContextApiResponse =
  /** status 200 Returned if the request is successful. */ PageBeanCustomFieldContextOption;
export type GetOptionsForContextApiArg = {
  /** The ID of the custom field. */
  fieldId: string;
  /** The ID of the context. */
  contextId: number;
  /** The ID of the option. */
  optionId?: number;
  /** Whether only options are returned. */
  onlyOptions?: boolean;
  /** The index of the first item to return in a page of results (page offset). */
  startAt?: number;
  /** The maximum number of items to return per page. */
  maxResults?: number;
};
export type UpdateCustomFieldOptionApiResponse =
  /** status 200 Returned if the request is successful. */ CustomFieldUpdatedContextOptionsList;
export type UpdateCustomFieldOptionApiArg = {
  /** The ID of the custom field. */
  fieldId: string;
  /** The ID of the context. */
  contextId: number;
  bulkCustomFieldOptionUpdateRequest: BulkCustomFieldOptionUpdateRequest;
};
export type CreateCustomFieldOptionApiResponse =
  /** status 200 Returned if the request is successful. */ CustomFieldCreatedContextOptionsList;
export type CreateCustomFieldOptionApiArg = {
  /** The ID of the custom field. */
  fieldId: string;
  /** The ID of the context. */
  contextId: number;
  bulkCustomFieldOptionCreateRequest: BulkCustomFieldOptionCreateRequest;
};
export type ReorderCustomFieldOptionsApiResponse =
  /** status 204 Returned if options are reordered. */ any;
export type ReorderCustomFieldOptionsApiArg = {
  /** The ID of the custom field. */
  fieldId: string;
  /** The ID of the context. */
  contextId: number;
  orderOfCustomFieldOptions: OrderOfCustomFieldOptions;
};
export type DeleteCustomFieldOptionApiResponse =
  /** status 204 Returned if the option is deleted. */ undefined;
export type DeleteCustomFieldOptionApiArg = {
  /** The ID of the custom field. */
  fieldId: string;
  /** The ID of the context from which an option should be deleted. */
  contextId: number;
  /** The ID of the option to delete. */
  optionId: number;
};
export type AssignProjectsToCustomFieldContextApiResponse =
  /** status 204 Returned if operation is successful. */ any;
export type AssignProjectsToCustomFieldContextApiArg = {
  /** The ID of the custom field. */
  fieldId: string;
  /** The ID of the context. */
  contextId: number;
  projectIds: ProjectIds;
};
export type RemoveCustomFieldContextFromProjectsApiResponse =
  /** status 204 Returned if the custom field context is removed from the projects. */ any;
export type RemoveCustomFieldContextFromProjectsApiArg = {
  /** The ID of the custom field. */
  fieldId: string;
  /** The ID of the context. */
  contextId: number;
  projectIds: ProjectIds;
};
export type GetContextsForFieldDeprecatedApiResponse =
  /** status 200 Returned if the request is successful. */ PageBeanContext;
export type GetContextsForFieldDeprecatedApiArg = {
  /** The ID of the field to return contexts for. */
  fieldId: string;
  /** The index of the first item to return in a page of results (page offset). */
  startAt?: number;
  /** The maximum number of items to return per page. */
  maxResults?: number;
};
export type GetScreensForFieldApiResponse =
  /** status 200 Returned if the request is successful. */ PageBeanScreenWithTab;
export type GetScreensForFieldApiArg = {
  /** The ID of the field to return screens for. */
  fieldId: string;
  /** The index of the first item to return in a page of results (page offset). */
  startAt?: number;
  /** The maximum number of items to return per page. */
  maxResults?: number;
  /** Use [expand](#expansion) to include additional information about screens in the response. This parameter accepts `tab` which returns details about the screen tabs the field is used in. */
  expand?: string;
};
export type GetAllIssueFieldOptionsApiResponse =
  /** status 200 Returned if the request is successful. */ PageBeanIssueFieldOption;
export type GetAllIssueFieldOptionsApiArg = {
  /** The index of the first item to return in a page of results (page offset). */
  startAt?: number;
  /** The maximum number of items to return per page. */
  maxResults?: number;
  /** The field key is specified in the following format: **$(app-key)\_\_$(field-key)**. For example, *example-add-on\_\_example-issue-field*. To determine the `fieldKey` value, do one of the following:
    
     *  open the app's plugin descriptor, then **app-key** is the key at the top and **field-key** is the key in the `jiraIssueFields` module. **app-key** can also be found in the app listing in the Atlassian Universal Plugin Manager.
     *  run [Get fields](#api-rest-api-3-field-get) and in the field details the value is returned in `key`. For example, `"key": "teams-add-on__team-issue-field"` */
  fieldKey: string;
};
export type CreateIssueFieldOptionApiResponse =
  /** status 200 Returned if the request is successful. */ IssueFieldOption;
export type CreateIssueFieldOptionApiArg = {
  /** The field key is specified in the following format: **$(app-key)\_\_$(field-key)**. For example, *example-add-on\_\_example-issue-field*. To determine the `fieldKey` value, do one of the following:
    
     *  open the app's plugin descriptor, then **app-key** is the key at the top and **field-key** is the key in the `jiraIssueFields` module. **app-key** can also be found in the app listing in the Atlassian Universal Plugin Manager.
     *  run [Get fields](#api-rest-api-3-field-get) and in the field details the value is returned in `key`. For example, `"key": "teams-add-on__team-issue-field"` */
  fieldKey: string;
  issueFieldOptionCreateBean: IssueFieldOptionCreateBean;
};
export type GetSelectableIssueFieldOptionsApiResponse =
  /** status 200 Returned if the request is successful. */ PageBeanIssueFieldOption;
export type GetSelectableIssueFieldOptionsApiArg = {
  /** The index of the first item to return in a page of results (page offset). */
  startAt?: number;
  /** The maximum number of items to return per page. */
  maxResults?: number;
  /** Filters the results to options that are only available in the specified project. */
  projectId?: number;
  /** The field key is specified in the following format: **$(app-key)\_\_$(field-key)**. For example, *example-add-on\_\_example-issue-field*. To determine the `fieldKey` value, do one of the following:
    
     *  open the app's plugin descriptor, then **app-key** is the key at the top and **field-key** is the key in the `jiraIssueFields` module. **app-key** can also be found in the app listing in the Atlassian Universal Plugin Manager.
     *  run [Get fields](#api-rest-api-3-field-get) and in the field details the value is returned in `key`. For example, `"key": "teams-add-on__team-issue-field"` */
  fieldKey: string;
};
export type GetVisibleIssueFieldOptionsApiResponse =
  /** status 200 Returned if the request is successful. */ PageBeanIssueFieldOption;
export type GetVisibleIssueFieldOptionsApiArg = {
  /** The index of the first item to return in a page of results (page offset). */
  startAt?: number;
  /** The maximum number of items to return per page. */
  maxResults?: number;
  /** Filters the results to options that are only available in the specified project. */
  projectId?: number;
  /** The field key is specified in the following format: **$(app-key)\_\_$(field-key)**. For example, *example-add-on\_\_example-issue-field*. To determine the `fieldKey` value, do one of the following:
    
     *  open the app's plugin descriptor, then **app-key** is the key at the top and **field-key** is the key in the `jiraIssueFields` module. **app-key** can also be found in the app listing in the Atlassian Universal Plugin Manager.
     *  run [Get fields](#api-rest-api-3-field-get) and in the field details the value is returned in `key`. For example, `"key": "teams-add-on__team-issue-field"` */
  fieldKey: string;
};
export type GetIssueFieldOptionApiResponse =
  /** status 200 Returned if the requested option is returned. */ IssueFieldOption;
export type GetIssueFieldOptionApiArg = {
  /** The field key is specified in the following format: **$(app-key)\_\_$(field-key)**. For example, *example-add-on\_\_example-issue-field*. To determine the `fieldKey` value, do one of the following:
    
     *  open the app's plugin descriptor, then **app-key** is the key at the top and **field-key** is the key in the `jiraIssueFields` module. **app-key** can also be found in the app listing in the Atlassian Universal Plugin Manager.
     *  run [Get fields](#api-rest-api-3-field-get) and in the field details the value is returned in `key`. For example, `"key": "teams-add-on__team-issue-field"` */
  fieldKey: string;
  /** The ID of the option to be returned. */
  optionId: number;
};
export type UpdateIssueFieldOptionApiResponse =
  /** status 200 Returned if the option is updated or created. */ IssueFieldOption;
export type UpdateIssueFieldOptionApiArg = {
  /** The field key is specified in the following format: **$(app-key)\_\_$(field-key)**. For example, *example-add-on\_\_example-issue-field*. To determine the `fieldKey` value, do one of the following:
    
     *  open the app's plugin descriptor, then **app-key** is the key at the top and **field-key** is the key in the `jiraIssueFields` module. **app-key** can also be found in the app listing in the Atlassian Universal Plugin Manager.
     *  run [Get fields](#api-rest-api-3-field-get) and in the field details the value is returned in `key`. For example, `"key": "teams-add-on__team-issue-field"` */
  fieldKey: string;
  /** The ID of the option to be updated. */
  optionId: number;
  issueFieldOption: IssueFieldOption;
};
export type DeleteIssueFieldOptionApiResponse =
  /** status 204 Returned if the field option is deleted. */ any;
export type DeleteIssueFieldOptionApiArg = {
  /** The field key is specified in the following format: **$(app-key)\_\_$(field-key)**. For example, *example-add-on\_\_example-issue-field*. To determine the `fieldKey` value, do one of the following:
    
     *  open the app's plugin descriptor, then **app-key** is the key at the top and **field-key** is the key in the `jiraIssueFields` module. **app-key** can also be found in the app listing in the Atlassian Universal Plugin Manager.
     *  run [Get fields](#api-rest-api-3-field-get) and in the field details the value is returned in `key`. For example, `"key": "teams-add-on__team-issue-field"` */
  fieldKey: string;
  /** The ID of the option to be deleted. */
  optionId: number;
};
export type ReplaceIssueFieldOptionApiResponse = unknown;
export type ReplaceIssueFieldOptionApiArg = {
  /** The ID of the option that will replace the currently selected option. */
  replaceWith?: number;
  /** A JQL query that specifies the issues to be updated. For example, *project=10000*. */
  jql?: string;
  /** Whether screen security is overridden to enable hidden fields to be edited. Available to Connect and Forge app users with admin permission. */
  overrideScreenSecurity?: boolean;
  /** Whether screen security is overridden to enable uneditable fields to be edited. Available to Connect and Forge app users with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). */
  overrideEditableFlag?: boolean;
  /** The field key is specified in the following format: **$(app-key)\_\_$(field-key)**. For example, *example-add-on\_\_example-issue-field*. To determine the `fieldKey` value, do one of the following:
    
     *  open the app's plugin descriptor, then **app-key** is the key at the top and **field-key** is the key in the `jiraIssueFields` module. **app-key** can also be found in the app listing in the Atlassian Universal Plugin Manager.
     *  run [Get fields](#api-rest-api-3-field-get) and in the field details the value is returned in `key`. For example, `"key": "teams-add-on__team-issue-field"` */
  fieldKey: string;
  /** The ID of the option to be deselected. */
  optionId: number;
};
export type DeleteCustomFieldApiResponse = unknown;
export type DeleteCustomFieldApiArg = {
  /** The ID of a custom field. */
  id: string;
};
export type RestoreCustomFieldApiResponse =
  /** status 200 Returned if the request is successful. */ any;
export type RestoreCustomFieldApiArg = {
  /** The ID of a custom field. */
  id: string;
};
export type TrashCustomFieldApiResponse =
  /** status 200 Returned if the request is successful. */ any;
export type TrashCustomFieldApiArg = {
  /** The ID of a custom field. */
  id: string;
};
export type GetAllFieldConfigurationsApiResponse =
  /** status 200 Returned if the request is successful. */ PageBeanFieldConfigurationDetails;
export type GetAllFieldConfigurationsApiArg = {
  /** The index of the first item to return in a page of results (page offset). */
  startAt?: number;
  /** The maximum number of items to return per page. */
  maxResults?: number;
  /** The list of field configuration IDs. To include multiple IDs, provide an ampersand-separated list. For example, `id=10000&id=10001`. */
  id?: number[];
  /** If *true* returns default field configurations only. */
  isDefault?: boolean;
  /** The query string used to match against field configuration names and descriptions. */
  query?: string;
};
export type CreateFieldConfigurationApiResponse =
  /** status 200 Returned if the request is successful. */ FieldConfiguration;
export type CreateFieldConfigurationApiArg = {
  fieldConfigurationDetails: FieldConfigurationDetails;
};
export type UpdateFieldConfigurationApiResponse =
  /** status 204 Returned if the request is successful. */ any;
export type UpdateFieldConfigurationApiArg = {
  /** The ID of the field configuration. */
  id: number;
  fieldConfigurationDetails: FieldConfigurationDetails;
};
export type DeleteFieldConfigurationApiResponse =
  /** status 204 Returned if the request is successful. */ any;
export type DeleteFieldConfigurationApiArg = {
  /** The ID of the field configuration. */
  id: number;
};
export type GetFieldConfigurationItemsApiResponse =
  /** status 200 Returned if the request is successful. */ PageBeanFieldConfigurationItem;
export type GetFieldConfigurationItemsApiArg = {
  /** The ID of the field configuration. */
  id: number;
  /** The index of the first item to return in a page of results (page offset). */
  startAt?: number;
  /** The maximum number of items to return per page. */
  maxResults?: number;
};
export type UpdateFieldConfigurationItemsApiResponse =
  /** status 204 Returned if the request is successful. */ any;
export type UpdateFieldConfigurationItemsApiArg = {
  /** The ID of the field configuration. */
  id: number;
  fieldConfigurationItemsDetails: FieldConfigurationItemsDetails;
};
export type GetAllFieldConfigurationSchemesApiResponse =
  /** status 200 Returned if the request is successful. */ PageBeanFieldConfigurationScheme;
export type GetAllFieldConfigurationSchemesApiArg = {
  /** The index of the first item to return in a page of results (page offset). */
  startAt?: number;
  /** The maximum number of items to return per page. */
  maxResults?: number;
  /** The list of field configuration scheme IDs. To include multiple IDs, provide an ampersand-separated list. For example, `id=10000&id=10001`. */
  id?: number[];
};
export type CreateFieldConfigurationSchemeApiResponse =
  /** status 201 Returned if the request is successful. */ FieldConfigurationScheme;
export type CreateFieldConfigurationSchemeApiArg = {
  /** The details of the field configuration scheme. */
  updateFieldConfigurationSchemeDetails: UpdateFieldConfigurationSchemeDetails;
};
export type GetFieldConfigurationSchemeMappingsApiResponse =
  /** status 200 Returned if the request is successful. */ PageBeanFieldConfigurationIssueTypeItem;
export type GetFieldConfigurationSchemeMappingsApiArg = {
  /** The index of the first item to return in a page of results (page offset). */
  startAt?: number;
  /** The maximum number of items to return per page. */
  maxResults?: number;
  /** The list of field configuration scheme IDs. To include multiple field configuration schemes separate IDs with ampersand: `fieldConfigurationSchemeId=10000&fieldConfigurationSchemeId=10001`. */
  fieldConfigurationSchemeId?: number[];
};
export type GetFieldConfigurationSchemeProjectMappingApiResponse =
  /** status 200 Returned if the request is successful. */ PageBeanFieldConfigurationSchemeProjects;
export type GetFieldConfigurationSchemeProjectMappingApiArg = {
  /** The index of the first item to return in a page of results (page offset). */
  startAt?: number;
  /** The maximum number of items to return per page. */
  maxResults?: number;
  /** The list of project IDs. To include multiple projects, separate IDs with ampersand: `projectId=10000&projectId=10001`. */
  projectId: number[];
};
export type AssignFieldConfigurationSchemeToProjectApiResponse =
  /** status 204 Returned if the request is successful. */ any;
export type AssignFieldConfigurationSchemeToProjectApiArg = {
  fieldConfigurationSchemeProjectAssociation: FieldConfigurationSchemeProjectAssociation;
};
export type UpdateFieldConfigurationSchemeApiResponse =
  /** status 204 Returned if the request is successful. */ any;
export type UpdateFieldConfigurationSchemeApiArg = {
  /** The ID of the field configuration scheme. */
  id: number;
  /** The details of the field configuration scheme. */
  updateFieldConfigurationSchemeDetails: UpdateFieldConfigurationSchemeDetails;
};
export type DeleteFieldConfigurationSchemeApiResponse =
  /** status 204 Returned if the request is successful. */ any;
export type DeleteFieldConfigurationSchemeApiArg = {
  /** The ID of the field configuration scheme. */
  id: number;
};
export type SetFieldConfigurationSchemeMappingApiResponse =
  /** status 204 Returned if the request is successful. */ any;
export type SetFieldConfigurationSchemeMappingApiArg = {
  /** The ID of the field configuration scheme. */
  id: number;
  associateFieldConfigurationsWithIssueTypesRequest: AssociateFieldConfigurationsWithIssueTypesRequest;
};
export type RemoveIssueTypesFromGlobalFieldConfigurationSchemeApiResponse =
  /** status 204 Returned if the request is successful. */ any;
export type RemoveIssueTypesFromGlobalFieldConfigurationSchemeApiArg = {
  /** The ID of the field configuration scheme. */
  id: number;
  /** The issue type IDs to remove. */
  issueTypeIdsToRemove: IssueTypeIdsToRemove;
};
export type GetFiltersApiResponse = /** status 200 200 response */ Filter[];
export type GetFiltersApiArg = {
  /** Use [expand](#expansion) to include additional information about filter in the response. This parameter accepts a comma-separated list. Expand options include:
    
     *  `sharedUsers` Returns the users that the filter is shared with. This includes users that can browse projects that the filter is shared with. If you don't specify `sharedUsers`, then the `sharedUsers` object is returned but it doesn't list any users. The list of users returned is limited to 1000, to access additional users append `[start-index:end-index]` to the expand request. For example, to access the next 1000 users, use `?expand=sharedUsers[1001:2000]`.
     *  `subscriptions` Returns the users that are subscribed to the filter. If you don't specify `subscriptions`, the `subscriptions` object is returned but it doesn't list any subscriptions. The list of subscriptions returned is limited to 1000, to access additional subscriptions append `[start-index:end-index]` to the expand request. For example, to access the next 1000 subscriptions, use `?expand=subscriptions[1001:2000]`. */
  expand?: string;
};
export type CreateFilterApiResponse =
  /** status 200 Returned if the request is successful. */ Filter;
export type CreateFilterApiArg = {
  /** Use [expand](#expansion) to include additional information about filter in the response. This parameter accepts a comma-separated list. Expand options include:
    
     *  `sharedUsers` Returns the users that the filter is shared with. This includes users that can browse projects that the filter is shared with. If you don't specify `sharedUsers`, then the `sharedUsers` object is returned but it doesn't list any users. The list of users returned is limited to 1000, to access additional users append `[start-index:end-index]` to the expand request. For example, to access the next 1000 users, use `?expand=sharedUsers[1001:2000]`.
     *  `subscriptions` Returns the users that are subscribed to the filter. If you don't specify `subscriptions`, the `subscriptions` object is returned but it doesn't list any subscriptions. The list of subscriptions returned is limited to 1000, to access additional subscriptions append `[start-index:end-index]` to the expand request. For example, to access the next 1000 subscriptions, use `?expand=subscriptions[1001:2000]`. */
  expand?: string;
  /** EXPERIMENTAL: Whether share permissions are overridden to enable filters with any share permissions to be created. Available to users with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). */
  overrideSharePermissions?: boolean;
  /** The filter to create. */
  filter: Filter;
};
export type GetDefaultShareScopeApiResponse =
  /** status 200 Returned if the request is successful. */ DefaultShareScope;
export type GetDefaultShareScopeApiArg = void;
export type SetDefaultShareScopeApiResponse =
  /** status 200 Returned if the request is successful. */ DefaultShareScope;
export type SetDefaultShareScopeApiArg = {
  defaultShareScope: DefaultShareScope;
};
export type GetFavouriteFiltersApiResponse =
  /** status 200 Returned if the request is successful. */ Filter[];
export type GetFavouriteFiltersApiArg = {
  /** Use [expand](#expansion) to include additional information about filter in the response. This parameter accepts a comma-separated list. Expand options include:
    
     *  `sharedUsers` Returns the users that the filter is shared with. This includes users that can browse projects that the filter is shared with. If you don't specify `sharedUsers`, then the `sharedUsers` object is returned but it doesn't list any users. The list of users returned is limited to 1000, to access additional users append `[start-index:end-index]` to the expand request. For example, to access the next 1000 users, use `?expand=sharedUsers[1001:2000]`.
     *  `subscriptions` Returns the users that are subscribed to the filter. If you don't specify `subscriptions`, the `subscriptions` object is returned but it doesn't list any subscriptions. The list of subscriptions returned is limited to 1000, to access additional subscriptions append `[start-index:end-index]` to the expand request. For example, to access the next 1000 subscriptions, use `?expand=subscriptions[1001:2000]`. */
  expand?: string;
};
export type GetMyFiltersApiResponse =
  /** status 200 Returned if the request is successful. */ Filter[];
export type GetMyFiltersApiArg = {
  /** Use [expand](#expansion) to include additional information about filter in the response. This parameter accepts a comma-separated list. Expand options include:
    
     *  `sharedUsers` Returns the users that the filter is shared with. This includes users that can browse projects that the filter is shared with. If you don't specify `sharedUsers`, then the `sharedUsers` object is returned but it doesn't list any users. The list of users returned is limited to 1000, to access additional users append `[start-index:end-index]` to the expand request. For example, to access the next 1000 users, use `?expand=sharedUsers[1001:2000]`.
     *  `subscriptions` Returns the users that are subscribed to the filter. If you don't specify `subscriptions`, the `subscriptions` object is returned but it doesn't list any subscriptions. The list of subscriptions returned is limited to 1000, to access additional subscriptions append `[start-index:end-index]` to the expand request. For example, to access the next 1000 subscriptions, use `?expand=subscriptions[1001:2000]`. */
  expand?: string;
  /** Include the user's favorite filters in the response. */
  includeFavourites?: boolean;
};
export type GetFiltersPaginatedApiResponse =
  /** status 200 Returned if the request is successful. */ PageBeanFilterDetails;
export type GetFiltersPaginatedApiArg = {
  /** String used to perform a case-insensitive partial match with `name`. */
  filterName?: string;
  /** User account ID used to return filters with the matching `owner.accountId`. This parameter cannot be used with `owner`. */
  accountId?: string;
  /** This parameter is deprecated because of privacy changes. Use `accountId` instead. See the [migration guide](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. User name used to return filters with the matching `owner.name`. This parameter cannot be used with `accountId`. */
  owner?: string;
  /** As a group's name can change, use of `groupId` is recommended to identify a group. Group name used to returns filters that are shared with a group that matches `sharePermissions.group.groupname`. This parameter cannot be used with the `groupId` parameter. */
  groupname?: string;
  /** Group ID used to returns filters that are shared with a group that matches `sharePermissions.group.groupId`. This parameter cannot be used with the `groupname` parameter. */
  groupId?: string;
  /** Project ID used to returns filters that are shared with a project that matches `sharePermissions.project.id`. */
  projectId?: number;
  /** The list of filter IDs. To include multiple IDs, provide an ampersand-separated list. For example, `id=10000&id=10001`. */
  id?: number[];
  /** [Order](#ordering) the results by a field:
    
     *  `description` Sorts by filter description. Note that this sorting works independently of whether the expand to display the description field is in use.
     *  `favourite_count` Sorts by the count of how many users have this filter as a favorite.
     *  `is_favourite` Sorts by whether the filter is marked as a favorite.
     *  `id` Sorts by filter ID.
     *  `name` Sorts by filter name.
     *  `owner` Sorts by the ID of the filter owner.
     *  `is_shared` Sorts by whether the filter is shared. */
  orderBy?:
    | "description"
    | "-description"
    | "+description"
    | "favourite_count"
    | "-favourite_count"
    | "+favourite_count"
    | "id"
    | "-id"
    | "+id"
    | "is_favourite"
    | "-is_favourite"
    | "+is_favourite"
    | "name"
    | "-name"
    | "+name"
    | "owner"
    | "-owner"
    | "+owner"
    | "is_shared"
    | "-is_shared"
    | "+is_shared";
  /** The index of the first item to return in a page of results (page offset). */
  startAt?: number;
  /** The maximum number of items to return per page. */
  maxResults?: number;
  /** Use [expand](#expansion) to include additional information about filter in the response. This parameter accepts a comma-separated list. Expand options include:
    
     *  `description` Returns the description of the filter.
     *  `favourite` Returns an indicator of whether the user has set the filter as a favorite.
     *  `favouritedCount` Returns a count of how many users have set this filter as a favorite.
     *  `jql` Returns the JQL query that the filter uses.
     *  `owner` Returns the owner of the filter.
     *  `searchUrl` Returns a URL to perform the filter's JQL query.
     *  `sharePermissions` Returns the share permissions defined for the filter.
     *  `editPermissions` Returns the edit permissions defined for the filter.
     *  `isWritable` Returns whether the current user has permission to edit the filter.
     *  `subscriptions` Returns the users that are subscribed to the filter.
     *  `viewUrl` Returns a URL to view the filter. */
  expand?: string;
  /** EXPERIMENTAL: Whether share permissions are overridden to enable filters with any share permissions to be returned. Available to users with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). */
  overrideSharePermissions?: boolean;
};
export type GetFilterApiResponse =
  /** status 200 Returned if the request is successful. */ Filter;
export type GetFilterApiArg = {
  /** The ID of the filter to return. */
  id: number;
  /** Use [expand](#expansion) to include additional information about filter in the response. This parameter accepts a comma-separated list. Expand options include:
    
     *  `sharedUsers` Returns the users that the filter is shared with. This includes users that can browse projects that the filter is shared with. If you don't specify `sharedUsers`, then the `sharedUsers` object is returned but it doesn't list any users. The list of users returned is limited to 1000, to access additional users append `[start-index:end-index]` to the expand request. For example, to access the next 1000 users, use `?expand=sharedUsers[1001:2000]`.
     *  `subscriptions` Returns the users that are subscribed to the filter. If you don't specify `subscriptions`, the `subscriptions` object is returned but it doesn't list any subscriptions. The list of subscriptions returned is limited to 1000, to access additional subscriptions append `[start-index:end-index]` to the expand request. For example, to access the next 1000 subscriptions, use `?expand=subscriptions[1001:2000]`. */
  expand?: string;
  /** EXPERIMENTAL: Whether share permissions are overridden to enable filters with any share permissions to be returned. Available to users with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). */
  overrideSharePermissions?: boolean;
};
export type UpdateFilterApiResponse =
  /** status 200 Returned if the request is successful. */ Filter;
export type UpdateFilterApiArg = {
  /** The ID of the filter to update. */
  id: number;
  /** Use [expand](#expansion) to include additional information about filter in the response. This parameter accepts a comma-separated list. Expand options include:
    
     *  `sharedUsers` Returns the users that the filter is shared with. This includes users that can browse projects that the filter is shared with. If you don't specify `sharedUsers`, then the `sharedUsers` object is returned but it doesn't list any users. The list of users returned is limited to 1000, to access additional users append `[start-index:end-index]` to the expand request. For example, to access the next 1000 users, use `?expand=sharedUsers[1001:2000]`.
     *  `subscriptions` Returns the users that are subscribed to the filter. If you don't specify `subscriptions`, the `subscriptions` object is returned but it doesn't list any subscriptions. The list of subscriptions returned is limited to 1000, to access additional subscriptions append `[start-index:end-index]` to the expand request. For example, to access the next 1000 subscriptions, use `?expand=subscriptions[1001:2000]`. */
  expand?: string;
  /** EXPERIMENTAL: Whether share permissions are overridden to enable the addition of any share permissions to filters. Available to users with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). */
  overrideSharePermissions?: boolean;
  /** The filter to update. */
  filter: Filter;
};
export type DeleteFilterApiResponse = unknown;
export type DeleteFilterApiArg = {
  /** The ID of the filter to delete. */
  id: number;
};
export type GetColumnsApiResponse =
  /** status 200 Returned if the request is successful. */ ColumnItem[];
export type GetColumnsApiArg = {
  /** The ID of the filter. */
  id: number;
};
export type SetColumnsApiResponse =
  /** status 200 Returned if the request is successful. */ any;
export type SetColumnsApiArg = {
  /** The ID of the filter. */
  id: number;
  /** The IDs of the fields to set as columns. In the form data, specify each field as `columns=id`, where `id` is the *id* of a field (as seen in the response for [Get fields](#api-rest-api-<ver>-field-get)). For example, `columns=summary`. */
  body: string[];
};
export type ResetColumnsApiResponse = unknown;
export type ResetColumnsApiArg = {
  /** The ID of the filter. */
  id: number;
};
export type SetFavouriteForFilterApiResponse =
  /** status 200 Returned if the request is successful. */ Filter;
export type SetFavouriteForFilterApiArg = {
  /** The ID of the filter. */
  id: number;
  /** Use [expand](#expansion) to include additional information about filter in the response. This parameter accepts a comma-separated list. Expand options include:
    
     *  `sharedUsers` Returns the users that the filter is shared with. This includes users that can browse projects that the filter is shared with. If you don't specify `sharedUsers`, then the `sharedUsers` object is returned but it doesn't list any users. The list of users returned is limited to 1000, to access additional users append `[start-index:end-index]` to the expand request. For example, to access the next 1000 users, use `?expand=sharedUsers[1001:2000]`.
     *  `subscriptions` Returns the users that are subscribed to the filter. If you don't specify `subscriptions`, the `subscriptions` object is returned but it doesn't list any subscriptions. The list of subscriptions returned is limited to 1000, to access additional subscriptions append `[start-index:end-index]` to the expand request. For example, to access the next 1000 subscriptions, use `?expand=subscriptions[1001:2000]`. */
  expand?: string;
};
export type DeleteFavouriteForFilterApiResponse =
  /** status 200 Returned if the request is successful. */ Filter;
export type DeleteFavouriteForFilterApiArg = {
  /** The ID of the filter. */
  id: number;
  /** Use [expand](#expansion) to include additional information about filter in the response. This parameter accepts a comma-separated list. Expand options include:
    
     *  `sharedUsers` Returns the users that the filter is shared with. This includes users that can browse projects that the filter is shared with. If you don't specify `sharedUsers`, then the `sharedUsers` object is returned but it doesn't list any users. The list of users returned is limited to 1000, to access additional users append `[start-index:end-index]` to the expand request. For example, to access the next 1000 users, use `?expand=sharedUsers[1001:2000]`.
     *  `subscriptions` Returns the users that are subscribed to the filter. If you don't specify `subscriptions`, the `subscriptions` object is returned but it doesn't list any subscriptions. The list of subscriptions returned is limited to 1000, to access additional subscriptions append `[start-index:end-index]` to the expand request. For example, to access the next 1000 subscriptions, use `?expand=subscriptions[1001:2000]`. */
  expand?: string;
};
export type ChangeFilterOwnerApiResponse =
  /** status 204 Returned if the request is successful. */ any;
export type ChangeFilterOwnerApiArg = {
  /** The ID of the filter to update. */
  id: number;
  /** The account ID of the new owner of the filter. */
  changeFilterOwner: ChangeFilterOwner;
};
export type GetSharePermissionsApiResponse =
  /** status 200 Returned if the request is successful. */ SharePermission[];
export type GetSharePermissionsApiArg = {
  /** The ID of the filter. */
  id: number;
};
export type AddSharePermissionApiResponse =
  /** status 201 Returned if the request is successful. */ SharePermission[];
export type AddSharePermissionApiArg = {
  /** The ID of the filter. */
  id: number;
  sharePermissionInputBean: SharePermissionInputBean;
};
export type GetSharePermissionApiResponse =
  /** status 200 Returned if the request is successful. */ SharePermission;
export type GetSharePermissionApiArg = {
  /** The ID of the filter. */
  id: number;
  /** The ID of the share permission. */
  permissionId: number;
};
export type DeleteSharePermissionApiResponse = unknown;
export type DeleteSharePermissionApiArg = {
  /** The ID of the filter. */
  id: number;
  /** The ID of the share permission. */
  permissionId: number;
};
export type GetGroupApiResponse =
  /** status 200 Returned if the request is successful. */ Group;
export type GetGroupApiArg = {
  /** As a group's name can change, use of `groupId` is recommended to identify a group.
    The name of the group. This parameter cannot be used with the `groupId` parameter. */
  groupname?: string;
  /** The ID of the group. This parameter cannot be used with the `groupName` parameter. */
  groupId?: string;
  /** List of fields to expand. */
  expand?: string;
};
export type CreateGroupApiResponse =
  /** status 201 Returned if the request is successful. */ Group;
export type CreateGroupApiArg = {
  /** The name of the group. */
  addGroupBean: AddGroupBean;
};
export type RemoveGroupApiResponse = unknown;
export type RemoveGroupApiArg = {
  /** As a group's name can change, use of `groupId` is recommended to identify a group.
    The name of the group. This parameter cannot be used with the `groupId` parameter. */
  groupname?: string;
  /** The ID of the group. This parameter cannot be used with the `groupName` parameter. */
  groupId?: string;
  /** As a group's name can change, use of `swapGroupId` is recommended to identify a group.
    The group to transfer restrictions to. Only comments and worklogs are transferred. If restrictions are not transferred, comments and worklogs are inaccessible after the deletion. This parameter cannot be used with the `swapGroupId` parameter. */
  swapGroup?: string;
  /** The ID of the group to transfer restrictions to. Only comments and worklogs are transferred. If restrictions are not transferred, comments and worklogs are inaccessible after the deletion. This parameter cannot be used with the `swapGroup` parameter. */
  swapGroupId?: string;
};
export type BulkGetGroupsApiResponse =
  /** status 200 Returned if the request is successful. */ PageBeanGroupDetails;
export type BulkGetGroupsApiArg = {
  /** The index of the first item to return in a page of results (page offset). */
  startAt?: number;
  /** The maximum number of items to return per page. */
  maxResults?: number;
  /** The ID of a group. To specify multiple IDs, pass multiple `groupId` parameters. For example, `groupId=5b10a2844c20165700ede21g&groupId=5b10ac8d82e05b22cc7d4ef5`. */
  groupId?: string[];
  /** The name of a group. To specify multiple names, pass multiple `groupName` parameters. For example, `groupName=administrators&groupName=jira-software-users`. */
  groupName?: string[];
};
export type GetUsersFromGroupApiResponse =
  /** status 200 Returned if the request is successful. */ PageBeanUserDetails;
export type GetUsersFromGroupApiArg = {
  /** As a group's name can change, use of `groupId` is recommended to identify a group.
    The name of the group. This parameter cannot be used with the `groupId` parameter. */
  groupname?: string;
  /** The ID of the group. This parameter cannot be used with the `groupName` parameter. */
  groupId?: string;
  /** Include inactive users. */
  includeInactiveUsers?: boolean;
  /** The index of the first item to return in a page of results (page offset). */
  startAt?: number;
  /** The maximum number of items to return per page. */
  maxResults?: number;
};
export type AddUserToGroupApiResponse =
  /** status 201 Returned if the request is successful. */ Group;
export type AddUserToGroupApiArg = {
  /** As a group's name can change, use of `groupId` is recommended to identify a group.
    The name of the group. This parameter cannot be used with the `groupId` parameter. */
  groupname?: string;
  /** The ID of the group. This parameter cannot be used with the `groupName` parameter. */
  groupId?: string;
  /** The user to add to the group. */
  updateUserToGroupBean: UpdateUserToGroupBean;
};
export type RemoveUserFromGroupApiResponse = unknown;
export type RemoveUserFromGroupApiArg = {
  /** As a group's name can change, use of `groupId` is recommended to identify a group.
    The name of the group. This parameter cannot be used with the `groupId` parameter. */
  groupname?: string;
  /** The ID of the group. This parameter cannot be used with the `groupName` parameter. */
  groupId?: string;
  /** This parameter is no longer available. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. */
  username?: string;
  /** The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*. */
  accountId: string;
};
export type FindGroupsApiResponse =
  /** status 200 Returned if the request is successful. */ FoundGroups;
export type FindGroupsApiArg = {
  /** This parameter is deprecated, setting it does not affect the results. To find groups containing a particular user, use [Get user groups](#api-rest-api-3-user-groups-get). */
  accountId?: string;
  /** The string to find in group names. */
  query?: string;
  /** As a group's name can change, use of `excludeGroupIds` is recommended to identify a group.
    A group to exclude from the result. To exclude multiple groups, provide an ampersand-separated list. For example, `exclude=group1&exclude=group2`. This parameter cannot be used with the `excludeGroupIds` parameter. */
  exclude?: string[];
  /** A group ID to exclude from the result. To exclude multiple groups, provide an ampersand-separated list. For example, `excludeId=group1-id&excludeId=group2-id`. This parameter cannot be used with the `excludeGroups` parameter. */
  excludeId?: string[];
  /** The maximum number of groups to return. The maximum number of groups that can be returned is limited by the system property `jira.ajax.autocomplete.limit`. */
  maxResults?: number;
  /** This parameter is no longer available. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. */
  userName?: string;
};
export type FindUsersAndGroupsApiResponse =
  /** status 200 Returned if the request is successful. */ FoundUsersAndGroups;
export type FindUsersAndGroupsApiArg = {
  /** The search string. */
  query: string;
  /** The maximum number of items to return in each list. */
  maxResults?: number;
  /** Whether the user avatar should be returned. If an invalid value is provided, the default value is used. */
  showAvatar?: boolean;
  /** The custom field ID of the field this request is for. */
  fieldId?: string;
  /** The ID of a project that returned users and groups must have permission to view. To include multiple projects, provide an ampersand-separated list. For example, `projectId=10000&projectId=10001`. This parameter is only used when `fieldId` is present. */
  projectId?: string[];
  /** The ID of an issue type that returned users and groups must have permission to view. To include multiple issue types, provide an ampersand-separated list. For example, `issueTypeId=10000&issueTypeId=10001`. Special values, such as `-1` (all standard issue types) and `-2` (all subtask issue types), are supported. This parameter is only used when `fieldId` is present. */
  issueTypeId?: string[];
  /** The size of the avatar to return. If an invalid value is provided, the default value is used. */
  avatarSize?:
    | "xsmall"
    | "xsmall@2x"
    | "xsmall@3x"
    | "small"
    | "small@2x"
    | "small@3x"
    | "medium"
    | "medium@2x"
    | "medium@3x"
    | "large"
    | "large@2x"
    | "large@3x"
    | "xlarge"
    | "xlarge@2x"
    | "xlarge@3x"
    | "xxlarge"
    | "xxlarge@2x"
    | "xxlarge@3x"
    | "xxxlarge"
    | "xxxlarge@2x"
    | "xxxlarge@3x";
  /** Whether the search for groups should be case insensitive. */
  caseInsensitive?: boolean;
  /** Whether Connect app users and groups should be excluded from the search results. If an invalid value is provided, the default value is used. */
  excludeConnectAddons?: boolean;
};
export type GetLicenseApiResponse =
  /** status 200 Returned if the request is successful. */ License;
export type GetLicenseApiArg = void;
export type CreateIssueApiResponse =
  /** status 201 Returned if the request is successful. */ CreatedIssue;
export type CreateIssueApiArg = {
  /** Whether the project in which the issue is created is added to the user's **Recently viewed** project list, as shown under **Projects** in Jira. When provided, the issue type and request type are added to the user's history for a project. These values are then used to provide defaults on the issue create screen. */
  updateHistory?: boolean;
  issueUpdateDetails: IssueUpdateDetails;
};
export type CreateIssuesApiResponse =
  /** status 201 Returned if any of the issue or subtask creation requests were successful. A request may be unsuccessful when it:

 *  is missing required fields.
 *  contains invalid field values.
 *  contains fields that cannot be set for the issue type.
 *  is by a user who does not have the necessary permission.
 *  is to create a subtype in a project different that of the parent issue.
 *  is for a subtask when the option to create subtasks is disabled.
 *  is invalid for any other reason. */ CreatedIssues;
export type CreateIssuesApiArg = {
  issuesUpdateBean: IssuesUpdateBean;
};
export type GetCreateIssueMetaApiResponse =
  /** status 200 Returned if the request is successful. */ IssueCreateMetadata;
export type GetCreateIssueMetaApiArg = {
  /** List of project IDs. This parameter accepts a comma-separated list. Multiple project IDs can also be provided using an ampersand-separated list. For example, `projectIds=10000,10001&projectIds=10020,10021`. This parameter may be provided with `projectKeys`. */
  projectIds?: string[];
  /** List of project keys. This parameter accepts a comma-separated list. Multiple project keys can also be provided using an ampersand-separated list. For example, `projectKeys=proj1,proj2&projectKeys=proj3`. This parameter may be provided with `projectIds`. */
  projectKeys?: string[];
  /** List of issue type IDs. This parameter accepts a comma-separated list. Multiple issue type IDs can also be provided using an ampersand-separated list. For example, `issuetypeIds=10000,10001&issuetypeIds=10020,10021`. This parameter may be provided with `issuetypeNames`. */
  issuetypeIds?: string[];
  /** List of issue type names. This parameter accepts a comma-separated list. Multiple issue type names can also be provided using an ampersand-separated list. For example, `issuetypeNames=name1,name2&issuetypeNames=name3`. This parameter may be provided with `issuetypeIds`. */
  issuetypeNames?: string[];
  /** Use [expand](#expansion) to include additional information about issue metadata in the response. This parameter accepts `projects.issuetypes.fields`, which returns information about the fields in the issue creation screen for each issue type. Fields hidden from the screen are not returned. Use the information to populate the `fields` and `update` fields in [Create issue](#api-rest-api-3-issue-post) and [Create issues](#api-rest-api-3-issue-bulk-post). */
  expand?: string;
};
export type GetIssuePickerResourceApiResponse =
  /** status 200 Returned if the request is successful. */ IssuePickerSuggestions;
export type GetIssuePickerResourceApiArg = {
  /** A string to match against text fields in the issue such as title, description, or comments. */
  query?: string;
  /** A JQL query defining a list of issues to search for the query term. Note that `username` and `userkey` cannot be used as search terms for this parameter, due to privacy reasons. Use `accountId` instead. */
  currentJql?: string;
  /** The key of an issue to exclude from search results. For example, the issue the user is viewing when they perform this query. */
  currentIssueKey?: string;
  /** The ID of a project that suggested issues must belong to. */
  currentProjectId?: string;
  /** Indicate whether to include subtasks in the suggestions list. */
  showSubTasks?: boolean;
  /** When `currentIssueKey` is a subtask, whether to include the parent issue in the suggestions if it matches the query. */
  showSubTaskParent?: boolean;
};
export type BulkSetIssuesPropertiesListApiResponse = unknown;
export type BulkSetIssuesPropertiesListApiArg = {
  /** Issue properties to be set or updated with values. */
  issueEntityProperties: IssueEntityProperties;
};
export type BulkSetIssuePropertiesByIssueApiResponse = unknown;
export type BulkSetIssuePropertiesByIssueApiArg = {
  /** Details of the issue properties to be set or updated. Note that if an issue is not found, it is ignored. */
  multiIssueEntityProperties: MultiIssueEntityProperties;
};
export type BulkSetIssuePropertyApiResponse = unknown;
export type BulkSetIssuePropertyApiArg = {
  /** The key of the property. The maximum length is 255 characters. */
  propertyKey: string;
  bulkIssuePropertyUpdateRequest: BulkIssuePropertyUpdateRequest;
};
export type BulkDeleteIssuePropertyApiResponse = unknown;
export type BulkDeleteIssuePropertyApiArg = {
  /** The key of the property. */
  propertyKey: string;
  issueFilterForBulkPropertyDelete: IssueFilterForBulkPropertyDelete;
};
export type GetIsWatchingIssueBulkApiResponse =
  /** status 200 Returned if the request is successful */ BulkIssueIsWatching;
export type GetIsWatchingIssueBulkApiArg = {
  /** A list of issue IDs. */
  issueList: IssueList;
};
export type GetIssueApiResponse =
  /** status 200 Returned if the request is successful. */ IssueBean;
export type GetIssueApiArg = {
  /** The ID or key of the issue. */
  issueIdOrKey: string;
  /** A list of fields to return for the issue. This parameter accepts a comma-separated list. Use it to retrieve a subset of fields. Allowed values:
    
     *  `*all` Returns all fields.
     *  `*navigable` Returns navigable fields.
     *  Any issue field, prefixed with a minus to exclude.
    
    Examples:
    
     *  `summary,comment` Returns only the summary and comments fields.
     *  `-description` Returns all (default) fields except description.
     *  `*navigable,-comment` Returns all navigable fields except comment.
    
    This parameter may be specified multiple times. For example, `fields=field1,field2& fields=field3`.
    
    Note: All fields are returned by default. This differs from [Search for issues using JQL (GET)](#api-rest-api-3-search-get) and [Search for issues using JQL (POST)](#api-rest-api-3-search-post) where the default is all navigable fields. */
  fields?: string[];
  /** Whether fields in `fields` are referenced by keys rather than IDs. This parameter is useful where fields have been added by a connect app and a field's key may differ from its ID. */
  fieldsByKeys?: boolean;
  /** Use [expand](#expansion) to include additional information about the issues in the response. This parameter accepts a comma-separated list. Expand options include:
    
     *  `renderedFields` Returns field values rendered in HTML format.
     *  `names` Returns the display name of each field.
     *  `schema` Returns the schema describing a field type.
     *  `transitions` Returns all possible transitions for the issue.
     *  `editmeta` Returns information about how each field can be edited.
     *  `changelog` Returns a list of recent updates to an issue, sorted by date, starting from the most recent.
     *  `versionedRepresentations` Returns a JSON array for each version of a field's value, with the highest number representing the most recent version. Note: When included in the request, the `fields` parameter is ignored. */
  expand?: string;
  /** A list of issue properties to return for the issue. This parameter accepts a comma-separated list. Allowed values:
    
     *  `*all` Returns all issue properties.
     *  Any issue property key, prefixed with a minus to exclude.
    
    Examples:
    
     *  `*all` Returns all properties.
     *  `*all,-prop1` Returns all properties except `prop1`.
     *  `prop1,prop2` Returns `prop1` and `prop2` properties.
    
    This parameter may be specified multiple times. For example, `properties=prop1,prop2& properties=prop3`. */
  properties?: string[];
  /** Whether the project in which the issue is created is added to the user's **Recently viewed** project list, as shown under **Projects** in Jira. This also populates the [JQL issues search](#api-rest-api-3-search-get) `lastViewed` field. */
  updateHistory?: boolean;
};
export type EditIssueApiResponse =
  /** status 204 Returned if the request is successful. */ any;
export type EditIssueApiArg = {
  /** The ID or key of the issue. */
  issueIdOrKey: string;
  /** Whether a notification email about the issue update is sent to all watchers. To disable the notification, administer Jira or administer project permissions are required. If the user doesn't have the necessary permission the request is ignored. */
  notifyUsers?: boolean;
  /** Whether screen security is overridden to enable hidden fields to be edited. Available to Connect app users with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) and Forge apps acting on behalf of users with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). */
  overrideScreenSecurity?: boolean;
  /** Whether screen security is overridden to enable uneditable fields to be edited. Available to Connect app users with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) and Forge apps acting on behalf of users with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). */
  overrideEditableFlag?: boolean;
  issueUpdateDetails: IssueUpdateDetails;
};
export type DeleteIssueApiResponse = unknown;
export type DeleteIssueApiArg = {
  /** The ID or key of the issue. */
  issueIdOrKey: string;
  /** Whether the issue's subtasks are deleted when the issue is deleted. */
  deleteSubtasks?: "true" | "false";
};
export type AssignIssueApiResponse =
  /** status 204 Returned if the request is successful. */ any;
export type AssignIssueApiArg = {
  /** The ID or key of the issue to be assigned. */
  issueIdOrKey: string;
  /** The request object with the user that the issue is assigned to. */
  user: User;
};
export type AddAttachmentApiResponse =
  /** status 200 Returned if the request is successful. */ Attachment[];
export type AddAttachmentApiArg = {
  /** The ID or key of the issue that attachments are added to. */
  issueIdOrKey: string;
  body: Blob;
};
export type GetChangeLogsApiResponse =
  /** status 200 Returned if the request is successful. */ PageBeanChangelog;
export type GetChangeLogsApiArg = {
  /** The ID or key of the issue. */
  issueIdOrKey: string;
  /** The index of the first item to return in a page of results (page offset). */
  startAt?: number;
  /** The maximum number of items to return per page. */
  maxResults?: number;
};
export type GetChangeLogsByIdsApiResponse =
  /** status 200 Returned if the request is successful. */ PageOfChangelogs;
export type GetChangeLogsByIdsApiArg = {
  /** The ID or key of the issue. */
  issueIdOrKey: string;
  issueChangelogIds: IssueChangelogIds;
};
export type GetCommentsApiResponse =
  /** status 200 Returned if the request is successful. */ PageOfComments;
export type GetCommentsApiArg = {
  /** The ID or key of the issue. */
  issueIdOrKey: string;
  /** The index of the first item to return in a page of results (page offset). */
  startAt?: number;
  /** The maximum number of items to return per page. */
  maxResults?: number;
  /** [Order](#ordering) the results by a field. Accepts *created* to sort comments by their created date. */
  orderBy?: "created" | "-created" | "+created";
  /** Use [expand](#expansion) to include additional information about comments in the response. This parameter accepts `renderedBody`, which returns the comment body rendered in HTML. */
  expand?: string;
};
export type AddCommentApiResponse =
  /** status 201 Returned if the request is successful. */ Comment;
export type AddCommentApiArg = {
  /** The ID or key of the issue. */
  issueIdOrKey: string;
  /** Use [expand](#expansion) to include additional information about comments in the response. This parameter accepts `renderedBody`, which returns the comment body rendered in HTML. */
  expand?: string;
  comment: Comment;
};
export type GetCommentApiResponse =
  /** status 200 Returned if the request is successful. */ Comment;
export type GetCommentApiArg = {
  /** The ID or key of the issue. */
  issueIdOrKey: string;
  /** The ID of the comment. */
  id: string;
  /** Use [expand](#expansion) to include additional information about comments in the response. This parameter accepts `renderedBody`, which returns the comment body rendered in HTML. */
  expand?: string;
};
export type UpdateCommentApiResponse =
  /** status 200 Returned if the request is successful. */ Comment;
export type UpdateCommentApiArg = {
  /** The ID or key of the issue. */
  issueIdOrKey: string;
  /** The ID of the comment. */
  id: string;
  /** Whether users are notified when a comment is updated. */
  notifyUsers?: boolean;
  /** Whether screen security is overridden to enable uneditable fields to be edited. Available to Connect app users with the *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) and Forge apps acting on behalf of users with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). */
  overrideEditableFlag?: boolean;
  /** Use [expand](#expansion) to include additional information about comments in the response. This parameter accepts `renderedBody`, which returns the comment body rendered in HTML. */
  expand?: string;
  comment: Comment;
};
export type DeleteCommentApiResponse = unknown;
export type DeleteCommentApiArg = {
  /** The ID or key of the issue. */
  issueIdOrKey: string;
  /** The ID of the comment. */
  id: string;
};
export type GetEditIssueMetaApiResponse =
  /** status 200 Returned if the request is successful. */ IssueUpdateMetadata;
export type GetEditIssueMetaApiArg = {
  /** The ID or key of the issue. */
  issueIdOrKey: string;
  /** Whether hidden fields are returned. Available to Connect app users with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) and Forge apps acting on behalf of users with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). */
  overrideScreenSecurity?: boolean;
  /** Whether non-editable fields are returned. Available to Connect app users with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) and Forge apps acting on behalf of users with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). */
  overrideEditableFlag?: boolean;
};
export type NotifyApiResponse =
  /** status 204 Returned if the email is queued for sending. */ any;
export type NotifyApiArg = {
  /** ID or key of the issue that the notification is sent for. */
  issueIdOrKey: string;
  /** The request object for the notification and recipients. */
  notification: Notification;
};
export type GetIssuePropertyKeysApiResponse =
  /** status 200 Returned if the request is successful. */ PropertyKeys;
export type GetIssuePropertyKeysApiArg = {
  /** The key or ID of the issue. */
  issueIdOrKey: string;
};
export type GetIssuePropertyApiResponse =
  /** status 200 Returned if the request is successful. */ EntityProperty;
export type GetIssuePropertyApiArg = {
  /** The key or ID of the issue. */
  issueIdOrKey: string;
  /** The key of the property. */
  propertyKey: string;
};
export type SetIssuePropertyApiResponse =
  /** status 200 Returned if the issue property is updated. */
    | any
    | /** status 201 Returned if the issue property is created. */ any;
export type SetIssuePropertyApiArg = {
  /** The ID or key of the issue. */
  issueIdOrKey: string;
  /** The key of the issue property. The maximum length is 255 characters. */
  propertyKey: string;
  body: any;
};
export type DeleteIssuePropertyApiResponse = unknown;
export type DeleteIssuePropertyApiArg = {
  /** The key or ID of the issue. */
  issueIdOrKey: string;
  /** The key of the property. */
  propertyKey: string;
};
export type GetRemoteIssueLinksApiResponse =
  /** status 200 Returned if the request is successful. */ RemoteIssueLink;
export type GetRemoteIssueLinksApiArg = {
  /** The ID or key of the issue. */
  issueIdOrKey: string;
  /** The global ID of the remote issue link. */
  globalId?: string;
};
export type CreateOrUpdateRemoteIssueLinkApiResponse =
  /** status 200 Returned if the remote issue link is updated. */
    | RemoteIssueLinkIdentifies
    | /** status 201 Returned if the remote issue link is created. */ RemoteIssueLinkIdentifies;
export type CreateOrUpdateRemoteIssueLinkApiArg = {
  /** The ID or key of the issue. */
  issueIdOrKey: string;
  remoteIssueLinkRequest: RemoteIssueLinkRequest;
};
export type DeleteRemoteIssueLinkByGlobalIdApiResponse = unknown;
export type DeleteRemoteIssueLinkByGlobalIdApiArg = {
  /** The ID or key of the issue. */
  issueIdOrKey: string;
  /** The global ID of a remote issue link. */
  globalId: string;
};
export type GetRemoteIssueLinkByIdApiResponse =
  /** status 200 Returned if the request is successful. */ RemoteIssueLink;
export type GetRemoteIssueLinkByIdApiArg = {
  /** The ID or key of the issue. */
  issueIdOrKey: string;
  /** The ID of the remote issue link. */
  linkId: string;
};
export type UpdateRemoteIssueLinkApiResponse =
  /** status 204 Returned if the request is successful. */ any;
export type UpdateRemoteIssueLinkApiArg = {
  /** The ID or key of the issue. */
  issueIdOrKey: string;
  /** The ID of the remote issue link. */
  linkId: string;
  remoteIssueLinkRequest: RemoteIssueLinkRequest;
};
export type DeleteRemoteIssueLinkByIdApiResponse = unknown;
export type DeleteRemoteIssueLinkByIdApiArg = {
  /** The ID or key of the issue. */
  issueIdOrKey: string;
  /** The ID of a remote issue link. */
  linkId: string;
};
export type GetTransitionsApiResponse =
  /** status 200 Returned if the request is successful. */ Transitions;
export type GetTransitionsApiArg = {
  /** The ID or key of the issue. */
  issueIdOrKey: string;
  /** Use [expand](#expansion) to include additional information about transitions in the response. This parameter accepts `transitions.fields`, which returns information about the fields in the transition screen for each transition. Fields hidden from the screen are not returned. Use this information to populate the `fields` and `update` fields in [Transition issue](#api-rest-api-3-issue-issueIdOrKey-transitions-post). */
  expand?: string;
  /** The ID of the transition. */
  transitionId?: string;
  /** Whether transitions with the condition *Hide From User Condition* are included in the response. */
  skipRemoteOnlyCondition?: boolean;
  /** Whether details of transitions that fail a condition are included in the response */
  includeUnavailableTransitions?: boolean;
  /** Whether the transitions are sorted by ops-bar sequence value first then category order (Todo, In Progress, Done) or only by ops-bar sequence value. */
  sortByOpsBarAndStatus?: boolean;
};
export type DoTransitionApiResponse =
  /** status 204 Returned if the request is successful. */ any;
export type DoTransitionApiArg = {
  /** The ID or key of the issue. */
  issueIdOrKey: string;
  issueUpdateDetails: IssueUpdateDetails;
};
export type GetVotesApiResponse =
  /** status 200 Returned if the request is successful. */ Votes;
export type GetVotesApiArg = {
  /** The ID or key of the issue. */
  issueIdOrKey: string;
};
export type AddVoteApiResponse =
  /** status 204 Returned if the request is successful. */ any;
export type AddVoteApiArg = {
  /** The ID or key of the issue. */
  issueIdOrKey: string;
};
export type RemoveVoteApiResponse = unknown;
export type RemoveVoteApiArg = {
  /** The ID or key of the issue. */
  issueIdOrKey: string;
};
export type GetIssueWatchersApiResponse =
  /** status 200 Returned if the request is successful */ Watchers;
export type GetIssueWatchersApiArg = {
  /** The ID or key of the issue. */
  issueIdOrKey: string;
};
export type AddWatcherApiResponse =
  /** status 204 Returned if the request is successful. */ any;
export type AddWatcherApiArg = {
  /** The ID or key of the issue. */
  issueIdOrKey: string;
  /** The account ID of the user. Note that username cannot be used due to privacy changes. */
  body: string;
};
export type RemoveWatcherApiResponse = unknown;
export type RemoveWatcherApiArg = {
  /** The ID or key of the issue. */
  issueIdOrKey: string;
  /** This parameter is no longer available. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. */
  username?: string;
  /** The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*. Required. */
  accountId?: string;
};
export type GetIssueWorklogApiResponse =
  /** status 200 Returned if the request is successful */ PageOfWorklogs;
export type GetIssueWorklogApiArg = {
  /** The ID or key of the issue. */
  issueIdOrKey: string;
  /** The index of the first item to return in a page of results (page offset). */
  startAt?: number;
  /** The maximum number of items to return per page. */
  maxResults?: number;
  /** The worklog start date and time, as a UNIX timestamp in milliseconds, after which worklogs are returned. */
  startedAfter?: number;
  /** The worklog start date and time, as a UNIX timestamp in milliseconds, before which worklogs are returned. */
  startedBefore?: number;
  /** Use [expand](#expansion) to include additional information about worklogs in the response. This parameter accepts`properties`, which returns worklog properties. */
  expand?: string;
};
export type AddWorklogApiResponse =
  /** status 201 Returned if the request is successful. */ Worklog;
export type AddWorklogApiArg = {
  /** The ID or key the issue. */
  issueIdOrKey: string;
  /** Whether users watching the issue are notified by email. */
  notifyUsers?: boolean;
  /** Defines how to update the issue's time estimate, the options are:
    
     *  `new` Sets the estimate to a specific value, defined in `newEstimate`.
     *  `leave` Leaves the estimate unchanged.
     *  `manual` Reduces the estimate by amount specified in `reduceBy`.
     *  `auto` Reduces the estimate by the value of `timeSpent` in the worklog. */
  adjustEstimate?: "new" | "leave" | "manual" | "auto";
  /** The value to set as the issue's remaining time estimate, as days (\#d), hours (\#h), or minutes (\#m or \#). For example, *2d*. Required when `adjustEstimate` is `new`. */
  newEstimate?: string;
  /** The amount to reduce the issue's remaining estimate by, as days (\#d), hours (\#h), or minutes (\#m). For example, *2d*. Required when `adjustEstimate` is `manual`. */
  reduceBy?: string;
  /** Use [expand](#expansion) to include additional information about work logs in the response. This parameter accepts `properties`, which returns worklog properties. */
  expand?: string;
  /** Whether the worklog entry should be added to the issue even if the issue is not editable, because jira.issue.editable set to false or missing. For example, the issue is closed. Connect and Forge app users with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) can use this flag. */
  overrideEditableFlag?: boolean;
  worklog: Worklog;
};
export type GetWorklogApiResponse =
  /** status 200 Returned if the request is successful. */ Worklog;
export type GetWorklogApiArg = {
  /** The ID or key of the issue. */
  issueIdOrKey: string;
  /** The ID of the worklog. */
  id: string;
  /** Use [expand](#expansion) to include additional information about work logs in the response. This parameter accepts
    
    `properties`, which returns worklog properties. */
  expand?: string;
};
export type UpdateWorklogApiResponse =
  /** status 200 Returned if the request is successful */ Worklog;
export type UpdateWorklogApiArg = {
  /** The ID or key the issue. */
  issueIdOrKey: string;
  /** The ID of the worklog. */
  id: string;
  /** Whether users watching the issue are notified by email. */
  notifyUsers?: boolean;
  /** Defines how to update the issue's time estimate, the options are:
    
     *  `new` Sets the estimate to a specific value, defined in `newEstimate`.
     *  `leave` Leaves the estimate unchanged.
     *  `auto` Updates the estimate by the difference between the original and updated value of `timeSpent` or `timeSpentSeconds`. */
  adjustEstimate?: "new" | "leave" | "manual" | "auto";
  /** The value to set as the issue's remaining time estimate, as days (\#d), hours (\#h), or minutes (\#m or \#). For example, *2d*. Required when `adjustEstimate` is `new`. */
  newEstimate?: string;
  /** Use [expand](#expansion) to include additional information about worklogs in the response. This parameter accepts `properties`, which returns worklog properties. */
  expand?: string;
  /** Whether the worklog should be added to the issue even if the issue is not editable. For example, because the issue is closed. Connect and Forge app users with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) can use this flag. */
  overrideEditableFlag?: boolean;
  worklog: Worklog;
};
export type DeleteWorklogApiResponse = unknown;
export type DeleteWorklogApiArg = {
  /** The ID or key of the issue. */
  issueIdOrKey: string;
  /** The ID of the worklog. */
  id: string;
  /** Whether users watching the issue are notified by email. */
  notifyUsers?: boolean;
  /** Defines how to update the issue's time estimate, the options are:
    
     *  `new` Sets the estimate to a specific value, defined in `newEstimate`.
     *  `leave` Leaves the estimate unchanged.
     *  `manual` Increases the estimate by amount specified in `increaseBy`.
     *  `auto` Reduces the estimate by the value of `timeSpent` in the worklog. */
  adjustEstimate?: "new" | "leave" | "manual" | "auto";
  /** The value to set as the issue's remaining time estimate, as days (\#d), hours (\#h), or minutes (\#m or \#). For example, *2d*. Required when `adjustEstimate` is `new`. */
  newEstimate?: string;
  /** The amount to increase the issue's remaining estimate by, as days (\#d), hours (\#h), or minutes (\#m or \#). For example, *2d*. Required when `adjustEstimate` is `manual`. */
  increaseBy?: string;
  /** Whether the work log entry should be added to the issue even if the issue is not editable, because jira.issue.editable set to false or missing. For example, the issue is closed. Connect and Forge app users with admin permission can use this flag. */
  overrideEditableFlag?: boolean;
};
export type GetWorklogPropertyKeysApiResponse =
  /** status 200 Returned if the request is successful. */ PropertyKeys;
export type GetWorklogPropertyKeysApiArg = {
  /** The ID or key of the issue. */
  issueIdOrKey: string;
  /** The ID of the worklog. */
  worklogId: string;
};
export type GetWorklogPropertyApiResponse =
  /** status 200 Returned if the request is successful. */ EntityProperty;
export type GetWorklogPropertyApiArg = {
  /** The ID or key of the issue. */
  issueIdOrKey: string;
  /** The ID of the worklog. */
  worklogId: string;
  /** The key of the property. */
  propertyKey: string;
};
export type SetWorklogPropertyApiResponse =
  /** status 200 Returned if the worklog property is updated. */
    | any
    | /** status 201 Returned if the worklog property is created. */ any;
export type SetWorklogPropertyApiArg = {
  /** The ID or key of the issue. */
  issueIdOrKey: string;
  /** The ID of the worklog. */
  worklogId: string;
  /** The key of the issue property. The maximum length is 255 characters. */
  propertyKey: string;
  body: any;
};
export type DeleteWorklogPropertyApiResponse = unknown;
export type DeleteWorklogPropertyApiArg = {
  /** The ID or key of the issue. */
  issueIdOrKey: string;
  /** The ID of the worklog. */
  worklogId: string;
  /** The key of the property. */
  propertyKey: string;
};
export type LinkIssuesApiResponse =
  /** status 201 Returned if the request is successful. */ any;
export type LinkIssuesApiArg = {
  /** The issue link request. */
  linkIssueRequestJsonBean: LinkIssueRequestJsonBean;
};
export type GetIssueLinkApiResponse =
  /** status 200 Returned if the request is successful. */ IssueLink;
export type GetIssueLinkApiArg = {
  /** The ID of the issue link. */
  linkId: string;
};
export type DeleteIssueLinkApiResponse = unknown;
export type DeleteIssueLinkApiArg = {
  /** The ID of the issue link. */
  linkId: string;
};
export type GetIssueLinkTypesApiResponse =
  /** status 200 Returned if the request is successful. */ IssueLinkTypes;
export type GetIssueLinkTypesApiArg = void;
export type CreateIssueLinkTypeApiResponse =
  /** status 201 Returned if the request is successful. */ IssueLinkType;
export type CreateIssueLinkTypeApiArg = {
  issueLinkType: IssueLinkType;
};
export type GetIssueLinkTypeApiResponse =
  /** status 200 Returned if the request is successful. */ IssueLinkType;
export type GetIssueLinkTypeApiArg = {
  /** The ID of the issue link type. */
  issueLinkTypeId: string;
};
export type UpdateIssueLinkTypeApiResponse =
  /** status 200 Returned if the request is successful. */ IssueLinkType;
export type UpdateIssueLinkTypeApiArg = {
  /** The ID of the issue link type. */
  issueLinkTypeId: string;
  issueLinkType: IssueLinkType;
};
export type DeleteIssueLinkTypeApiResponse = unknown;
export type DeleteIssueLinkTypeApiArg = {
  /** The ID of the issue link type. */
  issueLinkTypeId: string;
};
export type GetIssueSecuritySchemesApiResponse =
  /** status 200 Returned if the request is successful. */ SecuritySchemes;
export type GetIssueSecuritySchemesApiArg = void;
export type GetIssueSecuritySchemeApiResponse =
  /** status 200 Returned if the request is successful. */ SecurityScheme;
export type GetIssueSecuritySchemeApiArg = {
  /** The ID of the issue security scheme. Use the [Get issue security schemes](#api-rest-api-3-issuesecurityschemes-get) operation to get a list of issue security scheme IDs. */
  id: number;
};
export type GetIssueSecurityLevelMembersApiResponse =
  /** status 200 Returned if the request is successful. */ PageBeanIssueSecurityLevelMember;
export type GetIssueSecurityLevelMembersApiArg = {
  /** The ID of the issue security scheme. Use the [Get issue security schemes](#api-rest-api-3-issuesecurityschemes-get) operation to get a list of issue security scheme IDs. */
  issueSecuritySchemeId: number;
  /** The index of the first item to return in a page of results (page offset). */
  startAt?: number;
  /** The maximum number of items to return per page. */
  maxResults?: number;
  /** The list of issue security level IDs. To include multiple issue security levels separate IDs with ampersand: `issueSecurityLevelId=10000&issueSecurityLevelId=10001`. */
  issueSecurityLevelId?: number[];
  /** Use expand to include additional information in the response. This parameter accepts a comma-separated list. Expand options include:
    
     *  `all` Returns all expandable information.
     *  `field` Returns information about the custom field granted the permission.
     *  `group` Returns information about the group that is granted the permission.
     *  `projectRole` Returns information about the project role granted the permission.
     *  `user` Returns information about the user who is granted the permission. */
  expand?: string;
};
export type GetIssueAllTypesApiResponse =
  /** status 200 Returned if the request is successful. */ IssueTypeDetails[];
export type GetIssueAllTypesApiArg = void;
export type CreateIssueTypeApiResponse =
  /** status 201 Returned if the request is successful. */ IssueTypeDetails;
export type CreateIssueTypeApiArg = {
  issueTypeCreateBean: IssueTypeCreateBean;
};
export type GetIssueTypesForProjectApiResponse =
  /** status 200 Returned if the request is successful. */ IssueTypeDetails[];
export type GetIssueTypesForProjectApiArg = {
  /** The ID of the project. */
  projectId: number;
  /** The level of the issue type to filter by. Use:
    
     *  `-1` for Subtask.
     *  `0` for Base.
     *  `1` for Epic. */
  level?: number;
};
export type GetIssueTypeApiResponse =
  /** status 200 Returned if the request is successful. */ IssueTypeDetails;
export type GetIssueTypeApiArg = {
  /** The ID of the issue type. */
  id: string;
};
export type UpdateIssueTypeApiResponse =
  /** status 200 Returned if the request is successful. */ IssueTypeDetails;
export type UpdateIssueTypeApiArg = {
  /** The ID of the issue type. */
  id: string;
  issueTypeUpdateBean: IssueTypeUpdateBean;
};
export type DeleteIssueTypeApiResponse = unknown;
export type DeleteIssueTypeApiArg = {
  /** The ID of the issue type. */
  id: string;
  /** The ID of the replacement issue type. */
  alternativeIssueTypeId?: string;
};
export type GetAlternativeIssueTypesApiResponse =
  /** status 200 Returned if the request is successful. */ IssueTypeDetails[];
export type GetAlternativeIssueTypesApiArg = {
  /** The ID of the issue type. */
  id: string;
};
export type CreateIssueTypeAvatarApiResponse =
  /** status 201 Returned if the request is successful. */ Avatar;
export type CreateIssueTypeAvatarApiArg = {
  /** The ID of the issue type. */
  id: string;
  /** The X coordinate of the top-left corner of the crop region. */
  x?: number;
  /** The Y coordinate of the top-left corner of the crop region. */
  y?: number;
  /** The length of each side of the crop region. */
  size: number;
  body: any;
};
export type GetIssueTypePropertyKeysApiResponse =
  /** status 200 Returned if the request is successful. */ PropertyKeys;
export type GetIssueTypePropertyKeysApiArg = {
  /** The ID of the issue type. */
  issueTypeId: string;
};
export type GetIssueTypePropertyApiResponse =
  /** status 200 Returned if the request is successful. */ EntityProperty;
export type GetIssueTypePropertyApiArg = {
  /** The ID of the issue type. */
  issueTypeId: string;
  /** The key of the property. Use [Get issue type property keys](#api-rest-api-3-issuetype-issueTypeId-properties-get) to get a list of all issue type property keys. */
  propertyKey: string;
};
export type SetIssueTypePropertyApiResponse =
  /** status 200 Returned if the issue type property is updated. */
    | any
    | /** status 201 Returned if the issue type property is created. */ any;
export type SetIssueTypePropertyApiArg = {
  /** The ID of the issue type. */
  issueTypeId: string;
  /** The key of the issue type property. The maximum length is 255 characters. */
  propertyKey: string;
  body: any;
};
export type DeleteIssueTypePropertyApiResponse = unknown;
export type DeleteIssueTypePropertyApiArg = {
  /** The ID of the issue type. */
  issueTypeId: string;
  /** The key of the property. Use [Get issue type property keys](#api-rest-api-3-issuetype-issueTypeId-properties-get) to get a list of all issue type property keys. */
  propertyKey: string;
};
export type GetAllIssueTypeSchemesApiResponse =
  /** status 200 Returned if the request is successful. */ PageBeanIssueTypeScheme;
export type GetAllIssueTypeSchemesApiArg = {
  /** The index of the first item to return in a page of results (page offset). */
  startAt?: number;
  /** The maximum number of items to return per page. */
  maxResults?: number;
  /** The list of issue type schemes IDs. To include multiple IDs, provide an ampersand-separated list. For example, `id=10000&id=10001`. */
  id?: number[];
  /** [Order](#ordering) the results by a field:
    
     *  `name` Sorts by issue type scheme name.
     *  `id` Sorts by issue type scheme ID. */
  orderBy?: "name" | "-name" | "+name" | "id" | "-id" | "+id";
  /** Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Expand options include:
    
     *  `projects` For each issue type schemes, returns information about the projects the issue type scheme is assigned to.
     *  `issueTypes` For each issue type schemes, returns information about the issueTypes the issue type scheme have. */
  expand?: string;
  /** String used to perform a case-insensitive partial match with issue type scheme name. */
  queryString?: string;
};
export type CreateIssueTypeSchemeApiResponse =
  /** status 201 Returned if the request is successful. */ IssueTypeSchemeId;
export type CreateIssueTypeSchemeApiArg = {
  issueTypeSchemeDetails: IssueTypeSchemeDetails;
};
export type GetIssueTypeSchemesMappingApiResponse =
  /** status 200 Returned if the request is successful. */ PageBeanIssueTypeSchemeMapping;
export type GetIssueTypeSchemesMappingApiArg = {
  /** The index of the first item to return in a page of results (page offset). */
  startAt?: number;
  /** The maximum number of items to return per page. */
  maxResults?: number;
  /** The list of issue type scheme IDs. To include multiple IDs, provide an ampersand-separated list. For example, `issueTypeSchemeId=10000&issueTypeSchemeId=10001`. */
  issueTypeSchemeId?: number[];
};
export type GetIssueTypeSchemeForProjectsApiResponse =
  /** status 200 Returned if the request is successful. */ PageBeanIssueTypeSchemeProjects;
export type GetIssueTypeSchemeForProjectsApiArg = {
  /** The index of the first item to return in a page of results (page offset). */
  startAt?: number;
  /** The maximum number of items to return per page. */
  maxResults?: number;
  /** The list of project IDs. To include multiple project IDs, provide an ampersand-separated list. For example, `projectId=10000&projectId=10001`. */
  projectId: number[];
};
export type AssignIssueTypeSchemeToProjectApiResponse =
  /** status 204 Returned if the request is successful. */ any;
export type AssignIssueTypeSchemeToProjectApiArg = {
  issueTypeSchemeProjectAssociation: IssueTypeSchemeProjectAssociation;
};
export type UpdateIssueTypeSchemeApiResponse =
  /** status 204 Returned if the request is successful. */ any;
export type UpdateIssueTypeSchemeApiArg = {
  /** The ID of the issue type scheme. */
  issueTypeSchemeId: number;
  issueTypeSchemeUpdateDetails: IssueTypeSchemeUpdateDetails;
};
export type DeleteIssueTypeSchemeApiResponse =
  /** status 204 Returned if the issue type scheme is deleted. */ any;
export type DeleteIssueTypeSchemeApiArg = {
  /** The ID of the issue type scheme. */
  issueTypeSchemeId: number;
};
export type AddIssueTypesToIssueTypeSchemeApiResponse =
  /** status 204 Returned if the request is successful. */ any;
export type AddIssueTypesToIssueTypeSchemeApiArg = {
  /** The ID of the issue type scheme. */
  issueTypeSchemeId: number;
  issueTypeIds: IssueTypeIds;
};
export type ReorderIssueTypesInIssueTypeSchemeApiResponse =
  /** status 204 Returned if the request is successful. */ any;
export type ReorderIssueTypesInIssueTypeSchemeApiArg = {
  /** The ID of the issue type scheme. */
  issueTypeSchemeId: number;
  orderOfIssueTypes: OrderOfIssueTypes;
};
export type RemoveIssueTypeFromIssueTypeSchemeApiResponse =
  /** status 204 Returned if the request is successful. */ any;
export type RemoveIssueTypeFromIssueTypeSchemeApiArg = {
  /** The ID of the issue type scheme. */
  issueTypeSchemeId: number;
  /** The ID of the issue type. */
  issueTypeId: number;
};
export type GetIssueTypeScreenSchemesApiResponse =
  /** status 200 Returned if the request is successful. */ PageBeanIssueTypeScreenScheme;
export type GetIssueTypeScreenSchemesApiArg = {
  /** The index of the first item to return in a page of results (page offset). */
  startAt?: number;
  /** The maximum number of items to return per page. */
  maxResults?: number;
  /** The list of issue type screen scheme IDs. To include multiple IDs, provide an ampersand-separated list. For example, `id=10000&id=10001`. */
  id?: number[];
  /** String used to perform a case-insensitive partial match with issue type screen scheme name. */
  queryString?: string;
  /** [Order](#ordering) the results by a field:
    
     *  `name` Sorts by issue type screen scheme name.
     *  `id` Sorts by issue type screen scheme ID. */
  orderBy?: "name" | "-name" | "+name" | "id" | "-id" | "+id";
  /** Use [expand](#expansion) to include additional information in the response. This parameter accepts `projects` that, for each issue type screen schemes, returns information about the projects the issue type screen scheme is assigned to. */
  expand?: string;
};
export type CreateIssueTypeScreenSchemeApiResponse =
  /** status 201 Returned if the request is successful. */ IssueTypeScreenSchemeId;
export type CreateIssueTypeScreenSchemeApiArg = {
  /** An issue type screen scheme bean. */
  issueTypeScreenSchemeDetails: IssueTypeScreenSchemeDetails;
};
export type GetIssueTypeScreenSchemeMappingsApiResponse =
  /** status 200 Returned if the request is successful. */ PageBeanIssueTypeScreenSchemeItem;
export type GetIssueTypeScreenSchemeMappingsApiArg = {
  /** The index of the first item to return in a page of results (page offset). */
  startAt?: number;
  /** The maximum number of items to return per page. */
  maxResults?: number;
  /** The list of issue type screen scheme IDs. To include multiple issue type screen schemes, separate IDs with ampersand: `issueTypeScreenSchemeId=10000&issueTypeScreenSchemeId=10001`. */
  issueTypeScreenSchemeId?: number[];
};
export type GetIssueTypeScreenSchemeProjectAssociationsApiResponse =
  /** status 200 Returned if the request is successful. */ PageBeanIssueTypeScreenSchemesProjects;
export type GetIssueTypeScreenSchemeProjectAssociationsApiArg = {
  /** The index of the first item to return in a page of results (page offset). */
  startAt?: number;
  /** The maximum number of items to return per page. */
  maxResults?: number;
  /** The list of project IDs. To include multiple projects, separate IDs with ampersand: `projectId=10000&projectId=10001`. */
  projectId: number[];
};
export type AssignIssueTypeScreenSchemeToProjectApiResponse =
  /** status 204 Returned if the request is successful. */ any;
export type AssignIssueTypeScreenSchemeToProjectApiArg = {
  issueTypeScreenSchemeProjectAssociation: IssueTypeScreenSchemeProjectAssociation;
};
export type UpdateIssueTypeScreenSchemeApiResponse =
  /** status 204 Returned if the request is successful. */ any;
export type UpdateIssueTypeScreenSchemeApiArg = {
  /** The ID of the issue type screen scheme. */
  issueTypeScreenSchemeId: string;
  /** The issue type screen scheme update details. */
  issueTypeScreenSchemeUpdateDetails: IssueTypeScreenSchemeUpdateDetails;
};
export type DeleteIssueTypeScreenSchemeApiResponse =
  /** status 204 Returned if the issue type screen scheme is deleted. */ any;
export type DeleteIssueTypeScreenSchemeApiArg = {
  /** The ID of the issue type screen scheme. */
  issueTypeScreenSchemeId: string;
};
export type AppendMappingsForIssueTypeScreenSchemeApiResponse =
  /** status 204 Returned if the request is successful. */ any;
export type AppendMappingsForIssueTypeScreenSchemeApiArg = {
  /** The ID of the issue type screen scheme. */
  issueTypeScreenSchemeId: string;
  issueTypeScreenSchemeMappingDetails: IssueTypeScreenSchemeMappingDetails;
};
export type UpdateDefaultScreenSchemeApiResponse =
  /** status 204 Returned if the request is successful. */ any;
export type UpdateDefaultScreenSchemeApiArg = {
  /** The ID of the issue type screen scheme. */
  issueTypeScreenSchemeId: string;
  updateDefaultScreenScheme: UpdateDefaultScreenScheme;
};
export type RemoveMappingsFromIssueTypeScreenSchemeApiResponse =
  /** status 204 Returned if the screen scheme mappings are removed from the issue type screen scheme. */ any;
export type RemoveMappingsFromIssueTypeScreenSchemeApiArg = {
  /** The ID of the issue type screen scheme. */
  issueTypeScreenSchemeId: string;
  issueTypeIds: IssueTypeIds;
};
export type GetProjectsForIssueTypeScreenSchemeApiResponse =
  /** status 200 Returned if the request is successful. */ PageBeanProjectDetails;
export type GetProjectsForIssueTypeScreenSchemeApiArg = {
  /** The ID of the issue type screen scheme. */
  issueTypeScreenSchemeId: number;
  /** The index of the first item to return in a page of results (page offset). */
  startAt?: number;
  /** The maximum number of items to return per page. */
  maxResults?: number;
  query?: string;
};
export type GetAutoCompleteApiResponse =
  /** status 200 Returned if the request is successful. */ JqlReferenceData;
export type GetAutoCompleteApiArg = void;
export type GetAutoCompletePostApiResponse =
  /** status 200 Returned if the request is successful. */ JqlReferenceData;
export type GetAutoCompletePostApiArg = {
  searchAutoCompleteFilter: SearchAutoCompleteFilter;
};
export type GetFieldAutoCompleteForQueryStringApiResponse =
  /** status 200 Returned if the request is successful. */ AutoCompleteSuggestions;
export type GetFieldAutoCompleteForQueryStringApiArg = {
  /** The name of the field. */
  fieldName?: string;
  /** The partial field item name entered by the user. */
  fieldValue?: string;
  /** The name of the [ CHANGED operator predicate](https://confluence.atlassian.com/x/hQORLQ#Advancedsearching-operatorsreference-CHANGEDCHANGED) for which the suggestions are generated. The valid predicate operators are *by*, *from*, and *to*. */
  predicateName?: string;
  /** The partial predicate item name entered by the user. */
  predicateValue?: string;
};
export type MatchIssuesApiResponse =
  /** status 200 Returned if the request is successful. */ IssueMatches;
export type MatchIssuesApiArg = {
  issuesAndJqlQueries: IssuesAndJqlQueries;
};
export type ParseJqlQueriesApiResponse =
  /** status 200 Returned if the request is successful. */ ParsedJqlQueries;
export type ParseJqlQueriesApiArg = {
  /** How to validate the JQL query and treat the validation results. Validation options include:
    
     *  `strict` Returns all errors. If validation fails, the query structure is not returned.
     *  `warn` Returns all errors. If validation fails but the JQL query is correctly formed, the query structure is returned.
     *  `none` No validation is performed. If JQL query is correctly formed, the query structure is returned. */
  validation?: "strict" | "warn" | "none";
  jqlQueriesToParse: JqlQueriesToParse;
};
export type MigrateQueriesApiResponse =
  /** status 200 Returned if the request is successful. Note that the JQL queries are returned in the same order that they were passed. */ ConvertedJqlQueries;
export type MigrateQueriesApiArg = {
  jqlPersonalDataMigrationRequest: JqlPersonalDataMigrationRequest;
};
export type SanitiseJqlQueriesApiResponse =
  /** status 200 Returned if the request is successful. */ SanitizedJqlQueries;
export type SanitiseJqlQueriesApiArg = {
  jqlQueriesToSanitize: JqlQueriesToSanitize;
};
export type GetAllLabelsApiResponse =
  /** status 200 Returned if the request is successful. */ PageBeanString;
export type GetAllLabelsApiArg = {
  /** The index of the first item to return in a page of results (page offset). */
  startAt?: number;
  /** The maximum number of items to return per page. */
  maxResults?: number;
};
export type GetMyPermissionsApiResponse =
  /** status 200 Returned if the request is successful. */ Permissions;
export type GetMyPermissionsApiArg = {
  /** The key of project. Ignored if `projectId` is provided. */
  projectKey?: string;
  /** The ID of project. */
  projectId?: string;
  /** The key of the issue. Ignored if `issueId` is provided. */
  issueKey?: string;
  /** The ID of the issue. */
  issueId?: string;
  /** A list of permission keys. (Required) This parameter accepts a comma-separated list. To get the list of available permissions, use [Get all permissions](#api-rest-api-3-permissions-get). */
  permissions?: string;
  projectUuid?: string;
  projectConfigurationUuid?: string;
  /** The ID of the comment. */
  commentId?: string;
};
export type GetPreferenceApiResponse =
  /** status 200 Returned if the request is successful. */ string;
export type GetPreferenceApiArg = {
  /** The key of the preference. */
  key: string;
};
export type SetPreferenceApiResponse =
  /** status 204 Returned if the request is successful. */ any;
export type SetPreferenceApiArg = {
  /** The key of the preference. The maximum length is 255 characters. */
  key: string;
  /** The value of the preference as a plain text string. The maximum length is 255 characters. */
  body: string;
};
export type RemovePreferenceApiResponse = unknown;
export type RemovePreferenceApiArg = {
  /** The key of the preference. */
  key: string;
};
export type GetLocaleApiResponse =
  /** status 200 Returned if the request is successful. */ Locale;
export type GetLocaleApiArg = void;
export type SetLocaleApiResponse =
  /** status 204 Returned if the request is successful. */ any;
export type SetLocaleApiArg = {
  /** The locale defined in a LocaleBean. */
  locale: Locale;
};
export type DeleteLocaleApiResponse =
  /** status 204 Returned if the request is successful. */ any;
export type DeleteLocaleApiArg = void;
export type GetCurrentUserApiResponse =
  /** status 200 Returned if the request is successful. */ User;
export type GetCurrentUserApiArg = {
  /** Use [expand](#expansion) to include additional information about user in the response. This parameter accepts a comma-separated list. Expand options include:
    
     *  `groups` Returns all groups, including nested groups, the user belongs to.
     *  `applicationRoles` Returns the application roles the user is assigned to. */
  expand?: string;
};
export type GetNotificationSchemesApiResponse =
  /** status 200 Returned if the request is successful. Only returns notification schemes that the user has permission to access. An empty list is returned if the user lacks permission to access all notification schemes. */ PageBeanNotificationScheme;
export type GetNotificationSchemesApiArg = {
  /** The index of the first item to return in a page of results (page offset). */
  startAt?: number;
  /** The maximum number of items to return per page. */
  maxResults?: number;
  /** Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Expand options include:
    
     *  `all` Returns all expandable information.
     *  `field` Returns information about any custom fields assigned to receive an event.
     *  `group` Returns information about any groups assigned to receive an event.
     *  `notificationSchemeEvents` Returns a list of event associations. This list is returned for all expandable information.
     *  `projectRole` Returns information about any project roles assigned to receive an event.
     *  `user` Returns information about any users assigned to receive an event. */
  expand?: string;
};
export type GetNotificationSchemeApiResponse =
  /** status 200 Returned if the request is successful. */ NotificationScheme;
export type GetNotificationSchemeApiArg = {
  /** The ID of the notification scheme. Use [Get notification schemes paginated](#api-rest-api-3-notificationscheme-get) to get a list of notification scheme IDs. */
  id: number;
  /** Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Expand options include:
    
     *  `all` Returns all expandable information.
     *  `field` Returns information about any custom fields assigned to receive an event.
     *  `group` Returns information about any groups assigned to receive an event.
     *  `notificationSchemeEvents` Returns a list of event associations. This list is returned for all expandable information.
     *  `projectRole` Returns information about any project roles assigned to receive an event.
     *  `user` Returns information about any users assigned to receive an event. */
  expand?: string;
};
export type GetAllPermissionsApiResponse =
  /** status 200 Returned if the request is successful. */ Permissions;
export type GetAllPermissionsApiArg = void;
export type GetBulkPermissionsApiResponse =
  /** status 200 Returned if the request is successful. */ BulkPermissionGrants;
export type GetBulkPermissionsApiArg = {
  /** Details of the permissions to check. */
  bulkPermissionsRequestBean: BulkPermissionsRequestBean;
};
export type GetPermittedProjectsApiResponse =
  /** status 200 Returned if the request is successful. */ PermittedProjects;
export type GetPermittedProjectsApiArg = {
  permissionsKeysBean: PermissionsKeysBean;
};
export type GetAllPermissionSchemesApiResponse =
  /** status 200 Returned if the request is successful. */ PermissionSchemes;
export type GetAllPermissionSchemesApiArg = {
  /** Use expand to include additional information in the response. This parameter accepts a comma-separated list. Note that permissions are included when you specify any value. Expand options include:
    
     *  `all` Returns all expandable information.
     *  `field` Returns information about the custom field granted the permission.
     *  `group` Returns information about the group that is granted the permission.
     *  `permissions` Returns all permission grants for each permission scheme.
     *  `projectRole` Returns information about the project role granted the permission.
     *  `user` Returns information about the user who is granted the permission. */
  expand?: string;
};
export type CreatePermissionSchemeApiResponse =
  /** status 201 Returned if the permission scheme is created. */ PermissionScheme;
export type CreatePermissionSchemeApiArg = {
  /** Use expand to include additional information in the response. This parameter accepts a comma-separated list. Note that permissions are always included when you specify any value. Expand options include:
    
     *  `all` Returns all expandable information.
     *  `field` Returns information about the custom field granted the permission.
     *  `group` Returns information about the group that is granted the permission.
     *  `permissions` Returns all permission grants for each permission scheme.
     *  `projectRole` Returns information about the project role granted the permission.
     *  `user` Returns information about the user who is granted the permission. */
  expand?: string;
  /** The permission scheme to create. */
  permissionScheme: PermissionScheme;
};
export type GetPermissionSchemeApiResponse =
  /** status 200 Returned if the request is successful. */ PermissionScheme;
export type GetPermissionSchemeApiArg = {
  /** The ID of the permission scheme to return. */
  schemeId: number;
  /** Use expand to include additional information in the response. This parameter accepts a comma-separated list. Note that permissions are included when you specify any value. Expand options include:
    
     *  `all` Returns all expandable information.
     *  `field` Returns information about the custom field granted the permission.
     *  `group` Returns information about the group that is granted the permission.
     *  `permissions` Returns all permission grants for each permission scheme.
     *  `projectRole` Returns information about the project role granted the permission.
     *  `user` Returns information about the user who is granted the permission. */
  expand?: string;
};
export type UpdatePermissionSchemeApiResponse =
  /** status 200 Returned if the scheme is updated. */ PermissionScheme;
export type UpdatePermissionSchemeApiArg = {
  /** The ID of the permission scheme to update. */
  schemeId: number;
  /** Use expand to include additional information in the response. This parameter accepts a comma-separated list. Note that permissions are always included when you specify any value. Expand options include:
    
     *  `all` Returns all expandable information.
     *  `field` Returns information about the custom field granted the permission.
     *  `group` Returns information about the group that is granted the permission.
     *  `permissions` Returns all permission grants for each permission scheme.
     *  `projectRole` Returns information about the project role granted the permission.
     *  `user` Returns information about the user who is granted the permission. */
  expand?: string;
  permissionScheme: PermissionScheme;
};
export type DeletePermissionSchemeApiResponse = unknown;
export type DeletePermissionSchemeApiArg = {
  /** The ID of the permission scheme being deleted. */
  schemeId: number;
};
export type GetPermissionSchemeGrantsApiResponse =
  /** status 200 Returned if the request is successful. */ PermissionGrants;
export type GetPermissionSchemeGrantsApiArg = {
  /** The ID of the permission scheme. */
  schemeId: number;
  /** Use expand to include additional information in the response. This parameter accepts a comma-separated list. Note that permissions are always included when you specify any value. Expand options include:
    
     *  `permissions` Returns all permission grants for each permission scheme.
     *  `user` Returns information about the user who is granted the permission.
     *  `group` Returns information about the group that is granted the permission.
     *  `projectRole` Returns information about the project role granted the permission.
     *  `field` Returns information about the custom field granted the permission.
     *  `all` Returns all expandable information. */
  expand?: string;
};
export type CreatePermissionGrantApiResponse =
  /** status 201 Returned if the scheme permission is created. */ PermissionGrant;
export type CreatePermissionGrantApiArg = {
  /** The ID of the permission scheme in which to create a new permission grant. */
  schemeId: number;
  /** Use expand to include additional information in the response. This parameter accepts a comma-separated list. Note that permissions are always included when you specify any value. Expand options include:
    
     *  `permissions` Returns all permission grants for each permission scheme.
     *  `user` Returns information about the user who is granted the permission.
     *  `group` Returns information about the group that is granted the permission.
     *  `projectRole` Returns information about the project role granted the permission.
     *  `field` Returns information about the custom field granted the permission.
     *  `all` Returns all expandable information. */
  expand?: string;
  /** The permission grant to create. */
  permissionGrant: PermissionGrant;
};
export type GetPermissionSchemeGrantApiResponse =
  /** status 200 Returned if the request is successful. */ PermissionGrant;
export type GetPermissionSchemeGrantApiArg = {
  /** The ID of the permission scheme. */
  schemeId: number;
  /** The ID of the permission grant. */
  permissionId: number;
  /** Use expand to include additional information in the response. This parameter accepts a comma-separated list. Note that permissions are always included when you specify any value. Expand options include:
    
     *  `all` Returns all expandable information.
     *  `field` Returns information about the custom field granted the permission.
     *  `group` Returns information about the group that is granted the permission.
     *  `permissions` Returns all permission grants for each permission scheme.
     *  `projectRole` Returns information about the project role granted the permission.
     *  `user` Returns information about the user who is granted the permission. */
  expand?: string;
};
export type DeletePermissionSchemeEntityApiResponse = unknown;
export type DeletePermissionSchemeEntityApiArg = {
  /** The ID of the permission scheme to delete the permission grant from. */
  schemeId: number;
  /** The ID of the permission grant to delete. */
  permissionId: number;
};
export type GetPrioritiesApiResponse =
  /** status 200 Returned if the request is successful. */ Priority[];
export type GetPrioritiesApiArg = void;
export type CreatePriorityApiResponse =
  /** status 201 Returned if the request is successful. */ PriorityId;
export type CreatePriorityApiArg = {
  createPriorityDetails: CreatePriorityDetails;
};
export type SearchPrioritiesApiResponse =
  /** status 200 Returned if the request is successful. */ PageBeanPriority;
export type SearchPrioritiesApiArg = {
  /** The index of the first item to return in a page of results (page offset). */
  startAt?: number;
  /** The maximum number of items to return per page. */
  maxResults?: number;
  /** The list of priority IDs. To include multiple IDs, provide an ampersand-separated list. For example, `id=2&id=3`. */
  id?: string[];
  /** Whether only the default priority is returned. */
  onlyDefault?: boolean;
};
export type GetPriorityApiResponse =
  /** status 200 Returned if the request is successful. */ Priority;
export type GetPriorityApiArg = {
  /** The ID of the issue priority. */
  id: string;
};
export type UpdatePriorityApiResponse =
  /** status 204 Returned if the request is successful. */ any;
export type UpdatePriorityApiArg = {
  /** The ID of the issue priority. */
  id: string;
  updatePriorityDetails: UpdatePriorityDetails;
};
export type GetAllProjectsApiResponse =
  /** status 200 Returned if the request is successful. */ Project[];
export type GetAllProjectsApiArg = {
  /** Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Expanded options include:
    
     *  `description` Returns the project description.
     *  `issueTypes` Returns all issue types associated with the project.
     *  `lead` Returns information about the project lead.
     *  `projectKeys` Returns all project keys associated with the project. */
  expand?: string;
  /** Returns the user's most recently accessed projects. You may specify the number of results to return up to a maximum of 20. If access is anonymous, then the recently accessed projects are based on the current HTTP session. */
  recent?: number;
  /** A list of project properties to return for the project. This parameter accepts a comma-separated list. */
  properties?: string[];
};
export type CreateProjectApiResponse =
  /** status 201 Returned if the project is created. */ ProjectIdentifiers;
export type CreateProjectApiArg = {
  /** The JSON representation of the project being created. */
  createProjectDetails: CreateProjectDetails;
};
export type GetRecentApiResponse =
  /** status 200 Returned if the request is successful. */ Project[];
export type GetRecentApiArg = {
  /** Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Expanded options include:
    
     *  `description` Returns the project description.
     *  `projectKeys` Returns all project keys associated with a project.
     *  `lead` Returns information about the project lead.
     *  `issueTypes` Returns all issue types associated with the project.
     *  `url` Returns the URL associated with the project.
     *  `permissions` Returns the permissions associated with the project.
     *  `insight` EXPERIMENTAL. Returns the insight details of total issue count and last issue update time for the project.
     *  `*` Returns the project with all available expand options. */
  expand?: string;
  /** EXPERIMENTAL. A list of project properties to return for the project. This parameter accepts a comma-separated list. Invalid property names are ignored. */
  properties?: StringList[];
};
export type SearchProjectsApiResponse =
  /** status 200 Returned if the request is successful. */ PageBeanProject;
export type SearchProjectsApiArg = {
  /** The index of the first item to return in a page of results (page offset). */
  startAt?: number;
  /** The maximum number of items to return per page. */
  maxResults?: number;
  /** [Order](#ordering) the results by a field.
    
     *  `category` Sorts by project category. A complete list of category IDs is found using [Get all project categories](#api-rest-api-3-projectCategory-get).
     *  `issueCount` Sorts by the total number of issues in each project.
     *  `key` Sorts by project key.
     *  `lastIssueUpdatedTime` Sorts by the last issue update time.
     *  `name` Sorts by project name.
     *  `owner` Sorts by project lead.
     *  `archivedDate` EXPERIMENTAL. Sorts by project archived date.
     *  `deletedDate` EXPERIMENTAL. Sorts by project deleted date. */
  orderBy?:
    | "category"
    | "-category"
    | "+category"
    | "key"
    | "-key"
    | "+key"
    | "name"
    | "-name"
    | "+name"
    | "owner"
    | "-owner"
    | "+owner"
    | "issueCount"
    | "-issueCount"
    | "+issueCount"
    | "lastIssueUpdatedDate"
    | "-lastIssueUpdatedDate"
    | "+lastIssueUpdatedDate"
    | "archivedDate"
    | "+archivedDate"
    | "-archivedDate"
    | "deletedDate"
    | "+deletedDate"
    | "-deletedDate";
  /** The project IDs to filter the results by. To include multiple IDs, provide an ampersand-separated list. For example, `id=10000&id=10001`. Up to 50 project IDs can be provided. */
  id?: number[];
  /** The project keys to filter the results by. To include multiple keys, provide an ampersand-separated list. For example, `keys=PA&keys=PB`. Up to 50 project keys can be provided. */
  keys?: string[];
  /** Filter the results using a literal string. Projects with a matching `key` or `name` are returned (case insensitive). */
  query?: string;
  /** Orders results by the [project type](https://confluence.atlassian.com/x/GwiiLQ#Jiraapplicationsoverview-Productfeaturesandprojecttypes). This parameter accepts a comma-separated list. Valid values are `business`, `service_desk`, and `software`. */
  typeKey?: string;
  /** The ID of the project's category. A complete list of category IDs is found using the [Get all project categories](#api-rest-api-3-projectCategory-get) operation. */
  categoryId?: number;
  /** Filter results by projects for which the user can:
    
     *  `view` the project, meaning that they have one of the following permissions:
        
         *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project.
         *  *Administer projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project.
         *  *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     *  `browse` the project, meaning that they have the *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project.
     *  `edit` the project, meaning that they have one of the following permissions:
        
         *  *Administer projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project.
         *  *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). */
  action?: "view" | "browse" | "edit";
  /** Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Expanded options include:
    
     *  `description` Returns the project description.
     *  `projectKeys` Returns all project keys associated with a project.
     *  `lead` Returns information about the project lead.
     *  `issueTypes` Returns all issue types associated with the project.
     *  `url` Returns the URL associated with the project.
     *  `insight` EXPERIMENTAL. Returns the insight details of total issue count and last issue update time for the project. */
  expand?: string;
  /** EXPERIMENTAL. Filter results by project status:
    
     *  `live` Search live projects.
     *  `archived` Search archived projects.
     *  `deleted` Search deleted projects, those in the recycle bin. */
  status?: ("live" | "archived" | "deleted")[];
  /** EXPERIMENTAL. A list of project properties to return for the project. This parameter accepts a comma-separated list. */
  properties?: StringList[];
  /** EXPERIMENTAL. A query string used to search properties. The query string cannot be specified using a JSON object. For example, to search for the value of `nested` from `{"something":{"nested":1,"other":2}}` use `[thepropertykey].something.nested=1`. Note that the propertyQuery key is enclosed in square brackets to enable searching where the propertyQuery key includes dot (.) or equals (=) characters. Note that `thepropertykey` is only returned when included in `properties`. */
  propertyQuery?: string;
};
export type GetAllProjectTypesApiResponse =
  /** status 200 Returned if the request is successful. */ ProjectType[];
export type GetAllProjectTypesApiArg = void;
export type GetAllAccessibleProjectTypesApiResponse =
  /** status 200 Returned if the request is successful. */ ProjectType[];
export type GetAllAccessibleProjectTypesApiArg = void;
export type GetProjectTypeByKeyApiResponse =
  /** status 200 Returned if the request is successful. */ ProjectType;
export type GetProjectTypeByKeyApiArg = {
  /** The key of the project type. */
  projectTypeKey:
    | "software"
    | "service_desk"
    | "business"
    | "product_discovery";
};
export type GetAccessibleProjectTypeByKeyApiResponse =
  /** status 200 Returned if the request is successful. */ ProjectType;
export type GetAccessibleProjectTypeByKeyApiArg = {
  /** The key of the project type. */
  projectTypeKey:
    | "software"
    | "service_desk"
    | "business"
    | "product_discovery";
};
export type GetProjectApiResponse =
  /** status 200 Returned if successful. */ Project;
export type GetProjectApiArg = {
  /** The project ID or project key (case sensitive). */
  projectIdOrKey: string;
  /** Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Note that the project description, issue types, and project lead are included in all responses by default. Expand options include:
    
     *  `description` The project description.
     *  `issueTypes` The issue types associated with the project.
     *  `lead` The project lead.
     *  `projectKeys` All project keys associated with the project.
     *  `issueTypeHierarchy` The project issue type hierarchy. */
  expand?: string;
  /** A list of project properties to return for the project. This parameter accepts a comma-separated list. */
  properties?: string[];
};
export type UpdateProjectApiResponse =
  /** status 200 Returned if the project is updated. */ Project;
export type UpdateProjectApiArg = {
  /** The project ID or project key (case sensitive). */
  projectIdOrKey: string;
  /** Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Note that the project description, issue types, and project lead are included in all responses by default. Expand options include:
    
     *  `description` The project description.
     *  `issueTypes` The issue types associated with the project.
     *  `lead` The project lead.
     *  `projectKeys` All project keys associated with the project. */
  expand?: string;
  /** The project details to be updated. */
  updateProjectDetails: UpdateProjectDetails;
};
export type DeleteProjectApiResponse = unknown;
export type DeleteProjectApiArg = {
  /** The project ID or project key (case sensitive). */
  projectIdOrKey: string;
  /** Whether this project is placed in the Jira recycle bin where it will be available for restoration. */
  enableUndo?: boolean;
};
export type ArchiveProjectApiResponse =
  /** status 204 Returned if the request is successful. */ any;
export type ArchiveProjectApiArg = {
  /** The project ID or project key (case sensitive). */
  projectIdOrKey: string;
};
export type UpdateProjectAvatarApiResponse =
  /** status 204 Returned if the request is successful. */ any;
export type UpdateProjectAvatarApiArg = {
  /** The ID or (case-sensitive) key of the project. */
  projectIdOrKey: string;
  avatar: Avatar;
};
export type DeleteProjectAvatarApiResponse = unknown;
export type DeleteProjectAvatarApiArg = {
  /** The project ID or (case-sensitive) key. */
  projectIdOrKey: string;
  /** The ID of the avatar. */
  id: number;
};
export type CreateProjectAvatarApiResponse =
  /** status 201 Returned if the request is successful. */ Avatar;
export type CreateProjectAvatarApiArg = {
  /** The ID or (case-sensitive) key of the project. */
  projectIdOrKey: string;
  /** The X coordinate of the top-left corner of the crop region. */
  x?: number;
  /** The Y coordinate of the top-left corner of the crop region. */
  y?: number;
  /** The length of each side of the crop region. */
  size?: number;
  body: any;
};
export type GetAllProjectAvatarsApiResponse =
  /** status 200 Returned if request is successful. */ ProjectAvatars;
export type GetAllProjectAvatarsApiArg = {
  /** The ID or (case-sensitive) key of the project. */
  projectIdOrKey: string;
};
export type GetProjectComponentsPaginatedApiResponse =
  /** status 200 Returned if the request is successful. */ PageBeanComponentWithIssueCount;
export type GetProjectComponentsPaginatedApiArg = {
  /** The project ID or project key (case sensitive). */
  projectIdOrKey: string;
  /** The index of the first item to return in a page of results (page offset). */
  startAt?: number;
  /** The maximum number of items to return per page. */
  maxResults?: number;
  /** [Order](#ordering) the results by a field:
    
     *  `description` Sorts by the component description.
     *  `issueCount` Sorts by the count of issues associated with the component.
     *  `lead` Sorts by the user key of the component's project lead.
     *  `name` Sorts by component name. */
  orderBy?:
    | "description"
    | "-description"
    | "+description"
    | "issueCount"
    | "-issueCount"
    | "+issueCount"
    | "lead"
    | "-lead"
    | "+lead"
    | "name"
    | "-name"
    | "+name";
  /** Filter the results using a literal string. Components with a matching `name` or `description` are returned (case insensitive). */
  query?: string;
};
export type GetProjectComponentsApiResponse =
  /** status 200 Returned if the request is successful. */ ProjectComponent[];
export type GetProjectComponentsApiArg = {
  /** The project ID or project key (case sensitive). */
  projectIdOrKey: string;
};
export type DeleteProjectAsynchronouslyApiResponse = unknown;
export type DeleteProjectAsynchronouslyApiArg = {
  /** The project ID or project key (case sensitive). */
  projectIdOrKey: string;
};
export type GetFeaturesForProjectApiResponse =
  /** status 200 Returned if the request is successful. */ ContainerForProjectFeatures;
export type GetFeaturesForProjectApiArg = {
  /** The ID or (case-sensitive) key of the project. */
  projectIdOrKey: string;
};
export type ToggleFeatureForProjectApiResponse =
  /** status 200 Returned if the request is successful. */ ContainerForProjectFeatures;
export type ToggleFeatureForProjectApiArg = {
  /** The ID or (case-sensitive) key of the project. */
  projectIdOrKey: string;
  /** The key of the feature. */
  featureKey: string;
  /** Details of the feature state change. */
  projectFeatureState: ProjectFeatureState;
};
export type GetProjectPropertyKeysApiResponse =
  /** status 200 Returned if the request is successful. */ PropertyKeys;
export type GetProjectPropertyKeysApiArg = {
  /** The project ID or project key (case sensitive). */
  projectIdOrKey: string;
};
export type GetProjectPropertyApiResponse =
  /** status 200 Returned if the request is successful. */ EntityProperty;
export type GetProjectPropertyApiArg = {
  /** The project ID or project key (case sensitive). */
  projectIdOrKey: string;
  /** The project property key. Use [Get project property keys](#api-rest-api-3-project-projectIdOrKey-properties-get) to get a list of all project property keys. */
  propertyKey: string;
};
export type SetProjectPropertyApiResponse =
  /** status 200 Returned if the project property is updated. */
    | any
    | /** status 201 Returned if the project property is created. */ any;
export type SetProjectPropertyApiArg = {
  /** The project ID or project key (case sensitive). */
  projectIdOrKey: string;
  /** The key of the project property. The maximum length is 255 characters. */
  propertyKey: string;
  body: any;
};
export type DeleteProjectPropertyApiResponse = unknown;
export type DeleteProjectPropertyApiArg = {
  /** The project ID or project key (case sensitive). */
  projectIdOrKey: string;
  /** The project property key. Use [Get project property keys](#api-rest-api-3-project-projectIdOrKey-properties-get) to get a list of all project property keys. */
  propertyKey: string;
};
export type RestoreApiResponse =
  /** status 200 Returned if the request is successful. */ Project;
export type RestoreApiArg = {
  /** The project ID or project key (case sensitive). */
  projectIdOrKey: string;
};
export type GetProjectRolesApiResponse =
  /** status 200 Returned if the request is successful. */ {
    [key: string]: string;
  };
export type GetProjectRolesApiArg = {
  /** The project ID or project key (case sensitive). */
  projectIdOrKey: string;
};
export type GetProjectRoleApiResponse =
  /** status 200 Returned if the request is successful. */ ProjectRole;
export type GetProjectRoleApiArg = {
  /** The project ID or project key (case sensitive). */
  projectIdOrKey: string;
  /** The ID of the project role. Use [Get all project roles](#api-rest-api-3-role-get) to get a list of project role IDs. */
  id: number;
  /** Exclude inactive users. */
  excludeInactiveUsers?: boolean;
};
export type SetActorsApiResponse =
  /** status 200 Returned if the request is successful. The complete list of actors for the project is returned. */ ProjectRole;
export type SetActorsApiArg = {
  /** The project ID or project key (case sensitive). */
  projectIdOrKey: string;
  /** The ID of the project role. Use [Get all project roles](#api-rest-api-3-role-get) to get a list of project role IDs. */
  id: number;
  /** The groups or users to associate with the project role for this project. Provide the user account ID, group name, or group ID. As a group's name can change, use of group ID is recommended. */
  projectRoleActorsUpdateBean: ProjectRoleActorsUpdateBean;
};
export type AddActorUsersApiResponse =
  /** status 200 Returned if the request is successful. The complete list of actors for the project is returned.

For example, the cURL request above adds a group, *jira-developers*. For the response below to be returned as a result of that request, the user *Mia Krystof* would have previously been added as a `user` actor for this project. */ ProjectRole;
export type AddActorUsersApiArg = {
  /** The project ID or project key (case sensitive). */
  projectIdOrKey: string;
  /** The ID of the project role. Use [Get all project roles](#api-rest-api-3-role-get) to get a list of project role IDs. */
  id: number;
  /** The groups or users to associate with the project role for this project. Provide the user account ID, group name, or group ID. As a group's name can change, use of group ID is recommended. */
  actorsMap: ActorsMap;
};
export type DeleteActorApiResponse = unknown;
export type DeleteActorApiArg = {
  /** The project ID or project key (case sensitive). */
  projectIdOrKey: string;
  /** The ID of the project role. Use [Get all project roles](#api-rest-api-3-role-get) to get a list of project role IDs. */
  id: number;
  /** The user account ID of the user to remove from the project role. */
  user?: string;
  /** The name of the group to remove from the project role. This parameter cannot be used with the `groupId` parameter. As a group's name can change, use of `groupId` is recommended. */
  group?: string;
  /** The ID of the group to remove from the project role. This parameter cannot be used with the `group` parameter. */
  groupId?: string;
};
export type GetProjectRoleDetailsApiResponse =
  /** status 200 Returned if the request is successful. */ ProjectRoleDetails[];
export type GetProjectRoleDetailsApiArg = {
  /** The project ID or project key (case sensitive). */
  projectIdOrKey: string;
  /** Whether the roles should be filtered to include only those the user is assigned to. */
  currentMember?: boolean;
  excludeConnectAddons?: boolean;
};
export type GetAllStatusesApiResponse =
  /** status 200 Returned if the request is successful. */ IssueTypeWithStatus[];
export type GetAllStatusesApiArg = {
  /** The project ID or project key (case sensitive). */
  projectIdOrKey: string;
};
export type UpdateProjectTypeApiResponse =
  /** status 200 Returned if the project type is updated. */ Project;
export type UpdateProjectTypeApiArg = {
  /** The project ID or project key (case sensitive). */
  projectIdOrKey: string;
  /** The key of the new project type. */
  newProjectTypeKey: "software" | "service_desk" | "business";
};
export type GetProjectVersionsPaginatedApiResponse =
  /** status 200 Returned if the request is successful. */ PageBeanVersion;
export type GetProjectVersionsPaginatedApiArg = {
  /** The project ID or project key (case sensitive). */
  projectIdOrKey: string;
  /** The index of the first item to return in a page of results (page offset). */
  startAt?: number;
  /** The maximum number of items to return per page. */
  maxResults?: number;
  /** [Order](#ordering) the results by a field:
    
     *  `description` Sorts by version description.
     *  `name` Sorts by version name.
     *  `releaseDate` Sorts by release date, starting with the oldest date. Versions with no release date are listed last.
     *  `sequence` Sorts by the order of appearance in the user interface.
     *  `startDate` Sorts by start date, starting with the oldest date. Versions with no start date are listed last. */
  orderBy?:
    | "description"
    | "-description"
    | "+description"
    | "name"
    | "-name"
    | "+name"
    | "releaseDate"
    | "-releaseDate"
    | "+releaseDate"
    | "sequence"
    | "-sequence"
    | "+sequence"
    | "startDate"
    | "-startDate"
    | "+startDate";
  /** Filter the results using a literal string. Versions with matching `name` or `description` are returned (case insensitive). */
  query?: string;
  /** A list of status values used to filter the results by version status. This parameter accepts a comma-separated list. The status values are `released`, `unreleased`, and `archived`. */
  status?: string;
  /** Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Expand options include:
    
     *  `issuesstatus` Returns the number of issues in each status category for each version.
     *  `operations` Returns actions that can be performed on the specified version. */
  expand?: string;
};
export type GetProjectVersionsApiResponse =
  /** status 200 Returned if the request is successful. */ Version[];
export type GetProjectVersionsApiArg = {
  /** The project ID or project key (case sensitive). */
  projectIdOrKey: string;
  /** Use [expand](#expansion) to include additional information in the response. This parameter accepts `operations`, which returns actions that can be performed on the version. */
  expand?: string;
};
export type GetProjectEmailApiResponse =
  /** status 200 Returned if the request is successful. */ ProjectEmailAddress;
export type GetProjectEmailApiArg = {
  /** The project ID. */
  projectId: number;
};
export type UpdateProjectEmailApiResponse =
  /** status 204 Returned if the project's sender email address is successfully set. */ any;
export type UpdateProjectEmailApiArg = {
  /** The project ID. */
  projectId: number;
  /** The project's sender email address to be set. */
  projectEmailAddress: ProjectEmailAddress;
};
export type GetHierarchyApiResponse =
  /** status 200 Returned if the request is successful. */ ProjectIssueTypeHierarchy;
export type GetHierarchyApiArg = {
  /** The ID of the project. */
  projectId: number;
};
export type GetProjectIssueSecuritySchemeApiResponse =
  /** status 200 Returned if the request is successful. */ SecurityScheme;
export type GetProjectIssueSecuritySchemeApiArg = {
  /** The project ID or project key (case sensitive). */
  projectKeyOrId: string;
};
export type GetNotificationSchemeForProjectApiResponse =
  /** status 200 Returned if the request is successful. */ NotificationScheme;
export type GetNotificationSchemeForProjectApiArg = {
  /** The project ID or project key (case sensitive). */
  projectKeyOrId: string;
  /** Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Expand options include:
    
     *  `all` Returns all expandable information.
     *  `field` Returns information about any custom fields assigned to receive an event.
     *  `group` Returns information about any groups assigned to receive an event.
     *  `notificationSchemeEvents` Returns a list of event associations. This list is returned for all expandable information.
     *  `projectRole` Returns information about any project roles assigned to receive an event.
     *  `user` Returns information about any users assigned to receive an event. */
  expand?: string;
};
export type GetAssignedPermissionSchemeApiResponse =
  /** status 200 Returned if the request is successful. */ PermissionScheme;
export type GetAssignedPermissionSchemeApiArg = {
  /** The project ID or project key (case sensitive). */
  projectKeyOrId: string;
  /** Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Note that permissions are included when you specify any value. Expand options include:
    
     *  `all` Returns all expandable information.
     *  `field` Returns information about the custom field granted the permission.
     *  `group` Returns information about the group that is granted the permission.
     *  `permissions` Returns all permission grants for each permission scheme.
     *  `projectRole` Returns information about the project role granted the permission.
     *  `user` Returns information about the user who is granted the permission. */
  expand?: string;
};
export type AssignPermissionSchemeApiResponse =
  /** status 200 Returned if the request is successful. */ PermissionScheme;
export type AssignPermissionSchemeApiArg = {
  /** The project ID or project key (case sensitive). */
  projectKeyOrId: string;
  /** Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Note that permissions are included when you specify any value. Expand options include:
    
     *  `all` Returns all expandable information.
     *  `field` Returns information about the custom field granted the permission.
     *  `group` Returns information about the group that is granted the permission.
     *  `permissions` Returns all permission grants for each permission scheme.
     *  `projectRole` Returns information about the project role granted the permission.
     *  `user` Returns information about the user who is granted the permission. */
  expand?: string;
  idBean: IdBean;
};
export type GetSecurityLevelsForProjectApiResponse =
  /** status 200 Returned if the request is successful. */ ProjectIssueSecurityLevels;
export type GetSecurityLevelsForProjectApiArg = {
  /** The project ID or project key (case sensitive). */
  projectKeyOrId: string;
};
export type GetAllProjectCategoriesApiResponse =
  /** status 200 Returned if the request is successful. */ ProjectCategory[];
export type GetAllProjectCategoriesApiArg = void;
export type CreateProjectCategoryApiResponse =
  /** status 201 Returned if the request is successful. */ ProjectCategory;
export type CreateProjectCategoryApiArg = {
  projectCategory: ProjectCategory;
};
export type GetProjectCategoryByIdApiResponse =
  /** status 200 Returned if the request is successful. */ ProjectCategory;
export type GetProjectCategoryByIdApiArg = {
  /** The ID of the project category. */
  id: number;
};
export type UpdateProjectCategoryApiResponse =
  /** status 200 Returned if the request is successful. */ UpdatedProjectCategory;
export type UpdateProjectCategoryApiArg = {
  id: number;
  projectCategory: ProjectCategory;
};
export type RemoveProjectCategoryApiResponse = unknown;
export type RemoveProjectCategoryApiArg = {
  /** ID of the project category to delete. */
  id: number;
};
export type ValidateProjectKeyApiResponse =
  /** status 200 Returned if the request is successful. */ ErrorCollection;
export type ValidateProjectKeyApiArg = {
  /** The project key. */
  key?: string;
};
export type GetValidProjectKeyApiResponse =
  /** status 200 Returned if the request is successful. */ string;
export type GetValidProjectKeyApiArg = {
  /** The project key. */
  key?: string;
};
export type GetValidProjectNameApiResponse =
  /** status 200 Returned if the request is successful. */ string;
export type GetValidProjectNameApiArg = {
  /** The project name. */
  name: string;
};
export type GetResolutionsApiResponse =
  /** status 200 Returned if the request is successful. */ Resolution[];
export type GetResolutionsApiArg = void;
export type GetResolutionApiResponse =
  /** status 200 Returned if the request is successful. */ Resolution;
export type GetResolutionApiArg = {
  /** The ID of the issue resolution value. */
  id: string;
};
export type GetAllProjectRolesApiResponse =
  /** status 200 Returned if the request is successful. */ ProjectRole[];
export type GetAllProjectRolesApiArg = void;
export type CreateProjectRoleApiResponse =
  /** status 200 Returned if the request is successful. */ ProjectRole;
export type CreateProjectRoleApiArg = {
  createUpdateRoleRequestBean: CreateUpdateRoleRequestBean;
};
export type GetProjectRoleByIdApiResponse =
  /** status 200 Returned if the request is successful. */ ProjectRole;
export type GetProjectRoleByIdApiArg = {
  /** The ID of the project role. Use [Get all project roles](#api-rest-api-3-role-get) to get a list of project role IDs. */
  id: number;
};
export type FullyUpdateProjectRoleApiResponse =
  /** status 200 Returned if the request is successful. */ ProjectRole;
export type FullyUpdateProjectRoleApiArg = {
  /** The ID of the project role. Use [Get all project roles](#api-rest-api-3-role-get) to get a list of project role IDs. */
  id: number;
  createUpdateRoleRequestBean: CreateUpdateRoleRequestBean;
};
export type PartialUpdateProjectRoleApiResponse =
  /** status 200 Returned if the request is successful. */ ProjectRole;
export type PartialUpdateProjectRoleApiArg = {
  /** The ID of the project role. Use [Get all project roles](#api-rest-api-3-role-get) to get a list of project role IDs. */
  id: number;
  createUpdateRoleRequestBean: CreateUpdateRoleRequestBean;
};
export type DeleteProjectRoleApiResponse = unknown;
export type DeleteProjectRoleApiArg = {
  /** The ID of the project role to delete. Use [Get all project roles](#api-rest-api-3-role-get) to get a list of project role IDs. */
  id: number;
  /** The ID of the project role that will replace the one being deleted. */
  swap?: number;
};
export type GetProjectRoleActorsForRoleApiResponse =
  /** status 200 Returned if the request is successful. */ ProjectRole;
export type GetProjectRoleActorsForRoleApiArg = {
  /** The ID of the project role. Use [Get all project roles](#api-rest-api-3-role-get) to get a list of project role IDs. */
  id: number;
};
export type AddProjectRoleActorsToRoleApiResponse =
  /** status 200 Returned if the request is successful. */ ProjectRole;
export type AddProjectRoleActorsToRoleApiArg = {
  /** The ID of the project role. Use [Get all project roles](#api-rest-api-3-role-get) to get a list of project role IDs. */
  id: number;
  actorInputBean: ActorInputBean;
};
export type DeleteProjectRoleActorsFromRoleApiResponse =
  /** status 200 Returned if the request is successful. */ ProjectRole;
export type DeleteProjectRoleActorsFromRoleApiArg = {
  /** The ID of the project role. Use [Get all project roles](#api-rest-api-3-role-get) to get a list of project role IDs. */
  id: number;
  /** The user account ID of the user to remove as a default actor. */
  user?: string;
  /** The group ID of the group to be removed as a default actor. This parameter cannot be used with the `group` parameter. */
  groupId?: string;
  /** The group name of the group to be removed as a default actor.This parameter cannot be used with the `groupId` parameter. As a group's name can change, use of `groupId` is recommended. */
  group?: string;
};
export type GetScreensApiResponse =
  /** status 200 Returned if the request is successful. */ PageBeanScreen;
export type GetScreensApiArg = {
  /** The index of the first item to return in a page of results (page offset). */
  startAt?: number;
  /** The maximum number of items to return per page. */
  maxResults?: number;
  /** The list of screen IDs. To include multiple IDs, provide an ampersand-separated list. For example, `id=10000&id=10001`. */
  id?: number[];
  /** String used to perform a case-insensitive partial match with screen name. */
  queryString?: string;
  /** The scope filter string. To filter by multiple scope, provide an ampersand-separated list. For example, `scope=GLOBAL&scope=PROJECT`. */
  scope?: ("GLOBAL" | "TEMPLATE" | "PROJECT")[];
  /** [Order](#ordering) the results by a field:
    
     *  `id` Sorts by screen ID.
     *  `name` Sorts by screen name. */
  orderBy?: "name" | "-name" | "+name" | "id" | "-id" | "+id";
};
export type CreateScreenApiResponse =
  /** status 201 Returned if the request is successful. */ Screen;
export type CreateScreenApiArg = {
  screenDetails: ScreenDetails;
};
export type AddFieldToDefaultScreenApiResponse =
  /** status 200 Returned if the request is successful. */ any;
export type AddFieldToDefaultScreenApiArg = {
  /** The ID of the field. */
  fieldId: string;
};
export type UpdateScreenApiResponse =
  /** status 200 Returned if the request is successful. */ Screen;
export type UpdateScreenApiArg = {
  /** The ID of the screen. */
  screenId: number;
  updateScreenDetails: UpdateScreenDetails;
};
export type DeleteScreenApiResponse =
  /** status 204 Returned if the request is successful. */ undefined;
export type DeleteScreenApiArg = {
  /** The ID of the screen. */
  screenId: number;
};
export type GetAvailableScreenFieldsApiResponse =
  /** status 200 Returned if the request is successful. */ ScreenableField[];
export type GetAvailableScreenFieldsApiArg = {
  /** The ID of the screen. */
  screenId: number;
};
export type GetAllScreenTabsApiResponse =
  /** status 200 Returned if the request is successful. */ ScreenableTab[];
export type GetAllScreenTabsApiArg = {
  /** The ID of the screen. */
  screenId: number;
  /** The key of the project. */
  projectKey?: string;
};
export type AddScreenTabApiResponse =
  /** status 200 Returned if the request is successful. */ ScreenableTab;
export type AddScreenTabApiArg = {
  /** The ID of the screen. */
  screenId: number;
  screenableTab: ScreenableTab;
};
export type RenameScreenTabApiResponse =
  /** status 200 Returned if the request is successful. */ ScreenableTab;
export type RenameScreenTabApiArg = {
  /** The ID of the screen. */
  screenId: number;
  /** The ID of the screen tab. */
  tabId: number;
  screenableTab: ScreenableTab;
};
export type DeleteScreenTabApiResponse = unknown;
export type DeleteScreenTabApiArg = {
  /** The ID of the screen. */
  screenId: number;
  /** The ID of the screen tab. */
  tabId: number;
};
export type GetAllScreenTabFieldsApiResponse =
  /** status 200 Returned if the request is successful. */ ScreenableField[];
export type GetAllScreenTabFieldsApiArg = {
  /** The ID of the screen. */
  screenId: number;
  /** The ID of the screen tab. */
  tabId: number;
  /** The key of the project. */
  projectKey?: string;
};
export type AddScreenTabFieldApiResponse =
  /** status 200 Returned if the request is successful. */ ScreenableField;
export type AddScreenTabFieldApiArg = {
  /** The ID of the screen. */
  screenId: number;
  /** The ID of the screen tab. */
  tabId: number;
  addFieldBean: AddFieldBean;
};
export type RemoveScreenTabFieldApiResponse = unknown;
export type RemoveScreenTabFieldApiArg = {
  /** The ID of the screen. */
  screenId: number;
  /** The ID of the screen tab. */
  tabId: number;
  /** The ID of the field. */
  id: string;
};
export type MoveScreenTabFieldApiResponse =
  /** status 204 Returned if the request is successful. */ any;
export type MoveScreenTabFieldApiArg = {
  /** The ID of the screen. */
  screenId: number;
  /** The ID of the screen tab. */
  tabId: number;
  /** The ID of the field. */
  id: string;
  moveFieldBean: MoveFieldBean;
};
export type MoveScreenTabApiResponse =
  /** status 204 Returned if the request is successful. */ any;
export type MoveScreenTabApiArg = {
  /** The ID of the screen. */
  screenId: number;
  /** The ID of the screen tab. */
  tabId: number;
  /** The position of tab. The base index is 0. */
  pos: number;
};
export type GetScreenSchemesApiResponse =
  /** status 200 Returned if the request is successful. */ PageBeanScreenScheme;
export type GetScreenSchemesApiArg = {
  /** The index of the first item to return in a page of results (page offset). */
  startAt?: number;
  /** The maximum number of items to return per page. */
  maxResults?: number;
  /** The list of screen scheme IDs. To include multiple IDs, provide an ampersand-separated list. For example, `id=10000&id=10001`. */
  id?: number[];
  /** Use [expand](#expansion) include additional information in the response. This parameter accepts `issueTypeScreenSchemes` that, for each screen schemes, returns information about the issue type screen scheme the screen scheme is assigned to. */
  expand?: string;
  /** String used to perform a case-insensitive partial match with screen scheme name. */
  queryString?: string;
  /** [Order](#ordering) the results by a field:
    
     *  `id` Sorts by screen scheme ID.
     *  `name` Sorts by screen scheme name. */
  orderBy?: "name" | "-name" | "+name" | "id" | "-id" | "+id";
};
export type CreateScreenSchemeApiResponse =
  /** status 201 Returned if the request is successful. */ ScreenSchemeId;
export type CreateScreenSchemeApiArg = {
  screenSchemeDetails: ScreenSchemeDetails;
};
export type UpdateScreenSchemeApiResponse =
  /** status 204 Returned if the request is successful. */ any;
export type UpdateScreenSchemeApiArg = {
  /** The ID of the screen scheme. */
  screenSchemeId: string;
  /** The screen scheme update details. */
  updateScreenSchemeDetails: UpdateScreenSchemeDetails;
};
export type DeleteScreenSchemeApiResponse =
  /** status 204 Returned if the screen scheme is deleted. */ undefined;
export type DeleteScreenSchemeApiArg = {
  /** The ID of the screen scheme. */
  screenSchemeId: string;
};
export type SearchForIssuesUsingJqlApiResponse =
  /** status 200 Returned if the request is successful. */ SearchResults;
export type SearchForIssuesUsingJqlApiArg = {
  /** The [JQL](https://confluence.atlassian.com/x/egORLQ) that defines the search. Note:
    
     *  If no JQL expression is provided, all issues are returned.
     *  `username` and `userkey` cannot be used as search terms due to privacy reasons. Use `accountId` instead.
     *  If a user has hidden their email address in their user profile, partial matches of the email address will not find the user. An exact match is required. */
  jql?: string;
  /** The index of the first item to return in a page of results (page offset). */
  startAt?: number;
  /** The maximum number of items to return per page. To manage page size, Jira may return fewer items per page where a large number of fields are requested. The greatest number of items returned per page is achieved when requesting `id` or `key` only. */
  maxResults?: number;
  /** Determines how to validate the JQL query and treat the validation results. Supported values are:
    
     *  `strict` Returns a 400 response code if any errors are found, along with a list of all errors (and warnings).
     *  `warn` Returns all errors as warnings.
     *  `none` No validation is performed.
     *  `true` *Deprecated* A legacy synonym for `strict`.
     *  `false` *Deprecated* A legacy synonym for `warn`.
    
    Note: If the JQL is not correctly formed a 400 response code is returned, regardless of the `validateQuery` value. */
  validateQuery?: "strict" | "warn" | "none" | "true" | "false";
  /** A list of fields to return for each issue, use it to retrieve a subset of fields. This parameter accepts a comma-separated list. Expand options include:
    
     *  `*all` Returns all fields.
     *  `*navigable` Returns navigable fields.
     *  Any issue field, prefixed with a minus to exclude.
    
    Examples:
    
     *  `summary,comment` Returns only the summary and comments fields.
     *  `-description` Returns all navigable (default) fields except description.
     *  `*all,-comment` Returns all fields except comments.
    
    This parameter may be specified multiple times. For example, `fields=field1,field2&fields=field3`.
    
    Note: All navigable fields are returned by default. This differs from [GET issue](#api-rest-api-3-issue-issueIdOrKey-get) where the default is all fields. */
  fields?: string[];
  /** Use [expand](#expansion) to include additional information about issues in the response. This parameter accepts a comma-separated list. Expand options include:
    
     *  `renderedFields` Returns field values rendered in HTML format.
     *  `names` Returns the display name of each field.
     *  `schema` Returns the schema describing a field type.
     *  `transitions` Returns all possible transitions for the issue.
     *  `operations` Returns all possible operations for the issue.
     *  `editmeta` Returns information about how each field can be edited.
     *  `changelog` Returns a list of recent updates to an issue, sorted by date, starting from the most recent.
     *  `versionedRepresentations` Instead of `fields`, returns `versionedRepresentations` a JSON array containing each version of a field's value, with the highest numbered item representing the most recent version. */
  expand?: string;
  /** A list of issue property keys for issue properties to include in the results. This parameter accepts a comma-separated list. Multiple properties can also be provided using an ampersand separated list. For example, `properties=prop1,prop2&properties=prop3`. A maximum of 5 issue property keys can be specified. */
  properties?: string[];
  /** Reference fields by their key (rather than ID). */
  fieldsByKeys?: boolean;
};
export type SearchForIssuesUsingJqlPostApiResponse =
  /** status 200 Returned if the request is successful. */ SearchResults;
export type SearchForIssuesUsingJqlPostApiArg = {
  /** A JSON object containing the search request. */
  searchRequestBean: SearchRequestBean;
};
export type GetIssueSecurityLevelApiResponse =
  /** status 200 Returned if the request is successful. */ SecurityLevel;
export type GetIssueSecurityLevelApiArg = {
  /** The ID of the issue security level. */
  id: string;
};
export type GetServerInfoApiResponse =
  /** status 200 Returned if the request is successful. */ ServerInformation;
export type GetServerInfoApiArg = void;
export type GetIssueNavigatorDefaultColumnsApiResponse =
  /** status 200 Returned if the request is successful. */ ColumnItem[];
export type GetIssueNavigatorDefaultColumnsApiArg = void;
export type SetIssueNavigatorDefaultColumnsApiResponse =
  /** status 200 Returned if the request is successful. */ any;
export type SetIssueNavigatorDefaultColumnsApiArg = {
  /** A navigable field value. */
  body: string[];
};
export type GetStatusesApiResponse =
  /** status 200 Returned if the request is successful. */ StatusDetails[];
export type GetStatusesApiArg = void;
export type GetStatusApiResponse =
  /** status 200 Returned if the request is successful. */ StatusDetails;
export type GetStatusApiArg = {
  /** The ID or name of the status. */
  idOrName: string;
};
export type GetStatusCategoriesApiResponse =
  /** status 200 Returned if the request is successful. */ StatusCategory[];
export type GetStatusCategoriesApiArg = void;
export type GetStatusCategoryApiResponse =
  /** status 200 Returned if the request is successful. */ StatusCategory;
export type GetStatusCategoryApiArg = {
  /** The ID or key of the status category. */
  idOrKey: string;
};
export type GetStatusesByIdApiResponse =
  /** status 200 Returned if the request is successful. */ JiraStatus[];
export type GetStatusesByIdApiArg = {
  /** Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Expand options include:
    
     *  `usages` Returns the project and issue types that use the status in their workflow. */
  expand?: string;
  /** The list of status IDs. To include multiple IDs, provide an ampersand-separated list. For example, id=10000&id=10001.
    
    Min items `1`, Max items `50` */
  id?: string[];
};
export type UpdateStatusesApiResponse =
  /** status 204 Returned if the request is successful. */ any;
export type UpdateStatusesApiArg = {
  /** The list of statuses that will be updated. */
  statusUpdateRequest: StatusUpdateRequest;
};
export type CreateStatusesApiResponse =
  /** status 200 Returned if the request is successful. */ JiraStatus[];
export type CreateStatusesApiArg = {
  /** Details of the statuses being created and their scope. */
  statusCreateRequest: StatusCreateRequest;
};
export type DeleteStatusesByIdApiResponse =
  /** status 204 Returned if the request is successful. */ any;
export type DeleteStatusesByIdApiArg = {
  /** The list of status IDs. To include multiple IDs, provide an ampersand-separated list. For example, id=10000&id=10001.
    
    Min items `1`, Max items `50` */
  id?: string[];
};
export type SearchApiResponse =
  /** status 200 Returned if the request is successful. */ PageOfStatuses;
export type SearchApiArg = {
  /** Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Expand options include:
    
     *  `usages` Returns the project and issue types that use the status in their workflow. */
  expand?: string;
  /** The project the status is part of or null for global statuses. */
  projectId?: string;
  /** The index of the first item to return in a page of results (page offset). */
  startAt?: number;
  /** The maximum number of items to return per page. */
  maxResults?: number;
  /** Term to match status names against or null to search for all statuses in the search scope. */
  searchString?: string;
  /** Category of the status to filter by. The supported values are: `TODO`, `IN_PROGRESS`, and `DONE`. */
  statusCategory?: string;
};
export type GetTaskApiResponse =
  /** status 200 Returned if the request is successful. */ TaskProgressBeanObject;
export type GetTaskApiArg = {
  /** The ID of the task. */
  taskId: string;
};
export type CancelTaskApiResponse =
  /** status 202 Returned if the request is successful. */ any;
export type CancelTaskApiArg = {
  /** The ID of the task. */
  taskId: string;
};
export type GetUiModificationsApiResponse =
  /** status 200 Returned if the request is successful. */ PageBeanUiModificationDetails;
export type GetUiModificationsApiArg = {
  /** The index of the first item to return in a page of results (page offset). */
  startAt?: number;
  /** The maximum number of items to return per page. */
  maxResults?: number;
  /** Use expand to include additional information in the response. This parameter accepts a comma-separated list. Expand options include:
    
     *  `data` Returns UI modification data.
     *  `contexts` Returns UI modification contexts. */
  expand?: string;
};
export type CreateUiModificationApiResponse =
  /** status 201 Returned if the UI modification is created. */ UiModificationIdentifiers;
export type CreateUiModificationApiArg = {
  /** Details of the UI modification. */
  createUiModificationDetails: CreateUiModificationDetails;
};
export type UpdateUiModificationApiResponse =
  /** status 204 Returned if the UI modification is updated. */ any;
export type UpdateUiModificationApiArg = {
  /** The ID of the UI modification. */
  uiModificationId: string;
  /** Details of the UI modification. */
  updateUiModificationDetails: UpdateUiModificationDetails;
};
export type DeleteUiModificationApiResponse =
  /** status 204 Returned if the UI modification is deleted. */ any;
export type DeleteUiModificationApiArg = {
  /** The ID of the UI modification. */
  uiModificationId: string;
};
export type GetAvatarsApiResponse =
  /** status 200 Returned if the request is successful. */ Avatars;
export type GetAvatarsApiArg = {
  /** The avatar type. */
  type: "project" | "issuetype";
  /** The ID of the item the avatar is associated with. */
  entityId: string;
};
export type StoreAvatarApiResponse =
  /** status 201 Returned if the request is successful. */ Avatar;
export type StoreAvatarApiArg = {
  /** The avatar type. */
  type: "project" | "issuetype";
  /** The ID of the item the avatar is associated with. */
  entityId: string;
  /** The X coordinate of the top-left corner of the crop region. */
  x?: number;
  /** The Y coordinate of the top-left corner of the crop region. */
  y?: number;
  /** The length of each side of the crop region. */
  size: number;
  body: any;
};
export type DeleteAvatarApiResponse = unknown;
export type DeleteAvatarApiArg = {
  /** The avatar type. */
  type: "project" | "issuetype";
  /** The ID of the item the avatar is associated with. */
  owningObjectId: string;
  /** The ID of the avatar. */
  id: number;
};
export type GetAvatarImageByTypeApiResponse =
  /** status 200 Returned if the request is successful. */ Blob;
export type GetAvatarImageByTypeApiArg = {
  /** The icon type of the avatar. */
  type: "issuetype" | "project";
  /** The size of the avatar image. If not provided the default size is returned. */
  size?: "xsmall" | "small" | "medium" | "large" | "xlarge";
  /** The format to return the avatar image in. If not provided the original content format is returned. */
  format?: "png" | "svg";
};
export type GetAvatarImageByIdApiResponse =
  /** status 200 Returned if the request is successful. */ Blob;
export type GetAvatarImageByIdApiArg = {
  /** The icon type of the avatar. */
  type: "issuetype" | "project";
  /** The ID of the avatar. */
  id: number;
  /** The size of the avatar image. If not provided the default size is returned. */
  size?: "xsmall" | "small" | "medium" | "large" | "xlarge";
  /** The format to return the avatar image in. If not provided the original content format is returned. */
  format?: "png" | "svg";
};
export type GetAvatarImageByOwnerApiResponse =
  /** status 200 Returned if the request is successful. */ Blob;
export type GetAvatarImageByOwnerApiArg = {
  /** The icon type of the avatar. */
  type: "issuetype" | "project";
  /** The ID of the project or issue type the avatar belongs to. */
  entityId: string;
  /** The size of the avatar image. If not provided the default size is returned. */
  size?: "xsmall" | "small" | "medium" | "large" | "xlarge";
  /** The format to return the avatar image in. If not provided the original content format is returned. */
  format?: "png" | "svg";
};
export type GetUserApiResponse =
  /** status 200 Returned if the request is successful. */ User;
export type GetUserApiArg = {
  /** The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*. Required. */
  accountId?: string;
  /** This parameter is no longer available. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide) for details. */
  username?: string;
  /** This parameter is no longer available. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide) for details. */
  key?: string;
  /** Use [expand](#expansion) to include additional information about users in the response. This parameter accepts a comma-separated list. Expand options include:
    
     *  `groups` includes all groups and nested groups to which the user belongs.
     *  `applicationRoles` includes details of all the applications to which the user has access. */
  expand?: string;
};
export type CreateUserApiResponse =
  /** status 201 Returned if the request is successful. */ User;
export type CreateUserApiArg = {
  /** Details about the user to be created. */
  newUserDetails: NewUserDetails;
};
export type RemoveUserApiResponse = unknown;
export type RemoveUserApiArg = {
  /** The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*. */
  accountId: string;
  /** This parameter is no longer available. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. */
  username?: string;
  /** This parameter is no longer available. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. */
  key?: string;
};
export type FindBulkAssignableUsersApiResponse =
  /** status 200 Returned if the request is successful. */ User[];
export type FindBulkAssignableUsersApiArg = {
  /** A query string that is matched against user attributes, such as `displayName` and `emailAddress`, to find relevant users. The string can match the prefix of the attribute's value. For example, *query=john* matches a user with a `displayName` of *John Smith* and a user with an `emailAddress` of *johnson@example.com*. Required, unless `accountId` is specified. */
  query?: string;
  /** This parameter is no longer available. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. */
  username?: string;
  /** A query string that is matched exactly against user `accountId`. Required, unless `query` is specified. */
  accountId?: string;
  /** A list of project keys (case sensitive). This parameter accepts a comma-separated list. */
  projectKeys: string;
  /** The index of the first item to return in a page of results (page offset). */
  startAt?: number;
  /** The maximum number of items to return per page. */
  maxResults?: number;
};
export type FindAssignableUsersApiResponse =
  /** status 200 Returned if the request is successful. */ User[];
export type FindAssignableUsersApiArg = {
  /** A query string that is matched against user attributes, such as `displayName`, and `emailAddress`, to find relevant users. The string can match the prefix of the attribute's value. For example, *query=john* matches a user with a `displayName` of *John Smith* and a user with an `emailAddress` of *johnson@example.com*. Required, unless `username` or `accountId` is specified. */
  query?: string;
  /** The sessionId of this request. SessionId is the same until the assignee is set. */
  sessionId?: string;
  /** This parameter is no longer available. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. */
  username?: string;
  /** A query string that is matched exactly against user `accountId`. Required, unless `query` is specified. */
  accountId?: string;
  /** The project ID or project key (case sensitive). Required, unless `issueKey` is specified. */
  project?: string;
  /** The key of the issue. Required, unless `project` is specified. */
  issueKey?: string;
  /** The index of the first item to return in a page of results (page offset). */
  startAt?: number;
  /** The maximum number of items to return. This operation may return less than the maximum number of items even if more are available. The operation fetches users up to the maximum and then, from the fetched users, returns only the users that can be assigned to the issue. */
  maxResults?: number;
  /** The ID of the transition. */
  actionDescriptorId?: number;
  recommend?: boolean;
};
export type BulkGetUsersApiResponse =
  /** status 200 Returned if the request is successful. */ PageBeanUser;
export type BulkGetUsersApiArg = {
  /** The index of the first item to return in a page of results (page offset). */
  startAt?: number;
  /** The maximum number of items to return per page. */
  maxResults?: number;
  /** This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. */
  username?: string[];
  /** This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. */
  key?: string[];
  /** The account ID of a user. To specify multiple users, pass multiple `accountId` parameters. For example, `accountId=5b10a2844c20165700ede21g&accountId=5b10ac8d82e05b22cc7d4ef5`. */
  accountId: string[];
};
export type BulkGetUsersMigrationApiResponse =
  /** status 200 Returned if the request is successful. */ UserMigrationBean[];
export type BulkGetUsersMigrationApiArg = {
  /** The index of the first item to return in a page of results (page offset). */
  startAt?: number;
  /** The maximum number of items to return per page. */
  maxResults?: number;
  /** Username of a user. To specify multiple users, pass multiple copies of this parameter. For example, `username=fred&username=barney`. Required if `key` isn't provided. Cannot be provided if `key` is present. */
  username?: string[];
  /** Key of a user. To specify multiple users, pass multiple copies of this parameter. For example, `key=fred&key=barney`. Required if `username` isn't provided. Cannot be provided if `username` is present. */
  key?: string[];
};
export type GetUserDefaultColumnsApiResponse =
  /** status 200 Returned if the request is successful. */ ColumnItem[];
export type GetUserDefaultColumnsApiArg = {
  /** The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*. */
  accountId?: string;
  /** This parameter is no longer available See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. */
  username?: string;
};
export type SetUserColumnsApiResponse =
  /** status 200 Returned if the request is successful. */ any;
export type SetUserColumnsApiArg = {
  /** The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*. */
  accountId?: string;
  /** The ID of a column to set. To set multiple columns, send multiple `columns` parameters. */
  body: string[];
};
export type ResetUserColumnsApiResponse = unknown;
export type ResetUserColumnsApiArg = {
  /** The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*. */
  accountId?: string;
  /** This parameter is no longer available. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. */
  username?: string;
};
export type GetUserEmailApiResponse =
  /** status 200 Returned if the request is successful. */ UnrestrictedUserEmail;
export type GetUserEmailApiArg = {
  /** The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, `5b10ac8d82e05b22cc7d4ef5`. */
  accountId: string;
};
export type GetUserEmailBulkApiResponse =
  /** status 200 Returned if the request is successful. */ UnrestrictedUserEmail;
export type GetUserEmailBulkApiArg = {
  /** The account IDs of the users for which emails are required. An `accountId` is an identifier that uniquely identifies the user across all Atlassian products. For example, `5b10ac8d82e05b22cc7d4ef5`. Note, this should be treated as an opaque identifier (that is, do not assume any structure in the value). */
  accountId: string[];
};
export type GetUserGroupsApiResponse =
  /** status 200 Returned if the request is successful. */ GroupName[];
export type GetUserGroupsApiArg = {
  /** The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*. */
  accountId: string;
  /** This parameter is no longer available. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. */
  username?: string;
  /** This parameter is no longer available. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. */
  key?: string;
};
export type FindUsersWithAllPermissionsApiResponse =
  /** status 200 Returned if the request is successful. */ User[];
export type FindUsersWithAllPermissionsApiArg = {
  /** A query string that is matched against user attributes, such as `displayName` and `emailAddress`, to find relevant users. The string can match the prefix of the attribute's value. For example, *query=john* matches a user with a `displayName` of *John Smith* and a user with an `emailAddress` of *johnson@example.com*. Required, unless `accountId` is specified. */
  query?: string;
  /** This parameter is no longer available. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. */
  username?: string;
  /** A query string that is matched exactly against user `accountId`. Required, unless `query` is specified. */
  accountId?: string;
  /** A comma separated list of permissions. Permissions can be specified as any:
    
     *  permission returned by [Get all permissions](#api-rest-api-3-permissions-get).
     *  custom project permission added by Connect apps.
     *  (deprecated) one of the following:
        
         *  ASSIGNABLE\_USER
         *  ASSIGN\_ISSUE
         *  ATTACHMENT\_DELETE\_ALL
         *  ATTACHMENT\_DELETE\_OWN
         *  BROWSE
         *  CLOSE\_ISSUE
         *  COMMENT\_DELETE\_ALL
         *  COMMENT\_DELETE\_OWN
         *  COMMENT\_EDIT\_ALL
         *  COMMENT\_EDIT\_OWN
         *  COMMENT\_ISSUE
         *  CREATE\_ATTACHMENT
         *  CREATE\_ISSUE
         *  DELETE\_ISSUE
         *  EDIT\_ISSUE
         *  LINK\_ISSUE
         *  MANAGE\_WATCHER\_LIST
         *  MODIFY\_REPORTER
         *  MOVE\_ISSUE
         *  PROJECT\_ADMIN
         *  RESOLVE\_ISSUE
         *  SCHEDULE\_ISSUE
         *  SET\_ISSUE\_SECURITY
         *  TRANSITION\_ISSUE
         *  VIEW\_VERSION\_CONTROL
         *  VIEW\_VOTERS\_AND\_WATCHERS
         *  VIEW\_WORKFLOW\_READONLY
         *  WORKLOG\_DELETE\_ALL
         *  WORKLOG\_DELETE\_OWN
         *  WORKLOG\_EDIT\_ALL
         *  WORKLOG\_EDIT\_OWN
         *  WORK\_ISSUE */
  permissions: string;
  /** The issue key for the issue. */
  issueKey?: string;
  /** The project key for the project (case sensitive). */
  projectKey?: string;
  /** The index of the first item to return in a page of results (page offset). */
  startAt?: number;
  /** The maximum number of items to return per page. */
  maxResults?: number;
};
export type FindUsersForPickerApiResponse =
  /** status 200 Returned if the request is successful. */ FoundUsers;
export type FindUsersForPickerApiArg = {
  /** A query string that is matched against user attributes, such as `displayName`, and `emailAddress`, to find relevant users. The string can match the prefix of the attribute's value. For example, *query=john* matches a user with a `displayName` of *John Smith* and a user with an `emailAddress` of *johnson@example.com*. */
  query: string;
  /** The maximum number of items to return. The total number of matched users is returned in `total`. */
  maxResults?: number;
  /** Include the URI to the user's avatar. */
  showAvatar?: boolean;
  /** This parameter is no longer available. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. */
  exclude?: string[];
  /** A list of account IDs to exclude from the search results. This parameter accepts a comma-separated list. Multiple account IDs can also be provided using an ampersand-separated list. For example, `excludeAccountIds=5b10a2844c20165700ede21g,5b10a0effa615349cb016cd8&excludeAccountIds=5b10ac8d82e05b22cc7d4ef5`. Cannot be provided with `exclude`. */
  excludeAccountIds?: string[];
  avatarSize?: string;
  excludeConnectUsers?: boolean;
};
export type GetUserPropertyKeysApiResponse =
  /** status 200 Returned if the request is successful. */ PropertyKeys;
export type GetUserPropertyKeysApiArg = {
  /** The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*. */
  accountId?: string;
  /** This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. */
  userKey?: string;
  /** This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. */
  username?: string;
};
export type GetUserPropertyApiResponse =
  /** status 200 Returned if the request is successful. */ EntityProperty;
export type GetUserPropertyApiArg = {
  /** The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*. */
  accountId?: string;
  /** This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. */
  userKey?: string;
  /** This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. */
  username?: string;
  /** The key of the user's property. */
  propertyKey: string;
};
export type SetUserPropertyApiResponse =
  /** status 200 Returned if the user property is updated. */
    | any
    | /** status 201 Returned if the user property is created. */ any;
export type SetUserPropertyApiArg = {
  /** The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*. */
  accountId?: string;
  /** This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. */
  userKey?: string;
  /** This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. */
  username?: string;
  /** The key of the user's property. The maximum length is 255 characters. */
  propertyKey: string;
  body: any;
};
export type DeleteUserPropertyApiResponse = unknown;
export type DeleteUserPropertyApiArg = {
  /** The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*. */
  accountId?: string;
  /** This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. */
  userKey?: string;
  /** This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. */
  username?: string;
  /** The key of the user's property. */
  propertyKey: string;
};
export type FindUsersApiResponse =
  /** status 200 Returned if the request is successful. */ User[];
export type FindUsersApiArg = {
  /** A query string that is matched against user attributes ( `displayName`, and `emailAddress`) to find relevant users. The string can match the prefix of the attribute's value. For example, *query=john* matches a user with a `displayName` of *John Smith* and a user with an `emailAddress` of *johnson@example.com*. Required, unless `accountId` or `property` is specified. */
  query?: string;
  username?: string;
  /** A query string that is matched exactly against a user `accountId`. Required, unless `query` or `property` is specified. */
  accountId?: string;
  /** The index of the first item to return in a page of filtered results (page offset). */
  startAt?: number;
  /** The maximum number of items to return per page. */
  maxResults?: number;
  /** A query string used to search properties. Property keys are specified by path, so property keys containing dot (.) or equals (=) characters cannot be used. The query string cannot be specified using a JSON object. Example: To search for the value of `nested` from `{"something":{"nested":1,"other":2}}` use `thepropertykey.something.nested=1`. Required, unless `accountId` or `query` is specified. */
  property?: string;
};
export type FindUsersByQueryApiResponse =
  /** status 200 Returned if the request is successful. */ PageBeanUser;
export type FindUsersByQueryApiArg = {
  /** The search query. */
  query: string;
  /** The index of the first item to return in a page of results (page offset). */
  startAt?: number;
  /** The maximum number of items to return per page. */
  maxResults?: number;
};
export type FindUserKeysByQueryApiResponse =
  /** status 200 Returned if the request is successful. */ PageBeanUserKey;
export type FindUserKeysByQueryApiArg = {
  /** The search query. */
  query: string;
  /** The index of the first item to return in a page of results (page offset). */
  startAt?: number;
  /** The maximum number of items to return per page. */
  maxResults?: number;
};
export type FindUsersWithBrowsePermissionApiResponse =
  /** status 200 Returned if the request is successful. */ User[];
export type FindUsersWithBrowsePermissionApiArg = {
  /** A query string that is matched against user attributes, such as `displayName` and `emailAddress`, to find relevant users. The string can match the prefix of the attribute's value. For example, *query=john* matches a user with a `displayName` of *John Smith* and a user with an `emailAddress` of *johnson@example.com*. Required, unless `accountId` is specified. */
  query?: string;
  /** This parameter is no longer available. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. */
  username?: string;
  /** A query string that is matched exactly against user `accountId`. Required, unless `query` is specified. */
  accountId?: string;
  /** The issue key for the issue. Required, unless `projectKey` is specified. */
  issueKey?: string;
  /** The project key for the project (case sensitive). Required, unless `issueKey` is specified. */
  projectKey?: string;
  /** The index of the first item to return in a page of results (page offset). */
  startAt?: number;
  /** The maximum number of items to return per page. */
  maxResults?: number;
};
export type GetAllUsersDefaultApiResponse =
  /** status 200 Returned if the request is successful. */ User[];
export type GetAllUsersDefaultApiArg = {
  /** The index of the first item to return. */
  startAt?: number;
  /** The maximum number of items to return. */
  maxResults?: number;
};
export type GetAllUsersApiResponse =
  /** status 200 Returned if the request is successful. */ User[];
export type GetAllUsersApiArg = {
  /** The index of the first item to return. */
  startAt?: number;
  /** The maximum number of items to return. */
  maxResults?: number;
};
export type CreateVersionApiResponse =
  /** status 201 Returned if the request is successful. */ Version;
export type CreateVersionApiArg = {
  version: Version;
};
export type GetVersionApiResponse =
  /** status 200 Returned if the request is successful. */ Version;
export type GetVersionApiArg = {
  /** The ID of the version. */
  id: string;
  /** Use [expand](#expansion) to include additional information about version in the response. This parameter accepts a comma-separated list. Expand options include:
    
     *  `operations` Returns the list of operations available for this version.
     *  `issuesstatus` Returns the count of issues in this version for each of the status categories *to do*, *in progress*, *done*, and *unmapped*. The *unmapped* property represents the number of issues with a status other than *to do*, *in progress*, and *done*. */
  expand?: string;
};
export type UpdateVersionApiResponse =
  /** status 200 Returned if the request is successful. */ Version;
export type UpdateVersionApiArg = {
  /** The ID of the version. */
  id: string;
  version: Version;
};
export type DeleteVersionApiResponse = unknown;
export type DeleteVersionApiArg = {
  /** The ID of the version. */
  id: string;
  /** The ID of the version to update `fixVersion` to when the field contains the deleted version. The replacement version must be in the same project as the version being deleted and cannot be the version being deleted. */
  moveFixIssuesTo?: string;
  /** The ID of the version to update `affectedVersion` to when the field contains the deleted version. The replacement version must be in the same project as the version being deleted and cannot be the version being deleted. */
  moveAffectedIssuesTo?: string;
};
export type MergeVersionsApiResponse =
  /** status 204 Returned if the version is deleted. */ any;
export type MergeVersionsApiArg = {
  /** The ID of the version to delete. */
  id: string;
  /** The ID of the version to merge into. */
  moveIssuesTo: string;
};
export type MoveVersionApiResponse =
  /** status 200 Returned if the request is successful. */ Version;
export type MoveVersionApiArg = {
  /** The ID of the version to be moved. */
  id: string;
  versionMoveBean: VersionMoveBean;
};
export type GetVersionRelatedIssuesApiResponse =
  /** status 200 Returned if the request is successful. */ VersionIssueCounts;
export type GetVersionRelatedIssuesApiArg = {
  /** The ID of the version. */
  id: string;
};
export type DeleteAndReplaceVersionApiResponse =
  /** status 204 Returned if the version is deleted. */ any;
export type DeleteAndReplaceVersionApiArg = {
  /** The ID of the version. */
  id: string;
  deleteAndReplaceVersionBean: DeleteAndReplaceVersionBean;
};
export type GetVersionUnresolvedIssuesApiResponse =
  /** status 200 Returned if the request is successful. */ VersionUnresolvedIssuesCount;
export type GetVersionUnresolvedIssuesApiArg = {
  /** The ID of the version. */
  id: string;
};
export type GetDynamicWebhooksForAppApiResponse =
  /** status 200 Returned if the request is successful. */ PageBeanWebhook;
export type GetDynamicWebhooksForAppApiArg = {
  /** The index of the first item to return in a page of results (page offset). */
  startAt?: number;
  /** The maximum number of items to return per page. */
  maxResults?: number;
};
export type RegisterDynamicWebhooksApiResponse =
  /** status 200 Returned if the request is successful. */ ContainerForRegisteredWebhooks;
export type RegisterDynamicWebhooksApiArg = {
  webhookRegistrationDetails: WebhookRegistrationDetails;
};
export type DeleteWebhookByIdApiResponse =
  /** status 202 Returned if the request is successful. */ undefined;
export type DeleteWebhookByIdApiArg = {
  containerForWebhookIDs: ContainerForWebhookIDs;
};
export type GetFailedWebhooksApiResponse =
  /** status 200 Returned if the request is successful. */ FailedWebhooks;
export type GetFailedWebhooksApiArg = {
  /** The maximum number of webhooks to return per page. If obeying the maxResults directive would result in records with the same failure time being split across pages, the directive is ignored and all records with the same failure time included on the page. */
  maxResults?: number;
  /** The time after which any webhook failure must have occurred for the record to be returned, expressed as milliseconds since the UNIX epoch. */
  after?: number;
};
export type RefreshWebhooksApiResponse =
  /** status 200 Returned if the request is successful. */ WebhooksExpirationDate;
export type RefreshWebhooksApiArg = {
  containerForWebhookIDs: ContainerForWebhookIDs;
};
export type GetAllWorkflowsApiResponse =
  /** status 200 Returned if the request is successful. */ DeprecatedWorkflow[];
export type GetAllWorkflowsApiArg = {
  /** The name of the workflow to be returned. Only one workflow can be specified. */
  workflowName?: string;
};
export type CreateWorkflowApiResponse =
  /** status 201 Returned if the workflow is created. */ WorkflowIDs;
export type CreateWorkflowApiArg = {
  /** The workflow details. */
  createWorkflowDetails: CreateWorkflowDetails;
};
export type GetWorkflowTransitionRuleConfigurationsApiResponse =
  /** status 200 Returned if the request is successful. */ PageBeanWorkflowTransitionRules;
export type GetWorkflowTransitionRuleConfigurationsApiArg = {
  /** The index of the first item to return in a page of results (page offset). */
  startAt?: number;
  /** The maximum number of items to return per page. */
  maxResults?: number;
  /** The types of the transition rules to return. */
  types: ("postfunction" | "condition" | "validator")[];
  /** The transition rule class keys, as defined in the Connect app descriptor, of the transition rules to return. */
  keys?: string[];
  /** EXPERIMENTAL: The list of workflow names to filter by. */
  workflowNames?: string[];
  /** EXPERIMENTAL: The list of `tags` to filter by. */
  withTags?: string[];
  /** EXPERIMENTAL: Whether draft or published workflows are returned. If not provided, both workflow types are returned. */
  draft?: boolean;
  /** Use [expand](#expansion) to include additional information in the response. This parameter accepts `transition`, which, for each rule, returns information about the transition the rule is assigned to. */
  expand?: string;
};
export type UpdateWorkflowTransitionRuleConfigurationsApiResponse =
  /** status 200 Returned if the request is successful. */ WorkflowTransitionRulesUpdateErrors;
export type UpdateWorkflowTransitionRuleConfigurationsApiArg = {
  workflowTransitionRulesUpdate: WorkflowTransitionRulesUpdate;
};
export type DeleteWorkflowTransitionRuleConfigurationsApiResponse =
  /** status 200 Returned if the request is successful. */ WorkflowTransitionRulesUpdateErrors;
export type DeleteWorkflowTransitionRuleConfigurationsApiArg = {
  workflowsWithTransitionRulesDetails: WorkflowsWithTransitionRulesDetails;
};
export type GetWorkflowsPaginatedApiResponse =
  /** status 200 Returned if the request is successful. */ PageBeanWorkflow;
export type GetWorkflowsPaginatedApiArg = {
  /** The index of the first item to return in a page of results (page offset). */
  startAt?: number;
  /** The maximum number of items to return per page. */
  maxResults?: number;
  /** The name of a workflow to return. To include multiple workflows, provide an ampersand-separated list. For example, `workflowName=name1&workflowName=name2`. */
  workflowName?: string[];
  /** Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Expand options include:
    
     *  `transitions` For each workflow, returns information about the transitions inside the workflow.
     *  `transitions.rules` For each workflow transition, returns information about its rules. Transitions are included automatically if this expand is requested.
     *  `transitions.properties` For each workflow transition, returns information about its properties. Transitions are included automatically if this expand is requested.
     *  `statuses` For each workflow, returns information about the statuses inside the workflow.
     *  `statuses.properties` For each workflow status, returns information about its properties. Statuses are included automatically if this expand is requested.
     *  `default` For each workflow, returns information about whether this is the default workflow.
     *  `schemes` For each workflow, returns information about the workflow schemes the workflow is assigned to.
     *  `projects` For each workflow, returns information about the projects the workflow is assigned to, through workflow schemes.
     *  `hasDraftWorkflow` For each workflow, returns information about whether the workflow has a draft version.
     *  `operations` For each workflow, returns information about the actions that can be undertaken on the workflow. */
  expand?: string;
  /** String used to perform a case-insensitive partial match with workflow name. */
  queryString?: string;
  /** [Order](#ordering) the results by a field:
    
     *  `name` Sorts by workflow name.
     *  `created` Sorts by create time.
     *  `updated` Sorts by update time. */
  orderBy?:
    | "name"
    | "-name"
    | "+name"
    | "created"
    | "-created"
    | "+created"
    | "updated"
    | "+updated"
    | "-updated";
  /** Filters active and inactive workflows. */
  isActive?: boolean;
};
export type GetWorkflowTransitionPropertiesApiResponse =
  /** status 200 200 response */ WorkflowTransitionProperty;
export type GetWorkflowTransitionPropertiesApiArg = {
  /** The ID of the transition. To get the ID, view the workflow in text mode in the Jira administration console. The ID is shown next to the transition. */
  transitionId: number;
  /** Some properties with keys that have the *jira.* prefix are reserved, which means they are not editable. To include these properties in the results, set this parameter to *true*. */
  includeReservedKeys?: boolean;
  /** The key of the property being returned, also known as the name of the property. If this parameter is not specified, all properties on the transition are returned. */
  key?: string;
  /** The name of the workflow that the transition belongs to. */
  workflowName: string;
  /** The workflow status. Set to *live* for active and inactive workflows, or *draft* for draft workflows. */
  workflowMode?: "live" | "draft";
};
export type UpdateWorkflowTransitionPropertyApiResponse =
  /** status 200 200 response */ WorkflowTransitionProperty;
export type UpdateWorkflowTransitionPropertyApiArg = {
  /** The ID of the transition. To get the ID, view the workflow in text mode in the Jira admin settings. The ID is shown next to the transition. */
  transitionId: number;
  /** The key of the property being updated, also known as the name of the property. Set this to the same value as the `key` defined in the request body. */
  key: string;
  /** The name of the workflow that the transition belongs to. */
  workflowName: string;
  /** The workflow status. Set to `live` for inactive workflows or `draft` for draft workflows. Active workflows cannot be edited. */
  workflowMode?: "live" | "draft";
  workflowTransitionProperty: WorkflowTransitionProperty;
};
export type CreateWorkflowTransitionPropertyApiResponse =
  /** status 200 200 response */ WorkflowTransitionProperty;
export type CreateWorkflowTransitionPropertyApiArg = {
  /** The ID of the transition. To get the ID, view the workflow in text mode in the Jira admin settings. The ID is shown next to the transition. */
  transitionId: number;
  /** The key of the property being added, also known as the name of the property. Set this to the same value as the `key` defined in the request body. */
  key: string;
  /** The name of the workflow that the transition belongs to. */
  workflowName: string;
  /** The workflow status. Set to *live* for inactive workflows or *draft* for draft workflows. Active workflows cannot be edited. */
  workflowMode?: "live" | "draft";
  workflowTransitionProperty: WorkflowTransitionProperty;
};
export type DeleteWorkflowTransitionPropertyApiResponse = unknown;
export type DeleteWorkflowTransitionPropertyApiArg = {
  /** The ID of the transition. To get the ID, view the workflow in text mode in the Jira admin settings. The ID is shown next to the transition. */
  transitionId: number;
  /** The name of the transition property to delete, also known as the name of the property. */
  key: string;
  /** The name of the workflow that the transition belongs to. */
  workflowName: string;
  /** The workflow status. Set to `live` for inactive workflows or `draft` for draft workflows. Active workflows cannot be edited. */
  workflowMode?: "live" | "draft";
};
export type DeleteInactiveWorkflowApiResponse =
  /** status 204 Returned if the workflow is deleted. */ undefined;
export type DeleteInactiveWorkflowApiArg = {
  /** The entity ID of the workflow. */
  entityId: string;
};
export type GetAllWorkflowSchemesApiResponse =
  /** status 200 Returned if the request is successful. */ PageBeanWorkflowScheme;
export type GetAllWorkflowSchemesApiArg = {
  /** The index of the first item to return in a page of results (page offset). */
  startAt?: number;
  /** The maximum number of items to return per page. */
  maxResults?: number;
};
export type CreateWorkflowSchemeApiResponse =
  /** status 201 Returned if the request is successful. */ WorkflowScheme;
export type CreateWorkflowSchemeApiArg = {
  workflowScheme: WorkflowScheme;
};
export type GetWorkflowSchemeProjectAssociationsApiResponse =
  /** status 200 Returned if the request is successful. */ ContainerOfWorkflowSchemeAssociations;
export type GetWorkflowSchemeProjectAssociationsApiArg = {
  /** The ID of a project to return the workflow schemes for. To include multiple projects, provide an ampersand-Jim: oneseparated list. For example, `projectId=10000&projectId=10001`. */
  projectId: number[];
};
export type AssignSchemeToProjectApiResponse =
  /** status 204 Returned if the request is successful. */ any;
export type AssignSchemeToProjectApiArg = {
  workflowSchemeProjectAssociation: WorkflowSchemeProjectAssociation;
};
export type GetWorkflowSchemeApiResponse =
  /** status 200 Returned if the request is successful. */ WorkflowScheme;
export type GetWorkflowSchemeApiArg = {
  /** The ID of the workflow scheme. Find this ID by editing the desired workflow scheme in Jira. The ID is shown in the URL as `schemeId`. For example, *schemeId=10301*. */
  id: number;
  /** Returns the workflow scheme's draft rather than scheme itself, if set to true. If the workflow scheme does not have a draft, then the workflow scheme is returned. */
  returnDraftIfExists?: boolean;
};
export type UpdateWorkflowSchemeApiResponse =
  /** status 200 Returned if the request is successful. */ WorkflowScheme;
export type UpdateWorkflowSchemeApiArg = {
  /** The ID of the workflow scheme. Find this ID by editing the desired workflow scheme in Jira. The ID is shown in the URL as `schemeId`. For example, *schemeId=10301*. */
  id: number;
  workflowScheme: WorkflowScheme;
};
export type DeleteWorkflowSchemeApiResponse =
  /** status 204 Returned if the request is successful. */ any;
export type DeleteWorkflowSchemeApiArg = {
  /** The ID of the workflow scheme. Find this ID by editing the desired workflow scheme in Jira. The ID is shown in the URL as `schemeId`. For example, *schemeId=10301*. */
  id: number;
};
export type CreateWorkflowSchemeDraftFromParentApiResponse =
  /** status 201 Returned if the request is successful. */ WorkflowScheme;
export type CreateWorkflowSchemeDraftFromParentApiArg = {
  /** The ID of the active workflow scheme that the draft is created from. */
  id: number;
};
export type GetDefaultWorkflowApiResponse =
  /** status 200 Returned if the request is successful. */ DefaultWorkflow;
export type GetDefaultWorkflowApiArg = {
  /** The ID of the workflow scheme. */
  id: number;
  /** Set to `true` to return the default workflow for the workflow scheme's draft rather than scheme itself. If the workflow scheme does not have a draft, then the default workflow for the workflow scheme is returned. */
  returnDraftIfExists?: boolean;
};
export type UpdateDefaultWorkflowApiResponse =
  /** status 200 Returned if the request is successful. */ WorkflowScheme;
export type UpdateDefaultWorkflowApiArg = {
  /** The ID of the workflow scheme. */
  id: number;
  /** The new default workflow. */
  defaultWorkflow: DefaultWorkflow;
};
export type DeleteDefaultWorkflowApiResponse =
  /** status 200 Returned if the request is successful. */ WorkflowScheme;
export type DeleteDefaultWorkflowApiArg = {
  /** The ID of the workflow scheme. */
  id: number;
  /** Set to true to create or update the draft of a workflow scheme and delete the mapping from the draft, when the workflow scheme cannot be edited. Defaults to `false`. */
  updateDraftIfNeeded?: boolean;
};
export type GetWorkflowSchemeDraftApiResponse =
  /** status 200 Returned if the request is successful. */ WorkflowScheme;
export type GetWorkflowSchemeDraftApiArg = {
  /** The ID of the active workflow scheme that the draft was created from. */
  id: number;
};
export type UpdateWorkflowSchemeDraftApiResponse =
  /** status 200 Returned if the request is successful. */ WorkflowScheme;
export type UpdateWorkflowSchemeDraftApiArg = {
  /** The ID of the active workflow scheme that the draft was created from. */
  id: number;
  workflowScheme: WorkflowScheme;
};
export type DeleteWorkflowSchemeDraftApiResponse = unknown;
export type DeleteWorkflowSchemeDraftApiArg = {
  /** The ID of the active workflow scheme that the draft was created from. */
  id: number;
};
export type GetDraftDefaultWorkflowApiResponse =
  /** status 200 Returned if the request is successful. */ DefaultWorkflow;
export type GetDraftDefaultWorkflowApiArg = {
  /** The ID of the workflow scheme that the draft belongs to. */
  id: number;
};
export type UpdateDraftDefaultWorkflowApiResponse =
  /** status 200 Returned if the request is successful. */ WorkflowScheme;
export type UpdateDraftDefaultWorkflowApiArg = {
  /** The ID of the workflow scheme that the draft belongs to. */
  id: number;
  /** The object for the new default workflow. */
  defaultWorkflow: DefaultWorkflow;
};
export type DeleteDraftDefaultWorkflowApiResponse =
  /** status 200 Returned if the request is successful. */ WorkflowScheme;
export type DeleteDraftDefaultWorkflowApiArg = {
  /** The ID of the workflow scheme that the draft belongs to. */
  id: number;
};
export type GetWorkflowSchemeDraftIssueTypeApiResponse =
  /** status 200 Returned if the request is successful. */ IssueTypeWorkflowMapping;
export type GetWorkflowSchemeDraftIssueTypeApiArg = {
  /** The ID of the workflow scheme that the draft belongs to. */
  id: number;
  /** The ID of the issue type. */
  issueType: string;
};
export type SetWorkflowSchemeDraftIssueTypeApiResponse =
  /** status 200 Returned if the request is successful. */ WorkflowScheme;
export type SetWorkflowSchemeDraftIssueTypeApiArg = {
  /** The ID of the workflow scheme that the draft belongs to. */
  id: number;
  /** The ID of the issue type. */
  issueType: string;
  /** The issue type-project mapping. */
  issueTypeWorkflowMapping: IssueTypeWorkflowMapping;
};
export type DeleteWorkflowSchemeDraftIssueTypeApiResponse =
  /** status 200 Returned if the request is successful. */ WorkflowScheme;
export type DeleteWorkflowSchemeDraftIssueTypeApiArg = {
  /** The ID of the workflow scheme that the draft belongs to. */
  id: number;
  /** The ID of the issue type. */
  issueType: string;
};
export type PublishDraftWorkflowSchemeApiResponse =
  /** status 204 Returned if the request is only for validation and is successful. */ undefined;
export type PublishDraftWorkflowSchemeApiArg = {
  /** The ID of the workflow scheme that the draft belongs to. */
  id: number;
  /** Whether the request only performs a validation. */
  validateOnly?: boolean;
  /** Details of the status mappings. */
  publishDraftWorkflowScheme: PublishDraftWorkflowScheme;
};
export type GetDraftWorkflowApiResponse =
  /** status 200 Returned if the request is successful. */ IssueTypesWorkflowMapping;
export type GetDraftWorkflowApiArg = {
  /** The ID of the workflow scheme that the draft belongs to. */
  id: number;
  /** The name of a workflow in the scheme. Limits the results to the workflow-issue type mapping for the specified workflow. */
  workflowName?: string;
};
export type UpdateDraftWorkflowMappingApiResponse =
  /** status 200 Returned if the request is successful. */ WorkflowScheme;
export type UpdateDraftWorkflowMappingApiArg = {
  /** The ID of the workflow scheme that the draft belongs to. */
  id: number;
  /** The name of the workflow. */
  workflowName: string;
  issueTypesWorkflowMapping: IssueTypesWorkflowMapping;
};
export type DeleteDraftWorkflowMappingApiResponse = unknown;
export type DeleteDraftWorkflowMappingApiArg = {
  /** The ID of the workflow scheme that the draft belongs to. */
  id: number;
  /** The name of the workflow. */
  workflowName: string;
};
export type GetWorkflowSchemeIssueTypeApiResponse =
  /** status 200 Returned if the request is successful. */ IssueTypeWorkflowMapping;
export type GetWorkflowSchemeIssueTypeApiArg = {
  /** The ID of the workflow scheme. */
  id: number;
  /** The ID of the issue type. */
  issueType: string;
  /** Returns the mapping from the workflow scheme's draft rather than the workflow scheme, if set to true. If no draft exists, the mapping from the workflow scheme is returned. */
  returnDraftIfExists?: boolean;
};
export type SetWorkflowSchemeIssueTypeApiResponse =
  /** status 200 Returned if the request is successful. */ WorkflowScheme;
export type SetWorkflowSchemeIssueTypeApiArg = {
  /** The ID of the workflow scheme. */
  id: number;
  /** The ID of the issue type. */
  issueType: string;
  /** The issue type-project mapping. */
  issueTypeWorkflowMapping: IssueTypeWorkflowMapping;
};
export type DeleteWorkflowSchemeIssueTypeApiResponse =
  /** status 200 Returned if the request is successful. */ WorkflowScheme;
export type DeleteWorkflowSchemeIssueTypeApiArg = {
  /** The ID of the workflow scheme. */
  id: number;
  /** The ID of the issue type. */
  issueType: string;
  /** Set to true to create or update the draft of a workflow scheme and update the mapping in the draft, when the workflow scheme cannot be edited. Defaults to `false`. */
  updateDraftIfNeeded?: boolean;
};
export type GetWorkflowApiResponse =
  /** status 200 Returned if the request is successful. */ IssueTypesWorkflowMapping;
export type GetWorkflowApiArg = {
  /** The ID of the workflow scheme. */
  id: number;
  /** The name of a workflow in the scheme. Limits the results to the workflow-issue type mapping for the specified workflow. */
  workflowName?: string;
  /** Returns the mapping from the workflow scheme's draft rather than the workflow scheme, if set to true. If no draft exists, the mapping from the workflow scheme is returned. */
  returnDraftIfExists?: boolean;
};
export type UpdateWorkflowMappingApiResponse =
  /** status 200 Returned if the request is successful. */ WorkflowScheme;
export type UpdateWorkflowMappingApiArg = {
  /** The ID of the workflow scheme. */
  id: number;
  /** The name of the workflow. */
  workflowName: string;
  issueTypesWorkflowMapping: IssueTypesWorkflowMapping;
};
export type DeleteWorkflowMappingApiResponse = unknown;
export type DeleteWorkflowMappingApiArg = {
  /** The ID of the workflow scheme. */
  id: number;
  /** The name of the workflow. */
  workflowName: string;
  /** Set to true to create or update the draft of a workflow scheme and delete the mapping from the draft, when the workflow scheme cannot be edited. Defaults to `false`. */
  updateDraftIfNeeded?: boolean;
};
export type GetIdsOfWorklogsDeletedSinceApiResponse =
  /** status 200 Returned if the request is successful. */ ChangedWorklogs;
export type GetIdsOfWorklogsDeletedSinceApiArg = {
  /** The date and time, as a UNIX timestamp in milliseconds, after which deleted worklogs are returned. */
  since?: number;
};
export type GetWorklogsForIdsApiResponse =
  /** status 200 Returned if the request is successful. */ Worklog[];
export type GetWorklogsForIdsApiArg = {
  /** Use [expand](#expansion) to include additional information about worklogs in the response. This parameter accepts `properties` that returns the properties of each worklog. */
  expand?: string;
  /** A JSON object containing a list of worklog IDs. */
  worklogIdsRequestBean: WorklogIdsRequestBean;
};
export type GetIdsOfWorklogsModifiedSinceApiResponse =
  /** status 200 Returned if the request is successful. */ ChangedWorklogs;
export type GetIdsOfWorklogsModifiedSinceApiArg = {
  /** The date and time, as a UNIX timestamp in milliseconds, after which updated worklogs are returned. */
  since?: number;
  /** Use [expand](#expansion) to include additional information about worklogs in the response. This parameter accepts `properties` that returns the properties of each worklog. */
  expand?: string;
};
export type GetRestAtlassianConnect1AddonsByAddonKeyPropertiesApiResponse =
  /** status 200 Returned if the request is successful. */ PropertyKeys;
export type GetRestAtlassianConnect1AddonsByAddonKeyPropertiesApiArg = {
  /** The key of the app, as defined in its descriptor. */
  addonKey: string;
};
export type GetRestAtlassianConnect1AddonsByAddonKeyPropertiesAndPropertyKeyApiResponse =
  /** status 200 Returned if the request is successful. */ EntityProperty;
export type GetRestAtlassianConnect1AddonsByAddonKeyPropertiesAndPropertyKeyApiArg =
  {
    /** The key of the app, as defined in its descriptor. */
    addonKey: string;
    /** The key of the property. */
    propertyKey: string;
  };
export type PutRestAtlassianConnect1AddonsByAddonKeyPropertiesAndPropertyKeyApiResponse =
  /** status 200 Returned if the property is updated. */
    | OperationMessage
    | /** status 201 Returned is the property is created. */ OperationMessage;
export type PutRestAtlassianConnect1AddonsByAddonKeyPropertiesAndPropertyKeyApiArg =
  {
    /** The key of the app, as defined in its descriptor. */
    addonKey: string;
    /** The key of the property. */
    propertyKey: string;
    body: any;
  };
export type DeleteRestAtlassianConnect1AddonsByAddonKeyPropertiesAndPropertyKeyApiResponse =
  /** status 204 Returned if the request is successful. */ undefined;
export type DeleteRestAtlassianConnect1AddonsByAddonKeyPropertiesAndPropertyKeyApiArg =
  {
    /** The key of the app, as defined in its descriptor. */
    addonKey: string;
    /** The key of the property. */
    propertyKey: string;
  };
export type GetRestAtlassianConnect1AppModuleDynamicApiResponse =
  /** status 200 Returned if the request is successful. */ ConnectModules;
export type GetRestAtlassianConnect1AppModuleDynamicApiArg = void;
export type PostRestAtlassianConnect1AppModuleDynamicApiResponse =
  /** status 200 Returned if the request is successful. */ undefined;
export type PostRestAtlassianConnect1AppModuleDynamicApiArg = {
  connectModules: ConnectModules;
};
export type DeleteRestAtlassianConnect1AppModuleDynamicApiResponse =
  /** status 204 Returned if the request is successful. */ undefined;
export type DeleteRestAtlassianConnect1AppModuleDynamicApiArg = {
  /** The key of the module to remove. To include multiple module keys, provide multiple copies of this parameter.
    For example, `moduleKey=dynamic-attachment-entity-property&moduleKey=dynamic-select-field`.
    Nonexistent keys are ignored. */
  moduleKey?: string[];
};
export type PutRestAtlassianConnect1MigrationFieldApiResponse =
  /** status 200 Returned if the request is successful. */ any;
export type PutRestAtlassianConnect1MigrationFieldApiArg = {
  /** The ID of the transfer. */
  "Atlassian-Transfer-Id": string;
  connectCustomFieldValues: ConnectCustomFieldValues;
};
export type PutRestAtlassianConnect1MigrationPropertiesByEntityTypeApiResponse =
  unknown;
export type PutRestAtlassianConnect1MigrationPropertiesByEntityTypeApiArg = {
  /** The app migration transfer ID. */
  "Atlassian-Transfer-Id": string;
  /** The type indicating the object that contains the entity properties. */
  entityType:
    | "IssueProperty"
    | "CommentProperty"
    | "DashboardItemProperty"
    | "IssueTypeProperty"
    | "ProjectProperty"
    | "UserProperty"
    | "WorklogProperty"
    | "BoardProperty"
    | "SprintProperty";
  body: EntityPropertyDetails[];
};
export type PostRestAtlassianConnect1MigrationWorkflowRuleSearchApiResponse =
  /** status 200 Returned if the request is successful. */ WorkflowRulesSearchDetails;
export type PostRestAtlassianConnect1MigrationWorkflowRuleSearchApiArg = {
  /** The app migration transfer ID. */
  "Atlassian-Transfer-Id": string;
  workflowRulesSearch: WorkflowRulesSearch;
};
export type AnnouncementBannerConfiguration = {
  message?: string;
  isDismissible?: boolean;
  isEnabled?: boolean;
  hashId?: string;
  visibility?: "PUBLIC" | "PRIVATE";
};
export type ErrorCollection = {
  errorMessages?: string[];
  errors?: {
    [key: string]: string;
  };
  status?: number;
};
export type AnnouncementBannerConfigurationUpdate = {
  message?: string;
  isDismissible?: boolean;
  isEnabled?: boolean;
  visibility?: string;
};
export type MultipleCustomFieldValuesUpdate = {
  customField: string;
  issueIds: number[];
  value: any;
};
export type MultipleCustomFieldValuesUpdateDetails = {
  updates?: MultipleCustomFieldValuesUpdate[];
};
export type ContextualConfiguration = {
  id: string;
  fieldContextId: string;
  configuration?: any;
  schema?: any;
};
export type PageBeanContextualConfiguration = {
  self?: string;
  nextPage?: string;
  maxResults?: number;
  startAt?: number;
  total?: number;
  isLast?: boolean;
  values?: ContextualConfiguration[];
};
export type CustomFieldConfigurations = {
  configurations: ContextualConfiguration[];
};
export type CustomFieldValueUpdate = {
  issueIds: number[];
  value: any;
};
export type CustomFieldValueUpdateDetails = {
  updates?: CustomFieldValueUpdate[];
};
export type ApplicationProperty = {
  id?: string;
  key?: string;
  value?: string;
  name?: string;
  desc?: string;
  type?: string;
  defaultValue?: string;
  example?: string;
  allowedValues?: string[];
};
export type SimpleApplicationPropertyBean = {
  id?: string;
  value?: string;
};
export type GroupName = {
  name?: string;
  groupId?: string | null;
  self?: string;
};
export type ApplicationRole = {
  key?: string;
  groups?: string[];
  groupDetails?: GroupName[];
  name?: string;
  defaultGroups?: string[];
  defaultGroupsDetails?: GroupName[];
  selectedByDefault?: boolean;
  defined?: boolean;
  numberOfSeats?: number;
  remainingSeats?: number;
  userCount?: number;
  userCountDescription?: string;
  hasUnlimitedSeats?: boolean;
  platform?: boolean;
};
export type AttachmentSettings = {
  enabled?: boolean;
  uploadLimit?: number;
};
export type AvatarUrlsBean = {
  "16x16"?: string;
  "24x24"?: string;
  "32x32"?: string;
  "48x48"?: string;
};
export type ListWrapperCallbackGroupName = object;
export type SimpleListWrapperGroupName = {
  size?: number;
  items?: GroupName[];
  pagingCallback?: ListWrapperCallbackGroupName;
  callback?: ListWrapperCallbackGroupName;
  "max-results"?: number;
};
export type ListWrapperCallbackApplicationRole = object;
export type SimpleListWrapperApplicationRole = {
  size?: number;
  items?: ApplicationRole[];
  pagingCallback?: ListWrapperCallbackApplicationRole;
  callback?: ListWrapperCallbackApplicationRole;
  "max-results"?: number;
};
export type User = {
  self?: string;
  key?: string;
  accountId?: string;
  accountType?: "atlassian" | "app" | "customer" | "unknown";
  name?: string;
  emailAddress?: string;
  avatarUrls?: AvatarUrlsBean;
  displayName?: string;
  active?: boolean;
  timeZone?: string;
  locale?: string;
  groups?: SimpleListWrapperGroupName;
  applicationRoles?: SimpleListWrapperApplicationRole;
  expand?: string;
};
export type AttachmentMetadata = {
  id?: number;
  self?: string;
  filename?: string;
  author?: User;
  created?: string;
  size?: number;
  mimeType?: string;
  properties?: {
    [key: string]: any;
  };
  content?: string;
  thumbnail?: string;
};
export type AttachmentArchiveItemReadable = {
  path?: string;
  index?: number;
  size?: string;
  mediaType?: string;
  label?: string;
};
export type AttachmentArchiveMetadataReadable = {
  id?: number;
  name?: string;
  entries?: AttachmentArchiveItemReadable[];
  totalEntryCount?: number;
  mediaType?: string;
};
export type AttachmentArchiveEntry = {
  entryIndex?: number;
  abbreviatedName?: string;
  name?: string;
  size?: number;
  mediaType?: string;
};
export type AttachmentArchiveImpl = {
  entries?: AttachmentArchiveEntry[];
  totalEntryCount?: number;
};
export type AssociatedItemBean = {
  id?: string;
  name?: string;
  typeName?: string;
  parentId?: string;
  parentName?: string;
};
export type ChangedValueBean = {
  fieldName?: string;
  changedFrom?: string;
  changedTo?: string;
};
export type AuditRecordBean = {
  id?: number;
  summary?: string;
  remoteAddress?: string;
  authorKey?: string;
  created?: string;
  category?: string;
  eventSource?: string;
  description?: string;
  objectItem?: AssociatedItemBean;
  changedValues?: ChangedValueBean[];
  associatedItems?: AssociatedItemBean[];
};
export type AuditRecords = {
  offset?: number;
  limit?: number;
  total?: number;
  records?: AuditRecordBean[];
};
export type Avatar = {
  id: string;
  owner?: string;
  isSystemAvatar?: boolean;
  isSelected?: boolean;
  isDeletable?: boolean;
  fileName?: string;
  urls?: {
    [key: string]: string;
  };
  [key: string]: any;
};
export type SystemAvatars = {
  system?: Avatar[];
};
export type UserDetails = {
  self?: string;
  name?: string;
  key?: string;
  accountId?: string;
  emailAddress?: string;
  avatarUrls?: AvatarUrlsBean;
  displayName?: string;
  active?: boolean;
  timeZone?: string;
  accountType?: string;
};
export type Visibility = {
  type?: "group" | "role";
  value?: string;
  identifier?: string | null;
  [key: string]: any;
};
export type EntityProperty = {
  key?: string;
  value?: any;
};
export type Comment = {
  self?: string;
  id?: string;
  author?: UserDetails;
  body?: any;
  renderedBody?: string;
  updateAuthor?: UserDetails;
  created?: string;
  updated?: string;
  visibility?: Visibility;
  jsdPublic?: boolean;
  jsdAuthorCanSeeRequest?: boolean;
  properties?: EntityProperty[];
  [key: string]: any;
};
export type PageBeanComment = {
  self?: string;
  nextPage?: string;
  maxResults?: number;
  startAt?: number;
  total?: number;
  isLast?: boolean;
  values?: Comment[];
};
export type IssueCommentListRequestBean = {
  ids: number[];
};
export type PropertyKey = {
  self?: string;
  key?: string;
};
export type PropertyKeys = {
  keys?: PropertyKey[];
};
export type ProjectComponent = {
  self?: string;
  id?: string;
  name?: string;
  description?: string;
  lead?: User;
  leadUserName?: string;
  leadAccountId?: string;
  assigneeType?:
    | "PROJECT_DEFAULT"
    | "COMPONENT_LEAD"
    | "PROJECT_LEAD"
    | "UNASSIGNED";
  assignee?: User;
  realAssigneeType?:
    | "PROJECT_DEFAULT"
    | "COMPONENT_LEAD"
    | "PROJECT_LEAD"
    | "UNASSIGNED";
  realAssignee?: User;
  isAssigneeTypeValid?: boolean;
  project?: string;
  projectId?: number;
};
export type ComponentIssuesCount = {
  self?: string;
  issueCount?: number;
};
export type TimeTrackingConfiguration = {
  workingHoursPerDay: number;
  workingDaysPerWeek: number;
  timeFormat: "pretty" | "days" | "hours";
  defaultUnit: "minute" | "hour" | "day" | "week";
};
export type Configuration = {
  votingEnabled?: boolean;
  watchingEnabled?: boolean;
  unassignedIssuesAllowed?: boolean;
  subTasksEnabled?: boolean;
  issueLinkingEnabled?: boolean;
  timeTrackingEnabled?: boolean;
  attachmentsEnabled?: boolean;
  timeTrackingConfiguration?: TimeTrackingConfiguration;
};
export type TimeTrackingProvider = {
  key: string;
  name?: string;
  url?: string;
};
export type CustomFieldOption = {
  self?: string;
  value?: string;
};
export type UserBeanAvatarUrls = {
  "24x24"?: string;
  "32x32"?: string;
  "16x16"?: string;
  "48x48"?: string;
};
export type UserBean = {
  key?: string;
  self?: string;
  name?: string;
  displayName?: string;
  active?: boolean;
  accountId?: string;
  avatarUrls?: UserBeanAvatarUrls;
};
export type UpdatedProjectCategory = {
  self?: string;
  id?: string;
  description?: string;
  name?: string;
};
export type ProjectDetails = {
  self?: string;
  id?: string;
  key?: string;
  name?: string;
  projectTypeKey?: "software" | "service_desk" | "business";
  simplified?: boolean;
  avatarUrls?: AvatarUrlsBean;
  projectCategory?: UpdatedProjectCategory;
};
export type Scope = {
  type?: "PROJECT" | "TEMPLATE";
  project?: ProjectDetails;
  [key: string]: any;
};
export type IssueTypeDetails = {
  self?: string;
  id?: string;
  description?: string;
  iconUrl?: string;
  name?: string;
  subtask?: boolean;
  avatarId?: number;
  entityId?: string;
  hierarchyLevel?: number;
  scope?: Scope;
};
export type SimpleLink = {
  id?: string;
  styleClass?: string;
  iconClass?: string;
  label?: string;
  title?: string;
  href?: string;
  weight?: number;
};
export type VersionIssuesStatus = {
  unmapped?: number;
  toDo?: number;
  inProgress?: number;
  done?: number;
  [key: string]: any;
};
export type Version = {
  expand?: string;
  self?: string;
  id?: string;
  description?: string;
  name?: string;
  archived?: boolean;
  released?: boolean;
  startDate?: string;
  releaseDate?: string;
  overdue?: boolean;
  userStartDate?: string;
  userReleaseDate?: string;
  project?: string;
  projectId?: number;
  moveUnfixedIssuesTo?: string;
  operations?: SimpleLink[];
  issuesStatusForFixVersion?: VersionIssuesStatus;
};
export type ProjectCategory = {
  self?: string;
  id?: string;
  name?: string;
  description?: string;
};
export type SimplifiedHierarchyLevel = {
  id?: number;
  name?: string;
  aboveLevelId?: number;
  belowLevelId?: number;
  projectConfigurationId?: number;
  level?: number;
  issueTypeIds?: number[];
  externalUuid?: string;
  globalHierarchyLevel?: "SUBTASK" | "BASE" | "EPIC";
};
export type Hierarchy = {
  baseLevelId?: number;
  levels?: SimplifiedHierarchyLevel[];
};
export type ProjectPermissions = {
  canEdit?: boolean;
};
export type ProjectInsight = {
  totalIssueCount?: number;
  lastIssueUpdateTime?: string;
};
export type ProjectLandingPageInfo = {
  url?: string;
  projectKey?: string;
  projectType?: string;
  attributes?: {
    [key: string]: string;
  };
  boardName?: string;
  boardId?: number;
  simpleBoard?: boolean;
  queueId?: number;
  queueName?: string;
  queueCategory?: string;
  simplified?: boolean;
};
export type Project = {
  expand?: string;
  self?: string;
  id?: string;
  key?: string;
  description?: string;
  lead?: User;
  components?: ProjectComponent[];
  issueTypes?: IssueTypeDetails[];
  url?: string;
  email?: string;
  assigneeType?: "PROJECT_LEAD" | "UNASSIGNED";
  versions?: Version[];
  name?: string;
  roles?: {
    [key: string]: string;
  };
  avatarUrls?: AvatarUrlsBean;
  projectCategory?: ProjectCategory;
  projectTypeKey?: "software" | "service_desk" | "business";
  simplified?: boolean;
  style?: "classic" | "next-gen";
  favourite?: boolean;
  isPrivate?: boolean;
  issueTypeHierarchy?: Hierarchy;
  permissions?: ProjectPermissions;
  properties?: {
    [key: string]: any;
  };
  uuid?: string;
  insight?: ProjectInsight;
  deleted?: boolean;
  retentionTillDate?: string;
  deletedDate?: string;
  deletedBy?: User;
  archived?: boolean;
  archivedDate?: string;
  archivedBy?: User;
  landingPageInfo?: ProjectLandingPageInfo;
};
export type ProjectRoleUser = {
  accountId?: string;
};
export type ProjectRoleGroup = {
  displayName?: string;
  name?: string;
  groupId?: string;
};
export type RoleActor = {
  id?: number;
  displayName?: string;
  type?: "atlassian-group-role-actor" | "atlassian-user-role-actor";
  name?: string;
  avatarUrl?: string;
  actorUser?: ProjectRoleUser;
  actorGroup?: ProjectRoleGroup;
};
export type ProjectRole = {
  self?: string;
  name?: string;
  id?: number;
  description?: string;
  actors?: RoleActor[];
  scope?: Scope;
  translatedName?: string;
  currentUserRole?: boolean;
  default?: boolean;
  admin?: boolean;
  roleConfigurable?: boolean;
};
export type SharePermission = {
  id?: number;
  type:
    | "user"
    | "group"
    | "project"
    | "projectRole"
    | "global"
    | "loggedin"
    | "authenticated"
    | "project-unknown";
  project?: Project;
  role?: ProjectRole;
  group?: GroupName;
  user?: UserBean;
};
export type Dashboard = {
  description?: string;
  id?: string;
  isFavourite?: boolean;
  name?: string;
  owner?: UserBean;
  popularity?: number;
  rank?: number;
  self?: string;
  sharePermissions?: SharePermission[];
  editPermissions?: SharePermission[];
  automaticRefreshMs?: number;
  view?: string;
  isWritable?: boolean;
};
export type PageOfDashboards = {
  startAt?: number;
  maxResults?: number;
  total?: number;
  prev?: string;
  next?: string;
  dashboards?: Dashboard[];
};
export type DashboardDetails = {
  name: string;
  description?: string;
  sharePermissions: SharePermission[];
  editPermissions: SharePermission[];
};
export type AvailableDashboardGadget = {
  moduleKey?: string;
  uri?: string;
  title: string;
};
export type AvailableDashboardGadgetsResponse = {
  gadgets: AvailableDashboardGadget[];
};
export type PageBeanDashboard = {
  self?: string;
  nextPage?: string;
  maxResults?: number;
  startAt?: number;
  total?: number;
  isLast?: boolean;
  values?: Dashboard[];
};
export type DashboardGadgetPosition = {
  "The row position of the gadget.": number;
  "The column position of the gadget.": number;
};
export type DashboardGadget = {
  id: number;
  moduleKey?: string;
  uri?: string;
  color:
    | "blue"
    | "red"
    | "yellow"
    | "green"
    | "cyan"
    | "purple"
    | "gray"
    | "white";
  position: DashboardGadgetPosition;
  title: string;
};
export type DashboardGadgetResponse = {
  gadgets: DashboardGadget[];
};
export type DashboardGadgetSettings = {
  moduleKey?: string;
  uri?: string;
  color?: string;
  position?: DashboardGadgetPosition;
  title?: string;
  ignoreUriAndModuleKeyValidation?: boolean;
};
export type DashboardGadgetUpdateRequest = {
  title?: string;
  color?: string;
  position?: DashboardGadgetPosition;
};
export type IssueEvent = {
  id?: number;
  name?: string;
};
export type JiraExpressionValidationError = {
  line?: number;
  column?: number;
  expression?: string;
  message: string;
  type: "syntax" | "type" | "other";
};
export type JiraExpressionComplexity = {
  expensiveOperations: string;
  variables?: {
    [key: string]: string;
  };
};
export type JiraExpressionAnalysis = {
  expression: string;
  errors?: JiraExpressionValidationError[];
  valid: boolean;
  type?: string;
  complexity?: JiraExpressionComplexity;
};
export type JiraExpressionsAnalysis = {
  results: JiraExpressionAnalysis[];
};
export type JiraExpressionForAnalysis = {
  expressions: string[];
  contextVariables?: {
    [key: string]: string;
  };
};
export type JiraExpressionsComplexityValueBean = {
  value: number;
  limit: number;
};
export type JiraExpressionsComplexityBean = {
  steps: JiraExpressionsComplexityValueBean;
  expensiveOperations: JiraExpressionsComplexityValueBean;
  beans: JiraExpressionsComplexityValueBean;
  primitiveValues: JiraExpressionsComplexityValueBean;
};
export type IssuesJqlMetaDataBean = {
  startAt: number;
  maxResults: number;
  count: number;
  totalCount: number;
  validationWarnings?: string[];
};
export type IssuesMetaBean = {
  jql?: IssuesJqlMetaDataBean;
};
export type JiraExpressionEvaluationMetaDataBean = {
  complexity?: JiraExpressionsComplexityBean;
  issues?: IssuesMetaBean;
};
export type JiraExpressionResult = {
  value: any;
  meta?: JiraExpressionEvaluationMetaDataBean;
};
export type IdOrKeyBean = {
  id?: number;
  key?: string;
};
export type JexpJqlIssues = {
  query?: string;
  startAt?: number;
  maxResults?: number;
  validation?: "strict" | "warn" | "none";
};
export type JexpIssues = {
  jql?: JexpJqlIssues;
};
export type UserContextVariable = {
  type: string;
  accountId: string;
};
export type IssueContextVariable = {
  type: string;
  id?: number;
  key?: string;
};
export type JsonContextVariable = {
  type: string;
  value?: object;
};
export type CustomContextVariable =
  | ({
      type: "user";
    } & UserContextVariable)
  | ({
      type: "issue";
    } & IssueContextVariable)
  | ({
      type: "json";
    } & JsonContextVariable);
export type JiraExpressionEvalContextBean = {
  issue?: IdOrKeyBean;
  issues?: JexpIssues;
  project?: IdOrKeyBean;
  sprint?: number;
  board?: number;
  serviceDesk?: number;
  customerRequest?: number;
  custom?: CustomContextVariable[];
};
export type JiraExpressionEvalRequestBean = {
  expression: string;
  context?: JiraExpressionEvalContextBean;
};
export type JsonTypeBean = {
  type: string;
  items?: string;
  system?: string;
  custom?: string;
  customId?: number;
  configuration?: {
    [key: string]: any;
  };
};
export type FieldDetails = {
  id?: string;
  key?: string;
  name?: string;
  custom?: boolean;
  orderable?: boolean;
  navigable?: boolean;
  searchable?: boolean;
  clauseNames?: string[];
  scope?: Scope;
  schema?: JsonTypeBean;
};
export type CustomFieldDefinitionJsonBean = {
  name: string;
  description?: string;
  type: string;
  searcherKey?:
    | "com.atlassian.jira.plugin.system.customfieldtypes:cascadingselectsearcher"
    | "com.atlassian.jira.plugin.system.customfieldtypes:daterange"
    | "com.atlassian.jira.plugin.system.customfieldtypes:datetimerange"
    | "com.atlassian.jira.plugin.system.customfieldtypes:exactnumber"
    | "com.atlassian.jira.plugin.system.customfieldtypes:exacttextsearcher"
    | "com.atlassian.jira.plugin.system.customfieldtypes:grouppickersearcher"
    | "com.atlassian.jira.plugin.system.customfieldtypes:labelsearcher"
    | "com.atlassian.jira.plugin.system.customfieldtypes:multiselectsearcher"
    | "com.atlassian.jira.plugin.system.customfieldtypes:numberrange"
    | "com.atlassian.jira.plugin.system.customfieldtypes:projectsearcher"
    | "com.atlassian.jira.plugin.system.customfieldtypes:textsearcher"
    | "com.atlassian.jira.plugin.system.customfieldtypes:userpickergroupsearcher"
    | "com.atlassian.jira.plugin.system.customfieldtypes:versionsearcher";
};
export type FieldLastUsed = {
  type?: "TRACKED" | "NOT_TRACKED" | "NO_INFORMATION";
  value?: string;
};
export type Field = {
  id: string;
  name: string;
  schema: JsonTypeBean;
  description?: string;
  key?: string;
  isLocked?: boolean;
  isUnscreenable?: boolean;
  searcherKey?: string;
  screensCount?: number;
  contextsCount?: number;
  lastUsed?: FieldLastUsed;
};
export type PageBeanField = {
  self?: string;
  nextPage?: string;
  maxResults?: number;
  startAt?: number;
  total?: number;
  isLast?: boolean;
  values?: Field[];
};
export type UpdateCustomFieldDetails = {
  name?: string;
  description?: string;
  searcherKey?:
    | "com.atlassian.jira.plugin.system.customfieldtypes:cascadingselectsearcher"
    | "com.atlassian.jira.plugin.system.customfieldtypes:daterange"
    | "com.atlassian.jira.plugin.system.customfieldtypes:datetimerange"
    | "com.atlassian.jira.plugin.system.customfieldtypes:exactnumber"
    | "com.atlassian.jira.plugin.system.customfieldtypes:exacttextsearcher"
    | "com.atlassian.jira.plugin.system.customfieldtypes:grouppickersearcher"
    | "com.atlassian.jira.plugin.system.customfieldtypes:labelsearcher"
    | "com.atlassian.jira.plugin.system.customfieldtypes:multiselectsearcher"
    | "com.atlassian.jira.plugin.system.customfieldtypes:numberrange"
    | "com.atlassian.jira.plugin.system.customfieldtypes:projectsearcher"
    | "com.atlassian.jira.plugin.system.customfieldtypes:textsearcher"
    | "com.atlassian.jira.plugin.system.customfieldtypes:userpickergroupsearcher"
    | "com.atlassian.jira.plugin.system.customfieldtypes:versionsearcher";
};
export type CustomFieldContext = {
  id: string;
  name: string;
  description: string;
  isGlobalContext: boolean;
  isAnyIssueType: boolean;
};
export type PageBeanCustomFieldContext = {
  self?: string;
  nextPage?: string;
  maxResults?: number;
  startAt?: number;
  total?: number;
  isLast?: boolean;
  values?: CustomFieldContext[];
};
export type CreateCustomFieldContext = {
  id?: string;
  name: string;
  description?: string;
  projectIds?: string[];
  issueTypeIds?: string[];
};
export type CustomFieldContextDefaultValueCascadingOption = {
  contextId: string;
  optionId: string;
  cascadingOptionId?: string;
  type: string;
};
export type CustomFieldContextDefaultValueMultipleOption = {
  contextId: string;
  optionIds: string[];
  type: string;
};
export type CustomFieldContextDefaultValueSingleOption = {
  contextId: string;
  optionId: string;
  type: string;
};
export type UserFilter = {
  enabled: boolean;
  groups?: string[];
  roleIds?: number[];
};
export type CustomFieldContextSingleUserPickerDefaults = {
  contextId: string;
  accountId: string;
  userFilter: UserFilter;
  type: string;
};
export type CustomFieldContextDefaultValueMultiUserPicker = {
  contextId: string;
  accountIds: string[];
  type: string;
};
export type CustomFieldContextDefaultValueSingleGroupPicker = {
  contextId: string;
  groupId: string;
  type: string;
};
export type CustomFieldContextDefaultValueMultipleGroupPicker = {
  contextId: string;
  groupIds: string[];
  type: string;
};
export type CustomFieldContextDefaultValueDate = {
  date?: string;
  useCurrent?: boolean;
  type: string;
};
export type CustomFieldContextDefaultValueDateTime = {
  dateTime?: string;
  useCurrent?: boolean;
  type: string;
};
export type CustomFieldContextDefaultValueUrl = {
  contextId: string;
  url: string;
  type: string;
};
export type CustomFieldContextDefaultValueProject = {
  contextId: string;
  projectId: string;
  type: string;
};
export type CustomFieldContextDefaultValueFloat = {
  number: number;
  type: string;
};
export type CustomFieldContextDefaultValueLabels = {
  labels: string[];
  type: string;
};
export type CustomFieldContextDefaultValueTextField = {
  text?: string;
  type: string;
};
export type CustomFieldContextDefaultValueTextArea = {
  text?: string;
  type: string;
};
export type CustomFieldContextDefaultValueReadOnly = {
  text?: string;
  type: string;
};
export type CustomFieldContextDefaultValueSingleVersionPicker = {
  versionId: string;
  versionOrder?: string;
  type: string;
};
export type CustomFieldContextDefaultValueMultipleVersionPicker = {
  versionIds: string[];
  versionOrder?: string;
  type: string;
};
export type CustomFieldContextDefaultValueForgeStringField = {
  text?: string;
};
export type CustomFieldContextDefaultValueForgeMultiStringField = {
  values?: string[];
  type: string;
};
export type CustomFieldContextDefaultValueForgeObjectField = {
  object?: object;
  type: string;
};
export type CustomFieldContextDefaultValueForgeDateTimeField = {
  dateTime?: string;
  useCurrent?: boolean;
};
export type CustomFieldContextDefaultValueForgeGroupField = {
  contextId: string;
  groupId: string;
};
export type CustomFieldContextDefaultValueForgeMultiGroupField = {
  contextId: string;
  groupIds: string[];
};
export type CustomFieldContextDefaultValueForgeNumberField = {
  number: number;
};
export type CustomFieldContextDefaultValueForgeUserField = {
  contextId: string;
  accountId: string;
  userFilter: UserFilter;
};
export type CustomFieldContextDefaultValueForgeMultiUserField = {
  contextId: string;
  accountIds: string[];
};
export type CustomFieldContextDefaultValue =
  | ({
      type: "option.cascading";
    } & CustomFieldContextDefaultValueCascadingOption)
  | ({
      type: "option.multiple";
    } & CustomFieldContextDefaultValueMultipleOption)
  | ({
      type: "option.single";
    } & CustomFieldContextDefaultValueSingleOption)
  | ({
      type: "single.user.select";
    } & CustomFieldContextSingleUserPickerDefaults)
  | ({
      type: "multi.user.select";
    } & CustomFieldContextDefaultValueMultiUserPicker)
  | ({
      type: "grouppicker.single";
    } & CustomFieldContextDefaultValueSingleGroupPicker)
  | ({
      type: "grouppicker.multiple";
    } & CustomFieldContextDefaultValueMultipleGroupPicker)
  | ({
      type: "datepicker";
    } & CustomFieldContextDefaultValueDate)
  | ({
      type: "datetimepicker";
    } & CustomFieldContextDefaultValueDateTime)
  | ({
      type: "url";
    } & CustomFieldContextDefaultValueUrl)
  | ({
      type: "project";
    } & CustomFieldContextDefaultValueProject)
  | ({
      type: "float";
    } & CustomFieldContextDefaultValueFloat)
  | ({
      type: "labels";
    } & CustomFieldContextDefaultValueLabels)
  | ({
      type: "textfield";
    } & CustomFieldContextDefaultValueTextField)
  | ({
      type: "textarea";
    } & CustomFieldContextDefaultValueTextArea)
  | ({
      type: "readonly";
    } & CustomFieldContextDefaultValueReadOnly)
  | ({
      type: "version.single";
    } & CustomFieldContextDefaultValueSingleVersionPicker)
  | ({
      type: "version.multiple";
    } & CustomFieldContextDefaultValueMultipleVersionPicker)
  | ({
      type: "forge.string";
    } & CustomFieldContextDefaultValueForgeStringField)
  | ({
      type: "forge.string.list";
    } & CustomFieldContextDefaultValueForgeMultiStringField)
  | ({
      type: "forge.object";
    } & CustomFieldContextDefaultValueForgeObjectField)
  | ({
      type: "forge.datetime";
    } & CustomFieldContextDefaultValueForgeDateTimeField)
  | ({
      type: "forge.group";
    } & CustomFieldContextDefaultValueForgeGroupField)
  | ({
      type: "forge.group.list";
    } & CustomFieldContextDefaultValueForgeMultiGroupField)
  | ({
      type: "forge.number";
    } & CustomFieldContextDefaultValueForgeNumberField)
  | ({
      type: "forge.user";
    } & CustomFieldContextDefaultValueForgeUserField)
  | ({
      type: "forge.user.list";
    } & CustomFieldContextDefaultValueForgeMultiUserField);
export type PageBeanCustomFieldContextDefaultValue = {
  self?: string;
  nextPage?: string;
  maxResults?: number;
  startAt?: number;
  total?: number;
  isLast?: boolean;
  values?: CustomFieldContextDefaultValue[];
};
export type CustomFieldContextDefaultValueUpdate = {
  defaultValues?: CustomFieldContextDefaultValue[];
};
export type IssueTypeToContextMapping = {
  contextId: string;
  issueTypeId?: string;
  isAnyIssueType?: boolean;
};
export type PageBeanIssueTypeToContextMapping = {
  self?: string;
  nextPage?: string;
  maxResults?: number;
  startAt?: number;
  total?: number;
  isLast?: boolean;
  values?: IssueTypeToContextMapping[];
};
export type ContextForProjectAndIssueType = {
  projectId: string;
  issueTypeId: string;
  contextId: string;
};
export type PageBeanContextForProjectAndIssueType = {
  self?: string;
  nextPage?: string;
  maxResults?: number;
  startAt?: number;
  total?: number;
  isLast?: boolean;
  values?: ContextForProjectAndIssueType[];
};
export type ProjectIssueTypeMapping = {
  projectId: string;
  issueTypeId: string;
};
export type ProjectIssueTypeMappings = {
  mappings: ProjectIssueTypeMapping[];
};
export type CustomFieldContextProjectMapping = {
  contextId: string;
  projectId?: string;
  isGlobalContext?: boolean;
};
export type PageBeanCustomFieldContextProjectMapping = {
  self?: string;
  nextPage?: string;
  maxResults?: number;
  startAt?: number;
  total?: number;
  isLast?: boolean;
  values?: CustomFieldContextProjectMapping[];
};
export type CustomFieldContextUpdateDetails = {
  name?: string;
  description?: string;
};
export type IssueTypeIds = {
  issueTypeIds: string[];
};
export type CustomFieldContextOption = {
  id: string;
  value: string;
  optionId?: string;
  disabled: boolean;
};
export type PageBeanCustomFieldContextOption = {
  self?: string;
  nextPage?: string;
  maxResults?: number;
  startAt?: number;
  total?: number;
  isLast?: boolean;
  values?: CustomFieldContextOption[];
};
export type CustomFieldOptionUpdate = {
  id: string;
  value?: string;
  disabled?: boolean;
};
export type CustomFieldUpdatedContextOptionsList = {
  options?: CustomFieldOptionUpdate[];
};
export type BulkCustomFieldOptionUpdateRequest = {
  options?: CustomFieldOptionUpdate[];
};
export type CustomFieldCreatedContextOptionsList = {
  options?: CustomFieldContextOption[];
};
export type CustomFieldOptionCreate = {
  value: string;
  optionId?: string;
  disabled?: boolean;
};
export type BulkCustomFieldOptionCreateRequest = {
  options?: CustomFieldOptionCreate[];
};
export type OrderOfCustomFieldOptions = {
  customFieldOptionIds: string[];
  after?: string;
  position?: "First" | "Last";
};
export type ProjectIds = {
  projectIds: string[];
};
export type Context = {
  id?: number;
  name?: string;
  scope?: Scope;
};
export type PageBeanContext = {
  self?: string;
  nextPage?: string;
  maxResults?: number;
  startAt?: number;
  total?: number;
  isLast?: boolean;
  values?: Context[];
};
export type ScreenableTab = {
  id?: number;
  name: string;
};
export type ScreenWithTab = {
  id?: number;
  name?: string;
  description?: string;
  scope?: Scope;
  tab?: ScreenableTab;
};
export type PageBeanScreenWithTab = {
  self?: string;
  nextPage?: string;
  maxResults?: number;
  startAt?: number;
  total?: number;
  isLast?: boolean;
  values?: ScreenWithTab[];
};
export type ProjectScopeBean = {
  id?: number;
  attributes?: ("notSelectable" | "defaultValue")[];
};
export type GlobalScopeBean = {
  attributes?: ("notSelectable" | "defaultValue")[];
};
export type IssueFieldOptionScopeBean = {
  projects?: number[];
  projects2?: ProjectScopeBean[];
  global?: GlobalScopeBean;
};
export type IssueFieldOptionConfiguration = {
  scope?: IssueFieldOptionScopeBean;
  attributes?: ("notSelectable" | "defaultValue")[];
};
export type IssueFieldOption = {
  id: number;
  value: string;
  properties?: {
    [key: string]: any;
  };
  config?: IssueFieldOptionConfiguration;
};
export type PageBeanIssueFieldOption = {
  self?: string;
  nextPage?: string;
  maxResults?: number;
  startAt?: number;
  total?: number;
  isLast?: boolean;
  values?: IssueFieldOption[];
};
export type IssueFieldOptionCreateBean = {
  value: string;
  properties?: {
    [key: string]: any;
  };
  config?: IssueFieldOptionConfiguration;
  [key: string]: any;
};
export type SimpleErrorCollection = {
  errors?: {
    [key: string]: string;
  };
  errorMessages?: string[];
  httpStatusCode?: number;
};
export type RemoveOptionFromIssuesResult = {
  modifiedIssues?: number[];
  unmodifiedIssues?: number[];
  errors?: SimpleErrorCollection;
};
export type TaskProgressBeanRemoveOptionFromIssuesResult = {
  self: string;
  id: string;
  description?: string;
  status:
    | "ENQUEUED"
    | "RUNNING"
    | "COMPLETE"
    | "FAILED"
    | "CANCEL_REQUESTED"
    | "CANCELLED"
    | "DEAD";
  message?: string;
  result?: RemoveOptionFromIssuesResult;
  submittedBy: number;
  progress: number;
  elapsedRuntime: number;
  submitted: number;
  started?: number;
  finished?: number;
  lastUpdate: number;
};
export type TaskProgressBeanObject = {
  self: string;
  id: string;
  description?: string;
  status:
    | "ENQUEUED"
    | "RUNNING"
    | "COMPLETE"
    | "FAILED"
    | "CANCEL_REQUESTED"
    | "CANCELLED"
    | "DEAD";
  message?: string;
  result?: any;
  submittedBy: number;
  progress: number;
  elapsedRuntime: number;
  submitted: number;
  started?: number;
  finished?: number;
  lastUpdate: number;
};
export type FieldConfigurationDetails = {
  name: string;
  description?: string;
};
export type PageBeanFieldConfigurationDetails = {
  self?: string;
  nextPage?: string;
  maxResults?: number;
  startAt?: number;
  total?: number;
  isLast?: boolean;
  values?: FieldConfigurationDetails[];
};
export type FieldConfiguration = {
  id: number;
  name: string;
  description: string;
  isDefault?: boolean;
};
export type FieldConfigurationItem = {
  id: string;
  description?: string;
  isHidden?: boolean;
  isRequired?: boolean;
  renderer?: string;
};
export type PageBeanFieldConfigurationItem = {
  self?: string;
  nextPage?: string;
  maxResults?: number;
  startAt?: number;
  total?: number;
  isLast?: boolean;
  values?: FieldConfigurationItem[];
};
export type FieldConfigurationItemsDetails = {
  fieldConfigurationItems: FieldConfigurationItem[];
};
export type FieldConfigurationScheme = {
  id: string;
  name: string;
  description?: string;
};
export type PageBeanFieldConfigurationScheme = {
  self?: string;
  nextPage?: string;
  maxResults?: number;
  startAt?: number;
  total?: number;
  isLast?: boolean;
  values?: FieldConfigurationScheme[];
};
export type UpdateFieldConfigurationSchemeDetails = {
  name: string;
  description?: string;
};
export type FieldConfigurationIssueTypeItem = {
  fieldConfigurationSchemeId: string;
  issueTypeId: string;
  fieldConfigurationId: string;
};
export type PageBeanFieldConfigurationIssueTypeItem = {
  self?: string;
  nextPage?: string;
  maxResults?: number;
  startAt?: number;
  total?: number;
  isLast?: boolean;
  values?: FieldConfigurationIssueTypeItem[];
};
export type FieldConfigurationSchemeProjects = {
  fieldConfigurationScheme?: FieldConfigurationScheme;
  projectIds: string[];
};
export type PageBeanFieldConfigurationSchemeProjects = {
  self?: string;
  nextPage?: string;
  maxResults?: number;
  startAt?: number;
  total?: number;
  isLast?: boolean;
  values?: FieldConfigurationSchemeProjects[];
};
export type FieldConfigurationSchemeProjectAssociation = {
  fieldConfigurationSchemeId?: string;
  projectId: string;
};
export type FieldConfigurationToIssueTypeMapping = {
  issueTypeId: string;
  fieldConfigurationId: string;
};
export type AssociateFieldConfigurationsWithIssueTypesRequest = {
  mappings: FieldConfigurationToIssueTypeMapping[];
};
export type IssueTypeIdsToRemove = {
  issueTypeIds: string[];
};
export type UserList = {
  size?: number;
  items?: User[];
  "max-results"?: number;
  "start-index"?: number;
  "end-index"?: number;
};
export type FilterSubscription = {
  id?: number;
  user?: User;
  group?: GroupName;
};
export type FilterSubscriptionsList = {
  size?: number;
  items?: FilterSubscription[];
  "max-results"?: number;
  "start-index"?: number;
  "end-index"?: number;
};
export type Filter = {
  self?: string;
  id?: string;
  name: string;
  description?: string;
  owner?: User;
  jql?: string;
  viewUrl?: string;
  searchUrl?: string;
  favourite?: boolean;
  favouritedCount?: number;
  sharePermissions?: SharePermission[];
  editPermissions?: SharePermission[];
  sharedUsers?: UserList;
  subscriptions?: FilterSubscriptionsList;
};
export type DefaultShareScope = {
  scope: "GLOBAL" | "AUTHENTICATED" | "PRIVATE";
};
export type FilterDetails = {
  expand?: string;
  self?: string;
  id?: string;
  name: string;
  description?: string;
  owner?: User;
  jql?: string;
  viewUrl?: string;
  searchUrl?: string;
  favourite?: boolean;
  favouritedCount?: number;
  sharePermissions?: SharePermission[];
  editPermissions?: SharePermission[];
  subscriptions?: FilterSubscription[];
};
export type PageBeanFilterDetails = {
  self?: string;
  nextPage?: string;
  maxResults?: number;
  startAt?: number;
  total?: number;
  isLast?: boolean;
  values?: FilterDetails[];
};
export type ColumnItem = {
  label?: string;
  value?: string;
};
export type ChangeFilterOwner = {
  accountId: string;
};
export type SharePermissionInputBean = {
  type:
    | "user"
    | "project"
    | "group"
    | "projectRole"
    | "global"
    | "authenticated";
  projectId?: string;
  groupname?: string;
  projectRoleId?: string;
  accountId?: string;
  rights?: number;
  groupId?: string;
};
export type PagedListUserDetailsApplicationUser = {
  size?: number;
  items?: UserDetails[];
  "max-results"?: number;
  "start-index"?: number;
  "end-index"?: number;
};
export type Group = {
  name?: string;
  groupId?: string | null;
  self?: string;
  users?: PagedListUserDetailsApplicationUser;
  expand?: string;
};
export type AddGroupBean = {
  name: string;
  [key: string]: any;
};
export type GroupDetails = {
  name?: string;
  groupId?: string | null;
};
export type PageBeanGroupDetails = {
  self?: string;
  nextPage?: string;
  maxResults?: number;
  startAt?: number;
  total?: number;
  isLast?: boolean;
  values?: GroupDetails[];
};
export type PageBeanUserDetails = {
  self?: string;
  nextPage?: string;
  maxResults?: number;
  startAt?: number;
  total?: number;
  isLast?: boolean;
  values?: UserDetails[];
};
export type UpdateUserToGroupBean = {
  name?: string;
  accountId?: string;
  [key: string]: any;
};
export type GroupLabel = {
  text?: string;
  title?: string;
  type?: "ADMIN" | "SINGLE" | "MULTIPLE";
};
export type FoundGroup = {
  name?: string;
  html?: string;
  labels?: GroupLabel[];
  groupId?: string;
};
export type FoundGroups = {
  header?: string;
  total?: number;
  groups?: FoundGroup[];
};
export type UserPickerUser = {
  accountId?: string;
  name?: string;
  key?: string;
  html?: string;
  displayName?: string;
  avatarUrl?: string;
};
export type FoundUsers = {
  users?: UserPickerUser[];
  total?: number;
  header?: string;
};
export type FoundUsersAndGroups = {
  users?: FoundUsers;
  groups?: FoundGroups;
};
export type LicensedApplication = {
  id: string;
  plan: "UNLICENSED" | "FREE" | "PAID";
};
export type License = {
  applications: LicensedApplication[];
};
export type NestedResponse = {
  status?: number;
  errorCollection?: ErrorCollection;
};
export type CreatedIssue = {
  id?: string;
  key?: string;
  self?: string;
  transition?: NestedResponse;
};
export type StatusCategory = {
  self?: string;
  id?: number;
  key?: string;
  colorName?: string;
  name?: string;
  [key: string]: any;
};
export type StatusDetails = {
  self?: string;
  description?: string;
  iconUrl?: string;
  name?: string;
  id?: string;
  statusCategory?: StatusCategory;
  [key: string]: any;
};
export type FieldMetadata = {
  required: boolean;
  schema: JsonTypeBean;
  name: string;
  key: string;
  autoCompleteUrl?: string;
  hasDefaultValue?: boolean;
  operations: string[];
  allowedValues?: any[];
  defaultValue?: any;
  configuration?: {
    [key: string]: any;
  };
};
export type IssueTransition = {
  id?: string;
  name?: string;
  to?: StatusDetails;
  hasScreen?: boolean;
  isGlobal?: boolean;
  isInitial?: boolean;
  isAvailable?: boolean;
  isConditional?: boolean;
  fields?: {
    [key: string]: FieldMetadata;
  };
  expand?: string;
  looped?: boolean;
  [key: string]: any;
};
export type FieldUpdateOperation = {
  add?: any;
  set?: any;
  remove?: any;
  edit?: any;
};
export type HistoryMetadataParticipant = {
  id?: string;
  displayName?: string;
  displayNameKey?: string;
  type?: string;
  avatarUrl?: string;
  url?: string;
  [key: string]: any;
};
export type HistoryMetadata = {
  type?: string;
  description?: string;
  descriptionKey?: string;
  activityDescription?: string;
  activityDescriptionKey?: string;
  emailDescription?: string;
  emailDescriptionKey?: string;
  actor?: HistoryMetadataParticipant;
  generator?: HistoryMetadataParticipant;
  cause?: HistoryMetadataParticipant;
  extraData?: {
    [key: string]: string;
  };
  [key: string]: any;
};
export type IssueUpdateDetails = {
  transition?: IssueTransition;
  fields?: {
    [key: string]: any;
  };
  update?: {
    [key: string]: FieldUpdateOperation[];
  };
  historyMetadata?: HistoryMetadata;
  properties?: EntityProperty[];
  [key: string]: any;
};
export type BulkOperationErrorResult = {
  status?: number;
  elementErrors?: ErrorCollection;
  failedElementNumber?: number;
};
export type CreatedIssues = {
  issues?: CreatedIssue[];
  errors?: BulkOperationErrorResult[];
};
export type IssuesUpdateBean = {
  issueUpdates?: IssueUpdateDetails[];
  [key: string]: any;
};
export type IssueTypeIssueCreateMetadata = {
  self?: string;
  id?: string;
  description?: string;
  iconUrl?: string;
  name?: string;
  subtask?: boolean;
  avatarId?: number;
  entityId?: string;
  hierarchyLevel?: number;
  scope?: Scope;
  expand?: string;
  fields?: {
    [key: string]: FieldMetadata;
  };
};
export type ProjectIssueCreateMetadata = {
  expand?: string;
  self?: string;
  id?: string;
  key?: string;
  name?: string;
  avatarUrls?: AvatarUrlsBean;
  issuetypes?: IssueTypeIssueCreateMetadata[];
};
export type IssueCreateMetadata = {
  expand?: string;
  projects?: ProjectIssueCreateMetadata[];
};
export type SuggestedIssue = {
  id?: number;
  key?: string;
  keyHtml?: string;
  img?: string;
  summary?: string;
  summaryText?: string;
};
export type IssuePickerSuggestionsIssueType = {
  label?: string;
  sub?: string;
  id?: string;
  msg?: string;
  issues?: SuggestedIssue[];
};
export type IssuePickerSuggestions = {
  sections?: IssuePickerSuggestionsIssueType[];
};
export type JsonNode = {
  array?: boolean;
  fields?: object;
  null?: boolean;
  elements?: object;
  floatingPointNumber?: boolean;
  pojo?: boolean;
  number?: boolean;
  integralNumber?: boolean;
  int?: boolean;
  long?: boolean;
  double?: boolean;
  bigDecimal?: boolean;
  bigInteger?: boolean;
  textual?: boolean;
  boolean?: boolean;
  binary?: boolean;
  containerNode?: boolean;
  object?: boolean;
  valueNode?: boolean;
  missingNode?: boolean;
  numberValue?: number;
  numberType?:
    | "INT"
    | "LONG"
    | "BIG_INTEGER"
    | "FLOAT"
    | "DOUBLE"
    | "BIG_DECIMAL";
  intValue?: number;
  longValue?: number;
  bigIntegerValue?: number;
  doubleValue?: number;
  decimalValue?: number;
  booleanValue?: boolean;
  binaryValue?: string[];
  valueAsInt?: number;
  valueAsLong?: number;
  valueAsDouble?: number;
  valueAsBoolean?: boolean;
  textValue?: string;
  valueAsText?: string;
  fieldNames?: object;
};
export type IssueEntityProperties = {
  entitiesIds?: number[];
  properties?: {
    [key: string]: JsonNode;
  };
};
export type IssueEntityPropertiesForMultiUpdate = {
  issueID?: number;
  properties?: {
    [key: string]: JsonNode;
  };
};
export type MultiIssueEntityProperties = {
  issues?: IssueEntityPropertiesForMultiUpdate[];
};
export type IssueFilterForBulkPropertySet = {
  entityIds?: number[];
  currentValue?: any;
  hasProperty?: boolean;
};
export type BulkIssuePropertyUpdateRequest = {
  value?: any;
  expression?: string;
  filter?: IssueFilterForBulkPropertySet;
};
export type IssueFilterForBulkPropertyDelete = {
  entityIds?: number[];
  currentValue?: any;
};
export type BulkIssueIsWatching = {
  issuesIsWatching?: {
    [key: string]: boolean;
  };
};
export type IssueList = {
  issueIds: string[];
};
export type LinkGroup = {
  id?: string;
  styleClass?: string;
  header?: SimpleLink;
  weight?: number;
  links?: SimpleLink[];
  groups?: LinkGroup[];
};
export type Operations = {
  linkGroups?: LinkGroup[];
  [key: string]: any;
};
export type IssueUpdateMetadata = {
  fields?: {
    [key: string]: FieldMetadata;
  };
};
export type ChangeDetails = {
  field?: string;
  fieldtype?: string;
  fieldId?: string;
  from?: string;
  fromString?: string;
  to?: string;
  toString?: string;
};
export type Changelog = {
  id?: string;
  author?: UserDetails;
  created?: string;
  items?: ChangeDetails[];
  historyMetadata?: HistoryMetadata;
};
export type PageOfChangelogs = {
  startAt?: number;
  maxResults?: number;
  total?: number;
  histories?: Changelog[];
};
export type IncludedFields = {
  included?: string[];
  actuallyIncluded?: string[];
  excluded?: string[];
};
export type IssueBean = {
  expand?: string;
  id?: string;
  self?: string;
  key?: string;
  renderedFields?: {
    [key: string]: any;
  };
  properties?: {
    [key: string]: any;
  };
  names?: {
    [key: string]: string;
  };
  schema?: {
    [key: string]: JsonTypeBean;
  };
  transitions?: IssueTransition[];
  operations?: Operations;
  editmeta?: IssueUpdateMetadata;
  changelog?: PageOfChangelogs;
  versionedRepresentations?: {
    [key: string]: {
      [key: string]: any;
    };
  };
  fieldsToInclude?: IncludedFields;
  fields?: {
    [key: string]: any;
  };
};
export type Attachment = {
  self?: string;
  id?: string;
  filename?: string;
  author?: UserDetails;
  created?: string;
  size?: number;
  mimeType?: string;
  content?: string;
  thumbnail?: string;
  [key: string]: any;
};
export type PageBeanChangelog = {
  self?: string;
  nextPage?: string;
  maxResults?: number;
  startAt?: number;
  total?: number;
  isLast?: boolean;
  values?: Changelog[];
};
export type IssueChangelogIds = {
  changelogIds: number[];
};
export type PageOfComments = {
  startAt?: number;
  maxResults?: number;
  total?: number;
  comments?: Comment[];
  [key: string]: any;
};
export type NotificationRecipients = {
  reporter?: boolean;
  assignee?: boolean;
  watchers?: boolean;
  voters?: boolean;
  users?: UserDetails[];
  groups?: GroupName[];
  groupIds?: string[];
  [key: string]: any;
};
export type RestrictedPermission = {
  id?: string;
  key?: string;
  [key: string]: any;
};
export type NotificationRecipientsRestrictions = {
  groups?: GroupName[];
  groupIds?: string[];
  permissions?: RestrictedPermission[];
};
export type Notification = {
  subject?: string;
  textBody?: string;
  htmlBody?: string;
  to?: NotificationRecipients;
  restrict?: NotificationRecipientsRestrictions;
  [key: string]: any;
};
export type Application = {
  type?: string;
  name?: string;
  [key: string]: any;
};
export type Icon = {
  url16x16?: string;
  title?: string;
  link?: string;
  [key: string]: any;
};
export type Status = {
  resolved?: boolean;
  icon?: Icon;
  [key: string]: any;
};
export type RemoteObject = {
  url: string;
  title: string;
  summary?: string;
  icon?: Icon;
  status?: Status;
  [key: string]: any;
};
export type RemoteIssueLink = {
  id?: number;
  self?: string;
  globalId?: string;
  application?: Application;
  relationship?: string;
  object?: RemoteObject;
};
export type RemoteIssueLinkIdentifies = {
  id?: number;
  self?: string;
};
export type RemoteIssueLinkRequest = {
  globalId?: string;
  application?: Application;
  relationship?: string;
  object: RemoteObject;
  [key: string]: any;
};
export type Transitions = {
  expand?: string;
  transitions?: IssueTransition[];
};
export type Votes = {
  self?: string;
  votes?: number;
  hasVoted?: boolean;
  voters?: User[];
};
export type Watchers = {
  self?: string;
  isWatching?: boolean;
  watchCount?: number;
  watchers?: UserDetails[];
};
export type Worklog = {
  self?: string;
  author?: UserDetails;
  updateAuthor?: UserDetails;
  comment?: any;
  created?: string;
  updated?: string;
  visibility?: Visibility;
  started?: string;
  timeSpent?: string;
  timeSpentSeconds?: number;
  id?: string;
  issueId?: string;
  properties?: EntityProperty[];
  [key: string]: any;
};
export type PageOfWorklogs = {
  startAt?: number;
  maxResults?: number;
  total?: number;
  worklogs?: Worklog[];
  [key: string]: any;
};
export type IssueLinkType = {
  id?: string;
  name?: string;
  inward?: string;
  outward?: string;
  self?: string;
};
export type Priority = {
  self?: string;
  statusColor?: string;
  description?: string;
  iconUrl?: string;
  name?: string;
  id?: string;
  isDefault?: boolean;
  [key: string]: any;
};
export type TimeTrackingDetails = {
  originalEstimate?: string;
  remainingEstimate?: string;
  timeSpent?: string;
  originalEstimateSeconds?: number;
  remainingEstimateSeconds?: number;
  timeSpentSeconds?: number;
};
export type Fields = {
  summary?: string;
  status?: StatusDetails;
  priority?: Priority;
  assignee?: UserDetails;
  timetracking?: TimeTrackingDetails;
  issuetype?: IssueTypeDetails;
  issueType?: IssueTypeDetails;
};
export type LinkedIssue = {
  id?: string;
  key?: string;
  self?: string;
  fields?: Fields;
};
export type LinkIssueRequestJsonBean = {
  type: IssueLinkType;
  inwardIssue: LinkedIssue;
  outwardIssue: LinkedIssue;
  comment?: Comment;
};
export type IssueLink = {
  id?: string;
  self?: string;
  type: IssueLinkType;
  inwardIssue: LinkedIssue;
  outwardIssue: LinkedIssue;
};
export type IssueLinkTypes = {
  issueLinkTypes?: IssueLinkType[];
};
export type SecurityLevel = {
  self?: string;
  id?: string;
  description?: string;
  name?: string;
};
export type SecurityScheme = {
  self?: string;
  id?: number;
  name?: string;
  description?: string;
  defaultSecurityLevelId?: number;
  levels?: SecurityLevel[];
};
export type SecuritySchemes = {
  issueSecuritySchemes?: SecurityScheme[];
};
export type PermissionHolder = {
  type: string;
  parameter?: string;
  value?: string;
  expand?: string;
};
export type IssueSecurityLevelMember = {
  id: number;
  issueSecurityLevelId: number;
  holder: PermissionHolder;
};
export type PageBeanIssueSecurityLevelMember = {
  self?: string;
  nextPage?: string;
  maxResults?: number;
  startAt?: number;
  total?: number;
  isLast?: boolean;
  values?: IssueSecurityLevelMember[];
};
export type IssueTypeCreateBean = {
  name: string;
  description?: string;
  type?: "subtask" | "standard";
  hierarchyLevel?: number;
};
export type IssueTypeUpdateBean = {
  name?: string;
  description?: string;
  avatarId?: number;
};
export type IssueTypeScheme = {
  id: string;
  name: string;
  description?: string;
  defaultIssueTypeId?: string;
  isDefault?: boolean;
};
export type PageBeanIssueTypeScheme = {
  self?: string;
  nextPage?: string;
  maxResults?: number;
  startAt?: number;
  total?: number;
  isLast?: boolean;
  values?: IssueTypeScheme[];
};
export type IssueTypeSchemeId = {
  issueTypeSchemeId: string;
};
export type IssueTypeSchemeDetails = {
  name: string;
  description?: string;
  defaultIssueTypeId?: string;
  issueTypeIds: string[];
};
export type IssueTypeSchemeMapping = {
  issueTypeSchemeId: string;
  issueTypeId: string;
};
export type PageBeanIssueTypeSchemeMapping = {
  self?: string;
  nextPage?: string;
  maxResults?: number;
  startAt?: number;
  total?: number;
  isLast?: boolean;
  values?: IssueTypeSchemeMapping[];
};
export type IssueTypeSchemeProjects = {
  issueTypeScheme: IssueTypeScheme;
  projectIds: string[];
};
export type PageBeanIssueTypeSchemeProjects = {
  self?: string;
  nextPage?: string;
  maxResults?: number;
  startAt?: number;
  total?: number;
  isLast?: boolean;
  values?: IssueTypeSchemeProjects[];
};
export type IssueTypeSchemeProjectAssociation = {
  issueTypeSchemeId: string;
  projectId: string;
};
export type IssueTypeSchemeUpdateDetails = {
  name?: string;
  description?: string;
  defaultIssueTypeId?: string;
};
export type OrderOfIssueTypes = {
  issueTypeIds: string[];
  after?: string;
  position?: "First" | "Last";
};
export type IssueTypeScreenScheme = {
  id: string;
  name: string;
  description?: string;
};
export type PageBeanIssueTypeScreenScheme = {
  self?: string;
  nextPage?: string;
  maxResults?: number;
  startAt?: number;
  total?: number;
  isLast?: boolean;
  values?: IssueTypeScreenScheme[];
};
export type IssueTypeScreenSchemeId = {
  id: string;
};
export type IssueTypeScreenSchemeMapping = {
  issueTypeId: string;
  screenSchemeId: string;
};
export type IssueTypeScreenSchemeDetails = {
  name: string;
  description?: string;
  issueTypeMappings: IssueTypeScreenSchemeMapping[];
};
export type IssueTypeScreenSchemeItem = {
  issueTypeScreenSchemeId: string;
  issueTypeId: string;
  screenSchemeId: string;
};
export type PageBeanIssueTypeScreenSchemeItem = {
  self?: string;
  nextPage?: string;
  maxResults?: number;
  startAt?: number;
  total?: number;
  isLast?: boolean;
  values?: IssueTypeScreenSchemeItem[];
};
export type IssueTypeScreenSchemesProjects = {
  issueTypeScreenScheme: IssueTypeScreenScheme;
  projectIds: string[];
};
export type PageBeanIssueTypeScreenSchemesProjects = {
  self?: string;
  nextPage?: string;
  maxResults?: number;
  startAt?: number;
  total?: number;
  isLast?: boolean;
  values?: IssueTypeScreenSchemesProjects[];
};
export type IssueTypeScreenSchemeProjectAssociation = {
  issueTypeScreenSchemeId?: string;
  projectId?: string;
};
export type IssueTypeScreenSchemeUpdateDetails = {
  name?: string;
  description?: string;
};
export type IssueTypeScreenSchemeMappingDetails = {
  issueTypeMappings: IssueTypeScreenSchemeMapping[];
};
export type UpdateDefaultScreenScheme = {
  screenSchemeId: string;
};
export type PageBeanProjectDetails = {
  self?: string;
  nextPage?: string;
  maxResults?: number;
  startAt?: number;
  total?: number;
  isLast?: boolean;
  values?: ProjectDetails[];
};
export type FieldReferenceData = {
  value?: string;
  displayName?: string;
  orderable?: "true" | "false";
  searchable?: "true" | "false";
  auto?: "true" | "false";
  cfid?: string;
  operators?: string[];
  types?: string[];
};
export type FunctionReferenceData = {
  value?: string;
  displayName?: string;
  isList?: "true" | "false";
  types?: string[];
};
export type JqlReferenceData = {
  visibleFieldNames?: FieldReferenceData[];
  visibleFunctionNames?: FunctionReferenceData[];
  jqlReservedWords?: string[];
};
export type SearchAutoCompleteFilter = {
  projectIds?: number[];
  includeCollapsedFields?: boolean;
};
export type AutoCompleteSuggestion = {
  value?: string;
  displayName?: string;
};
export type AutoCompleteSuggestions = {
  results?: AutoCompleteSuggestion[];
};
export type IssueMatchesForJql = {
  matchedIssues: number[];
  errors: string[];
};
export type IssueMatches = {
  matches: IssueMatchesForJql[];
};
export type IssuesAndJqlQueries = {
  jqls: string[];
  issueIds: number[];
};
export type CompoundClause = {
  clauses: JqlQueryClause[];
  operator: "and" | "or" | "not";
};
export type JqlQueryFieldEntityProperty = {
  entity: string;
  key: string;
  path: string;
  type?: "number" | "string" | "text" | "date" | "user";
};
export type JqlQueryField = {
  name: string;
  property?: JqlQueryFieldEntityProperty[];
};
export type ValueOperand = {
  value: string;
};
export type FunctionOperand = {
  function: string;
  arguments: string[];
};
export type KeywordOperand = {
  keyword: "empty";
};
export type JqlQueryUnitaryOperand =
  | ValueOperand
  | FunctionOperand
  | KeywordOperand;
export type ListOperand = {
  values: JqlQueryUnitaryOperand[];
};
export type JqlQueryClauseOperand =
  | ListOperand
  | ValueOperand
  | FunctionOperand
  | KeywordOperand;
export type FieldValueClause = {
  field: JqlQueryField;
  operator:
    | "="
    | "!="
    | ">"
    | "<"
    | ">="
    | "<="
    | "in"
    | "not in"
    | "~"
    | "~="
    | "is"
    | "is not";
  operand: JqlQueryClauseOperand;
};
export type JqlQueryClauseTimePredicate = {
  operator: "before" | "after" | "from" | "to" | "on" | "during" | "by";
  operand: JqlQueryClauseOperand;
};
export type FieldWasClause = {
  field: JqlQueryField;
  operator: "was" | "was in" | "was not in" | "was not";
  operand: JqlQueryClauseOperand;
  predicates: JqlQueryClauseTimePredicate[];
};
export type FieldChangedClause = {
  field: JqlQueryField;
  operator: "changed";
  predicates: JqlQueryClauseTimePredicate[];
};
export type JqlQueryClause =
  | CompoundClause
  | FieldValueClause
  | FieldWasClause
  | FieldChangedClause;
export type JqlQueryOrderByClauseElement = {
  field: JqlQueryField;
  direction?: "asc" | "desc";
};
export type JqlQueryOrderByClause = {
  fields: JqlQueryOrderByClauseElement[];
};
export type JqlQuery = {
  where?: JqlQueryClause;
  orderBy?: JqlQueryOrderByClause;
};
export type ParsedJqlQuery = {
  query: string;
  structure?: JqlQuery;
  errors?: string[];
};
export type ParsedJqlQueries = {
  queries: ParsedJqlQuery[];
};
export type JqlQueriesToParse = {
  queries: string[];
};
export type JqlQueryWithUnknownUsers = {
  originalQuery?: string;
  convertedQuery?: string;
};
export type ConvertedJqlQueries = {
  queryStrings?: string[];
  queriesWithUnknownUsers?: JqlQueryWithUnknownUsers[];
};
export type JqlPersonalDataMigrationRequest = {
  queryStrings?: string[];
};
export type SanitizedJqlQuery = {
  initialQuery?: string;
  sanitizedQuery?: string | null;
  errors?: ErrorCollection;
  accountId?: string | null;
};
export type SanitizedJqlQueries = {
  queries?: SanitizedJqlQuery[];
};
export type JqlQueryToSanitize = {
  accountId?: string | null;
  query: string;
};
export type JqlQueriesToSanitize = {
  queries: JqlQueryToSanitize[];
};
export type PageBeanString = {
  self?: string;
  nextPage?: string;
  maxResults?: number;
  startAt?: number;
  total?: number;
  isLast?: boolean;
  values?: string[];
};
export type UserPermission = {
  id?: string;
  key?: string;
  name?: string;
  type?: "GLOBAL" | "PROJECT";
  description?: string;
  havePermission?: boolean;
  deprecatedKey?: boolean;
  [key: string]: any;
};
export type Permissions = {
  permissions?: {
    [key: string]: UserPermission;
  };
};
export type Locale = {
  locale?: string;
};
export type NotificationEvent = {
  id?: number;
  name?: string;
  description?: string;
  templateEvent?: NotificationEvent;
};
export type EventNotification = {
  expand?: string;
  id?: number;
  notificationType?:
    | "CurrentAssignee"
    | "Reporter"
    | "CurrentUser"
    | "ProjectLead"
    | "ComponentLead"
    | "User"
    | "Group"
    | "ProjectRole"
    | "EmailAddress"
    | "AllWatchers"
    | "UserCustomField"
    | "GroupCustomField";
  parameter?: string;
  recipient?: string;
  group?: GroupName;
  field?: FieldDetails;
  emailAddress?: string;
  projectRole?: ProjectRole;
  user?: UserDetails;
};
export type NotificationSchemeEvent = {
  event?: NotificationEvent;
  notifications?: EventNotification[];
};
export type NotificationScheme = {
  expand?: string;
  id?: number;
  self?: string;
  name?: string;
  description?: string;
  notificationSchemeEvents?: NotificationSchemeEvent[];
  scope?: Scope;
};
export type PageBeanNotificationScheme = {
  self?: string;
  nextPage?: string;
  maxResults?: number;
  startAt?: number;
  total?: number;
  isLast?: boolean;
  values?: NotificationScheme[];
};
export type BulkProjectPermissionGrants = {
  permission: string;
  issues: number[];
  projects: number[];
};
export type BulkPermissionGrants = {
  projectPermissions: BulkProjectPermissionGrants[];
  globalPermissions: string[];
};
export type BulkProjectPermissions = {
  issues?: number[];
  projects?: number[];
  permissions: string[];
};
export type BulkPermissionsRequestBean = {
  projectPermissions?: BulkProjectPermissions[];
  globalPermissions?: string[];
  accountId?: string;
};
export type ProjectIdentifierBean = {
  id?: number;
  key?: string;
};
export type PermittedProjects = {
  projects?: ProjectIdentifierBean[];
};
export type PermissionsKeysBean = {
  permissions: string[];
};
export type PermissionGrant = {
  id?: number;
  self?: string;
  holder?: PermissionHolder;
  permission?: string;
};
export type PermissionScheme = {
  expand?: string;
  id?: number;
  self?: string;
  name: string;
  description?: string;
  scope?: Scope;
  permissions?: PermissionGrant[];
  [key: string]: any;
};
export type PermissionSchemes = {
  permissionSchemes?: PermissionScheme[];
};
export type PermissionGrants = {
  permissions?: PermissionGrant[];
  expand?: string;
};
export type PriorityId = {
  id: string;
  [key: string]: any;
};
export type CreatePriorityDetails = {
  name: string;
  description?: string;
  iconUrl?:
    | "/images/icons/priorities/blocker.png"
    | "/images/icons/priorities/critical.png"
    | "/images/icons/priorities/high.png"
    | "/images/icons/priorities/highest.png"
    | "/images/icons/priorities/low.png"
    | "/images/icons/priorities/lowest.png"
    | "/images/icons/priorities/major.png"
    | "/images/icons/priorities/medium.png"
    | "/images/icons/priorities/minor.png"
    | "/images/icons/priorities/trivial.png";
  statusColor: string;
  [key: string]: any;
};
export type PageBeanPriority = {
  self?: string;
  nextPage?: string;
  maxResults?: number;
  startAt?: number;
  total?: number;
  isLast?: boolean;
  values?: Priority[];
};
export type UpdatePriorityDetails = {
  name?: string;
  description?: string;
  iconUrl?:
    | "/images/icons/priorities/blocker.png"
    | "/images/icons/priorities/critical.png"
    | "/images/icons/priorities/high.png"
    | "/images/icons/priorities/highest.png"
    | "/images/icons/priorities/low.png"
    | "/images/icons/priorities/lowest.png"
    | "/images/icons/priorities/major.png"
    | "/images/icons/priorities/medium.png"
    | "/images/icons/priorities/minor.png"
    | "/images/icons/priorities/trivial.png";
  statusColor?: string;
  [key: string]: any;
};
export type ProjectIdentifiers = {
  self: string;
  id: number;
  key: string;
};
export type CreateProjectDetails = {
  key: string;
  name: string;
  description?: string;
  lead?: string;
  leadAccountId?: string;
  url?: string;
  assigneeType?: "PROJECT_LEAD" | "UNASSIGNED";
  avatarId?: number;
  issueSecurityScheme?: number;
  permissionScheme?: number;
  notificationScheme?: number;
  categoryId?: number;
  projectTypeKey?: "software" | "service_desk" | "business";
  projectTemplateKey?:
    | "com.pyxis.greenhopper.jira:gh-simplified-agility-kanban"
    | "com.pyxis.greenhopper.jira:gh-simplified-agility-scrum"
    | "com.pyxis.greenhopper.jira:gh-simplified-basic"
    | "com.pyxis.greenhopper.jira:gh-simplified-kanban-classic"
    | "com.pyxis.greenhopper.jira:gh-simplified-scrum-classic"
    | "com.atlassian.servicedesk:simplified-it-service-management"
    | "com.atlassian.servicedesk:simplified-general-service-desk"
    | "com.atlassian.servicedesk:simplified-general-service-desk-it"
    | "com.atlassian.servicedesk:simplified-general-service-desk-business"
    | "com.atlassian.servicedesk:simplified-internal-service-desk"
    | "com.atlassian.servicedesk:simplified-external-service-desk"
    | "com.atlassian.servicedesk:simplified-hr-service-desk"
    | "com.atlassian.servicedesk:simplified-facilities-service-desk"
    | "com.atlassian.servicedesk:simplified-legal-service-desk"
    | "com.atlassian.jira-core-project-templates:jira-core-simplified-content-management"
    | "com.atlassian.jira-core-project-templates:jira-core-simplified-document-approval"
    | "com.atlassian.jira-core-project-templates:jira-core-simplified-lead-tracking"
    | "com.atlassian.jira-core-project-templates:jira-core-simplified-process-control"
    | "com.atlassian.jira-core-project-templates:jira-core-simplified-procurement"
    | "com.atlassian.jira-core-project-templates:jira-core-simplified-project-management"
    | "com.atlassian.jira-core-project-templates:jira-core-simplified-recruitment"
    | "com.atlassian.jira-core-project-templates:jira-core-simplified-task-";
  workflowScheme?: number;
  issueTypeScreenScheme?: number;
  issueTypeScheme?: number;
  fieldConfigurationScheme?: number;
};
export type StringList = object;
export type PageBeanProject = {
  self?: string;
  nextPage?: string;
  maxResults?: number;
  startAt?: number;
  total?: number;
  isLast?: boolean;
  values?: Project[];
};
export type ProjectType = {
  key?: string;
  formattedKey?: string;
  descriptionI18nKey?: string;
  icon?: string;
  color?: string;
};
export type UpdateProjectDetails = {
  key?: string;
  name?: string;
  description?: string;
  lead?: string;
  leadAccountId?: string;
  url?: string;
  assigneeType?: "PROJECT_LEAD" | "UNASSIGNED";
  avatarId?: number;
  issueSecurityScheme?: number;
  permissionScheme?: number;
  notificationScheme?: number;
  categoryId?: number;
};
export type ProjectAvatars = {
  system?: Avatar[];
  custom?: Avatar[];
};
export type ComponentWithIssueCount = {
  issueCount?: number;
  name?: string;
  id?: string;
  realAssigneeType?:
    | "PROJECT_DEFAULT"
    | "COMPONENT_LEAD"
    | "PROJECT_LEAD"
    | "UNASSIGNED";
  realAssignee?: User;
  isAssigneeTypeValid?: boolean;
  description?: string;
  self?: string;
  lead?: User;
  assigneeType?:
    | "PROJECT_DEFAULT"
    | "COMPONENT_LEAD"
    | "PROJECT_LEAD"
    | "UNASSIGNED";
  project?: string;
  assignee?: User;
  projectId?: number;
};
export type PageBeanComponentWithIssueCount = {
  self?: string;
  nextPage?: string;
  maxResults?: number;
  startAt?: number;
  total?: number;
  isLast?: boolean;
  values?: ComponentWithIssueCount[];
};
export type ProjectFeature = {
  projectId?: number;
  state?: "ENABLED" | "DISABLED" | "COMING_SOON";
  toggleLocked?: boolean;
  feature?: string;
  prerequisites?: string[];
  localisedName?: string;
  localisedDescription?: string;
  imageUri?: string;
};
export type ContainerForProjectFeatures = {
  features?: ProjectFeature[];
};
export type ProjectFeatureState = {
  state?: "ENABLED" | "DISABLED" | "COMING_SOON";
};
export type ProjectRoleActorsUpdateBean = {
  id?: number;
  categorisedActors?: {
    [key: string]: string[];
  };
};
export type ActorsMap = {
  user?: string[];
  group?: string[];
  groupId?: string[];
};
export type ProjectRoleDetails = {
  self?: string;
  name?: string;
  id?: number;
  description?: string;
  admin?: boolean;
  scope?: Scope;
  roleConfigurable?: boolean;
  translatedName?: string;
  default?: boolean;
};
export type IssueTypeWithStatus = {
  self: string;
  id: string;
  name: string;
  subtask: boolean;
  statuses: StatusDetails[];
};
export type PageBeanVersion = {
  self?: string;
  nextPage?: string;
  maxResults?: number;
  startAt?: number;
  total?: number;
  isLast?: boolean;
  values?: Version[];
};
export type ProjectEmailAddress = {
  emailAddress?: string;
  emailAddressStatus?: string[];
};
export type IssueTypeInfo = {
  id?: number;
  name?: string;
  avatarId?: number;
};
export type ProjectIssueTypesHierarchyLevel = {
  entityId?: string;
  level?: number;
  name?: string;
  issueTypes?: IssueTypeInfo[];
};
export type ProjectIssueTypeHierarchy = {
  projectId?: number;
  hierarchy?: ProjectIssueTypesHierarchyLevel[];
};
export type IdBean = {
  id: number;
};
export type ProjectIssueSecurityLevels = {
  levels: SecurityLevel[];
};
export type Resolution = {
  self?: string;
  id?: string;
  description?: string;
  name?: string;
};
export type CreateUpdateRoleRequestBean = {
  name?: string;
  description?: string;
};
export type ActorInputBean = {
  user?: string[];
  groupId?: string[];
  group?: string[];
};
export type Screen = {
  id?: number;
  name?: string;
  description?: string;
  scope?: Scope;
};
export type PageBeanScreen = {
  self?: string;
  nextPage?: string;
  maxResults?: number;
  startAt?: number;
  total?: number;
  isLast?: boolean;
  values?: Screen[];
};
export type ScreenDetails = {
  name: string;
  description?: string;
};
export type UpdateScreenDetails = {
  name?: string;
  description?: string;
};
export type ScreenableField = {
  id?: string;
  name?: string;
};
export type AddFieldBean = {
  fieldId: string;
};
export type MoveFieldBean = {
  after?: string;
  position?: "Earlier" | "Later" | "First" | "Last";
};
export type ScreenTypes = {
  edit?: number;
  create?: number;
  view?: number;
  default?: number;
};
export type ScreenScheme = {
  id?: number;
  name?: string;
  description?: string;
  screens?: ScreenTypes;
  issueTypeScreenSchemes?: PageBeanIssueTypeScreenScheme;
};
export type PageBeanScreenScheme = {
  self?: string;
  nextPage?: string;
  maxResults?: number;
  startAt?: number;
  total?: number;
  isLast?: boolean;
  values?: ScreenScheme[];
};
export type ScreenSchemeId = {
  id: number;
};
export type ScreenSchemeDetails = {
  name: string;
  description?: string;
  screens: ScreenTypes;
};
export type UpdateScreenTypes = {
  edit?: string;
  create?: string;
  view?: string;
  default?: string;
};
export type UpdateScreenSchemeDetails = {
  name?: string;
  description?: string;
  screens?: UpdateScreenTypes;
};
export type SearchResults = {
  expand?: string;
  startAt?: number;
  maxResults?: number;
  total?: number;
  issues?: IssueBean[];
  warningMessages?: string[];
  names?: {
    [key: string]: string;
  };
  schema?: {
    [key: string]: JsonTypeBean;
  };
};
export type SearchRequestBean = {
  jql?: string;
  startAt?: number;
  maxResults?: number;
  fields?: string[];
  validateQuery?: "strict" | "warn" | "none" | "true" | "false";
  expand?: string[];
  properties?: string[];
  fieldsByKeys?: boolean;
};
export type HealthCheckResult = {
  name?: string;
  description?: string;
  passed?: boolean;
};
export type ServerInformation = {
  baseUrl?: string;
  version?: string;
  versionNumbers?: number[];
  deploymentType?: string;
  buildNumber?: number;
  buildDate?: string;
  serverTime?: string;
  scmInfo?: string;
  serverTitle?: string;
  healthChecks?: HealthCheckResult[];
};
export type ProjectId = {
  id: string;
};
export type StatusScope = {
  type: "PROJECT" | "GLOBAL";
  project?: ProjectId;
};
export type ProjectIssueTypes = {
  project?: ProjectId;
  issueTypes?: string[];
};
export type JiraStatus = {
  id?: string;
  name?: string;
  statusCategory?: "TODO" | "IN_PROGRESS" | "DONE";
  scope?: StatusScope;
  description?: string;
  usages?: ProjectIssueTypes[];
};
export type StatusUpdate = {
  id: string;
  name: string;
  statusCategory: "TODO" | "IN_PROGRESS" | "DONE";
  description?: string;
};
export type StatusUpdateRequest = {
  statuses?: StatusUpdate[];
};
export type StatusCreate = {
  name: string;
  statusCategory: "TODO" | "IN_PROGRESS" | "DONE";
  description?: string;
};
export type StatusCreateRequest = {
  statuses: StatusCreate[];
  scope: StatusScope;
};
export type PageOfStatuses = {
  startAt?: number;
  total?: number;
  isLast?: boolean;
  maxResults?: number;
  values?: JiraStatus[];
  self?: string;
  nextPage?: string;
};
export type UiModificationContextDetails = {
  id?: string;
  projectId: string;
  issueTypeId: string;
  viewType: string;
  isAvailable?: boolean;
};
export type UiModificationDetails = {
  id: string;
  name: string;
  description?: string;
  self: string;
  data?: string;
  contexts?: UiModificationContextDetails[];
};
export type PageBeanUiModificationDetails = {
  self?: string;
  nextPage?: string;
  maxResults?: number;
  startAt?: number;
  total?: number;
  isLast?: boolean;
  values?: UiModificationDetails[];
};
export type UiModificationIdentifiers = {
  id: string;
  self: string;
};
export type CreateUiModificationDetails = {
  name: string;
  description?: string;
  data?: string;
  contexts?: UiModificationContextDetails[];
};
export type UpdateUiModificationDetails = {
  name?: string;
  description?: string;
  data?: string;
  contexts?: UiModificationContextDetails[];
};
export type Avatars = {
  system?: Avatar[];
  custom?: Avatar[];
};
export type NewUserDetails = {
  self?: string;
  key?: string;
  name?: string;
  password?: string;
  emailAddress: string;
  displayName?: string;
  applicationKeys?: string[];
  [key: string]: any;
};
export type PageBeanUser = {
  self?: string;
  nextPage?: string;
  maxResults?: number;
  startAt?: number;
  total?: number;
  isLast?: boolean;
  values?: User[];
};
export type UserMigrationBean = {
  key?: string;
  username?: string;
  accountId?: string;
};
export type UnrestrictedUserEmail = {
  accountId?: string;
  email?: string;
  [key: string]: any;
};
export type UserKey = {
  key?: string;
  accountId?: string;
};
export type PageBeanUserKey = {
  self?: string;
  nextPage?: string;
  maxResults?: number;
  startAt?: number;
  total?: number;
  isLast?: boolean;
  values?: UserKey[];
};
export type VersionMoveBean = {
  after?: string;
  position?: "Earlier" | "Later" | "First" | "Last";
};
export type VersionUsageInCustomField = {
  fieldName?: string;
  customFieldId?: number;
  issueCountWithVersionInCustomField?: number;
};
export type VersionIssueCounts = {
  self?: string;
  issuesFixedCount?: number;
  issuesAffectedCount?: number;
  issueCountWithCustomFieldsShowingVersion?: number;
  customFieldUsage?: VersionUsageInCustomField[];
};
export type CustomFieldReplacement = {
  customFieldId?: number;
  moveTo?: number;
};
export type DeleteAndReplaceVersionBean = {
  moveFixIssuesTo?: number;
  moveAffectedIssuesTo?: number;
  customFieldReplacementList?: CustomFieldReplacement[];
};
export type VersionUnresolvedIssuesCount = {
  self?: string;
  issuesUnresolvedCount?: number;
  issuesCount?: number;
};
export type Webhook = {
  id: number;
  jqlFilter: string;
  fieldIdsFilter?: string[];
  issuePropertyKeysFilter?: string[];
  events: (
    | "jira:issue_created"
    | "jira:issue_updated"
    | "jira:issue_deleted"
    | "comment_created"
    | "comment_updated"
    | "comment_deleted"
    | "issue_property_set"
    | "issue_property_deleted"
  )[];
  expirationDate?: number;
};
export type PageBeanWebhook = {
  self?: string;
  nextPage?: string;
  maxResults?: number;
  startAt?: number;
  total?: number;
  isLast?: boolean;
  values?: Webhook[];
};
export type RegisteredWebhook = {
  createdWebhookId?: number;
  errors?: string[];
};
export type ContainerForRegisteredWebhooks = {
  webhookRegistrationResult?: RegisteredWebhook[];
};
export type WebhookDetails = {
  jqlFilter: string;
  fieldIdsFilter?: string[];
  issuePropertyKeysFilter?: string[];
  events: (
    | "jira:issue_created"
    | "jira:issue_updated"
    | "jira:issue_deleted"
    | "comment_created"
    | "comment_updated"
    | "comment_deleted"
    | "issue_property_set"
    | "issue_property_deleted"
  )[];
};
export type WebhookRegistrationDetails = {
  webhooks: WebhookDetails[];
  url: string;
};
export type ContainerForWebhookIDs = {
  webhookIds: number[];
};
export type FailedWebhook = {
  id: string;
  body?: string;
  url: string;
  failureTime: number;
};
export type FailedWebhooks = {
  values: FailedWebhook[];
  maxResults: number;
  next?: string;
};
export type WebhooksExpirationDate = {
  expirationDate: number;
};
export type DeprecatedWorkflow = {
  name?: string;
  description?: string;
  lastModifiedDate?: string;
  lastModifiedUser?: string;
  lastModifiedUserAccountId?: string;
  steps?: number;
  scope?: Scope;
  default?: boolean;
};
export type WorkflowIDs = {
  name: string;
  entityId?: string;
};
export type CreateWorkflowCondition = {
  operator?: "AND" | "OR";
  conditions?: CreateWorkflowCondition[];
  type?: string;
  configuration?: {
    [key: string]: any;
  };
};
export type CreateWorkflowTransitionRule = {
  type: string;
  configuration?: {
    [key: string]: any;
  };
};
export type CreateWorkflowTransitionRulesDetails = {
  conditions?: CreateWorkflowCondition;
  validators?: CreateWorkflowTransitionRule[];
  postFunctions?: CreateWorkflowTransitionRule[];
};
export type CreateWorkflowTransitionScreenDetails = {
  id: string;
};
export type CreateWorkflowTransitionDetails = {
  name: string;
  description?: string;
  from?: string[];
  to: string;
  type: "global" | "initial" | "directed";
  rules?: CreateWorkflowTransitionRulesDetails;
  screen?: CreateWorkflowTransitionScreenDetails;
  properties?: {
    [key: string]: string;
  };
};
export type CreateWorkflowStatusDetails = {
  id: string;
  properties?: {
    [key: string]: string;
  };
};
export type CreateWorkflowDetails = {
  name: string;
  description?: string;
  transitions: CreateWorkflowTransitionDetails[];
  statuses: CreateWorkflowStatusDetails[];
};
export type WorkflowId = {
  name: string;
  draft: boolean;
};
export type RuleConfiguration = {
  value: string;
  disabled?: boolean;
  tag?: string;
};
export type WorkflowTransition = {
  id: number;
  name: string;
};
export type ConnectWorkflowTransitionRule = {
  id: string;
  key: string;
  configuration: RuleConfiguration;
  transition?: WorkflowTransition;
};
export type WorkflowTransitionRules = {
  workflowId: WorkflowId;
  postFunctions?: ConnectWorkflowTransitionRule[];
  conditions?: ConnectWorkflowTransitionRule[];
  validators?: ConnectWorkflowTransitionRule[];
};
export type PageBeanWorkflowTransitionRules = {
  self?: string;
  nextPage?: string;
  maxResults?: number;
  startAt?: number;
  total?: number;
  isLast?: boolean;
  values?: WorkflowTransitionRules[];
};
export type WorkflowTransitionRulesUpdateErrorDetails = {
  workflowId: WorkflowId;
  ruleUpdateErrors: {
    [key: string]: string[];
  };
  updateErrors: string[];
};
export type WorkflowTransitionRulesUpdateErrors = {
  updateResults: WorkflowTransitionRulesUpdateErrorDetails[];
};
export type WorkflowTransitionRulesUpdate = {
  workflows: WorkflowTransitionRules[];
};
export type WorkflowTransitionRulesDetails = {
  workflowId: WorkflowId;
  workflowRuleIds: string[];
};
export type WorkflowsWithTransitionRulesDetails = {
  workflows: WorkflowTransitionRulesDetails[];
};
export type PublishedWorkflowId = {
  name: string;
  entityId?: string;
};
export type TransitionScreenDetails = {
  id: string;
  name?: string;
};
export type WorkflowSimpleCondition = {
  type: string;
  configuration?: object;
  nodeType: string;
};
export type WorkflowCompoundCondition = {
  operator: "AND" | "OR";
  conditions: WorkflowCondition[];
  nodeType: string;
};
export type WorkflowCondition =
  | ({
      nodeType: "simple";
    } & WorkflowSimpleCondition)
  | ({
      nodeType: "compound";
    } & WorkflowCompoundCondition);
export type WorkflowTransitionRule = {
  type: string;
  configuration?: any;
};
export type WorkflowRules = {
  conditionsTree?: WorkflowCondition;
  validators?: WorkflowTransitionRule[];
  postFunctions?: WorkflowTransitionRule[];
};
export type Transition = {
  id: string;
  name: string;
  description: string;
  from: string[];
  to: string;
  type: "global" | "initial" | "directed";
  screen?: TransitionScreenDetails;
  rules?: WorkflowRules;
  properties?: {
    [key: string]: any;
  };
};
export type WorkflowStatus = {
  id: string;
  name: string;
  properties?: {
    [key: string]: any;
  };
};
export type WorkflowSchemeIdName = {
  id: string;
  name: string;
};
export type WorkflowOperations = {
  canEdit: boolean;
  canDelete: boolean;
};
export type Workflow = {
  id: PublishedWorkflowId;
  description: string;
  transitions?: Transition[];
  statuses?: WorkflowStatus[];
  isDefault?: boolean;
  schemes?: WorkflowSchemeIdName[];
  projects?: ProjectDetails[];
  hasDraftWorkflow?: boolean;
  operations?: WorkflowOperations;
  created?: string;
  updated?: string;
};
export type PageBeanWorkflow = {
  self?: string;
  nextPage?: string;
  maxResults?: number;
  startAt?: number;
  total?: number;
  isLast?: boolean;
  values?: Workflow[];
};
export type WorkflowTransitionProperty = {
  key?: string;
  value: string;
  id?: string;
  [key: string]: any;
};
export type WorkflowScheme = {
  id?: number;
  name?: string;
  description?: string;
  defaultWorkflow?: string;
  issueTypeMappings?: {
    [key: string]: string;
  };
  originalDefaultWorkflow?: string;
  originalIssueTypeMappings?: {
    [key: string]: string;
  };
  draft?: boolean;
  lastModifiedUser?: User;
  lastModified?: string;
  self?: string;
  updateDraftIfNeeded?: boolean;
  issueTypes?: {
    [key: string]: IssueTypeDetails;
  };
};
export type PageBeanWorkflowScheme = {
  self?: string;
  nextPage?: string;
  maxResults?: number;
  startAt?: number;
  total?: number;
  isLast?: boolean;
  values?: WorkflowScheme[];
};
export type WorkflowSchemeAssociations = {
  projectIds: string[];
  workflowScheme: WorkflowScheme;
};
export type ContainerOfWorkflowSchemeAssociations = {
  values: WorkflowSchemeAssociations[];
};
export type WorkflowSchemeProjectAssociation = {
  workflowSchemeId?: string;
  projectId: string;
};
export type DefaultWorkflow = {
  workflow: string;
  updateDraftIfNeeded?: boolean;
};
export type IssueTypeWorkflowMapping = {
  issueType?: string;
  workflow?: string;
  updateDraftIfNeeded?: boolean;
};
export type StatusMapping = {
  issueTypeId: string;
  statusId: string;
  newStatusId: string;
};
export type PublishDraftWorkflowScheme = {
  statusMappings?: StatusMapping[];
};
export type IssueTypesWorkflowMapping = {
  workflow?: string;
  issueTypes?: string[];
  defaultMapping?: boolean;
  updateDraftIfNeeded?: boolean;
};
export type ChangedWorklog = {
  worklogId?: number;
  updatedTime?: number;
  properties?: EntityProperty[];
};
export type ChangedWorklogs = {
  values?: ChangedWorklog[];
  since?: number;
  until?: number;
  self?: string;
  nextPage?: string;
  lastPage?: boolean;
};
export type WorklogIdsRequestBean = {
  ids: number[];
};
export type OperationMessage = {
  message: string;
  statusCode: number;
};
export type ConnectModule = object;
export type ConnectModules = {
  modules: ConnectModule[];
};
export type ErrorMessage = {
  message: string;
};
export type ConnectCustomFieldValue = {
  _type:
    | "StringIssueField"
    | "NumberIssueField"
    | "RichTextIssueField"
    | "SingleSelectIssueField"
    | "MultiSelectIssueField"
    | "TextIssueField";
  issueID: number;
  fieldID: number;
  string?: string;
  number?: number;
  richText?: string;
  optionID?: string;
  text?: string;
};
export type ConnectCustomFieldValues = {
  updateValueList?: ConnectCustomFieldValue[];
};
export type EntityPropertyDetails = {
  entityId: number;
  key: string;
  value: string;
};
export type WorkflowRulesSearchDetails = {
  workflowEntityId?: string;
  invalidRules?: string[];
  validRules?: WorkflowTransitionRules[];
};
export type WorkflowRulesSearch = {
  workflowEntityId: string;
  ruleIds: string[];
  expand?: string;
};

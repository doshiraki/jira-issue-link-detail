import { atlConfluenceBase as api } from "../atlConfluenceBase";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    getAuditRecords: build.query<
      GetAuditRecordsApiResponse,
      GetAuditRecordsApiArg
    >({
      query: (queryArg) => ({
        url: `/wiki/rest/api/audit`,
        params: {
          startDate: queryArg.startDate,
          endDate: queryArg.endDate,
          searchString: queryArg.searchString,
          start: queryArg.start,
          limit: queryArg.limit,
        },
      }),
    }),
    createAuditRecord: build.mutation<
      CreateAuditRecordApiResponse,
      CreateAuditRecordApiArg
    >({
      query: (queryArg) => ({
        url: `/wiki/rest/api/audit`,
        method: "POST",
        body: queryArg.auditRecordCreate,
      }),
    }),
    exportAuditRecords: build.query<
      ExportAuditRecordsApiResponse,
      ExportAuditRecordsApiArg
    >({
      query: (queryArg) => ({
        url: `/wiki/rest/api/audit/export`,
        params: {
          startDate: queryArg.startDate,
          endDate: queryArg.endDate,
          searchString: queryArg.searchString,
          format: queryArg.format,
        },
      }),
    }),
    getRetentionPeriod: build.query<
      GetRetentionPeriodApiResponse,
      GetRetentionPeriodApiArg
    >({
      query: () => ({ url: `/wiki/rest/api/audit/retention` }),
    }),
    setRetentionPeriod: build.mutation<
      SetRetentionPeriodApiResponse,
      SetRetentionPeriodApiArg
    >({
      query: (queryArg) => ({
        url: `/wiki/rest/api/audit/retention`,
        method: "PUT",
        body: queryArg.retentionPeriod,
      }),
    }),
    getAuditRecordsForTimePeriod: build.query<
      GetAuditRecordsForTimePeriodApiResponse,
      GetAuditRecordsForTimePeriodApiArg
    >({
      query: (queryArg) => ({
        url: `/wiki/rest/api/audit/since`,
        params: {
          number: queryArg["number"],
          units: queryArg.units,
          searchString: queryArg.searchString,
          start: queryArg.start,
          limit: queryArg.limit,
        },
      }),
    }),
    getContent: build.query<GetContentApiResponse, GetContentApiArg>({
      query: (queryArg) => ({
        url: `/wiki/rest/api/content`,
        params: {
          type: queryArg["type"],
          spaceKey: queryArg.spaceKey,
          title: queryArg.title,
          status: queryArg.status,
          postingDay: queryArg.postingDay,
          expand: queryArg.expand,
          trigger: queryArg.trigger,
          orderby: queryArg.orderby,
          start: queryArg.start,
          limit: queryArg.limit,
        },
      }),
    }),
    createContent: build.mutation<
      CreateContentApiResponse,
      CreateContentApiArg
    >({
      query: (queryArg) => ({
        url: `/wiki/rest/api/content`,
        method: "POST",
        body: queryArg.contentCreate,
        params: { status: queryArg.status, expand: queryArg.expand },
      }),
    }),
    archivePages: build.mutation<ArchivePagesApiResponse, ArchivePagesApiArg>({
      query: (queryArg) => ({
        url: `/wiki/rest/api/content/archive`,
        method: "POST",
        body: queryArg.body,
      }),
    }),
    publishSharedDraft: build.mutation<
      PublishSharedDraftApiResponse,
      PublishSharedDraftApiArg
    >({
      query: (queryArg) => ({
        url: `/wiki/rest/api/content/blueprint/instance/${queryArg.draftId}`,
        method: "PUT",
        body: queryArg.contentBlueprintDraft,
        params: { status: queryArg.status, expand: queryArg.expand },
      }),
    }),
    publishLegacyDraft: build.mutation<
      PublishLegacyDraftApiResponse,
      PublishLegacyDraftApiArg
    >({
      query: (queryArg) => ({
        url: `/wiki/rest/api/content/blueprint/instance/${queryArg.draftId}`,
        method: "POST",
        body: queryArg.contentBlueprintDraft,
        params: { status: queryArg.status, expand: queryArg.expand },
      }),
    }),
    searchContentByCql: build.query<
      SearchContentByCqlApiResponse,
      SearchContentByCqlApiArg
    >({
      query: (queryArg) => ({
        url: `/wiki/rest/api/content/search`,
        params: {
          cql: queryArg.cql,
          cqlcontext: queryArg.cqlcontext,
          expand: queryArg.expand,
          cursor: queryArg.cursor,
          limit: queryArg.limit,
        },
      }),
    }),
    getContentById: build.query<
      GetContentByIdApiResponse,
      GetContentByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/wiki/rest/api/content/${queryArg.id}`,
        params: {
          status: queryArg.status,
          version: queryArg.version,
          embeddedContentRender: queryArg.embeddedContentRender,
          expand: queryArg.expand,
          trigger: queryArg.trigger,
        },
      }),
    }),
    updateContent: build.mutation<
      UpdateContentApiResponse,
      UpdateContentApiArg
    >({
      query: (queryArg) => ({
        url: `/wiki/rest/api/content/${queryArg.id}`,
        method: "PUT",
        body: queryArg.contentUpdate,
        params: {
          status: queryArg.status,
          conflictPolicy: queryArg.conflictPolicy,
        },
      }),
    }),
    deleteContent: build.mutation<
      DeleteContentApiResponse,
      DeleteContentApiArg
    >({
      query: (queryArg) => ({
        url: `/wiki/rest/api/content/${queryArg.id}`,
        method: "DELETE",
        params: { status: queryArg.status },
      }),
    }),
    deletePageTree: build.mutation<
      DeletePageTreeApiResponse,
      DeletePageTreeApiArg
    >({
      query: (queryArg) => ({
        url: `/wiki/rest/api/content/${queryArg.id}/pageTree`,
        method: "DELETE",
      }),
    }),
    getContentChildren: build.query<
      GetContentChildrenApiResponse,
      GetContentChildrenApiArg
    >({
      query: (queryArg) => ({
        url: `/wiki/rest/api/content/${queryArg.id}/child`,
        params: {
          expand: queryArg.expand,
          parentVersion: queryArg.parentVersion,
        },
      }),
    }),
    movePage: build.mutation<MovePageApiResponse, MovePageApiArg>({
      query: (queryArg) => ({
        url: `/wiki/rest/api/content/${queryArg.pageId}/move/${queryArg.position}/${queryArg.targetId}`,
        method: "PUT",
      }),
    }),
    getAttachments: build.query<
      GetAttachmentsApiResponse,
      GetAttachmentsApiArg
    >({
      query: (queryArg) => ({
        url: `/wiki/rest/api/content/${queryArg.id}/child/attachment`,
        params: {
          expand: queryArg.expand,
          start: queryArg.start,
          limit: queryArg.limit,
          filename: queryArg.filename,
          mediaType: queryArg.mediaType,
        },
      }),
    }),
    createOrUpdateAttachments: build.mutation<
      CreateOrUpdateAttachmentsApiResponse,
      CreateOrUpdateAttachmentsApiArg
    >({
      query: (queryArg) => ({
        url: `/wiki/rest/api/content/${queryArg.id}/child/attachment`,
        method: "PUT",
        body: queryArg.body,
        params: { status: queryArg.status },
      }),
    }),
    createAttachment: build.mutation<
      CreateAttachmentApiResponse,
      CreateAttachmentApiArg
    >({
      query: (queryArg) => ({
        url: `/wiki/rest/api/content/${queryArg.id}/child/attachment`,
        method: "POST",
        body: queryArg.body,
        params: { status: queryArg.status },
      }),
    }),
    updateAttachmentProperties: build.mutation<
      UpdateAttachmentPropertiesApiResponse,
      UpdateAttachmentPropertiesApiArg
    >({
      query: (queryArg) => ({
        url: `/wiki/rest/api/content/${queryArg.id}/child/attachment/${queryArg.attachmentId}`,
        method: "PUT",
        body: queryArg.content,
      }),
    }),
    updateAttachmentData: build.mutation<
      UpdateAttachmentDataApiResponse,
      UpdateAttachmentDataApiArg
    >({
      query: (queryArg) => ({
        url: `/wiki/rest/api/content/${queryArg.id}/child/attachment/${queryArg.attachmentId}/data`,
        method: "POST",
        body: queryArg.body,
      }),
    }),
    downloadAttatchment: build.query<
      DownloadAttatchmentApiResponse,
      DownloadAttatchmentApiArg
    >({
      query: (queryArg) => ({
        url: `/wiki/rest/api/content/${queryArg.id}/child/attachment/${queryArg.attachmentId}/download`,
        params: { version: queryArg.version },
      }),
    }),
    getContentComments: build.query<
      GetContentCommentsApiResponse,
      GetContentCommentsApiArg
    >({
      query: (queryArg) => ({
        url: `/wiki/rest/api/content/${queryArg.id}/child/comment`,
        params: {
          expand: queryArg.expand,
          parentVersion: queryArg.parentVersion,
          start: queryArg.start,
          limit: queryArg.limit,
          location: queryArg.location,
          depth: queryArg.depth,
        },
      }),
    }),
    getContentChildrenByType: build.query<
      GetContentChildrenByTypeApiResponse,
      GetContentChildrenByTypeApiArg
    >({
      query: (queryArg) => ({
        url: `/wiki/rest/api/content/${queryArg.id}/child/${queryArg["type"]}`,
        params: {
          expand: queryArg.expand,
          parentVersion: queryArg.parentVersion,
          start: queryArg.start,
          limit: queryArg.limit,
        },
      }),
    }),
    getContentDescendants: build.query<
      GetContentDescendantsApiResponse,
      GetContentDescendantsApiArg
    >({
      query: (queryArg) => ({
        url: `/wiki/rest/api/content/${queryArg.id}/descendant`,
        params: { expand: queryArg.expand },
      }),
    }),
    getDescendantsOfType: build.query<
      GetDescendantsOfTypeApiResponse,
      GetDescendantsOfTypeApiArg
    >({
      query: (queryArg) => ({
        url: `/wiki/rest/api/content/${queryArg.id}/descendant/${queryArg["type"]}`,
        params: {
          depth: queryArg.depth,
          expand: queryArg.expand,
          start: queryArg.start,
          limit: queryArg.limit,
        },
      }),
    }),
    getHistoryForContent: build.query<
      GetHistoryForContentApiResponse,
      GetHistoryForContentApiArg
    >({
      query: (queryArg) => ({
        url: `/wiki/rest/api/content/${queryArg.id}/history`,
        params: { expand: queryArg.expand },
      }),
    }),
    getMacroBodyByMacroId: build.query<
      GetMacroBodyByMacroIdApiResponse,
      GetMacroBodyByMacroIdApiArg
    >({
      query: (queryArg) => ({
        url: `/wiki/rest/api/content/${queryArg.id}/history/${queryArg.version}/macro/id/${queryArg.macroId}`,
      }),
    }),
    getLabelsForContent: build.query<
      GetLabelsForContentApiResponse,
      GetLabelsForContentApiArg
    >({
      query: (queryArg) => ({
        url: `/wiki/rest/api/content/${queryArg.id}/label`,
        params: {
          prefix: queryArg.prefix,
          start: queryArg.start,
          limit: queryArg.limit,
        },
      }),
    }),
    addLabelsToContent: build.mutation<
      AddLabelsToContentApiResponse,
      AddLabelsToContentApiArg
    >({
      query: (queryArg) => ({
        url: `/wiki/rest/api/content/${queryArg.id}/label`,
        method: "POST",
        body: queryArg.body,
      }),
    }),
    removeLabelFromContentUsingQueryParameter: build.mutation<
      RemoveLabelFromContentUsingQueryParameterApiResponse,
      RemoveLabelFromContentUsingQueryParameterApiArg
    >({
      query: (queryArg) => ({
        url: `/wiki/rest/api/content/${queryArg.id}/label`,
        method: "DELETE",
        params: { name: queryArg.name },
      }),
    }),
    removeLabelFromContent: build.mutation<
      RemoveLabelFromContentApiResponse,
      RemoveLabelFromContentApiArg
    >({
      query: (queryArg) => ({
        url: `/wiki/rest/api/content/${queryArg.id}/label/${queryArg.label}`,
        method: "DELETE",
      }),
    }),
    getWatchesForPage: build.query<
      GetWatchesForPageApiResponse,
      GetWatchesForPageApiArg
    >({
      query: (queryArg) => ({
        url: `/wiki/rest/api/content/${queryArg.id}/notification/child-created`,
        params: { start: queryArg.start, limit: queryArg.limit },
      }),
    }),
    getWatchesForSpace: build.query<
      GetWatchesForSpaceApiResponse,
      GetWatchesForSpaceApiArg
    >({
      query: (queryArg) => ({
        url: `/wiki/rest/api/content/${queryArg.id}/notification/created`,
        params: { start: queryArg.start, limit: queryArg.limit },
      }),
    }),
    copyPageHierarchy: build.mutation<
      CopyPageHierarchyApiResponse,
      CopyPageHierarchyApiArg
    >({
      query: (queryArg) => ({
        url: `/wiki/rest/api/content/${queryArg.id}/pagehierarchy/copy`,
        method: "POST",
        body: queryArg.copyPageHierarchyRequest,
      }),
    }),
    copyPage: build.mutation<CopyPageApiResponse, CopyPageApiArg>({
      query: (queryArg) => ({
        url: `/wiki/rest/api/content/${queryArg.id}/copy`,
        method: "POST",
        body: queryArg.copyPageRequest,
        params: { expand: queryArg.expand },
      }),
    }),
    checkContentPermission: build.mutation<
      CheckContentPermissionApiResponse,
      CheckContentPermissionApiArg
    >({
      query: (queryArg) => ({
        url: `/wiki/rest/api/content/${queryArg.id}/permission/check`,
        method: "POST",
        body: queryArg.contentPermissionRequest,
      }),
    }),
    getContentProperties: build.query<
      GetContentPropertiesApiResponse,
      GetContentPropertiesApiArg
    >({
      query: (queryArg) => ({
        url: `/wiki/rest/api/content/${queryArg.id}/property`,
        params: {
          key: queryArg.key,
          expand: queryArg.expand,
          start: queryArg.start,
          limit: queryArg.limit,
        },
      }),
    }),
    createContentProperty: build.mutation<
      CreateContentPropertyApiResponse,
      CreateContentPropertyApiArg
    >({
      query: (queryArg) => ({
        url: `/wiki/rest/api/content/${queryArg.id}/property`,
        method: "POST",
        body: queryArg.contentPropertyCreate,
      }),
    }),
    getContentProperty: build.query<
      GetContentPropertyApiResponse,
      GetContentPropertyApiArg
    >({
      query: (queryArg) => ({
        url: `/wiki/rest/api/content/${queryArg.id}/property/${queryArg.key}`,
        params: { expand: queryArg.expand, status: queryArg.status },
      }),
    }),
    updateContentProperty: build.mutation<
      UpdateContentPropertyApiResponse,
      UpdateContentPropertyApiArg
    >({
      query: (queryArg) => ({
        url: `/wiki/rest/api/content/${queryArg.id}/property/${queryArg.key}`,
        method: "PUT",
        body: queryArg.contentPropertyUpdate,
      }),
    }),
    createContentPropertyForKey: build.mutation<
      CreateContentPropertyForKeyApiResponse,
      CreateContentPropertyForKeyApiArg
    >({
      query: (queryArg) => ({
        url: `/wiki/rest/api/content/${queryArg.id}/property/${queryArg.key}`,
        method: "POST",
        body: queryArg.contentPropertyCreateNoKey,
      }),
    }),
    deleteContentProperty: build.mutation<
      DeleteContentPropertyApiResponse,
      DeleteContentPropertyApiArg
    >({
      query: (queryArg) => ({
        url: `/wiki/rest/api/content/${queryArg.id}/property/${queryArg.key}`,
        method: "DELETE",
      }),
    }),
    getRestrictions: build.query<
      GetRestrictionsApiResponse,
      GetRestrictionsApiArg
    >({
      query: (queryArg) => ({
        url: `/wiki/rest/api/content/${queryArg.id}/restriction`,
        params: {
          expand: queryArg.expand,
          start: queryArg.start,
          limit: queryArg.limit,
        },
      }),
    }),
    updateRestrictions: build.mutation<
      UpdateRestrictionsApiResponse,
      UpdateRestrictionsApiArg
    >({
      query: (queryArg) => ({
        url: `/wiki/rest/api/content/${queryArg.id}/restriction`,
        method: "PUT",
        body: queryArg.contentRestrictionAddOrUpdateArray,
        params: { expand: queryArg.expand },
      }),
    }),
    addRestrictions: build.mutation<
      AddRestrictionsApiResponse,
      AddRestrictionsApiArg
    >({
      query: (queryArg) => ({
        url: `/wiki/rest/api/content/${queryArg.id}/restriction`,
        method: "POST",
        body: queryArg.contentRestrictionAddOrUpdateArray,
        params: { expand: queryArg.expand },
      }),
    }),
    deleteRestrictions: build.mutation<
      DeleteRestrictionsApiResponse,
      DeleteRestrictionsApiArg
    >({
      query: (queryArg) => ({
        url: `/wiki/rest/api/content/${queryArg.id}/restriction`,
        method: "DELETE",
        params: { expand: queryArg.expand },
      }),
    }),
    getRestrictionsByOperation: build.query<
      GetRestrictionsByOperationApiResponse,
      GetRestrictionsByOperationApiArg
    >({
      query: (queryArg) => ({
        url: `/wiki/rest/api/content/${queryArg.id}/restriction/byOperation`,
        params: { expand: queryArg.expand },
      }),
    }),
    getRestrictionsForOperation: build.query<
      GetRestrictionsForOperationApiResponse,
      GetRestrictionsForOperationApiArg
    >({
      query: (queryArg) => ({
        url: `/wiki/rest/api/content/${queryArg.id}/restriction/byOperation/${queryArg.operationKey}`,
        params: {
          expand: queryArg.expand,
          start: queryArg.start,
          limit: queryArg.limit,
        },
      }),
    }),
    getContentRestrictionStatusForGroup: build.query<
      GetContentRestrictionStatusForGroupApiResponse,
      GetContentRestrictionStatusForGroupApiArg
    >({
      query: (queryArg) => ({
        url: `/wiki/rest/api/content/${queryArg.id}/restriction/byOperation/${queryArg.operationKey}/group/${queryArg.groupName}`,
      }),
    }),
    addGroupToContentRestriction: build.mutation<
      AddGroupToContentRestrictionApiResponse,
      AddGroupToContentRestrictionApiArg
    >({
      query: (queryArg) => ({
        url: `/wiki/rest/api/content/${queryArg.id}/restriction/byOperation/${queryArg.operationKey}/group/${queryArg.groupName}`,
        method: "PUT",
      }),
    }),
    removeGroupFromContentRestrictionById: build.mutation<
      RemoveGroupFromContentRestrictionByIdApiResponse,
      RemoveGroupFromContentRestrictionByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/wiki/rest/api/content/${queryArg.id}/restriction/byOperation/${queryArg.operationKey}/group/${queryArg.groupName}`,
        method: "DELETE",
      }),
    }),
    getIndividualGroupRestrictionStatusByGroupId: build.query<
      GetIndividualGroupRestrictionStatusByGroupIdApiResponse,
      GetIndividualGroupRestrictionStatusByGroupIdApiArg
    >({
      query: (queryArg) => ({
        url: `/wiki/rest/api/content/${queryArg.id}/restriction/byOperation/${queryArg.operationKey}/byGroupId/${queryArg.groupId}`,
      }),
    }),
    addGroupToContentRestrictionByGroupId: build.mutation<
      AddGroupToContentRestrictionByGroupIdApiResponse,
      AddGroupToContentRestrictionByGroupIdApiArg
    >({
      query: (queryArg) => ({
        url: `/wiki/rest/api/content/${queryArg.id}/restriction/byOperation/${queryArg.operationKey}/byGroupId/${queryArg.groupId}`,
        method: "PUT",
      }),
    }),
    removeGroupFromContentRestriction: build.mutation<
      RemoveGroupFromContentRestrictionApiResponse,
      RemoveGroupFromContentRestrictionApiArg
    >({
      query: (queryArg) => ({
        url: `/wiki/rest/api/content/${queryArg.id}/restriction/byOperation/${queryArg.operationKey}/byGroupId/${queryArg.groupId}`,
        method: "DELETE",
      }),
    }),
    getContentRestrictionStatusForUser: build.query<
      GetContentRestrictionStatusForUserApiResponse,
      GetContentRestrictionStatusForUserApiArg
    >({
      query: (queryArg) => ({
        url: `/wiki/rest/api/content/${queryArg.id}/restriction/byOperation/${queryArg.operationKey}/user`,
        params: {
          key: queryArg.key,
          username: queryArg.username,
          accountId: queryArg.accountId,
        },
      }),
    }),
    addUserToContentRestriction: build.mutation<
      AddUserToContentRestrictionApiResponse,
      AddUserToContentRestrictionApiArg
    >({
      query: (queryArg) => ({
        url: `/wiki/rest/api/content/${queryArg.id}/restriction/byOperation/${queryArg.operationKey}/user`,
        method: "PUT",
        params: {
          key: queryArg.key,
          username: queryArg.username,
          accountId: queryArg.accountId,
        },
      }),
    }),
    removeUserFromContentRestriction: build.mutation<
      RemoveUserFromContentRestrictionApiResponse,
      RemoveUserFromContentRestrictionApiArg
    >({
      query: (queryArg) => ({
        url: `/wiki/rest/api/content/${queryArg.id}/restriction/byOperation/${queryArg.operationKey}/user`,
        method: "DELETE",
        params: {
          key: queryArg.key,
          username: queryArg.username,
          accountId: queryArg.accountId,
        },
      }),
    }),
    getContentState: build.query<
      GetContentStateApiResponse,
      GetContentStateApiArg
    >({
      query: (queryArg) => ({
        url: `/wiki/rest/api/content/${queryArg.id}/state`,
        params: { status: queryArg.status },
      }),
    }),
    setContentState: build.mutation<
      SetContentStateApiResponse,
      SetContentStateApiArg
    >({
      query: (queryArg) => ({
        url: `/wiki/rest/api/content/${queryArg.id}/state`,
        method: "PUT",
        body: queryArg.contentStateRestInput,
        params: { status: queryArg.status },
      }),
    }),
    removeContentState: build.mutation<
      RemoveContentStateApiResponse,
      RemoveContentStateApiArg
    >({
      query: (queryArg) => ({
        url: `/wiki/rest/api/content/${queryArg.id}/state`,
        method: "DELETE",
        params: { status: queryArg.status },
      }),
    }),
    getAvailableContentStates: build.query<
      GetAvailableContentStatesApiResponse,
      GetAvailableContentStatesApiArg
    >({
      query: (queryArg) => ({
        url: `/wiki/rest/api/content/${queryArg.id}/state/available`,
      }),
    }),
    getContentVersions: build.query<
      GetContentVersionsApiResponse,
      GetContentVersionsApiArg
    >({
      query: (queryArg) => ({
        url: `/wiki/rest/api/content/${queryArg.id}/version`,
        params: {
          start: queryArg.start,
          limit: queryArg.limit,
          expand: queryArg.expand,
        },
      }),
    }),
    restoreContentVersion: build.mutation<
      RestoreContentVersionApiResponse,
      RestoreContentVersionApiArg
    >({
      query: (queryArg) => ({
        url: `/wiki/rest/api/content/${queryArg.id}/version`,
        method: "POST",
        body: queryArg.versionRestore,
        params: { expand: queryArg.expand },
      }),
    }),
    getContentVersion: build.query<
      GetContentVersionApiResponse,
      GetContentVersionApiArg
    >({
      query: (queryArg) => ({
        url: `/wiki/rest/api/content/${queryArg.id}/version/${queryArg.versionNumber}`,
        params: { expand: queryArg.expand },
      }),
    }),
    deleteContentVersion: build.mutation<
      DeleteContentVersionApiResponse,
      DeleteContentVersionApiArg
    >({
      query: (queryArg) => ({
        url: `/wiki/rest/api/content/${queryArg.id}/version/${queryArg.versionNumber}`,
        method: "DELETE",
      }),
    }),
    getCustomContentStates: build.query<
      GetCustomContentStatesApiResponse,
      GetCustomContentStatesApiArg
    >({
      query: () => ({ url: `/wiki/rest/api/content-states` }),
    }),
    convertContentBody: build.mutation<
      ConvertContentBodyApiResponse,
      ConvertContentBodyApiArg
    >({
      query: (queryArg) => ({
        url: `/wiki/rest/api/contentbody/convert/${queryArg.to}`,
        method: "POST",
        body: queryArg.contentBodyCreate,
        params: {
          expand: queryArg.expand,
          spaceKeyContext: queryArg.spaceKeyContext,
          contentIdContext: queryArg.contentIdContext,
          embeddedContentRender: queryArg.embeddedContentRender,
        },
      }),
    }),
    searchTasks: build.query<SearchTasksApiResponse, SearchTasksApiArg>({
      query: (queryArg) => ({
        url: `/wiki/rest/api/inlinetasks/search`,
        params: {
          start: queryArg.start,
          limit: queryArg.limit,
          spaceKey: queryArg.spaceKey,
          pageId: queryArg.pageId,
          assignee: queryArg.assignee,
          creator: queryArg.creator,
          completedUser: queryArg.completedUser,
          duedateFrom: queryArg.duedateFrom,
          duedateTo: queryArg.duedateTo,
          createdateFrom: queryArg.createdateFrom,
          createdateTo: queryArg.createdateTo,
          completedateFrom: queryArg.completedateFrom,
          completedateTo: queryArg.completedateTo,
          status: queryArg.status,
        },
      }),
    }),
    getTaskById: build.query<GetTaskByIdApiResponse, GetTaskByIdApiArg>({
      query: (queryArg) => ({
        url: `/wiki/rest/api/inlinetasks/${queryArg.inlineTaskId}`,
      }),
    }),
    updateTaskById: build.mutation<
      UpdateTaskByIdApiResponse,
      UpdateTaskByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/wiki/rest/api/inlinetasks/${queryArg.inlineTaskId}`,
        method: "PUT",
        body: queryArg.taskStatusUpdate,
      }),
    }),
    getAllLabelContent: build.query<
      GetAllLabelContentApiResponse,
      GetAllLabelContentApiArg
    >({
      query: (queryArg) => ({
        url: `/wiki/rest/api/label`,
        params: {
          name: queryArg.name,
          type: queryArg["type"],
          start: queryArg.start,
          limit: queryArg.limit,
        },
      }),
    }),
    getGroups: build.query<GetGroupsApiResponse, GetGroupsApiArg>({
      query: (queryArg) => ({
        url: `/wiki/rest/api/group`,
        params: {
          start: queryArg.start,
          limit: queryArg.limit,
          accessType: queryArg.accessType,
        },
      }),
    }),
    createGroup: build.mutation<CreateGroupApiResponse, CreateGroupApiArg>({
      query: (queryArg) => ({
        url: `/wiki/rest/api/group`,
        method: "POST",
        body: queryArg.groupName,
      }),
    }),
    removeGroup: build.mutation<RemoveGroupApiResponse, RemoveGroupApiArg>({
      query: (queryArg) => ({
        url: `/wiki/rest/api/group`,
        method: "DELETE",
        params: { name: queryArg.name },
      }),
    }),
    getGroupByQueryParam: build.query<
      GetGroupByQueryParamApiResponse,
      GetGroupByQueryParamApiArg
    >({
      query: (queryArg) => ({
        url: `/wiki/rest/api/group/by-name`,
        params: { name: queryArg.name },
      }),
    }),
    getGroupByGroupId: build.query<
      GetGroupByGroupIdApiResponse,
      GetGroupByGroupIdApiArg
    >({
      query: (queryArg) => ({
        url: `/wiki/rest/api/group/by-id`,
        params: { id: queryArg.id },
      }),
    }),
    removeGroupById: build.mutation<
      RemoveGroupByIdApiResponse,
      RemoveGroupByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/wiki/rest/api/group/by-id`,
        method: "DELETE",
        params: { id: queryArg.id },
      }),
    }),
    getGroupByName: build.query<
      GetGroupByNameApiResponse,
      GetGroupByNameApiArg
    >({
      query: (queryArg) => ({
        url: `/wiki/rest/api/group/${queryArg.groupName}`,
      }),
    }),
    getMembersByQueryParam: build.query<
      GetMembersByQueryParamApiResponse,
      GetMembersByQueryParamApiArg
    >({
      query: (queryArg) => ({
        url: `/wiki/rest/api/group/member`,
        params: {
          name: queryArg.name,
          start: queryArg.start,
          limit: queryArg.limit,
          shouldReturnTotalSize: queryArg.shouldReturnTotalSize,
        },
      }),
    }),
    getGroupMembers: build.query<
      GetGroupMembersApiResponse,
      GetGroupMembersApiArg
    >({
      query: (queryArg) => ({
        url: `/wiki/rest/api/group/${queryArg.groupName}/member`,
        params: { start: queryArg.start, limit: queryArg.limit },
      }),
    }),
    searchGroups: build.query<SearchGroupsApiResponse, SearchGroupsApiArg>({
      query: (queryArg) => ({
        url: `/wiki/rest/api/group/picker`,
        params: {
          query: queryArg.query,
          start: queryArg.start,
          limit: queryArg.limit,
          shouldReturnTotalSize: queryArg.shouldReturnTotalSize,
        },
      }),
    }),
    addUserToGroupByGroupId: build.mutation<
      AddUserToGroupByGroupIdApiResponse,
      AddUserToGroupByGroupIdApiArg
    >({
      query: (queryArg) => ({
        url: `/wiki/rest/api/group/userByGroupId`,
        method: "POST",
        body: queryArg.accountId,
        params: { groupId: queryArg.groupId },
      }),
    }),
    removeMemberFromGroupByGroupId: build.mutation<
      RemoveMemberFromGroupByGroupIdApiResponse,
      RemoveMemberFromGroupByGroupIdApiArg
    >({
      query: (queryArg) => ({
        url: `/wiki/rest/api/group/userByGroupId`,
        method: "DELETE",
        params: {
          groupId: queryArg.groupId,
          key: queryArg.key,
          username: queryArg.username,
          accountId: queryArg.accountId,
        },
      }),
    }),
    getGroupMembersByGroupId: build.query<
      GetGroupMembersByGroupIdApiResponse,
      GetGroupMembersByGroupIdApiArg
    >({
      query: (queryArg) => ({
        url: `/wiki/rest/api/group/${queryArg.groupId}/membersByGroupId`,
        params: {
          start: queryArg.start,
          limit: queryArg.limit,
          shouldReturnTotalSize: queryArg.shouldReturnTotalSize,
        },
      }),
    }),
    addUserToGroup: build.mutation<
      AddUserToGroupApiResponse,
      AddUserToGroupApiArg
    >({
      query: (queryArg) => ({
        url: `/wiki/rest/api/group/user`,
        method: "POST",
        body: queryArg.accountId,
        params: { name: queryArg.name },
      }),
    }),
    removeMemberFromGroup: build.mutation<
      RemoveMemberFromGroupApiResponse,
      RemoveMemberFromGroupApiArg
    >({
      query: (queryArg) => ({
        url: `/wiki/rest/api/group/user`,
        method: "DELETE",
        params: {
          name: queryArg.name,
          key: queryArg.key,
          username: queryArg.username,
          accountId: queryArg.accountId,
        },
      }),
    }),
    getTasks: build.query<GetTasksApiResponse, GetTasksApiArg>({
      query: (queryArg) => ({
        url: `/wiki/rest/api/longtask`,
        params: { start: queryArg.start, limit: queryArg.limit },
      }),
    }),
    getTask: build.query<GetTaskApiResponse, GetTaskApiArg>({
      query: (queryArg) => ({ url: `/wiki/rest/api/longtask/${queryArg.id}` }),
    }),
    findTargetFromSource: build.query<
      FindTargetFromSourceApiResponse,
      FindTargetFromSourceApiArg
    >({
      query: (queryArg) => ({
        url: `/wiki/rest/api/relation/${queryArg.relationName}/from/${queryArg.sourceType}/${queryArg.sourceKey}/to/${queryArg.targetType}`,
        params: {
          sourceStatus: queryArg.sourceStatus,
          targetStatus: queryArg.targetStatus,
          sourceVersion: queryArg.sourceVersion,
          targetVersion: queryArg.targetVersion,
          expand: queryArg.expand,
          start: queryArg.start,
          limit: queryArg.limit,
        },
      }),
    }),
    getRelationship: build.query<
      GetRelationshipApiResponse,
      GetRelationshipApiArg
    >({
      query: (queryArg) => ({
        url: `/wiki/rest/api/relation/${queryArg.relationName}/from/${queryArg.sourceType}/${queryArg.sourceKey}/to/${queryArg.targetType}/${queryArg.targetKey}`,
        params: {
          sourceStatus: queryArg.sourceStatus,
          targetStatus: queryArg.targetStatus,
          sourceVersion: queryArg.sourceVersion,
          targetVersion: queryArg.targetVersion,
          expand: queryArg.expand,
        },
      }),
    }),
    createRelationship: build.mutation<
      CreateRelationshipApiResponse,
      CreateRelationshipApiArg
    >({
      query: (queryArg) => ({
        url: `/wiki/rest/api/relation/${queryArg.relationName}/from/${queryArg.sourceType}/${queryArg.sourceKey}/to/${queryArg.targetType}/${queryArg.targetKey}`,
        method: "PUT",
        params: {
          sourceStatus: queryArg.sourceStatus,
          targetStatus: queryArg.targetStatus,
          sourceVersion: queryArg.sourceVersion,
          targetVersion: queryArg.targetVersion,
        },
      }),
    }),
    deleteRelationship: build.mutation<
      DeleteRelationshipApiResponse,
      DeleteRelationshipApiArg
    >({
      query: (queryArg) => ({
        url: `/wiki/rest/api/relation/${queryArg.relationName}/from/${queryArg.sourceType}/${queryArg.sourceKey}/to/${queryArg.targetType}/${queryArg.targetKey}`,
        method: "DELETE",
        params: {
          sourceStatus: queryArg.sourceStatus,
          targetStatus: queryArg.targetStatus,
          sourceVersion: queryArg.sourceVersion,
          targetVersion: queryArg.targetVersion,
        },
      }),
    }),
    findSourcesForTarget: build.query<
      FindSourcesForTargetApiResponse,
      FindSourcesForTargetApiArg
    >({
      query: (queryArg) => ({
        url: `/wiki/rest/api/relation/${queryArg.relationName}/to/${queryArg.targetType}/${queryArg.targetKey}/from/${queryArg.sourceType}`,
        params: {
          sourceStatus: queryArg.sourceStatus,
          targetStatus: queryArg.targetStatus,
          sourceVersion: queryArg.sourceVersion,
          targetVersion: queryArg.targetVersion,
          expand: queryArg.expand,
          start: queryArg.start,
          limit: queryArg.limit,
        },
      }),
    }),
    searchByCql: build.query<SearchByCqlApiResponse, SearchByCqlApiArg>({
      query: (queryArg) => ({
        url: `/wiki/rest/api/search`,
        params: {
          cql: queryArg.cql,
          cqlcontext: queryArg.cqlcontext,
          cursor: queryArg.cursor,
          next: queryArg.next,
          prev: queryArg.prev,
          limit: queryArg.limit,
          start: queryArg.start,
          includeArchivedSpaces: queryArg.includeArchivedSpaces,
          excludeCurrentSpaces: queryArg.excludeCurrentSpaces,
          excerpt: queryArg.excerpt,
          sitePermissionTypeFilter: queryArg.sitePermissionTypeFilter,
          _: queryArg._,
          expand: queryArg.expand,
        },
      }),
    }),
    searchUser: build.query<SearchUserApiResponse, SearchUserApiArg>({
      query: (queryArg) => ({
        url: `/wiki/rest/api/search/user`,
        params: {
          cql: queryArg.cql,
          start: queryArg.start,
          limit: queryArg.limit,
          expand: queryArg.expand,
        },
      }),
    }),
    getLookAndFeelSettings: build.query<
      GetLookAndFeelSettingsApiResponse,
      GetLookAndFeelSettingsApiArg
    >({
      query: (queryArg) => ({
        url: `/wiki/rest/api/settings/lookandfeel`,
        params: { spaceKey: queryArg.spaceKey },
      }),
    }),
    updateLookAndFeel: build.mutation<
      UpdateLookAndFeelApiResponse,
      UpdateLookAndFeelApiArg
    >({
      query: (queryArg) => ({
        url: `/wiki/rest/api/settings/lookandfeel`,
        method: "PUT",
        body: queryArg.lookAndFeelSelection,
      }),
    }),
    updateLookAndFeelSettings: build.mutation<
      UpdateLookAndFeelSettingsApiResponse,
      UpdateLookAndFeelSettingsApiArg
    >({
      query: (queryArg) => ({
        url: `/wiki/rest/api/settings/lookandfeel/custom`,
        method: "POST",
        body: queryArg.lookAndFeel,
        params: { spaceKey: queryArg.spaceKey },
      }),
    }),
    resetLookAndFeelSettings: build.mutation<
      ResetLookAndFeelSettingsApiResponse,
      ResetLookAndFeelSettingsApiArg
    >({
      query: (queryArg) => ({
        url: `/wiki/rest/api/settings/lookandfeel/custom`,
        method: "DELETE",
        params: { spaceKey: queryArg.spaceKey },
      }),
    }),
    setLookAndFeelSettings: build.mutation<
      SetLookAndFeelSettingsApiResponse,
      SetLookAndFeelSettingsApiArg
    >({
      query: (queryArg) => ({
        url: `/wiki/rest/api/settings/lookandfeel/selected`,
        method: "PUT",
        body: queryArg.body,
        params: { spaceKey: queryArg.spaceKey },
      }),
    }),
    getSystemInfo: build.query<GetSystemInfoApiResponse, GetSystemInfoApiArg>({
      query: () => ({ url: `/wiki/rest/api/settings/systemInfo` }),
    }),
    getThemes: build.query<GetThemesApiResponse, GetThemesApiArg>({
      query: (queryArg) => ({
        url: `/wiki/rest/api/settings/theme`,
        params: { start: queryArg.start, limit: queryArg.limit },
      }),
    }),
    getGlobalTheme: build.query<
      GetGlobalThemeApiResponse,
      GetGlobalThemeApiArg
    >({
      query: () => ({ url: `/wiki/rest/api/settings/theme/selected` }),
    }),
    getTheme: build.query<GetThemeApiResponse, GetThemeApiArg>({
      query: (queryArg) => ({
        url: `/wiki/rest/api/settings/theme/${queryArg.themeKey}`,
      }),
    }),
    getSpaces: build.query<GetSpacesApiResponse, GetSpacesApiArg>({
      query: (queryArg) => ({
        url: `/wiki/rest/api/space`,
        params: {
          spaceKey: queryArg.spaceKey,
          spaceId: queryArg.spaceId,
          type: queryArg["type"],
          status: queryArg.status,
          label: queryArg.label,
          favourite: queryArg.favourite,
          favouriteUserKey: queryArg.favouriteUserKey,
          expand: queryArg.expand,
          start: queryArg.start,
          limit: queryArg.limit,
        },
      }),
    }),
    createSpace: build.mutation<CreateSpaceApiResponse, CreateSpaceApiArg>({
      query: (queryArg) => ({
        url: `/wiki/rest/api/space`,
        method: "POST",
        body: queryArg.spaceCreate,
      }),
    }),
    createPrivateSpace: build.mutation<
      CreatePrivateSpaceApiResponse,
      CreatePrivateSpaceApiArg
    >({
      query: (queryArg) => ({
        url: `/wiki/rest/api/space/_private`,
        method: "POST",
        body: queryArg.spaceCreate,
      }),
    }),
    getSpace: build.query<GetSpaceApiResponse, GetSpaceApiArg>({
      query: (queryArg) => ({
        url: `/wiki/rest/api/space/${queryArg.spaceKey}`,
        params: { expand: queryArg.expand },
      }),
    }),
    updateSpace: build.mutation<UpdateSpaceApiResponse, UpdateSpaceApiArg>({
      query: (queryArg) => ({
        url: `/wiki/rest/api/space/${queryArg.spaceKey}`,
        method: "PUT",
        body: queryArg.spaceUpdate,
      }),
    }),
    deleteSpace: build.mutation<DeleteSpaceApiResponse, DeleteSpaceApiArg>({
      query: (queryArg) => ({
        url: `/wiki/rest/api/space/${queryArg.spaceKey}`,
        method: "DELETE",
      }),
    }),
    getContentForSpace: build.query<
      GetContentForSpaceApiResponse,
      GetContentForSpaceApiArg
    >({
      query: (queryArg) => ({
        url: `/wiki/rest/api/space/${queryArg.spaceKey}/content`,
        params: {
          depth: queryArg.depth,
          expand: queryArg.expand,
          start: queryArg.start,
          limit: queryArg.limit,
        },
      }),
    }),
    addPermissionToSpace: build.mutation<
      AddPermissionToSpaceApiResponse,
      AddPermissionToSpaceApiArg
    >({
      query: (queryArg) => ({
        url: `/wiki/rest/api/space/${queryArg.spaceKey}/permission`,
        method: "POST",
        body: queryArg.spacePermissionRequest,
      }),
    }),
    addCustomContentPermissions: build.mutation<
      AddCustomContentPermissionsApiResponse,
      AddCustomContentPermissionsApiArg
    >({
      query: (queryArg) => ({
        url: `/wiki/rest/api/space/${queryArg.spaceKey}/permission/custom-content`,
        method: "POST",
        body: queryArg.spacePermissionCustomContent,
      }),
    }),
    removePermission: build.mutation<
      RemovePermissionApiResponse,
      RemovePermissionApiArg
    >({
      query: (queryArg) => ({
        url: `/wiki/rest/api/space/${queryArg.spaceKey}/permission/${queryArg.id}`,
        method: "DELETE",
      }),
    }),
    getContentByTypeForSpace: build.query<
      GetContentByTypeForSpaceApiResponse,
      GetContentByTypeForSpaceApiArg
    >({
      query: (queryArg) => ({
        url: `/wiki/rest/api/space/${queryArg.spaceKey}/content/${queryArg["type"]}`,
        params: {
          depth: queryArg.depth,
          expand: queryArg.expand,
          start: queryArg.start,
          limit: queryArg.limit,
        },
      }),
    }),
    getSpaceProperties: build.query<
      GetSpacePropertiesApiResponse,
      GetSpacePropertiesApiArg
    >({
      query: (queryArg) => ({
        url: `/wiki/rest/api/space/${queryArg.spaceKey}/property`,
        params: {
          expand: queryArg.expand,
          start: queryArg.start,
          limit: queryArg.limit,
        },
      }),
    }),
    createSpaceProperty: build.mutation<
      CreateSpacePropertyApiResponse,
      CreateSpacePropertyApiArg
    >({
      query: (queryArg) => ({
        url: `/wiki/rest/api/space/${queryArg.spaceKey}/property`,
        method: "POST",
        body: queryArg.spacePropertyCreate,
      }),
    }),
    getSpaceProperty: build.query<
      GetSpacePropertyApiResponse,
      GetSpacePropertyApiArg
    >({
      query: (queryArg) => ({
        url: `/wiki/rest/api/space/${queryArg.spaceKey}/property/${queryArg.key}`,
        params: { expand: queryArg.expand },
      }),
    }),
    updateSpaceProperty: build.mutation<
      UpdateSpacePropertyApiResponse,
      UpdateSpacePropertyApiArg
    >({
      query: (queryArg) => ({
        url: `/wiki/rest/api/space/${queryArg.spaceKey}/property/${queryArg.key}`,
        method: "PUT",
        body: queryArg.spacePropertyUpdate,
      }),
    }),
    createSpacePropertyForKey: build.mutation<
      CreateSpacePropertyForKeyApiResponse,
      CreateSpacePropertyForKeyApiArg
    >({
      query: (queryArg) => ({
        url: `/wiki/rest/api/space/${queryArg.spaceKey}/property/${queryArg.key}`,
        method: "POST",
        body: queryArg.spacePropertyCreateNoKey,
      }),
    }),
    deleteSpaceProperty: build.mutation<
      DeleteSpacePropertyApiResponse,
      DeleteSpacePropertyApiArg
    >({
      query: (queryArg) => ({
        url: `/wiki/rest/api/space/${queryArg.spaceKey}/property/${queryArg.key}`,
        method: "DELETE",
      }),
    }),
    getSpaceSettings: build.query<
      GetSpaceSettingsApiResponse,
      GetSpaceSettingsApiArg
    >({
      query: (queryArg) => ({
        url: `/wiki/rest/api/space/${queryArg.spaceKey}/settings`,
      }),
    }),
    updateSpaceSettings: build.mutation<
      UpdateSpaceSettingsApiResponse,
      UpdateSpaceSettingsApiArg
    >({
      query: (queryArg) => ({
        url: `/wiki/rest/api/space/${queryArg.spaceKey}/settings`,
        method: "PUT",
        body: queryArg.spaceSettingsUpdate,
      }),
    }),
    getSpaceContentStates: build.query<
      GetSpaceContentStatesApiResponse,
      GetSpaceContentStatesApiArg
    >({
      query: (queryArg) => ({
        url: `/wiki/rest/api/space/${queryArg.spaceKey}/state`,
      }),
    }),
    getContentStateSettings: build.query<
      GetContentStateSettingsApiResponse,
      GetContentStateSettingsApiArg
    >({
      query: (queryArg) => ({
        url: `/wiki/rest/api/space/${queryArg.spaceKey}/state/settings`,
      }),
    }),
    getSpaceTheme: build.query<GetSpaceThemeApiResponse, GetSpaceThemeApiArg>({
      query: (queryArg) => ({
        url: `/wiki/rest/api/space/${queryArg.spaceKey}/theme`,
      }),
    }),
    setSpaceTheme: build.mutation<
      SetSpaceThemeApiResponse,
      SetSpaceThemeApiArg
    >({
      query: (queryArg) => ({
        url: `/wiki/rest/api/space/${queryArg.spaceKey}/theme`,
        method: "PUT",
        body: queryArg.themeUpdate,
      }),
    }),
    resetSpaceTheme: build.mutation<
      ResetSpaceThemeApiResponse,
      ResetSpaceThemeApiArg
    >({
      query: (queryArg) => ({
        url: `/wiki/rest/api/space/${queryArg.spaceKey}/theme`,
        method: "DELETE",
      }),
    }),
    getWatchersForSpace: build.query<
      GetWatchersForSpaceApiResponse,
      GetWatchersForSpaceApiArg
    >({
      query: (queryArg) => ({
        url: `/wiki/rest/api/space/${queryArg.spaceKey}/watch`,
        params: { start: queryArg.start, limit: queryArg.limit },
      }),
    }),
    getLabelsForSpace: build.query<
      GetLabelsForSpaceApiResponse,
      GetLabelsForSpaceApiArg
    >({
      query: (queryArg) => ({
        url: `/wiki/rest/api/space/${queryArg.spaceKey}/label`,
        params: {
          prefix: queryArg.prefix,
          start: queryArg.start,
          limit: queryArg.limit,
        },
      }),
    }),
    addLabelsToSpace: build.mutation<
      AddLabelsToSpaceApiResponse,
      AddLabelsToSpaceApiArg
    >({
      query: (queryArg) => ({
        url: `/wiki/rest/api/space/${queryArg.spaceKey}/label`,
        method: "POST",
        body: queryArg.body,
      }),
    }),
    deleteLabelFromSpace: build.mutation<
      DeleteLabelFromSpaceApiResponse,
      DeleteLabelFromSpaceApiArg
    >({
      query: (queryArg) => ({
        url: `/wiki/rest/api/space/${queryArg.spaceKey}/label`,
        method: "DELETE",
        params: { name: queryArg.name, prefix: queryArg.prefix },
      }),
    }),
    updateContentTemplate: build.mutation<
      UpdateContentTemplateApiResponse,
      UpdateContentTemplateApiArg
    >({
      query: (queryArg) => ({
        url: `/wiki/rest/api/template`,
        method: "PUT",
        body: queryArg.contentTemplateUpdate,
      }),
    }),
    createContentTemplate: build.mutation<
      CreateContentTemplateApiResponse,
      CreateContentTemplateApiArg
    >({
      query: (queryArg) => ({
        url: `/wiki/rest/api/template`,
        method: "POST",
        body: queryArg.contentTemplateCreate,
      }),
    }),
    getBlueprintTemplates: build.query<
      GetBlueprintTemplatesApiResponse,
      GetBlueprintTemplatesApiArg
    >({
      query: (queryArg) => ({
        url: `/wiki/rest/api/template/blueprint`,
        params: {
          spaceKey: queryArg.spaceKey,
          start: queryArg.start,
          limit: queryArg.limit,
          expand: queryArg.expand,
        },
      }),
    }),
    getContentTemplates: build.query<
      GetContentTemplatesApiResponse,
      GetContentTemplatesApiArg
    >({
      query: (queryArg) => ({
        url: `/wiki/rest/api/template/page`,
        params: {
          spaceKey: queryArg.spaceKey,
          start: queryArg.start,
          limit: queryArg.limit,
          expand: queryArg.expand,
        },
      }),
    }),
    getContentTemplate: build.query<
      GetContentTemplateApiResponse,
      GetContentTemplateApiArg
    >({
      query: (queryArg) => ({
        url: `/wiki/rest/api/template/${queryArg.contentTemplateId}`,
      }),
    }),
    removeTemplate: build.mutation<
      RemoveTemplateApiResponse,
      RemoveTemplateApiArg
    >({
      query: (queryArg) => ({
        url: `/wiki/rest/api/template/${queryArg.contentTemplateId}`,
        method: "DELETE",
      }),
    }),
    getUser: build.query<GetUserApiResponse, GetUserApiArg>({
      query: (queryArg) => ({
        url: `/wiki/rest/api/user`,
        params: { accountId: queryArg.accountId, expand: queryArg.expand },
      }),
    }),
    getAnonymousUser: build.query<
      GetAnonymousUserApiResponse,
      GetAnonymousUserApiArg
    >({
      query: (queryArg) => ({
        url: `/wiki/rest/api/user/anonymous`,
        params: { expand: queryArg.expand },
      }),
    }),
    getCurrentUser: build.query<
      GetCurrentUserApiResponse,
      GetCurrentUserApiArg
    >({
      query: (queryArg) => ({
        url: `/wiki/rest/api/user/current`,
        params: { expand: queryArg.expand },
      }),
    }),
    getGroupMembershipsForUser: build.query<
      GetGroupMembershipsForUserApiResponse,
      GetGroupMembershipsForUserApiArg
    >({
      query: (queryArg) => ({
        url: `/wiki/rest/api/user/memberof`,
        params: {
          accountId: queryArg.accountId,
          start: queryArg.start,
          limit: queryArg.limit,
        },
      }),
    }),
    getBulkUserLookup: build.query<
      GetBulkUserLookupApiResponse,
      GetBulkUserLookupApiArg
    >({
      query: (queryArg) => ({
        url: `/wiki/rest/api/user/bulk`,
        params: {
          accountId: queryArg.accountId,
          expand: queryArg.expand,
          limit: queryArg.limit,
        },
      }),
    }),
    getContentWatchStatus: build.query<
      GetContentWatchStatusApiResponse,
      GetContentWatchStatusApiArg
    >({
      query: (queryArg) => ({
        url: `/wiki/rest/api/user/watch/content/${queryArg.contentId}`,
        params: {
          key: queryArg.key,
          username: queryArg.username,
          accountId: queryArg.accountId,
        },
      }),
    }),
    addContentWatcher: build.mutation<
      AddContentWatcherApiResponse,
      AddContentWatcherApiArg
    >({
      query: (queryArg) => ({
        url: `/wiki/rest/api/user/watch/content/${queryArg.contentId}`,
        method: "POST",
        params: {
          key: queryArg.key,
          username: queryArg.username,
          accountId: queryArg.accountId,
        },
      }),
    }),
    removeContentWatcher: build.mutation<
      RemoveContentWatcherApiResponse,
      RemoveContentWatcherApiArg
    >({
      query: (queryArg) => ({
        url: `/wiki/rest/api/user/watch/content/${queryArg.contentId}`,
        method: "DELETE",
        headers: { "X-Atlassian-Token": queryArg["X-Atlassian-Token"] },
        params: {
          key: queryArg.key,
          username: queryArg.username,
          accountId: queryArg.accountId,
        },
      }),
    }),
    isWatchingLabel: build.query<
      IsWatchingLabelApiResponse,
      IsWatchingLabelApiArg
    >({
      query: (queryArg) => ({
        url: `/wiki/rest/api/user/watch/label/${queryArg.labelName}`,
        params: {
          key: queryArg.key,
          username: queryArg.username,
          accountId: queryArg.accountId,
        },
      }),
    }),
    addLabelWatcher: build.mutation<
      AddLabelWatcherApiResponse,
      AddLabelWatcherApiArg
    >({
      query: (queryArg) => ({
        url: `/wiki/rest/api/user/watch/label/${queryArg.labelName}`,
        method: "POST",
        headers: { "X-Atlassian-Token": queryArg["X-Atlassian-Token"] },
        params: {
          key: queryArg.key,
          username: queryArg.username,
          accountId: queryArg.accountId,
        },
      }),
    }),
    removeLabelWatcher: build.mutation<
      RemoveLabelWatcherApiResponse,
      RemoveLabelWatcherApiArg
    >({
      query: (queryArg) => ({
        url: `/wiki/rest/api/user/watch/label/${queryArg.labelName}`,
        method: "DELETE",
        params: {
          key: queryArg.key,
          username: queryArg.username,
          accountId: queryArg.accountId,
        },
      }),
    }),
    isWatchingSpace: build.query<
      IsWatchingSpaceApiResponse,
      IsWatchingSpaceApiArg
    >({
      query: (queryArg) => ({
        url: `/wiki/rest/api/user/watch/space/${queryArg.spaceKey}`,
        params: {
          key: queryArg.key,
          username: queryArg.username,
          accountId: queryArg.accountId,
        },
      }),
    }),
    addSpaceWatcher: build.mutation<
      AddSpaceWatcherApiResponse,
      AddSpaceWatcherApiArg
    >({
      query: (queryArg) => ({
        url: `/wiki/rest/api/user/watch/space/${queryArg.spaceKey}`,
        method: "POST",
        headers: { "X-Atlassian-Token": queryArg["X-Atlassian-Token"] },
        params: {
          key: queryArg.key,
          username: queryArg.username,
          accountId: queryArg.accountId,
        },
      }),
    }),
    removeSpaceWatch: build.mutation<
      RemoveSpaceWatchApiResponse,
      RemoveSpaceWatchApiArg
    >({
      query: (queryArg) => ({
        url: `/wiki/rest/api/user/watch/space/${queryArg.spaceKey}`,
        method: "DELETE",
        params: {
          key: queryArg.key,
          username: queryArg.username,
          accountId: queryArg.accountId,
        },
      }),
    }),
    getPrivacyUnsafeUserEmail: build.query<
      GetPrivacyUnsafeUserEmailApiResponse,
      GetPrivacyUnsafeUserEmailApiArg
    >({
      query: (queryArg) => ({
        url: `/wiki/rest/api/user/email`,
        params: { accountId: queryArg.accountId },
      }),
    }),
    getPrivacyUnsafeUserEmailBulk: build.query<
      GetPrivacyUnsafeUserEmailBulkApiResponse,
      GetPrivacyUnsafeUserEmailBulkApiArg
    >({
      query: (queryArg) => ({
        url: `/wiki/rest/api/user/email/bulk`,
        params: { accountId: queryArg.accountId },
      }),
    }),
    getBulkUserMigration: build.query<
      GetBulkUserMigrationApiResponse,
      GetBulkUserMigrationApiArg
    >({
      query: (queryArg) => ({
        url: `/wiki/rest/api/user/bulk/migration`,
        params: {
          key: queryArg.key,
          username: queryArg.username,
          start: queryArg.start,
          limit: queryArg.limit,
        },
      }),
    }),
    getModules: build.query<GetModulesApiResponse, GetModulesApiArg>({
      query: () => ({ url: `/atlassian-connect/1/app/module/dynamic` }),
    }),
    registerModules: build.mutation<
      RegisterModulesApiResponse,
      RegisterModulesApiArg
    >({
      query: (queryArg) => ({
        url: `/atlassian-connect/1/app/module/dynamic`,
        method: "POST",
        body: queryArg.connectModules,
      }),
    }),
    removeModules: build.mutation<
      RemoveModulesApiResponse,
      RemoveModulesApiArg
    >({
      query: (queryArg) => ({
        url: `/atlassian-connect/1/app/module/dynamic`,
        method: "DELETE",
        params: { moduleKey: queryArg.moduleKey },
      }),
    }),
    getViews: build.query<GetViewsApiResponse, GetViewsApiArg>({
      query: (queryArg) => ({
        url: `/wiki/rest/api/analytics/content/${queryArg.contentId}/views`,
        params: { fromDate: queryArg.fromDate },
      }),
    }),
    getViewers: build.query<GetViewersApiResponse, GetViewersApiArg>({
      query: (queryArg) => ({
        url: `/wiki/rest/api/analytics/content/${queryArg.contentId}/viewers`,
        params: { fromDate: queryArg.fromDate },
      }),
    }),
    getUserProperties: build.query<
      GetUserPropertiesApiResponse,
      GetUserPropertiesApiArg
    >({
      query: (queryArg) => ({
        url: `/wiki/rest/api/user/${queryArg.userId}/property`,
        params: { start: queryArg.start, limit: queryArg.limit },
      }),
    }),
    getUserProperty: build.query<
      GetUserPropertyApiResponse,
      GetUserPropertyApiArg
    >({
      query: (queryArg) => ({
        url: `/wiki/rest/api/user/${queryArg.userId}/property/${queryArg.key}`,
      }),
    }),
    updateUserProperty: build.mutation<
      UpdateUserPropertyApiResponse,
      UpdateUserPropertyApiArg
    >({
      query: (queryArg) => ({
        url: `/wiki/rest/api/user/${queryArg.userId}/property/${queryArg.key}`,
        method: "PUT",
        body: queryArg.userPropertyUpdate,
      }),
    }),
    createUserProperty: build.mutation<
      CreateUserPropertyApiResponse,
      CreateUserPropertyApiArg
    >({
      query: (queryArg) => ({
        url: `/wiki/rest/api/user/${queryArg.userId}/property/${queryArg.key}`,
        method: "POST",
        body: queryArg.userPropertyCreate,
      }),
    }),
    deleteUserProperty: build.mutation<
      DeleteUserPropertyApiResponse,
      DeleteUserPropertyApiArg
    >({
      query: (queryArg) => ({
        url: `/wiki/rest/api/user/${queryArg.userId}/property/${queryArg.key}`,
        method: "DELETE",
      }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as confluence };
export type GetAuditRecordsApiResponse =
  /** status 200 Returned if the requested records are returned. */ AuditRecordArray;
export type GetAuditRecordsApiArg = {
  /** Filters the results to the records on or after the `startDate`.
    The `startDate` must be specified as a [timestamp](https://www.unixtimestamp.com/). */
  startDate?: string;
  /** Filters the results to the records on or before the `endDate`.
    The `endDate` must be specified as a [timestamp](https://www.unixtimestamp.com/). */
  endDate?: string;
  /** Filters the results to records that have string property values
    matching the `searchString`. */
  searchString?: string;
  /** The starting index of the returned records. */
  start?: number;
  /** The maximum number of records to return per page.
    Note, this may be restricted by fixed system limits. */
  limit?: number;
};
export type CreateAuditRecordApiResponse =
  /** status 200 Returned if the record is created in the audit log. */ AuditRecord;
export type CreateAuditRecordApiArg = {
  /** The record to be created in the audit log. */
  auditRecordCreate: AuditRecordCreate;
};
export type ExportAuditRecordsApiResponse = unknown;
export type ExportAuditRecordsApiArg = {
  /** Filters the exported results to the records on or after the `startDate`.
    The `startDate` must be specified as a [timestamp](https://www.unixtimestamp.com/). */
  startDate?: string;
  /** Filters the exported results to the records on or before the `endDate`.
    The `endDate` must be specified as a [timestamp](https://www.unixtimestamp.com/). */
  endDate?: string;
  /** Filters the exported results to records that have string property values
    matching the `searchString`. */
  searchString?: string;
  /** The format of the export file for the audit records. */
  format?: "csv" | "zip";
};
export type GetRetentionPeriodApiResponse =
  /** status 200 Returned if the requested retention period is returned. */ RetentionPeriod;
export type GetRetentionPeriodApiArg = void;
export type SetRetentionPeriodApiResponse =
  /** status 200 Returned if the retention period is updated. */ RetentionPeriod;
export type SetRetentionPeriodApiArg = {
  /** The updated retention period. */
  retentionPeriod: RetentionPeriod;
};
export type GetAuditRecordsForTimePeriodApiResponse =
  /** status 200 Returned if the requested records are returned. */ AuditRecordArray;
export type GetAuditRecordsForTimePeriodApiArg = {
  /** The number of units for the time period. */
  number?: number;
  /** The unit of time that the time period is measured in. */
  units?:
    | "NANOS"
    | "MICROS"
    | "MILLIS"
    | "SECONDS"
    | "MINUTES"
    | "HOURS"
    | "HALF_DAYS"
    | "DAYS"
    | "WEEKS"
    | "MONTHS"
    | "YEARS"
    | "DECADES"
    | "CENTURIES";
  /** Filters the results to records that have string property values
    matching the `searchString`. */
  searchString?: string;
  /** The starting index of the returned records. */
  start?: number;
  /** The maximum number of records to return per page.
    Note, this may be restricted by fixed system limits. */
  limit?: number;
};
export type GetContentApiResponse =
  /** status 200 Returned if the requested list of content is returned. */ ContentArray;
export type GetContentApiArg = {
  /** The type of content to return. For example:
      - page
      - blogpost */
  type?: string;
  /** The key of the space to be queried for its content. */
  spaceKey?: string;
  /** The title of the page to be returned. Required for <code>page</code> type. */
  title?: string;
  /** Filter the results to a set of content based on their status. If set to `any`,
    content with any status is returned. Note, the `historical` status is currently
    not supported. */
  status?: string[];
  /** The posting date of the blog post to be returned. Required for
    <code>blogpost</code> type. Format: <code>yyyy-mm-dd</code>. */
  postingDay?: string;
  /** A multi-value parameter indicating which properties of the content to expand.
    Maximum sub-expansions allowed is `8`.
    
    - `childTypes.all` returns whether the content has attachments, comments, or child pages.
    Use this if you only need to check whether the content has children of a particular type.
    - `childTypes.attachment` returns whether the content has attachments.
    - `childTypes.comment` returns whether the content has comments.
    - `childTypes.page` returns whether the content has child pages.
    - `container` returns the space that the content is in. This is the same as the information
    returned by [Get space](#api-space-spaceKey-get).
    - `metadata.currentuser` returns information about the current user in relation to the content,
    including when they last viewed it, modified it, contributed to it, or added it as a favorite.
    - `metadata.properties` returns content properties that have been set via the Confluence REST API.
    - `metadata.labels` returns the labels that have been added to the content.
    - `metadata.frontend` this property is only used by Atlassian.
    - `operations` returns the operations for the content, which are used when setting permissions.
    - `children.page` returns pages that are descendants at the level immediately below the content.
    - `children.attachment` returns all attachments for the content.
    - `children.comment` returns all comments on the content.
    - `restrictions.read.restrictions.user` returns the users that have permission to read the content.
    - `restrictions.read.restrictions.group` returns the groups that have permission to read the content. Note that
    this may return deleted groups, because deleting a group doesn't remove associated restrictions.
    - `restrictions.update.restrictions.user` returns the users that have permission to update the content.
    - `restrictions.update.restrictions.group` returns the groups that have permission to update the content. Note that
    this may return deleted groups because deleting a group doesn't remove associated restrictions.
    - `history` returns the history of the content, including the date it was created.
    - `history.lastUpdated` returns information about the most recent update of the content, including
    who updated it and when it was updated.
    - `history.previousVersion` returns information about the update prior to the current content update.
    - `history.contributors` returns all of the users who have contributed to the content.
    - `history.nextVersion` returns information about the update after to the current content update.
    - `ancestors` returns the parent page, if the content is a page.
    - `body` returns the body of the content in different formats, including the editor format,
    view format, and export format.
    - `body.storage` returns the body of content in storage format.
    - `body.view` returns the body of content in view format.
    - `version` returns information about the most recent update of the content, including who updated it
    and when it was updated.
    - `descendants.page` returns pages that are descendants at any level below the content.
    - `descendants.attachment` returns all attachments for the content, same as `children.attachment`.
    - `descendants.comment` returns all comments on the content, same as `children.comment`.
    - `space` returns the space that the content is in. This is the same as the information returned by
    [Get space](#api-space-spaceKey-get).
    
    In addition, the following comment-specific expansions can be used:
    - `extensions.inlineProperties` returns inline comment-specific properties.
    - `extensions.resolution` returns the resolution status of each comment. */
  expand?: string[];
  /** If set to `viewed`, the request will trigger a 'viewed' event for the content.
    When this event is triggered, the page/blogpost will appear on the 'Recently visited'
    tab of the user's Confluence dashboard. */
  trigger?: "viewed";
  /** Orders the content by a particular field. Specify the field and sort direction for
    this parameter, as follows: 'fieldpath asc/desc'. For example, 'history.createdDate desc'. */
  orderby?: string;
  /** The starting index of the returned content. */
  start?: number;
  /** The maximum number of content objects to return per page.
    Note, this may be restricted by fixed system limits. */
  limit?: number;
};
export type CreateContentApiResponse =
  /** status 200 Returned if the content is created. */ Content;
export type CreateContentApiArg = {
  /** Filter the returned content by status. */
  status?: string;
  /** A multi-value parameter indicating which properties of the content to expand.
    Maximum sub-expansions allowed is `8`.
    
    - `childTypes.all` returns whether the content has attachments, comments, or child pages.
    Use this if you only need to check whether the content has children of a particular type.
    - `childTypes.attachment` returns whether the content has attachments.
    - `childTypes.comment` returns whether the content has comments.
    - `childTypes.page` returns whether the content has child pages.
    - `container` returns the space that the content is in. This is the same as the information
    returned by [Get space](#api-space-spaceKey-get).
    - `metadata.currentuser` returns information about the current user in relation to the content,
    including when they last viewed it, modified it, contributed to it, or added it as a favorite.
    - `metadata.properties` returns content properties that have been set via the Confluence REST API.
    - `metadata.labels` returns the labels that have been added to the content.
    - `metadata.frontend` this property is only used by Atlassian.
    - `operations` returns the operations for the content, which are used when setting permissions.
    - `children.page` returns pages that are descendants at the level immediately below the content.
    - `children.attachment` returns all attachments for the content.
    - `children.comment` returns all comments on the content.
    - `restrictions.read.restrictions.user` returns the users that have permission to read the content.
    - `restrictions.read.restrictions.group` returns the groups that have permission to read the content. Note that
    this may return deleted groups, because deleting a group doesn't remove associated restrictions.
    - `restrictions.update.restrictions.user` returns the users that have permission to update the content.
    - `restrictions.update.restrictions.group` returns the groups that have permission to update the content. Note that
    this may return deleted groups because deleting a group doesn't remove associated restrictions.
    - `history` returns the history of the content, including the date it was created.
    - `history.lastUpdated` returns information about the most recent update of the content, including
    who updated it and when it was updated.
    - `history.previousVersion` returns information about the update prior to the current content update.
    - `history.contributors` returns all of the users who have contributed to the content.
    - `history.nextVersion` returns information about the update after to the current content update.
    - `ancestors` returns the parent page, if the content is a page.
    - `body` returns the body of the content in different formats, including the editor format,
    view format, and export format.
    - `body.storage` returns the body of content in storage format.
    - `body.view` returns the body of content in view format.
    - `version` returns information about the most recent update of the content, including who updated it
    and when it was updated.
    - `descendants.page` returns pages that are descendants at any level below the content.
    - `descendants.attachment` returns all attachments for the content, same as `children.attachment`.
    - `descendants.comment` returns all comments on the content, same as `children.comment`.
    - `space` returns the space that the content is in. This is the same as the information returned by
    [Get space](#api-space-spaceKey-get).
    
    In addition, the following comment-specific expansions can be used:
    - `extensions.inlineProperties` returns inline comment-specific properties.
    - `extensions.resolution` returns the resolution status of each comment. */
  expand?: string[];
  /** The new content to be created. Set the `representation` to the name of the body
    format type. For example, if you use `storage` for the body format, set
    '`representation`=`storage`'. See
    [Confluence storage format](https://confluence.atlassian.com/x/AJkiLw).
    
    If you are not sure how to generate the different formats, you can create a page in the
    Confluence application, retrieve the content using [Get content](#api-content-get),
    and expand the desired content format, e.g. `expand=body.storage`. */
  contentCreate: ContentCreate;
};
export type ArchivePagesApiResponse =
  /** status 202 Returned if the archive request has been submitted. */ LongTask;
export type ArchivePagesApiArg = {
  /** The pages to be archived. */
  body: {
    pages?: {
      id: number;
    }[];
  };
};
export type PublishSharedDraftApiResponse =
  /** status 200 Returned if the draft was successfully published. */ Content;
export type PublishSharedDraftApiArg = {
  /** The ID of the draft page that was created from a blueprint.
    You can find the `draftId` in the Confluence application by
    opening the draft page and checking the page URL. */
  draftId: string;
  /** The status of the content to be updated, i.e. the draft. This is set
    to 'draft' by default, so you shouldn't need to specify it. */
  status?: string;
  /** A multi-value parameter indicating which properties of the content to expand.
    
    - `childTypes.all` returns whether the content has attachments, comments, or child pages.
    Use this if you only need to check whether the content has children of a particular type.
    - `childTypes.attachment` returns whether the content has attachments.
    - `childTypes.comment` returns whether the content has comments.
    - `childTypes.page` returns whether the content has child pages.
    - `container` returns the space that the content is in. This is the same as the information
    returned by [Get space](#api-space-spaceKey-get).
    - `metadata.currentuser` returns information about the current user in relation to the content,
    including when they last viewed it, modified it, contributed to it, or added it as a favorite.
    - `metadata.properties` returns content properties that have been set via the Confluence REST API.
    - `metadata.labels` returns the labels that have been added to the content.
    - `metadata.frontend` this property is only used by Atlassian.
    - `operations` returns the operations for the content, which are used when setting permissions.
    - `children.page` returns pages that are descendants at the level immediately below the content.
    - `children.attachment` returns all attachments for the content.
    - `children.comment` returns all comments on the content.
    - `restrictions.read.restrictions.user` returns the users that have permission to read the content.
    - `restrictions.read.restrictions.group` returns the groups that have permission to read the content. Note that
    this may return deleted groups, because deleting a group doesn't remove associated restrictions.
    - `restrictions.update.restrictions.user` returns the users that have permission to update the content.
    - `restrictions.update.restrictions.group` returns the groups that have permission to update the content. Note that
    this may return deleted groups because deleting a group doesn't remove associated restrictions.
    - `history` returns the history of the content, including the date it was created.
    - `history.lastUpdated` returns information about the most recent update of the content, including
    who updated it and when it was updated.
    - `history.previousVersion` returns information about the update prior to the current content update.
    - `history.contributors` returns all of the users who have contributed to the content.
    - `history.nextVersion` returns information about the update after to the current content update.
    - `ancestors` returns the parent page, if the content is a page.
    - `body` returns the body of the content in different formats, including the editor format,
    view format, and export format.
    - `body.storage` returns the body of content in storage format.
    - `body.view` returns the body of content in view format.
    - `version` returns information about the most recent update of the content, including who updated it
    and when it was updated.
    - `descendants.page` returns pages that are descendants at any level below the content.
    - `descendants.attachment` returns all attachments for the content, same as `children.attachment`.
    - `descendants.comment` returns all comments on the content, same as `children.comment`.
    - `space` returns the space that the content is in. This is the same as the information returned by
    [Get space](#api-space-spaceKey-get).
    
    In addition, the following comment-specific expansions can be used:
    - `extensions.inlineProperties` returns inline comment-specific properties.
    - `extensions.resolution` returns the resolution status of each comment. */
  expand?: string[];
  contentBlueprintDraft: ContentBlueprintDraft;
};
export type PublishLegacyDraftApiResponse =
  /** status 200 Returned if the draft was successfully published. */ Content;
export type PublishLegacyDraftApiArg = {
  /** The ID of the draft page that was created from a blueprint.
    You can find the `draftId` in the Confluence application by
    opening the draft page and checking the page URL. */
  draftId: string;
  /** The status of the content to be updated, i.e. the draft. This is set
    to 'draft' by default, so you shouldn't need to specify it. */
  status?: string;
  /** A multi-value parameter indicating which properties of the content to expand.
    
    - `childTypes.all` returns whether the content has attachments, comments, or child pages.
    Use this if you only need to check whether the content has children of a particular type.
    - `childTypes.attachment` returns whether the content has attachments.
    - `childTypes.comment` returns whether the content has comments.
    - `childTypes.page` returns whether the content has child pages.
    - `container` returns the space that the content is in. This is the same as the information
    returned by [Get space](#api-space-spaceKey-get).
    - `metadata.currentuser` returns information about the current user in relation to the content,
    including when they last viewed it, modified it, contributed to it, or added it as a favorite.
    - `metadata.properties` returns content properties that have been set via the Confluence REST API.
    - `metadata.labels` returns the labels that have been added to the content.
    - `metadata.frontend` this property is only used by Atlassian.
    - `operations` returns the operations for the content, which are used when setting permissions.
    - `children.page` returns pages that are descendants at the level immediately below the content.
    - `children.attachment` returns all attachments for the content.
    - `children.comment` returns all comments on the content.
    - `restrictions.read.restrictions.user` returns the users that have permission to read the content.
    - `restrictions.read.restrictions.group` returns the groups that have permission to read the content. Note that
    this may return deleted groups, because deleting a group doesn't remove associated restrictions.
    - `restrictions.update.restrictions.user` returns the users that have permission to update the content.
    - `restrictions.update.restrictions.group` returns the groups that have permission to update the content. Note that
    this may return deleted groups because deleting a group doesn't remove associated restrictions.
    - `history` returns the history of the content, including the date it was created.
    - `history.lastUpdated` returns information about the most recent update of the content, including
    who updated it and when it was updated.
    - `history.previousVersion` returns information about the update prior to the current content update.
    - `history.contributors` returns all of the users who have contributed to the content.
    - `history.nextVersion` returns information about the update after to the current content update.
    - `ancestors` returns the parent page, if the content is a page.
    - `body` returns the body of the content in different formats, including the editor format,
    view format, and export format.
    - `body.storage` returns the body of content in storage format.
    - `body.view` returns the body of content in view format.
    - `version` returns information about the most recent update of the content, including who updated it
    and when it was updated.
    - `descendants.page` returns pages that are descendants at any level below the content.
    - `descendants.attachment` returns all attachments for the content, same as `children.attachment`.
    - `descendants.comment` returns all comments on the content, same as `children.comment`.
    - `space` returns the space that the content is in. This is the same as the information returned by
    [Get space](#api-space-spaceKey-get).
    
    In addition, the following comment-specific expansions can be used:
    - `extensions.inlineProperties` returns inline comment-specific properties.
    - `extensions.resolution` returns the resolution status of each comment. */
  expand?: string[];
  contentBlueprintDraft: ContentBlueprintDraft;
};
export type SearchContentByCqlApiResponse =
  /** status 200 Returned if the requested list of content is returned. */ ContentArray;
export type SearchContentByCqlApiArg = {
  /** The CQL string that is used to find the requested content. */
  cql: string;
  /** The space, content, and content status to execute the search against.
    Specify this as an object with the following properties:
    
    - `spaceKey` Key of the space to search against. Optional.
    - `contentId` ID of the content to search against. Optional. Must
    be in the space spacified by `spaceKey`.
    - `contentStatuses` Content statuses to search against. Optional. */
  cqlcontext?: string;
  /** A multi-value parameter indicating which properties of the content to expand.
    
    - `childTypes.all` returns whether the content has attachments, comments, or child pages.
    Use this if you only need to check whether the content has children of a particular type.
    - `childTypes.attachment` returns whether the content has attachments.
    - `childTypes.comment` returns whether the content has comments.
    - `childTypes.page` returns whether the content has child pages.
    - `container` returns the space that the content is in. This is the same as the information
    returned by [Get space](#api-space-spaceKey-get).
    - `metadata.currentuser` returns information about the current user in relation to the content,
    including when they last viewed it, modified it, contributed to it, or added it as a favorite.
    - `metadata.properties` returns content properties that have been set via the Confluence REST API.
    - `metadata.labels` returns the labels that have been added to the content.
    - `metadata.frontend` this property is only used by Atlassian.
    - `operations` returns the operations for the content, which are used when setting permissions.
    - `children.page` returns pages that are descendants at the level immediately below the content.
    - `children.attachment` returns all attachments for the content.
    - `children.comment` returns all comments on the content.
    - `restrictions.read.restrictions.user` returns the users that have permission to read the content.
    - `restrictions.read.restrictions.group` returns the groups that have permission to read the content. Note that
    this may return deleted groups, because deleting a group doesn't remove associated restrictions.
    - `restrictions.update.restrictions.user` returns the users that have permission to update the content.
    - `restrictions.update.restrictions.group` returns the groups that have permission to update the content. Note that
    this may return deleted groups because deleting a group doesn't remove associated restrictions.
    - `history` returns the history of the content, including the date it was created.
    - `history.lastUpdated` returns information about the most recent update of the content, including
    who updated it and when it was updated.
    - `history.previousVersion` returns information about the update prior to the current content update.
    - `history.contributors` returns all of the users who have contributed to the content.
    - `history.nextVersion` returns information about the update after to the current content update.
    - `ancestors` returns the parent page, if the content is a page.
    - `body` returns the body of the content in different formats, including the editor format,
    view format, and export format.
    - `body.storage` returns the body of content in storage format.
    - `body.view` returns the body of content in view format.
    - `version` returns information about the most recent update of the content, including who updated it
    and when it was updated.
    - `descendants.page` returns pages that are descendants at any level below the content.
    - `descendants.attachment` returns all attachments for the content, same as `children.attachment`.
    - `descendants.comment` returns all comments on the content, same as `children.comment`.
    - `space` returns the space that the content is in. This is the same as the information returned by
    [Get space](#api-space-spaceKey-get).
    
    In addition, the following comment-specific expansions can be used:
    - `extensions.inlineProperties` returns inline comment-specific properties.
    - `extensions.resolution` returns the resolution status of each comment. */
  expand?: string[];
  /** Pointer to a set of search results, returned as part of the `next` or `prev` URL from the previous search call. */
  cursor?: string;
  /** The maximum number of content objects to return per page.
    Note, this may be restricted by fixed system limits. */
  limit?: number;
};
export type GetContentByIdApiResponse =
  /** status 200 Returned if the requested content is returned. */ Content;
export type GetContentByIdApiArg = {
  /** The ID of the content to be returned. If you don't know the content ID,
    use [Get content](#api-content-get) and filter the results. */
  id: string;
  /** Filter the results to a set of content based on their status.
    If set to `any`, content with any status is returned. Note, the
    `historical` status is currently not supported. */
  status?: string[];
  /** The version number of the content to be returned. */
  version?: number;
  /** The version of embedded content (e.g. attachments) to render.
    
    - <code>current</code> renders the latest version of the embedded content.
    - <code>version-at-save</code> renders the version of the embedded content
    at the time of save. */
  embeddedContentRender?: "current" | "version-at-save";
  /** A multi-value parameter indicating which properties of the content to expand.
    Maximum sub-expansions allowed is `8`.
    
    - `childTypes.all` returns whether the content has attachments, comments, or child pages.
    Use this if you only need to check whether the content has children of a particular type.
    - `childTypes.attachment` returns whether the content has attachments.
    - `childTypes.comment` returns whether the content has comments.
    - `childTypes.page` returns whether the content has child pages.
    - `container` returns the space that the content is in. This is the same as the information
    returned by [Get space](#api-space-spaceKey-get).
    - `metadata.currentuser` returns information about the current user in relation to the content,
    including when they last viewed it, modified it, contributed to it, or added it as a favorite.
    - `metadata.properties` returns content properties that have been set via the Confluence REST API.
    - `metadata.labels` returns the labels that have been added to the content.
    - `metadata.frontend` this property is only used by Atlassian.
    - `operations` returns the operations for the content, which are used when setting permissions.
    - `children.page` returns pages that are descendants at the level immediately below the content.
    - `children.attachment` returns all attachments for the content.
    - `children.comment` returns all comments on the content.
    - `restrictions.read.restrictions.user` returns the users that have permission to read the content.
    - `restrictions.read.restrictions.group` returns the groups that have permission to read the content. Note that
    this may return deleted groups, because deleting a group doesn't remove associated restrictions.
    - `restrictions.update.restrictions.user` returns the users that have permission to update the content.
    - `restrictions.update.restrictions.group` returns the groups that have permission to update the content. Note that
    this may return deleted groups because deleting a group doesn't remove associated restrictions.
    - `history` returns the history of the content, including the date it was created.
    - `history.lastUpdated` returns information about the most recent update of the content, including
    who updated it and when it was updated.
    - `history.previousVersion` returns information about the update prior to the current content update.
    - `history.contributors` returns all of the users who have contributed to the content.
    - `history.nextVersion` returns information about the update after to the current content update.
    - `ancestors` returns the parent page, if the content is a page.
    - `body` returns the body of the content in different formats, including the editor format,
    view format, and export format.
    - `body.storage` returns the body of content in storage format.
    - `body.view` returns the body of content in view format.
    - `version` returns information about the most recent update of the content, including who updated it
    and when it was updated.
    - `descendants.page` returns pages that are descendants at any level below the content.
    - `descendants.attachment` returns all attachments for the content, same as `children.attachment`.
    - `descendants.comment` returns all comments on the content, same as `children.comment`.
    - `space` returns the space that the content is in. This is the same as the information returned by
    [Get space](#api-space-spaceKey-get).
    
    In addition, the following comment-specific expansions can be used:
    - `extensions.inlineProperties` returns inline comment-specific properties.
    - `extensions.resolution` returns the resolution status of each comment. */
  expand?: string[];
  /** If set to `viewed`, the request will trigger a 'viewed' event for the content.
    When this event is triggered, the page/blogpost will appear on the 'Recently visited'
    tab of the user's Confluence dashboard. */
  trigger?: "viewed";
};
export type UpdateContentApiResponse =
  /** status 200 Returned if the content is updated. */ Content;
export type UpdateContentApiArg = {
  /** The ID of the content to be updated. */
  id: string;
  /** The updated status of the content. Use this parameter to change the
    status of a piece of content without passing the entire request body. */
  status?: "current" | "trashed" | "deleted" | "historical" | "draft";
  /** The action that should be taken when conflicts are discovered.
    Only used when publishing a draft page. */
  conflictPolicy?: "abort";
  /** The updated content. */
  contentUpdate: ContentUpdate;
};
export type DeleteContentApiResponse = unknown;
export type DeleteContentApiArg = {
  /** The ID of the content to be deleted. */
  id: string;
  /** Set this to `trashed`, if the content's status is `trashed` and you want to purge it. */
  status?: string;
};
export type DeletePageTreeApiResponse =
  /** status 202 Returned if the request to trash content and all its current page descendants, is successfully accepted. */ LongTask;
export type DeletePageTreeApiArg = {
  /** The ID of the content which forms root of the page tree, to be deleted. */
  id: string;
};
export type GetContentChildrenApiResponse =
  /** status 200 Returned if the requested content children are returned. */ ContentChildren;
export type GetContentChildrenApiArg = {
  /** The ID of the content to be queried for its children. */
  id: string;
  /** A multi-value parameter indicating which properties of the children to expand, where:
    
    - `attachment` returns all attachments for the content.
    - `comments` returns all comments for the content.
    - `page` returns all child pages of the content.
    - Custom content types that are provided by apps are also supported. */
  expand?: string[];
  /** The version of the parent content to retrieve children for.
    Currently, this only works for the latest version. */
  parentVersion?: number;
};
export type MovePageApiResponse =
  /** status 200 Page was successfully moved */ {
    pageId?: ContentId;
  };
export type MovePageApiArg = {
  /** The ID of the page to be moved */
  pageId: string;
  /** The position to move the page to relative to the target page:
   * `before` - move the page under the same parent as the target, before the target in the list of children
   * `after` - move the page under the same parent as the target, after the target in the list of children
   * `append` - move the page to be a child of the target */
  position: "before" | "after" | "append";
  /** The ID of the target page for this operation */
  targetId: string;
};
export type GetAttachmentsApiResponse =
  /** status 200 Returned if the requested attachments are returned. */ ContentArray;
export type GetAttachmentsApiArg = {
  /** The ID of the content to be queried for its attachments. */
  id: string;
  /** A multi-value parameter indicating which properties of the content to expand.
    
    - `childTypes.all` returns whether the content has attachments, comments, or child pages.
    Use this if you only need to check whether the content has children of a particular type.
    - `childTypes.attachment` returns whether the content has attachments.
    - `childTypes.comment` returns whether the content has comments.
    - `childTypes.page` returns whether the content has child pages.
    - `container` returns the space that the content is in. This is the same as the information
    returned by [Get space](#api-space-spaceKey-get).
    - `metadata.currentuser` returns information about the current user in relation to the content,
    including when they last viewed it, modified it, contributed to it, or added it as a favorite.
    - `metadata.properties` returns content properties that have been set via the Confluence REST API.
    - `metadata.labels` returns the labels that have been added to the content.
    - `metadata.frontend` this property is only used by Atlassian.
    - `operations` returns the operations for the content, which are used when setting permissions.
    - `children.page` returns pages that are descendants at the level immediately below the content.
    - `children.attachment` returns all attachments for the content.
    - `children.comment` returns all comments on the content.
    - `restrictions.read.restrictions.user` returns the users that have permission to read the content.
    - `restrictions.read.restrictions.group` returns the groups that have permission to read the content. Note that
    this may return deleted groups, because deleting a group doesn't remove associated restrictions.
    - `restrictions.update.restrictions.user` returns the users that have permission to update the content.
    - `restrictions.update.restrictions.group` returns the groups that have permission to update the content. Note that
    this may return deleted groups because deleting a group doesn't remove associated restrictions.
    - `history` returns the history of the content, including the date it was created.
    - `history.lastUpdated` returns information about the most recent update of the content, including
    who updated it and when it was updated.
    - `history.previousVersion` returns information about the update prior to the current content update.
    - `history.contributors` returns all of the users who have contributed to the content.
    - `history.nextVersion` returns information about the update after to the current content update.
    - `ancestors` returns the parent page, if the content is a page.
    - `body` returns the body of the content in different formats, including the editor format,
    view format, and export format.
    - `body.storage` returns the body of content in storage format.
    - `body.view` returns the body of content in view format.
    - `version` returns information about the most recent update of the content, including who updated it
    and when it was updated.
    - `descendants.page` returns pages that are descendants at any level below the content.
    - `descendants.attachment` returns all attachments for the content, same as `children.attachment`.
    - `descendants.comment` returns all comments on the content, same as `children.comment`.
    - `space` returns the space that the content is in. This is the same as the information returned by
    [Get space](#api-space-spaceKey-get).
    
    In addition, the following comment-specific expansions can be used:
    - `extensions.inlineProperties` returns inline comment-specific properties.
    - `extensions.resolution` returns the resolution status of each comment. */
  expand?: string[];
  /** The starting index of the returned attachments. */
  start?: number;
  /** The maximum number of attachments to return per page.
    Note, this may be restricted by fixed system limits. */
  limit?: number;
  /** Filter the results to attachments that match the filename. */
  filename?: string;
  /** Filter the results to attachments that match the media type. */
  mediaType?: string;
};
export type CreateOrUpdateAttachmentsApiResponse =
  /** status 200 Returned if the attachments were added to the content. */ ContentArray;
export type CreateOrUpdateAttachmentsApiArg = {
  /** The ID of the content to add the attachment to. */
  id: string;
  /** The status of the content that the attachment is being added to.
    This should always be set to 'current'. */
  status?: "current" | "draft";
  body: {
    file: Blob;
    comment?: Blob;
    minorEdit: Blob;
  };
};
export type CreateAttachmentApiResponse =
  /** status 200 Returned if the attachments were added to the content. */ ContentArray;
export type CreateAttachmentApiArg = {
  /** The ID of the content to add the attachment to. */
  id: string;
  /** The status of the content that the attachment is being added to. */
  status?: "current" | "draft";
  body: {
    file: Blob;
    comment?: Blob;
    minorEdit: Blob;
  };
};
export type UpdateAttachmentPropertiesApiResponse =
  /** status 200 Returned if the attachment is updated. */ Content;
export type UpdateAttachmentPropertiesApiArg = {
  /** The ID of the content that the attachment is attached to. */
  id: string;
  /** The ID of the attachment to update. */
  attachmentId: string;
  /** The details of the attachment to be updated. */
  content: Content;
};
export type UpdateAttachmentDataApiResponse =
  /** status 200 Returned if the attachment is updated. */ Content;
export type UpdateAttachmentDataApiArg = {
  /** The ID of the content that the attachment is attached to. */
  id: string;
  /** The ID of the attachment to update. */
  attachmentId: string;
  body: {
    file: Blob;
    comment?: Blob;
    minorEdit: Blob;
  };
};
export type DownloadAttatchmentApiResponse = unknown;
export type DownloadAttatchmentApiArg = {
  /** The ID of the content that the attachment is attached to. */
  id: string;
  /** The ID of the attachment to download. */
  attachmentId: string;
  /** The version of the attachment. If this parameter is absent, the redirect URI will download the latest version of the attachment. */
  version?: number;
};
export type GetContentCommentsApiResponse =
  /** status 200 Returned if the requested comments are returned. */ ContentArray;
export type GetContentCommentsApiArg = {
  /** The ID of the content to be queried for its comments. */
  id: string;
  /** A multi-value parameter indicating which properties of the content to expand.
    
    - `childTypes.all` returns whether the content has attachments, comments, or child pages.
    Use this if you only need to check whether the content has children of a particular type.
    - `childTypes.attachment` returns whether the content has attachments.
    - `childTypes.comment` returns whether the content has comments.
    - `childTypes.page` returns whether the content has child pages.
    - `container` returns the space that the content is in. This is the same as the information
    returned by [Get space](#api-space-spaceKey-get).
    - `metadata.currentuser` returns information about the current user in relation to the content,
    including when they last viewed it, modified it, contributed to it, or added it as a favorite.
    - `metadata.properties` returns content properties that have been set via the Confluence REST API.
    - `metadata.labels` returns the labels that have been added to the content.
    - `metadata.frontend` this property is only used by Atlassian.
    - `operations` returns the operations for the content, which are used when setting permissions.
    - `children.page` returns pages that are descendants at the level immediately below the content.
    - `children.attachment` returns all attachments for the content.
    - `children.comment` returns all comments on the content.
    - `restrictions.read.restrictions.user` returns the users that have permission to read the content.
    - `restrictions.read.restrictions.group` returns the groups that have permission to read the content. Note that
    this may return deleted groups, because deleting a group doesn't remove associated restrictions.
    - `restrictions.update.restrictions.user` returns the users that have permission to update the content.
    - `restrictions.update.restrictions.group` returns the groups that have permission to update the content. Note that
    this may return deleted groups because deleting a group doesn't remove associated restrictions.
    - `history` returns the history of the content, including the date it was created.
    - `history.lastUpdated` returns information about the most recent update of the content, including
    who updated it and when it was updated.
    - `history.previousVersion` returns information about the update prior to the current content update.
    - `history.contributors` returns all of the users who have contributed to the content.
    - `history.nextVersion` returns information about the update after to the current content update.
    - `ancestors` returns the parent page, if the content is a page.
    - `body` returns the body of the content in different formats, including the editor format,
    view format, and export format.
    - `body.storage` returns the body of content in storage format.
    - `body.view` returns the body of content in view format.
    - `version` returns information about the most recent update of the content, including who updated it
    and when it was updated.
    - `descendants.page` returns pages that are descendants at any level below the content.
    - `descendants.attachment` returns all attachments for the content, same as `children.attachment`.
    - `descendants.comment` returns all comments on the content, same as `children.comment`.
    - `space` returns the space that the content is in. This is the same as the information returned by
    [Get space](#api-space-spaceKey-get).
    
    In addition, the following comment-specific expansions can be used:
    - `extensions.inlineProperties` returns inline comment-specific properties.
    - `extensions.resolution` returns the resolution status of each comment. */
  expand?: string[];
  /** The version of the parent content to retrieve children for.
    Currently, this only works for the latest version. */
  parentVersion?: number;
  /** The starting index of the returned comments. */
  start?: number;
  /** The maximum number of comments to return per page. Note,
    this may be restricted by fixed system limits. */
  limit?: number;
  /** The location of the comments in the page. Multiple locations can be specified.
    If no location is specified, comments from all locations are returned. */
  location?: string[];
  /** Currently, this parameter is not used.
    Comments are returned at the root level only. */
  depth?: string;
};
export type GetContentChildrenByTypeApiResponse =
  /** status 200 Returned if the requested content is returned. */ ContentArray;
export type GetContentChildrenByTypeApiArg = {
  /** The ID of the content to be queried for its children. */
  id: string;
  /** The type of children to return. */
  type: string;
  /** A multi-value parameter indicating which properties of the content to expand.
    
    - `childTypes.all` returns whether the content has attachments, comments, or child pages.
    Use this if you only need to check whether the content has children of a particular type.
    - `childTypes.attachment` returns whether the content has attachments.
    - `childTypes.comment` returns whether the content has comments.
    - `childTypes.page` returns whether the content has child pages.
    - `container` returns the space that the content is in. This is the same as the information
    returned by [Get space](#api-space-spaceKey-get).
    - `metadata.currentuser` returns information about the current user in relation to the content,
    including when they last viewed it, modified it, contributed to it, or added it as a favorite.
    - `metadata.properties` returns content properties that have been set via the Confluence REST API.
    - `metadata.labels` returns the labels that have been added to the content.
    - `metadata.frontend` this property is only used by Atlassian.
    - `operations` returns the operations for the content, which are used when setting permissions.
    - `children.page` returns pages that are descendants at the level immediately below the content.
    - `children.attachment` returns all attachments for the content.
    - `children.comment` returns all comments on the content.
    - `restrictions.read.restrictions.user` returns the users that have permission to read the content.
    - `restrictions.read.restrictions.group` returns the groups that have permission to read the content. Note that
    this may return deleted groups, because deleting a group doesn't remove associated restrictions.
    - `restrictions.update.restrictions.user` returns the users that have permission to update the content.
    - `restrictions.update.restrictions.group` returns the groups that have permission to update the content. Note that
    this may return deleted groups because deleting a group doesn't remove associated restrictions.
    - `history` returns the history of the content, including the date it was created.
    - `history.lastUpdated` returns information about the most recent update of the content, including
    who updated it and when it was updated.
    - `history.previousVersion` returns information about the update prior to the current content update.
    - `history.contributors` returns all of the users who have contributed to the content.
    - `history.nextVersion` returns information about the update after to the current content update.
    - `ancestors` returns the parent page, if the content is a page.
    - `body` returns the body of the content in different formats, including the editor format,
    view format, and export format.
    - `body.storage` returns the body of content in storage format.
    - `body.view` returns the body of content in view format.
    - `version` returns information about the most recent update of the content, including who updated it
    and when it was updated.
    - `descendants.page` returns pages that are descendants at any level below the content.
    - `descendants.attachment` returns all attachments for the content, same as `children.attachment`.
    - `descendants.comment` returns all comments on the content, same as `children.comment`.
    - `space` returns the space that the content is in. This is the same as the information returned by
    [Get space](#api-space-spaceKey-get).
    
    In addition, the following comment-specific expansions can be used:
    - `extensions.inlineProperties` returns inline comment-specific properties.
    - `extensions.resolution` returns the resolution status of each comment. */
  expand?: string[];
  /** The version of the parent content to retrieve children for.
    Currently, this only works for the latest version. */
  parentVersion?: number;
  /** The starting index of the returned content. */
  start?: number;
  /** The maximum number of content to return per page. Note,
    this may be restricted by fixed system limits. */
  limit?: number;
};
export type GetContentDescendantsApiResponse =
  /** status 200 Returned if the requested descendants are returned. */ ContentChildren;
export type GetContentDescendantsApiArg = {
  /** The ID of the content to be queried for its descendants. */
  id: string;
  /** A multi-value parameter indicating which properties of the children to
    expand, where:
    
    - `attachment` returns all attachments for the content.
    - `comments` returns all comments for the content.
    - `page` returns all child pages of the content. */
  expand?: ("attachment" | "comment" | "page")[];
};
export type GetDescendantsOfTypeApiResponse =
  /** status 200 Returned if the requested content is returned. */ ContentArray;
export type GetDescendantsOfTypeApiArg = {
  /** The ID of the content to be queried for its descendants. */
  id: string;
  /** The type of descendants to return. */
  type: "page" | "comment" | "attachment";
  /** Filter the results to descendants upto a desired level of the content. Note, the maximum value supported is 100. root level of the content means immediate (level 1) descendants of the type requested. all represents returning all descendants of the type requested. */
  depth?:
    | "all"
    | "root"
    | "<any positive integer argument in the range of 1 and 100>";
  /** A multi-value parameter indicating which properties of the content to expand.
    
    - `childTypes.all` returns whether the content has attachments, comments, or child pages.
    Use this if you only need to check whether the content has children of a particular type.
    - `childTypes.attachment` returns whether the content has attachments.
    - `childTypes.comment` returns whether the content has comments.
    - `childTypes.page` returns whether the content has child pages.
    - `container` returns the space that the content is in. This is the same as the information
    returned by [Get space](#api-space-spaceKey-get).
    - `metadata.currentuser` returns information about the current user in relation to the content,
    including when they last viewed it, modified it, contributed to it, or added it as a favorite.
    - `metadata.properties` returns content properties that have been set via the Confluence REST API.
    - `metadata.labels` returns the labels that have been added to the content.
    - `metadata.frontend` this property is only used by Atlassian.
    - `operations` returns the operations for the content, which are used when setting permissions.
    - `children.page` returns pages that are descendants at the level immediately below the content.
    - `children.attachment` returns all attachments for the content.
    - `children.comment` returns all comments on the content.
    - `restrictions.read.restrictions.user` returns the users that have permission to read the content.
    - `restrictions.read.restrictions.group` returns the groups that have permission to read the content. Note that
    this may return deleted groups, because deleting a group doesn't remove associated restrictions.
    - `restrictions.update.restrictions.user` returns the users that have permission to update the content.
    - `restrictions.update.restrictions.group` returns the groups that have permission to update the content. Note that
    this may return deleted groups because deleting a group doesn't remove associated restrictions.
    - `history` returns the history of the content, including the date it was created.
    - `history.lastUpdated` returns information about the most recent update of the content, including
    who updated it and when it was updated.
    - `history.previousVersion` returns information about the update prior to the current content update.
    - `history.contributors` returns all of the users who have contributed to the content.
    - `history.nextVersion` returns information about the update after to the current content update.
    - `ancestors` returns the parent page, if the content is a page.
    - `body` returns the body of the content in different formats, including the editor format,
    view format, and export format.
    - `body.storage` returns the body of content in storage format.
    - `body.view` returns the body of content in view format.
    - `version` returns information about the most recent update of the content, including who updated it
    and when it was updated.
    - `descendants.page` returns pages that are descendants at any level below the content.
    - `descendants.attachment` returns all attachments for the content, same as `children.attachment`.
    - `descendants.comment` returns all comments on the content, same as `children.comment`.
    - `space` returns the space that the content is in. This is the same as the information returned by
    [Get space](#api-space-spaceKey-get).
    
    In addition, the following comment-specific expansions can be used:
    - `extensions.inlineProperties` returns inline comment-specific properties.
    - `extensions.resolution` returns the resolution status of each comment. */
  expand?: string[];
  /** The starting index of the returned content. */
  start?: number;
  /** The maximum number of content to return per page. Note,
    this may be restricted by fixed system limits. */
  limit?: number;
};
export type GetHistoryForContentApiResponse =
  /** status 200 Returned if the requested content history is returned. */ ContentHistory;
export type GetHistoryForContentApiArg = {
  /** The ID of the content to be queried for its history. */
  id: string;
  /** A multi-value parameter indicating which properties of the content history to expand.
    Maximum sub-expansions allowed is `8`.
    
    - `lastUpdated` returns information about the most recent update of the content,
    including who updated it and when it was updated.
    - `previousVersion` returns information about the update prior to the current content
    update. For this method, it contains the same information as `lastUpdated`.
    - `contributors` returns all of the users who have contributed to the content.
    - `nextVersion` This parameter is not used for this method. */
  expand?: (
    | "lastUpdated"
    | "previousVersion"
    | "contributors"
    | "nextVersion"
  )[];
};
export type GetMacroBodyByMacroIdApiResponse =
  /** status 200 Returned if the requested macro body is returned. */ MacroInstance;
export type GetMacroBodyByMacroIdApiArg = {
  /** The ID for the content that contains the macro. */
  id: string;
  /** The version of the content that contains the macro. Specifying `0` as the `version` will return
    the macro body for the latest content version. */
  version: number;
  /** The ID of the macro. This is usually passed by the app that the
    macro is in. Otherwise, find the macro ID by querying the desired
    content and version, then expanding the body in storage format.
    For example, '/content/196611/version/7?expand=content.body.storage'. */
  macroId: string;
};
export type GetLabelsForContentApiResponse =
  /** status 200 Returned if the requested labels are returned. */ LabelArray;
export type GetLabelsForContentApiArg = {
  /** The ID of the content to be queried for its labels. */
  id: string;
  /** Filters the results to labels with the specified prefix. If this parameter
    is not specified, then labels with any prefix will be returned.
    
    - `global` prefix is used by default when a user adds a label
    via the UI.
    - `my` prefix can be explicitly added by a user when adding a label
    via the UI, e.g. 'my:example-label'. Also, when a page is selected as
    a favourite, the 'my:favourite' label is automatically added.
    - `team` can used when adding labels via [Add labels to content](#api-content-id-label-post)
    but is not used in the UI. */
  prefix?: "global" | "my" | "team";
  /** The starting index of the returned labels. */
  start?: number;
  /** The maximum number of labels to return per page. Note,
    this may be restricted by fixed system limits. */
  limit?: number;
};
export type AddLabelsToContentApiResponse =
  /** status 200 Returned if the labels are added to the content. */ LabelArray;
export type AddLabelsToContentApiArg = {
  /** The ID of the content that will have labels added to it. */
  id: string;
  /** The labels to add to the content. */
  body: LabelCreateArray | LabelCreate;
};
export type RemoveLabelFromContentUsingQueryParameterApiResponse = unknown;
export type RemoveLabelFromContentUsingQueryParameterApiArg = {
  /** The ID of the content that the label will be removed from. */
  id: string;
  /** The name of the label to be removed. */
  name: string;
};
export type RemoveLabelFromContentApiResponse = unknown;
export type RemoveLabelFromContentApiArg = {
  /** The ID of the content that the label will be removed from. */
  id: string;
  /** The name of the label to be removed. */
  label: string;
};
export type GetWatchesForPageApiResponse =
  /** status 200 Returned if the requested watches are returned. */ WatchArray;
export type GetWatchesForPageApiArg = {
  /** The ID of the content to be queried for its watches. */
  id: string;
  /** The starting index of the returned watches. */
  start?: number;
  /** The maximum number of watches to return per page.
    Note, this may be restricted by fixed system limits. */
  limit?: number;
};
export type GetWatchesForSpaceApiResponse =
  /** status 200 Returned if the requested watches are returned. */ SpaceWatchArray;
export type GetWatchesForSpaceApiArg = {
  /** The ID of the content to be queried for its watches. */
  id: string;
  /** The starting index of the returned watches. */
  start?: number;
  /** The maximum number of watches to return per page.
    Note, this may be restricted by fixed system limits. */
  limit?: number;
};
export type CopyPageHierarchyApiResponse =
  /** status 202 Returns a full JSON representation of a long running task */ LongTask;
export type CopyPageHierarchyApiArg = {
  id: string;
  /** Request object from json post body */
  copyPageHierarchyRequest: CopyPageHierarchyRequest;
};
export type CopyPageApiResponse = unknown;
export type CopyPageApiArg = {
  id: string;
  /** A multi-value parameter indicating which properties of the content to expand.
    Maximum sub-expansions allowed is `8`.
    
    - `childTypes.all` returns whether the content has attachments, comments, or child pages.
    Use this if you only need to check whether the content has children of a particular type.
    - `childTypes.attachment` returns whether the content has attachments.
    - `childTypes.comment` returns whether the content has comments.
    - `childTypes.page` returns whether the content has child pages.
    - `container` returns the space that the content is in. This is the same as the information
    returned by [Get space](#api-space-spaceKey-get).
    - `metadata.currentuser` returns information about the current user in relation to the content,
    including when they last viewed it, modified it, contributed to it, or added it as a favorite.
    - `metadata.properties` returns content properties that have been set via the Confluence REST API.
    - `metadata.labels` returns the labels that have been added to the content.
    - `metadata.frontend` this property is only used by Atlassian.
    - `operations` returns the operations for the content, which are used when setting permissions.
    - `children.page` returns pages that are descendants at the level immediately below the content.
    - `children.attachment` returns all attachments for the content.
    - `children.comment` returns all comments on the content.
    - `restrictions.read.restrictions.user` returns the users that have permission to read the content.
    - `restrictions.read.restrictions.group` returns the groups that have permission to read the content. Note that
    this may return deleted groups, because deleting a group doesn't remove associated restrictions.
    - `restrictions.update.restrictions.user` returns the users that have permission to update the content.
    - `restrictions.update.restrictions.group` returns the groups that have permission to update the content. Note that
    this may return deleted groups because deleting a group doesn't remove associated restrictions.
    - `history` returns the history of the content, including the date it was created.
    - `history.lastUpdated` returns information about the most recent update of the content, including
    who updated it and when it was updated.
    - `history.previousVersion` returns information about the update prior to the current content update.
    - `history.contributors` returns all of the users who have contributed to the content.
    - `history.nextVersion` returns information about the update after to the current content update.
    - `ancestors` returns the parent page, if the content is a page.
    - `body` returns the body of the content in different formats, including the editor format,
    view format, and export format.
    - `body.storage` returns the body of content in storage format.
    - `body.view` returns the body of content in view format.
    - `version` returns information about the most recent update of the content, including who updated it
    and when it was updated.
    - `descendants.page` returns pages that are descendants at any level below the content.
    - `descendants.attachment` returns all attachments for the content, same as `children.attachment`.
    - `descendants.comment` returns all comments on the content, same as `children.comment`.
    - `space` returns the space that the content is in. This is the same as the information returned by
    [Get space](#api-space-spaceKey-get).
    
    In addition, the following comment-specific expansions can be used:
    - `extensions.inlineProperties` returns inline comment-specific properties.
    - `extensions.resolution` returns the resolution status of each comment. */
  expand?: string[];
  /** Request object from json post body */
  copyPageRequest: CopyPageRequest;
};
export type CheckContentPermissionApiResponse =
  /** status 200 Returned if the permission check completed successfully */ PermissionCheckResponse;
export type CheckContentPermissionApiArg = {
  /** The ID of the content to check permissions against. */
  id: string;
  /** The content permission request. */
  contentPermissionRequest: ContentPermissionRequest;
};
export type GetContentPropertiesApiResponse =
  /** status 200 Returned if the requested properties are returned. */ ContentPropertyArray;
export type GetContentPropertiesApiArg = {
  /** The ID of the content to be queried for its properties. */
  id: string;
  /** The key of the content property. */
  key?: string[];
  /** A multi-value parameter indicating which properties of the content to
    expand. By default, the `version` object is expanded.
    
    - `content` returns the content that the property is stored against.
    - `version` returns information about the version of the property, such
    as the version number, when it was created, etc. */
  expand?: ("content" | "version")[];
  /** The starting index of the returned properties. */
  start?: number;
  /** The maximum number of properties to return per page.
    Note, this may be restricted by fixed system limits. */
  limit?: number;
};
export type CreateContentPropertyApiResponse =
  /** status 200 Returned if the content property is created. */ ContentProperty;
export type CreateContentPropertyApiArg = {
  /** The ID of the content to add the property to. */
  id: string;
  /** The content property to be created. */
  contentPropertyCreate: ContentPropertyCreate;
};
export type GetContentPropertyApiResponse =
  /** status 200 Returned if the content property is returned. */ ContentProperty;
export type GetContentPropertyApiArg = {
  /** The ID of the content to be queried for the property. */
  id: string;
  /** The key of the content property. */
  key: string;
  /** A multi-value parameter indicating which properties of the content to
    expand. By default, the `version` object is expanded.
    
    - `content` returns the content that the property is stored against.
    - `version` returns information about the version of the property, such
    as the version number, when it was created, etc. */
  expand?: ("content" | "version")[];
  /** Filter the results to a set of content based on their status. If set to `any`,
    content with any status is returned. By default it will fetch current and archived statuses `?status=current&status=archived`.
    All supported statuses
    
    - any
    - archived
    - current
    - deleted
    - draft
    - trashed */
  status?: string[];
};
export type UpdateContentPropertyApiResponse =
  /** status 200 Returned if the content property is created. */ ContentProperty;
export type UpdateContentPropertyApiArg = {
  /** The ID of the content that the property belongs to. */
  id: string;
  /** The key of the property. */
  key: string;
  /** The content property being updated. */
  contentPropertyUpdate: ContentPropertyUpdate;
};
export type CreateContentPropertyForKeyApiResponse =
  /** status 200 Returned if the content property is created. */ ContentProperty;
export type CreateContentPropertyForKeyApiArg = {
  /** The ID of the content to add the property to. */
  id: string;
  /** The key of the content property. Required. */
  key: string;
  /** The content property to be created. */
  contentPropertyCreateNoKey: ContentPropertyCreateNoKey;
};
export type DeleteContentPropertyApiResponse = unknown;
export type DeleteContentPropertyApiArg = {
  /** The ID of the content that the property belongs to. */
  id: string;
  /** The key of the property. */
  key: string;
};
export type GetRestrictionsApiResponse =
  /** status 200 Returned if the requested restrictions are returned. */ ContentRestrictionArray;
export type GetRestrictionsApiArg = {
  /** The ID of the content to be queried for its restrictions. */
  id: string;
  /** A multi-value parameter indicating which properties of the content
    restrictions to expand. By default, the following objects are expanded:
    `restrictions.user`, `restrictions.group`.
    
    - `restrictions.user` returns the piece of content that the restrictions are
    applied to.
    - `restrictions.group` returns the piece of content that the restrictions are
    applied to.
    - `content` returns the piece of content that the restrictions are
    applied to. */
  expand?: (
    | "restrictions.user"
    | "read.restrictions.user"
    | "update.restrictions.user"
    | "restrictions.group"
    | "read.restrictions.group"
    | "update.restrictions.group"
    | "content"
  )[];
  /** The starting index of the users and groups in the returned restrictions. */
  start?: number;
  /** The maximum number of users and the maximum number of groups, in the
    returned restrictions, to return per page. Note, this may be restricted
    by fixed system limits. */
  limit?: number;
};
export type UpdateRestrictionsApiResponse =
  /** status 200 Returned if the requested restrictions are updated. */ ContentRestrictionArray;
export type UpdateRestrictionsApiArg = {
  /** The ID of the content to update restrictions for. */
  id: string;
  /** A multi-value parameter indicating which properties of the content
    restrictions (returned in response) to expand.
    
    - `restrictions.user` returns the piece of content that the restrictions are
    applied to. Expanded by default.
    - `restrictions.group` returns the piece of content that the restrictions are
    applied to. Expanded by default.
    - `content` returns the piece of content that the restrictions are
    applied to. */
  expand?: (
    | "restrictions.user"
    | "read.restrictions.user"
    | "update.restrictions.user"
    | "restrictions.group"
    | "read.restrictions.group"
    | "update.restrictions.group"
    | "content"
  )[];
  /** The updated restrictions for the content. */
  contentRestrictionAddOrUpdateArray: ContentRestrictionAddOrUpdateArray;
};
export type AddRestrictionsApiResponse =
  /** status 200 Returned if the requested restrictions are added. */ ContentRestrictionArray;
export type AddRestrictionsApiArg = {
  /** The ID of the content to add restrictions to. */
  id: string;
  /** A multi-value parameter indicating which properties of the content
    restrictions (returned in response) to expand.
    
    - `restrictions.user` returns the piece of content that the restrictions are
    applied to. Expanded by default.
    - `restrictions.group` returns the piece of content that the restrictions are
    applied to. Expanded by default.
    - `content` returns the piece of content that the restrictions are
    applied to. */
  expand?: (
    | "restrictions.user"
    | "read.restrictions.user"
    | "update.restrictions.user"
    | "restrictions.group"
    | "read.restrictions.group"
    | "update.restrictions.group"
    | "content"
  )[];
  /** The restrictions to be added to the content. */
  contentRestrictionAddOrUpdateArray: ContentRestrictionAddOrUpdateArray;
};
export type DeleteRestrictionsApiResponse =
  /** status 200 Returned if the restrictions are removed. */ ContentRestrictionArray;
export type DeleteRestrictionsApiArg = {
  /** The ID of the content to remove restrictions from. */
  id: string;
  /** A multi-value parameter indicating which properties of the content
    restrictions (returned in response) to expand.
    
    - `restrictions.user` returns the piece of content that the restrictions are
    applied to. Expanded by default.
    - `restrictions.group` returns the piece of content that the restrictions are
    applied to. Expanded by default.
    - `content` returns the piece of content that the restrictions are
    applied to. */
  expand?: (
    | "restrictions.user"
    | "read.restrictions.user"
    | "update.restrictions.user"
    | "restrictions.group"
    | "read.restrictions.group"
    | "update.restrictions.group"
    | "content"
  )[];
};
export type GetRestrictionsByOperationApiResponse =
  /** status 200 Returned if the requested restrictions are returned. */ {
    [key: string]: {
      operationType?: ContentRestriction;
      _links?: GenericLinks;
    };
  };
export type GetRestrictionsByOperationApiArg = {
  /** The ID of the content to be queried for its restrictions. */
  id: string;
  /** A multi-value parameter indicating which properties of the content
    restrictions to expand.
    
    - `restrictions.user` returns the piece of content that the restrictions are
    applied to. Expanded by default.
    - `restrictions.group` returns the piece of content that the restrictions are
    applied to. Expanded by default.
    - `content` returns the piece of content that the restrictions are
    applied to. */
  expand?: ("restrictions.user" | "restrictions.group" | "content")[];
};
export type GetRestrictionsForOperationApiResponse =
  /** status 200 Returned if the requested restrictions are returned. */ ContentRestriction;
export type GetRestrictionsForOperationApiArg = {
  /** The ID of the content to be queried for its restrictions. */
  id: string;
  /** The operation type of the restrictions to be returned. */
  operationKey: "read" | "update";
  /** A multi-value parameter indicating which properties of the content
    restrictions to expand.
    
    - `restrictions.user` returns the piece of content that the restrictions are
    applied to. Expanded by default.
    - `restrictions.group` returns the piece of content that the restrictions are
    applied to. Expanded by default.
    - `content` returns the piece of content that the restrictions are
    applied to. */
  expand?: ("restrictions.user" | "restrictions.group" | "content")[];
  /** The starting index of the users and groups in the returned restrictions. */
  start?: number;
  /** The maximum number of users and the maximum number of groups, in the
    returned restrictions, to return per page. Note, this may be restricted
    by fixed system limits. */
  limit?: number;
};
export type GetContentRestrictionStatusForGroupApiResponse = unknown;
export type GetContentRestrictionStatusForGroupApiArg = {
  /** The ID of the content that the restriction applies to. */
  id: string;
  /** The operation that the restriction applies to. */
  operationKey: "read" | "update";
  /** The name of the group to be queried for whether the content restriction
    applies to it. */
  groupName: string;
};
export type AddGroupToContentRestrictionApiResponse = unknown;
export type AddGroupToContentRestrictionApiArg = {
  /** The ID of the content that the restriction applies to. */
  id: string;
  /** The operation that the restriction applies to. */
  operationKey: "read" | "update";
  /** The name of the group to add to the content restriction. */
  groupName: string;
};
export type RemoveGroupFromContentRestrictionByIdApiResponse = unknown;
export type RemoveGroupFromContentRestrictionByIdApiArg = {
  /** The ID of the content that the restriction applies to. */
  id: string;
  /** The operation that the restriction applies to. */
  operationKey: "read" | "update";
  /** The name of the group to remove from the content restriction. */
  groupName: string;
};
export type GetIndividualGroupRestrictionStatusByGroupIdApiResponse = unknown;
export type GetIndividualGroupRestrictionStatusByGroupIdApiArg = {
  /** The ID of the content that the restriction applies to. */
  id: string;
  /** The operation that the restriction applies to. */
  operationKey: "read" | "update";
  /** The id of the group to be queried for whether the content restriction
    applies to it. */
  groupId: string;
};
export type AddGroupToContentRestrictionByGroupIdApiResponse = unknown;
export type AddGroupToContentRestrictionByGroupIdApiArg = {
  /** The ID of the content that the restriction applies to. */
  id: string;
  /** The operation that the restriction applies to. */
  operationKey: "read" | "update";
  /** The groupId of the group to add to the content restriction. */
  groupId: string;
};
export type RemoveGroupFromContentRestrictionApiResponse = unknown;
export type RemoveGroupFromContentRestrictionApiArg = {
  /** The ID of the content that the restriction applies to. */
  id: string;
  /** The operation that the restriction applies to. */
  operationKey: "read" | "update";
  /** The id of the group to remove from the content restriction. */
  groupId: string;
};
export type GetContentRestrictionStatusForUserApiResponse = unknown;
export type GetContentRestrictionStatusForUserApiArg = {
  /** The ID of the content that the restriction applies to. */
  id: string;
  /** The operation that is restricted. */
  operationKey: string;
  /** This parameter is no longer available and will be removed from the documentation soon.
    Use `accountId` instead.
    See the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details. */
  key?: string;
  /** This parameter is no longer available and will be removed from the documentation soon.
    Use `accountId` instead.
    See the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details. */
  username?: string;
  /** The account ID of the user. The accountId uniquely identifies the user across all Atlassian products.
    For example, `384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192`. */
  accountId?: string;
};
export type AddUserToContentRestrictionApiResponse = unknown;
export type AddUserToContentRestrictionApiArg = {
  /** The ID of the content that the restriction applies to. */
  id: string;
  /** The operation that the restriction applies to. */
  operationKey: string;
  /** This parameter is no longer available and will be removed from the documentation soon.
    Use `accountId` instead.
    See the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details. */
  key?: string;
  /** This parameter is no longer available and will be removed from the documentation soon.
    Use `accountId` instead.
    See the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details. */
  username?: string;
  /** The account ID of the user. The accountId uniquely identifies the user across all Atlassian products.
    For example, `384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192`. */
  accountId?: string;
};
export type RemoveUserFromContentRestrictionApiResponse = unknown;
export type RemoveUserFromContentRestrictionApiArg = {
  /** The ID of the content that the restriction applies to. */
  id: string;
  /** The operation that the restriction applies to. */
  operationKey: "read" | "update";
  /** This parameter is no longer available and will be removed from the documentation soon.
    Use `accountId` instead.
    See the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details. */
  key?: string;
  /** This parameter is no longer available and will be removed from the documentation soon.
    Use `accountId` instead.
    See the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details. */
  username?: string;
  /** The account ID of the user. The accountId uniquely identifies the user across all Atlassian products.
    For example, `384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192`. */
  accountId?: string;
};
export type GetContentStateApiResponse =
  /** status 200 Returned if permission allows viewing of content. */ ContentStateResponse;
export type GetContentStateApiArg = {
  /** The id of the content whose content state is of interest. */
  id: string;
  /** Set status to one of [current,draft,archived]. */
  status?: "current" | "draft" | "archived";
};
export type SetContentStateApiResponse =
  /** status 200 Returned if content state is set successfully. */ ContentStateResponse;
export type SetContentStateApiArg = {
  /** The Id of the content whose content state is to be set. */
  id: string;
  /** Status of content onto which state will be placed. If draft, then draft state will change.
    If current, state will be placed onto a new version of the content with same body as previous version. */
  status?: "current" | "draft";
  /** Content state fields for state. Pass in id for an existing state, or new name and color for best matching existing state, or new state if allowed in space. */
  contentStateRestInput: ContentStateRestInput;
};
export type RemoveContentStateApiResponse =
  /** status 200 Returned if content state is removed from content. */ ContentStateResponse;
export type RemoveContentStateApiArg = {
  /** The Id of the content whose content state is to be set. */
  id: string;
  /** status of content state from which to delete state. Can be draft or archived */
  status?: "current" | "draft";
};
export type GetAvailableContentStatesApiResponse =
  /** status 200 Returned if the content is found and permission is valid. */ AvailableContentStates;
export type GetAvailableContentStatesApiArg = {
  /** id of content to get available states for */
  id: string;
};
export type GetContentVersionsApiResponse =
  /** status 200 Returned if the requested versions are returned. */ VersionArray;
export type GetContentVersionsApiArg = {
  /** The ID of the content to be queried for its versions. */
  id: string;
  /** The starting index of the returned versions. */
  start?: number;
  /** The maximum number of versions to return per page.
    Note, this may be restricted by fixed system limits. */
  limit?: number;
  /** A multi-value parameter indicating which properties of the content to expand. By default, the `content`
    object is expanded.
    
    - `collaborators` returns the users that collaborated on the version.
    - `content` returns the content for the version. */
  expand?: string[];
};
export type RestoreContentVersionApiResponse =
  /** status 200 Returned if the version is restored. */ Version;
export type RestoreContentVersionApiArg = {
  /** The ID of the content for which the history will be restored. */
  id: string;
  /** A multi-value parameter indicating which properties of the content to expand. By default, the `content`
    object is expanded.
    
    - `collaborators` returns the users that collaborated on the version.
    - `content` returns the content for the version. */
  expand?: string[];
  /** The content version to be restored. */
  versionRestore: VersionRestore;
};
export type GetContentVersionApiResponse =
  /** status 200 Returned if the version is returned. */ Version;
export type GetContentVersionApiArg = {
  /** The ID of the content to be queried for its version. */
  id: string;
  /** The number of the version to be retrieved. */
  versionNumber: number;
  /** A multi-value parameter indicating which properties of the content to expand. By default, the `content`
    object is expanded.
    
    - `collaborators` returns the users that collaborated on the version.
    - `content` returns the content for the version. */
  expand?: string[];
};
export type DeleteContentVersionApiResponse = unknown;
export type DeleteContentVersionApiArg = {
  /** The ID of the content that the version will be deleted from. */
  id: string;
  /** The number of the version to be deleted. The version number starts
    from 1 up to current version. */
  versionNumber: number;
};
export type GetCustomContentStatesApiResponse =
  /** status 200 Custom Content States that user has crated. Returned if user authenticated. */ ContentState[];
export type GetCustomContentStatesApiArg = void;
export type ConvertContentBodyApiResponse =
  /** status 200 Returned if the content is converted. */ ContentBody;
export type ConvertContentBodyApiArg = {
  /** The name of the target format for the content body. */
  to: string;
  /** A multi-value parameter indicating which properties of the content to expand.
    
    - `childTypes.all` returns whether the content has attachments, comments, or child pages.
    Use this if you only need to check whether the content has children of a particular type.
    - `childTypes.attachment` returns whether the content has attachments.
    - `childTypes.comment` returns whether the content has comments.
    - `childTypes.page` returns whether the content has child pages.
    - `container` returns the space that the content is in. This is the same as the information
    returned by [Get space](#api-space-spaceKey-get).
    - `metadata.currentuser` returns information about the current user in relation to the content,
    including when they last viewed it, modified it, contributed to it, or added it as a favorite.
    - `metadata.properties` returns content properties that have been set via the Confluence REST API.
    - `metadata.labels` returns the labels that have been added to the content.
    - `metadata.frontend` this property is only used by Atlassian.
    - `operations` returns the operations for the content, which are used when setting permissions.
    - `children.page` returns pages that are descendants at the level immediately below the content.
    - `children.attachment` returns all attachments for the content.
    - `children.comment` returns all comments on the content.
    - `restrictions.read.restrictions.user` returns the users that have permission to read the content.
    - `restrictions.read.restrictions.group` returns the groups that have permission to read the content. Note that
    this may return deleted groups, because deleting a group doesn't remove associated restrictions.
    - `restrictions.update.restrictions.user` returns the users that have permission to update the content.
    - `restrictions.update.restrictions.group` returns the groups that have permission to update the content. Note that
    this may return deleted groups because deleting a group doesn't remove associated restrictions.
    - `history` returns the history of the content, including the date it was created.
    - `history.lastUpdated` returns information about the most recent update of the content, including
    who updated it and when it was updated.
    - `history.previousVersion` returns information about the update prior to the current content update.
    - `history.contributors` returns all of the users who have contributed to the content.
    - `history.nextVersion` returns information about the update after to the current content update.
    - `ancestors` returns the parent page, if the content is a page.
    - `body` returns the body of the content in different formats, including the editor format,
    view format, and export format.
    - `body.storage` returns the body of content in storage format.
    - `body.view` returns the body of content in view format.
    - `version` returns information about the most recent update of the content, including who updated it
    and when it was updated.
    - `descendants.page` returns pages that are descendants at any level below the content.
    - `descendants.attachment` returns all attachments for the content, same as `children.attachment`.
    - `descendants.comment` returns all comments on the content, same as `children.comment`.
    - `space` returns the space that the content is in. This is the same as the information returned by
    [Get space](#api-space-spaceKey-get).
    
    In addition, the following comment-specific expansions can be used:
    - `extensions.inlineProperties` returns inline comment-specific properties.
    - `extensions.resolution` returns the resolution status of each comment. */
  expand?: string[];
  /** The space key used for resolving embedded content (page includes,
    files, and links) in the content body. For example, if the source content
    contains the link `<ac:link><ri:page ri:content-title="Example page" /><ac:link>`
    and the `spaceKeyContext=TEST` parameter is provided, then the link
    will be converted to a link to the "Example page" page in the "TEST" space. */
  spaceKeyContext?: string;
  /** The content ID used to find the space for resolving embedded content
    (page includes, files, and links) in the content body. For example,
    if the source content contains the link `<ac:link><ri:page ri:content-title="Example page" /><ac:link>`
    and the `contentIdContext=123` parameter is provided, then the link
    will be converted to a link to the "Example page" page in the same space
    that has the content with ID=123. Note, `spaceKeyContext` will be ignored
    if this parameter is provided. */
  contentIdContext?: string;
  /** Mode used for rendering embedded content, like attachments.
    
    - `current` renders the embedded content using the latest version.
    - `version-at-save` renders the embedded content using the version at
    the time of save. */
  embeddedContentRender?: "current" | "version-at-save";
  /** The content body to convert. */
  contentBodyCreate: ContentBodyCreate;
};
export type SearchTasksApiResponse =
  /** status 200 Returned if the query fetches zero or more results. */ TaskPageResponse;
export type SearchTasksApiArg = {
  /** The starting offset for the results. */
  start?: number;
  /** The number of results to be returned. */
  limit?: number;
  /** The space key of a space. Multiple space keys can be specified. */
  spaceKey?: string;
  /** The page id of a page. Multiple page ids can be specified. */
  pageId?: string;
  /** Account ID of a user to whom a task is assigned. Multiple users can be specified. */
  assignee?: string;
  /** Account ID of a user to who created a task. Multiple users can be specified. */
  creator?: string;
  /** Account ID of a user who completed a task. Multiple users can be specified. */
  completedUser?: string;
  /** Start of date range based on due dates (inclusive). */
  duedateFrom?: number;
  /** End of date range based on due dates (inclusive). */
  duedateTo?: number;
  /** Start of date range based on create dates (inclusive). */
  createdateFrom?: number;
  /** End of date range based on create dates (inclusive). */
  createdateTo?: number;
  /** Start of date range based on complete dates (inclusive). */
  completedateFrom?: number;
  /** End of date range based on complete dates (inclusive). */
  completedateTo?: number;
  /** The status of the task. (checked/unchecked) */
  status?: "complete" | "incomplete";
};
export type GetTaskByIdApiResponse =
  /** status 200 Returned if the inline task was found given the global ID */ Task;
export type GetTaskByIdApiArg = {
  /** Global ID of the inline task */
  inlineTaskId: string;
};
export type UpdateTaskByIdApiResponse =
  /** status 200 Returned if the inline task was successfully updated. */ Task;
export type UpdateTaskByIdApiArg = {
  /** Global ID of the inline task to update */
  inlineTaskId: string;
  /** The updated task status. */
  taskStatusUpdate: TaskStatusUpdate;
};
export type GetAllLabelContentApiResponse =
  /** status 200 Returned if the query fetches zero or more results. */ LabelDetails;
export type GetAllLabelContentApiArg = {
  /** Name of the label to query. */
  name: string;
  /** The type of contents that are to be returned. */
  type?: "page" | "blogpost" | "attachment" | "page_template";
  /** The starting offset for the results. */
  start?: number;
  /** The number of results to be returned. */
  limit?: number;
};
export type GetGroupsApiResponse =
  /** status 200 Returned if the requested groups are returned. */ GroupArrayWithLinks;
export type GetGroupsApiArg = {
  /** The starting index of the returned groups. */
  start?: number;
  /** The maximum number of groups to return per page.
    Note, this may be restricted by fixed system limits. */
  limit?: number;
  /** The group permission level for which to filter results. */
  accessType?: "user" | "admin" | "site-admin";
};
export type CreateGroupApiResponse =
  /** status 201 Returned if the group was created successfully. */ Group;
export type CreateGroupApiArg = {
  /** Name of the group that is to be created. */
  groupName: GroupName;
};
export type RemoveGroupApiResponse = unknown;
export type RemoveGroupApiArg = {
  /** Name of the group to delete. */
  name: string;
};
export type GetGroupByQueryParamApiResponse =
  /** status 200 Returned if the requested group is returned. */ Group;
export type GetGroupByQueryParamApiArg = {
  /** The name of the group. This is the same as the group name shown in
    the Confluence administration console. */
  name: string;
};
export type GetGroupByGroupIdApiResponse =
  /** status 200 Returned if the requested group is returned. */ Group;
export type GetGroupByGroupIdApiArg = {
  /** The id of the group. */
  id: string;
};
export type RemoveGroupByIdApiResponse = unknown;
export type RemoveGroupByIdApiArg = {
  /** Id of the group to delete. */
  id: string;
};
export type GetGroupByNameApiResponse =
  /** status 200 Returned if the requested group is returned. */ Group;
export type GetGroupByNameApiArg = {
  /** The name of the group. This is the same as the group name shown in
    the Confluence administration console. */
  groupName: string;
};
export type GetMembersByQueryParamApiResponse =
  /** status 200 Returned if the requested users are returned. */ UserArray;
export type GetMembersByQueryParamApiArg = {
  /** The name of the group to be queried for its members. */
  name: string;
  /** The starting index of the returned users. */
  start?: number;
  /** The maximum number of users to return per page.
    Note, this is restricted by fixed system limit of 200 which is to say if the limit parameter
    exceeds 200, this API will return a maximum of 200 users per page. */
  limit?: number;
  /** Whether to include total size parameter in the results.
    Note, fetching total size property is an expensive operation; use it if your use case needs this value. */
  shouldReturnTotalSize?: boolean;
};
export type GetGroupMembersApiResponse =
  /** status 200 Returned if the requested users are returned. */ UserArray;
export type GetGroupMembersApiArg = {
  /** The name of the group to be queried for its members. */
  groupName: string;
  /** The starting index of the returned users. */
  start?: number;
  /** The maximum number of users to return per page.
    Note, this may be restricted by fixed system limits. */
  limit?: number;
};
export type SearchGroupsApiResponse =
  /** status 200 Returns a full JSON representation of group collection. */ GroupArrayWithLinks;
export type SearchGroupsApiArg = {
  /** the search term used to query results. */
  query: string;
  /** The starting index of the returned groups. */
  start?: number;
  /** The maximum number of groups to return per page.
    Note, this is restricted to a maximum limit of 200 groups. */
  limit?: number;
  /** Whether to include total size parameter in the results.
    Note, fetching total size property is an expensive operation; use it if your use case needs this value. */
  shouldReturnTotalSize?: boolean;
};
export type AddUserToGroupByGroupIdApiResponse = unknown;
export type AddUserToGroupByGroupIdApiArg = {
  /** GroupId of the group whose membership is updated */
  groupId: string;
  /** AccountId of the user who needs to be added as member. */
  accountId: AccountId;
};
export type RemoveMemberFromGroupByGroupIdApiResponse = unknown;
export type RemoveMemberFromGroupByGroupIdApiArg = {
  /** Id of the group whose membership is updated. */
  groupId: string;
  /** This parameter is no longer available and will be removed from the documentation soon.
    Use `accountId` instead.
    See the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details. */
  key?: string;
  /** This parameter is no longer available and will be removed from the documentation soon.
    Use `accountId` instead.
    See the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details. */
  username?: string;
  /** The account ID of the user. The accountId uniquely identifies the user across all Atlassian products.
    For example, `384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192`. */
  accountId?: string;
};
export type GetGroupMembersByGroupIdApiResponse =
  /** status 200 Returned if the requested users are returned. */ UserArray;
export type GetGroupMembersByGroupIdApiArg = {
  /** The id of the group to be queried for its members. */
  groupId: string;
  /** The starting index of the returned users. */
  start?: number;
  /** The maximum number of users to return per page.
    Note, this may be restricted by fixed system limits. */
  limit?: number;
  /** Whether to include total size parameter in the results.
    Note, fetching total size property is an expensive operation; use it if your use case needs this value. */
  shouldReturnTotalSize?: boolean;
};
export type AddUserToGroupApiResponse = unknown;
export type AddUserToGroupApiArg = {
  /** Name of the group whose membership is updated */
  name: string;
  /** AccountId of the user who needs to be added as member. */
  accountId: AccountId;
};
export type RemoveMemberFromGroupApiResponse = unknown;
export type RemoveMemberFromGroupApiArg = {
  /** Name of the group whose membership is updated. */
  name: string;
  /** This parameter is no longer available and will be removed from the documentation soon.
    Use `accountId` instead.
    See the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details. */
  key?: string;
  /** This parameter is no longer available and will be removed from the documentation soon.
    Use `accountId` instead.
    See the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details. */
  username?: string;
  /** The account ID of the user. The accountId uniquely identifies the user across all Atlassian products.
    For example, `384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192`. */
  accountId?: string;
};
export type GetTasksApiResponse =
  /** status 200 Returned if the requested tasks are returned. */ LongTaskStatusArray;
export type GetTasksApiArg = {
  /** The starting index of the returned tasks. */
  start?: number;
  /** The maximum number of tasks to return per page. Note, this may be
    restricted by fixed system limits. */
  limit?: number;
};
export type GetTaskApiResponse =
  /** status 200 Returned if the requested task is returned. */ LongTaskStatusWithLinks;
export type GetTaskApiArg = {
  /** The ID of the task. */
  id: string;
};
export type FindTargetFromSourceApiResponse =
  /** status 200 Returned if the requested relationships are returned. */ RelationArray;
export type FindTargetFromSourceApiArg = {
  /** The name of the relationship. This method supports relationships created via
    [Create relationship](#api-wiki-rest-api-relation-relationname-from-sourcetype-sourcekey-to-targettype-targetkey-put).
    Note, this method does not support 'like' or 'favourite' relationships. */
  relationName: string;
  /** The source entity type of the relationship. */
  sourceType: "user" | "content" | "space";
  /** The identifier for the source entity:
    
    - If `sourceType` is `user`, then specify either `current` (logged-in user), the user key of the user, or
    the account ID of the user. Note that the user key has been deprecated in favor of the account ID for this parameter. See the
    [migration guide](https://developer.atlassian.com/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/)
    for details.
    - If `sourceType` is 'content', then specify the content ID.
    - If `sourceType` is 'space', then specify the space key. */
  sourceKey: string;
  /** The target entity type of the relationship. */
  targetType: "user" | "content" | "space";
  /** The status of the source. This parameter is only used when the
    `sourceType` is 'content'. */
  sourceStatus?: string;
  /** The status of the target. This parameter is only used when the
    `targetType` is 'content'. */
  targetStatus?: string;
  /** The version of the source. This parameter is only used when the
    `sourceType` is 'content' and the `sourceStatus` is 'historical'. */
  sourceVersion?: number;
  /** The version of the target. This parameter is only used when the
    `targetType` is 'content' and the `targetStatus` is 'historical'. */
  targetVersion?: number;
  /** A multi-value parameter indicating which properties of the response
    object to expand.
    
    - `relationData` returns information about the relationship, such as
    who created it and when it was created.
    - `source` returns the source entity.
    - `target` returns the target entity. */
  expand?: ("relationData" | "source" | "target")[];
  /** The starting index of the returned relationships. */
  start?: number;
  /** The maximum number of relationships to return per page.
    Note, this may be restricted by fixed system limits. */
  limit?: number;
};
export type GetRelationshipApiResponse =
  /** status 200 Returned if the relationship exists. */ Relation;
export type GetRelationshipApiArg = {
  /** The name of the relationship. This method supports the 'favourite'
    (i.e. 'save for later') relationship as well as any other relationship
    types created via [Create relationship](#api-wiki-rest-api-relation-relationname-from-sourcetype-sourcekey-to-targettype-targetkey-put). */
  relationName: string;
  /** The source entity type of the relationship. This must be 'user', if
    the `relationName` is 'favourite'. */
  sourceType: "user" | "content" | "space";
  /** - The identifier for the source entity:
    
    - If `sourceType` is `user`, then specify either `current` (logged-in user), the user key of the user, or
    the account ID of the user. Note that the user key has been deprecated in favor of the account ID for this parameter. See the
    [migration guide](https://developer.atlassian.com/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/)
    for details.
    - If `sourceType` is 'content', then specify the content ID.
    - If `sourceType` is 'space', then specify the space key. */
  sourceKey: string;
  /** The target entity type of the relationship. This must be 'space' or
    'content', if the `relationName` is 'favourite'. */
  targetType: "user" | "content" | "space";
  /** The identifier for the target entity:
    
    - If `targetType` is `user`, then specify either `current` (logged-in user), the user key of the user, or
    the account ID of the user. Note that the user key has been deprecated in favor of the account ID for this parameter. See the
    [migration guide](https://developer.atlassian.com/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/)
    for details.
    - If `targetType` is 'content', then specify the content ID.
    - If `targetType` is 'space', then specify the space key. */
  targetKey: string;
  /** The status of the source. This parameter is only used when the
    `sourceType` is 'content'. */
  sourceStatus?: string;
  /** The status of the target. This parameter is only used when the
    `targetType` is 'content'. */
  targetStatus?: string;
  /** The version of the source. This parameter is only used when the
    `sourceType` is 'content' and the `sourceStatus` is 'historical'. */
  sourceVersion?: number;
  /** The version of the target. This parameter is only used when the
    `targetType` is 'content' and the `targetStatus` is 'historical'. */
  targetVersion?: number;
  /** A multi-value parameter indicating which properties of the response
    object to expand.
    
    - `relationData` returns information about the relationship, such as
    who created it and when it was created.
    - `source` returns the source entity.
    - `target` returns the target entity. */
  expand?: ("relationData" | "source" | "target")[];
};
export type CreateRelationshipApiResponse =
  /** status 200 Returned if the relationship is created. */ Relation;
export type CreateRelationshipApiArg = {
  /** The name of the relationship. This method supports the 'favourite'
    (i.e. 'save for later') relationship. You can also specify any other
    value for this parameter to create a custom relationship type. */
  relationName: string;
  /** The source entity type of the relationship. This must be 'user', if
    the `relationName` is 'favourite'. */
  sourceType: "user" | "content" | "space";
  /** - The identifier for the source entity:
    
    - If `sourceType` is 'user', then specify either 'current' (logged-in
      user) or the user key.
    - If `sourceType` is 'content', then specify the content ID.
    - If `sourceType` is 'space', then specify the space key. */
  sourceKey: string;
  /** The target entity type of the relationship. This must be 'space' or
    'content', if the `relationName` is 'favourite'. */
  targetType: "user" | "content" | "space";
  /** - The identifier for the target entity:
    
    - If `sourceType` is 'user', then specify either 'current' (logged-in
      user) or the user key.
    - If `sourceType` is 'content', then specify the content ID.
    - If `sourceType` is 'space', then specify the space key. */
  targetKey: string;
  /** The status of the source. This parameter is only used when the
    `sourceType` is 'content'. */
  sourceStatus?: string;
  /** The status of the target. This parameter is only used when the
    `targetType` is 'content'. */
  targetStatus?: string;
  /** The version of the source. This parameter is only used when the
    `sourceType` is 'content' and the `sourceStatus` is 'historical'. */
  sourceVersion?: number;
  /** The version of the target. This parameter is only used when the
    `targetType` is 'content' and the `targetStatus` is 'historical'. */
  targetVersion?: number;
};
export type DeleteRelationshipApiResponse = unknown;
export type DeleteRelationshipApiArg = {
  /** The name of the relationship. */
  relationName: string;
  /** The source entity type of the relationship. This must be 'user', if
    the `relationName` is 'favourite'. */
  sourceType: "user" | "content" | "space";
  /** - The identifier for the source entity:
    
    - If `sourceType` is 'user', then specify either 'current' (logged-in
      user) or the user key.
    - If `sourceType` is 'content', then specify the content ID.
    - If `sourceType` is 'space', then specify the space key. */
  sourceKey: string;
  /** The target entity type of the relationship. This must be 'space' or
    'content', if the `relationName` is 'favourite'. */
  targetType: "user" | "content" | "space";
  /** - The identifier for the target entity:
    
    - If `sourceType` is 'user', then specify either 'current' (logged-in
      user) or the user key.
    - If `sourceType` is 'content', then specify the content ID.
    - If `sourceType` is 'space', then specify the space key. */
  targetKey: string;
  /** The status of the source. This parameter is only used when the
    `sourceType` is 'content'. */
  sourceStatus?: string;
  /** The status of the target. This parameter is only used when the
    `targetType` is 'content'. */
  targetStatus?: string;
  /** The version of the source. This parameter is only used when the
    `sourceType` is 'content' and the `sourceStatus` is 'historical'. */
  sourceVersion?: number;
  /** The version of the target. This parameter is only used when the
    `targetType` is 'content' and the `targetStatus` is 'historical'. */
  targetVersion?: number;
};
export type FindSourcesForTargetApiResponse =
  /** status 200 Returned if the requested relationships are returned. */ RelationArray;
export type FindSourcesForTargetApiArg = {
  /** The name of the relationship. This method supports relationships created via
    [Create relationship](#api-wiki-rest-api-relation-relationname-from-sourcetype-sourcekey-to-targettype-targetkey-put).
    Note, this method does not support 'like' or 'favourite' relationships. */
  relationName: string;
  /** The source entity type of the relationship. */
  sourceType: "user" | "content" | "space";
  /** The target entity type of the relationship. */
  targetType: "user" | "content" | "space";
  /** The identifier for the target entity:
    
    - If `targetType` is `user`, then specify either `current` (logged-in user), the user key of the user, or
    the account ID of the user. Note that the user key has been deprecated in favor of the account ID for this parameter. See the
    [migration guide](https://developer.atlassian.com/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/)
    for details.
    - If `targetType` is 'content', then specify the content ID.
    - If `targetType` is 'space', then specify the space key. */
  targetKey: string;
  /** The status of the source. This parameter is only used when the
    `sourceType` is 'content'. */
  sourceStatus?: string;
  /** The status of the target. This parameter is only used when the
    `targetType` is 'content'. */
  targetStatus?: string;
  /** The version of the source. This parameter is only used when the
    `sourceType` is 'content' and the `sourceStatus` is 'historical'. */
  sourceVersion?: number;
  /** The version of the target. This parameter is only used when the
    `targetType` is 'content' and the `targetStatus` is 'historical'. */
  targetVersion?: number;
  /** A multi-value parameter indicating which properties of the response
    object to expand.
    
    - `relationData` returns information about the relationship, such as
    who created it and when it was created.
    - `source` returns the source entity.
    - `target` returns the target entity. */
  expand?: ("relationData" | "source" | "target")[];
  /** The starting index of the returned relationships. */
  start?: number;
  /** The maximum number of relationships to return per page.
    Note, this may be restricted by fixed system limits. */
  limit?: number;
};
export type SearchByCqlApiResponse =
  /** status 200 Returned if the requested results are returned. */ SearchPageResponseSearchResult;
export type SearchByCqlApiArg = {
  /** The CQL query to be used for the search. See
    [Advanced Searching using CQL](https://developer.atlassian.com/cloud/confluence/advanced-searching-using-cql/)
    for instructions on how to build a CQL query. */
  cql: string;
  /** The space, content, and content status to execute the search
    against.
    
    - `spaceKey` Key of the space to search against. Optional.
    - `contentId` ID of the content to search against. Optional. Must be
    in the space specified by `spaceKey`.
    - `contentStatuses` Content statuses to search against. Optional.
    
    Specify these values in an object. For example,
    `cqlcontext={%22spaceKey%22:%22TEST%22, %22contentId%22:%22123%22}` */
  cqlcontext?: string;
  /** Pointer to a set of search results, returned as part of the `next` or `prev` URL from the previous search call. */
  cursor?: string;
  next?: boolean;
  prev?: boolean;
  /** The maximum number of content objects to return per page.
    Note, this may be restricted by fixed system limits. */
  limit?: number;
  /** The start point of the collection to return */
  start?: number;
  /** Whether to include content from archived spaces in the results. */
  includeArchivedSpaces?: boolean;
  /** Whether to exclude current spaces and only show archived spaces. */
  excludeCurrentSpaces?: boolean;
  /** The excerpt strategy to apply to the result */
  excerpt?:
    | "highlight"
    | "indexed"
    | "none"
    | "highlight_unescaped"
    | "indexed_unescaped";
  sitePermissionTypeFilter?: "externalCollaborator" | "none";
  _?: number;
  expand?: string[];
};
export type SearchUserApiResponse =
  /** status 200 Returned if the requested results are returned. */ SearchPageResponseSearchResult;
export type SearchUserApiArg = {
  /** The CQL query to be used for the search. See
    [Advanced Searching using CQL](https://developer.atlassian.com/cloud/confluence/advanced-searching-using-cql/)
    for instructions on how to build a CQL query.
    
    Example queries:
              cql=type=user will return all users
              cql=user="1234" will return user with accountId "1234"
              You can also use IN, NOT IN, != operators
              cql=user IN ("12", "34") will return users with accountids "12" and "34"
              cql=user.fullname~jo will return users with nickname/full name starting with "jo"
              cql=user.accountid="123" will return user with accountId "123" */
  cql: string;
  /** The starting index of the returned users. */
  start?: number;
  /** The maximum number of user objects to return per page.
    Note, this may be restricted by fixed system limits. */
  limit?: number;
  /** A multi-value parameter indicating which properties of the user to expand.
    
    - `operations` returns the operations for the user, which are used
    when setting permissions.
    - `personalSpace` returns the personal space of the user. */
  expand?: string[];
};
export type GetLookAndFeelSettingsApiResponse =
  /** status 200 Returned if the requested look and feel settings are returned. */ LookAndFeelSettings;
export type GetLookAndFeelSettingsApiArg = {
  /** The key of the space for which the look and feel settings will be
    returned. If this is not set, only the global look and feel settings
    are returned. */
  spaceKey?: string;
};
export type UpdateLookAndFeelApiResponse =
  /** status 200 Returned if the look and feel settings were set. */ LookAndFeelSelection;
export type UpdateLookAndFeelApiArg = {
  /** The look and feel type to be set. */
  lookAndFeelSelection: LookAndFeelSelection;
};
export type UpdateLookAndFeelSettingsApiResponse =
  /** status 200 Returned if the look and feel settings are updated. */ LookAndFeelWithLinks;
export type UpdateLookAndFeelSettingsApiArg = {
  /** The key of the space for which the look and feel settings will be
    updated. If this is not set, the global look and feel settings will
    be updated. */
  spaceKey?: string;
  /** The updated settings. All values for the settings must be included,
    regardless of whether they are being changed.
    
    One way to create the request body is to copy the settings from the
    response body of [Get look and feel settings](#api-settings-lookandfeel-get)
    and modify it as needed. */
  lookAndFeel: LookAndFeel;
};
export type ResetLookAndFeelSettingsApiResponse = unknown;
export type ResetLookAndFeelSettingsApiArg = {
  /** The key of the space for which the look and feel settings will be
    reset. If this is not set, the global look and feel settings will
    be reset. */
  spaceKey?: string;
};
export type SetLookAndFeelSettingsApiResponse =
  /** status 200 Returned if the look and feel settings were set. */ string;
export type SetLookAndFeelSettingsApiArg = {
  /** The key of the space for which the look and feel settings will be
    set. If this is not set, the global look and feel settings will be
    set. */
  spaceKey?: string;
  /** The look and feel type to be set. */
  body: "global" | "custom" | "theme";
};
export type GetSystemInfoApiResponse =
  /** status 200 Returned if the system information for the Confluence Cloud tenant
is returned. */ SystemInfoEntity;
export type GetSystemInfoApiArg = void;
export type GetThemesApiResponse =
  /** status 200 Returned if the requested themes are returned. */ ThemeArray;
export type GetThemesApiArg = {
  /** The starting index of the returned themes. */
  start?: number;
  /** The maximum number of themes to return per page.
    Note, this may be restricted by fixed system limits. */
  limit?: number;
};
export type GetGlobalThemeApiResponse =
  /** status 200 Returned if the global theme is returned. */ Theme;
export type GetGlobalThemeApiArg = void;
export type GetThemeApiResponse =
  /** status 200 Returned if the requested theme is returned. */ Theme;
export type GetThemeApiArg = {
  /** The key of the theme to be returned. */
  themeKey: string;
};
export type GetSpacesApiResponse =
  /** status 200 Returned if the requested spaces are returned. */ SpaceArray;
export type GetSpacesApiArg = {
  /** The key of the space to be returned. To return multiple spaces,
    specify this parameter multiple times with different values. */
  spaceKey?: string[];
  /** The id of the space to be returned. To return multiple spaces,
    specify this parameter multiple times with different values. */
  spaceId?: number[];
  /** Filter the results to spaces based on their type. */
  type?: "global" | "personal";
  /** Filter the results to spaces based on their status. */
  status?: "current" | "archived";
  /** Filter the results to spaces based on their label. */
  label?: string[];
  /** Filter the results to the favourite spaces of the user specified by
    `favouriteUserKey`. Note, 'favourite' spaces are also
    known as 'saved for later' spaces. */
  favourite?: boolean;
  /** The userKey of the user, whose favourite spaces are used to filter
    the results when using the `favourite` parameter.
    
    Leave blank for the current user. Use [Get user](#api-user-get) to
    get the userKey for a user. */
  favouriteUserKey?: string;
  /** A multi-value parameter indicating which properties of the spaces to
    expand, where:
    
      - `settings` returns the settings for the space, similar to [Get space settings](#api-space-spaceKey-settings-get).
      - `metadata` returns the space metadata.
      - `metadata.labels` returns the space labels, which are used to categorize the space.
      - `operations` returns the operations for a space, which are used when setting permissions.
      - `lookAndFeel` returns information about the look and feel of the space, including the color scheme.
      - `permissions` returns the permissions for the space. Note that this may return permissions for deleted groups,
      because deleting a group doesn't remove associated space permissions.
      - `icon` returns information about space icon.
      - `description` returns the description of the space.
      - `description.plain` returns the description of the space, the plain format.
      - `description.view` returns the description of the space, the view format.
      - `theme` returns information about the space theme.
      - `homepage` returns information about the space homepage.
      - `history` returns information about the history of the space. */
  expand?: (
    | "settings"
    | "metadata"
    | "metadata.labels"
    | "operations"
    | "lookAndFeel"
    | "permissions"
    | "icon"
    | "description"
    | "description.plain"
    | "description.view"
    | "theme"
    | "homepage"
    | "history"
  )[];
  /** The starting index of the returned spaces. */
  start?: number;
  /** The maximum number of spaces to return per page. Note, this may be
    restricted by fixed system limits. */
  limit?: number;
};
export type CreateSpaceApiResponse =
  /** status 200 Returned if the space is created. */ Space;
export type CreateSpaceApiArg = {
  /** The space to be created. */
  spaceCreate: SpaceCreate;
};
export type CreatePrivateSpaceApiResponse =
  /** status 200 Returned if the space is created. */ Space;
export type CreatePrivateSpaceApiArg = {
  /** The space to be created. */
  spaceCreate: SpaceCreate;
};
export type GetSpaceApiResponse =
  /** status 200 Returned if the requested space is returned. */ Space;
export type GetSpaceApiArg = {
  /** The key of the space to be returned. */
  spaceKey: string;
  /** A multi-value parameter indicating which properties of the spaces to
    expand, where:
    
      - `settings` returns the settings for the space, similar to [Get space settings](#api-space-spaceKey-settings-get).
      - `metadata` returns the space metadata.
      - `metadata.labels` returns the space labels, which are used to categorize the space.
      - `operations` returns the operations for a space, which are used when setting permissions.
      - `lookAndFeel` returns information about the look and feel of the space, including the color scheme.
      - `permissions` returns the permissions for the space. Note that this may return permissions for deleted groups,
      because deleting a group doesn't remove associated space permissions.
      - `icon` returns information about space icon.
      - `description` returns the description of the space.
      - `description.plain` returns the description of the space, the plain format.
      - `description.view` returns the description of the space, the view format.
      - `theme` returns information about the space theme.
      - `homepage` returns information about the space homepage.
      - `history` returns information about the history of the space. */
  expand?: (
    | "settings"
    | "metadata"
    | "metadata.labels"
    | "operations"
    | "lookAndFeel"
    | "permissions"
    | "icon"
    | "description"
    | "description.plain"
    | "description.view"
    | "theme"
    | "homepage"
    | "history"
  )[];
};
export type UpdateSpaceApiResponse =
  /** status 200 Returned if the space is updated. */ Space;
export type UpdateSpaceApiArg = {
  /** The key of the space to update. */
  spaceKey: string;
  /** The updated space. */
  spaceUpdate: SpaceUpdate;
};
export type DeleteSpaceApiResponse =
  /** status 202 Returns a pointer to the status of the space deletion task. */ LongTask;
export type DeleteSpaceApiArg = {
  /** The key of the space to delete. */
  spaceKey: string;
};
export type GetContentForSpaceApiResponse =
  /** status 200 Returned if the requested content is returned. */ {
    page?: ContentArray;
    blogpost?: ContentArray;
    _links?: GenericLinks;
  };
export type GetContentForSpaceApiArg = {
  /** The key of the space to be queried for its content. */
  spaceKey: string;
  /** Filter the results to content at the root level of the space or all content. */
  depth?: "all" | "root";
  /** A multi-value parameter indicating which properties of the content to expand.
    
    - `childTypes.all` returns whether the content has attachments, comments, or child pages.
    Use this if you only need to check whether the content has children of a particular type.
    - `childTypes.attachment` returns whether the content has attachments.
    - `childTypes.comment` returns whether the content has comments.
    - `childTypes.page` returns whether the content has child pages.
    - `container` returns the space that the content is in. This is the same as the information
    returned by [Get space](#api-space-spaceKey-get).
    - `metadata.currentuser` returns information about the current user in relation to the content,
    including when they last viewed it, modified it, contributed to it, or added it as a favorite.
    - `metadata.properties` returns content properties that have been set via the Confluence REST API.
    - `metadata.labels` returns the labels that have been added to the content.
    - `metadata.frontend` this property is only used by Atlassian.
    - `operations` returns the operations for the content, which are used when setting permissions.
    - `children.page` returns pages that are descendants at the level immediately below the content.
    - `children.attachment` returns all attachments for the content.
    - `children.comment` returns all comments on the content.
    - `restrictions.read.restrictions.user` returns the users that have permission to read the content.
    - `restrictions.read.restrictions.group` returns the groups that have permission to read the content. Note that
    this may return deleted groups, because deleting a group doesn't remove associated restrictions.
    - `restrictions.update.restrictions.user` returns the users that have permission to update the content.
    - `restrictions.update.restrictions.group` returns the groups that have permission to update the content. Note that
    this may return deleted groups because deleting a group doesn't remove associated restrictions.
    - `history` returns the history of the content, including the date it was created.
    - `history.lastUpdated` returns information about the most recent update of the content, including
    who updated it and when it was updated.
    - `history.previousVersion` returns information about the update prior to the current content update.
    - `history.contributors` returns all of the users who have contributed to the content.
    - `history.nextVersion` returns information about the update after to the current content update.
    - `ancestors` returns the parent page, if the content is a page.
    - `body` returns the body of the content in different formats, including the editor format,
    view format, and export format.
    - `body.storage` returns the body of content in storage format.
    - `body.view` returns the body of content in view format.
    - `version` returns information about the most recent update of the content, including who updated it
    and when it was updated.
    - `descendants.page` returns pages that are descendants at any level below the content.
    - `descendants.attachment` returns all attachments for the content, same as `children.attachment`.
    - `descendants.comment` returns all comments on the content, same as `children.comment`.
    - `space` returns the space that the content is in. This is the same as the information returned by
    [Get space](#api-space-spaceKey-get).
    
    In addition, the following comment-specific expansions can be used:
    - `extensions.inlineProperties` returns inline comment-specific properties.
    - `extensions.resolution` returns the resolution status of each comment. */
  expand?: string[];
  /** The starting index of the returned content. */
  start?: number;
  /** The maximum number of content objects to return per page. Note, this
    may be restricted by fixed system limits. */
  limit?: number;
};
export type AddPermissionToSpaceApiResponse =
  /** status 200 Returned if the requested content is returned. */ SpacePermissionV2;
export type AddPermissionToSpaceApiArg = {
  /** The key of the space to be queried for its content. */
  spaceKey: string;
  /** The permission to be created. */
  spacePermissionRequest: SpacePermissionRequest;
};
export type AddCustomContentPermissionsApiResponse = unknown;
export type AddCustomContentPermissionsApiArg = {
  /** The key of the space to be queried for its content. */
  spaceKey: string;
  /** The permissions to be created. */
  spacePermissionCustomContent: SpacePermissionCustomContent;
};
export type RemovePermissionApiResponse = unknown;
export type RemovePermissionApiArg = {
  /** The key of the space to be queried for its content. */
  spaceKey: string;
  /** Id of the permission to be deleted. */
  id: number;
};
export type GetContentByTypeForSpaceApiResponse =
  /** status 200 Returned if the requested content is returned. */ ContentArray;
export type GetContentByTypeForSpaceApiArg = {
  /** The key of the space to be queried for its content. */
  spaceKey: string;
  /** The type of content to return. `page`, `blogpost`, `<some_customContentType>`. */
  type: string;
  /** Filter the results to content at the root level of the space or all
    content. */
  depth?: "all" | "root";
  /** A multi-value parameter indicating which properties of the content to expand.
    
    - `childTypes.all` returns whether the content has attachments, comments, or child pages.
    Use this if you only need to check whether the content has children of a particular type.
    - `childTypes.attachment` returns whether the content has attachments.
    - `childTypes.comment` returns whether the content has comments.
    - `childTypes.page` returns whether the content has child pages.
    - `container` returns the space that the content is in. This is the same as the information
    returned by [Get space](#api-space-spaceKey-get).
    - `metadata.currentuser` returns information about the current user in relation to the content,
    including when they last viewed it, modified it, contributed to it, or added it as a favorite.
    - `metadata.properties` returns content properties that have been set via the Confluence REST API.
    - `metadata.labels` returns the labels that have been added to the content.
    - `metadata.frontend` this property is only used by Atlassian.
    - `operations` returns the operations for the content, which are used when setting permissions.
    - `children.page` returns pages that are descendants at the level immediately below the content.
    - `children.attachment` returns all attachments for the content.
    - `children.comment` returns all comments on the content.
    - `restrictions.read.restrictions.user` returns the users that have permission to read the content.
    - `restrictions.read.restrictions.group` returns the groups that have permission to read the content. Note that
    this may return deleted groups, because deleting a group doesn't remove associated restrictions.
    - `restrictions.update.restrictions.user` returns the users that have permission to update the content.
    - `restrictions.update.restrictions.group` returns the groups that have permission to update the content. Note that
    this may return deleted groups because deleting a group doesn't remove associated restrictions.
    - `history` returns the history of the content, including the date it was created.
    - `history.lastUpdated` returns information about the most recent update of the content, including
    who updated it and when it was updated.
    - `history.previousVersion` returns information about the update prior to the current content update.
    - `history.contributors` returns all of the users who have contributed to the content.
    - `history.nextVersion` returns information about the update after to the current content update.
    - `ancestors` returns the parent page, if the content is a page.
    - `body` returns the body of the content in different formats, including the editor format,
    view format, and export format.
    - `body.storage` returns the body of content in storage format.
    - `body.view` returns the body of content in view format.
    - `version` returns information about the most recent update of the content, including who updated it
    and when it was updated.
    - `descendants.page` returns pages that are descendants at any level below the content.
    - `descendants.attachment` returns all attachments for the content, same as `children.attachment`.
    - `descendants.comment` returns all comments on the content, same as `children.comment`.
    - `space` returns the space that the content is in. This is the same as the information returned by
    [Get space](#api-space-spaceKey-get).
    
    In addition, the following comment-specific expansions can be used:
    - `extensions.inlineProperties` returns inline comment-specific properties.
    - `extensions.resolution` returns the resolution status of each comment. */
  expand?: string[];
  /** The starting index of the returned content. */
  start?: number;
  /** The maximum number of content objects to return per page. Note, this
    may be restricted by fixed system limits. */
  limit?: number;
};
export type GetSpacePropertiesApiResponse =
  /** status 200 Returned if the requested space properties are returned. */ SpacePropertyArray;
export type GetSpacePropertiesApiArg = {
  /** The key of the space to be queried for its properties. */
  spaceKey: string;
  /** A multi-value parameter indicating which properties of the space
    property to expand. By default, the `version` object is expanded.
    
    - `version` returns information about the version of the content.
    - `space` returns the space that the properties are in. */
  expand?: ("version" | "space")[];
  /** The starting index of the returned objects. */
  start?: number;
  /** The maximum number of properties to return per page. Note, this may be
    restricted by fixed system limits. */
  limit?: number;
};
export type CreateSpacePropertyApiResponse =
  /** status 200 Returned if the space property is created. */ SpaceProperty;
export type CreateSpacePropertyApiArg = {
  /** The key of the space that the property will be created in. */
  spaceKey: string;
  /** The space property to be created. */
  spacePropertyCreate: SpacePropertyCreate;
};
export type GetSpacePropertyApiResponse =
  /** status 200 Returned if the requested space property is returned. */ SpaceProperty;
export type GetSpacePropertyApiArg = {
  /** The key of the space that the property is in. */
  spaceKey: string;
  /** The key of the space property. */
  key: string;
  /** A multi-value parameter indicating which properties of the space
    property to expand. By default, the `version` object is expanded.
    
    - `version` returns information about the version of the content.
    - `space` returns the space that the properties are in. */
  expand?: ("version" | "space")[];
};
export type UpdateSpacePropertyApiResponse =
  /** status 200 Returned if the space property is updated. */ SpaceProperty;
export type UpdateSpacePropertyApiArg = {
  /** The key of the space that the property is in. */
  spaceKey: string;
  /** The key of the property to be updated. */
  key: string;
  /** The space property being updated. */
  spacePropertyUpdate: SpacePropertyUpdate;
};
export type CreateSpacePropertyForKeyApiResponse =
  /** status 200 Returned if the space property is created. */ SpaceProperty;
export type CreateSpacePropertyForKeyApiArg = {
  /** The key of the space that the property will be created in. */
  spaceKey: string;
  /** The key of the property to be created. */
  key: string;
  /** The space property to be created. */
  spacePropertyCreateNoKey: SpacePropertyCreateNoKey;
};
export type DeleteSpacePropertyApiResponse = unknown;
export type DeleteSpacePropertyApiArg = {
  /** The key of the space that the property is in. */
  spaceKey: string;
  /** The key of the property to be deleted. */
  key: string;
};
export type GetSpaceSettingsApiResponse =
  /** status 200 Returned if the space settings are returned. */ SpaceSettings;
export type GetSpaceSettingsApiArg = {
  /** The key of the space to be queried for its settings. */
  spaceKey: string;
};
export type UpdateSpaceSettingsApiResponse =
  /** status 200 Returned if space settings are updated. */ SpaceSettings;
export type UpdateSpaceSettingsApiArg = {
  /** The key of the space whose settings will be updated. */
  spaceKey: string;
  /** The space settings to update. */
  spaceSettingsUpdate: SpaceSettingsUpdate;
};
export type GetSpaceContentStatesApiResponse =
  /** status 200 Returned if the requested space exists, and user has space view permission. */ ContentState[];
export type GetSpaceContentStatesApiArg = {
  /** The key of the space to be queried for its content state settings. */
  spaceKey: string;
};
export type GetContentStateSettingsApiResponse =
  /** status 200 Returned if the requested space exists, and user has space admin permission. */ ContentStateSettings;
export type GetContentStateSettingsApiArg = {
  /** The key of the space to be queried for its content state settings. */
  spaceKey: string;
};
export type GetSpaceThemeApiResponse =
  /** status 200 Returned if the requested theme is returned. */ Theme;
export type GetSpaceThemeApiArg = {
  /** The key of the space to be queried for its theme. */
  spaceKey: string;
};
export type SetSpaceThemeApiResponse =
  /** status 200 Returned if the theme was set for the space. */ Theme;
export type SetSpaceThemeApiArg = {
  /** The key of the space to set the theme for. */
  spaceKey: string;
  themeUpdate: ThemeUpdate;
};
export type ResetSpaceThemeApiResponse = unknown;
export type ResetSpaceThemeApiArg = {
  /** The key of the space to reset the theme for. */
  spaceKey: string;
};
export type GetWatchersForSpaceApiResponse =
  /** status 200 Returned if watchers list is returned. */ SpaceWatchArray;
export type GetWatchersForSpaceApiArg = {
  /** The key of the space to get watchers. */
  spaceKey: string;
  /** The start point of the collection to return. */
  start?: string;
  /** The limit of the number of items to return, this may be restricted by fixed system limits. */
  limit?: string;
};
export type GetLabelsForSpaceApiResponse =
  /** status 200 Returned if the list of labels is returned. */ LabelArray;
export type GetLabelsForSpaceApiArg = {
  /** The key of the space to get labels for. */
  spaceKey: string;
  /** Filters the results to labels with the specified prefix. If this parameter
    is not specified, then labels with any prefix will be returned.
    
    - `global` prefix is used by labels that are on content within the provided space.
    - `my` prefix can be explicitly added by a user when adding a label
    via the UI, e.g. 'my:example-label'.
    - `team` prefix is used for labels applied to the space. */
  prefix?: "global" | "my" | "team";
  /** The starting index of the returned labels. */
  start?: number;
  /** The maximum number of labels to return per page. Note,
    this may be restricted by fixed system limits. */
  limit?: number;
};
export type AddLabelsToSpaceApiResponse =
  /** status 200 Returned if the labels are added to the content. */ LabelArray;
export type AddLabelsToSpaceApiArg = {
  /** The key of the space to add labels to. */
  spaceKey: string;
  /** The labels to add to the content. */
  body: LabelCreate[];
};
export type DeleteLabelFromSpaceApiResponse = unknown;
export type DeleteLabelFromSpaceApiArg = {
  /** The key of the space to remove a labels from. */
  spaceKey: string;
  /** The name of the label to remove */
  name: string;
  /** The prefix of the label to remove. If not provided defaults to global. */
  prefix?: string;
};
export type UpdateContentTemplateApiResponse =
  /** status 200 Returned if the template is updated. */ ContentTemplate;
export type UpdateContentTemplateApiArg = {
  /** The updated content template. */
  contentTemplateUpdate: ContentTemplateUpdate;
};
export type CreateContentTemplateApiResponse =
  /** status 200 Returned if the template is created. */ ContentTemplate;
export type CreateContentTemplateApiArg = {
  /** The content template to be created.
    The content body must be in 'storage' format. */
  contentTemplateCreate: ContentTemplateCreate;
};
export type GetBlueprintTemplatesApiResponse =
  /** status 200 Returned if the requested templates are returned. */ BlueprintTemplateArray;
export type GetBlueprintTemplatesApiArg = {
  /** The key of the space to be queried for templates. If the `spaceKey`
    is not specified, global blueprint templates will be returned. */
  spaceKey?: string;
  /** The starting index of the returned templates. */
  start?: number;
  /** The maximum number of templates to return per page.
    Note, this may be restricted by fixed system limits. */
  limit?: number;
  /** A multi-value parameter indicating which properties of the template
    to expand.
    
    - `body` returns the content of the template in storage format. */
  expand?: "body"[];
};
export type GetContentTemplatesApiResponse =
  /** status 200 Returned if the requested templates are returned. */ ContentTemplateArray;
export type GetContentTemplatesApiArg = {
  /** The key of the space to be queried for templates. If the `spaceKey`
    is not specified, global templates will be returned. */
  spaceKey?: string;
  /** The starting index of the returned templates. */
  start?: number;
  /** The maximum number of templates to return per page.
    Note, this may be restricted by fixed system limits. */
  limit?: number;
  /** A multi-value parameter indicating which properties of the template
    to expand.
    
    - `body` returns the content of the template in storage format. */
  expand?: "body"[];
};
export type GetContentTemplateApiResponse =
  /** status 200 Returned if the requested template is returned. */ ContentTemplate;
export type GetContentTemplateApiArg = {
  /** The ID of the content template to be returned. */
  contentTemplateId: string;
};
export type RemoveTemplateApiResponse = unknown;
export type RemoveTemplateApiArg = {
  /** The ID of the template to be deleted. */
  contentTemplateId: string;
};
export type GetUserApiResponse =
  /** status 200 Returned if the requested user is returned. */ User;
export type GetUserApiArg = {
  /** The account ID of the user. The accountId uniquely identifies the user across all Atlassian products.
    For example, `384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192`. */
  accountId: string;
  /** A multi-value parameter indicating which properties of the user to
    expand.
    
      - `operations` returns the operations that the user is allowed to do.
      - personalSpace returns the user's personal space, if it exists.
      - `isExternalCollaborator` returns whether the user is an external collaborator user */
  expand?: ("operations" | "personalSpace" | "isExternalCollaborator")[];
};
export type GetAnonymousUserApiResponse =
  /** status 200 Returned if the anonymous user representation is returned. */ UserAnonymous;
export type GetAnonymousUserApiArg = {
  /** A multi-value parameter indicating which properties of the user to
    expand.
    
      - `operations` returns the operations that the user is allowed to do. */
  expand?: "operations"[];
};
export type GetCurrentUserApiResponse =
  /** status 200 Returned if the current user is returned. */ User;
export type GetCurrentUserApiArg = {
  /** A multi-value parameter indicating which properties of the user to
    expand.
    
      - `operations` returns the operations that the user is allowed to do.
      - personalSpace returns the user's personal space, if it exists.
      - `isExternalCollaborator` returns whether the user is an external collaborator user */
  expand?: ("operations" | "personalSpace" | "isExternalCollaborator")[];
};
export type GetGroupMembershipsForUserApiResponse =
  /** status 200 Returned if the requested groups are returned. */ GroupArrayWithLinks;
export type GetGroupMembershipsForUserApiArg = {
  /** The account ID of the user. The accountId uniquely identifies the user across all Atlassian products.
    For example, `384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192`. */
  accountId: string;
  /** The starting index of the returned groups. */
  start?: number;
  /** The maximum number of groups to return per page.
    Note, this may be restricted by fixed system limits. */
  limit?: number;
};
export type GetBulkUserLookupApiResponse =
  /** status 200 Returned if, the list of users is returned. */ BulkUserLookupArray;
export type GetBulkUserLookupApiArg = {
  /** A list of accountId's of users to be returned. */
  accountId: string;
  /** A multi-value parameter indicating which properties of the user to
    expand.
    
      - `operations` returns the operations that the user is allowed to do.
      - personalSpace returns the user's personal space, if it exists. */
  expand?: ("operations" | "personalSpace")[];
  /** The maximum number of results returned.
    Currently API returns 200 results max.
    If more that 200 ids are passed first 200 will be returned. */
  limit?: number;
};
export type GetContentWatchStatusApiResponse =
  /** status 200 Returned if the requested watch status is returned. */ UserWatch;
export type GetContentWatchStatusApiArg = {
  /** The ID of the content to be queried for whether the specified user is
    watching it. */
  contentId: string;
  /** This parameter is no longer available and will be removed from the documentation soon.
    Use `accountId` instead.
    See the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details. */
  key?: string;
  /** This parameter is no longer available and will be removed from the documentation soon.
    Use `accountId` instead.
    See the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details. */
  username?: string;
  /** The account ID of the user. The accountId uniquely identifies the user across all Atlassian products.
    For example, `384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192`. */
  accountId?: string;
};
export type AddContentWatcherApiResponse = unknown;
export type AddContentWatcherApiArg = {
  /** The ID of the content to add the watcher to. */
  contentId: string;
  /** This parameter is no longer available and will be removed from the documentation soon.
    Use `accountId` instead.
    See the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details. */
  key?: string;
  /** This parameter is no longer available and will be removed from the documentation soon.
    Use `accountId` instead.
    See the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details. */
  username?: string;
  /** The account ID of the user. The accountId uniquely identifies the user across all Atlassian products.
    For example, `384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192`. */
  accountId?: string;
};
export type RemoveContentWatcherApiResponse = unknown;
export type RemoveContentWatcherApiArg = {
  /** Note, you must add header when making a
    request, as this operation has XSRF protection. */
  "X-Atlassian-Token": string;
  /** The ID of the content to remove the watcher from. */
  contentId: string;
  /** This parameter is no longer available and will be removed from the documentation soon.
    Use `accountId` instead.
    See the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details. */
  key?: string;
  /** This parameter is no longer available and will be removed from the documentation soon.
    Use `accountId` instead.
    See the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details. */
  username?: string;
  /** The account ID of the user. The accountId uniquely identifies the user across all Atlassian products.
    For example, `384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192`. */
  accountId?: string;
};
export type IsWatchingLabelApiResponse =
  /** status 200 Returned if the requested watch status is returned. */ UserWatch;
export type IsWatchingLabelApiArg = {
  /** The name of the label to be queried for whether the specified user is
    watching it. */
  labelName: string;
  /** This parameter is no longer available and will be removed from the documentation soon.
    Use `accountId` instead.
    See the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details. */
  key?: string;
  /** This parameter is no longer available and will be removed from the documentation soon.
    Use `accountId` instead.
    See the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details. */
  username?: string;
  /** The account ID of the user. The accountId uniquely identifies the user across all Atlassian products.
    For example, `384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192`. */
  accountId?: string;
};
export type AddLabelWatcherApiResponse = unknown;
export type AddLabelWatcherApiArg = {
  /** Note, you must add header when making a
    request, as this operation has XSRF protection. */
  "X-Atlassian-Token": string;
  /** The name of the label to add the watcher to. */
  labelName: string;
  /** This parameter is no longer available and will be removed from the documentation soon.
    Use `accountId` instead.
    See the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details. */
  key?: string;
  /** This parameter is no longer available and will be removed from the documentation soon.
    Use `accountId` instead.
    See the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details. */
  username?: string;
  /** The account ID of the user. The accountId uniquely identifies the user across all Atlassian products.
    For example, `384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192`. */
  accountId?: string;
};
export type RemoveLabelWatcherApiResponse = unknown;
export type RemoveLabelWatcherApiArg = {
  /** The name of the label to remove the watcher from. */
  labelName: string;
  /** This parameter is no longer available and will be removed from the documentation soon.
    Use `accountId` instead.
    See the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details. */
  key?: string;
  /** This parameter is no longer available and will be removed from the documentation soon.
    Use `accountId` instead.
    See the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details. */
  username?: string;
  /** The account ID of the user. The accountId uniquely identifies the user across all Atlassian products.
    For example, `384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192`. */
  accountId?: string;
};
export type IsWatchingSpaceApiResponse =
  /** status 200 Returned if the requested watch status is returned. */ UserWatch;
export type IsWatchingSpaceApiArg = {
  /** The key of the space to be queried for whether the specified user is
    watching it. */
  spaceKey: string;
  /** This parameter is no longer available and will be removed from the documentation soon.
    Use `accountId` instead.
    See the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details. */
  key?: string;
  /** This parameter is no longer available and will be removed from the documentation soon.
    Use `accountId` instead.
    See the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details. */
  username?: string;
  /** The account ID of the user. The accountId uniquely identifies the user across all Atlassian products.
    For example, `384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192`. */
  accountId?: string;
};
export type AddSpaceWatcherApiResponse = unknown;
export type AddSpaceWatcherApiArg = {
  /** Note, you must add header when making a
    request, as this operation has XSRF protection. */
  "X-Atlassian-Token": string;
  /** The key of the space to add the watcher to. */
  spaceKey: string;
  /** This parameter is no longer available and will be removed from the documentation soon.
    Use `accountId` instead.
    See the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details. */
  key?: string;
  /** This parameter is no longer available and will be removed from the documentation soon.
    Use `accountId` instead.
    See the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details. */
  username?: string;
  /** The account ID of the user. The accountId uniquely identifies the user across all Atlassian products.
    For example, `384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192`. */
  accountId?: string;
};
export type RemoveSpaceWatchApiResponse = unknown;
export type RemoveSpaceWatchApiArg = {
  /** The key of the space to remove the watcher from. */
  spaceKey: string;
  /** This parameter is no longer available and will be removed from the documentation soon.
    Use `accountId` instead.
    See the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details. */
  key?: string;
  /** This parameter is no longer available and will be removed from the documentation soon.
    Use `accountId` instead.
    See the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details. */
  username?: string;
  /** The account ID of the user. The accountId uniquely identifies the user across all Atlassian products.
    For example, `384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192`. */
  accountId?: string;
};
export type GetPrivacyUnsafeUserEmailApiResponse =
  /** status 200 Returned if the requested user's email is returned. */ AccountIdEmailRecord;
export type GetPrivacyUnsafeUserEmailApiArg = {
  /** The account ID of the user, which uniquely identifies the user across all Atlassian products.
    For example, `384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192`. Required. */
  accountId: string;
};
export type GetPrivacyUnsafeUserEmailBulkApiResponse =
  /** status 200 Returned if the request is successful. */ AccountIdEmailRecordArray;
export type GetPrivacyUnsafeUserEmailBulkApiArg = {
  /** The account IDs of the users. */
  accountId: string[];
};
export type GetBulkUserMigrationApiResponse =
  /** status 200 Returned if the request is successful. */ MigratedUserArray;
export type GetBulkUserMigrationApiArg = {
  /** The key of a user. To specify multiple users, pass multiple key parameters separated by ampersands.
    For example, key=mia&key=alana. Required if username isn't provided. Cannot be provided if username is present. */
  key?: string[];
  /** The username of a user. To specify multiple users, pass multiple username parameters separated by ampersands.
    For example, username=mia&username=alana. Required if key isn't provided. Cannot be provided if key is present. */
  username?: string[];
  /** The index of the first item to return in a page of results (page offset). */
  start?: number;
  /** The maximum number of results to return per page.
    Note, this may be restricted by fixed system limits. */
  limit?: number;
};
export type GetModulesApiResponse =
  /** status 200 Returned if the request is successful. */ ConnectModules;
export type GetModulesApiArg = void;
export type RegisterModulesApiResponse =
  /** status 200 Returned if the request is successful. */ string;
export type RegisterModulesApiArg = {
  connectModules: ConnectModules;
};
export type RemoveModulesApiResponse =
  /** status 204 Returned if the request is successful. */ string;
export type RemoveModulesApiArg = {
  /** The key of the module to remove. To include multiple module keys, provide multiple copies of this parameter.
    For example, `moduleKey=dynamic-attachment-entity-property&moduleKey=dynamic-select-field`.
    Nonexistent keys are ignored. */
  moduleKey: string[];
};
export type GetViewsApiResponse =
  /** status 200 Returns the total number of views for the content. */ {
    id?: number;
    count?: number;
  };
export type GetViewsApiArg = {
  /** The ID of the content to get the views for. */
  contentId: string;
  /** The number of views for the content since the date. */
  fromDate?: string;
};
export type GetViewersApiResponse =
  /** status 200 Returns the total number of distinct viewers for the content. */ {
    id?: number;
    count?: number;
  };
export type GetViewersApiArg = {
  /** The ID of the content to get the viewers for. */
  contentId: string;
  /** The number of views for the content since the date. */
  fromDate?: string;
};
export type GetUserPropertiesApiResponse =
  /** status 200 Returned if the requested properties are returned. */ UserPropertyKeyArray;
export type GetUserPropertiesApiArg = {
  /** The account ID of the user to be queried for its properties. */
  userId: string;
  /** The starting index of the returned properties. */
  start?: number;
  /** The maximum number of properties to return per page.
    Note, this may be restricted by fixed system limits. */
  limit?: number;
};
export type GetUserPropertyApiResponse =
  /** status 200 Returned if the requested properties are returned. */ UserProperty;
export type GetUserPropertyApiArg = {
  /** The account ID of the user to be queried for its properties. */
  userId: string;
  /** The key of the user property. */
  key: string;
};
export type UpdateUserPropertyApiResponse = unknown;
export type UpdateUserPropertyApiArg = {
  /** The account ID of the user. The accountId uniquely identifies the user across all Atlassian
    products. For example, 384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192 */
  userId: string;
  /** The key of the user property. */
  key: string;
  /** The user property to be updated. */
  userPropertyUpdate: UserPropertyUpdate;
};
export type CreateUserPropertyApiResponse = unknown;
export type CreateUserPropertyApiArg = {
  /** The account ID of the user. The accountId uniquely identifies the user across all Atlassian
    products. For example, 384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192 */
  userId: string;
  /** The key of the user property. */
  key: string;
  /** The user property to be created. */
  userPropertyCreate: UserPropertyCreate;
};
export type DeleteUserPropertyApiResponse = unknown;
export type DeleteUserPropertyApiArg = {
  /** The account ID of the user. The accountId uniquely identifies the user across all Atlassian
    products. For example, 384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192 */
  userId: string;
  /** The key of the user property. */
  key: string;
};
export type GenericUserName = string | null;
export type GenericUserKey = string | null;
export type GenericAccountId = string | null;
export type AffectedObject = {
  name: string;
  objectType: string;
};
export type ChangedValue = {
  name: string;
  oldValue: string;
  hiddenOldValue?: string;
  newValue: string;
  hiddenNewValue?: string;
};
export type AuditRecord = {
  author: {
    type: "user";
    displayName: string;
    operations: {} | null;
    username?: GenericUserName;
    userKey?: GenericUserKey;
    accountId?: GenericAccountId;
    accountType?: string;
    externalCollaborator?: boolean;
    isExternalCollaborator?: boolean;
    publicName?: string;
  };
  remoteAddress: string;
  creationDate: number;
  summary: string;
  description: string;
  category: string;
  sysAdmin: boolean;
  superAdmin?: boolean;
  affectedObject: AffectedObject;
  changedValues: ChangedValue[];
  associatedObjects: AffectedObject[];
};
export type GenericLinks = {
  [key: string]:
    | {
        [key: string]: any;
      }
    | string;
};
export type AuditRecordArray = {
  results: AuditRecord[];
  start: number;
  limit: number;
  size: number;
  _links: GenericLinks;
};
export type AuditRecordCreate = {
  author?: {
    type: "user";
    displayName?: string;
    operations?: {};
    username?: GenericUserName;
    userKey?: GenericUserKey;
  };
  remoteAddress: string;
  creationDate?: number;
  summary?: string;
  description?: string;
  category?: string;
  sysAdmin?: boolean;
  affectedObject?: AffectedObject;
  changedValues?: ChangedValue[];
  associatedObjects?: AffectedObject[];
};
export type RetentionPeriod = {
  number: number;
  units:
    | "NANOS"
    | "MICROS"
    | "MILLIS"
    | "SECONDS"
    | "MINUTES"
    | "HOURS"
    | "HALF_DAYS"
    | "DAYS"
    | "WEEKS"
    | "MONTHS"
    | "YEARS"
    | "DECADES"
    | "CENTURIES"
    | "MILLENNIA"
    | "ERAS"
    | "FOREVER";
};
export type Icon = {
  path: string;
  width: number;
  height: number;
  isDefault: boolean;
} | null;
export type SpaceDescription = {
  value: string;
  representation: "plain" | "view";
  embeddedContent: {}[];
  [key: string]: any;
};
export type Label = {
  prefix: string;
  name: string;
  id: string;
  label: string;
};
export type LabelArray = {
  results: Label[];
  start?: number;
  limit?: number;
  size: number;
  _links?: GenericLinks;
};
export type OperationCheckResult = {
  operation:
    | "administer"
    | "archive"
    | "clear_permissions"
    | "copy"
    | "create"
    | "create_space"
    | "delete"
    | "export"
    | "move"
    | "purge"
    | "purge_version"
    | "read"
    | "restore"
    | "restrict_content"
    | "update"
    | "use";
  targetType: string;
};
export type UserDetails = {
  business?: {
    position?: string;
    department?: string;
    location?: string;
  };
  personal?: {
    phone?: string;
    im?: string;
    website?: string;
    email?: string;
  };
};
export type User = {
  type: "known" | "unknown" | "anonymous" | "user";
  username?: GenericUserName;
  userKey?: GenericUserKey;
  accountId?: GenericAccountId;
  accountType?: "atlassian" | "app" | "";
  email?: string | null;
  publicName?: string;
  profilePicture?: Icon;
  displayName?: string | null;
  timeZone?: string | null;
  isExternalCollaborator?: boolean;
  externalCollaborator?: boolean;
  operations?: OperationCheckResult[] | null;
  details?: UserDetails;
  personalSpace?: Space;
  _expandable?: {
    operations?: string;
    details?: string;
    personalSpace?: string;
  };
  _links?: GenericLinks;
  [key: string]: any;
} | null;
export type Group = {
  type: "group";
  name: string;
  id?: string | null;
  _links?: GenericLinks;
};
export type SpacePermission = {
  id?: number;
  subjects?: {
    user?: {
      results: User[];
      size: number;
      start?: number;
      limit?: number;
    };
    group?: {
      results: Group[];
      size: number;
      start?: number;
      limit?: number;
    };
    _expandable?: {
      user?: string;
      group?: string;
    };
  };
  operation: OperationCheckResult;
  anonymousAccess: boolean;
  unlicensedAccess: boolean;
};
export type SpaceSettings = {
  routeOverrideEnabled: boolean;
  editor?: {
    page: string;
    blogpost: string;
    default: string;
  };
  _links: GenericLinks;
} | null;
export type Theme = {
  themeKey: string;
  name?: string;
  description?: string;
  icon?: Icon;
  _links?: GenericLinks;
};
export type MenusLookAndFeel = {
  hoverOrFocus: {
    backgroundColor: string;
  };
  color: string;
};
export type ButtonLookAndFeel = {
  backgroundColor: string;
  color: string;
} | null;
export type NavigationLookAndFeel = {
  color: string;
  highlightColor?: string | null;
  hoverOrFocus: {
    backgroundColor: string;
    color: string;
  };
} | null;
export type SearchFieldLookAndFeel = {
  backgroundColor: string;
  color: string;
} | null;
export type HeaderLookAndFeel = {
  backgroundColor: string;
  button: ButtonLookAndFeel;
  primaryNavigation: NavigationLookAndFeel;
  secondaryNavigation: NavigationLookAndFeel;
  search: SearchFieldLookAndFeel;
};
export type TopNavigationLookAndFeel = {
  color?: string | null;
  highlightColor: string;
  hoverOrFocus?: {
    backgroundColor?: string;
    color?: string;
  };
};
export type HorizontalHeaderLookAndFeel = {
  backgroundColor: string;
  button?: ButtonLookAndFeel;
  primaryNavigation: TopNavigationLookAndFeel;
  secondaryNavigation?: NavigationLookAndFeel;
  search?: SearchFieldLookAndFeel;
};
export type ScreenLookAndFeel = {
  background: string;
  backgroundAttachment?: string | null;
  backgroundBlendMode?: string | null;
  backgroundClip?: string | null;
  backgroundColor?: string | null;
  backgroundImage?: string | null;
  backgroundOrigin?: string | null;
  backgroundPosition?: string | null;
  backgroundRepeat?: string | null;
  backgroundSize?: string | null;
  layer?: {
    width?: string;
    height?: string;
  } | null;
  gutterTop?: string | null;
  gutterRight?: string | null;
  gutterBottom?: string | null;
  gutterLeft?: string | null;
};
export type ContainerLookAndFeel = {
  background: string;
  backgroundAttachment?: string | null;
  backgroundBlendMode?: string | null;
  backgroundClip?: string | null;
  backgroundColor: string | null;
  backgroundImage: string | null;
  backgroundOrigin?: string | null;
  backgroundPosition?: string | null;
  backgroundRepeat?: string | null;
  backgroundSize: string | null;
  padding: string;
  borderRadius: string;
} | null;
export type ContentLookAndFeel = {
  screen?: ScreenLookAndFeel;
  container?: ContainerLookAndFeel;
  header?: ContainerLookAndFeel;
  body?: ContainerLookAndFeel;
};
export type LookAndFeel = {
  headings: {
    color: string;
  };
  links: {
    color: string;
  };
  menus: MenusLookAndFeel;
  header: HeaderLookAndFeel;
  horizontalHeader?: HorizontalHeaderLookAndFeel;
  content: ContentLookAndFeel;
  bordersAndDividers: {
    color: string;
  };
  spaceReference?: object | null;
};
export type Space = {
  id?: number;
  key: string;
  name: string;
  icon?: Icon;
  description?: {
    plain?: SpaceDescription;
    view?: SpaceDescription;
    _expandable?: {
      view?: string;
      plain?: string;
    };
  };
  homepage?: Content;
  type: string;
  metadata?: {
    labels?: LabelArray;
    _expandable?: object;
  };
  operations?: OperationCheckResult[];
  permissions?: SpacePermission[];
  status: string;
  settings?: SpaceSettings;
  theme?: Theme;
  lookAndFeel?: LookAndFeel;
  history?: {
    createdDate: string;
    createdBy?: User;
  };
  _expandable: {
    settings?: string;
    metadata?: string;
    operations?: string;
    lookAndFeel?: string;
    permissions?: string;
    icon?: string;
    description?: string;
    theme?: string;
    history?: string;
    homepage?: string;
    identifiers?: string;
  };
  _links: GenericLinks;
} | null;
export type UsersUserKeys = {
  users?: User[];
  userKeys: string[];
  _links?: GenericLinks;
  [key: string]: any;
} | null;
export type Version = {
  by?: User;
  when: string | null;
  friendlyWhen?: string | null;
  message?: string | null;
  number: number;
  minorEdit: boolean;
  content?: Content;
  collaborators?: UsersUserKeys;
  _expandable?: {
    content?: string;
    collaborators?: string;
  };
  _links?: GenericLinks;
  contentTypeModified?: boolean;
  confRev?: string | null;
  syncRev?: string | null;
  syncRevSource?: string | null;
  [key: string]: any;
} | null;
export type ContentHistory = {
  latest: boolean;
  createdBy?: User;
  createdDate?: string;
  lastUpdated?: Version;
  previousVersion?: Version;
  contributors?: {
    publishers?: UsersUserKeys;
  };
  nextVersion?: Version;
  _expandable?: {
    lastUpdated?: string;
    previousVersion?: string;
    contributors?: string;
    nextVersion?: string;
  };
  _links?: GenericLinks;
} | null;
export type ContentChildren = {
  attachment?: ContentArray;
  comment?: ContentArray;
  page?: ContentArray;
  _expandable?: {
    attachment?: string;
    comment?: string;
    page?: string;
    [key: string]: any;
  };
  _links?: GenericLinks;
  [key: string]: any;
};
export type ContentChildType = {
  attachment?: {
    value: boolean;
    _links: GenericLinks;
  };
  comment?: {
    value: boolean;
    _links: GenericLinks;
  };
  page?: {
    value: boolean;
    _links: GenericLinks;
  };
  _expandable?: {
    all?: object;
    attachment?: object;
    comment?: object;
    page?: object;
  };
};
export type Container = {
  [key: string]: any;
} | null;
export type Embeddable = {
  [key: string]: any;
};
export type EmbeddedContent = {
  entityId?: number;
  entityType?: string;
  entity?: Embeddable;
  [key: string]: any;
};
export type SuperBatchWebResources = {
  uris?: {
    all?: string[] | string;
    css?: string[] | string;
    js?: string[] | string;
  };
  tags?: {
    all?: string;
    css?: string;
    data?: string;
    js?: string;
  };
  metatags?: string;
  _expandable?: {
    [key: string]: any;
  };
};
export type WebResourceDependencies = {
  _expandable?: {
    uris?:
      | string
      | {
          [key: string]: any;
        };
    [key: string]: any;
  };
  keys?: string[];
  contexts?: string[];
  uris?: {
    all?: string[] | string;
    css?: string[] | string;
    js?: string[] | string;
    _expandable?: {
      css?: string[] | string;
      js?: string[] | string;
      [key: string]: any;
    };
  };
  tags?: {
    all?: string;
    css?: string;
    data?: string;
    js?: string;
    _expandable?: {
      [key: string]: any;
    };
  };
  superbatch?: SuperBatchWebResources;
};
export type ContentBody = {
  value: string;
  representation:
    | "view"
    | "export_view"
    | "styled_view"
    | "storage"
    | "editor"
    | "editor2"
    | "anonymous_export_view"
    | "wiki"
    | "atlas_doc_format";
  embeddedContent?: EmbeddedContent[];
  webresource?: WebResourceDependencies;
  mediaToken?: {
    collectionIds?: string[];
    contentId?: string;
    expiryDateTime?: string;
    fileIds?: string[];
    token?: string;
  };
  _expandable?: {
    content?: string;
    embeddedContent?: string;
    webresource?: string;
    mediaToken?: string;
  };
  _links?: GenericLinks;
};
export type UserArray = {
  results: User[];
  start?: number;
  limit?: number;
  size?: number;
  totalSize?: number;
  _links?: GenericLinks;
};
export type GroupArray = {
  results: Group[];
  start: number;
  limit: number;
  size: number;
};
export type ContentRestriction = {
  operation:
    | "administer"
    | "copy"
    | "create"
    | "delete"
    | "export"
    | "move"
    | "purge"
    | "purge_version"
    | "read"
    | "restore"
    | "update"
    | "use";
  restrictions?: {
    user?: UserArray;
    group?: GroupArray;
    _expandable?: {
      user?: string;
      group?: string;
    };
  };
  content?: Content;
  _expandable: {
    restrictions?: string;
    content?: string;
  };
  _links: GenericLinks;
};
export type ContentMetadata = {
  currentuser?: {
    favourited?: {
      isFavourite?: boolean;
      favouritedDate?: string;
    };
    lastmodified?: {
      version?: Version;
      friendlyLastModified?: string;
    };
    lastcontributed?: {
      status?: string;
      when?: string;
    };
    viewed?: {
      lastSeen?: string;
      friendlyLastSeen?: string;
    };
    scheduled?: object;
    _expandable?: {
      favourited?: string;
      lastmodified?: string;
      lastcontributed?: string;
      viewed?: string;
      scheduled?: string;
    };
  };
  properties?: GenericLinks;
  frontend?: {
    [key: string]: any;
  };
  labels?: LabelArray | Label[];
  [key: string]: any;
};
export type Content = {
  id?: string;
  type: string;
  status: string;
  title?: string;
  space?: Space;
  history?: ContentHistory;
  version?: Version;
  ancestors?: Content[] | null;
  operations?: OperationCheckResult[];
  children?: ContentChildren;
  childTypes?: ContentChildType;
  descendants?: ContentChildren;
  container?: Container;
  body?: {
    view?: ContentBody;
    export_view?: ContentBody;
    styled_view?: ContentBody;
    storage?: ContentBody;
    wiki?: ContentBody;
    editor?: ContentBody;
    editor2?: ContentBody;
    anonymous_export_view?: ContentBody;
    atlas_doc_format?: ContentBody;
    dynamic?: ContentBody;
    _expandable?: {
      editor?: string;
      view?: string;
      export_view?: string;
      styled_view?: string;
      storage?: string;
      editor2?: string;
      anonymous_export_view?: string;
      atlas_doc_format?: string;
      wiki?: string;
      dynamic?: string;
      raw?: string;
    };
  };
  restrictions?: {
    read?: ContentRestriction;
    update?: ContentRestriction;
    _expandable?: {
      read?: string;
      update?: string;
    };
    _links?: GenericLinks;
  };
  metadata?: ContentMetadata;
  macroRenderedOutput?: {
    [key: string]: object;
  };
  extensions?: object;
  _expandable?: {
    childTypes?: string;
    container?: string;
    metadata?: string;
    operations?: string;
    children?: string;
    restrictions?: string;
    history?: string;
    ancestors?: string;
    body?: string;
    version?: string;
    descendants?: string;
    space?: string;
    extensions?: string;
    schedulePublishDate?: string;
    macroRenderedOutput?: string;
  };
  _links?: GenericLinks;
  [key: string]: any;
} | null;
export type ContentArray = {
  results: Content[];
  start?: number;
  limit?: number;
  size: number;
  _links: GenericLinks;
};
export type GlobalSpaceIdentifier = {
  spaceIdentifier: string;
} | null;
export type ContentBodyCreate = {
  value: string;
  representation:
    | "view"
    | "export_view"
    | "styled_view"
    | "storage"
    | "editor"
    | "editor2"
    | "anonymous_export_view"
    | "wiki"
    | "atlas_doc_format"
    | "plain"
    | "raw";
  [key: string]: any;
};
export type ContentCreate = {
  id?: string | null;
  title?: string | null;
  type: string;
  space?: {
    id?: number | null;
    name?: string | null;
    icon?: Icon;
    identifiers?: GlobalSpaceIdentifier;
    description?: {
      plain?: SpaceDescription;
      view?: SpaceDescription;
      _expandable?: {
        view?: string;
        plain?: string;
      };
    } | null;
    homepage?: Content;
    type?: string | null;
    metadata?: {
      labels?: LabelArray;
      _expandable?: object;
    } | null;
    operations?: OperationCheckResult[] | null;
    permissions?: SpacePermission[] | null;
    status?: string | null;
    settings?: SpaceSettings;
    theme?: Theme;
    lookAndFeel?: LookAndFeel;
    history?: {
      createdDate: string;
      createdBy?: User;
    };
    key: string;
    links?: {
      [key: string]: any;
    } | null;
  } | null;
  status?: "current" | "deleted" | "historical" | "draft";
  container?: {
    id: number | string;
    type: string;
    [key: string]: any;
  } | null;
  ancestors?:
    | {
        id: string;
        [key: string]: any;
      }[]
    | null;
  body?: {
    view?: ContentBodyCreate;
    export_view?: ContentBodyCreate;
    styled_view?: ContentBodyCreate;
    storage?: ContentBodyCreate;
    editor?: ContentBodyCreate;
    editor2?: ContentBodyCreate;
    wiki?: ContentBodyCreate;
    anonymous_export_view?: ContentBodyCreate;
    plain?: ContentBodyCreate;
    atlas_doc_format?: ContentBodyCreate;
    raw?: ContentBodyCreate;
  };
  [key: string]: any;
} | null;
export type LongTask = {
  id: string;
  links: {
    status?: string;
    [key: string]: any;
  };
};
export type ContentBlueprintDraft = {
  version: {
    number: number;
    [key: string]: any;
  };
  title: string;
  type: "page";
  status?: "current";
  space?: {
    key: string;
    [key: string]: any;
  };
  ancestors?:
    | {
        id: string;
      }[]
    | null;
  [key: string]: any;
};
export type ContentBodyCreateStorage = {
  value: string;
  representation:
    | "storage"
    | "view"
    | "export_view"
    | "styled_view"
    | "editor"
    | "editor2"
    | "anonymous_export_view"
    | "wiki"
    | "atlas_doc_format";
  [key: string]: any;
};
export type ContentUpdate = {
  version: {
    number: number;
    [key: string]: any;
  } | null;
  title?: string | null;
  type: string | null;
  status?: "current" | "trashed" | "deleted" | "historical" | "draft";
  ancestors?:
    | {
        id: number | string;
        [key: string]: any;
      }[]
    | null;
  body?: {
    view?: ContentBodyCreate;
    export_view?: ContentBodyCreate;
    styled_view?: ContentBodyCreate;
    storage?: ContentBodyCreateStorage;
    editor?: ContentBodyCreate;
    editor2?: ContentBodyCreate;
    wiki?: ContentBodyCreate;
    atlas_doc_format?: ContentBodyCreate;
    anonymous_export_view?: ContentBodyCreate;
  };
  [key: string]: any;
};
export type ContentId = string;
export type MacroInstance = {
  name?: string;
  body?: string;
  parameters?: object;
  _links?: GenericLinks;
};
export type LabelCreate = {
  prefix: string;
  name: string;
  [key: string]: any;
};
export type LabelCreateArray = LabelCreate[];
export type WatchUser = {
  type: string;
  username?: GenericUserName;
  userKey?: GenericUserKey;
  accountId: GenericAccountId;
  profilePicture: Icon;
  displayName: string;
  timeZone?: string | null;
  operations: OperationCheckResult[] | null;
  isExternalCollaborator: boolean;
  details?: UserDetails;
  accountType: string;
  email: string;
  publicName: string;
  personalSpace: object | null;
  externalCollaborator: boolean;
};
export type Watch = {
  type: string;
  watcher: WatchUser;
  contentId: number;
};
export type WatchArray = {
  results: Watch[];
  start: number;
  limit: number;
  size: number;
  _links: GenericLinks;
};
export type SpaceWatch = {
  type: string;
  watcher: WatchUser;
  spaceKey?: string;
  labelName?: string;
  prefix?: string;
};
export type SpaceWatchArray = {
  results: SpaceWatch[];
  start: number;
  limit: number;
  size: number;
  _links?: GenericLinks;
};
export type CopyPageHierarchyTitleOptions = {
  prefix?: string;
  replace?: string;
  search?: string;
};
export type CopyPageHierarchyRequest = {
  copyAttachments?: boolean;
  copyPermissions?: boolean;
  copyProperties?: boolean;
  copyLabels?: boolean;
  copyCustomContents?: boolean;
  copyDescendants?: boolean;
  destinationPageId: ContentId;
  titleOptions?: CopyPageHierarchyTitleOptions;
};
export type CopyPageRequestDestination = {
  type: "space" | "existing_page" | "parent_page";
  value: string;
};
export type CopyPageRequest = {
  copyAttachments?: boolean;
  copyPermissions?: boolean;
  copyProperties?: boolean;
  copyLabels?: boolean;
  copyCustomContents?: boolean;
  destination: CopyPageRequestDestination;
  pageTitle?: string;
  body?: {
    storage?: ContentBodyCreate;
    editor2?: ContentBodyCreate;
  };
};
export type Message = {
  translation?: string;
  args: (
    | string
    | {
        [key: string]: any;
      }
  )[];
  [key: string]: any;
};
export type PermissionCheckResponse = {
  hasPermission: boolean;
  errors?: Message[];
  _links?: GenericLinks;
};
export type PermissionSubjectWithGroupId = {
  type: "user" | "group";
  identifier: string;
};
export type ContentPermissionRequest = {
  subject: PermissionSubjectWithGroupId;
  operation: "read" | "update" | "delete";
};
export type ContentProperty = {
  id: string;
  key: string;
  value:
    | string[]
    | boolean
    | {
        [key: string]: any;
      }
    | string;
  version?: {
    when: string;
    message: string;
    number: number;
    minorEdit: boolean;
    contentTypeModified?: boolean;
    [key: string]: any;
  };
  _links: GenericLinks;
  _expandable?: {
    content?: string;
    additionalProperties?: string;
  };
  [key: string]: any;
};
export type ContentPropertyArray = {
  results: ContentProperty[];
  start: number;
  limit: number;
  size: number;
  _links: GenericLinks;
};
export type ContentPropertyCreate = {
  key: string;
  value:
    | string[]
    | boolean
    | {
        [key: string]: any;
      }
    | string;
  [key: string]: any;
};
export type ContentPropertyUpdate = {
  value:
    | string[]
    | boolean
    | {
        [key: string]: any;
      }
    | string;
  version: {
    number: number | string;
    minorEdit?: boolean;
    [key: string]: any;
  } | null;
  [key: string]: any;
};
export type ContentPropertyCreateNoKey = {
  value:
    | string[]
    | boolean
    | {
        [key: string]: any;
      }
    | string;
  [key: string]: any;
};
export type ContentRestrictionArray = {
  results: ContentRestriction[];
  start: number;
  limit: number;
  size: number;
  restrictionsHash: string;
  _links: GenericLinks;
};
export type ContentRestrictionUpdate = {
  operation:
    | "administer"
    | "copy"
    | "create"
    | "delete"
    | "export"
    | "move"
    | "purge"
    | "purge_version"
    | "read"
    | "restore"
    | "update"
    | "use";
  restrictions: {
    group?: {
      type: "group";
      name: string;
    }[];
    user?: User[] | UserArray;
  };
  content?: Content;
};
export type ContentRestrictionAddOrUpdateArray =
  | {
      results: ContentRestrictionUpdate[];
      start?: number;
      limit?: number;
      size?: number;
      restrictionsHash?: string;
      _links?: GenericLinks;
    }
  | ContentRestrictionUpdate[];
export type ContentState = {
  id: number;
  name: string;
  color: string;
};
export type ContentStateResponse = {
  contentState?: ContentState;
  lastUpdated?: string;
};
export type ContentStateRestInput = {
  name?: string;
  color?: string;
  id?: number;
};
export type AvailableContentStates = {
  spaceContentStates: ContentState[];
  customContentStates: ContentState[];
};
export type VersionArray = {
  results: Version[];
  start: number;
  limit: number;
  size: number;
  _links: GenericLinks;
};
export type VersionRestore = {
  operationKey: "restore";
  params: {
    versionNumber: number;
    message: string;
    restoreTitle?: boolean;
  };
};
export type Task = {
  globalId: number;
  id: number;
  contentId: number;
  status: string;
  title?: string;
  description?: string;
  body?: string;
  creator: string;
  assignee?: string;
  completeUser?: string;
  createDate: number;
  dueDate?: number;
  updateDate?: number;
  completeDate?: number;
  _links?: GenericLinks;
};
export type TaskPageResponse = {
  results: Task[];
  start: number;
  limit: number;
  size: number;
};
export type TaskStatusUpdate = {
  status: "complete" | "incomplete";
};
export type LabeledContentType =
  | "page"
  | "blogpost"
  | "attachment"
  | "page_template";
export type LabeledContent = {
  contentType: LabeledContentType;
  contentId: number;
  title: string;
};
export type LabeledContentPageResponse = {
  results: LabeledContent[];
  start?: number;
  limit?: number;
  size: number;
};
export type LabelDetails = {
  label: Label;
  associatedContents?: LabeledContentPageResponse;
};
export type GroupArrayWithLinks = {
  results: Group[];
  start: number;
  limit: number;
  size: number;
  totalSize?: number;
  _links: GenericLinks;
};
export type GroupName = {
  name: string;
};
export type AccountId = {
  accountId: string;
};
export type LongTaskStatus = {
  id: string;
  name: {
    key: string;
    args: {}[];
  };
  elapsedTime: number;
  percentageComplete: number;
  successful: boolean;
  finished: boolean;
  messages: Message[];
  status?: string;
  errors?: Message[];
  additionalDetails?: {
    destinationId?: string;
    destinationUrl?: string;
    totalPageNeedToCopy?: number;
    additionalProperties?: string;
  };
};
export type LongTaskStatusArray = {
  results: LongTaskStatus[];
  start: number;
  limit: number;
  size: number;
  _links: GenericLinks;
};
export type LongTaskStatusWithLinks = {
  id: string;
  name: {
    key: string;
    args: {}[];
  };
  elapsedTime: number;
  percentageComplete: number;
  successful: boolean;
  finished: boolean;
  messages: Message[];
  _links: GenericLinks;
  status?: string;
  errors?: Message[];
  additionalDetails?: {
    destinationId?: string | null;
    destinationUrl?: string;
    totalPageNeedToCopy?: number;
    additionalProperties?: string;
  };
};
export type RelationData = {
  createdBy?: User;
  createdDate?: string;
  friendlyCreatedDate?: string;
};
export type Relation = {
  name: string;
  relationData?: RelationData;
  source?: Content | User | Space;
  target?: Content | User | Space;
  _expandable?: {
    relationData?: string;
    source?: string;
    target?: string;
  };
  _links: GenericLinks;
};
export type RelationArray = {
  results: Relation[];
  start: number;
  limit: number;
  size: number;
  _links: GenericLinks;
};
export type ContainerSummary = {
  title: string;
  displayUrl: string;
};
export type Breadcrumb = {
  label: string;
  url: string;
  separator: string;
};
export type SearchResult = {
  content?: Content;
  user?: User;
  space?: Space;
  title: string;
  excerpt: string;
  url: string;
  resultParentContainer?: ContainerSummary;
  resultGlobalContainer?: ContainerSummary;
  breadcrumbs: Breadcrumb[];
  entityType: string;
  iconCssClass: string;
  lastModified: string;
  friendlyLastModified?: string;
  score?: number;
};
export type SearchPageResponseSearchResult = {
  results: SearchResult[];
  start: number;
  limit: number;
  size: number;
  totalSize: number;
  cqlQuery: string;
  searchDuration: number;
  archivedResultCount?: number;
  _links: GenericLinks;
};
export type LookAndFeelSettings = {
  selected: "global" | "custom";
  global: LookAndFeel;
  theme?: LookAndFeel;
  custom: LookAndFeel;
};
export type LookAndFeelSelection = {
  spaceKey: string;
  lookAndFeelType: "global" | "custom" | "theme";
};
export type LookAndFeelWithLinks = LookAndFeel & {
  _links?: GenericLinks;
};
export type SystemInfoEntity = {
  cloudId: string;
  commitHash: string;
  baseUrl?: string;
  edition?: string;
  siteTitle?: string;
  defaultLocale?: string;
  defaultTimeZone?: string;
} | null;
export type ThemeNoLinks = {
  themeKey: string;
  name?: string;
  description?: string;
  icon?: Icon;
};
export type ThemeArray = {
  results: ThemeNoLinks[];
  start: number;
  limit: number;
  size: number;
  _links: GenericLinks;
};
export type SpaceArray = {
  results: Space[];
  start: number;
  limit: number;
  size: number;
  _links: GenericLinks;
};
export type SpaceDescriptionCreate = {
  plain: {
    value?: string;
    representation?: string;
    [key: string]: any;
  };
} | null;
export type GroupCreate = {
  type: "group";
  name: string;
  [key: string]: any;
};
export type SpacePermissionCreate = {
  subjects?: {
    user?: {
      results: User[];
      size: number;
    };
    group?: {
      results: GroupCreate[];
      size: number;
    };
  };
  operation: OperationCheckResult;
  anonymousAccess: boolean;
  unlicensedAccess: boolean;
  [key: string]: any;
};
export type SpaceCreate = {
  key: string;
  name: string;
  description?: SpaceDescriptionCreate;
  permissions?: SpacePermissionCreate[] | null;
  [key: string]: any;
};
export type SpaceUpdate = {
  name?: string | null;
  description?: SpaceDescriptionCreate;
  homepage?: object | null;
  type?: string;
  status?: string | null;
  [key: string]: any;
};
export type PermissionSubject = {
  type: "user" | "group";
  identifier: string;
};
export type SpacePermissionV2 = {
  id: number;
  subject: PermissionSubject;
  operation: {
    key:
      | "administer"
      | "archive"
      | "copy"
      | "create"
      | "delete"
      | "export"
      | "move"
      | "purge"
      | "purge_version"
      | "read"
      | "restore"
      | "restrict_content"
      | "update"
      | "use";
    target: "page" | "blogpost" | "comment" | "attachment" | "space";
  };
  _links?: GenericLinks;
};
export type SpacePermissionRequest = {
  subject: PermissionSubject;
  operation: {
    key:
      | "administer"
      | "archive"
      | "copy"
      | "create"
      | "delete"
      | "export"
      | "move"
      | "purge"
      | "purge_version"
      | "read"
      | "restore"
      | "restrict_content"
      | "update"
      | "use";
    target: "page" | "blogpost" | "comment" | "attachment" | "space";
  };
  _links?: GenericLinks;
  [key: string]: any;
};
export type SpacePermissionCustomContent = {
  subject: PermissionSubject;
  operations: {
    key: "read" | "create" | "delete";
    target: string;
    access: boolean;
  }[];
};
export type SpaceProperty = {
  id: string;
  key: string;
  value:
    | string[]
    | boolean
    | {
        [key: string]: any;
      }
    | string;
  version?: Version;
  space?: Space;
  _links?: GenericLinks;
  _expandable: {
    version?: string;
    space?: string;
  };
};
export type SpacePropertyArray = {
  results: SpaceProperty[];
  start: number;
  limit: number;
  size: number;
  _links: GenericLinks;
};
export type PropertyValue =
  | string[]
  | boolean
  | {
      [key: string]: any;
    }
  | string;
export type SpacePropertyCreate = {
  key: string;
  value: PropertyValue;
  space?: {
    key?: string;
    [key: string]: any;
  };
};
export type SpacePropertyUpdate = {
  key?: string;
  value:
    | string[]
    | boolean
    | {
        [key: string]: any;
      }
    | string;
  version: Version;
  space?: {
    key?: string;
    [key: string]: any;
  };
};
export type SpacePropertyCreateNoKey = {
  value: PropertyValue;
};
export type SpaceSettingsUpdate = {
  routeOverrideEnabled?: boolean;
};
export type ContentStateSettings = {
  contentStatesAllowed: boolean;
  customContentStatesAllowed: boolean;
  spaceContentStatesAllowed: boolean;
  spaceContentStates?: ContentState[];
};
export type ThemeUpdate = {
  themeKey: string;
};
export type ContentTemplateBody = {
  view?: ContentBody;
  export_view?: ContentBody;
  styled_view?: ContentBody;
  storage?: ContentBody;
  editor?: ContentBody;
  editor2?: ContentBody;
  wiki?: ContentBody;
  atlas_doc_format?: ContentBody;
  anonymous_export_view?: ContentBody;
};
export type ContentTemplate = {
  templateId: string;
  originalTemplate?: {
    pluginKey?: string;
    moduleKey?: string;
  };
  referencingBlueprint?: string;
  name: string;
  description: string;
  space?: {
    [key: string]: any;
  };
  labels: Label[];
  templateType: string;
  editorVersion?: string;
  body?: ContentTemplateBody;
  _expandable?: {
    body?: string;
  };
  _links: GenericLinks;
};
export type ContentTemplateBodyCreate = {
  view?: ContentBodyCreate;
  export_view?: ContentBodyCreate;
  styled_view?: ContentBodyCreate;
  storage?: ContentBodyCreate;
  editor?: ContentBodyCreate;
  editor2?: ContentBodyCreate;
  wiki?: ContentBodyCreate;
  atlas_doc_format?: ContentBodyCreate;
  anonymous_export_view?: ContentBodyCreate;
};
export type ContentTemplateUpdate = {
  templateId: string;
  name: string;
  templateType: "page";
  body: ContentTemplateBodyCreate;
  description?: string;
  labels?: Label[];
  space?: {
    key: string;
    [key: string]: any;
  } | null;
  [key: string]: any;
};
export type ContentTemplateCreate = {
  name: string;
  templateType: string;
  body: ContentTemplateBodyCreate;
  description?: string;
  labels?: Label[];
  space?: {
    key: string;
    [key: string]: any;
  } | null;
  [key: string]: any;
};
export type BlueprintTemplate = {
  templateId: string;
  originalTemplate: {
    pluginKey: string;
    moduleKey: string;
  };
  referencingBlueprint: string;
  name: string;
  description: string;
  space?: {
    [key: string]: any;
  };
  labels: Label[];
  templateType: string;
  editorVersion?: string;
  body?: ContentTemplateBody;
  _expandable?: {
    body?: string;
  };
  _links: GenericLinks;
};
export type BlueprintTemplateArray = {
  results: BlueprintTemplate[];
  start: number;
  limit: number;
  size: number;
  _links: GenericLinks;
};
export type ContentTemplateArray = {
  results: ContentTemplate[];
  start: number;
  limit: number;
  size: number;
  _links: GenericLinks;
};
export type UserAnonymous = {
  type: string;
  profilePicture: Icon;
  displayName: string;
  operations?: OperationCheckResult[];
  isExternalCollaborator?: boolean;
  _expandable?: {
    operations?: string;
  };
  _links: GenericLinks;
};
export type BulkUserLookup = {
  type: "known" | "unknown" | "anonymous" | "user";
  username?: GenericUserName;
  userKey?: GenericUserKey;
  accountId: GenericAccountId;
  accountType: string;
  email: string;
  publicName: string;
  profilePicture: Icon;
  displayName: string;
  timeZone?: string | null;
  isExternalCollaborator?: boolean;
  operations?: OperationCheckResult[];
  details?: UserDetails;
  personalSpace?: Space;
  _expandable: {
    operations?: string;
    details?: string;
    personalSpace?: string;
  };
  _links: GenericLinks;
};
export type BulkUserLookupArray = {
  results: BulkUserLookup[];
  start: number;
  limit: number;
  size: number;
  _links: GenericLinks;
};
export type UserWatch = {
  watching: boolean;
};
export type AccountIdEmailRecord = {
  accountId: string;
  email: string;
};
export type AccountIdEmailRecordArray = AccountIdEmailRecord[];
export type MigratedUser = {
  username?: GenericUserName;
  key?: GenericUserKey;
  accountId?: GenericAccountId;
};
export type MigratedUserArray = {
  results: MigratedUser[];
  start: number;
  limit: number;
  size: number;
  _links: GenericLinks;
};
export type ConnectModule = object;
export type ConnectModules = {
  modules: ConnectModule[];
};
export type DynamicModulesErrorMessage = {
  message: string;
};
export type UserPropertyKeyArray = {
  results: {
    key?: string;
  }[];
  start?: number;
  limit?: number;
  size?: number;
  _links?: GenericLinks;
};
export type UserProperty = {
  key: string;
  value: {
    [key: string]: any;
  };
  id: string;
  lastModifiedDate: string;
  createdDate: string;
  _links?: GenericLinks;
};
export type UserPropertyUpdate = {
  value: {
    [key: string]: any;
  };
};
export type UserPropertyCreate = {
  value: {
    [key: string]: any;
  };
};

var d=Object.defineProperty;var _=(E,S)=>d(E,"name",{value:S,configurable:!0});import{j as o,k as t}from"./iframe-56297f43.js";import{m as N}from"./make-decorator-7d6ad390.js";var R;(function(E){E.CHANNEL_CREATED="channelCreated",E.CONFIG_ERROR="configError",E.STORY_INDEX_INVALIDATED="storyIndexInvalidated",E.STORY_SPECIFIED="storySpecified",E.SET_STORIES="setStories",E.SET_CURRENT_STORY="setCurrentStory",E.CURRENT_STORY_WAS_SET="currentStoryWasSet",E.FORCE_RE_RENDER="forceReRender",E.FORCE_REMOUNT="forceRemount",E.PRELOAD_STORIES="preloadStories",E.STORY_PREPARED="storyPrepared",E.STORY_CHANGED="storyChanged",E.STORY_UNCHANGED="storyUnchanged",E.STORY_RENDERED="storyRendered",E.STORY_MISSING="storyMissing",E.STORY_ERRORED="storyErrored",E.STORY_THREW_EXCEPTION="storyThrewException",E.STORY_RENDER_PHASE_CHANGED="storyRenderPhaseChanged",E.UPDATE_STORY_ARGS="updateStoryArgs",E.STORY_ARGS_UPDATED="storyArgsUpdated",E.RESET_STORY_ARGS="resetStoryArgs",E.SET_GLOBALS="setGlobals",E.UPDATE_GLOBALS="updateGlobals",E.GLOBALS_UPDATED="globalsUpdated",E.REGISTER_SUBSCRIPTION="registerSubscription",E.PREVIEW_KEYDOWN="previewKeydown",E.SELECT_STORY="selectStory",E.STORIES_COLLAPSE_ALL="storiesCollapseAll",E.STORIES_EXPAND_ALL="storiesExpandAll",E.DOCS_RENDERED="docsRendered",E.SHARED_STATE_CHANGED="sharedStateChanged",E.SHARED_STATE_SET="sharedStateSet",E.NAVIGATE_URL="navigateUrl",E.UPDATE_QUERY_PARAMS="updateQueryParams"})(R||(R={}));R.CHANNEL_CREATED;R.CONFIG_ERROR;R.STORY_INDEX_INVALIDATED;R.STORY_SPECIFIED;R.SET_STORIES;R.SET_CURRENT_STORY;R.CURRENT_STORY_WAS_SET;R.FORCE_RE_RENDER;R.FORCE_REMOUNT;R.STORY_PREPARED;var C=R.STORY_CHANGED;R.STORY_UNCHANGED;R.PRELOAD_STORIES;R.STORY_RENDERED;R.STORY_MISSING;R.STORY_ERRORED;R.STORY_THREW_EXCEPTION;R.STORY_RENDER_PHASE_CHANGED;R.UPDATE_STORY_ARGS;R.STORY_ARGS_UPDATED;R.RESET_STORY_ARGS;R.SET_GLOBALS;R.UPDATE_GLOBALS;R.GLOBALS_UPDATED;R.REGISTER_SUBSCRIPTION;R.PREVIEW_KEYDOWN;var L=R.SELECT_STORY;R.STORIES_COLLAPSE_ALL;R.STORIES_EXPAND_ALL;R.DOCS_RENDERED;R.SHARED_STATE_CHANGED;R.SHARED_STATE_SET;R.NAVIGATE_URL;R.UPDATE_QUERY_PARAMS;var n="links",e=o.document,l=o.HTMLElement,Y=_(function(S){return t.getChannel().emit(L,S)},"navigate"),D=_(function(S){var r=S.target;if(r instanceof l){var i=r,A=i.dataset,a=A.sbKind,O=A.sbStory;(a||O)&&(S.preventDefault(),Y({kind:a,story:O}))}},"linksListener"),T=!1,I=_(function(){T||(T=!0,e.addEventListener("click",D))},"on"),P=_(function(){T&&(T=!1,e.removeEventListener("click",D))},"off"),s=N({name:"withLinks",parameterName:n,wrapper:_(function(S,r){return I(),t.getChannel().once(C,P),S(r)},"wrapper")});module&&module.hot&&module.hot.decline&&module.hot.decline();var f=[s];export{f as decorators};
//# sourceMappingURL=preview-f8ae4a3a.js.map
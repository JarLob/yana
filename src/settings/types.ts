export enum SideBarItemAction {
  OpenInCurrentTab = 'open',
  OpenInNewTab = 'newtab',
  ToggleExpansion = 'toggle',
}

export interface SettingsObject {
  sidebarNoteItemNameAction: SideBarItemAction,
  sidebarNoteItemBackgroundAction: SideBarItemAction,
  sidebarNoteItemMiddleClickAction: SideBarItemAction,
  sidebarMediaItemNameAction: SideBarItemAction,
  sidebarMediaItemBackgroundAction: SideBarItemAction,
  sidebarMediaItemMiddleClickAction: SideBarItemAction,
  sidebarCollectionItemNameAction: SideBarItemAction,
  sidebarCollectionItemBackgroundAction: SideBarItemAction,
  sidebarCollectionItemMiddleClickAction: SideBarItemAction,
  sidebarNumberOfUntruncatedItems: number,
  sidebarOffsetPerLevel: number,
  noteItemSaveDelay: number,
  noteItemMaximumSaveInterval: number,
  autoBackupActive: boolean,
  autoBackupIncludeMedia: boolean,
  autoBackupCount: number,
  autoBackupInterval: number,
  autoBackupLocation: string,
  autoUpdateAppActive: boolean,
  autoUpdateAppBackupActive: boolean,
  editorMonacoMinimap: boolean,
  editorMonacoTheme: string,
  editorMonacoRenderControlChars: boolean,
  editorMonacoRenderWhitespace: string,
  editorMonacoRuler: number | undefined,
  editorMonacoTabSize: number,
  editorMonacoWordWrap: string,
  editorAtlassianAdvancedTables: boolean,
  devToolsOpen: boolean,
}
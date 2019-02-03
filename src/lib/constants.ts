/* eslint-disable @typescript-eslint/camelcase */

export enum Platform {
  AIX = 'aix',
  Android = 'android',
  Cygwin = 'cygwin',
  FreeBSD = 'freebsd',
  Linux = 'linux',
  macOS = 'darwin',
  OpenBSD = 'openbsd',
  SunOS = 'sunos',
  Windows = 'win32',
}

/**
 * The KNOWNFOLDERID constants represent GUIDs that identify standard folders
 * registered with the system as Known Folders. These folders are installed with
 * Windows Vista and later operating systems, and a computer will have only
 * folders appropriate to it installed.
 * @see https://docs.microsoft.com/en-us/windows/desktop/shell/knownfolderid
 */
export enum KNOWNFOLDERID {
  FOLDERID_AccountPictures = '008ca0b1-55b4-4c56-b8a8-4de4b299d3be',
  FOLDERID_AddNewPrograms = 'de61d971-5ebc-4f02-a3a9-6c82895e5c04',
  /**
   * The file system directory that is used to store administrative tools for an
   * individual user. The MMC will save customized consoles to this directory,
   * and it will roam with the user.
   */
  FOLDERID_AdminTools = '724EF170-A42D-4FEF-9F26-B60E846FBA4F',
  FOLDERID_AppDataDesktop = 'B2C5E279-7ADD-439F-B28C-C41FE1BBF672',
  FOLDERID_AppDataDocuments = '7BE16610-1F7F-44AC-BFF0-83E15F2FFCA1',
  FOLDERID_AppDataFavorites = '7CFBEFBC-DE1F-45AA-B843-A542AC536CC9',
  FOLDERID_AppDataProgramData = '559D40A3-A036-40FA-AF61-84CB430A4D34',
  FOLDERID_ApplicationShortcuts = 'A3918781-E5F2-4890-B3D9-A7E54332328C',
  FOLDERID_AppUpdates = 'a305ce99-f527-492b-8b1a-7e76fa98d6e4',
  FOLDERID_CameraRoll = 'AB5FB87B-7CE2-4F83-915D-550846C9537B',
  /**
   * The file system directory that acts as a staging area for files waiting to
   * be written to a CD. A typical path is
   * `%USERPROFILE%\Local Settings\Application Data\Microsoft\CD Burning`.
   */
  FOLDERID_CDBurning = '9E52AB10-F80D-49DF-ACB8-4330F5687855',
  FOLDERID_ChangeRemovePrograms = 'df7266ac-9274-4867-8d55-3bd661de872d',
  /**
   * The file system directory that contains administrative tools for all users
   * of the computer.
   */
  FOLDERID_CommonAdminTools = 'D0384E7D-BAC3-4797-8F14-CBA229B392B5',
  /**
   * This value is recognized in Windows Vista for backward compatibility, but
   * the folder itself is no longer used.
   */
  FOLDERID_CommonOEMLinks = 'C1BAE2D0-10DF-4334-BEDD-7AA20B227A9D',
  /**
   * The file system directory that contains the directories for the common
   * program groups that appear on the Start menu for all users. A typical path
   * is `%ALLUSERSPROFILE%\Start Menu\Programs`.
   */
  FOLDERID_CommonPrograms = '0139D44E-6AFE-49F2-8690-3DAFCAE6FFB8',
  /**
   * The file system directory that contains the programs and folders that
   * appear on the Start menu for all users. A typical path is
   * `%ALLUSERSPROFILE%\Start Menu`.
   */
  FOLDERID_CommonStartMenu = 'A4115719-D62E-491D-AA7C-E74B8BE3B067',
  /**
   * The file system directory that contains the programs that appear in the
   * Startup folder for all users. A typical path is
   * `%ALLUSERSPROFILE%\Start Menu\Programs\Startup`.
   */
  FOLDERID_CommonStartup = '82A5EA35-D9CD-47C5-9629-E15D2F714E6E',
  /**
   * The file system directory that contains the templates that are available to
   * all users. A typical path is `%ALLUSERSPROFILE%\Templates`.
   */
  FOLDERID_CommonTemplates = 'B94237E7-57AC-4347-9151-B08C6C32D1F7',
  /**
   * The virtual folder that represents My Computer, containing everything on
   * the local computer: storage devices, printers, and Control Panel. The
   * folder can also contain mapped network drives.
   */
  FOLDERID_ComputerFolder = '0AC0837C-BBF8-452A-850D-79D08E667CA7',
  FOLDERID_ConflictFolder = '4bfefb45-347d-4006-a5be-ac0cb0567192',
  /**
   * The virtual folder that represents Network Connections, that contains
   * network and dial-up connections.
   */
  FOLDERID_ConnectionsFolder = '6F0CD92B-2E97-45D1-88FF-B0D186B8DEDD',
  FOLDERID_Contacts = '56784854-C6CB-462b-8169-88E350ACB882',
  /**
   * The virtual folder that contains icons for the Control Panel applications.
   */
  FOLDERID_ControlPanelFolder = '82A74AEB-AEB4-465C-A014-D097EE346D63',
  /**
   * The file system directory that serves as a common repository for Internet
   * cookies. A typical path is `%USERPROFILE%\Cookies`.
   */
  FOLDERID_Cookies = '2B0F765D-C0E9-4171-908E-08A611B84FF6',
  /**
   * The virtual folder that represents the Windows desktop, the root of the
   * namespace.
   */
  FOLDERID_Desktop = 'B4BFCC3A-DB2C-424C-B029-7FE99A87C641',
  FOLDERID_DeviceMetadataStore = '5CE4A5E9-E4EB-479D-B89F-130C02886155',
  /**
   * The virtual folder that represents the My Documents desktop item.
   */
  FOLDERID_Documents = 'FDD39AD0-238F-46AF-ADB4-6C85480369C7',
  FOLDERID_DocumentsLibrary = '7B0DB17D-9CD2-4A93-9733-46CC89022E7C',
  FOLDERID_Downloads = '374DE290-123F-4565-9164-39C4925E467B',
  /**
   * The file system directory that serves as a common repository for the user's
   * favorite items. A typical path is `%USERPROFILE%\Favorites`.
   */
  FOLDERID_Favorites = '1777F761-68AD-4D8A-87BD-30B759FA33DD',
  /**
   * A virtual folder that contains fonts. A typical path is %windir%\Fonts.
   */
  FOLDERID_Fonts = 'FD228CB7-AE11-4AE3-864C-16F3910AB8FE',
  FOLDERID_GameTasks = '054FAE61-4DD8-4787-80B6-090220C4B700',
  /**
   * The file system directory that serves as a common repository for Internet
   * history items.
   */
  FOLDERID_History = 'D9DC8A3B-B784-432E-A781-5A1130A75963',
  FOLDERID_HomeGroup = '52528A6B-B9E3-4ADD-B60D-588C2DBA842D',
  FOLDERID_HomeGroupCurrentUser = '9B74B6A3-0DFD-4f11-9E78-5F7800F2E772',
  FOLDERID_ImplicitAppShortcuts = 'BCB5256F-79F6-4CEE-B725-DC34E402FD46',
  /**
   *  The file system directory that serves as a common repository for temporary
   * Internet files. A typical path is
   * `%USERPROFILE%\Local Settings\Temporary Internet Files`.
   */
  FOLDERID_InternetCache = '352481E8-33BE-4251-BA85-6007CAEDCF9D',
  /**
   * A virtual folder for Internet Explorer.
   */
  FOLDERID_InternetFolder = '4D9F7874-4E0C-4904-967B-40B0D20C3E4B',
  FOLDERID_Libraries = '1B3EA5DC-B587-4786-B4EF-BD1DC332AEAE',
  FOLDERID_Links = 'bfb9d5e0-c6a9-404c-b2b2-ae6db6af4968',
  /**
   * The file system directory that serves as a data repository for local
   * (nonroaming) applications. A typical path is
   * `%USERPROFILE%\Local Settings\Application Data`.
   */
  FOLDERID_LocalAppData = 'F1B32785-6FBA-4FCF-9D55-7B8E7F157091',
  FOLDERID_LocalAppDataLow = 'A520A1A4-1780-4FF6-BD18-167343C5AF16',
  /**
   * Windows Vista. The file system directory that contains resource data. A
   * typical path is `%windir%\Resources`.
   */
  FOLDERID_LocalizedResourcesDir = '2A00375E-224C-49DE-B8D1-440DF7EF3DDC',
  /**
   * The file system directory that serves as a common repository for music
   * files. A typical path is
   * `%USERPROFILE%\My Documents\My Music`.
   */
  FOLDERID_Music = '4BD8D571-6D19-48D3-BE97-422220080E43',
  FOLDERID_MusicLibrary = '2112AB0A-C86A-4FFE-A368-0DE96E47012E',
  /**
   * A file system directory that contains the link objects that may exist in
   * the My Network Places virtual folder. It is not the same as
   * `FOLDERID_NetworkFolder`, which represents the network namespace root. A
   * typical path is `%USERPROFILE%\NetHood`.
   */
  FOLDERID_NetHood = 'C5ABBF53-E17F-4121-8900-86626FC2C973',
  /**
   * A virtual folder that represents Network Neighborhood, the root of the
   * network namespace hierarchy.
   */
  FOLDERID_NetworkFolder = 'D20BEEC4-5CA8-4905-AE3B-BF251EA09B53',
  FOLDERID_Objects3D = '31C0DD25-9439-4F12-BF41-7FF4EDA38722',
  FOLDERID_OriginalImages = '2C36C0AA-5812-4b87-BFD0-4CD0DFB19B39',
  FOLDERID_PhotoAlbums = '69D2CF90-FC33-4FB7-9A0C-EBB0F0FCB43C',
  FOLDERID_PicturesLibrary = 'A990AE9F-A03B-4E80-94BC-9912D7504104',
  /**
   * The file system directory that serves as a common repository for image
   * files. A typical path is `%USERPROFILE%\My Documents\My Pictures`.
   */
  FOLDERID_Pictures = '33E28130-4E1E-4676-835A-98395C3BC3BB',
  FOLDERID_Playlists = 'DE92C1C7-837F-4F69-A3BB-86E631204A23',
  /**
   * The virtual folder that contains installed printers.
   */
  FOLDERID_PrintersFolder = '76FC4E2D-D6AD-4519-A663-37BD56068185',
  /**
   * The file system directory that contains the link objects that can exist in
   * the Printers virtual folder. A typical path is `%USERPROFILE%\PrintHood`.
   */
  FOLDERID_PrintHood = '9274BD8D-CFD1-41C3-B35E-B13F55A758F4',
  /**
   * The user's profile folder. A typical path is `C:\Users\username`.
   * Applications should not create files or folders at this level; they should
   * put their data under the locations referred to by CSIDL_APPDATA or
   * CSIDL_LOCAL_APPDATA. However, if you are creating a new Known Folder the
   * profile root referred to by CSIDL_PROFILE is appropriate.
   */
  FOLDERID_Profile = '5E6C858F-0E22-4760-9AFE-EA3317B67173',
  /**
   * The file system directory that contains application data for all users. A
   * typical path is `%ALLUSERSPROFILE%\Application Data`. This folder is used
   * for application data that is not user specific. For example, an application
   * can store a spell-check dictionary, a database of clip art, or a log file
   * in the CSIDL_COMMON_APPDATA folder. This information will not roam and is
   * available to anyone using the computer.
   */
  FOLDERID_ProgramData = '62AB5D82-FDC1-4DC3-A9DD-070D1D495D97',
  /**
   * The Program Files folder. A typical path is `C:\Program Files`.
   */
  FOLDERID_ProgramFiles = '905e63b6-c1bf-494e-b29c-65b732d3d21a',
  FOLDERID_ProgramFilesX64 = '6D809377-6AF0-444b-8957-A3773F02200E',
  FOLDERID_ProgramFilesX86 = '7C5A40EF-A0FB-4BFC-874A-C0F2E0B9FA8E',
  /**
   * A folder for components that are shared across applications. A typical
   * path is `%PROGRAMFILES%\Common`. Valid only for Windows XP.
   */
  FOLDERID_ProgramFilesCommon = 'F7F1ED05-9F6D-47A2-AAAE-29D317C6F066',
  FOLDERID_ProgramFilesCommonX64 = '6365D5A7-0F0D-45E5-87F6-0DA56B6A4F7D',
  FOLDERID_ProgramFilesCommonX86 = 'DE974D24-D9C6-4D3E-BF91-F4455120B917',
  /**
   * The file system directory that contains the user's program groups (which
   * are themselves file system directories). A typical path is
   * `%USERPROFILE%\Start Menu\Programs`.
   */
  FOLDERID_Programs = 'A77F5D77-2E2B-44C3-A6A2-ABA601054A51',
  FOLDERID_Public = 'DFDF76A2-C82A-4D63-906A-5644AC457385',
  /**
   * The file system directory that contains files and folders that appear on
   * the desktop for all users. A typical path is `%ALLUSERSPROFILE%\Desktop`.
   */
  FOLDERID_PublicDesktop = 'C4AA340D-F20F-4863-AFEF-F87EF2E6BA25',
  /**
   * The file system directory that contains documents that are common to all
   * users. A typical path is `%ALLUSERSPROFILE%\Documents`.
   */
  FOLDERID_PublicDocuments = 'ED4824AF-DCE4-45A8-81E2-FC7965083634',
  FOLDERID_PublicDownloads = '3D644C9B-1FB8-4f30-9B45-F670235F79C0',
  FOLDERID_PublicGameTasks = 'DEBF2536-E1A8-4c59-B6A2-414586476AEA',
  FOLDERID_PublicLibraries = '48DAF80B-E6CF-4F4E-B800-0E69D84EE384',
  /**
   * The file system directory that serves as a repository for music files
   * common to all users. A typical path is
   * `%ALLUSERSPROFILE%\Documents\My Music`.
   */
  FOLDERID_PublicMusic = '3214FAB5-9757-4298-BB61-92A9DEAA44FF',
  /**
   * The file system directory that serves as a repository for image files
   * common to all users. A typical path is
   * `%ALLUSERSPROFILE%\Documents\My Pictures`.
   */
  FOLDERID_PublicPictures = 'B6EBFB86-6907-413C-9AF7-4FC2ABF07CC5',
  FOLDERID_PublicRingtones = 'E555AB60-153B-4D17-9F04-A5FE99FC15EC',
  FOLDERID_PublicUserTiles = '0482af6c-08f1-4c34-8c90-e17ec98b1e17',
  /**
   * The file system directory that serves as a repository for video files
   * common to all users. A typical path i
   * ` %ALLUSERSPROFILE%\Documents\My Videos`.
   */
  FOLDERID_PublicVideos = '2400183A-6185-49FB-A2D8-4A392A602BA3',
  FOLDERID_QuickLaunch = '52a4f021-7b75-48a9-9f6b-4b87a210bc8f',
  /**
   * The file system directory that contains shortcuts to the user's most
   * recently used documents. A typical path is
   * `%USERPROFILE%\My Recent Documents`. To create a shortcut in this folder,
   * use `SHAddToRecentDocs`. In addition to creating the shortcut, this
   * function updates the Shell's list of recent documents and adds the shortcut
   * to the My Recent Documents submenu of the Start menu.
   */
  FOLDERID_Recent = 'AE50C081-EBD2-438A-8655-8A092E34987A',
  FOLDERID_RecordedTVLibrary = '1A6FDBA2-F42D-4358-A798-B74D745926C5',
  /**
   * The virtual folder that contains the objects in the user's Recycle Bin.
   */
  FOLDERID_RecycleBinFolder = 'B7534046-3ECB-4C18-BE4E-64CD4CB7D6AC',
  /**
   * Windows Vista. The file system directory that contains resource data. A
   * typical path is `%windir%\Resources`.
   */
  FOLDERID_ResourceDir = '8AD10C31-2ADB-4296-A8F7-E4701232C972',
  FOLDERID_Ringtones = 'C870044B-F49E-4126-A9C3-B52A1FF411E8',
  /**
   * The file system directory that serves as a common repository for
   * application-specific data. A typical path is
   * `%USERPROFILE%\Application Data`.
   */
  FOLDERID_RoamingAppData = '3EB685DB-65F9-4CF6-A03A-E3EF65729F3D',
  FOLDERID_RoamedTileImages = 'AAA8D5A5-F1D6-4259-BAA8-78E7EF60835E',
  FOLDERID_RoamingTiles = '00BCFC5A-ED94-4e48-96A1-3F6217F21990',
  FOLDERID_SampleMusic = 'B250C668-F57D-4EE1-A63C-290EE7D1AA1F',
  FOLDERID_SamplePictures = 'C4900540-2379-4C75-844B-64E6FAF8716B',
  FOLDERID_SamplePlaylists = '15CA69B3-30EE-49C1-ACE1-6B5EC372AFB5',
  FOLDERID_SampleVideos = '859EAD94-2E85-48AD-A71A-0969CB56A6CD',
  FOLDERID_SavedGames = '4C5C32FF-BB9D-43b0-B5B4-2D72E54EAAA4',
  FOLDERID_SavedPictures = '3B193882-D3AD-4eab-965A-69829D1FB59F',
  FOLDERID_SavedPicturesLibrary = 'E25B5812-BE88-4bd9-94B0-29233477B6C3',
  FOLDERID_SavedSearches = '7d1d3a04-debb-4115-95cf-2f29da2920da',
  FOLDERID_Screenshots = 'b7bede81-df94-4682-a7d8-57a52620b86f',
  FOLDERID_SEARCH_CSC = 'ee32e446-31ca-4aba-814f-a5ebd2fd6d5e',
  FOLDERID_SearchHistory = '0D4C3DB6-03A3-462F-A0E6-08924C41B5D4',
  FOLDERID_SearchHome = '190337d1-b8ca-4121-a639-6d472d16972a',
  FOLDERID_SEARCH_MAPI = '98ec0e18-2098-4d44-8644-66979315a281',
  FOLDERID_SearchTemplates = '7E636BFE-DFA9-4D5E-B456-D7B39851D8A9',
  /**
   * The file system directory that contains Send To menu items. A typical path
   * is `%USERPROFILE%\SendTo`.
   */
  FOLDERID_SendTo = '8983036C-27C0-404B-8F08-102D10DCFD74',
  FOLDERID_SidebarDefaultParts = '7B396E54-9EC5-4300-BE0A-2482EBAE1A26',
  FOLDERID_SidebarParts = 'A75D362E-50FC-4fb7-AC2C-A8BEAA314493',
  FOLDERID_SkyDrive = 'A52BBA46-E9E1-435f-B3D9-28DAA648C0F6',
  FOLDERID_SkyDriveCameraRoll = '767E6811-49CB-4273-87C2-20F355E1085B',
  FOLDERID_SkyDriveDocuments = '24D89E24-2F19-4534-9DDE-6A6671FBB8FE',
  FOLDERID_SkyDrivePictures = '339719B5-8C47-4894-94C2-D8F77ADD44A6',
  /**
   * The file system directory that contains Start menu items. A typical path
   * is `%USERPROFILE%\Start Menu`.
   */
  FOLDERID_StartMenu = '625B53C3-AB48-4EC1-BA1F-A1EF4146FC19',
  /**
   * The file system directory that corresponds to the user's Startup program
   * group. The system starts these programs whenever the associated user logs
   * on. A typical path is `%USERPROFILE%\Start Menu\Programs\Startup`.
   */
  FOLDERID_Startup = 'B97D20BB-F46A-4C97-BA10-5E3608430854',
  FOLDERID_SyncManagerFolder = '43668BF8-C14E-49B2-97C9-747784D784B7',
  FOLDERID_SyncResultsFolder = '289a9a43-be44-4057-a41b-587a76d7e7f9',
  FOLDERID_SyncSetupFolder = '0F214138-B1D3-4a90-BBA9-27CBC0C5389A',
  /**
   * The Windows System folder. A typical path is `%windir%\System32`.
   */
  FOLDERID_System = '1AC14E77-02E7-4E5D-B744-2EB1AE5198B7',
  /**
   * The Windows System folder. A typical path is `%windir%\System32`.
   */
  FOLDERID_SystemX86 = 'D65231B0-B2F1-4857-A4CE-A8E7C6EA7D27',
  /**
   * The file system directory that serves as a common repository for document
   * templates. A typical path is `%USERPROFILE%\Templates`.
   */
  FOLDERID_Templates = 'A63293E8-664E-48DB-A079-DF759E0509F7',
  FOLDERID_UserPinned = '9E3995AB-1F9C-4F13-B827-48B24B6C7174',
  FOLDERID_UserProfiles = '0762D272-C50A-4BB0-A382-697DCD729B80',
  FOLDERID_UserProgramFiles = '5CD7AEE2-2219-4A67-B85D-6C9CE15660CB',
  FOLDERID_UserProgramFilesCommon = 'BCBD3057-CA5C-4622-B42D-BC56DB0AE516',
  FOLDERID_UsersFiles = 'f3ce0f7c-4901-4acc-8648-d5d44b04ef8f',
  FOLDERID_UsersLibraries = 'A302545D-DEFF-464b-ABE8-61C8648D939B',
  /**
   * The file system directory that serves as a common repository for video
   * files. A typical path is `%USERPROFILE%\My Documents\My Videos`.
   */
  FOLDERID_Videos = '18989B1D-99B5-455B-841C-AB7C74E4DDFC',
  FOLDERID_VideosLibrary = '491E922F-5643-4AF4-A7EB-4E7A138D8174',
  /**
   * The Windows directory or SYSROOT. This corresponds to the `%windir%` or
   * `%SYSTEMROOT%` environment variables. A typical path is `C:\Windows`.
   */
  FOLDERID_Windows = 'F38BF404-1D43-42F2-9305-67DE0B28FC23',
}

export enum CSIDL {
  /**
   * The file system directory that is used to store administrative tools for an
   * individual user. The MMC will save customized consoles to this directory,
   * and it will roam with the user.
   */
  CSIDL_ADMINTOOLS = 'CSIDL_ADMINTOOLS',
  /**
   * The file system directory that corresponds to the user's nonlocalized
   * Startup program group. This value is recognized in Windows Vista for
   * backward compatibility, but the folder itself no longer exists.
   */

  CSIDL_ALTSTARTUP = 'CSIDL_ALTSTARTUP',

  /**
   * The file system directory that serves as a common repository for
   * application-specific data. A typical path is
   * `%USERPROFILE%\Application Data`.
   */
  CSIDL_APPDATA = 'CSIDL_APPDATA',
  /**
   * The virtual folder that contains the objects in the user's Recycle Bin.
   */
  CSIDL_BITBUCKET = 'CSIDL_BITBUCKET',
  /**
   * The file system directory that acts as a staging area for files waiting to
   * be written to a CD. A typical path is
   * `%USERPROFILE%\Local Settings\Application Data\Microsoft\CD Burning`.
   */
  CSIDL_CDBURN_AREA = 'CSIDL_CDBURN_AREA',
  /**
   * The file system directory that contains administrative tools for all users
   * of the computer.
   */
  CSIDL_COMMON_ADMINTOOLS = 'CSIDL_COMMON_ADMINTOOLS',
  /**
   * The file system directory that corresponds to the nonlocalized Startup
   * program group for all users. This value is recognized in Windows Vista for
   * backward compatibility, but the folder itself no longer exists.
   */
  CSIDL_COMMON_ALTSTARTUP = 'CSIDL_COMMON_ALTSTARTUP',
  /**
   * The file system directory that contains application data for all users. A
   * typical path is `%ALLUSERSPROFILE%\Application Data`. This folder is used
   * for application data that is not user specific. For example, an application
   * can store a spell-check dictionary, a database of clip art, or a log file
   * in the `CSIDL_COMMON_APPDATA` folder. This information will not roam and is
   * available to anyone using the computer.
   */
  CSIDL_COMMON_APPDATA = 'CSIDL_COMMON_APPDATA',
  /**
   * The file system directory that contains files and folders that appear on
   * the desktop for all users. A typical path is `%ALLUSERSPROFILE%\Desktop`.
   */
  CSIDL_COMMON_DESKTOPDIRECTORY = 'CSIDL_COMMON_DESKTOPDIRECTORY',
  /**
   * The file system directory that contains documents that are common to all
   * users. A typical path is `%ALLUSERSPROFILE%\Documents`.
   */
  CSIDL_COMMON_DOCUMENTS = 'CSIDL_COMMON_DOCUMENTS',
  /**
   * The file system directory that serves as a common repository for favorite
   * items common to all users.
   */
  CSIDL_COMMON_FAVORITES = 'CSIDL_COMMON_FAVORITES',
  /**
   * The file system directory that serves as a repository for music files
   * common to all users. A typical path is
   * `%ALLUSERSPROFILE%\Documents\My Music`.
   */
  CSIDL_COMMON_MUSIC = 'CSIDL_COMMON_MUSIC',
  /**
   * This value is recognized in Windows Vista for backward compatibility, but
   * the folder itself is no longer used.
   */
  CSIDL_COMMON_OEM_LINKS = 'CSIDL_COMMON_OEM_LINKS',
  /**
   * The file system directory that serves as a repository for image files
   * common to all users. A typical path is
   * `%ALLUSERSPROFILE%\Documents\My Pictures`.
   */
  CSIDL_COMMON_PICTURES = 'CSIDL_COMMON_PICTURES',
  /**
   * The file system directory that contains the directories for the common
   * program groups that appear on the Start menu for all users. A typical path
   * is `%ALLUSERSPROFILE%\Start Menu\Programs`.
   */
  CSIDL_COMMON_PROGRAMS = 'CSIDL_COMMON_PROGRAMS',
  /**
   * The file system directory that contains the programs and folders that
   * appear on the Start menu for all users. A typical path is
   * `%ALLUSERSPROFILE%\Start Menu`.
   */
  CSIDL_COMMON_STARTMENU = 'CSIDL_COMMON_STARTMENU',
  /**
   * The file system directory that contains the programs that appear in the
   * Startup folder for all users. A typical path is
   * `%ALLUSERSPROFILE%\Start Menu\Programs\Startup`.
   */
  CSIDL_COMMON_STARTUP = 'CSIDL_COMMON_STARTUP',
  /**
   * The file system directory that contains the templates that are available to
   * all users. A typical path is `%ALLUSERSPROFILE%\Templates`.
   */
  CSIDL_COMMON_TEMPLATES = 'CSIDL_COMMON_TEMPLATES',
  /**
   * The file system directory that serves as a repository for video files
   * common to all users. A typical path is
   * `%ALLUSERSPROFILE%\Documents\My Videos`.
   */
  CSIDL_COMMON_VIDEO = 'CSIDL_COMMON_VIDEO',
  /**
   * The folder that represents other computers in your workgroup.
   */
  CSIDL_COMPUTERSNEARME = 'CSIDL_COMPUTERSNEARME',
  /**
   * The virtual folder that represents Network Connections, that contains
   * network and dial-up connections.
   */
  CSIDL_CONNECTIONS = 'CSIDL_CONNECTIONS',
  /**
   * The virtual folder that contains icons for the Control Panel applications.
   */
  CSIDL_CONTROLS = 'CSIDL_CONTROLS',
  /**
   * The file system directory that serves as a common repository for Internet
   * cookies. A typical path is `%USERPROFILE%\Cookies`.
   */
  CSIDL_COOKIES = 'CSIDL_COOKIES',
  /**
   * The virtual folder that represents the Windows desktop, the root of the
   * namespace.
   */
  CSIDL_DESKTOP = 'CSIDL_DESKTOP',
  /**
   * The file system directory used to physically store file objects on the
   * desktop (not to be confused with the desktop folder itself). A typical path
   * is `%USERPROFILE%\Desktop`.
   */
  CSIDL_DESKTOPDIRECTORY = 'CSIDL_DESKTOPDIRECTORY',
  /**
   * The virtual folder that represents My Computer, containing everything on
   * the local computer: storage devices, printers, and Control Panel. The
   * folder can also contain mapped network drives.
   */
  CSIDL_DRIVES = 'CSIDL_DRIVES',
  /**
   * The file system directory that serves as a common repository for the user's
   * favorite items. A typical path is `%USERPROFILE%\Favorites`.
   */
  CSIDL_FAVORITES = 'CSIDL_FAVORITES',
  /**
   * A virtual folder that contains fonts. A typical path is `%windir%\Fonts`.
   */
  CSIDL_FONTS = 'CSIDL_FONTS',
  /**
   * The file system directory that serves as a common repository for Internet
   * history items.
   */
  CSIDL_HISTORY = 'CSIDL_HISTORY',
  /**
   * A virtual folder for Internet Explorer.
   */
  CSIDL_INTERNET = 'CSIDL_INTERNET',
  /**
   *  The file system directory that serves as a common repository for temporary
   * Internet files. A typical path is
   * `%USERPROFILE%\Local Settings\Temporary Internet Files`.
   */
  CSIDL_INTERNET_CACHE = 'CSIDL_INTERNET_CACHE',
  /**
   * The file system directory that serves as a data repository for local
   * (nonroaming) applications. A typical path is
   * `%USERPROFILE%\Local Settings\Application Data`.
   */
  CSIDL_LOCAL_APPDATA = 'CSIDL_LOCAL_APPDATA',
  /**
   * The virtual folder that represents the My Documents desktop item. This
   * value is equivalent to CSIDL_PERSONAL.
   */
  CSIDL_MYDOCUMENTS = 'CSIDL_MYDOCUMENTS',
  /**
   * The file system directory that serves as a common repository for music
   * files. A typical path is `%USERPROFILE%\My Documents\My Music`.
   */
  CSIDL_MYMUSIC = 'CSIDL_MYMUSIC',
  /**
   * The file system directory that serves as a common repository for image
   * files. A typical path is `%USERPROFILE%\My Documents\My Pictures`.
   */
  CSIDL_MYPICTURES = 'CSIDL_MYPICTURES',
  /**
   * The file system directory that serves as a common repository for video
   * files. A typical path is `%USERPROFILE%\My Documents\My Videos`.
   */
  CSIDL_MYVIDEO = 'CSIDL_MYVIDEO',
  /**
   * A file system directory that contains the link objects that may exist in
   * the My Network Places virtual folder. It is not the same as
   * `CSIDL_NETWORK`, which represents the network namespace root. A typical
   * path is `%USERPROFILE%\NetHood`.
   */
  CSIDL_NETHOOD = 'CSIDL_NETHOOD',
  /**
   * A virtual folder that represents Network Neighborhood, the root of the
   * network namespace hierarchy.
   */
  CSIDL_NETWORK = 'CSIDL_NETWORK',
  /**
   * The virtual folder that represents the My Documents desktop item. This is
   * equivalent to `CSIDL_MYDOCUMENTS`.
   *
   * Previous to Version 6.0, the file system directory used to physically store
   * a user's common repository of documents. A typical path is
   * `%USERPROFILE%\My Documents`. This should be distinguished from the virtual
   * My Documents folder in the namespace. To access that virtual folder, use
   * `SHGetFolderLocation`, which returns the `ITEMIDLIST` for the virtual
   * location, or refer to the technique described in Managing the File System.
   */
  CSIDL_PERSONAL = 'CSIDL_PERSONAL',
  /**
   * The virtual folder that contains installed printers.
   */
  CSIDL_PRINTERS = 'CSIDL_PRINTERS',
  /**
   * The file system directory that contains the link objects that can exist in
   * the Printers virtual folder. A typical path is `%USERPROFILE%\PrintHood`.
   */
  CSIDL_PRINTHOOD = 'CSIDL_PRINTHOOD',
  /**
   * The user's profile folder. A typical path is `C:\Users\username`.
   * Applications should not create files or folders at this level; they should
   * put their data under the locations referred to by `CSIDL_APPDATA` or
   * `CSIDL_LOCAL_APPDATA`. However, if you are creating a new Known Folder the
   * profile root referred to by CSIDL_PROFILE is appropriate.
   */
  CSIDL_PROFILE = 'CSIDL_PROFILE',
  /**
   * The Program Files folder. A typical path is `C:\Program Files`.
   */
  CSIDL_PROGRAM_FILES = 'CSIDL_PROGRAM_FILES',
  /**
   * The Program Files folder. A typical path is `C:\Program Files`.
   */
  CSIDL_PROGRAM_FILESX86 = 'CSIDL_PROGRAM_FILESX86',
  /**
   * A folder for components that are shared across applications. A typical path
   * is `C:\Program Files\Common`. Valid only for Windows XP.
   */
  CSIDL_PROGRAM_FILES_COMMON = 'CSIDL_PROGRAM_FILES_COMMON',
  /**
   * A folder for components that are shared across applications. A typical path
   * is `C:\Program Files\Common`. Valid only for Windows XP.
   */
  CSIDL_PROGRAM_FILES_COMMONX86 = 'CSIDL_PROGRAM_FILES_COMMONX86',
  /**
   * The file system directory that contains the user's program groups (which
   * are themselves file system directories). A typical path is
   * `%USERPROFILE%\Start Menu\Programs`.
   */
  CSIDL_PROGRAMS = 'CSIDL_PROGRAMS',
  /**
   * The file system directory that contains shortcuts to the user's most
   * recently used documents. A typical path is
   * `%USERPROFILE%\My Recent Documents`. To create a shortcut in this folder,
   * use `SHAddToRecentDocs`. In addition to creating the shortcut, this
   * function updates the Shell's list of recent documents and adds the shortcut
   * to the My Recent Documents submenu of the Start menu.
   */
  CSIDL_RECENT = 'CSIDL_RECENT',
  /**
   * Windows Vista. The file system directory that contains resource data. A
   * typical path is `%windir%\Resources`.
   */
  CSIDL_RESOURCES = 'CSIDL_RESOURCES',
  /**
   * Windows Vista. The file system directory that contains resource data. A
   * typical path is `%windir%\Resources`.
   */
  CSIDL_RESOURCES_LOCALIZED = 'CSIDL_RESOURCES_LOCALIZED',

  /**
   * The file system directory that contains Send To menu items. A typical path
   * is `%USERPROFILE%\SendTo`.
   */
  CSIDL_SENDTO = 'CSIDL_SENDTO',
  /**
   * The file system directory that contains Start menu items. A typical path is
   * `%USERPROFILE%\Start Menu`.
   */
  CSIDL_STARTMENU = 'CSIDL_STARTMENU',
  /**
   * The file system directory that corresponds to the user's Startup program
   * group. The system starts these programs whenever the associated user logs
   * on. A typical path is `%USERPROFILE%\Start Menu\Programs\Startup`.
   */
  CSIDL_STARTUP = 'CSIDL_STARTUP',
  /**
   * The Windows System folder. A typical path is `%windir%\System32`.
   */
  CSIDL_SYSTEM = 'CSIDL_SYSTEM',
  /**
   * The Windows System folder. A typical path is `%windir%\System32`.
   */
  CSIDL_SYSTEMX86 = 'CSIDL_SYSTEMX86',
  /**
   * The file system directory that serves as a common repository for document
   * emplates. A typical path is `%USERPROFILE%\Templates`.
   */
  CSIDL_TEMPLATES = 'CSIDL_TEMPLATES',
  /**
   * The Windows directory or SYSROOT. This corresponds to the `%windir%` or
   * `%SYSTEMROOT%` environment variables. A typical path is `C:\Windows`.
   */
  CSIDL_WINDOWS = 'CSIDL_WINDOWS',
}

import { BrowserWindow, ipcMain, nativeImage, nativeTheme } from 'electron';
import { logManager } from './log-services';
import { IPC_EVENTS } from '@common/constants';

class ThemeService {
  private static _instance: ThemeService;

  private _isDark: boolean = nativeTheme.shouldUseDarkColors;

  constructor() {
    const themeMode = 'light';
    if (themeMode) {
      nativeTheme.themeSource = themeMode;
      this._isDark = nativeTheme.shouldUseDarkColors;
    }
    this._setupIpcEvent();
    logManager.info('ThemeService initialized successfull.');
  }

  private _setupIpcEvent() {
    ipcMain.handle(IPC_EVENTS.SET_THEME_MODE, (_e, themeMode: ThemeMode) => {
      nativeTheme.themeSource = themeMode;
      return nativeTheme.shouldUseDarkColors;
    });
    ipcMain.handle(IPC_EVENTS.GET_THEME_MODE, () => {
      return nativeTheme.themeSource;
    });
    ipcMain.handle(IPC_EVENTS.IS_DARK_THEME, () => nativeTheme.shouldUseDarkColors)

    nativeTheme.on('updated', () => {
      this._isDark = nativeTheme.shouldUseDarkColors;
      BrowserWindow.getAllWindows().forEach((win) => {
        win.webContents.send(IPC_EVENTS.THEME_MODE_UPDATED, this._isDark);
      });
    });
  }

  public static getInstance() {
    if (!this._instance) {
      this._instance = new ThemeService();
    }
    return this._instance;
  }

  public get isDark() {
    return this._isDark;
  }

  public get themeMode() {
    return nativeTheme.themeSource;
  }
}

export const themeManager = ThemeService.getInstance();
export default themeManager;

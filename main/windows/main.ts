import { windowManager } from '../service/windows-services'
import { MAIN_WIN_SIZE, WINDOW_NAMES } from "@common/constants";

export function setupMainWindow(){
    windowManager.create(WINDOW_NAMES.MAIN, MAIN_WIN_SIZE)
}
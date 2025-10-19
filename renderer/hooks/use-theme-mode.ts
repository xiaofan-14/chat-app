const iconMap = new Map([
    ['light','material-symbols:light-mode'],
    ['system','material-symbols:auto-awesome'],
    ['dark','material-symbols:dark-mode'],
])

export function useThemeMode() {
  const themeMode = ref<ThemeMode>('light');
  const isDark = ref<boolean>(false);
  const themeIcon = computed(()=>iconMap.get(themeMode.value) || 'material-symbols:light-mode')

  const themeChangeCallbacks: Array<(mode: ThemeMode) => void> = [];

  function setThemeMode(mode: ThemeMode) {
    themeMode.value = mode;
    window.api.setThemeMode(mode);
  }

  function getThemeMode() {
    return themeMode.value;
  }

  function onThemeChange(callback: (mode: ThemeMode) => void) {
    themeChangeCallbacks.push(callback);
  }

  onMounted(async () => {
    window.api.onSystemThemeChange((_isDark) =>
      window.api.getThemeMode().then((res) => {
        isDark.value = _isDark;
        if (res !== themeMode.value) themeMode.value = res;
        themeChangeCallbacks.forEach((cb) => cb(res));
      }));
      isDark.value = await window.api.isDarkTheme();
      themeMode.value = await window.api.getThemeMode();
  });

  return {
    themeMode,
    isDark,
    themeIcon,
    setThemeMode,
    getThemeMode,
    onThemeChange,
  }
}

export default useThemeMode
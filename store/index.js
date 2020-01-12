
export const state = () => ({
  isDark: false
});
export const mutations = {
  setIsDark (state, isDark) {
    state.isDark = isDark;
  }
}
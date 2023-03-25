export const state = () => ({
  dashboard: [],
})

export const mutations = {
  SET_DASHBOARD_ALL: (state, data) => {
      state.dashboard = data
  },
}

export const actions = {
  async getDashboardAll({ commit }) {
      try {
          const { results } = await this.$api.get(`/api/dashboard`)
          commit("SET_DASHBOARD_ALL", results)
      } catch (error) {
          console.log(error.message);
      }
  },
}

export const getters = {
  dashboardAll: (state) => state.dashboard,
}

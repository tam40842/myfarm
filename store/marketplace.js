export const state = () => ({
    marketplace: [],
    profile: {},
});

export const mutations = {
    SetDataMarketplace: (state, data) => {
        state.marketplace = data
    },
    SetDataProfileUser: (state, data) => {
      state.profile = data
  },
};

export const actions = {
  async getMarketplace({ commit }) {
    try {
      const results = await this.$api.get(
        `/api/buy-shop`
      );
      commit("SetDataMarketplace", results.results.data)
    } catch (error) {}
  },

  async getProfileUser({ commit }) {
    try {
      const results = await this.$api.get(
        `/api/auth/user-profile`
      );
      commit("SetDataProfileUser", results.results)
    } catch (error) {}
  },
};

export const getters = {
    marketplace: (state) => state.marketplace,
    profile: (state) => state.profile,
};

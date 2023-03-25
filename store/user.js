export const state = () => ({
  balance_user: null,
});

export const mutations = {
  setBalance(state, userLiveBalance) {
    state.balance_user = userLiveBalance;
  },
};

export const actions = {
  async getBalance({ commit }) {
    try {
      const { results } = await this.$api.get(`/api/auth/user-profile`);
      commit("setBalance", results.live_balance);
    } catch (error) {

    }
  },
  async updateProfile({ commit }, data) {
    try {
      const response = await this.$api.patch(
        `/api/user/update-nickname`,
        data.data
      );
    } catch (error) {}
  },
};

export const getters = {
  balance_user: (state) => state.balance_user,
};

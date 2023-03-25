export const state = () => ({

});

export const mutations = {};

export const actions = {
  async postDeposit({ commit }, data) {
    try {
      const response = await this.$api.post(
        `/api/deposits`,
        data.data,
      );
      console.log(response);
    } catch (error) {}
  },
};

export const getters = {
};

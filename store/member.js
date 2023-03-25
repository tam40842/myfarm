export const state = () => ({
  members: []
})

export const mutations = {
  SET_MEMBERS: (state, data) => {
      state.members = data
  },
}

export const actions = {
  async getDataMember({ commit }) {
      try {
          const { results }  = await this.$api.get(`/api/commission`)
          console.log('get member', results);
          commit("SET_MEMBERS", results)
      } catch (error) {
          console.log(error.message);
      }
  },
}

export const getters = {
  members: (state) => state.members,
}

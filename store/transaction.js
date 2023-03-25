export const state = () => ({
  transaction_usdt: [],
  transaction_mft: [],
  // detail_transaction: [],
})

export const mutations = {
  SET_TRANSACTION_USDT: (state, data) => {
      state.transaction_usdt = data
  },
  SET_TRANSACTION_MFT: (state, data) => {
      state.transaction_mft = data
  },
  // SET_DETAIL_TRANSACTION: (state, data) => {
  //     state.detail_transaction = data
  // },
}

export const actions = {
  async getDataTransactionUsdt({ commit }) {
      try {
          const { results } = await this.$api.get(`/api/transactions/usdt`)
          commit("SET_TRANSACTION_USDT", results)
      } catch (error) {
          console.log(error.message);
      }
  },

  async getDataTransactionMft({ commit }) {
      try {
          const { results } = await this.$api.get(`/api/transactions/mft`)
          commit("SET_TRANSACTION_MFT", results)
      } catch (error) {
          console.log(error.message);
      }
  },
  // async getDataDetailTransaction({ commit }, data) {
  //     try {
  //         const { results } = await this.$api.get(`/api/transactions/` + data)
  //         console.log(results)
  //         commit("SET_DETAIL_TRANSACTION", results)
  //     } catch (error) {
  //         console.log(error.message);
  //     }
  // },
}

export const getters = {
  transaction_usdt: (state) => state.transaction_usdt,
  transaction_mft: (state) => state.transaction_mft,
  // detail_transaction: (state) => state.detail_transaction,
}

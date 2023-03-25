export const strict = false
export const state = () => ({
  balance_user: null,
})

export const mutations = {
  setBalance(state, userLiveBalance) {
    state.balance_user = userLiveBalance
  }
}

export const getters = {
  balance_user: (state) => state.balance_user,
}

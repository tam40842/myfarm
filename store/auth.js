const state = () => ({
  user: null,
  details: {
    public_address: null,
    nonce: null,
    note: null,
  },
  signature: null,
});

const getters = {
  user(state) {
    return state.user;
  },
  details(state) {
    return state.details;
  },
};

const mutations = {
  register(state, payload) {
    this.$api.post("/api/auth/register", payload).then((response) => {
      if (response.results) {
        this.commit("auth/storeDetails", response.results);

        alert("Account registered, Try connecting it again.");
      }
    });
  },
  storeUser(state, payload) {
    state.user = payload;
  },
  async login(state, payload) {
    if (payload && payload.signature) {
      state.signature = payload.signature;
    }
    await this.$api
      .post("/api/auth/login", payload)
      .then((response) => {
        if (response.results) {
          this.commit("auth/storeUser", response.results);
          // Set user in local stoarge.
          localStorage.setItem("mft_user", JSON.stringify(response.results));

          const results = response.results;
          if (results && results.access_token) {
            // Set token in local stoarge.
            localStorage.setItem(
              "token",
              `${results.token_type} ${results.access_token}`
            );
            localStorage.setItem("add_dress", `${results.user.public_address}`);
            // localStorage.setItem("auth",)
            // set token in axios api.
            this.$axios.setToken(
              `${results.token_type} ${results.access_token}`
            );
          }
          this.$router.push("/");
        }
      })
      .catch((error) => {
        throw error;
      });
  },
  logout(state, payload) {
    this.$api.post("/api/auth/logout", payload).then((response) => {
      // reset user.
      this.commit("auth/storeUser", null);
      // Removes default Authorization header from `common` scope (all requests)
      this.$axios.setToken(false);
      localStorage.removeItem("token");
      localStorage.removeItem("mft_user");
      localStorage.removeItem("add_dress");
    });
    this.$router.push("/");
  },
  storeDetails(state, payload) {
    state.details = {
      ...state.details,
      public_address: payload.public_address,
      nonce: payload.nonce,
      note: payload.note,
    };
  },
};

const actions = {
  login({ commit }, payload) {
    commit("login", payload);
  },
  logout({ commit }, payload) {
    commit("logout", payload);
  },
  register({ commit }, payload) {
    commit("register", payload);
  },
  storeDetails({ commit }, payload) {
    commit("storeDetails", payload);
  },
  checkExistUser({ commit, state }, address) {
    this.$api
      .get(`/api/auth/user?public_address=${address}`)
      .then((response) => {
        if (response.results) {
          commit("storeDetails", response.results);
          ethereum
            .request({
              method: "personal_sign",
              params: [response.results.note, response.results.public_address],
            })
            .then((result) => {
              commit("login", {
                public_address: state.details.public_address,
                signature: result,
              });
            })
            .catch((error) => {});
        }
      })
      .catch((error) => {
        if (error && error.response && error.response.status == 404) {
          if (address) {
            commit("register", {
              public_address: address,
              ref: this.app.router.currentRoute.query.ref,
            });
          }
        }
      });
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};

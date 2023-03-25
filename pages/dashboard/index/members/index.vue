<template>
  <div class="tw-h-full tw-w-full">
    <h1
      class="custom-font tw-text-3xl btn-text-color tw-font-black text-center"
    >
      Members
    </h1>

    <div class="d-flex flex-column align-center justify-center tw-h-full tw-w-full" style="overflow:hidden;max-width: 100%;max-height: 500px;">
      <div
        style="
          overflow: auto;
          max-height: 100%;
          max-width: 100%;
        "
      >
        <TreeChart :json="treeData" />
      </div>
      <!-- <div class="tree">
        <ul>
          <li>
            <DashboardMembers
              v-if="dataMembers != null"
              :name="dataMembers.name"
              :avatar="dataMembers.avatar"
              :count="dataMembers.total_f1"
            />
            <ul>
              <li v-for="(members, index) in f1" :key="index">
                <DashboardMembers
                  :name="members.name"
                  :avatar="members.avatar"
                  :count="members.total_f1"
                />
                <ul>
                  <div v-for="(f2, index) in f1" :key="index">
                    <div v-if="members.name == f2.name">
                      <li
                        v-for="(memberF2, index) in JSON.parse(f2.children)"
                        :key="index"
                      >
                        <DashboardMembers
                          :name="memberF2.name"
                          :avatar="memberF2.avatar"
                          :count="memberF2.total_f1"
                        />
                        <ul>
                          <div
                            v-for="(f3, index) in JSON.parse(f2.children)"
                            :key="index"
                          >
                            <div v-if="memberF2.name == f3.name">
                              <li
                                v-for="(memberF3, index) in JSON.parse(
                                  f3.children
                                )"
                                :key="index"
                              >
                                <DashboardMembers
                                  :name="memberF3.name"
                                  :avatar="memberF3.avatar"
                                  :count="memberF3.total_f1"
                                />
                              </li>
                            </div>
                          </div>
                        </ul>
                      </li>
                    </div>
                  </div>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div> -->
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      url_base: process.env.link_api,
      dataMembers: null,
      f1: null,
      count_children: null,
      f2: null,
      treeData: {},
    };
  },
  //  async created() {
  //   await this.$store.dispatch("auth/login");
  // },
  mounted() {
    this.getMembers();
  },
  computed: {
    ...mapGetters("auth", ["user"]),
  },
  methods: {
    async getMembers() {
      const config = {
        headers: {
          Authorization: `bearer ${this.user.access_token}`,
        },
      };
      await axios
        .get(this.url_base + "/api/commission", config)
        .then((response) => {
          this.dataMembers = JSON.parse(response.data.data.tree);
          this.treeData = JSON.parse(response.data.data.tree);
          this.f1 = this.dataMembers.children;
          console.log(this.treeData);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
/*Now the CSS*/
.tree ul {
  padding-top: 20px;
  position: relative;
  transition: all 0.5s;
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
}
.tree li {
  float: left;
  text-align: center;
  list-style-type: none;
  position: relative;
  padding: 20px 5px 0 5px;
  transition: all 0.5s;
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
}
/*We will use ::before and ::after to draw the connectors*/
.tree li::before,
.tree li::after {
  content: "";
  position: absolute;
  top: 0;
  right: 50%;
  border-top: 2px dashed #882900;
  width: 50%;
  height: 20px;
}
.tree li::after {
  right: auto;
  left: 50%;
  border-left: 2px dashed #882900;
}
/*We need to remove left-right connectors from elements without
any siblings*/
.tree li:only-child::after,
.tree li:only-child::before {
  display: none;
}
/*Remove space from the top of single children*/
.tree li:only-child {
  padding-top: 0;
}
/*Remove left connector from first child and
right connector from last child*/
.tree li:first-child::before,
.tree li:last-child::after {
  border: 0 none;
}
/*Adding back the vertical connector to the last nodes*/
.tree li:last-child::before {
  border-right: 2px dashed #882900;
  border-radius: 0 5px 0 0;
  -webkit-border-radius: 0 5px 0 0;
  -moz-border-radius: 0 5px 0 0;
}
.tree li:first-child::after {
  border-radius: 5px 0 0 0;
  -webkit-border-radius: 5px 0 0 0;
  -moz-border-radius: 5px 0 0 0;
}
/*Time to add downward connectors from parents*/
.tree ul ul::before {
  content: "";
  position: absolute;
  top: 0;
  left: 50%;
  border-left: 2px dashed #882900;
  width: 0;
  height: 20px;
}
.tree li a {
  border: 2px dashed #882900;
  padding: 5px 10px;
  text-decoration: none;
  color: #666;
  font-family: arial, verdana, tahoma;
  font-size: 11px;
  display: inline-block;
  border-radius: 5px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  transition: all 0.5s;
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
}
/*Time for some hover effects*/
/*We will apply the hover effect the the lineage of the element also*/
.tree li a:hover,
.tree li a:hover + ul li a {
  background: #882900;
  color: #000;
  border: 2px dashed #94a0b4;
}
/*Connector styles on hover*/
.tree li a:hover + ul li::after,
.tree li a:hover + ul li::before,
.tree li a:hover + ul::before,
.tree li a:hover + ul ul::before {
  border-color: #882900;
}
</style>

<style lang="scss">
.extend {
  &:after {
    border-left: 2px dashed #882900 !important;
  }

  .extend_handle {
    transform: translate3d(-14px, 0, 0) !important;
    &:before {
      border-color: #882900 !important;
    }
  }
}

.childLevel {
  &:first-child {
    &:after {
      border-color: #882900 transparent transparent #882900 !important;
      border-style: dashed !important;
    }
  }

  &:last-child {
    &:after {
      border-color: #882900 #882900 transparent transparent !important;
      border-style: dashed !important;
    }
  }
}
.node {
  .person {
    .avat {
      border-radius: 50% !important;
    }
    .name {
      color: #882900 !important;
      font-family: "SVN-SAF" !important;
      text-align: center !important;
      font-size: 0.875rem !important;
      line-height: 1.25rem !important;
    }
  }
}
</style>

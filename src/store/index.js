import Vue from "vue";
import Vuex from "vuex";
import * as mutationTypes from "./mutationTypes";
import { getBannerRequest, getRecommendListRequest } from "../api/request";
import singer from "./module/singer";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    singer
  },
  state: {
    bannerList: [],
    recommendList: [],
    loading: true
  },
  mutations: {
    [mutationTypes.CHANGE_BANNER](state, payload) {
      state.bannerList = payload.banners;
    },
    [mutationTypes.CHANGE_RECOMMEND_LIST](state, payload) {
      state.recommendList = payload.recommendList;
    },
    [mutationTypes.CHANGE_LOADING](state, payload) {
      state.loading = payload.loading;
    }
  },
  actions: {
    async changeBannerList({ commit }) {
      try {
        let { code, banners } = await getBannerRequest();
        if (code === 200) {
          commit(mutationTypes.CHANGE_BANNER, { banners });
        }
      } catch (error) {
        // 错误处理
      }
    },
    async changeRecommendList({ commit }) {
      try {
        let { code, result } = await getRecommendListRequest();
        if (code === 200) {
          setTimeout(() => {
            commit(mutationTypes.CHANGE_RECOMMEND_LIST, {
              recommendList: result
            });
            commit(mutationTypes.CHANGE_LOADING, { loading: false });
          }, 1000);
        }
      } catch (error) {
        // 错误处理
      }
    }
  }
});

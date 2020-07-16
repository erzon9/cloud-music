import {
  getHotSingerListRequest,
  getSingerListRequest
} from "../../../api/request";

export default {
  namespaced: true,
  state: {
    singerList: [],
    enterLoading: true, //控制进场Loading
    pullUpLoading: false, //控制上拉加载动画
    pullDownLoading: false, //控制下拉加载动画
    pageCount: 0 //这里是当前页数，我们即将实现分页功能
  },
  mutations: {
    setSingerList(state, payload) {
      state.singerList = payload.singerList;
    },
    setEnterLoading(state, payload) {
      state.enterLoading = payload.enterLoading;
    },
    setPullUpLoading(state, payload) {
      state.pullUpLoading = payload.pullUpLoading;
    },
    setPullDownLoading(state, payload) {
      state.pullDownLoading = payload.pullDownLoading;
    },
    setPageCount(state, payload) {
      state.pageCount = payload.pageCount;
    }
  },
  actions: {
    async getHotSingerList({ commit, state }) {
      try {
        let { code, artists } = await getHotSingerListRequest(state.pageCount);
        if (code === 200) {
          commit("setSingerList", { singerList: artists });
          commit("setPageCount", { pageCount: state.pageCount + 1 });
        }
      } catch (error) {
        console.log(error);
      }
    },
    async getSingerList({ commit }, category, alpha, count) {
      try {
        let res = await getSingerListRequest(category, alpha, count);
        commit();
        console.log(res);
      } catch (e) {
        console.log(e);
      }
    }
  }
};

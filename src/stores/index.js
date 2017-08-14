import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state:{
    homeVideoList:[],
    detailVideoInfo:{},
    detailVideoList:[],
    detailReplyList:[]
  },
  getters:{
    fetch_homeVideoList(state){
      return state.homeVideoList
    },
    fetch_detailVideoInfo(state){
      return state.detailVideoInfo
    },
    fetch_detailVideoList(state){
      return state.detailVideoList
    },
    fetch_detailReplyList(state){
      return state.detailReplyList
    }
  },
  mutations:{
    update_Home_VideoList(state,data){
      state.homeVideoList = data.dailyList[0].videoList;
    },
    update_Detail_VideoInfo(state,data){
      state.detailVideoInfo = data;
    },
    update_Detail_VideoList(state,data){
      state.detailVideoList = data.videoList;
    },
    update_Detail_ReplyList(state,data){
      state.detailReplyList = data.replyList;
    }
  },
  actions:{
    fetchHomeFeed(store,payload){
      payload.$http.get("/api/v1/feed").then(response => {
        store.commit('update_Home_VideoList', response.data);
      })
    },
    fetchVideoInfo(store,payload){
      const id = payload.id;
      payload.$http.get(`/api/v1/video/${id}`).then(response=> {
        store.commit('update_Detail_VideoInfo', response.data);
      })
    },
    fetchVideoList(store,payload){
      const id = payload.id;
      payload.$http.get(`/api/v1/video/related/${id}?num=10`).then(response=> {
        store.commit('update_Detail_VideoList', response.data);
      })
    },
    fetchReplyList(store,payload){
      const id = payload.id;
      payload.$http.get(`/api/v1/replies/video/?id=${id}&num=5`).then(response=> {
        store.commit('update_Detail_ReplyList', response.data);
      })
    }
  }
})

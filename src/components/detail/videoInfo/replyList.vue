<template>
  <div class="reply-list-container">
    <div class="header">热门评论</div>
    <div class="reply-list" v-if="detailReplyList.length">
      <div class="reply" v-for="reply in detailReplyList" :key="reply.videoId">
        <div class="like">
          <div class="like-count">
            <div>{{reply.likeCount}}</div>
            <div class="like-count-icon"></div>
          </div>
          <div class="like-count-hot" v-if="reply.hot">- Hot -</div>
        </div>
        <div class="avatar" :style="{backgroundImage:`url(${reply.user.avatar})`}"></div>
        <div class="entity">
          <p class="username">{{reply.user.nickname}}</p>
          <p class="time">{{moment(reply.createTime).format('YYYY-MM-DD HH:m')}}</p>
          <p class="text">{{reply.message}}</p>
        </div>
      </div>
    </div>
    <div class="tip" v-else>写下第一条评论吧</div>
    <div class="downloader" v-if="detailReplyList.length">
      <button @click="redirectHome">下载开眼客户端，查看更多精彩评论！</button>
    </div>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: "ReplyList",
  data: () => ({
    moment
  }),
  created() {
    const ID = this.$router.history.current.params.id;
    this.$store.dispatch('fetchReplyList',{
      $http:this.$http,
      id: ID
    })
  },
  computed:{
    detailReplyList() {
      return this.$store.getters.fetch_detailReplyList
    }
  },
  methods: {
    redirectHome() {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
  .reply-list-container {
    background: rgba(0,0,0,.4);
  }
  .reply-list-container .header {
    padding: 16px 0 10px;
    text-align: center;
  }
  .reply {
    font-size: 12px;
    padding-bottom: 15px;
    position: relative;
  }
  .like {
    position: absolute;
    text-align: right;
    top: 0;
    right: 16px;
  }
  .like-count>div {
    display: inline-block;
  }
  .like-count-icon {
    background-image: url(//static.kaiyanapp.com/eyepetizer-web/assets/images/detail/icon_like_grey@3x.d2a2a2a8.png);
    background-position: 50%;
    background-size: cover;
    height: 15px;
    width: 15px;
  }
  .like-count-hot {
    font-family: Lobster,cursive;
  }
  .avatar {
    background-position: 50%;
    background-size: cover;
    border-radius: 50%;
    float: left;
    height: 36px;
    margin: 0 13px;
    width: 36px;
  }
  .entity {
    margin-left: 62px;
  }
  .username {
    margin: 0;
    margin-bottom: 4px;
  }
  .time {
    margin-bottom: 4px;
    opacity: .6;
  }
  .text {
    margin-bottom: 15px;
    padding-right: 35px;
  }
  .tip{
    padding: 16px 0px 32px;
    margin-top: 0;
    text-align: center;
  }
  .downloader {
    padding: 0 16px;
  }
  .downloader button {
    color: inherit;
    background: hsla(0,0%,100%,.3);
    border-radius: 2px;
    border: none;
    line-height: 32px;
    margin-bottom: 16px;
    padding: 0;
    width: 100%;
    cursor: pointer;
  }
</style>

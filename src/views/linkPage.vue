<template>
  <div class = "link-page">
    <canvas id = "star"></canvas>
    <div class = "mainDivRow">
      <div class = "flexDiv_col">
        <div class = "contentDiv">
          <a href = "https://openlab233.vercel.app/"> 实验室网页(施工中) </a>
          <a href = "https://conyrol.top/"> cyr 的博客(暂时停用) </a>
          <a href = "https://bojack.space/"> mzy 的博客 </a>
          <a href = "https://eirc-whyte.github.io/"> lby 的博客 </a>
          <a href = "http://qerlovelife.xyz/"> qer 的博客 </a>
          <a href = "http://yqy.plus/"> yqy 的博客 </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import starOrbitMove from '../assets/js/star.js'
import $ from 'jquery'

export default {
  data () {
    return {

    }
  },
  computed: {

    },
    methods: {

    },
    created() { 
      
    },
    mounted() {
      console.log($('#star'));
      starOrbitMove($('#star'));
    }
}
</script>

<style>
.link-page {
  height: 100%;
}

#star {
  top: 0px;
  position: fixed;
  z-index: 1;
  background-color: #222222;
}

.mainDivRow {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.contentDiv {
  padding-top: 10%;
  padding-bottom: 10%;
  display: flex;
  flex-direction: column;
	justify-content: center;
  width: 400px;
  z-index: 2;
  border-radius: 15px;
  text-align: center;
}

.contentDiv a:hover {
  box-shadow:inset 0 0 5px #444;
  color: #9c5518;
  background-color: #ffaaa5;
}

.contentDiv a {
	margin: 10px 15%;
  display: block;
  width: 70%;
  font-weight: bold;
  text-align: center;
  border-radius: 15px;
  text-decoration: none;
  background-color: #5a3f11;
  color: #faf4ff;
  padding: 10px 0;
  box-shadow:0 0 5px #444;
  transition-duration: 0.5s;
  -webkit-transition-duration: 0.5s;
}
</style>
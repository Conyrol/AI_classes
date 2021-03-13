<template>
  <div class = "main-page">
    <div class = "gif-div">
      <canvas class = "fireworks"></canvas>
    </div>
    <div class = "head-div flexDiv_row">
      <div class = "main-div flexDiv_row2">
        <div class = "flexDiv_col">
          <img src = "../assets/images/logo.png" :style = "{'height': '70%', 'object-fit': 'cover'}">
        </div>
        <div class = "flexDiv_col">
          <div class = "head-content">
            <a class = "head-item" :href = "this.$main_url + '/about'"><i class = "el-icon-collection"> 介绍</i></a>
            <a class = "head-item" :href = "this.$main_url + '/link'"><i class = "el-icon-link"> 实验室友链</i></a>
          </div>
        </div>
      </div>
    </div>

    <div class = "content-div flexDiv_row">
      <div class = "main-div">
        <transition-group name = "fade">
          <div class = "content-item flexDiv_row3" v-for = "(i, index) in data_list" :key = "index">
            <el-tooltip content = "Bottom center" placement = "bottom" effect = "light">
              <div class = "item-index">{{ i.index }}</div>
            </el-tooltip>
            <div class = "item-main">
              <div class = "flexDiv_col2" :style = "{'height': '100%'}">
                <div class = "flexDiv_row" :style = "{'height': '85%'}">
                  <div class = "main-image" :style = "{'width': '700px', 'height': '100%', 'background': 'url(' + i.img_src + ') no-repeat center', 'background-size': 'cover'}"></div>
                  <div class = "flexDiv_col2" :style = "{'width': '100%', 'height': '100%'}">
                    <div class = "main-title" :style = "{'width': '100%', 'height': '20%', 'background-color': 'rgba(248, 213, 164, 0.8)'}">
                      <div>{{ i.title }}</div>
                    </div>
                    <div class = "main-content flexDiv_col2" :style = "{'width': '100%', 'height': '80%', 'background-color': 'rgba(248, 213, 164, 0.3)'}">
                      <div :style = "{'margin-top': '15px'}">
                        <el-tag :style = "{'margin-right': '10px'}">{{ i.create_date[1] }}月{{ i.create_date[2] }}号开始</el-tag>
                        <el-tag type = "warning" v-for = "(tag, index) in i.tags" :key = "index" :style = "{'margin-right': '10px'}">{{ tag }}</el-tag>
                      </div>
                      <div :style = "{'margin': '15px 15px'}">
                        {{ i.content }}
                      </div>
                    </div>
                  </div>
                </div>
                <div class = "flexDiv_col" :style = "{'height': '15%', 'background-color': 'rgba(248, 213, 164, 0.8)'}">
                  <div :style = "{'padding': '0px 10px'}">
                    <el-alert v-show = "i.type == 1"
                      title = "没有DDL的真是太棒辣😋"
                      type = "success"
                      center>
                    </el-alert>
                  </div>
                  <div class = "flexDiv_row"  v-show = "i.type == 0" :style = "{'margin': '0 20px'}">
                    <div :style = "{'width': '10%', 'color': '#ffffff', 'font-size': '18px'}">
                      <span :style = "{'font-size': '30px'}">{{ i.ddl_date[1] }}</span>月<span :style = "{'font-size': '30px'}">{{ i.ddl_date[2] }}</span>号
                    </div>
                    <div class = "flexDiv_col" :style = "{'width': '90%'}">
                      <el-progress :text-inside = "true" :stroke-width = "18" :percentage = "GetPercent(i.ddl_date, i.create_date)" status = "warning"></el-progress>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </transition-group>
        <div class = "over-show-div">
          <el-alert
            v-show = "show_over"
            title = "没有更多内容了😅"
            type = "warning"
            close-text = "知道了..."
            :style = "{'width': '100%'}">
          </el-alert>
        </div>
        <div v-show = "!show_over" class = "content-item" :style = "{'background-color': 'rgba(0, 0, 0, 0)', 'height': '200px'}"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import fireMain from '../assets/js/firework.js'
  export default {
    data () {
      return {
        data_list_now: [{
          index: 0,
          type: 1,
          tags: ["科普", "难度 ⭐", "DL", "ML"],
          title: "人工智能真有这么有趣？",
          content: "这没有什么智械危机，也没有什么哲学伦理探讨，更不会有晦涩难懂的公式推导(或许会有?)，只有一个个有趣且简单的项目，如果你问我人工智能真能有这么有趣？那我只能说是的。可惜人工智能实在是太广了，这个兴趣开放课程只会带你领略他的冰山一角(CV方向)，但如果你跟着完成了以下的任务，那么一定会对人工智能有一个初步的了解，并且能上手属于自己的项目。",
          img_src: require('../assets/images/2.png'),
          article_src: '',
          ddl_date: [],
          create_date: ['2021', '3', '14'],
        },
        {
          index: 1,
          tags: ["环境配置", "难度 ⭐", "python", "anaconda"],
          title: "学习人工智能的工具",
          type: 0,
          img_src: require('../assets/images/2.png'),
          article_src: '',
          content: "行行都有自己的工具，人工智能也不例外。不过谢天谢地，人工智能一般只需要掌握一个工具就能使出18般武艺了，这个工具就是 python。那么第一个需要上手且有可恶的DDL的任务就来了，这个任务将会引导你配置环境，并运行一份小项目来确认环境配置的正确性。",
          ddl_date: ['2021', '3', '21'],
          create_date: ['2021', '3', '15'],
        },
        {
          index: 2,
          tags: ["实验", "难度 ⭐⭐", "DL", "全连接网络(FC)"],
          title: "一切的开始：解构和复现一个简单的神经网络",
          type: 0,
          img_src: '',
          article_src: '',
          content: "万事开头难！这个实验将会梳理机器学习和深度学习的基本思路，并使用深度学习中最常见的全连接网络(FC)，做出一些简单的效果，你可以尝试拆分和修改 demo 项目中的代码，来完成我们布置的一个小任务，代码量不多，而且在实验进行过程中有什么困难会开设答疑会的。",
          ddl_date: ['2021', '3', '28'],
          create_date: ['2021', '3', '22'],
        },
        {
          index: 3,
          tags: ["科普", "难度 ⭐", "CV相关", "分类任务", "目标检测", "图像生成"],
          title: "五彩缤纷的图像任务",
          type: 1,
          img_src: '',
          article_src: '',
          content: "由于课程课时关系，我们把实验的重心放在深度学习的图像任务上，因为图像任务出结果更直观，实验也更加有趣，如果有想学习关于自然语言任务或者更纯粹的机器学习的同学，我们可能会根据情况开设对应的课程。不过人工智能一通百通，当你了解了整体的思路以后，你也可以自己取尝试学习不同方向的人工智能。",
          ddl_date: [],
          create_date: ['2021', '3', '29'],
        },
        {
          index: 4,
          tags: ["实验", "难度 ⭐⭐", "图像分类", "卷积网络"],
          title: "图像分类，从全连接到卷积",
          type: 0,
          img_src: '',
          article_src: '',
          content: "图像分类任务在日常生活中数不胜数，比如说群聊中判断一个图是否是色图，又或是鉴别一张图片拍摄的是什么东西，可以说这个任务无处不在，而有了深度学习，你就可以全自动的让网络帮你做这件事。这个实验将使用最传统的 CIFAR-10 数据集作为 demo 完成全连接到卷积的过渡，最后实验会有一个我在网上爬取的数据集，你可以试试你的网络在这个数据集上的训练效果，如果效果不是很好，你可以思考一下怎么优化。",
          ddl_date: ['2021', '4', '04'],
          create_date: ['2021', '3', '29'],
        },
        {
          index: '4+',
          tags: ["实验", "难度 ⭐⭐⭐", "图像分类", "网络优化", "resnet"],
          title: "远远不够！更深的网络和更好的结构",
          type: 0,
          img_src: '',
          article_src: '',
          content: "分类任务明明简单基础，可是准确率却上不来？不要慌！是时候让 tricks 和 better network 上场了。这次实验，我们将探讨不同的 tricks 和 network 到底为什么好，怎么去用。并且会放出 plus 版的分类数据集，你可以在上面试一试怎么组合这些 tricks 和 network 能得到最好的效果。",
          ddl_date: ['2021', '4', '04'],
          create_date: ['2021', '3', '29'],
        },
        {
          index: '5',
          tags: ["实验", "难度 ⭐⭐⭐⭐", "目标检测", "yoloV1", "yoloV3"],
          title: "目标检测，you only look once",
          type: 0,
          img_src: '',
          article_src: '',
          content: "目标检测是人工智能行业中最常见的任务，其体系已经非常完善，如果想去一一了解，那需要花费很长时间，所以本次实验只涉及目标检测中最知名的网络 —— yolo 系列。不过即使是这样，复现一份 yolo 代码也需要花费大量的时间和精力，这样课程得不偿失，所以这次实验会使用我给你们安排好的 yoloV3 框架，你需要做的是在训练的过程中了解它的原理和工作流程，以便以后你可以轻松上手其他目标检测网络。",
          ddl_date: ['2021', '4', '04'],
          create_date: ['2021', '3', '29'],
        },
        {
          index: '6',
          tags: ["实验", "难度 ⭐⭐⭐⭐", "图片生成", "GAN"],
          title: "生成对抗网络，GAN就完事了",
          type: 0,
          img_src: '',
          article_src: '',
          content: "生成对抗网络无疑是 CV 领域最热门最有趣的方向之一，它的思想十分的新颖且直观，虽然实现能用的 GAN 有些难度，但有什么能阻挡大家生成自己想要的图像的热情呢？当然，为了不让大家在训练过程中抓狂，实验会使用比较基础的 GAN 网络。另外再提一句，GAN 素来以难以训练闻名，所以你在训练自己的 GAN 的时候如果结果很差，请别砸电脑，多调参改网络结构尝试就好了。",
          ddl_date: ['2021', '4', '04'],
          create_date: ['2021', '3', '29'],
        },
        {
          index: '7',
          tags: ["大实验", "难度 ⭐⭐⭐⭐⭐", "检测+分类+生成", "DIY"],
          title: "来做你的第一个深度学习项目吧！",
          type: 0,
          img_src: '',
          article_src: '',
          content: "如果你认真的完成了上面的所有项目，那我相信你对人工智能会有了一个初步的了解(至少 CV 领域是了解了)，那么最后一个大实验就是用你学到的知识做一个项目，你可以选择我们提供的项目，也可以自己选择项目，甚至不限 CV 领域，只要你感兴趣都可以。但需要注意的是，这次从数据集获取到模型选择，再到训练调参都没有模板和 demo，需要由你来完成。(支持 2-3 人组队)",
          ddl_date: ['2021', '4', '04'],
          create_date: ['2021', '3', '29'],
        }],
        data_list: [],
        add_begin: null,
        number: 0,
        date_now: null,
        show_over: false,
      }
    },
    computed: {

    },
    methods: {
      GetNumberOfDays(date1, date2) {
        var a1 = Date.parse(new Date(date1));
        var a2 = Date.parse(new Date(date2));
        var day = parseInt((a2-a1)/ (1000 * 60 * 60 * 24));
        return day;
      },
      GetPercent(ddl_date, create_date) {
        let time_now = this.date_now.getFullYear() + '-' + (this.date_now.getMonth() + 1) + '-' + this.date_now.getDate();
        let remain = this.GetNumberOfDays(time_now, ddl_date[0] + '-' + ddl_date[1] + '-' + ddl_date[2]);
        let over = this.GetNumberOfDays(create_date[0] + '-' + create_date[1] + '-' + create_date[2], time_now);
        if(over + remain == 0) return 100;
        return Math.round(over / (over + remain) * 100);
      },
      scroll() {
        if (this.number >= this.data_list_now.length){
          this.show_over = true;
          return;
        }
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        if (scrollTop + document.documentElement.clientHeight >= document.body.scrollHeight - 200) {
          this.data_list.push(this.data_list_now[this.number++]);
        }
      },
      addItem() {
        if (document.body.scrollHeight > window.screen.height) {
          clearInterval(this.add_begin);
        }
        this.data_list.push(this.data_list_now[this.number++]);
      }
    },
    created() { 
      this.date_now = new Date();
    },
    mounted() {
      this.add_begin = setInterval(() => { this.addItem() }, 200);
      let canvasEl = document.querySelector('.fireworks');
      let ctx = canvasEl.getContext('2d');
      fireMain(canvasEl, ctx);
      window.addEventListener('scroll', this.scroll);
      window.addEventListener('mousewheel', this.mousewheel);
    }
  }
</script>

<style lang = "less">
.el-progress.is-warning .el-progress-bar__inner {
  background-color: rgba(250, 156, 24, 0.5) !important;
}

.el-progress-bar__outer {
  background-color: rgb(248, 235, 217) !important;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

@main-div-before-left: 50px;
@main-div-before-width: 4px;
@item-index-width: 50px;
@item-main-width: 1200px;
@item-index-border: 4px;
@item-index-left: @main-div-before-left - (@item-index-width / 2) + (@main-div-before-width / 2) - @item-index-border;
@item-main-left: 20px;
.main-page {
  height: 100%;
  width: 100%;
  
  /* 头部导航栏 */
  .head-div {
    height: 80px;
    width: 100%;
    background-color: rgb(84, 92, 100);

    .main-div {
      height: 100%;
      min-width: @item-index-width + @item-main-width + @item-index-left + @item-main-left + 100px;
      max-width: @item-index-width + @item-main-width + @item-index-left + @item-main-left + 100px;
    }

    .head-item {
      font-size: 20px;
      color: #ffffff;
      margin-right: 50px;
    }
  }

  /* 内容栏 */
  .gif-div {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0px;
    z-index: -1;
  }

  .content-div {
    position: relative;
    margin-top: 30px;
    height: auto;
    min-height: 500px;
    overflow: hidden;
    
    .main-div {
      height: 100%;
      overflow: hidden;
      position: relative;

      .content-item {
        margin-bottom: 50px;
        height: 350px;
        width: 100%;
        min-width: @item-index-width + @item-main-width + @item-index-left + @item-main-left + 100px;
        max-width: @item-index-width + @item-main-width + @item-index-left + @item-main-left + 100px;

        .item-index {
          margin-left: @item-index-left;
          height: 50px;
          border-radius: 50%;
          width: @item-index-width;
          background-color: #0f9d58;
          color: aquamarine;
          font-size: 40px;
          line-height: 50px;
          text-align: center;
          border: 4px solid aquamarine;
        }

        .item-main {
          margin-top: (@item-index-width / 2);
          margin-left: @item-main-left;
          height: 100%;
          width: @item-main-width;
          border-radius: 5px;
          transition: 0.3s;
          box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);

          .main-image {
            border-top-left-radius: 5px;
            border: 1px solid rgba(248, 213, 164, 0.5);
          }

          .main-title {
            font-size: 28px;
            font-weight: bold;
            color: #34495e;
            line-height: 200%;
            text-align: center;
            border-top-right-radius: 5px;
          }

          .main-content {
            padding-top: 10px;
            font-size: 19px;
            color: #4d6479;
            border-top-left-radius: 5px;
            text-align: center;
            line-height: 150%;
          }
        }

        .item-main:hover {
          box-shadow: -1px 2px 12px 0px rgba(0, 0, 0, 0.1);
        }
      }

      .over-show-div {
        width: 90%;
        margin-bottom: 20px;
        position: relative;
        margin-left: @item-main-left;
        left: @main-div-before-left;
      }
    }

    .main-div::before {
      margin-top: 10px; 
      position: absolute;
      content: '';
      top: 0;
      left: @main-div-before-left;
      width: @main-div-before-width;
      height: 100%;
      background: #0f9d58;
      /*#0f9d58*/
      z-index: -1;
    }
  }
}
</style>

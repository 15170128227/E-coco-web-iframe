<template>
  <div class="doc-container">
    <div class="doc-content" v-if="docList">
      <div class="doc-column-left">
        <ul class="one-column">
          <li class="one-columns">
            <a :data-id="'1'" href="javascript:void(0)" class="arrow-down" @click="isOneNav($event)">
              API
            </a>
            <ul class="two-column apiColumn" v-if="columnType1" :style="'display:block'">
              <li v-for="(item, index) in columnType1" :key="index" :class="'two-columns-' + index">
                <a href="javascript:void(0)" :data-id="item.dataId" @click="isTwoNav($event, index)" :data-index="index" class="arrow-up">
                  {{item.title}}
                </a>
                <ul class="three-column" :class="'three-column-' + index" v-if="item.subNav && showTwoNav" :style="index === 0 ? 'display:block' : 'display:' + display" :data-index="index">
                  <li v-for="(subNav, subNavIndex) in item.subNav" :key="subNavIndex" :class="'three-columns-' + subNavIndex" @click="docH5ListType($event, subNav.subNavTypeId)">
                    <a class="link-a" :class="[(index === 0 && subNavIndex === 0) ? 'link-active' : '']" :data-id="subNav.subNavTypeId" :data-tit="subNav.subNavTitle" :data-index="subNavIndex"> {{subNav.subNavTitle}} </a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
        <ul class="one-column">
          <li class="one-columns">
            <a href="javascript:void(0)"  :data-id="'2'" class="arrow-up" @click="isOneNav($event)">
              H5
            </a>
            <ul class="two-column twoColumn" v-if="columnType2" :style="'display:'+ display">
              <li class="" v-for="(item, index) in columnType2" :key="index" :class="'two-columns-' + index" @click="docH5ListType($event, item.dataId)">
                <a class="link-a" :data-id="item.dataId"> {{item.title}} </a>
              </li>
            </ul>
          </li>
        </ul>
        <div class="doc-column cow_col_24"></div>
      </div>
      <div class="doc-right-center">
        <div class="doc-content-chunk" v-if="content">
          <h2 class="doc-content-tit">
            <span class="docTit">{{currentTit}}</span>
          </h2>
          <div class="content-chunk" v-html="content"></div>
          <button class="doc-content-tool">API在线测试工具</button>
        </div>
      </div>
    </div>
    <!-- <coco-footer></coco-footer> -->
  </div>
</template>

<script type="text/ecmascript-6">
  // import velocity from 'velocity-animate'
  import cocoFooter from '../../components/footer/footer.vue'
  export default {
    name: 'document',
    components: {
      cocoFooter
    },
    data () {
      return {
        columnType: '', // 二级栏目
        subNav: '', // 三级栏目
        content: '', // 文档中心内容
        // currentH5Id: window.sessionStorage.getItem('curId') ? window.sessionStorage.getItem('curId') : '48', // 初始化文档id
        currentH5Id: '48', // 初始化文档id
        currentTit: window.sessionStorage.getItem('curTit') ? window.sessionStorage.getItem('curTit') : 'API入驻指南', // 当前默认title
        showOneNav: false, // 初始化一级导航是否需要隐藏导航
        showTwoNav: true, // 始化二级导航是否需要隐藏导航
        isShow: false,
        display: 'none', // 初始化
        iconClass: 'down',
        docList: [
          // API文档模拟数据
          {
            'docType': 'API',
            'docId': '1',
            'docHref': 'docApi',
            'columnType': [
              {
                'title': 'API入驻指南',
                'dataId': '66',
                'subNav': [
                  {
                    'subNavTitle': 'API入驻指南',
                    'subNavTypeId': '68'
                  },
                  {
                    'subNavTitle': 'API入驻常见问题',
                    'subNavTypeId': '69'
                  }
                ]
              },
              {
                'title': '基础支持',
                'dataId': '43',
                'subNav': [
                  {
                    'subNavTitle': '接口通用参数',
                    'subNavTypeId': '30'
                  },
                  {
                    'subNavTitle': '生成签名',
                    'subNavTypeId': '31'
                  }
                ]
              },
              {
                'title': '支付业务',
                'dataId': '42',
                'subNav': [
                  {
                    'subNavTitle': '支付接口',
                    'subNavTypeId': '39'
                  }
                ]
              },
              {
                'title': '订单业务',
                'dataId': '41',
                'subNav': [
                  {
                    'subNavTitle': '创建订单接口',
                    'subNavTypeId': '35'
                  },
                  {
                    'subNavTitle': '订单详情单个查询接口',
                    'subNavTypeId': '36'
                  },
                  {
                    'subNavTitle': '订单详情批量查询接口',
                    'subNavTypeId': '37'
                  },
                  {
                    'subNavTitle': '查询物流轨迹接口',
                    'subNavTypeId': '38'
                  },
                  {
                    'subNavTitle': '查询物流信息接口',
                    'subNavTypeId': '46'
                  }
                ]
              },
              {
                'title': '商品业务',
                'dataId': '40',
                'subNav': [
                  {
                    'subNavTitle': '查询商品列表接口',
                    'subNavTypeId': '29'
                  },
                  {
                    'subNavTitle': '批量查询商品详情接口',
                    'subNavTypeId': '32'
                  },
                  {
                    'subNavTitle': '批量查询商品价格接口',
                    'subNavTypeId': '33'
                  },
                  {
                    'subNavTitle': '批量查询商品库存接口',
                    'subNavTypeId': '34'
                  },
                  {
                    'subNavTitle': '查询商品分类接口',
                    'subNavTypeId': '45'
                  },
                  {
                    'subNavTitle': '查询增量更新商品接口',
                    'subNavTypeId': '70'
                  }
                ]
              }
            ]
          },
          // H5文档模拟数据
          {
            'docType': 'H5',
            'docId': '2',
            'docHref': 'docH5',
            'columnType': [
              {
                'title': '入驻指南',
                'dataId': '48',
                'subNav': [
                  {
                    'subNavTitle': '三级菜单',
                    'subNavTypeId': '3'
                  }
                ]
              },
              {
                'title': '生成免登陆url',
                'dataId': '49'
              },
              {
                'title': '用户积分扣除接口',
                'dataId': '50'
              },
              {
                'title': '订单兑换成功/失败消息的接收接口',
                'dataId': '51'
              },
              {
                'title': '签名规则',
                'dataId': '52'
              },
              {
                'title': '售后订单通知接口',
                'dataId': '71'
              },
              {
                'title': '获取内页直达链接接口',
                'dataId': '72'
              },
              {
                'title': '收货地址同步接口',
                'dataId': '73'
              }
            ]
          }
        ],
        columnType1: [
          {
            'title': 'API入驻指南',
            'dataId': '66',
            'subNav': [
              {
                'subNavTitle': 'API入驻指南',
                'subNavTypeId': '68'
              },
              {
                'subNavTitle': 'API入驻常见问题',
                'subNavTypeId': '69'
              }
            ]
          },
          {
            'title': '基础支持',
            'dataId': '43',
            'subNav': [
              {
                'subNavTitle': '接口通用参数',
                'subNavTypeId': '30'
              },
              {
                'subNavTitle': '生成签名',
                'subNavTypeId': '31'
              }
            ]
          },
          {
            'title': '支付业务',
            'dataId': '42',
            'subNav': [
              {
                'subNavTitle': '支付接口',
                'subNavTypeId': '39'
              }
            ]
          },
          {
            'title': '订单业务',
            'dataId': '41',
            'subNav': [
              {
                'subNavTitle': '创建订单接口',
                'subNavTypeId': '35'
              },
              {
                'subNavTitle': '订单详情单个查询接口',
                'subNavTypeId': '36'
              },
              {
                'subNavTitle': '订单详情批量查询接口',
                'subNavTypeId': '37'
              },
              {
                'subNavTitle': '查询物流轨迹接口',
                'subNavTypeId': '38'
              },
              {
                'subNavTitle': '查询物流信息接口',
                'subNavTypeId': '46'
              }
            ]
          },
          {
            'title': '商品业务',
            'dataId': '40',
            'subNav': [
              {
                'subNavTitle': '查询商品列表接口',
                'subNavTypeId': '29'
              },
              {
                'subNavTitle': '批量查询商品详情接口',
                'subNavTypeId': '32'
              },
              {
                'subNavTitle': '批量查询商品价格接口',
                'subNavTypeId': '33'
              },
              {
                'subNavTitle': '批量查询商品库存接口',
                'subNavTypeId': '34'
              },
              {
                'subNavTitle': '查询商品分类接口',
                'subNavTypeId': '45'
              },
              {
                'subNavTitle': '查询增量更新商品接口',
                'subNavTypeId': '70'
              }
            ]
          }
        ],
        columnType2: [
          {
            'title': '入驻指南',
            'dataId': '48',
            'subNav': [
              {
                'subNavTitle': '三级菜单',
                'subNavTypeId': '3'
              }
            ]
          },
          {
            'title': '生成免登陆url',
            'dataId': '49'
          },
          {
            'title': '用户积分扣除接口',
            'dataId': '50'
          },
          {
            // 'title': '订单兑换成功/失败消息的接收接口',
            'title': '订单兑换的接收接口',
            'dataId': '51'
          },
          {
            'title': '签名规则',
            'dataId': '52'
          },
          {
            'title': '售后订单通知接口',
            'dataId': '71'
          },
          {
            'title': '获取内页直达链接接口',
            'dataId': '72'
          },
          {
            'title': '收货地址同步接口',
            'dataId': '73'
          }
        ],
        docTypeId: window.sessionStorage.getItem('docTypeId')
      }
    },
    created () {
      this.scrollTop()
      this.queryDocH5list(this.currentH5Id)
      this.queryList()
//      document.querySelectorAll('.three-column')[0].style.display = 'block'
    },
    methods: {
      iconClick (e) {
        let target = e.target.parentNode
        let colummns = document.querySelectorAll('.three-column')
        const present = target.querySelector('.three-column')
        switch (this.iconClass) {
          case 'up':
            e.target.parentNode.children[1].classList.remove('active')
            if (present.style.display === 'block') {
              for (let i = 0; i < colummns.length; i++) {
                colummns[i].style.display = 'none'
              }
              e.target.classList.remove('arrow-down')
              e.target.classList.add('arrow-up')
            }
            this.iconClass = 'down'
            break
          case 'down':
            e.target.parentNode.children[1].classList.add('active')
            if (e.target) {
              this.iconClass = 'up'
            }
            break
        }
      },
      // 页面置顶
      scrollTop () {
        window.scrollTo(0, 0)
        document.body.scrollTop = 0
      },
      // 处理导航列表数据
      queryList () {
        this.docList.forEach(item => {
          this.docList = item
        })
      },
      // 当前选择切换的文档栏目类型
      docH5ListType (e) {
        if (e !== null) {
          // this.currentTit = e.target.innerHTML
          this.currentH5Id = e.target.getAttribute('data-id')
          this.currentTit = e.target.getAttribute('data-tit')
          let list = document.querySelectorAll('.link-a')
          list.forEach(o => {
            o.classList.remove('link-active')
          })
          e.target.classList.add('link-active')
          // window.sessionStorage.setItem('curId', this.currentH5Id)
          // window.sessionStorage.setItem('curTit', this.currentTit)
          this.queryDocH5list(this.currentH5Id)
        } else {
          this.queryDocH5list(this.currentH5Id)
        }
      },
      // 获取H5文档
      queryDocH5list (currentH5Id) {
        let url = this.$api.DOCUMENT.POST_API_APIDETAIL
        this.axios.get(`${url}?id=${currentH5Id}`).then(({data: {data}}) => {
          this.content = data.content
          this.currentTit = data.title
        })
      },
      // 一级导航是否展示 || 隐藏导航
      isOneNav (e) {
        let target = e.target.parentNode
        const present = target.querySelector('.two-column')
        let list = document.querySelectorAll('.two-column')
        list.forEach(o => {
          if (o !== present) {
            o.classList.remove('arrow-down')
            o.style.display = 'none'
          }
        })
        let listOne = document.querySelectorAll('.one-columns>a')
        listOne.forEach(o => {
          if (o !== e.target) {
            o.classList.remove('arrow-down')
            o.classList.add('arrow-up')
          }
        })
        if (present.style.display === 'block') {
          present.style.display = 'none'
          e.target.classList.remove('arrow-down')
          e.target.classList.add('arrow-up')
        } else {
          present.style.display = 'block'
          e.target.classList.remove('arrow-up')
          e.target.classList.add('arrow-down')
        }
      },
      // 二级级导航是否展示 || 隐藏导航
      isTwoNav (e, index) {
        let target = e.target.parentNode
        let present = target.querySelector('.three-column')
        let list = document.querySelectorAll('.three-column')
        list.forEach(o => {
          if (o !== present) {
            o.parentNode.querySelector('a').classList.remove('arrow-down')
            o.parentNode.querySelector('a').classList.add('arrow-up')
            o.style.display = 'none'
          } else {
            if (o.style.display === 'block') {
              o.parentNode.querySelector('a').classList.remove('arrow-down')
              o.parentNode.querySelector('a').classList.add('arrow-up')
              o.style.display = 'none'
            } else {
              o.parentNode.querySelector('a').classList.remove('arrow-up')
              o.parentNode.querySelector('a').classList.add('arrow-down')
              o.style.display = 'block'
            }
          }
        })
        // if (present.style.display === 'block') {
        //   present.style.display = 'none'
        //   e.target.classList.remove('arrow-down')
        //   e.target.classList.add('arrow-up')
        // } else {
        //   present.style.display = 'block'
        //   e.target.classList.remove('arrow-up')
        //   e.target.classList.add('arrow-down')
        // }
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../assets/css/stylusFn.styl'
  /* doc-container start */
  /* .two-column > li:first-child ul:nth-child(2)
    display block */
  .doc-container
    min-width 960px
    height 100%
    background-color $defaultBg
    overflow hidden
    /* doc-content start */
    .doc-content
      min-height 100%
      background-color $Bg32
      overflow hidden
      text-align(left)
      /* doc-column-left start */
      .doc-column-left
        width 260px
        float left
        background-color $Bg32
        .isShow
          width 12px
          height 10px
          display inline-block
          position absolute
          /*top auto*/
          right 20px
        .arrow-down
          animation: bounce-in .5s
          background url($imgpath + 'down.png') no-repeat right
          margin-right 20px
        .arrow-up
          animation: bounce-in .5s
          margin-right 20px
          background url($imgpath + 'up.png') no-repeat right
        a
         color $clrd5
        .one-column
          background-color #444
          // background: linear-gradient(#444, #777)
          overflow hidden
          &:before
            content: ""
            height: 0
            border-color: transparent transparent transparent #000

          .one-columns
            a
              padding 20px
          li
            .link-a
              padding 12px 20px
            a
              font-weight bold
              font-size 16px
              display block
            .two-column
              background-color #555
              custor: pointer
              animation: bounce-in .5s
              li
                padding-left 20px
                transition: height 0.3s ease-in-out
                // transform: rotate(360deg)
                a:hover
                  color white
                a
                  font-size 14px
                  font-weight normal
            .twoColumn
              // .router-link-exact-active
              .link-active
                color $clrfff
                &::before
                  positions(absolute, left: 20px)
                  display table
                  content ''
                  clear both
                  width 3px
                  height 20px
                  background  $clrDF4A43
            .three-column
              /* background-color #777 */
              .link-active
                color $clrfff
                &::before
                  positions(absolute, left: 40px)
                  display table
                  content ''
                  clear both
                  width 3px
                  height 20px
                  background  $clrDF4A43
            .active
              display none
              li
                a
                  font-weight normal
                  font-size 14px !important
                  padding 15px 30px
      /* doc-column-left end */
      /* doc-right-center start */
      .doc-right-center
        overflow hidden
        min-width 700px
        min-height 498px
        margin-left 260px
        background-color #f4f4f4
        .doc-content-chunk
          box-sizing border-box
          min-width 700px
          margin 72px
          padding 60px
          background-color $defaultBg
          .doc-content-tit
            font-size 18px
            padding-left 10px
            border-bottom 1px #d5d5d5 solid
            span
              padding: 18px 0px
              border-bottom 3px $clrDF4A43 solid
              display inline-block
              position relative
              bottom -2px
          .doc-content-tool
            cursor pointer
            width 220px
            height 46px
            margin-top 20px
            border 1px solid $clrDF4A43
            background-color $defaultBg
            border-radius 3px
            color $clrDF4A43
            font-size $fontSize18
            &:hover
              background-color $clrDF4A43
              color $clrfff
          .content-chunk
            padding 20px 0
            line-height 30px
            img
              max-width 100%
      /* doc-right-center end */
    /* doc-content end */
  /* doc-container end */
</style>

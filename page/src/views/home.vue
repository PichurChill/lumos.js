<template>
  <div class="home">
   
    <div class="body">
        <div class="top-right" @click="handleDoc">Doc</div>
        <p class="title" ref="title">
            Lumos
        </p>
        <div class="wand-conent">
            <div ref="lightSpot" class="light-spot">
        
            </div>
            <div class="wand">
                <img ref="wandImg" src="~@/assets/magic-wand.png" alt="">
            </div>
        </div>
        <a class="download" href="https://cdn.jsdelivr.net/npm/lumos.js">
            <strong>Lumos.min.js</strong>
            <p class="download-info">v{{version}}</p>
        </a>
        <p class="sub-title">
            A simple modern JavaScript utility library
        </p>
        <p class="sub-title__desc">
          Named after the light-giving spell in <span>Harry Potter</span>
        </p>
        <div class="repo">
          <img style="margin-right: 10px" alt="npm" src="https://img.shields.io/npm/v/lumos.js.svg">
          <img style="margin-left: 10px" alt="GitHub stars" src="https://img.shields.io/github/stars/pichurchill/lumos.js.svg?style=social">
        </div>
    </div>
    <!-- <div class="footer">
    </div> -->
    <!-- <div class="glitch">
      <div class="glitch__item"></div>
      <div class="glitch__item"></div>
      <div class="glitch__item"></div>
      <div class="glitch__item"></div>
      <div class="glitch__item"></div>
    </div> -->
  </div>
</template>

<script>
import { TimelineLite } from "gsap/TweenMax";
import lumos from 'lumos.js'

export default {
  name: 'home',
  data () {
    return {
      version: lumos.version
    }
  },
  mounted () {
    this.init()
  },

  methods: {
    init () {
      let t = new TimelineLite()
      // 标题出现
      t.to(this.$refs.title, 0, { className: "+=animated fadeInUp" })
      // // 开始挥魔杖
      t.to(this.$refs.wandImg, 0, { className: "+=animated wobble" }, "0.8")
      // // 挥魔杖结束 咒语生效、开始闪烁、字体发光
      t.to(this.$refs.lightSpot, 0, { className: "+=light-spot-animate" }, "1.7")
      t.to(this.$refs.title, 3, { className: "+=super-shadow glitch__title" }, "1.7")
    },
    handleDoc () {
      alert('coming soon...')
    }
  }
}
</script>

<style lang="scss">
 @import '~@/styles/glitch.scss';
  .home {
    height: 100%;
    background: radial-gradient(#5e5b5b, #24242a);
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    .body {
         flex: 1 0 auto;
         position: relative;
        .top-right {
          color: #9e9e9e;
          font-size: .14rem;
          font-weight: bolder;
          position: absolute;
          right: .1rem;
          top: .07rem;
        }
        .title {
            clear: both;
            text-align: center;
            font-size: .7rem;
            font-weight: 800;
            letter-spacing: .03rem;
            /* text-transform: uppercase; */
            padding-top: 3%;
            margin-bottom: .5rem;
            color: #fff;
          text-shadow:      
                    0 1px 0 hsl(174,5%,80%),
                    0 2px 0 hsl(174,5%,75%),
                    0 3px 0 hsl(174,5%,70%),
                    0 4px 0 hsl(174,5%,66%);
        }
        .super-shadow {
          text-shadow:      
                    0 1px 0 hsl(174,5%,80%),
                    0 2px 0 hsl(174,5%,75%),
                    0 3px 0 hsl(174,5%,70%),
                    0 4px 0 hsl(174,5%,66%),


                    0 -0 5px rgba(255,255,255,.05),
                    0 -1px 3px rgba(255,255,255,.2),
                    0 -3px 5px rgba(255,255,255,.2),
                    0 -5px 10px rgba(255,255,255,.2),
                    0 -10px 10px rgba(255,255,255,.2);
        }
        .wand-conent  .wand img{
            display: block;
            width: 1.8rem;
            margin: 0 auto;
            filter: blur(.5px);
        }
        .wand-conent  .light-spot {
            width: 30px;
            height: 30px;
            margin: 20px auto;
            background: #fffbe1;
            border-radius: 50%;
            box-shadow: 0px 0px 19px #cbe2f9;
            filter: blur(6px);        
            outline: none;
            opacity: 0;
        }
        .wand-conent  .light-spot-animate {
            opacity: 1;
            animation: start-shine 4s forwards, shining 5s  4s infinite;
        }
        .download {
          display: block;
          font-size: .2rem;
          width: 1.8rem;
          height: .7rem;
          color: #333;
          background: #FF9800;
          // font-weight: bold;
          text-align: center;
          padding: .1rem;
          padding-top: .15rem;
          margin: 0 auto;
          text-decoration: none;
          margin-top: 0.4rem;
          &-info {
            font-size: .13rem;
          }
        }
        .sub-title {
            color: #fff;
            font-size: .19rem;
            text-align: center;
            margin-top: .5rem;
        }
        .sub-title__desc {
          color: #a7a7a7;
          font-size: .13rem;
          margin-top: .1rem;
          text-align: center;
          & span  {
            font-style: italic;
          }
        }
        .repo {
          margin-top: .3rem;
          text-align: center;
          img {
            vertical-align: top;
          }
          height: 30px;
          overflow: hidden;
        }
    }
    .footer {
      flex-shrink: 0;

    }
    @keyframes start-shine {
        0% {
            transform: scale(0.1);
        }

        25% {
            transform: scale(0.6);
        }
        65% {
            transform: scale(0.4);
        }

        100% {
            transform: scale(1.6);   
            box-shadow: 0px 0px 25px #cbe2f9;
        }
    }
    @keyframes shining {
        0% {
            transform: scale(1.6);            
            box-shadow: 0px 0px 25px #cbe2f9;             
        }
        50% {
            transform: scale(1.75);         
            filter: blur(7px);    
            box-shadow: 0px 0px 27px #cbe2f9;            
        }

        100% {
            transform: scale(1.6);         
            box-shadow: 0px 0px 25px #cbe2f9;         
        }
    }
  }
</style>

<template>
      <div id="top-bar">
            <div class="icons">
                  
                        <!-- <i class="margin5"><font-awesome-icon icon="phone" flip="horizontal"/></i> -->
                      
                  <i class="margin5">
				<a href="https://www.facebook.com/hoopbattle3x3" target="_blank">
					<font-awesome-icon :icon="['fab', 'facebook-f']" /> 
				</a>
                  </i>
                  <i class="margin5">
				<a href="https://www.instagram.com/hbc3x3" target="_blank">
					<font-awesome-icon :icon="['fab', 'instagram']" /> 
				</a>
                  </i>
            </div>
            <div class="lang" @click="hideMenu = !hideMenu">
                  <span class="margin5 lang-show">{{ lang }} <font-awesome-icon icon="sort-down" /></span>
                  <ul v-show="hideMenu" class="side-menu">
                        <!-- <li @click.stop="setLangTW">繁體</li> -->
                        <li @click.stop="setLangCN">简体</li>
                        <li @click.stop="setLangEN">EN</li>
                  </ul>
            </div>
      </div>
</template>
<script>
export default {
      data(){
            return{
                  lang:"",
                  hideMenu: false
            }
      },
      methods:{
            setLangTW(){
                  this.hideMenu = false
                  this.$i18n.locale = 'zh_TW';
                  localStorage.lang = 'zh_TW';
                  localStorage.langShow = "繁體";
                  this.lang = localStorage.langShow;
                  document.querySelector('html').setAttribute('lang','zh-TW');
			window.location.reload();
            },
            setLangCN(){
                  this.hideMenu = false
                  this.$i18n.locale = 'zh_CN';
                  localStorage.lang = 'zh_CN';
                  localStorage.langShow = "简体";
                  this.lang = localStorage.langShow;
                  document.querySelector('html').setAttribute('lang','zh-CN');
			window.location.reload();
            },
            setLangEN(){
                  this.lang = "EN";
                  this.$i18n.locale = 'en_US';
                  localStorage.lang = 'en_US';
                  localStorage.langShow = "EN";
                  this.lang = localStorage.langShow;
                  this.hideMenu = false;
                  document.querySelector('html').setAttribute('lang','en');
			window.location.reload();
            }
      },
      mounted(){
            this.lang = localStorage.langShow ? localStorage.langShow : 'EN';
            document.querySelector('html').setAttribute('lang',this.toLang)
      },
      computed:{
            // eslint-disable-next-line
            toLang(){
                  switch(this.lang){
                        case '' : return 'en';
                        case 'EN' : return 'en';
                        case '繁體' : return 'zh-TW';
                        case '简体' : return 'zh-CN'
                  }
            }
      }
}
</script>
<style lang="less" scoped>
#top-bar{
      width: 100%;
      height: 75px;
      display: flex;
      justify-content: flex-end;
      background-color: #000;
      color: #fff;
      align-items: center;
      padding: 0 80px;
      font-size: 16px;
      
      .margin5{
            margin: 0 10px;
		a{
			color: #fff;
		}
            i{
                  font-size: 14px;
            }
      }
      .lang{
            display: flex;
            position: relative;
            cursor: pointer;
            .side-menu{
                  position: absolute;
                  top: 20px;
                  font-size: 14px;
                  left: 10px;
                  z-index: 1000;
                  li{
                        padding: 2px 5px;
                        border-bottom: 1px solid #fff;
                        
                  }
            }
            .lang-show{
                  width: 50px;
            }
      }
}
@media screen and(max-width: 700px){
      #top-bar{
            padding: 0 15px;
            font-size: 12px;
            height: 40px;
            .lang{
                  .side-menu{
                        font-size: 12px;
                  }
                  .lang-show{
                        width: 40px;
                  }
            } 
            
      }
}
</style>

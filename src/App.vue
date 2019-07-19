<template>
  <div id="app" v-cloak>
		<keep-alive>
			<router-view></router-view>
		</keep-alive>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
    
  }
}
</script>

<style lang="less">
[v-cloak]{
  display: none;
}
*{
  box-sizing: border-box;
  font-family: "Microsoft YaHei";
}
html,body{
  margin: 0;
  padding: 0;
}
ul,li{
  margin: 0;
  padding: 0;
  list-style: none;
}
a{
  text-decoration: none;
  color: #333;
}
</style>

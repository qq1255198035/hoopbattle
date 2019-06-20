<template>
      <div id="footer">
            <p>{{ $t('copyright') }}</p>
            <a href="https://www.westacks.com" target="_blank">{{ $t('powered') }}</a>
            
      </div>
</template>
<script>
export default {
      
}
</script>
<style lang="less" scoped>
#footer{
      width: 100%;
      background-color: #181818;
      height: 105px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      p{
            color: #fff;
            text-align: center;
      }
      a{
            color: #1d44a0;
            text-align: center;
            text-decoration: underline;
      }
}
@media screen and (max-width: 700px){
      #footer{
            height: 40px;
            p{
                  font-size: 12px;
            }
}
}
</style>

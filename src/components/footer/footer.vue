<template>
      <div id="footer">
            <p>{{ $t('copyright') }}</p>
      </div>
</template>
<script>
export default {
      
}
</script>
<style lang="less" scoped>
#footer{
      width: 100%;
      background-color: #000;
      height: 105px;
      display: flex;
      align-items: center;
      justify-content: center;
      p{
            color: #fff;
            text-align: center;
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

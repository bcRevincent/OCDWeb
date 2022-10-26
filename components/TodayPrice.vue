<template>
  <div class="todayPrice">
    <h2> <font color="#fff"> Today Average Price: </font></h2>
    <h2>700 $</h2>
    <div class="tableLine"></div>
  </div>
</template>


<script>
export default {
  name: "TodayPrice"
}
</script>


<style scoped>
.todayPrice {
  background: #1a1a1a;
  width: 80%;
  height: 140px;
  text-align: center;
  margin: auto;
  position: relative;
  justify-content: center;
  /*display:flex;*/
  align-items:center;
  opacity: 0.8;
}

.tableLine {
    position: relative;
    margin-top: 60px;
    /*align-content: center;*/
    width: 100%;
    height: 1px;
    background-color: #d4d4d4;
    text-align: center;
    font-size: 16px;
  /*overflow: auto;*/
    color: rgba(101, 101, 101, 1);
  }
 /*.midText {*/
 /*   position: absolute;*/
 /*   left: 50%;*/
 /*   background-color: #ffffff;*/
 /*   padding: 0 15px;*/
 /*   transform: translateX(-50%) translateY(-50%);*/
 /* }*/
</style>

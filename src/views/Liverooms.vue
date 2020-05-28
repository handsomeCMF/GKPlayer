<template>
    <section>
        <div id="titleBar">

        </div>
        <div id="advertisement">

        </div>
        <div id="typeBar">

        </div>
        <div id="streamer">
          <ul>
            <li v-for="item in liverooms" :key="item.id">
              <router-link :to="{name:'liveroom',params:{id:item.userId,avatorImg:item.avatorImg}}" style="text-decoration:none">
                <streamer-item :field="item.field" :title="item.title" :fire="item.fire" :sname="item.sname" :introduce="item.introduce" :avatarImg="item.avatorImg" :imgpath="item.imagepath"></streamer-item>
              </router-link>

            </li>
          </ul>
            <div class="block">
                <el-pagination :page-count="6" :page-size="pageSize" background layout="total,sizes,prev, pager, next, jumper" :total="total"
                 @size-change='changePageSize'
                 @current-change="getRoomList"
                 :page-sizes="[1,2,5,10]"
                 :current-page="currentpage"
                 >
                </el-pagination>
            </div>
        </div>
    </section>
</template>

<style scoped>
#streamer>ul{
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
}
#streamer>ul>li:hover{
  transform: scale(1.1,1.1);
}
#streamer>ul>li{
  transition: .3s ease-in-out;
  padding:0px 14px;
  margin-bottom: 20px;
}
.el-pagination{
  text-align: center;
}

</style>

<script type="text/javascript" src='@/resources/js/Liverooms.js'>
</script>

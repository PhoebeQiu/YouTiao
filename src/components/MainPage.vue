<template>
  <div class="page">
    <div class="body">
      <Tabs value="name1" :animated="false" class="tabsLabel">
        <TabPane label="记账" name="name1">
          <div class="content">
            <div>
              <div class="conHeader">
                <Button id="conBook" v-on:click="toBook" type="text">
                  <p><Icon type="ios-book-outline" size="22"/></p>
                </Button>
                <Button id="conAdd" shape="circle"><p>添加预算</p></Button>
                <Button id="conCalendar" type="text">
                  <Icon type="ios-calendar-outline" size="22"/>
                </Button>
              </div>
              <div class="conMiddle">
                <div class="conMiddle_div">
                  <p>10月收入：<br/></p>
                  <p class="conMiddle_p">1000.00</p>
                </div>
                <div class="conMiddle_div">
                  <Button :size="buttonSize" icon="" shape="circle">
                    <Icon type="ios-arrow-dropdown-circle" size="33"/>
                    <br/> 记一笔
                  </Button>
                </div>
                <div class="conMiddle_div">
                  <p>10月支出：<br/></p>
                  <p class="conMiddle_p">1000.00</p>
                </div>
              </div>
              <div class="confoot">
                <Timeline>
                  <TimelineItem>
                    <div class="confoot_time">1976年</div>
                    <div class="confoot_content">
                      <p><Icon type="ios-restaurant-outline" size="25"/>111Apple I 问世</p>
                      <p><Icon type="ios-card" size="25"/>111Apple I 问世</p>
                    </div>
                  </TimelineItem>
                  <TimelineItem>
                    <div class="confoot_time">1984年</div>
                    <div class="confoot_content">
                      <p><Icon type="ios-restaurant-outline" size="25"/>222发布 Macintosh</p>
                      <p><Icon type="ios-card" size="25"/>222发布 Macintosh</p>
                    </div>
                  </TimelineItem>
                </Timeline>
              </div>
            </div>
            <div></div>
          </div>
        </TabPane>
        <TabPane label="报表" name="name2">标签二的内容</TabPane>
      </Tabs>
    </div>
    <div class="mainMenu">
      <div class="mainMenuSpan">记账</div>
      <div class="mainMenuSpan">资产</div>
      <div class="mainMenuSpan">我的</div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'MainPage',
  data () {
    return {
      buttonSize: 'large'
    }
  },
  methods: {
    // 跳转到账本组件
    toBook: function () {
      this.$router.push({name: 'Book'})
    }
  }
}
</script>

<style scoped>
  .page{
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }
  .content{
    height:350px;
    width:100%;
    font-size: 12px;
  }

  .conHeader{
    padding: 0% 3%;
    font-size: 5px;
  }
  #conBook{
    float:left;
  }
  #conAdd{
    height:25px;
    width: 25%;
    margin: 2% 0;
  }
  #conAdd p{
    font-size: 3px;
  }
  #conCalendar{
    float:right;
  }

  .conMiddle{
    padding: 1% 3%;
    margin-top: 6%;
    text-align: center;
    width: 100%;
    height: 90px;
  }
  .conMiddle_div{
    width: 33%;
    margin-right: 0.3%;
    float: left;
  }
  .conMiddle_div p{
    padding-top: 5%;
  }
  .conMiddle_p{
    font-size: 20px;
    font-weight: bold;
  }

  .confoot{
    padding-top: 2%;
    padding-left: 30%;
    text-align: left;
    width: 100%;
  }
  .confoot_time{
    width: 100%;
    font-size: 12px;
    padding-bottom: 2%;
  }
  .confoot_content{
    width: 100%;
    padding-left: 5px;
    font-size: 14px;
    font-weight: bold;
  }

  .mainMenu{
    width:100%;
    height:50px;
    border-top:1px solid #d7d2e6;
  }
  .mainMenuSpan{
    width: 33%;
    height: 30px;
    font-size: 18px;
    float: left;
    margin-right: 0.3%;
    border: 1px solid #bacee6;
  }
</style>

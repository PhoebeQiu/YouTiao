<template>
  <div>
    <div>
      <Button v-on:click="showIncomeCharts()" size="large" shape="circle">总收入</Button>
      <Button v-on:click="showOutcomeCharts()" size="large" shape="circle">总支出</Button>
      <Button v-on:click="showTotalcomeCharts()" size="large" shape="circle">总结余</Button>
    </div>
    <div id="AccountEcharts" style="width: 400px;height: 300px;"></div>
  </div>
</template>

<script>
import echarts from 'echarts'
import account from '@/service/account'

export default {
  name: 'AccountCharts',
  data () {
    return {
      // 图表,所需数据
      incomeList: [],
      outcomeList: [],
      totalcomeList: [],
      // 图表,展示数据
      charts: '',
      opinion: [],
      opinionData: []
    }
  },
  computed: {
    // 账本
    bookId () {
      return this.$store.state.Book.bookId
    }
  },
  beforeMount: function () {
    // 自动加载 图表所需的账本记录
    this.$nextTick(function () {
      this.getAccountsForCharts(this.bookId)
    })
  },
  mounted: function () {
  },
  methods: {
    // 加载 图表所需数据
    async getAccountsForCharts (bookId) {
      let getAccounts = await account.getAccountsForCharts(bookId)
      console.log('图表所需数据:', getAccounts)
      this.incomeList = getAccounts.income
      this.outcomeList = getAccounts.outcome
      this.totalcomeList = getAccounts.totalCome
    },
    // 绘制图表
    drawPie (id) {
      this.charts = echarts.init(document.getElementById(id))
      this.charts.setOption({
        tooltip: {
          trigger: 'item',
          formatter: '{a}<br/>{b}:{c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: this.opinion
        },
        series: [
          {
            name: '来源',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: this.opinionData,
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      })
    },
    // 加载图表
    showIncomeCharts: function () {
      this.opinion = []
      this.opinionData = []
      for (let i = 0; i < this.incomeList.length; i++) {
        this.opinion.push(this.incomeList[i].type)
        this.opinionData.push({
          value: this.incomeList[i].expense,
          name: this.incomeList[i].type
        })
      }
      this.drawPie('AccountEcharts')
    },
    showOutcomeCharts: function () {
      this.opinion = []
      this.opinionData = []
      for (let i = 0; i < this.outcomeList.length; i++) {
        this.opinion.push(this.outcomeList[i].type)
        this.opinionData.push({
          value: this.outcomeList[i].expense,
          name: this.outcomeList[i].type
        })
      }
      this.drawPie('AccountEcharts')
    },
    showTotalcomeCharts: function () {
      this.opinion = ['totalIncome', 'totalOutcome']
      this.opinionData = [
        {value: this.totalcomeList.totalIncome, name: 'totalIncome'},
        {value: this.totalcomeList.totalOutcome, name: 'totalOutcome'}
      ]
      this.drawPie('AccountEcharts')
    }
  }
}
</script>

<style scoped>

</style>

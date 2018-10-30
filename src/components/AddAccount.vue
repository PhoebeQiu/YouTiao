<template>
  <div>
    <Form :model="formItem" :label-width="80">
      <FormItem label="金额">
        <Input v-model="formItem.inputMoney" style="width: 200px" placeholder="请输入"/>
      </FormItem>
      <FormItem label="属于">
        <Select v-model="formItem.selectBelong" style="width:200px">
          <Option v-for="item in formItem.accBelong" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
      </FormItem>
      <FormItem label="类别">
        <Select v-model="formItem.selectType" style="width:200px">
          <Option v-for="item in formItem.accType" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
      </FormItem>
      <FormItem label="日期">
        <DatePicker type="date" style="width:200px" placeholder="请选择" v-model="formItem.date"></DatePicker>
      </FormItem>
      <FormItem label="备注">
        <Input v-model="formItem.textarea" type="textarea" style="width:200px" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入"></Input>
      </FormItem>
      <FormItem>
        <Button v-on:click="addAccount(bookId)" type="primary">添加</Button>
        <Button v-on:click="toMainPage(bookId)" style="margin-left: 8px">返回</Button>
      </FormItem>
    </Form>
  </div>
</template>

<script>
import account from '@/service/account'

export default {
  name: 'AddAccount',
  data: function () {
    return {
      formItem: {
        inputMoney: '',
        selectBelong: '',
        accBelong: [
          {
            value: 'income',
            label: '收入'
          },
          {
            value: 'outcome',
            label: '支出'
          }
        ],
        selectType: '',
        accType: [
          {
            value: 'diet',
            label: '饮食'
          },
          {
            value: 'traffic',
            label: '交通'
          },
          {
            value: 'shopping',
            label: '购物'
          },
          {
            value: 'live',
            label: '居住'
          },
          {
            value: 'amusement',
            label: '娱乐'
          },
          {
            value: 'health',
            label: '医疗'
          },
          {
            value: 'educate',
            label: '教育'
          },
          {
            value: 'other',
            label: '其它'
          }
        ],
        date: '',
        textarea: ''
      }
    }
  },
  computed: {
    // 账本
    bookId () {
      return this.$store.state.Book.bookId
    }
  },
  mounted: function () {
  },
  methods: {
    // 跳转
    toMainPage: function (id) {
      this.$router.push({name: 'MainPage'})
    },
    // 添加记录到账本
    async addAccount (id) {
      // 日期处理
      var date = this.formItem.date
      var dateValue = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
      console.log('后台没有添加日期！！！', dateValue)
      var tempAccount = {
        'expense': this.formItem.inputMoney,
        'incomeOrOutcome': this.formItem.selectBelong,
        'costType': this.formItem.selectType,
        'descr': this.formItem.textarea
      }
      console.log('json:', tempAccount)
      // 提交数据到后台
      let addAccount = await account.addAccount(id, tempAccount)
      console.log('提交后返回：', addAccount)
      let getAccounts = await account.getAccountsByBook(this.bookId)
      console.log('获取账本的所有记账信息：', getAccounts)
      // 更新 账本的所有记账信息
      this.$store.dispatch('updateAccounts', {arr: getAccounts})
      // 跳转
      this.$router.push({name: 'MainPage', params: {boookId: id}})
    }
  }
}
</script>

<style scoped>

</style>

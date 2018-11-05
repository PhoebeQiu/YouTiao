<template>
  <div>
    <Form :model="formItem" :label-width="80">
      <FormItem label="预算">
        <Input v-model="formItem.inputBudget" style="width: 200px" placeholder="请输入"/>
      </FormItem>
      <FormItem label="剩余预算提示">
        <Input v-model="formItem.inputWarnBudget" style="width: 200px" placeholder="请输入"/>
      </FormItem>
      <FormItem label="备注">
        <Input v-model="formItem.textarea" type="textarea" style="width:200px" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入"></Input>
      </FormItem>
      <FormItem>
        <Button v-on:click="addBudget(bookId)" type="primary">添加</Button>
        <Button v-on:click="toMainPage(bookId)" style="margin-left: 8px">返回</Button>
      </FormItem>
    </Form>
  </div>
</template>

<script>
import budget from '@/service/budget'

export default {
  name: 'AddBudget',
  data: function () {
    return {
      formItem: {
        inputBudget: '',
        inputWarnBudget: '',
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
    // 添加 预算
    async addBudget (id) {
      var tempBudget = {
        'budget': this.formItem.inputBudget,
        'warnBudget': this.formItem.inputWarnBudget,
        'descr': this.formItem.textarea
      }
      console.log('json:', tempBudget)
      // 提交数据到后台
      let addBudget = await budget.addBudget(id, tempBudget)
      console.log('提交后返回：', addBudget)
      // 跳转
      this.$router.push({name: 'MainPage'})
    }
  }
}
</script>

<style scoped>

</style>

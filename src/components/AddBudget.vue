<template>
  <div>
    <Form :model="formItem" :label-width="80">
      <FormItem label="Input">
        <Input v-model="formItem.input" placeholder="金额"></Input>
        <Input v-model="valBudgetMoney" style="width: 300px" />
      </FormItem>
      <FormItem label="Select">
        <Select v-model="formItem.select">
          <Option value="beijing">New York</Option>
          <Option value="shanghai">London</Option>
          <Option value="shenzhen">Sydney</Option>
        </Select>
      </FormItem>
      <FormItem label="DatePicker">
        <Row>
          <Col span="11">
            <DatePicker type="date" placeholder="Select date" v-model="formItem.date"></DatePicker>
          </Col>
        </Row>
      </FormItem>
      <FormItem label="Text">
        <Input v-model="formItem.textarea" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></Input>
      </FormItem>
      <FormItem>
        <Button type="primary">Submit</Button>
        <Button style="margin-left: 8px">Cancel</Button>
      </FormItem>
    </Form>
    <p>预算类别
    <Select v-model="budgetModel" style="width:200px">
      <Option v-for="item in budgetType" :value="item.value" :key="item.value">{{ item.label }}</Option>
    </Select>
    </p>
    <p>预算提醒金额</p><Input v-model="valBudgetAlert" style="width: 300px" />
  </div>
</template>

<script>
export default {
  name: 'AddBudget',
  data: function () {
    return {
      bookId: -1,
      formItem: {
        input: '',
        select: '',
        date: '',
        slider: [20, 50],
        textarea: ''
      },
      // input
      valBudgetMoney: '',
      valBudgetAlert: '',
      // 选择器
      budgetModel: '',
      budgetType: [
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
      ]
    }
  },
  mounted: function () {
    // 初始化 账本ID
    this.bookId = this.$route.params.boookId
  }
}
</script>

<style scoped>

</style>

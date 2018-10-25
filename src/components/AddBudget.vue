<template>
  <div>
    <p>预算类别</p>
    <Select v-model="budgetModel" style="width:200px">
      <Option v-for="item in budgetType" :value="item.value" :key="item.value">{{ item.label }}</Option>
    </Select>
    <p>金额</p><Input v-model="valBudgetMoney" style="width: 300px" />
    <p>预算提醒金额</p><Input v-model="valBudgetAlert" style="width: 300px" />
  </div>
</template>

<script>
export default {
  name: 'AddBudget',
  data: function () {
    return {
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
  }
}
</script>

<style scoped>

</style>

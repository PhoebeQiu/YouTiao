<template>
  <div>
    <p>预算类别</p>
    <Select v-model="accTypeModel" style="width:200px">
      <Option v-for="item in accType" :value="item.value" :key="item.value">{{ item.label }}</Option>
    </Select>
    <p>属于</p>
    <Select v-model="accToModel" style="width:200px">
      <Option v-for="item in accTo" :value="item.value" :key="item.value">{{ item.label }}</Option>
    </Select>
    <p>金额</p><Input v-model="valMoney" style="width: 300px" />
    <p>备注</p><Input v-model="valNote" style="width: 300px" />
  </div>
</template>

<script>
export default {
  name: 'AddAccount',
  data: function () {
    return {
      // input
      valMoney: '',
      valNote: '',
      // 选择器
      accTypeModel: '',
      accToModel: '',
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
      accTo: [
        {
          value: 'income',
          label: '收入'
        },
        {
          value: 'outcome',
          label: '支出'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>

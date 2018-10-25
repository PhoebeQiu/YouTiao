<template>
  <div>
    <!--<div>账本</div>-->
    <div>
      <h3><span></span>个人账本</h3>
      <div>
        <card>
          <Row :gutter="16">
            <div class="book" v-for="book in books" :key="book.id">
              <Col span="8">
                <Card :bordered="false">
                  <p><a v-on:click="toMainPage(book.id)">{{book.name}}</a></p>
                </Card>
              </Col>
            </div>
          </Row>
        </card>
      </div>
      <div>
        <Input v-model="value" placeholder="输入帐本名" style="width: 300px" />
        <button v-on:click="addAccBook()">添加账本</button>
      </div>
    </div>
  </div>
</template>

<script>
import book from '@/service/book'

export default {
  name: 'Book',
  data () {
    return {
      // input输入框
      value: ''
    }
  },
  computed: {
    books () {
      return this.$store.state.Book.books
    }
  },
  // 页面加载时使用方法
  mounted: function () {
    this.$nextTick(function () {
      this.getAllBook()
    })
  },
  methods: {
    // 获取全部账本
    async getAllBook () {
      let getBooks = await book.getBooks()
      console.log('获取全部账本：', getBooks)
      // 更新 所有账本
      this.$store.dispatch('updateBooks', {arr: getBooks})
    },
    // 跳转到主页
    toMainPage: function (id) {
      this.$router.push({name: 'MainPage', params: {boookId: id}})
    },
    // 添加账本并返回账本信息
    async addAccBook () {
      console.log('value的值', this.value)
      let addBookByName = await book.addBookByName(this.value)
      console.log('添加账本', addBookByName)
      console.log('id', addBookByName.id)
      this.$router.push({name: 'MainPage', params: {boookId: addBookByName.id}})
    }
  }
}
</script>

<style scoped>
.book{
  width: 100px;
  height: 100px;
  border: 1px solid #bacee6;
  margin: 5px;
}
</style>

<template>
  <div>
    <!--<div>账本</div>-->
    <div>
      <h3><span></span>个人账本</h3>
      <div>
        <card :bordered="false">
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
        <Input class="addBook" v-model="value" placeholder="输入帐本名" style="width: 300px" />
        <Button class="addBook" v-on:click="addAccBook()" shape="circle">添加账本</Button>
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
      books: [],
      // input输入框
      value: ''
    }
  },
  computed: {
    bookId () {
      return this.$store.state.Book.bookId
    }
  },
  // 页面加载时使用方法
  mounted: function () {
    // 自动加载所有账本信息
    this.$nextTick(function () {
      this.getAllBook()
    })
  },
  methods: {
    // 获取全部账本
    async getAllBook () {
      let getBooks = await book.getBooks()
      // 更新 所有账本
      this.books = getBooks
    },
    // 跳转
    toMainPage: function (id) {
      this.$store.dispatch('updateBookID', id)
      this.$router.push({name: 'MainPage'})
    },
    // 添加账本并返回账本信息
    async addAccBook () {
      let addBookByName = await book.addBookByName(this.value)
      console.log('添加账本，名：', addBookByName, 'id：', addBookByName.id)
      this.$store.dispatch('updateBookID', addBookByName.id)
      this.$router.push({name: 'MainPage'})
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

.addBook{
  margin-top: 10px;
}
</style>

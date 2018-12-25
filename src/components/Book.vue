<template>
  <div>
    <!--<div>账本</div>-->
    <div>
      <h3><b>账本</b></h3>
      <Divider />
      <div>
        <div>
          <p><span></span>个人帐本</p>
          <div id="privateBook">
            <div class="aBook" v-for="book in books" :key="book.id">
              <a v-on:click="toMainPage(book.id)">{{book.name}}</a>
            </div>
            <div class="bBook">添加账本</div>
          </div>
        </div>
      </div>
      <Divider />
      <div>
        <Input class="addBook" v-model="value" placeholder="输入帐本名" style="width: 300px" />
        <Button class="addBookBtn" v-on:click="addAccBook()" shape="circle">添加账本</Button>
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
  body{
    background-color: #d7d2e6;
    font-size: 12px;
  }
  p{
    text-align: left;
    margin: 5px 0px;
  }
  span{
    width:4px;
    height:15px;
    padding:12px 2px 4px 2px;
    margin-left: 8px;
    border-left: 4px solid #747aaa;
    font-size: 0;
  }
  a{
    color: #000000;
  }

  #privateBook{
    display: flex;
    display: -webkit-flex;
    flex-direction: row;
    /*justify-content: space-around;*/
    flex-wrap: wrap;
    background-color: white;
  }
  .aBook,.bBook{
    width: 90px;
    height: 90px;
    line-height: 90px;
    margin: 8px;
    border: 1px solid #e1dce6;
    border-radius: 5px;
  }
  .aBook{
    background-color: rgba(255, 233, 238, 0.98);
  }

  /*添加按钮*/
  .addBook{
    margin-top: 10px;
  }
</style>

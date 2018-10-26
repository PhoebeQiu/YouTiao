import * as url from '@/common/js/accountInterface'
import { post, getByParams } from '@/common/js/httpHelper'

const addAccount = async (bookId, tempAccount) => {
  const result = await post(`${url.ACCOUNT}/Expense/${bookId}`, tempAccount)
  return result.data
}
const getAccountsByBook = async (bookId) => {
  const result = await getByParams(`${url.ACCOUNT}/${bookId}/expense`)
  return result.data
}

export default {
  addAccount: addAccount,
  getAccountsByBook: getAccountsByBook
}

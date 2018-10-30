import * as url from '@/common/js/budgetInterface'
import { post } from '@/common/js/httpHelper'

const addBudget = async (bookId, tempBudget) => {
  const result = await post(`${url.BUDGET}/${bookId}`, tempBudget)
  return result.data
}
// const getAccountsByBook = async (bookId) => {
//   const result = await getByParams(`${url.BUDGET}/${bookId}/expense`)
//   return result.data
// }

export default {
  addBudget: addBudget
}

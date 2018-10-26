import budgetRepository from '@/repositories/budget'

const addBudget = async (bookId, tempBudget) => {
  let response = await budgetRepository.addBudget(bookId, tempBudget)
  return response
}
// const getAccountsByBook = async (bookId) => {
//   let response = await budgetRepository.getAccountsByBook(bookId)
//   return response
// }

export default {
  addBudget: addBudget
}

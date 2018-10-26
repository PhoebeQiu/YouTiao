import accountRepository from '@/repositories/account'

const addAccount = async (bookId, tempAccount) => {
  let response = await accountRepository.addAccount(bookId, tempAccount)
  return response
}
const getAccountsByBook = async (bookId) => {
  let response = await accountRepository.getAccountsByBook(bookId)
  return response
}

export default {
  addAccount: addAccount,
  getAccountsByBook: getAccountsByBook
}

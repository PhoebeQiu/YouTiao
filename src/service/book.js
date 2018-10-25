import bookRepository from '@/repositories/book'

const addBookByName = async (name) => {
  let response = await bookRepository.addBookByName(name)
  return response
}
const getBooks = async (name) => {
  let response = await bookRepository.getBooks(name)
  return response
}

export default {
  addBookByName: addBookByName,
  getBooks: getBooks
}

import * as url from '@/common/js/bookInterface'
import { post } from '@/common/js/httpHelper'
import { getByParams } from '@/common/js/httpHelper'

const addBookByName = async (name) => {
  const result = await post(`${url.ACCBOOK}`, name)
  return result.data
}
const getBooks = async () => {
  const result = await getByParams(`${url.GETBOOKS}`)
  return result.data
}

export default {
  addBookByName: addBookByName,
  getBooks: getBooks
}

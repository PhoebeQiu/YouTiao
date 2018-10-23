import * as url from '@/common/js/accBookInterface'
import { post } from '@/common/js/httpHelper'

const addAccBookByName = async (name) => {
  const result = await post(`${url.ACCBOOK}`, name)
  return result.data
}

export default {
  addAccBookByName: addAccBookByName
}

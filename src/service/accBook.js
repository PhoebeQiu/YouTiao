import accBookRepository from '@/repositories/accBook'

const addAccBookByName = async (name) => {
  let response = await accBookRepository.addAccBookByName(name)
  return response
}

export default {
  addAccBookByName: addAccBookByName
}

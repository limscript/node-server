const getList = (author, keyword) => {
  //先返回假数据 （格式是正确的）
  return [
    {
      id: 1,
      title: '标题A',
      content: '内容A',
      createTime: 1560222764346,
      author: '张三'
    },
    {
      id: 2,
      title: '标题B',
      content: '内容B',
      createTime: 1560222852395,
      author: '李四'
    },
    {
      id: 3,
      title: '标题C',
      content: '内容C',
      createTime: 1560222864635,
      author: '王五'
    }
  ]
}

const getDetail = (id) => {
  //先返回假数据 （格式是正确的）
  return {
    id: 1,
    title: '标题A',
    content: '内容A',
    createTime: 1560222764346,
    author: '张三'
  }
}

const newBlog = (blogData = {}) => {
  //blogData是一个博客对象，包含 title content 属性
  return {
    id: 4 //表示新建博客，插入到数据表里面的 id
  }
}

const updateBlog = (id, blogData = {}) => {
  //id 就是要更新博客的ID
  //blogData 是一个博客对象，包含 title content 属性
  return false
}

const delBlog = (id) => {
  //id 就是要删除博客的ID
  return true
}

module.exports = { getList, getDetail, newBlog, updateBlog, delBlog }

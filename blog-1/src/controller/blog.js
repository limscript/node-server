const { exec } = require('../db/mysql')

const getList = (author, keyword) => {
  let sql = `select * from blogs where 1=1 `
  if (author) {
    sql += `and author='${author}' `
  }
  if (keyword) {
    sql += `and title like '%${keyword}%' `
  }
  sql += `order by createtime desc;`

  //返回promise
  return exec(sql)
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
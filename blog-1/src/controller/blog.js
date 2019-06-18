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
  const sql = `select * from blogs where id=${id} `

  //返回promise
  return exec(sql).then((rows) => {
    return rows[0]
  })
}

const newBlog = (blogData = {}) => {
  //blogData是一个博客对象，包含 title content 属性
  const title = blogData.title
  const content = blogData.content
  const author = blogData.author
  const createTime = Date.now()

  const sql = `
  insert into blogs (title, content, createtime, author)
  values ('${title}', '${content}', '${createTime}', '${author}')
  `
  //返回promise
  return exec(sql).then((insertData) => {
    return {
      id: insertData.insertId
    }
  })
}

const updateBlog = (id, blogData = {}) => {
  //id 就是要更新博客的ID
  //blogData 是一个博客对象，包含 title content 属性
  const title = blogData.title
  const content = blogData.content
  console.log(title, content, id);

  const sql = `update blogs set title='${title}', content='${content}' where id=${id}`
  //返回promise
  return exec(sql).then((updateData) => {
    console.log(updateData);
    if (updateData.affectedRows > 0) {
      return true
    }
    return false
  })
}

const delBlog = (id, author) => {
  //id 就是要删除博客的ID
  const sql = `delete from blogs where id='${id}' and author='${author}'`
  //返回promise
  return exec(sql).then((delData) => {
    console.log(delData);
    if (delData.affectedRows > 0) {
      return true
    }
    return false
  })
}

module.exports = { getList, getDetail, newBlog, updateBlog, delBlog }

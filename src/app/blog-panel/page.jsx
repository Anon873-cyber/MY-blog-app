import React from 'react'
import Router from 'next/router'


function page() {
  const router = Router()
const  editorDeleteBlog = () => { 
    router.push('/blog')
   }
 const  createBlog = () => { 
    router.push('manage-blog')
    }
  return (
    <>
    <div>Add or Edit a Blog</div>
    <div onClick={editorDeleteBlog}>EditBlog</div>
    <div onClick={createBlog}>Create Blog</div>
    </>
  )
}

export default page
"use client";
import React from 'react'
import {useRouter} from 'next/navigation'


function page() {
  const router = useRouter()
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
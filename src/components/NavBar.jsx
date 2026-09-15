import React from 'react'

function NavBar() {
  return (
   <nav className="w-full h-10 bg-[#8da9ca]">
  <section className="mx-auto flex h-full w-full max-w-[1280px] items-center justify-center">
    <ul className="flex items-center gap-6 font-normal text-white">
      <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/blogs">Blogs</a></li>
      <li><a href="/contact">Contact</a></li>
    </ul>
  </section>
</nav>
  )
}

export default NavBar

const Footer = () => {
  return (
   <div className="lg:px-20 md:pl-12 px-2 h-72 py-14 bg-white flex-col lg:flex-row md:flex-col flex justify-between w-full">
    <div>
    <h1 className="lg:text-6xl text-2xl mb-0 font-bold">Chic Unveiled: Your Style,<br /> Your Statement</h1>
    <p className="lg:w-1/2 md:w-1/2 w-full my-4 text-xs">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi numquam similique repudiandae impedit quam sapiente consectetur rerum? Ducimus, consectetur!</p>
    </div>

    <div className="share items-start flex flex-col">
      <div>
        <h1 className="text-xl flex items-start lg:items-end justify-end pr-4 font-bold mb-0">Contact</h1>
      </div>
      <div className="flex items-end lg:justify-end justify-start">
        <p className="text-sm text-gray-600">Get in touch with us for any inquiries</p>
      </div>
    </div>
   </div>
  )
}

export default Footer

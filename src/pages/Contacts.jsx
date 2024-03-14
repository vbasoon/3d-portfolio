import React,  {useState} from 'react'

const Contacts = () => {
  const [form, setForm] = useState({name: '', email: '', message: ''})

  const handleChange = () => {}

  return (
   <section className="relative flex lg:flex-row flex-col max-container">
    <div className='flex-1 min-w-[50%] flex flex-col'>
      <h1 className='head-text'>Get in Touch</h1>
      <form className='w-full flex flex-col gap-7 mt-14'>
        <label className='text-black-500 font-semibold'>
          Name
        </label>
        <input 
          type="text" 
          name="name" 
          className="input"
          placeholder='Enter your name'
          required
          value={form.name}
          onChange={handleChange} 
        />
      </form>
    </div>
   </section>
  )
}

export default Contacts
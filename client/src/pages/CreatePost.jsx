import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { preview } from '../assets'
import {getRandomPrompt} from '../utils'
import { FormField,Loader } from '../components'

const CreatePost = () => {
  const navigate = useNavigate();
  const[form,setForm] = useState({
    name:'',
    prompt:'',
    photo:'',

  });
  const [generatingImg,setGeneratingImg] = useState(false);
  const [loading,setLoading] = useState(false);

  return (
    <section className='max-w-7xl mx-auto'>
    <div>
      <h1 className='font-extrabold text-[#36454F] text-[32px]'> Create</h1>
      <p className='mt-2 text-[#36454F] text-[16px] max-w[500px]'> Create imaginative
     and visually stunning images through Gen R8 AI and share them with the community</p>
    </div>
    </section>
  )
}

export default CreatePost
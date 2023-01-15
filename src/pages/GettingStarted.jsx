import React, { useState } from "react";

import { createUser } from "../config/firebase";
import { useUser } from '../hooks/useUser'
import Avatar from 'react-nice-avatar'
import { EarIcon, EyesIcon, FaceIcon, HairIcon, HatIcon } from '../components/icons'
import { Input } from '../components/Input'
import { PickerButton } from '../components/PickerButton'
import { usePicker } from '../hooks/usePicker'

const GettingStarted = () => {
  const { address } = useUser()
  const {
    config,
    changeSkin,
    changeHair,
    changeHat,
    changeEyes,
    changeEars
  } = usePicker();

  const getStarted = async (e) => {
    e.preventDefault();
    const { username, email, password } = e.target.elements
    // if ([username.value, email.value, password.value].includes('')) {
    //   alert('Please fill out the form')
    //   return
    // }
    const response = await createUser(username.value, email.value, password.value)
    if(response.err){ console.log(response.err)}
  }

  return (
    <main className='relative min-h-screen bg-gradient-to-t from-violet-500 to-sky-500'>
      <h1 className="text-[180px] absolute inset-x-0 mt-8 font-black text-center text-sky-300/40 z-0">Web 3.0 Game</h1>
      <div className="flex mx-auto max-w-3xl items-start justify-between pt-48 relative z-10">
        <div className="flex flex-col gap-4 items-center">
          <Avatar className="w-64 h-64 rounded-full shadow-2xl" {...config} />
          <div className="w-56 rounded-full p-2 bg-white/20 ring-1 ring-white/40 flex items-center justify-around gap-2">
            <PickerButton icon={<FaceIcon />} onClick={changeSkin} />
            <PickerButton icon={<HairIcon />} onClick={changeHair} />
            <PickerButton icon={<HatIcon />} onClick={changeHat} />
            <PickerButton icon={<EyesIcon />} onClick={changeEyes} />
            <PickerButton icon={<EarIcon />} onClick={changeEars} />
          </div>
        </div>
        <form className="flex flex-col gap-1 w-1/2 mt-10" onSubmit={getStarted}>
          <Input type="text" name="username" label="Username" placeholder="Username" />
          <Input type="email" name="email" label="Email address" placeholder="email@example.com" />
          <Input type="password" name="password" label="Password" placeholder="Secret Password" />
          <button className='bg-white text-black py-4 px-8 rounded font-semibold mt-4' type="submit">Get started</button>
        </form>
      </div>
    </main>
  )
};

export default GettingStarted;

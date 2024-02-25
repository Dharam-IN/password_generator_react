import React, { useCallback, useEffect, useRef, useState } from 'react';
import Logo from '../../Dharam-Password-Logo.jpg';
import { Link } from 'react-router-dom';

const PasswordGene = () => {

    const [length, setLength] = useState(10)
    const [number, setNumber] = useState(false)
    const [special, setSpecial] = useState(false)
    const [password, setPassword] = useState("")

    let passwordref = useRef(null)

    const PasswordGenerator = useCallback(()=>{
        let pass = "";
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

        if(number) str+= "1234567890";
        if(special) str+= '!@#$%^&*()_+*//><";`~{}[]';

        for(let a = 1; a<=length; a++){
            let randomnum = Math.floor(Math.random() * str.length + 1);
            pass += str.charAt(randomnum);
        }

        setPassword(pass)

    }, [length, number, special, setPassword])

    useEffect(()=>{
        PasswordGenerator()
    }, [length, number, special, setPassword])

    const copypassword = useCallback(()=>{
        passwordref.current?.select()
        window.navigator.clipboard.writeText(password)
    }, [password])

  return (
    <>
        <div className="flex justify-center items-center">
            <div className="sm:w-[650px] w-[320px] bg-white mx-auto rounded-md py-7 mt-14 px-4">
                <img src={Logo} alt="logo" className='w-[100px] mx-auto rounded-full' />
                <h2 className='text-center text-3xl font-bold mt-3 mb-3'>Password Generator</h2>
                <div className="flex w-[100%] mx-auto rounded-md overflow-hidden mb-4">
                    <input 
                    type="text"
                    placeholder='Password'
                    value={password}
                    ref={passwordref}
                    readOnly
                    className='border w-[78%] rounded-tl-md rounded-bl-md px-3 py-4'
                    />
                    <button type='button' onClick={copypassword} className='bg-[#654fc3] w-[22%] text-xl text-white'>Copy</button>
                </div>

                <div className="flex justify-between flex-wrap w-full gap-3">
                    <div className="flex gap-3 md:w-[45%] w-[100%]">
                        <input 
                        type="range"
                        min={8}
                        max={100}
                        value={length}
                        onChange={(event)=>{setLength(event.target.value)}}
                        />
                        <label className='text-xl'>Length - {length}</label>
                    </div>
                    <div className="flex gap-3 items-center md:w-fit w-[100%]">
                        <input 
                        type="checkbox" 
                        id='Numbers' 
                        defaultChecked={number} 
                        onChange={()=>setNumber((prev)=>!prev)}
                        className='w-[20px] h-[20px]'/>
                        <label htmlFor="Numbers" className='text-xl'>Numbers</label>
                    </div>
                    <div className="flex gap-3 items-center md:w-fit w-[100%]">
                        <input 
                        type="checkbox" 
                        id='SpecialChara'
                        defaultChecked={special}
                        onChange={()=>setSpecial((prev)=>!prev)}
                        className='w-[20px] h-[20px]'/>
                        <label htmlFor="SpecialChara" className='text-xl'>Special Character</label>
                    </div>
                </div>
                <p className='mt-9 text-center'>© 2024-2030 <Link to={"https://github.com/Dharam-IN"} target='_blank' className='text-blue-500'>Dharam</Link> Password</p>
            </div>

        </div>
    </>
  )
}

export default PasswordGene
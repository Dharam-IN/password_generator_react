import React, { useCallback, useEffect, useRef, useState } from 'react'

const PasswordGene = () => {

    const [length, setLength] = useState(8);
    const [number, setNumber] = useState(false);
    const [special, setSpecial] = useState(false);
    const [password, setPassword] = useState("");

    // uerRef hook
    let passwordref = useRef(null)

    const PasswordGene = useCallback(()=>{
        let pass = "";
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

        if(number) str+= "1234567890";
        if(special) str+= "!@#$%^&*()_+/";

        for(let a = 1; a<=length; a++){
            let char = Math.floor(Math.random() * str.length + 1);
            pass += str.charAt(char)
        }
        setPassword(pass)

    }, [length, number, special, setPassword])

    const copytoclipboard = useCallback(()=>{
        passwordref.current?.select();
        // passwordref.current?.setSelectionRange(0,5);
        window.navigator.clipboard.writeText(password)
    }, [password])

    useEffect(()=>{
        PasswordGene()
    }, [length, number, special, PasswordGene])
    
  return (
    <>
        <div className="sm:w-[650px] w-[320px] bg-white mx-auto rounded-md py-4 mt-14 px-4">
            <h3 className='text-center text-3xl font-bold mb-3'>Password Generator</h3>
            <div className="flex w-[100%] mx-auto rounded-md overflow-hidden mb-4">
                <input 
                type="text"
                placeholder='Password'
                value={password}
                readOnly
                className='border w-[75%] rounded-tl-md rounded-bl-md px-3 py-4'
                ref={passwordref}
                />
                <button type='button' onClick={copytoclipboard} className='bg-blue-500 w-[25%] text-xl text-white'>Copy</button>
            </div>

            <div className="flex justify-between">
                <div className="flex gap-3">
                    <input 
                    type="range"
                    min={8}
                    max={100}
                    value={length}
                    onChange={(val) => 
                        {setLength(val.target.value)}
                    } />
                    <label className='text-xl'>{length}</label>
                </div>
                <div className="flex gap-3 items-center">
                    <input type="checkbox" value={number} onChange={()=>setNumber((prop)=>!prop)} id='Numbers' className='w-[20px] h-[20px]'/>
                    <label htmlFor="Numbers" className='text-xl'>Numbers</label>
                </div>
                <div className="flex gap-3 items-center">
                    <input type="checkbox" value={special} onChange={()=>setSpecial((prop)=>!prop)} id='SpecialChara' className='w-[20px] h-[20px]'/>
                    <label htmlFor="SpecialChara" className='text-xl'>Special Character</label>
                </div>
            </div>
        </div>
    </>
  )
}

export default PasswordGene
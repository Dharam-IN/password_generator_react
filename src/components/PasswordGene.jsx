import React from 'react'

const PasswordGene = () => {

    

  return (
    <>
        <div className="sm:w-[650px] w-[320px] bg-white mx-auto rounded-md py-4 mt-14 px-4">
            <h3 className='text-center text-3xl font-bold mb-3'>Password Generator</h3>
            <div className="flex w-[100%] mx-auto rounded-md overflow-hidden mb-4">
                <input 
                type="text"
                placeholder='Password'
                className='border w-[75%] rounded-tl-md rounded-bl-md px-3 py-4'
                />
                <button type='button' className='bg-blue-500 w-[25%] text-xl text-white'>Copy</button>
            </div>

            <div className="flex justify-between">
                <div className="flex gap-3">
                    <input 
                    type="range"
                    min={8}
                    max={100}
                    id='RangeFun'
                    />
                    <label htmlFor="RangeFun" className='text-xl'>50</label>
                </div>
                <div className="flex gap-3 items-center">
                    <input type="checkbox" id='Numbers' className='w-[20px] h-[20px]'/>
                    <label htmlFor="Numbers" className='text-xl'>Numbers</label>
                </div>
                <div className="flex gap-3 items-center">
                    <input type="checkbox" id='SpecialChara' className='w-[20px] h-[20px]'/>
                    <label htmlFor="SpecialChara" className='text-xl'>Special Character</label>
                </div>
            </div>
        </div>
    </>
  )
}

export default PasswordGene
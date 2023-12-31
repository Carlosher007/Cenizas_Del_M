import React, { useEffect, useState } from 'react'
import Typewriter from 'typewriter-effect'
import '../../css/dialogue.css'

export const TextIntroduction = ({ keyProp, text }) => {
  const [key, setKey] = useState(keyProp)

  useEffect(() => {
    setKey(keyProp)
  }, [keyProp])

  return (
    <div className='absolute left-1/3 top-1/2 transform -translate-y-1/2'>
      <div className='rounded-lg p-2 bg-white bg-opacity-20'>
        <div className='rounded-lg p-6 bg-black bg-opacity-80 min-w-[32rem] max-w-[32rem] min-h-[25rem] max-h-[25rem] overflow-hidden flex flex-col justify-between'>
          <div className='justify-start'>
            <div key={key} className='text-2xl font-pixelcraft text-white'>
              <Typewriter
                options={{
                  cursor: '',
                  delay: 35
                }}
                onInit={(textTypewriter) => {
                  textTypewriter
                    .typeString(`${text}`)
                    .callFunction(() => {})
                    .start()
                }}
              />
              <div />
            </div>
          </div>
          <div className='flex justify-end'>
            <span className='text-white opacity-50 font-pixelcraft text-xl'>
              Presione ENTER para continuar
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { loginWithGoogle } from '../api/auth'
import { useKeyboard } from '../hooks/useKeyboard'
import { useAuthStore } from '../store/auth'

const Init = () => {
  const navigate = useNavigate()
  const { continueKey } = useKeyboard()
  const [isAuthenticated] = useAuthStore((state) => [
    state.isAuthenticated
  ])

  const onHandleGoogle = async () => {
    const result = await loginWithGoogle()
    if (result.type === 'success') {
      navigate('/menu')
    } else {
      console.log('Error')
      navigate('/')
    }
  }

  useEffect(() => {
    if (continueKey) {
      if (isAuthenticated) {
        navigate('/menu')
      } else {
        onHandleGoogle()
      }
    }
  }, [continueKey])

  const onHandleClick = () => {
    if (isAuthenticated) {
      navigate('/menu')
    } else {
      onHandleGoogle()
    }
  }

  return (
    <>
      <div onClick={() => onHandleClick()} className='bg-white bg-opacity-50 rounded-lg p-4 nes-pointer'>
        <span className='font-pixelcraft text-4xl font-bold text-black uppercase'>
          Presione ENTER para continuar
        </span>
      </div>
    </>
  )
}

export default Init

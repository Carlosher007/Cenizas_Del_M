import { useNavigate } from 'react-router-dom'
import { logout } from '../api/auth'
import { InitialTransition } from '../components/design/InitialTransition'
import PixelButton from '../components/design/PixelButton'
import { useAuthStore } from '../store/auth'
import { useGameStore } from '../store/game'
import { useEffect } from 'react'

const Menu = () => {
  const navigate = useNavigate()
  const [userLogged] = useAuthStore((state) => [
    state.userLogged
  ])
  const { reset } = useGameStore.getState()

  const handleLogout = async (e) => {
    e.preventDefault()
    const res = await logout()
    if (res && res.type === 'success') {
      navigate('/')
    }
  }

  const handleInitGame = async (e) => {
    e.preventDefault()
    navigate('/game')
  }

  const handleReset = async (e) => {
    e.preventDefault()
    reset()
    const modal = document.getElementById('dialog-dark-rounded')
    if (modal) {
      modal.close()
    }
  }

  const openModal = () => {
    const modal = document.getElementById('dialog-dark-rounded')
    if (modal) {
      modal.showModal()
    }
  }

  const openControls = () => {
    const modal = document.getElementById('dialog-dark-rounded-controls')
    if (modal) {
      modal.showModal()
    }
  }

  const closeControls = () => {
    const modal = document.getElementById('dialog-dark-rounded-controls')
    if (modal) {
      modal.close()
    }
  }

  return (
    <>
      <InitialTransition />

      <div className="bg-white bg-opacity-50 rounded-lg p-4 ">
        <h2 className="font-pixelcraft text-4xl font-bold text-black uppercase">
          Logged-in as {userLogged.name}
        </h2>
      </div>

      <div className="flex flex-col items-center justify-center mt-14 gap-0">
        <PixelButton
          text="Iniciar juego"
          font="font-pixelcraft"
          handleFunction={handleInitGame}
        />
        <PixelButton
          text="Reiniciar Juego"
          font="font-pixelcraft"
          handleFunction={openModal}
        />
        <dialog
          className="nes-dialog is-dark is-rounded font-pixelcraft text-2xl"
          id="dialog-dark-rounded"
        >
          <form method="dialog">
            <div className="max-w-md">
              <p className="title">
                Reiniciar el juego hará que pierdas tu progreso, ¿estas seguro?
              </p>
            </div>
            <menu className="dialog-menu mt-5 flex justify-center gap-5">
              <button className="nes-btn">Cancelar</button>
              <button
                className="nes-btn is-primary"
                onClick={(e) => handleReset(e)}
              >
                Confirmar
              </button>
            </menu>
          </form>
        </dialog>
        <PixelButton
          text="Controles"
          font="font-pixelcraft"
          handleFunction={openControls}
        />
        <PixelButton
          text="Salir"
          font="font-pixelcraft"
          handleFunction={handleLogout}
        />
      </div>

      <dialog
        className="nes-dialog is-dark is-rounded font-pixelcraft text-2xl min-w-[40vw]"
        id="dialog-dark-rounded-controls"
      >
        <h2 className="font-pixelcraft text-4xl font-bold uppercase mb-4 text-center">
          Controles del juego
        </h2>
        <div className="flex flex-col gap-4">
          <div className=" p-4 rounded-lg">
            <p className="font-pixelcraft text-2xl mb-5 text-center ">
              Moverse
            </p>
            <div className="flex justify-center gap-10">
              <div className="flex flex-col items-center">
                <div className="flex">
                  <button className="nes-btn font-pixelcraft text-2xl mr-2">
                    W
                  </button>
                </div>
                <div className="flex">
                  <button className="nes-btn font-pixelcraft text-2xl mr-2">
                    A
                  </button>
                  <button className="nes-btn font-pixelcraft text-2xl mx-2">
                    S
                  </button>
                  <button className="nes-btn font-pixelcraft text-2xl mx-2">
                    D
                  </button>
                </div>
              </div>

              <div className="flex flex-col items-center">
                <div className="flex">
                  <button className="nes-btn font-pixelcraft text-2xl mr-2">
                    &uarr;
                  </button>
                </div>
                <div className="flex">
                  <button className="nes-btn font-pixelcraft text-2xl mr-2">
                    &larr;
                  </button>
                  <button className="nes-btn font-pixelcraft text-2xl mx-2">
                    &darr;
                  </button>
                  <button className="nes-btn font-pixelcraft text-2xl mx-2">
                    &rarr;
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="p-5 rounded-lg">
            <div className="flex justify-center gap-10">
              <div className="flex flex-col h-full">
                <p className="font-pixelcraft text-2xl mb-5 text-center">
                  Seguir
                </p>
                <div className="text-center">
                  <button className="nes-btn font-pixelcraft text-2xl mr-2">
                    Enter
                  </button>
                </div>
              </div>

              <div className="flex flex-col h-full">
                <p className="font-pixelcraft text-2xl mb-5 text-center">
                  Interactuar
                </p>
                <div className="text-center">
                  <button className="nes-btn font-pixelcraft text-2xl mr-2">
                    R
                  </button>
                </div>
              </div>

              <div className="flex flex-col h-full">
                <p className="font-pixelcraft text-2xl mb-5 text-center">
                  Cursor
                </p>
                <div className="text-center">
                  <button className="nes-btn font-pixelcraft text-2xl mr-2">
                    ESC
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-4">
          <button className="nes-btn is-primary" onClick={closeControls}>
            Cerrar
          </button>
        </div>
      </dialog>
    </>
  );
}

export default Menu

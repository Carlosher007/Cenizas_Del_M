// import { Theme } from '@radix-ui/themes';
import { AnimatePresence } from 'framer-motion'
import { Route, Routes } from 'react-router-dom'
import LayoutInit from './components/layout/LayoutInit'
import ProtectedRoute from './components/ProtectedRoute'
import FightClub from './pages/FightClub'
import Game from './pages/Game'
import Init from './pages/Init'
import Menu from './pages/Menu'
import Backlog from './components/design/Backlog'
import Test from './components/design/Test'

const App = () => {
  return (
    <AnimatePresence mode='wait'>
      <Routes>
        <Route
          path='/'
          element={
            <LayoutInit>
              <Init />
            </LayoutInit>
          }
        />
        <Route
          path='/menu' element={
            <ProtectedRoute>
              <LayoutInit> 
                <Menu />
              </LayoutInit>
            </ProtectedRoute>
          }
        />
        <Route
          path='/game' element={
            <ProtectedRoute>
              <Game />
            </ProtectedRoute>
          }
        />
        <Route
          path='/test' element={
            <ProtectedRoute>
              <Test />
            </ProtectedRoute>
          }
        />
        <Route path='*' element={<FightClub />} />
      </Routes>
    </AnimatePresence>
  )
}

export default App
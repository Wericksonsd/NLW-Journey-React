import {MapPin,Calendar,ArrowRight,Settings2, X} from 'lucide-react'
import {useState} from 'react'
import './App.css'

export function App() {

  const [guestOpen, setGuestOpen] = useState(false)

  const guestOpenHandler = () => setGuestOpen (true)

  const guestCloseHandler = () => setGuestOpen(false)

  return (
      <div className='h-screen bg-backSquare bg-no-repeat bg-center flex items-center justify-center'>
        <div className="max-w-3xl w-full text-center px-6 space-y-10">
          <p className='text-xl'>Convide seus amigos e planeje sua próxima viagem!</p>

          <div className='space-y-4'>
            <div className='h-16 px-4  bg-zinc-800 text-zinc-400 rounded-xl flex items-center shadow-shape gap-2'>
              
              <MapPin className='size-5 text-zinc-500'/>
              <input type="text" placeholder='Para onde você vai?' className='bg-transparent flex-1 placeholder-zinc-500 outline-none'/>

              <Calendar className='size-5 text-zinc-500'/>
              <input type="text" placeholder='Quando?' className='bg-transparent flex-1 placeholder-zinc-500 outline-none'/>

              <div className='bg-zinc-700/50 w-0.5 h-8'/>

                {guestOpen ? (
                  <button onClick={guestCloseHandler} className='bg-zinc-500 font-semibold text-zinc-900 px-4 py-2 rounded-lg flex items-center justify-center gap-1'>Alterar local/data <Settings2/></button>
                ) : (
                  <button onClick={guestOpenHandler}
                  className='bg-lime-500 font-semibold text-lime-900 px-4 py-2 rounded-lg flex items-center justify-center gap-1'>
                  Continuar?
                  <ArrowRight className='size-5'/>
                </button>
                )}
            </div>
                
            {guestOpen &&
              <div className='h-16 px-4  bg-zinc-800 text-zinc-400 rounded-xl flex items-center shadow-shape gap-2'>
                
                <MapPin className='size-5 text-zinc-500'/>
                <input type="text" placeholder='Para onde você vai?' className='bg-transparent flex-1 placeholder-zinc-500 outline-none'/>
                <div className='bg-zinc-700/50 w-0.5 h-8'/>
                <button onClick={guestOpenHandler} className='bg-lime-500 font-semibold text-lime-900 px-4 py-2 rounded-lg flex items-center justify-center gap-1'>Confirmar Viagem <ArrowRight className='size-5'/></button>
                  </div>
            }
          </div>

          <p className='text-zinc-600'>Ao planejar sua viagem pela plann.er você automaticamente concorda<br />
          com nossos <a href="#" className='text-zinc-300 underline'>termos de uso</a> e <a href="#" className='text-zinc-300 underline'>políticas de privacidade</a>.</p>
        </div>
      </div>
  )
}


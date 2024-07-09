import {MapPin,Calendar,ArrowRight,Settings2, UserRoundPlus, X, AtSign, Plus, User, Mail} from 'lucide-react'
import {FormEvent, useState} from 'react'

export function SelectTrip() {

  const [guestOpen, setGuestOpen] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [modalTripOpen, setModalTripOpen] = useState(false)

  const [usersEmail, setUsersEmail] = useState([
    "werickson@gmail.com",
    "soneca@gmail.com",
    "cimento@bing.com"
  ])

  const guestOpenHandler = () => setGuestOpen (true)

  const guestCloseHandler = () => setGuestOpen(false)

  const modalOpenHandler = () => setModalOpen(true)

  const modalCloseHandler = () => setModalOpen(false)

  const modalTripOpenHandler = () => setModalTripOpen(true)

  const modalTripCloseHandler = () => setModalTripOpen(false)

  const addNewUserEmail = (event:FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const data = new FormData(event.currentTarget)
    const email = data.get('email')?.toString()

    if(!email) {
      return
    }

    if(usersEmail.includes(email)){
      return
    }

    setUsersEmail([
      ...usersEmail,
      email,
    ])

    event.currentTarget.reset()
  }

  const deleteUserEmail = (userRemoved: string) => {
    const remainUsers = usersEmail.filter(email => email !== userRemoved)
  
    setUsersEmail(remainUsers)
  }
  
  

  return (
      <div className='h-screen bg-backSquare bg-no-repeat bg-center flex items-center justify-center'>
        <div className="max-w-3xl w-full text-center px-6 space-y-10">
          <div className='flex flex-col items-center justify-center text-zinc-400 gap-3'>
            <img src="/logo.svg" alt="Plann.er" />
            <p className='text-xl'>Convide seus amigos e planeje sua próxima viagem!</p>
          </div>

          <div className='space-y-4'>
            <div className='h-16 px-4  bg-zinc-800 text-zinc-400 rounded-xl flex items-center shadow-shape gap-2'>
              
              <MapPin className='size-5 text-zinc-500'/>
              <input disabled={guestOpen} type="text" placeholder='Para onde você vai?' className='bg-transparent flex-1 placeholder-zinc-500 outline-none'/>

              <Calendar className='size-5 text-zinc-500'/>
              <input disabled={guestOpen} type="text" placeholder='Quando?' className='bg-transparent flex-1 placeholder-zinc-500 outline-none'/>

              <div className='bg-zinc-700/50 w-0.5 h-8'/>

                {guestOpen ? (
                  <button onClick={guestCloseHandler} className='bg-zinc-700/50 font-semibold text-zinc-500 px-4 py-2 rounded-lg flex items-center justify-center gap-1'>Alterar local/data <Settings2/></button>
                ) : (
                  <button onClick={guestOpenHandler}
                  className='bg-lime-500 font-semibold text-lime-900 px-4 py-2 rounded-lg flex items-center justify-center gap-1 hover:bg-lime-400'>
                  Continuar?
                  <ArrowRight className='size-5'/>
                </button>
                )}
            </div>
                
            {guestOpen &&
              <div className='h-16 px-4  bg-zinc-800 text-zinc-400 rounded-xl flex items-center shadow-shape gap-2'>
                
                <button onClick={modalOpenHandler} type="button" className='bg-transparent flex-1 text-zinc-500 text-center flex items-center justify-start gap-2'>
                  <UserRoundPlus className='size-5'/>
                  {usersEmail.length === 0 ? <span>Quem estará na viagem?</span> : <span>{usersEmail.length} pessoa(s) convidada(s)</span>}
                </button>
                <div className='bg-zinc-700/50 w-0.5 h-8'/>
                <button onClick={modalTripOpenHandler} className='bg-lime-500 font-semibold text-lime-900 px-4 py-2 rounded-lg flex items-center justify-center gap-1 hover:bg-lime-400'>Confirmar Viagem <ArrowRight className='size-5'/></button>
                  </div>
            }
          </div>

          <p className='text-zinc-600'>Ao planejar sua viagem pela plann.er você automaticamente concorda<br />
          com nossos <a href="#" className='text-zinc-300 underline'>termos de uso</a> e <a href="#" className='text-zinc-300 underline'>políticas de privacidade</a>.</p>

          {modalOpen && (
            <div className='fixed inset-0 bg-zinc-900/80 flex items-center justify-center'>
              <div className='w-1/3 bg-zinc-800 p-5 rounded-xl shadow-shape'>

                <div className='w-full flex items-center justify-between text-zinc-400'>
                  <p className='text-xl'>Selecionar convidados</p>
                  <X onClick={modalCloseHandler} className='size-5 hover:cursor-pointer'/>
                </div>

                <p className='text-left'>Os convidados irão receber e-mails para confirmar a participação na viagem.</p>

                <div className='my-2 h-1'/>

                <div className='w-full flex flex-wrap gap-2'>
                  {usersEmail.map (email => {
                    return (
                      <div key={email} className='p-2 bg-zinc-900 text-zinc-400 rounded-lg flex items-center justify-center gap-3'>
                        <span>{email}</span>
                        <button type="button" onClick={() => (deleteUserEmail(email))}> <X className='size-4'/> </button>
                      </div>
                  )})}
                </div>

                <div className='my-4 h-0.5 w-full bg-zinc-700/50'/>

                <form onSubmit={addNewUserEmail} className='h-16 px-4  bg-zinc-900 text-zinc-500 rounded-xl flex items-center shadow-shape gap-2'>        
                  <AtSign className='size-5 text-zinc-500'/>
                  <input type="email"
                  name='email'
                  placeholder='Digite o e-mail do convidado'
                  className='bg-transparent flex-1 placeholder-zinc-500 outline-none'/>

                  <div className='bg-zinc-700/50 w-0.5 h-8'/>

                  <button
                    onClick={guestOpenHandler}
                    type='submit'
                    className='bg-lime-500 font-semibold text-lime-900 px-4 py-2 rounded-lg flex items-center justify-center gap-1 hover:bg-lime-400'>
                    Convidar
                    <Plus className='size-5'/>
                  </button>
                </form>

              </div>
            </div>
          )}

          {modalTripOpen && (
            <div className='fixed inset-0 bg-zinc-900/80 flex items-center justify-center'>
              <div className='w-1/3 bg-zinc-800 p-5 rounded-xl shadow-shape'>

                <div className='w-full flex items-center justify-between text-zinc-400'>
                  <p className='text-xl'>Confirmar viagem</p>
                  <X onClick={modalTripCloseHandler} className='size-5 hover:cursor-pointer'/>
                </div>
                <div className='my-4'/>

                <p className='text-left text-sm'>Para concluir a criação da viagem para <span className='font-bold'>Florianópolis</span>, Brasil nas datas de
                                        <span className='font-bold'> 16 a 27 de Agosto de 2024</span> preencha seus dados abaixo:</p>

                <div className='my-4'/>

                <form onSubmit={addNewUserEmail} className='space-y-2 flex flex-col items-center justify-center'>        
                  <div className='h-12 w-full px-4 bg-zinc-900 text-zinc-500 rounded-lg flex items-center shadow-shape gap-2'>
                    <User className='size-5 text-zinc-500'/>
                    <input type="text"
                    name='userConfirmar'
                    placeholder='Seu nome completo'
                    className='bg-transparent flex-1 placeholder-zinc-500 outline-none'/>
                  </div>

                  <div className='h-12 w-full px-4 bg-zinc-900 text-zinc-500 rounded-lg flex items-center shadow-shape gap-2'>
                    <Mail className='size-5 text-zinc-500'/>
                    <input type="email"
                    name='emailConfirmar'
                    placeholder='Seu e-mail pessoal'
                    className='bg-transparent flex-1 placeholder-zinc-500 outline-none'/>
                  </div>

                  <button
                    onClick={guestOpenHandler}
                    type='submit'
                    className='bg-lime-500 font-semibold text-lime-900 w-full py-2 rounded-lg flex items-center justify-center gap-1 hover:bg-lime-400'>
                    Confirmar criação da viagem
                    <Plus className='size-5'/>
                  </button>
                </form>

              </div>
            </div>
          )}

        </div>
      </div>
  )
}


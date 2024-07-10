import {FormEvent, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { ModalInviteGuests } from './modalnviteGuests'
import { ModalConfirmTrip } from './modalConfirmTrip'
import { DestinationDate } from './steps/destinationDate'
import { AddNewUserEmail } from './steps/addNewUserEmail'

export function SelectTrip() {

  const navigate = useNavigate()

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
  
  const createTrip = (event:FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    navigate('/eventos')
  }
  

  return (
      <div className='h-screen bg-backSquare bg-no-repeat bg-center flex items-center justify-center'>
        <div className="max-w-3xl w-full text-center px-6 space-y-10">
          <div className='flex flex-col items-center justify-center text-zinc-400 gap-3'>
            <img src="/logo.svg" alt="Plann.er" />
            <p className='text-xl'>Convide seus amigos e planeje sua próxima viagem!</p>
          </div>

          <div className='space-y-4'>
          <DestinationDate
            guestOpen={guestOpen}
            guestCloseHandler={guestCloseHandler}
            guestOpenHandler={guestOpenHandler}
          />               
            {guestOpen &&
              <AddNewUserEmail
                usersEmail={usersEmail}
                modalTripOpenHandler={modalTripOpenHandler}
                modalOpenHandler={modalOpenHandler}
              />
            }
          </div>

          <p className='text-zinc-600'>Ao planejar sua viagem pela plann.er você automaticamente concorda<br />
          com nossos <a href="#" className='text-zinc-300 underline'>termos de uso</a> e <a href="#" className='text-zinc-300 underline'>políticas de privacidade</a>.</p>

          {modalOpen && (
            <ModalInviteGuests
              modalCloseHandler={modalCloseHandler}
              usersEmail={usersEmail}
              deleteUserEmail={deleteUserEmail}
              addNewUserEmail={addNewUserEmail}

            />
          )}

          {modalTripOpen && (
            <ModalConfirmTrip
              modalTripCloseHandler={modalTripCloseHandler}
              createTrip={createTrip}
            />
          )}

        </div>
      </div>
  )
}


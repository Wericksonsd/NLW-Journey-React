import {X, AtSign, Plus} from 'lucide-react'
import { FormEvent } from 'react'

interface ModalInviteGuestsProps {
    modalCloseHandler: () => void
    usersEmail:  string[]
    deleteUserEmail: (email: string) => void
    addNewUserEmail: (event: FormEvent<HTMLFormElement>) => void
}

export const ModalInviteGuests = ({
    modalCloseHandler,
    usersEmail,
    deleteUserEmail,
    addNewUserEmail,
}: ModalInviteGuestsProps) => {
    return (
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
                        <button title='delete' type="button"  onClick={() => (deleteUserEmail(email))}> <X className='size-4'/> </button>
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
                    type='submit'
                    className='bg-lime-500 font-semibold text-lime-900 px-4 py-2 rounded-lg flex items-center justify-center gap-1 hover:bg-lime-400'>
                        Convidar
                        <Plus className='size-5'/>
                    </button>
                </form>

                </div>
            </div>
    )
}
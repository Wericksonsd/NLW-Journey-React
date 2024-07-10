import {X, User, Mail, Plus} from 'lucide-react'
import { FormEvent } from 'react'

interface ModalConfirmTripProps {
    modalTripCloseHandler: () => void
    createTrip: (event: FormEvent<HTMLFormElement>) => void
}

export const ModalConfirmTrip = ({
    modalTripCloseHandler,
    createTrip,
} : ModalConfirmTripProps) => {
    return(
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

                <form onSubmit={createTrip} className='space-y-2 flex flex-col items-center justify-center'>        
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
                    type='submit'
                    className='bg-lime-500 font-semibold text-lime-900 w-full py-2 rounded-lg flex items-center justify-center gap-1 hover:bg-lime-400'>
                    Confirmar criação da viagem
                    <Plus className='size-5'/>
                </button>
                </form>

            </div>
            </div>
    )
}
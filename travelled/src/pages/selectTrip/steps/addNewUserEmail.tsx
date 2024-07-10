import {ArrowRight, UserRoundPlus} from 'lucide-react'

interface AddNewUserEmailProps {
    usersEmail: string[]
    modalTripOpenHandler: () => void
    modalOpenHandler: () => void
}

export const AddNewUserEmail = ({
    usersEmail,
    modalTripOpenHandler,
    modalOpenHandler,
} : AddNewUserEmailProps) => {
    return(
        <div className='h-16 px-4  bg-zinc-800 text-zinc-400 rounded-xl flex items-center shadow-shape gap-2'>
    
            <button onClick={modalOpenHandler} type="button" className='bg-transparent flex-1 text-zinc-500 text-center flex items-center justify-start gap-2'>
            <UserRoundPlus className='size-5'/>
            {usersEmail.length === 0 ? <span>Quem estará na viagem?</span> : <span>{usersEmail.length} pessoa(s) convidada(s)</span>}
            </button>
            <div className='bg-zinc-700/50 w-0.5 h-8'/>
            <button onClick={modalTripOpenHandler} className='bg-lime-500 font-semibold text-lime-900 px-4 py-2 rounded-lg flex items-center justify-center gap-1 hover:bg-lime-400'>Confirmar Viagem <ArrowRight className='size-5'/></button>
        </div>
    )
}
import {MapPin, Calendar, ArrowRight, Settings2} from 'lucide-react'

interface DestinationDateProps {
    guestOpen: boolean
    guestCloseHandler: () => void
    guestOpenHandler: () => void
}

export const DestinationDate = ({
    guestOpen,
    guestCloseHandler,
    guestOpenHandler,
} : DestinationDateProps) => {
    return(
        <div className='space-y-4'>
            <div className='h-16 px-4  bg-zinc-800 text-zinc-400 rounded-xl flex items-center shadow-shape gap-2'>
            
            <MapPin className='size-5 text-zinc-500'/>
            <input disabled={guestOpen} type="text" placeholder='Para onde você vai?' className='bg-transparent flex-1 placeholder-zinc-500 outline-none'/>

            <Calendar className='size-5 text-zinc-500'/>
            <input disabled={guestOpen} type="text" placeholder='Quando?' className='bg-transparent flex-1 placeholder-zinc-500 outline-none'/>

            <div className='bg-zinc-700/50 w-0.5 h-8'/>

            {guestOpen ? (
                <button type='button' onClick={guestCloseHandler} className='bg-zinc-700/50 font-semibold text-zinc-500 px-4 py-2 rounded-lg flex items-center justify-center gap-1'>Alterar local/data <Settings2/></button>
                ) : (
                <button type='button' onClick={guestOpenHandler}
                className='bg-lime-500 font-semibold text-lime-900 px-4 py-2 rounded-lg flex items-center justify-center gap-1 hover:bg-lime-400'>
                Continuar?
                <ArrowRight className='size-5'/>
                </button>
                )}
            </div>
        </div>
    )
}
import { Link2, Plus } from "lucide-react"

interface LinksInformationsProps {
    OpenModalCadLink: () => void
}

export const Links = ({
    OpenModalCadLink,
} : LinksInformationsProps) => {
    return(
        <div className="space-y-5">
            <p className="text-xl">Links importantes</p>
            <div className="w-full flex items-center justify-center text-zinc-400">
                <div className="flex-1 flex flex-col items-start justify-center">
                    <p className="text-lg">Reserva do AirBnB</p>
                    <a href="#">https://www.airbnb.com.br/rooms/104700011</a>
                </div>
                <Link2 className="size-5 "/>
            </div>
            <div className="w-full flex items-center justify-center text-zinc-400">
                <div className="flex-1 flex flex-col items-start justify-center">
                    <p className="text-lg">Reserva do AirBnB</p>
                    <a href="#">https://www.airbnb.com.br/rooms/104700011</a>
                </div>
                <Link2 className="size-5 "/>
            </div>
            <button
            type="button"
            onClick={OpenModalCadLink}
            className="w-full py-4 rounded-lg bg-zinc-800 shadow-shape text-zinc-400 text-xl flex items-center justify-center gap-2">
                <Plus className="size-5"/> Cadastrar novo link
            </button>
        </div>
    )
}
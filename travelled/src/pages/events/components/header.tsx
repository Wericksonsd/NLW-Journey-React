import { MapPin, Calendar, Settings2 } from "lucide-react"
import { Button } from "../../globals/button"

export const Header = () => {
    return(
        <div className="h-16 px-4 bg-zinc-900 text-zinc-300 shadow-shape rounded-lg flex items-center justify-center">
            <MapPin className="size-5 text-zinc-500"/>
            <input type="text" placeholder="Destino" className="bg-transparent flex-1 px-3 outline-none placeholder-zinc-500" />
            <Calendar className="size-5 text-zinc-500"/>
            <input type="text" placeholder="Data" className="bg-transparent w-50 px-3 outline-none placeholder-zinc-500" />
            <div className="w-0.5 bg-zinc-700/50 h-10 mx-4"/>
            <Button collor="secondary" size="sm">
                Alterar local/data
                <Settings2 className="text-zinc-500 size-5"/>
            </Button>
        </div>
    )
}
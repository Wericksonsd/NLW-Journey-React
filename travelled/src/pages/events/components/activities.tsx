import { Plus, CircleCheck, CircleDashed } from "lucide-react"
import { Button } from "../../globals/button"

interface ActivitiesProps {
    OpenModalCadAtv: () => void
}

export const Activities = ({
    OpenModalCadAtv,
} : ActivitiesProps) => {
    return(
        <div className="flex-1 space-y-4">
            <div className="w-full flex items-center justify-between">
                <p className="text-3xl">Atividades</p>
                
                <Button onClick={OpenModalCadAtv} collor="primary" size="sm">
                    <Plus className="size-5"/>
                    Cadastrar atividade
                </Button>
            </div>
            <div className="flex flex-col w-full gap-2">
                <div className="flex items-baseline gap-2">
                    <p className="text-zinc-300 font-semibold text-xl">Dia 17</p>
                    <p className="text-zinc-500 text-xs">Sábado</p>
                </div>
                <div className="h-10 flex items-center gap-2  rounded-lg text-zinc-600">
                    <p className="text-base flex-1">Nenhuma atividade cadastrada nessa data.</p>
                </div>
            </div>
            <div className="flex flex-col w-full gap-2">
                <div className="flex items-baseline gap-2">
                    <p className="text-zinc-300 font-semibold text-xl">Dia 18</p>
                    <p className="text-zinc-500 text-xs">Domingo</p>
                </div>
                <div className="space-y-2">
                    <div className="h-10 flex items-center gap-2 bg-zinc-800 shadow-shape rounded-lg px-4 text-zinc-400">
                        <CircleCheck className="size-5 text-lime-600"/>
                        <p className="text-base flex-1">Corrida de Kart</p>
                        <p className="text-sm">14:00</p>
                    </div>
                    <div className="h-10 flex items-center gap-2 bg-zinc-800 shadow-shape rounded-lg px-4 text-zinc-400">
                        <CircleDashed className="size-5"/>
                        <p className="text-base flex-1">Corrida de Kart</p>
                        <p className="text-sm">14:00</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
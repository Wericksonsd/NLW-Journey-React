import { Calendar, Clock, Tag, X } from "lucide-react"

interface ModalCadAtvProps {
    CloseModalCadAtv: () => void
}

export const ModalCadAtv = ({
    CloseModalCadAtv,
} : ModalCadAtvProps) => {
    return(
        <div className="fixed inset-0 bg-zinc-800/90 flex items-center justify-center text-zinc-400">
                    <div className="w-1/3 bg-zinc-800 shadow-shape rounded-md p-4 space-y-4">
                        <div className="flex items-center justify-center">
                            <span className="flex-1 text-lg">Cadastrar atividade</span>
                            <button
                            type="button"
                            onClick={CloseModalCadAtv}>
                                <X className="size-5"/>
                            </button>
                        </div>
                        <span>Todos convidados podem visualizar as atividades.</span>
                        <form className="flex items-center justify-center flex-wrap gap-4">
                            <div className="w-full h-14 rounded-md px-5 bg-zinc-900 shadow-shape flex items-center justify-center gap-2">
                                <Tag className="size-5 text-zinc-600"/>
                                <input
                                type="text"
                                name="atividade"
                                placeholder="Qual atividade?"
                                className="bg-transparent placeholder-zinc-600 flex-1 outline-none"/>
                            </div>

                            <div className="flex-grow h-14 rounded-md px-5 bg-zinc-900 shadow-shape flex items-center justify-center gap-2">
                                <Calendar className="size-5 text-zinc-600"/>
                                <input
                                type="text"
                                name="data"
                                placeholder="Qual a data?"
                                className="bg-transparent placeholder-zinc-600 flex-1 outline-none"/>
                            </div>
                        
                            <div className="h-14 rounded-md px-5 bg-zinc-900 shadow-shape flex items-center justify-center gap-2">
                                <Clock className="size-5 text-zinc-600"/>
                                <input
                                type="text"
                                name="horario"
                                placeholder="Qual horário?"
                                className="bg-transparent placeholder-zinc-600 flex-1 outline-none"/>
                            </div>

                            <button
                            className="p-3 bg-lime-600 text-lime-950 rounded-md flex-grow flex items-center justify-center gap-2">
                                <span className="text-xl font-semibold">Salvar atividade</span>
                            </button>

                        </form>
                        
                    </div>
                </div>
    )
}
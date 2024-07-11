import { Calendar, Clock, Tag, X } from "lucide-react"
import { Inputs } from "../../globals/inputs"
import { Button } from "../../globals/button"

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
                            <Button onClick={CloseModalCadAtv} collor="none" size="none">
                                <X className="size-5"/>
                            </Button>
                        </div>
                        <span>Todos convidados podem visualizar as atividades.</span>
                        <form className="flex items-center justify-center flex-wrap gap-4">

                            <Inputs
                                children={<Tag className="size-5 text-zinc-600"/>}
                                typeIpt="text"
                                nameIpt="atividade"
                                placeholderText="Qual atividade?"
                            />

                            <Inputs size="flex1"
                                children={<Calendar className="size-5 text-zinc-600"/>}
                                typeIpt="date"
                                nameIpt="dataAtividade"
                                placeholderText="Qual dia?"
                            />
                                                        
                            <Inputs size="md"
                                children={<Clock className="size-5 text-zinc-600"/>}
                                typeIpt="time"
                                nameIpt="horarioAtividade"
                                placeholderText="Qual horário?"
                            />

                            <Button collor="primary" size="full">
                                <span className="text-xl font-semibold">Salvar atividade</span>
                            </Button>
                        </form>
                        
                    </div>
                </div>
    )
}
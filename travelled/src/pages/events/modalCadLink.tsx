import { Calendar, Tag, X } from "lucide-react"

interface ModalCadLinkProps {
    CloseModalCadLink: () => void
}

export const ModalCadLink = ({
    CloseModalCadLink,
} : ModalCadLinkProps) => {


    return (
        <div className="fixed inset-0 bg-zinc-800/90 flex items-center justify-center text-zinc-400">
            <div className="w-1/3 bg-zinc-800 shadow-shape rounded-md p-4 space-y-4">
                <div className="flex items-center justify-center">
                    <span className="flex-1 text-lg">Cadastrar link</span>
                    <button
                    type="button"
                    onClick={CloseModalCadLink}>
                        <X className="size-5"/>
                    </button>
                </div>

                <span>Todos convidados podem visualizar os links importantes.</span>

                <form className="w-full flex flex-col items-center justify-center flex-wrap gap-4">
                    <div className="w-full h-14 rounded-md px-5 bg-zinc-900 shadow-shape flex items-center justify-center gap-2">
                        <Tag className="size-5 text-zinc-600"/>
                        <input
                        type="text"
                        name="atividade"
                        placeholder="Qual atividade?"
                        className="bg-transparent placeholder-zinc-600 flex-1 outline-none"/>
                    </div>

                    <div className="w-full h-14 rounded-md px-5 bg-zinc-900 shadow-shape flex items-center justify-center gap-2">
                        <Calendar className="size-5 text-zinc-600"/>
                        <input
                        type="text"
                        name="data"
                        placeholder="Qual a data?"
                        className="bg-transparent placeholder-zinc-600 flex-1 outline-none"/>
                    </div>

                    <button
                    className="p-3 bg-lime-600 text-lime-950 rounded-md w-full flex items-center justify-center gap-2">
                        <span className="text-xl font-semibold">Salvar atividade</span>
                    </button>

                </form>
                        
            </div>
        </div>
    )
}
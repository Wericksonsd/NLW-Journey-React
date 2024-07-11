import { CircleDashed, CircleCheck, UserCog } from "lucide-react"

export const UsersInformations = () => {
    return(
        <div className="space-y-5">
            <p className="text-xl">Convidados</p>
            <div className="w-full flex items-center justify-center text-zinc-400">
                <div className="flex-1 flex flex-col items-start justify-center">
                    <p className="text-lg">Jessica White</p>
                    <p>jessica.white44@yahoo.com</p>
                </div>
                <CircleDashed className="size-5 "/>
            </div>
            <div className="w-full flex items-center justify-center text-zinc-400">
                <div className="flex-1 flex flex-col items-start justify-center">
                    <p className="text-lg">Jessica White</p>
                    <p>jessica.white44@yahoo.com</p>
                </div>
                <CircleCheck className="size-5 text-lime-600"/>
            </div>
            <button type="button" className="w-full py-4 rounded-lg bg-zinc-800 shadow-shape text-zinc-400 text-xl flex items-center justify-center gap-2">
                <UserCog className="size-5"/> Gerenciar convidados
            </button>
        </div>
    )
}
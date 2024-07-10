import { Calendar, MapPin, Settings2, Plus, CircleCheck, Link2, CircleDashed, UserCog} from "lucide-react"
import { useState } from "react"
import { ModalCadLink } from "./modalCadLink"
import { ModalCadAtv } from "./modalCadAtv"

export const Events = () => {

    const [modalCadAtv, setModalCadAtv] = useState(false)
    const [modalCadLink, setModalCadLink] = useState(false)
    

    const OpenModalCadAtv = () => setModalCadAtv(true)
    const CloseModalCadAtv = () => setModalCadAtv(false)

    const OpenModalCadLink = () => setModalCadLink(true)
    const CloseModalCadLink = () => setModalCadLink(false)
    return (
        <div className="w-screen h-screen">
            <div className="max-w-6xl px-6 py-10 mx-auto">
                <div className="h-16 px-4 bg-zinc-900 text-zinc-300 shadow-shape rounded-lg flex items-center justify-center">
                    <MapPin className="size-5 text-zinc-500"/>
                    <input type="text" placeholder="Destino" className="bg-transparent flex-1 px-3 outline-none placeholder-zinc-500" />
                    <Calendar className="size-5 text-zinc-500"/>
                    <input type="text" placeholder="Data" className="bg-transparent w-50 px-3 outline-none placeholder-zinc-500" />
                    <div className="w-0.5 bg-zinc-700/50 h-10 mx-4"/>
                    <button type="button" title="AlterarLocal" className="bg-zinc-800 rounded-lg px-5 py-2 text-zinc-500 flex items-center justify-center gap-2">Alterar local/data <Settings2 className="text-zinc-500 size-5"/></button>
                </div>
                <div className="my-8"/>
                <div className="w-full flex justify-center items-start px-6 space-x-12">
                    <div className="flex-1 space-y-4">
                        <div className="w-full flex items-center justify-between">
                            <p className="text-3xl">Atividades</p>
                            <button type="button"
                            onClick={OpenModalCadAtv}
                            className="bg-lime-500 text-lime-900 px-5 rounded-lg py-2 flex items-center justify-center gap-2">
                                <Plus className="text-lime-900 size-5"/>
                                Cadastrar atividade
                            </button>
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
                    <div className=" flex-1 max-w-sm">
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
                            <div className="my-4 w-full h-0.5 bg-zinc-800/50"></div>
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
                    </div>
                </div>
            </div>

            {modalCadAtv && (
                <ModalCadAtv
                    CloseModalCadAtv={CloseModalCadAtv}
                />
            )}

            {modalCadLink && (
                <ModalCadLink
                    CloseModalCadLink={CloseModalCadLink}
                />
            )}  
        </div>
        
    )
}
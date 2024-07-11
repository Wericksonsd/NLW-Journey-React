import { useState } from "react"
import { ModalCadLink } from "./components/modalCadLink"
import { ModalCadAtv } from "./components/modalCadAtv"
import { Header } from "./components/header"
import { Activities } from "./components/activities"
import { Informations } from "./components/informations"

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
                <Header/>

                <div className="my-8"/>

                <div className="w-full flex justify-center items-start px-6 space-x-12">
                    <Activities OpenModalCadAtv={OpenModalCadAtv}/>
                    <Informations OpenModalCadLink={OpenModalCadLink}/>
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
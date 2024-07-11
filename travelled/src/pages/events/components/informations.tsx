import { UsersInformations } from "./usersInformations"
import { Links } from "./linksInformations"

interface InformatiosProps {
    OpenModalCadLink: () => void
}

export const Informations = ({
    OpenModalCadLink,
} : InformatiosProps) => {
    return (
        <div className=" flex-1 max-w-sm">
            <Links OpenModalCadLink={OpenModalCadLink}/>
            <div className="my-4 w-full h-0.5 bg-zinc-800/50"></div>
            <UsersInformations/>
        </div>
    )
}
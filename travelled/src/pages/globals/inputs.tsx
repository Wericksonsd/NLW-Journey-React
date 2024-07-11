import { ReactNode } from "react"
import { tv, VariantProps } from 'tailwind-variants'

const inputVariants = tv({
    base: 'h-14 rounded-md px-5 bg-zinc-900 shadow-shape flex items-center justify-center gap-2',
    variants: {
    size: {
        sm: 'w-40',
        md: 'w-65',
        flex1: 'flex-grow',
        full: 'w-full '
    }
    },
    defaultVariants: {
        size: 'full',
    }
});

interface InputsProps extends VariantProps<typeof inputVariants>{
    children: ReactNode
    typeIpt: string
    nameIpt: string
    placeholderText: string
}

export const Inputs = ({
    children,
    typeIpt,
    nameIpt,
    placeholderText,
    size
} : InputsProps) => {
    return(
        <div className={inputVariants({size})}>
            {children}
            <input
            type={typeIpt}
            name={nameIpt}
            placeholder={placeholderText}
            className="bg-transparent placeholder-zinc-600 flex-1 outline-none"/>
        </div>
    )
}
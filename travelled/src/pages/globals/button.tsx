import { ComponentProps, ReactNode } from 'react';
import { tv, VariantProps } from 'tailwind-variants';

const buttonVariants = tv({
    base: 'py-2 rounded-md flex items-center justify-center gap-2 ',
    variants: {
        collor: {
            primary: 'bg-lime-600 text-lime-950 hover:bg-lime-500',
            secondary: 'bg-zinc-800 text-zinc-500 hover:bg-zinc-700/50',
            none:'bg-transparent',
        },
        size: {
            sm: 'px-4',
            full: 'w-full',
            none: 'p-0'
        }
    },
    defaultVariants: {
        size: 'sm',
        collor: 'primary'
    }
});
interface ButtonProps extends ComponentProps<'button'>, VariantProps<typeof buttonVariants>{
    children: ReactNode
}

export const Button = ({
    children,
    collor,
    size,
    ...props
} : ButtonProps) => {
    return(
        <button {...props} className={buttonVariants({collor, size})}>
            {children}  
        </button>
    )
}
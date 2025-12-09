
import type { ButtonProps } from '../../utils/Types';




export const DefaultButton = ({children, className, ...props}: ButtonProps) => {
    return (
        <button className={className} {...props}>
            {children}
        </button>
    )
}
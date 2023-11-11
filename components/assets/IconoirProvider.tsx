/* eslint-disable react/no-children-prop */
import { IconoirProvider } from 'iconoir-react'

export function IconoirProviderConfig () {
    return (
        <IconoirProvider
            iconProps={{
                color: '#AAAAAA',
                strokeWidth: 1,
                width: '1em',
                height: '1em',
            }} children={undefined}  ></IconoirProvider>
    )
    
}

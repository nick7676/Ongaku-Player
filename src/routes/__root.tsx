import { createRootRoute } from '@tanstack/react-router'


const RootLayout = () => (
    <>
        <p> ciao</p>
    </>
)

export const Route = createRootRoute({ component: RootLayout })
import MainLayout from '@/Layouts/mainLayout/MainLayout'
import { createRootRoute, Outlet } from '@tanstack/react-router'


const RootLayout = () => (
    <>
        <MainLayout />
        <Outlet />
    </>
)

export const Route = createRootRoute({ component: RootLayout })
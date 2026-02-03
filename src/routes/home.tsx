import WelcomeCard from '@/sections/Home/components/WelcomeCard';
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/home')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className='flex justify-center'>
      <WelcomeCard />
    </div>
  );
}

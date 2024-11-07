import './App.css'
import { Button } from './components/ui/button'

function App() {

  return (
    <>
      <div className='flex flex-col justify-center items-center h-screen'>
        <div className='text-2xl font-bold mt-4'>R-BTS-TEMPLATE</div>
        <div className='mt-4 font-medium'>This is a template for a React app with Bun and Tailwind CSS and Shadcn UI</div>
        <Button className='mt-4'>Click me</Button>
      </div>
    </>
  )
}

export default App

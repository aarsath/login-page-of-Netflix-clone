import './App.css'
import img from './assets/logo.png'
import Container from './components/Container'
import bgback from './assets/bgback.png'
function App() {
  return (
    <div
      className="relative flex min-h-screen w-full flex-col items-center justify-center gap-8 bg-cover bg-center bg-no-repeat px-4 py-8"
      style={{ backgroundImage: `url(${bgback})` }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 flex w-full flex-col items-center gap-8">
        <img
          src={img}
          className="w-40 object-contain drop-shadow-2xl"
          alt="Netflix"
        />
        <Container />
      </div>
    </div>
  )
}

export default App

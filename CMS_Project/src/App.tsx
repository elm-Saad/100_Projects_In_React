import Hero from "./Component/Hero"
import Projects from "./Component/Project"

const App =()=>{
  return <main className="min-h-screen w-full flex justify-center">
    <section className="w-full max-w-[2200px] flex flex-col items-center">
     <Hero />
     <Projects />
    </section>
  </main>
}

export default App
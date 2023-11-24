import Gallery from "./Component/Gallery"
import SearchForm from "./Component/SearchForm"
import ThemeToggle from "./Component/ThemeToggle"



const App =()=>{
  return <main className="min-h-screen w-full flex justify-center">
    <section className="w-full max-w-[2200px] flex flex-col items-center">
      <ThemeToggle />
      <SearchForm />
      <Gallery />
    </section>
  </main>
}

export default App
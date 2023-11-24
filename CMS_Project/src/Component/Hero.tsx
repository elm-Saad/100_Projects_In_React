import Title from "./Title"
import hero from '../assets/hero.svg'

const Hero = ()=>{
    return <section className="flex items-center gap-8 m-4 lg:m-8 p-2 lg:p-20 lg:pt-8 transition-all duration-200">
        <header className="w-full max-w-[700px] h-full flex items-center">
            <div>
                <Title text="CMS Project"/>
                <p className="text-gray-600">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima repudiandae nisi,
                    accusamus culpa eum quasi odio est reiciendis impedit dolorem magnam expedita
                    corrupti nihil nam, fugit ipsam neque consectetur dolore.
                    accusantium molestiae modi repellat quaerat! Rem ipsum odio asperiores impedit rerum,
                    obcaecati maiores delectus mollitia facere error vitae.
                </p>
            </div>
        </header>
        <div className="w-full hidden md:flex justify-end">
            <img
                className="object-fit max-w-[300px]" 
                src={hero}
                alt="Svg Image"
            />
        </div>
    </section>
}
export default Hero
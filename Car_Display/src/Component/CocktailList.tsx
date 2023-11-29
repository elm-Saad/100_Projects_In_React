
import Wrapper from '../assets/wrappers/CocktailList'
import CocktailCard from './CocktailCard'

const CocktailList = ({drinks}) =>{

    if(!drinks){
        return <p>no element is there</p>
    }

    const formattedDrinks = drinks.map(item=>{
        return {
            id: item.idDrink,
            name: item.strDrink,
            image: item.strDrinkThumb,
            info: item.strAlcoholic,
            glass: item.strGlass,
        }
    })
    return  <Wrapper>
    {formattedDrinks.map((item: any) => {
      return <CocktailCard key={item.id} {...item} />;
    })}
  </Wrapper>
}

export default CocktailList
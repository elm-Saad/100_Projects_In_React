import MenuItem from './MenuItem'
import { MenuProps } from "../interfaces"

const Menu= ({ data }: MenuProps) => {
    return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

        {data.map((item) => (
          <div key={item.id} className=''>
            <MenuItem {...item} />
          </div>
        ))}
      </div>
    );
  };
  
  export default Menu;
  
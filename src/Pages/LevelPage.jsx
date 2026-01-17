import { useParams, Link } from "react-router-dom";
import { PRODUCTS_DATA } from "../Data/products";

const LevelPage = () => {
   const { category, material } = useParams();

   let items = [];

   if (category && !material) {
      // Show materials
      items = PRODUCTS_DATA.find(c => c.id === category)?.children || [];
   }

   if (category && material) {
      // Show types
      const cat = PRODUCTS_DATA.find(c => c.id === category);
      items = cat?.children.find(m => m.id === material)?.children || [];
   }

   console.log(items);


   return (
      <div>
         <h2>{category?.replace("-", " ")}</h2>

         {items.map(item => (
            <Link
               key={item.id}
               to={`${item.id}`}
            >
               {item.name}
            </Link>
         ))}
      </div>
   );
};

export default LevelPage;

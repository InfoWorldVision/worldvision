import { useParams } from "react-router-dom";

const ProductDetail = () => {
   const { category, material, type } = useParams();

   return (
      <div>
         <h2>Product Detail</h2>
         <p>Category: {category}</p>
         <p>Material: {material}</p>
         <p>Type: {type}</p>
      </div>
   );
};

export default ProductDetail;

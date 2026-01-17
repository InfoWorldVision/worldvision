import { Link } from "react-router-dom"

const IntraocularLenses = () => {
   return (
      <>
         <p>HYDROPHOBIC <Link to={'/our-products/intraocular-lenses/hydrophobic-iol'}>Learn More..</Link></p>
         <p>HYDROPHILIC <Link to={'/our-products/intraocular-lenses/hydrophilic-iol'}>Learn More..</Link></p>
         <p>PMMA  <Link to={'/our-products/intraocular-lenses/pmma-iol'}>Learn More..</Link> </p>
      </>
   )
}

export default IntraocularLenses
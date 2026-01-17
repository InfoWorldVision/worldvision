import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";

import Home from "./Pages/Home";

//Intraocular Product and child component Api
import IntraocularLenses from "./Pages/our-products/intraocular-lenses/IntraocularLenses"
import Hydrophobic from "./Pages/our-products/intraocular-lenses/children/Hydrophobic/Hydrophobic";
import Hydrophilic from "./Pages/our-products/intraocular-lenses/children/Hydrophilic/Hydrophilic";
import Pmma from "./Pages/our-products/intraocular-lenses/children/Pmma/Pmma";

const intraocularLensesApi = [
   {
      path: "our-products/intraocular-lenses",
      element: <IntraocularLenses />
   },
   {
      path: "our-products/intraocular-lenses/hydrophobic-iol",
      element: <Hydrophobic />
   },
   {
      path: "our-products/intraocular-lenses/hydrophilic-iol",
      element: <Hydrophilic />
   },
   {
      path: "our-products/intraocular-lenses/pmma-iol",
      element: <Pmma />
   },
   // {
   //    path: "our-products/intraocular-lenses/hydrophobic-iol/monofocal-hydrophobic-iol",
   //    element: <MonofocalHydrophobicIol />
   // },
   // {
   //    path: "our-products/veterinary",
   //    element: <Veterinary />
   // },
   // {
   //    path: "our-products/veterinary/veterinary-iol",
   //    element: <VeterinaryIol />
   // }
]


export const router = createBrowserRouter([
   {
      path: "/",
      element: <RootLayout />,
      children: [
         {
            path: "/",
            index: true,
            element: <Home />
         },
         ...intraocularLensesApi

      ]
   }
]);


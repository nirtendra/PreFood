import {Hero} from "./components/Hero";
import {FeatureProducts} from "./components/FeatureProducts"
import {Testimonial} from "./components/Testimonial"
import {Faq} from "./components/Faq"
import { useTitle } from "../../components/hooks/useTitle";


export const HomePage =() =>{



   
   useTitle("Explore Food Menu")

return (
<main>
   <Hero/>
   <FeatureProducts  />
   <Testimonial/>
   <Faq/>

</main>
)

}
import { Fragment } from "react/jsx-runtime";
import Hero from "../components/hero";

function HomePage(){
  return(
   <Fragment>
     <Hero />
     <div className="background" style={{ backgroundImage: 'url(./background-home.jpg)', backgroundSize: 'cover', height: '65vh', position: 'relative', color: 'white' }}>
       <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
         <h1 className="Image-text">From the source we build brighter futures</h1>
       </div>
     </div>
   </Fragment>
  )
}

export default HomePage; 
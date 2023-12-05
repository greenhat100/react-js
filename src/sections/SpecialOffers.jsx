import { offer } from "../assets/images"
import  Button  from "../components/Button";
import { shoe8 } from "../assets/images";


const SpecialOffers = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
        <div className="flex-1">
          <img className="object-contain w-full" src={offer} width={773} height={687} />
        </div>
        <div className="flex flex-1 flex-col">
       <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
        <span className="text-coral-red">Special </span>
        Offers
       </h2>

       
        <p className='mt-4 lg:max-w-lg info-text'>
         Embark on shopping journey that redefines your experience with unbeatable deals.
        </p>
        <p className="mt-6 lg:maw-w-lg info-text mb-6">
         Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
         <Button label='View Details' />
        </div>
      </div>
    
    </section>
  )
}

export default SpecialOffers
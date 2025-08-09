import mapicon from '../assets/loc.png'

export default function Entry(props){
    return (
        <article className='box-border flex flex-col lg:flex-row'>
            
            <img className='h-64 lg:w-3xs w-96 object-cover rounded-lg mr-20' src={props.img.src} alt={props.img.alt} />
        
            <div className=" flex flex-col gap-3 w-96 my-2 leading-12 h-72 p-5">
                <div className="flex gap-x-3 items-center  ">
                     <img src={mapicon} alt="map-icon" className="size-10" />
                     <span classname="tracking-[2px]">{props.country.toUpperCase()}</span>
                     <a className="underline underline-offset-2 text-gray-400 text-sm" href={props.googleMapsLink}>View in Google Maps</a>
                </div>
               
                <h2 className="font-bold ml-3 text-2xl ">{props.title}</h2>
                <p className="ml-3  mb-2 text-base font-bold">{props.dates}</p>
                <p className="ml-3 mt-2 leading-6 text-sm line-clamp-3 ">{props.text}</p>
            </div>
        </article>
    )
}
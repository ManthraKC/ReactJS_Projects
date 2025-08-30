import burgerImg from "../assets/burger1.png"
import burger from "../assets/burgerdark.png"
import burger3 from "../assets/burger3.png"

export default function Images (){
    return (
        <div className=" 2xl:inline-block hidden ">
        <img src={burgerImg} alt="" className="w-10 h-10 transform rotate-15 absolute left-20 "/>
            <img src={burger} alt="" className="w-8 h-8 transform -rotate-15 absolute left-105 "/>
            <img src={burgerImg} alt="" className="w-10 h-10 transform -rotate-55 absolute right-20  "/>
            <img src={burger} alt="" className="w-8 h-8 transform -rotate-345 absolute right-105 top-10 "/>
            <img src={burger3} alt="" className="w-5 h-5 transform -rotate-345 absolute right-62 top-15"/>

            <img src={burger3} alt="" className="w-5 h-5 transform -rotate-25 absolute left-70 top-5"/>
        </div>
    )
}
import Image from "next/image";
import meh from "../images/Me.PNG"
import { useMoralis } from "react-moralis";

function Login() {

  const { authenticate} = useMoralis();

  return <div className='bg-black relative'>
     <h1>I am the Login</h1>

    <div className="flex flex-col absolute z-50 h-4/6 w-full items-center justify-center space-y-4">
        {/* Logo */} 

        <Image className="object-cover rounded-full" src={meh}
         height={200}
        width={190}
         /> 
        {/* Login Button */}
        <button onClick={authenticate} className="bg-orange-200 rounded-lg p-5 font-bold animate-pulse ">Login to the METAVERSE</button>
         
    </div>

    <div className="w-full h-screen">
       <Image src="https://links.papareact.com/55n"
       alt=""
       layout="fill"
        objectFit="cover"
       />
    </div>

  </div>;
}

export default Login;

 

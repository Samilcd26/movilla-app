import React, { useRef } from 'react'
import { ArrowRightCircle } from 'react-bootstrap-icons';
import alertify from 'alertifyjs';


export default function ApiLogin() {
    const input=useRef("");
    const accontURL="https://api.themoviedb.org/3/authentication/guest_session/new?api_key="
    const Login=()=>{
        
        fetch(accontURL+input.current.value)
        .then(res=>res.json())
        .then((json)=>json.success?alertify.success('Giriş Başarılı')|localStorage.setItem("API Token",input.current.value):alertify.alert('Invalid API key:','You must be granted a valid key.'))
        .catch(err=>alertify.alert('Connection:','Connection is failed'))
    }

    return (
        <div >
            <div className='h-screen flex items-center justify-center font-mono'>
                <div className='text-white  w-1/2 flex items-center flex-col gap-5'>
                    <p className='text-3xl'>Lütfen API key girin</p>
                    <div className='relative w-full '>
                        <input type='text' className='rounded-full w-full h-20 text-black text-center text-4xl ' ref={input}  />
                       <button className='absolute text-red-900 text-6xl top-2.5 -right-20 md:right-2 hover:text-blue-700 ' onClick={Login}><ArrowRightCircle/></button>
                    </div>
                    <p>API key almak için <a href="https://www.themoviedb.org" target='_blank' className='underline decoration-sky-500 underline-offset-2 hover:text-sky-500 hover:uppercase hover:decoration-white'>themoviedb.org</a> adresini kullanın...</p>
                </div>
            </div>
            
        </div>
    )
}

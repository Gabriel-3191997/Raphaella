import React from 'react'
import img1 from './img/Untitled-design-79.webp'
import img2 from './img/Untitled-design-78.webp'
import img3 from './img/Untitled-design-80.webp'

class Gallery extends React.Component{

	render(){

		return(

			<>
			
			<div className = "bg-white h-auto mt-0 m-0 mb-32 md:mt-24">
			<div className="flex flex-wrap justify-center gap-0">
			<div>
				<img className="mx-0 w-auto cursor-pointer md:hover:scale-110" src={img1}/>
			</div>
			<div>
				<img className="mx-0 w-auto cursor-pointer md:hover:scale-110" src={img2}/>
			</div>
			<div>
				<img className="mx-0 w-auto cursor-pointer md:hover:scale-110" src={img3}/>
			</div>
			</div>
			<h2 className="text-sky-900 font-bold font-sans text-4xl text-center capitalize pt-24">
				Partner with Us - Autism Awareness Foundation
			</h2>
			<p className="text-center capitalize text-sky-600 font-bold font-sans p-7 text-lg">
				Together, We Can Build a More Inclusive Liberia and across Africa.
			</p>

			<div className="flex flex-wrap justify-center">
				<a href="https://whatsapp.com/channel/0029VbBDbP82kNFlGTRLl81X" className="bg-sky-900 text-white uppercase font-sans font-normal py-4 px-8 cursor-pointer hover:underline">join us</a>
			</div>	
		</div>
			</>

			)
	}
}

export default Gallery
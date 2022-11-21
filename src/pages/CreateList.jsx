import React, { useState } from 'react'


export default function CreateList() {
    const submitChange = ()=>{
        
    }
    const [formData, setFormData] = useState({
        type: "rent",
        name: "",
        bed: 1,
        bath: 1,
        parking: false,
        furnished: false,
        address : "",
        description: "",
        offer: false,
        price: 1,
        discount: 1

    })
    const{type, name, bed,bath, parking, furnished , address,  description, offer, price, discount} = formData
    return (
        <main className='max-w-md px-2 mx-auto '>
            <h1 className='text-3xl text-center mt-6 font-bold uppercase'>Create List</h1>
            <form>
                <p className='mt-6 text-lg font-semibold'>Sell / Rent</p>
                <div className='flex'>
                    <button type='button' id="type" value="sale" onClick={submitChange }
                    className={`mr-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg  focus:shadow-lg active:shadow-lg
                    transition duration-150 ease-in-out w-full ${ type === "rent" ? "bg-white text-black" : "bg-slate-600 text-white"}
                    `}
                    >Sell</button>
                    <button type='button' id="type" value="sale" onClick={submitChange }
                    className={`px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg  focus:shadow-lg active:shadow-lg
                    transition duration-150 ease-in-out w-full ${ type === "sell" ? "bg-white text-black" : "bg-slate-600 text-white"}
                    `}
                    >Rent</button>
               
                </div>
                <p className='mt-6 text-lg font-semibold'>Name</p>
                <input type="text" className='w-full rounded' placeholder='Name' value={name}  onChange={submitChange} maxLength="32" minLength="10"
                required
                />
                
                <div className='flex'>
                    
                    <div className='mr-3'>
                    <p className='mt-6 text-lg font-semibold'>Beds</p>
                        <input type="number" id="bed" value={bed} onChange={submitChange} min="1" max="50" required className='
                        px-4 py-2 text-gray-700 bg-white border-gray-300 transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-700 text-center'/>
                    </div>
                    <div>
                    <p className='mt-6 text-lg font-semibold'>Baths</p>
                    <input type="number" id="bath" value={bath} onChange={submitChange} min="1" max="50" required 
                    className='
                    px-4 py-2 text-gray-700 bg-white border-gray-300 transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-700 text-center'
                    />
                    </div>
                   
                </div>

                <p className='mt-6 text-lg font-semibold'>Parking</p>
                <div className='flex mt-6'>
              
                    <button type='button' id="parking" value={true} onClick={submitChange }
                    className={`mr-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg  focus:shadow-lg active:shadow-lg
                    transition duration-150 ease-in-out w-full ${ !parking ? "bg-white text-black" : "bg-slate-600 text-white"}
                    `}
                    >Yes</button>
                    <button type='button' id="parking" value={true} onClick={submitChange }
                    className={`px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg  focus:shadow-lg active:shadow-lg
                    transition duration-150 ease-in-out w-full ${ parking ? "bg-white text-black" : "bg-slate-600 text-white"}
                    `}
                    >No</button>
                        
                     
                    </div>
                   <p className='mt-6 text-lg font-semibold'>Furnished</p>
                    <div className='flex mt-6'>
                    <button type='button' id="furnished" value={true} onClick={submitChange }
                    className={`mr-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg  focus:shadow-lg active:shadow-lg
                    transition duration-150 ease-in-out w-full ${ !furnished ? "bg-white text-black" : "bg-slate-600 text-white"}
                    `}
                    >Yes</button>
                    <button type='button' id="furnished" value={false} onClick={submitChange }
                    className={`px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg  focus:shadow-lg active:shadow-lg
                    transition duration-150 ease-in-out w-full ${ furnished ? "bg-white text-black" : "bg-slate-600 text-white"}
                    `}
                    >No</button>
                        
                        
                    </div>
                    
                    <div className='mr-3'>
                    <p className='mt-6 text-lg font-semibold'>Address</p>
                        <textarea type="text" id="address" value={address} onChange={submitChange} min="1" max="50" required className='w-full h-9
                        px-4 py-2 text-gray-700 bg-white border-gray-300 transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-700 'placeholder='Address'/>
                    </div>

                    
                    <div className='mr-3'>
                    <p className='mt-6 text-lg font-semibold'>Description</p>
                        <textarea type="text" id="description" value={description} onChange={submitChange} min="1" max="50" required className='w-full h-9
                        px-4 py-2 text-gray-700 bg-white border-gray-300 transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-700 ' placeholder='Description'/>
                    </div>
                  
                   

                    <p className='mt-6 text-lg font-semibold'>Offer</p>
                    <div className='flex mb-6'>

                    <button type='button' id="offer" value={true}onClick={submitChange }
                    className={`mr-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg  focus:shadow-lg active:shadow-lg
                    transition duration-150 ease-in-out w-full ${ offer ? "bg-white text-black" : "bg-slate-600 text-white"}
                    `}
                    >Yes</button>
                    <button type='button' id="offer" value={false} onClick={submitChange }
                    className={`px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg  focus:shadow-lg active:shadow-lg
                    transition duration-150 ease-in-out w-full ${ !offer ? "bg-white text-black" : "bg-slate-600 text-white"}
                    `}
                    >No</button>
               
                </div>
                <p className='mt-6 text-lg font-semibold'>Price</p>
                <div className='flex space-x-6'>
              
                    <div className='mr-3 flex justify-center items-center'>
                    
                        <input type="number" id="price" value={price} onChange={submitChange} min="50" max="400000000" required className='
                        px-4 py-2 text-gray-700 bg-white border-gray-300 transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-700 text-center'/>
                    </div>
                    <div>
                    
                    {type === 'rent' &&(
                        <div><p className='text-md w-full whitespace-nowrap'>$/Month</p></div>
                    )}
                    
                    </div>
                   
                   
                </div>
                <div className='mt-6'>
                      
                      {offer === true &&(
                         <div>
                             <p className='mt-6 text-lg font-semibold'>Discount</p>
                          <input type="number" id="discount"value={discount} onChange={submitChange} className='
                          px-4 py-2 text-gray-700 bg-white border-gray-300 transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-700 text-center' />
                         </div>
                      )}
                      </div>

                      <div className='mt-6'>
                      <p className='mt-6 text-lg font-semibold'>Images</p>
                      <p className='text-sm'>The first image will be the cover (max 6)</p>
                      <input type="file" id="images"  onChange={submitChange}  accept=".jpg,.png,.jpeg" className='
                          px-4 py-2 text-gray-700 bg-white border-gray-300 transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-700 text-center rounded' 
                          required
                          />

                      </div>
                      <div className='mt-6'>
                        <button type="submit" className='w-full bg-blue-600 text-center text-white px-7 py-3 font-medium text-sm uppercase rounded hover:bg-blue-400 shadow-md
                        hover:shadow-lg focus:bg-blue-700 active:bg-blue-800
                        '>Create List</button>
                      </div>
            </form>
        </main>
    )
}

import React from 'react'
import BasicTable from './table'
const PreviewInvoice=()=>{
    
    return(
        <>
        <div className=" w-full flex   justify-around bg-gray-200 rounded-lg p-4 ">

            <div className="max-h-max md:w-4/6 sm:w-full bg-white  border-black">

                <header className="bg-white flex  justify-between   p-4">
                    <div className=" h-full  flex flex-col w-1/6  justify-center  ">
                        <div className="h-1/6">

                    <img src="https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-2/img/logo.36f34a9f.svg" alt="" srcset="" />
                        </div>  
                    <p className="font-medium">Industial product</p>
                    </div>
                    <div className="flex flex-col  w-3/6  justify-center items-center ">
                       <h3 className="font-bold uppercase  font-serif ">TAX-INVOICE</h3>
                       <p className="uppercase text-lg font-bold  font-serif ">PG Private LtdINDISIAHIDFIDHI</p>
                         <p className="flex  font-medium">AREEDD LOREM</p>
                         <p className="flex  font-medium">GSITN:78573857937</p>
                        <div className="flex  font-medium">
                            <div  className="flex mr-2">

                                <label htmlFor="">tel : </label>
                                <p>78276775234</p>
                            </div>
                            <div  className="flex">

                                <label htmlFor="">email</label>
                                <p>example@gmail.com</p>
                            </div>

                        </div>
                    </div>

                    {/* original */}
                    <div className="font-medium font-Times">
                        <p>Original For Buyer</p>

                    </div>

                </header>

                <section className="flex mt-2 justify-between   border-black border-t-2 border-black border-b-2  ">
             
               <div className="flex flex-col    p-2  w-1/2"    >
                   <div className="flex"><label htmlFor="" className="font-bold w-1/4 ">INvoice NO :</label><p className="text-gray-500 ">283798uifhksdnfjahi</p></div>
                   <div className="flex"><label htmlFor="" className="font-medium  w-1/4">Dated :</label><p className="text-gray-500">283798uifhksdnfjahi</p></div>
                   <div className="flex"><label htmlFor="" className="font-medium w-1/4">Place of Supply :</label><p className="text-gray-500">283798uifhksdnfjahi</p></div>
                   <div className="flex"><label htmlFor="" className="font-medium w-1/4">Reverse No :</label><p className="text-gray-500">283798uifhksdnfjahi</p></div>
                   <div className="flex"><label htmlFor="" className="font-medium w-1/4">GR/RR No :</label><p className="text-gray-500">283798uifhksdnfjahi</p></div>
                   <div className="flex"><label htmlFor="" className="font-medium w-1/4">Transport :</label><p className="text-gray-500">283798uifhksdnfjahi</p></div>
                  
             </div>
            
               <div className="flex  w-1/2   justify-end p-2 border-black border-l-2  ">
                   <div className="flex flex-col  ">

                   <div className="flex"><label htmlFor="" className="font-bold w-1/2">Vehicle NO :</label><p className="text-gray-500">283798uifhksdnfjahi</p></div>
                   <div className="flex"><label htmlFor="" className="font-medium  w-1/2">Station :</label><p className="text-gray-500">283798uifhksdnfjahi</p></div>
                   <div className="flex"><label htmlFor="" className="font-medium w-1/2">E-Way Bill NO :</label><p className="text-gray-500">283798uifhksdnfjahi</p></div>
                   <div className="flex"><label htmlFor="" className="font-medium w-1/2">P.O NO :</label><p className="text-gray-500">283798uifhksdnfjahi</p></div>
                   <div className="flex"><label htmlFor="" className="font-medium w-1/2">Challen NO :</label><p className="text-gray-500">283798uifhksdnfjahi</p></div>
                  
                   </div>
             </div>
           </section >
               {/* billl to */}

               <section className="flex  justify-between    border-black border-b-2    ">
             
             <div className="flex flex-col p-2">
                 <div className="flex"><label className="font-bold">Billed to :</label></div>
                 <div className="flex"><p className="text-gray-500">INvoice NO :</p ></div>
                 
                 <div className="flex"><label htmlFor="" className="font-medium ">GSTIN /UIN :</label><p className="text-gray-500">F</p></div>
                 
                 
                
           </div>
           <div className="flex  w-1/2   justify-end p-4 border-black border-l-2  ">
                   <div className="flex flex-col  ">
             <div className="flex"><label className="font-bold">shipped  to :</label></div>
                 <div className="flex"><p htmlFor="">INvoice NO :</p></div>
                 <div className="flex"><p htmlFor="">INvoice NO :</p></div>
                 <div className="flex"><p htmlFor="">INvoice NO :</p></div>
                 <div className="flex"><p htmlFor="">INvoice NO :</p></div>
                 <div className="flex"><label htmlFor="" className="font-medium ">GSTIN /UIN :</label><p>D</p></div>
                 </div>
             </div>
         </section>


              <section>
                  <BasicTable/>
              </section>
              
             <section className="flex p-2 mt-2 mb-2 p-2 ">
                 <div className="font-bold mr-2">
                     <p>Bank Details:</p>
                 </div>
                 <div className="text-gray-500">
                     <p>kasdjfdmfjadsfhdjnfjkd</p>
                 </div>


             </section>


              <footer className="flex justify-between p-2  border-t-2   ">

<div className="flex flex-col">
             <div className="flex"><label htmlFor="" className="font-bold">Term & Condition</label></div>
                 <div className="flex  w-1/4"><p className="text-gay-500">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi ratione amet earum numquam fuga, libero voluptates similique, error natus optio sit ut aperiam sed nemo officiis, fugiat ex est? Perspiciatis.</p></div>
                
                
           </div>
           <div className="flex flex-col">
           <div className="flex"><label htmlFor="" className=" font-bold mr-2"> Receiver's Signature :</label><p>283798uifhksdnfjahi</p></div>  
           <div className="flex flex-col">
               <label>mpaneyd</label>
               <label>mpaneyd</label>
               
               </div>   
           </div>

              </footer>










            </div>
           
           
    
        </div>
        </>
    )
}
export default PreviewInvoice
function RightSection({imageURL, productName, productDescription,learnMore }) {
    return ( 
        <div className="container mt-5"  >
            <div className="row"> 
                <div className="col-6 p-5 mt-5">
                      <div className="p-5">
                    <h1 className="fs-3 text-muted">{productName}</h1>
                    <p className="mt-4"> {productDescription}</p>
                  
                        <a href={learnMore} style={ {textDecoration:"none"}}>Kite Connect <i class="fa-solid fa-arrow-right"></i> </a>
                
                 </div>
                    
                </div>
                {/* <div className="col-1"></div> */} 
                 <div className="col-6"> 
                   <img src={imageURL} alt="" />
                 </div>
            </div>
       </div>
     );
}

export default RightSection;
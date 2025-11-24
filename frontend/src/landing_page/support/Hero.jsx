function Hero() {
    return ( 
         <div className="container-fluid" id="supportHero">
        <div className=" p-5 " id="supportWrapper">
            <h4 > Support Portal </h4>
            <a href=""> Track Tickets</a>
        </div>

         <div className="row p-4 m-3">
              <div className="col-6 p-3 " id="supportSection" >
                <h3 className="fs-4 mb-4">Search for an answer or browse help topics to create a ticket</h3>
                <input type="text" placeholder="Eg: how do i activate F&O, why is my oder getting rejected.. " /> <br />
                <div className="mt-3" id="supportLinks">
                    <a href="">Track account opening</a>
                    <a href="">Track segment activation</a>
                    <a href=""> Intraday margins</a>
                    <a href="">Kite user manual</a>
                </div>
              </div>
               <div className="col-6 p-3  " id="supportSection1">
                <h3 className="fs-4">Featured</h3>
                <ol>
                    <li><a href="">Current Takeovers and Delisting - January 2024</a></li>
                    <li><a href="">Latest Intraday leverages - MIS & CO</a></li>
                </ol>
                
               </div>
         </div>

        
       </div>
     );
}

export default Hero;
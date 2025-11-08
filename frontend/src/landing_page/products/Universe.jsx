function Universe() {
    return ( 
         <div className="container mt-5"  >
            <div className="row text-muted text-center p-5"> 
                <h3>The Zerodha Universe</h3>
                <p className="mt-3">Extend your trading and investment experience even further with our partner platforms</p>
                 <div className="col-4 p-3 mt-5"> 
                   <img src="media/images/smallcaseLogo.png"  />
                   {/* <p className="text-small text-muted mt-2">Thematic investing platform</p> */}
                   <div>
                    <p className="text-small text-muted mt-2"  style={{fontSize:"13px" , fontWeight:"400"}}>Thematic investing platform <br /> that helps you invest in diversified <br /> baskets of stocks on ETFs</p> 
                   </div>
                 </div>
                  <div className="col-4 p-3 mt-5"> 
                   <img   style={{width:"40%"}} src="media/images/streakLogo.png"  />
                   <p className="text-small text-muted  mt-2"  style={{fontSize:"13px" , fontWeight:"400"}}>Systematic trading platform <br /> that allows you to create and backtest <br /> strategies without coding.</p>
                 </div>
                  <div  className="col-4 p-3 mt-5"> 
                   <img  style={{width:"50%"}}  src="media/images/sensibullLogo.svg"  />
                   <p className="text-small text-muted mt-4"  style={{fontSize:"13px" , fontWeight:"400"}}>Options trading platform that lets you <br /> create strategies, analyze positions, and examine <br /> data points like open interest, FII/DII, and more.</p>
                 </div>

                  <div className="col-4 p-3 mt-5"> 
                   <img  style={{width:"40%"}}  src="media/images/zerodhaFundhouse.png"  />
                   <p className="text-small text-muted mt-2"  style={{fontSize:"13px" , fontWeight:"400"}}>Our asset management venture <br />that is creating simple and transparent index <br /> funds to help you save for your goals.</p>
                 </div>
                  <div className="col-4 p-3 mt-5"> 
                   <img  style={{width:"45%"}}  src="media/images/goldenpiLogo.png"  />
                   <p className="text-small text-muted mt-2"  style={{fontSize:"13px" , fontWeight:"400"}}>Investment research platform <br /> that offers detailed insights on stocks, <br /> sectors, supply chains, and more.</p>
                 </div>
                  <div className="col-4 p-3 mt-5"> 
                   <img  style={{width:"30%"}}  src="media/images/dittoLogo.png"  />
                   <p className="text-small text-muted mt-2"  style={{fontSize:"13px" , fontWeight:"400"}}>Personalized advice on life <br /> and health insurance. No spam <br /> and no miss-selling.</p>
                 </div>
                   <button
          className="p-2 btn btn-primary fs-5 mb-5 mt-4"
          style={{ width: "20%", margin: "0 auto" }}
        >
          {" "}
         Sign up for free
        </button>
            </div>
           
       </div>
     );
}

export default Universe;
function Hero() {
    return ( 
        <div className="container">
            <div className="row p-5 mt-5 text-center">
            <h2 style={{opacity:"80%"}}>Charges</h2>
            <h3 className=" text-muted mt-3 fs-5" style={{opacity:"60%"}}>List of all charges and taxes</h3>
            </div>
            <div className="row p-5 mt-5 text-center">
                <div className="col-4 p-5">
                    <img src="media/images/pricingEquity.svg" style={{width:"90%"}} alt="" />
                    <h1 className="fs-3" style={{opacity:"85%"}}>Free equity delivery</h1>
                    <p className="text-muted mt-3" >All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>

                <div className="col-4 p-5">
                    <img src="media/images/intradayTrades.svg" alt=""  style={{width:"90%"}}  />
                    <h1 className="fs-3" style={{opacity:"85%"}}>Intraday and F&O trades</h1>
                    <p className="text-muted mt-3">Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>

                 <div className="col-4 p-5">
                    <img src="media/images/pricingEquity.svg" alt=""  style={{width:"90%"}} />
                    <h1 className="fs-3" style={{opacity:"85%"}}>Free direct MF</h1>
                    <p className="text-muted mt-3">All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>

            </div>
        </div>
     );
}

export default Hero;
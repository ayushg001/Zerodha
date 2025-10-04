
function OpenAccount() {
    return ( 
          <div className="container p-5 mb-5">
      <div className="row text-center text-muted">
        <img
          src="media/images/homeHero.png"
          alt="Hero Image"
          className="mb-5"
        />
        <h1 className="mt-5">Open a Zerodha account</h1>
        <p className="fs-5 mt-1">
        Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.
        </p>
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

export default OpenAccount;
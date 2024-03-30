export default function Bottom() {
  return (
    <>
      <div className="">
        <div
          className="background-image"
          style={{
            backgroundImage: `url(public/cooking-pot.webp)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100%",
            height: "70vh",
            alignContent: "center",
          }}
        >
          <div
            style={{
              padding: "0px 20px 20px 20px ",
              fontFamily: "sans",
              backgroundColor: "white",
              width: "38%",
              margin: "auto",
            }}
          >
            <div>
              <img
                src="https://media.blueapron.com/assets/registration/homepage/texture-pattern.webp?height=20&quality=90"
                alt=""
              />
            </div>
            <h1
              style={{
                padding: "10px",
                color: "#00a0df",
                fontSize: "28px",
                fontWeight: "600",
                textAlign: "center",
              }}
            >
              Celebrating 10 years of happy customers
            </h1>
            <p
              style={{
                padding: "10px",
                color: "#002684",
                fontSize: "24px",
                fontWeight: "500",
                textAlign: "center",
              }}
            >
              We love Home Chef It eliminates a ton of food waste while allowing
              us to try new things and have tasty meals. Really great quality
              food, awesome flavors, and things we wouldn't otherwise have any
              idea how to create.
            </p>
            <h2
              style={{
                padding: "10px",
                fontSize: "24px",
                textAlign: "center",
                color: "#002c9b",
              }}
            >
              CHARLIE
            </h2>
          </div>
        </div>
      </div>

      <div
        className="br"
        style={{
          margin: "50px",
        }}
      >
        <div
          className="background-image"
          style={{
            backgroundImage: `url(public/gnocchi.webp)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "95%",
            margin: "auto",
            height: "60vh",
            alignContent: "center",
          }}
        >
          <div
            style={{
              padding: "0px 20px 20px 20px ",
              fontFamily: "sans",
              backgroundColor: "white",
              width: "38%",
              margin: "auto",
              textAlign: "center",
            }}
          >
            <h1
              style={{
                color: "#002c9b",
                fontSize: "32px",
                padding: "10px",
              }}
            >
              Get StarteD Now
            </h1>
            <p
              style={{
                color: "gray",
                fontSize: "28px",
                padding: "10px",
                marginBottom: "10px",
              }}
            >
              for as little as $7.99 per serving
            </p>
            <button
              style={{
                background: "#002684",
                color: "white",
                fontSize: "24px",
                padding: "15px 40px",
                borderRadius: "36px",
              }}
            >
              SEE PLANS
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

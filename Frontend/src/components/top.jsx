export default function Top() {
  return (
    <>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(public/Header.webp)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "70vh",
          alignContent: "center",
        }}
      >
        <h1 className="text-[#002684] text-[32px] font-semibold">
          Easy meal kits. Quality ingredients. Delivered to your door.
        </h1>
        <div className="mt-[20px] mb-[10px]">
          <button
            style={{
              background: "#002684",
              color: "white",
              fontSize: "24px",
              padding: "15px 40px",
              borderRadius: "36px",
            }}
          >
            GET 65% OFF
          </button>
          <p className=" italic">the first five weeks</p>
        </div>
      </div>

      <div style={{ display: "flex", width: "90%", margin: "70px auto" }}>
        <div
          style={{
            // padding: "20px",
            backgroundColor: "#002684",
            width: "40%",
            margin: "auto",
            padding: "54px",
          }}
        >
          <p style={{ margin: "10px 0", color: "#fff", fontSize: "24px" }}>
            <span style={{ color: "#00a0df" }}>New!</span> Prepared & Ready
          </p>
          <p style={{ color: "#fff", fontSize: "22px", marginBottom: "16px" }}>
            Get pre-made meals delivered fresh with top-quality ingredients—now
            starting at just $9.99.
          </p>
          <button
            style={{
              marginTop: "20px",
              backgroundColor: "#fff",
              padding: "10px 20px",
              borderRadius: "20px",
              color: "#002684",
              fontWeight: "600",
            }}
          >
            See Plans
          </button>
        </div>
        <div
          style={{
            backgroundImage: `url(public/marble.webp)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100%",
            height: "54vh",
            alignContent: "center",
          }}
        ></div>
      </div>
    </>
  );
}

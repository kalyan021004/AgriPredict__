export default function Market() {
  async function load() {
    const res = await fetch("http://localhost:6001/api/ml/market-price", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        crop: "Groundnut",
        season: "harvest",
        location: "Nellore"
      })
    });
    alert(JSON.stringify(await res.json(), null, 2));
  }

  return (
    <div className="page">
      <h2>Market Prices</h2>
      <button onClick={load}>Get Prices</button>
    </div>
  );
}

export default function Disease() {
  async function check() {
    const res = await fetch("http://localhost:6001/api/ml/disease-detect", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        crop: "Groundnut",
        symptoms: "yellow leaves",
        humidity: 75
      })
    });
    alert(JSON.stringify(await res.json(), null, 2));
  }

  return (
    <div className="page">
      <h2>Disease Detection</h2>
      <button onClick={check}>Check Disease</button>
    </div>
  );
}

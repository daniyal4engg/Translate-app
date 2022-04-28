async function translateText() {
  try {
    let input = document.getElementById("inputData").value;
    let inLan = document.getElementById("inp").value;
    let outLan = document.getElementById("out").value;

    let res = await fetch(`https://libretranslate.de/translate`, {
      method: "POST",
      body: JSON.stringify({
        q: input,
        source: `${inLan}`,
        target: `${outLan}`,
        format: "text",
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    let data = await res.json();
    console.log(data);

    document.getElementById("outputData").innerText = data.translatedText;
  } catch (err) {
    console.log(err);
  }
}

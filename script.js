async function shortenLink() {
    const longUrl = document.getElementById("longUrl").value;
    const resultBox = document.getElementById("resultBox");
    const shortUrlInput = document.getElementById("shortUrl");

    if (!longUrl) {
        alert("Please enter a URL");
        return;
    }

    try {
        const response = await fetch(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(longUrl)}`);
        const shortUrl = await response.text();

        shortUrlInput.value = shortUrl;
        resultBox.classList.remove("hidden");

    } catch (error) {
        alert("Error shortening link. Try again.");
    }
}

function copyLink() {
    const shortUrlInput = document.getElementById("shortUrl");
    shortUrlInput.select();
    document.execCommand("copy");
    alert("Copied to clipboard!");
}

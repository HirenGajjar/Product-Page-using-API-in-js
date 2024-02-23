window.onload = async function() {
    let loader = document.getElementById('loader');
    try {
        loader.style.display = 'block';
        let res = await fetch("https://jsonplaceholder.typicode.com/photos", {
            method: 'GET'
        });
        let data = await res.json();
        console.log(data);

    } catch {} finally {
        loader.style.display = 'none';
    }
}
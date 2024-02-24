window.onload = async function() {
    let loader = document.getElementById('loader');
    try {
        loader.style.display = 'block';
        let res = await fetch("https://jsonplaceholder.typicode.com/photos?_limit=20", {
            method: 'GET'
        });
        let data = await res.json();
        let container = document.getElementById("container");
        console.log(data);
        for (let i = 0; i < data.length; i++) {
            let item = data[i];
            let card = `
            <div class="card">
            <img class="image" src="${item.thumbnailUrl}" />
            
            
            <h3>${item.title}</h3>
            <a class="card-link" href="${item.url}" download="${item.title}.pdf">Get now</a>
            </div>`;

            container.innerHTML += card;
        }

    } catch {} finally {
        loader.style.display = 'none';
    }
}
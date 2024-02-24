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
            
            <div class="card-info">
            <h3>${item.title}</h3>
            <a class="card-link" target="_blank" href="${item.url}" download="${item.title}.pdf">Get now</a>
            <button class="edit-btn" id="${item.id}">Edit</button>
            <button class="delete-btn" id="${item.id}">Delete</button>
            </div>
            </div>`;

            container.innerHTML += card;
        }
        //PUT
        let editBtn = document.getElementsByClassName("edit-btn");
        for (let j = 0; j < editBtn.length; j++) {
            editBtn[j].onclick = async function() {

                try {
                    let data = JSON.stringify({
                        id: 1,
                        title: 'foo',
                        body: 'bar',
                        userId: 1,
                    });
                    let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${this.id}`, {
                        method: 'PUT',
                        body: data,
                        headers: {
                            'Content-type': 'applicaiton/json; charset=UTF-8'
                        }
                    })
                    let updatedData = response.json();
                    console.log(updatedData);
                } catch (err) {
                    console.log(err);
                }
            }

        }
        //Delete

        let deleteBtn = document.getElementsByClassName('delete-btn');
        for (let k = 0; k < deleteBtn.length; k++) {
            deleteBtn[k].onclick = async function() {
                try {
                    let data = JSON.stringify({
                        id: 1,
                        title: 'foo',
                        body: 'bar',
                        userId: 1,
                    });
                    let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${this.id}`, {
                        method: 'DELETE',
                        body: data,
                        headers: {
                            'Content-type': 'applicaiton/json; charset=UTF-8'
                        }
                    })
                    let updatedData = response.json();

                } catch (err) {
                    console.log(err);
                }
            }
        }
    } catch (err) { console.log(err); } finally {
        loader.style.display = 'none';
    }
    let form = document.getElementById('form');
    form.addEventListener('submit', async(e) => {


        e.preventDefault();

        try {
            let data = JSON.stringify({
                title: `${form[0].value}`,
                body: `${form[1].value}`,
                userId: `${form[2].value}`
            });

            console.log(data);

            let response = await fetch("https://jsonplaceholder.typicode.com/posts", {
                method: 'POST',
                body: data,
                headers: {
                    'Content-type': 'applicaiton/json; charset=UTF-8'
                }
            })
            let responseData = await response.json();
            console.log(responseData);
        } catch (err) { console.log(err); } finally {

        }

    })
}
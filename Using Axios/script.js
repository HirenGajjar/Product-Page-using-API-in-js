window.onload = async() => {
    let product = document.getElementById('products');
    product.innerHTML = '<i class="ri-loader-4-line mt-[100px] text-center text-3xl animate-spin"></i>';

    try {

        let response = await axios.get('https://fakestoreapi.com/products');
        product.innerHTML = '';
        let recievedData = response.data;
        console.log(recievedData);
        for (const i of recievedData) {
            let div = `<div class="w-full h-full bg-white rounded-lg overflow-hidden animate__animated animate__zoomIn ">
            
            <img src="${i.image}" class="w-full h-64 object-cover">
            <div class="p-4">
            <h1 class="text-lg font-bold">
                    ${i.title.slice(0,10)}
            </h1>
            <p class="text-gray-500">${i.description.slice(0,50)}...</p>
            <div class="text-2xl font-bold">
            &#x20b9;  ${i.price}
            <del>${Math.floor(i.price )*2}</del>
            </div>
            <div >
            <button class="bg-yellow-500 font-semibold rounded-lg text-white py-2 px-4">Buy now
            </button>
            <button class="bg-red-500 font-semibold rounded-lg text-white py-2 px-4">Add to cart
            </button>
            </div>
            </div>
            
            </div>`;
            product.innerHTML += div;

        }

    } catch (err) { console.log(err); } finally {}



}
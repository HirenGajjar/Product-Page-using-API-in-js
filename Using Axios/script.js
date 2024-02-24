window.onload = async() => {


    let response = await axios.get('https://fakestoreapi.com/products')
    console.log(response);
}
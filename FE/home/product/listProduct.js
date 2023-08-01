function ListProduct() {
    console.log("da o day");
    const token = localStorage.getItem('token')

    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    axios.get('http://localhost:3000/products').then((res)=>{
        let data = res.data
        let str =''
        data.map(item => {
            str += `<div class="col-sm-6 col-md-6 col-lg-4 col-xl-4">
            <div class="products-single fix">
                <div class="box-img-hover">
                    <div class="type-lb">
                    
                    </div>
                    <img src="${item.image}" class="img-fluid" alt="Image">
                    <div class="mask-icon">
                        <button onclick="showFormEdit(${item.id})" class="edit">Edit</button>
                        <button onclick="deleteProduct(${item.id})" class="delete">Delete</button>
                    </div>
                    
                </div>
                <div class="why-text">
                    <h4>${item.name}</h4>
                    <h5>$${item.price}</h5>
                </div>
            </div>
        </div>`
        })
        document.getElementById('listProduct').innerHTML = str
    })
}

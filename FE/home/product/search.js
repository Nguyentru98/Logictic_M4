
function search(name) {
    axios.get('http://localhost:3000/products?name='+ name).then((res)=>{
        let data = res.data
        console.log(data)
        let str =''
        data.map(item => {
            str += `<div class="col-sm-6 col-md-6 col-lg-4 col-xl-4">
            <div class="products-single fix">
                <div class="box-img-hover">
                    <div class="type-lb">
                    
                    </div>
                    <img src="${item.image}" class="img-fluid" alt="Image">
                    <div class="mask-icon">
                    <button onclick="showFormEdit(${item.id})">Edit</button>
                    <button onclick="deleteProduct(${item.id})">Delete</button>
                        <ul>
                            <li"><a href="" data-toggle="tooltip" data-placement="right" title="View"><i></i></a></li>
                            <li><a href="#" data-toggle="tooltip" data-placement="right" title="Compare"><i class="fas fa-sync-alt"></i></a></li>
                            <li><a href="#" data-toggle="tooltip" data-placement="right" title="Add to Wishlist"><i class="far fa-heart"></i></a></li>
                        </ul>
                        <a class="cart" href="#">Add to Cart</a>
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
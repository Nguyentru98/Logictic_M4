function showFormAdd() {
    let str = `
    <div class="col-sm-6 col-lg-6 mb-5">
                    <div class="checkout-address">
                        <div class="title-left">
                            <h3>ADD PRODUCT</h3>
                        </div>
                        <form class="needs-validation" novalidate>
                            <div class="row">
                            </div>
                            
                            <div class="mb-3">
                                <label for="email">name product</label>
                                <input type="text" class="form-control" id="name" placeholder="">
                                <!-- <div class="invalid-feedback"> Please enter a valid email address for shipping updates. </div> -->
                            </div>
                            <div class="mb-3">
                                <label for="address">price</label>
                                <input type="text" class="form-control" id="price" placeholder="" required>
                                <!-- <div class="invalid-feedback"> Please enter your shipping address. </div> -->
                            </div>
                            <div class="mb-3">
                                <label for="address2">quantity</label>
                                <input type="text" class="form-control" id="quantity" placeholder=""> </div>
                            <div class="mb-3">
                                <label for="address2">image</label>
                                <input type="text" class="form-control" id="image" placeholder=""> </div>
    
                            <div class="row">
                                <div class="col-md-3 mb-3">
                                    <button class="btn " onclick="save()">Save</button>
                                    
                                </div>
                                
                                <div class="col-md-6 mb-3">
                                    
                                </div>
                            </div>
                            <hr class="mb-1"> </form>
                    </div>` ;
    document.getElementById('listProduct').innerHTML = str
    
}

function save() {
    let data = {
        name : document.getElementById('name').value,
        price : document.getElementById('price').value,
        quantity : document.getElementById('quantity').value,
        image : document.getElementById('image').value,
    }
    console.log(data)
    axios.post('http://localhost:3000/products/add', data).then(res=>{
        ListProduct()
    })
}    

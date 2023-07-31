function deleteProduct(id) {
    axios.delete('http://localhost:3000/products/delete'+'/'+id).then((res)=>{
        ListProduct()
        })
    
}


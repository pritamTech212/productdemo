import axios from "axios";

const PRODUCT_API_BASE_URL="http://localhost:8080/api/v1/"
class ProductService{
   
    saveProduct(product){
        console.log("Adding");
        console.log(product);
        return axios.post(PRODUCT_API_BASE_URL+"saveProduct",product);
    }
    getProductById(productId){
        return axios.get(PRODUCT_API_BASE_URL+productId);
    }

    getProduct(){
        return axios.get(PRODUCT_API_BASE_URL+"products");
    }

    deleteProduct(productId){
        console.log("delplease");
        return axios.delete(PRODUCT_API_BASE_URL+"deleteProduct/"+productId);
    }

    updateProduct(product,productId){
        console.log("Updating the product");
        return axios.put(PRODUCT_API_BASE_URL +"updateProduct/"+ productId, product);
    }
    

}
export default new ProductService();
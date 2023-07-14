import React, { useState } from "react";
import CustomButton from '../components/Buttons';
import InputBox from '../components/InputBox';
import SearchBarAdmin from '../components/SearchBarAdmin'
import './ProductOptions.css';
import plusIcon from '../img/Buttons/plus-icon.svg';
import okayMark from '../img/Buttons/okayMark.png'
import excludeMark from '../img/Buttons/excludeMark.png'
import { toast } from "react-toastify";

const ProductOptions = () => {

    const [nameAdd, setNameAdd] = useState('')
    const [slugAdd, setSlugAdd] = useState('')
    const [priceAdd, setPriceAdd] = useState('')
    const [descAdd, setDescAdd] = useState('')
    const [qntAdd, setQntAdd] = useState('')
    const [imgPathAdd, setImgPathAdd] = useState('')
    const [imgAdd, setImgAdd] = useState('')

   
    function ImgSelectAdd(e) {
        
        const img = e.target.files[0]
        if(img === undefined)
            return 
        
        setImgAdd(img)
        setImgPathAdd(img.name)

    }
    function addProduct(){
        
        const url = "http://localhost:3001/products"
        const urlImg = "http://localhost:3001/products/img"
        let data = {
            "name" : nameAdd,
            "slug" : slugAdd,
            "description": descAdd,
            "price" : priceAdd,
            "quantity" : qntAdd,
            "imgPath" : imgPathAdd
        }

        const formData = new FormData();
        formData.append('img', imgAdd)
        fetch(urlImg, {
            method: "POST",
            body: formData
        })

        fetch(url, {
            method: "POST",
            headers: {
                'Content-Type' : "application/json"
            },
            body: JSON.stringify(data)
        })
    }

    const [nameUpdate, setNameUpdate] = useState('')
    const [slugUpdate, setSlugUpdate] = useState('')
    const [priceUpdate, setPriceUpdate] = useState('')
    const [descUpdate, setDescUpdate] = useState('')
    const [qntUpdate, setQntUpdate] = useState('')
    const [imgPathUpdate, setImgPathUpdate] = useState('')
    const [imgUpdate, setImgUpdate] = useState('')
    const [result, setResult] = useState(null)

     function ImgSelectUpdate(e) {
        const img = e.target.files[0]
        if(img === undefined)
            return

        setImgUpdate(img)
        setImgPathUpdate(img.name)
    }

    function modifyProduct(){
        if(result === null){
            toast.error('Please use the search bar! :(', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            return
        }

        const url = "http://localhost:3001/products/" + result.slug
        const urlImg = "http://localhost:3001/products/img"
        let data = {
            "name" : (nameUpdate === '' ? result.name : nameUpdate),
            "slug" : (slugUpdate === '' ? result.slug : slugUpdate),
            "description": (descUpdate === '' ? result.description : descUpdate),
            "price" : (priceUpdate === '' ? result.price : priceUpdate),
            "quantity" : (qntUpdate === '' ? result.quantity : qntUpdate),
            "imgPath" : (imgPathUpdate === '' ? result.imgPath : imgPathUpdate) 
        }

        const formData = new FormData();
        formData.append('img', imgUpdate)
        fetch(urlImg, {
            method: "POST",
            body: formData
        })

        fetch(url, {
            method: "PUT",
            headers: {
                'Content-Type' : "application/json"
            },
            body: JSON.stringify(data)
        })
    }

    function deleteProduct() {
        if(result === null){
            toast.error('Please use the search bar! :(', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            return
        }
        
        let url = "http://localhost:3001/products/" + result.slug

        fetch(url, {
            method: "DELETE"
        })
        setResult(null)

    }


    return (
        <div className="outer-wrapper">
            <div className="options-wrapper">
                <div className="product-wrapper">
                    <div className="label-wrapper"> 
                        <label className="text"> Add Product </label>
                    </div>
                    <div className="gap-2">
                        <div className="inputbox-wrapper">
                            <input type="file" accept="image/png, image/gif, image/jpeg, image/jpg" onChange={ImgSelectAdd}/>
                        </div>
                        <div className="inputbox-wrapper">
                            <InputBox inputType="text" placeholder="Name" setData={setNameAdd}/>
                        </div>
                        <div className="inputbox-wrapper">
                            <InputBox inputType="text" placeholder="Slug" setData={setSlugAdd}/>
                        </div>
                        <div className="inputbox-wrapper">
                            <InputBox inputType="text" placeholder="Description" setData={setDescAdd}/>
                        </div>

                        <div className="inputbox-wrapper">
                            <InputBox inputType="text" placeholder="Price"  setData={setPriceAdd}/>
                        </div>

                        <div className="inputbox-wrapper">
                            <InputBox inputType="text" placeholder="Quantity"  setData={setQntAdd}/>
                        </div>
                    </div>
                    <div className="button-product">
                        <CustomButton image={plusIcon} text="Add" onClick={addProduct}/>
                    </div>
                </div>
            </div>
            <div className="options-wrapper">
                <div className="product-wrapper">
                    <div className="label-wrapper"> 
                        <label className="text"> Edit Product </label>
                    </div>
                    <div className="searchbar-product">
                        <SearchBarAdmin placeholder="Search Products" endpoint="products/" setData={setResult} searchType={1}/>
                    </div>
                    <div className="gap-2">

                        <div className="inputbox-wrapper">
                            <input type="file" accept="image/png, image/gif, image/jpeg, image/jpg" onChange={ImgSelectUpdate}/>
                        </div>

                        <div className="inputbox-wrapper">
                            <InputBox inputType="text" placeholder={result === null ? "Name" : result.name} setData={setNameUpdate}/>
                        </div>
                        <div className="inputbox-wrapper">
                            <InputBox inputType="text" placeholder={result === null ? "Slug" : result.slug} setData={setSlugUpdate}/>
                        </div>

                        <div className="inputbox-wrapper">
                            <InputBox inputType="text" placeholder={result === null ? "Description" : result.description} setData={setDescUpdate}/>
                        </div>

                        <div className="inputbox-wrapper">
                            <InputBox inputType="text" placeholder={result === null ? "Price" : result.price} setData={setPriceUpdate}/>
                        </div>

                        <div className="inputbox-wrapper">
                            <InputBox inputType="text" placeholder={result === null ? "Quantity" : result.quantity} setData={setQntUpdate}/>
                        </div>
                    </div>
                    <div className="button-product">
                        <CustomButton image={okayMark} text="Update" onClick={modifyProduct}/>
                        <CustomButton image={excludeMark} text="Delete" onClick={deleteProduct}/>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default ProductOptions;

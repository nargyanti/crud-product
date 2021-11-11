import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

const AddProduct = () => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const navigate = useNavigate();
    
    const saveProduct = async (e) => {
        e.preventDefault();
        await axios.post('http://168.138.101.82/api/products', {
            title: title,
            price: price,
        });
        navigate("/");
    }
    return (
        <div>
            <form onSubmit={saveProduct}> 
                <div>
                    <label className="label">Title</label>
                    <input class="input" type="text" value= {title} onChange={(e) => setTitle(e.target.value) }/>
                </div>
                
                <div>
                    <label className="label">Price</label>
                    <input class="input" type="text" value={ price } onChange={(e) => setPrice(e.target.value) }/>
                </div>
                
                <div>
                    <button className="button is-primary">Save</button>
                </div>
            </form>
        </div>
    )
}

export default AddProduct

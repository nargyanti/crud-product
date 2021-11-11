import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom'

const EditProduct = () => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();
    
    const updateProduct = async (e) => {
        e.preventDefault();
        await axios.patch(`http://168.138.101.82/api/products/${id}`, {
            title: title,
            price: price,
        });
        navigate("/");
    }

    const getProductById = async () => {
        const response = await axios.get(`http://168.138.101.82/api/products/${id}`);
        setTitle(response.data.title);
        setPrice(response.data.price);
    }

    useEffect(() => {
        getProductById();
    }, []);
    return (
        <div>
            <form onSubmit={updateProduct}> 
                <div>
                    <label className="label">Title</label>
                    <input class="input" type="text" value= {title} onChange={(e) => setTitle(e.target.value) }/>
                </div>
                
                <div>
                    <label className="label">Price</label>
                    <input class="input" type="text" value={ price } onChange={(e) => setPrice(e.target.value) }/>
                </div>
                
                <div>
                    <button className="button is-primary">Update</button>
                </div>
            </form>
        </div>
    )
}

export default EditProduct

import React, { useState } from 'react';

 

const AddProduct = () => {

    const [formData, setFormData] = useState({

        Name: '',
        Description: '',
        Category: '',
        Quantity: '',
        Price: '',
    });

 

    const handleInputChange = (event) => {

        const { name, value } = event.target;

        setFormData({ ...formData, [name]: value });

    };

 

    const handleSubmit = (event) => {

        event.preventDefault();
        //console.log(formData);
        alert(JSON.stringify(formData));

    };

 

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <br></br><br></br>
            <hr></hr>
             <h1>Q1 Add Product form</h1>
                <input
                    type="text"
                    name="Name"
                    placeholder="Name"
                    value={formData.Name}
                    onChange={handleInputChange}
                />

                <br />

                <input

                    type="text"

                    name="Description"

                    placeholder="Description"

                    value={formData.Description}

                    onChange={handleInputChange}

                />

                <br />

                <input

                    type="text"

                    name="Category"

                    placeholder="Category"

                    value={formData.Category}

                    onChange={handleInputChange}

                />

                <br />

                <input

                    type="text"

                    name="Quantity"

                    placeholder="Quantity"

                    value={formData.Quantity}

                    onChange={handleInputChange}

                />

                <br />

                <input

                    type="text"

                    name="Price"

                    placeholder="Price"

                    value={formData.Price}

                    onChange={handleInputChange}

                />

                <br />

                <button type="submit" class="success">Submit</button>

                <button type="submit" class="cancel">Cancel</button>

            </form>

        </div>

    );

};

 

export default AddProduct;

 
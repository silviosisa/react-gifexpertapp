import React, {Fragment, useState} from 'react';
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";
const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    // const handleAdd = () => {
    //     setCategories([...categories, 'categoria nueva']);
    // }

    return (
        <Fragment>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories }></AddCategory>
            <hr/>
            <ol>
                {
                    categories.map((category) => (
                        <GifGrid
                            key={category}
                            category={category}/>
                        ))
                }
            </ol>
        </Fragment>
    );
};

export default GifExpertApp;

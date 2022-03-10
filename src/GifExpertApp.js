import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
//rafc (tap)

const GiftExpertApp = () => {

    const [categories, setCategories] = useState(["naruto"])

    
    return ( 
        <>
            <h2>GiftExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr />
            
            <ol>
                {
                    categories.map( category =>
                        //<li key={category}>{category}</li>
                        <GifGrid
                            key={category}
                            category={category}
                        />    
                    )
                }
            </ol>
        </>
    )
}

export default GiftExpertApp;
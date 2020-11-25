import React, {Fragment} from 'react';
import {useFetchGifs} from "../hooks/useFetchGifs";
import GrifGridItem from "./GifGridItem";
// import {getGift} from "../helpers/getGifs";

const GifGrid = ({category}) => {

    const {data:images, loading} = useFetchGifs( category );

    return (
        <Fragment>
            <h3>{category}</h3>

            { loading && <p className="animate__animated animate__flash">Loading</p> }

            <div className="card-grid">
                {
                    images.map(image => (
                        <GrifGridItem
                            key={image.id}
                            {...image}
                        />
                    ))
                }
            </div>
        </Fragment>

    );
};

export default GifGrid;

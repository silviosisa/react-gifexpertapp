import { useState, useEffect } from 'react';
import {getGift} from "../helpers/getGifs";

export const useFetchGifs = ( category ) =>{

   const [state, setState] = useState({
       data: [],
       loading: true
   });

    useEffect( () => {
        getGift(category).then(imgs => {

                setState({
                    data: imgs,
                    loading: false
                });

            // setTimeout(() => {
            //     setState({
            //         data: imgs,
            //         loading: false
            //     });
            // },3000);


        })
    }, [category])



    return state; // {data: [], loading: true}
}

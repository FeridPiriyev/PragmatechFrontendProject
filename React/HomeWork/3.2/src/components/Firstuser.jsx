import React,{useEffect} from 'react';
import { useLocation, useParams } from 'react-router-dom';

const Firstuser = ({route}) => {

    const params = useParams();

    useEffect(()=>{
        console.log(params)
    },[params])

   
    return (
        <div>
            <h1>id:{params.id}</h1>
            <h1>email:{params.id}</h1>
        </div>
    );
}






export default Firstuser;
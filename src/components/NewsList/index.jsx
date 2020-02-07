import React from 'react'
import useAxios from 'axios-hooks'
import { Button, Card, Elevation  } from "@blueprintjs/core";

import './index.css'

const NewsList = () => {

    const config = {
        baseURL: 'https://www.breakingbadapi.com/api/characters',
    };

    const [{ data, loading, error, response }, execute] = useAxios(
        config, {manual:true}
      )

      console.log(data);
     
      return (
        <div>
          <button onClick={()=>execute()}>Data load</button>
          {loading&&'Loading...'}
          {error&&'Error!'}
          {
            data&& data.map((el)=>{
                return (
                    <Card interactive={true} elevation={Elevation.TWO}>
                        <h5>{el.name}</h5>
                       <img src={el.img} alt="" />
                    </Card>
                );
            })
          }
        </div>
      )
}
export default NewsList;
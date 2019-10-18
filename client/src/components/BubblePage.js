import React, { useState, useEffect } from "react";
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import { axiosWithAuth } from './../axios/axiosAuth';

const colorsApi = ('http://localhost:5000/api/colors');

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property
  useEffect(() => {
    axiosWithAuth().get(colorsApi)
    .then(res => {
      console.log(res);
      setColorList(res.data);
    })
    .catch(err => {
      console.log(err.message);
    })

  }, [])

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;

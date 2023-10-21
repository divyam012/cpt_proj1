import {React, useState, useEffect} from 'react';
import styled from 'styled-components';
import {motion} from "framer-motion";
import { Link, useParams } from 'react-router-dom';

function Cuisine() {

  const [cuisine, setCuisine] = useState([]);
  let params =  useParams();

    const getCuisine = async (name) => {
      const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?cuisine=${name}&apiKey=8e70d89e6af94a1d8c18e96c1cf1a2fb`);
      const recipes = await data.json();
      setCuisine(recipes.results);
    };
    useEffect(()  => {
    getCuisine(params.type)
    },[params.type]);

  return (
    <Grid>
      {cuisine.map((item) => {
                    return(
                        <Card key={item.id}>
                          <Link to={"/recipe/" + item.id}>
                            <img src={item.image} alt={item.title}/>
                            <h4>{item.title}</h4>
                            </Link>
                        </Card>
                        );
                    })};
    </Grid>
  );
};
const Grid = styled.div`
display : grid; 
grid-template-columns: repeat(4, 1fr); 
grid-gap : 20px;`;

const Card = styled.div`
border: 1px solid #ccc;
border-radius: 8px;
padding: 10px;
background-color: #fff;
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
img {
  width: 100%;
  border-radius: 4px;
  }
  h4{
    text-align: center;
    padding: 1rem;
}
  `;

export default Cuisine
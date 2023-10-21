import {React, useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

function Recipe() {
    let params = useParams();
    const [details, setDetails] = useState({});
    const [activeTab, setActiveTab] = useState('instructions');

    const fetchDetails = async () => {

        const data = await fetch(
            `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=8e70d89e6af94a1d8c18e96c1cf1a2fb`
          );
        const detailData = await data.json();
        setDetails(detailData);   
        console.log(detailData);     
        } ;


        useEffect(()  => {
            fetchDetails();
            },[params.name]);

  return (
    <DetailWrapper>
    <div>
        <h2>{details.title}</h2>
    <img src={details.image} alt=""/>
    </div>
    <Info>
        <Button className={activeTab ==='instructions' ? 'active' : ''} onClick={() => setActiveTab('instructions')}>Instructions</Button>
        <Button className={activeTab ==='ingredients' ? 'active' : ''} onClick={() => setActiveTab('ingredients')}>Ingredients</Button>
        {activeTab ==="instructions" && (
        <div>
            <h4 dangerouslySetInnerHTML={{ __html: details.summary}}></h4><br/>
            <h4 dangerouslySetInnerHTML={{ __html: details.instructions}}></h4>   
        </div>
         )};
             {activeTab ==="ingredients" && (
        <ul>
            {details.extendedIngredients.map((ingredient)  => (
                <li key={ingredient.id}>{ingredient.original}</li>
            ))}
        </ul>
             )}
    </Info>
</DetailWrapper>
 )
};

const DetailWrapper = styled.div`
    margin-top: 5rem;
    margin-bottom: 10rem;
    display: flex;
    .active{
        background: linear-gradient(35deg, #494949 , #313131);
        color: white;
    }
    h4{
        margin-top:0.6rem;
    }
    li{
        font-size: 1rem;
        line-height: 2rem;
    }
    ul{
        margin-top: 1rem;
    }`;

const Button = styled.button`
    padding: 1rem 2rem;
    color: #313131;
    background: white;
    border: 2px solid black;
    margin-right: 1rem;
    font-weight: 600;
    `;

const Info = styled.div`
    margin-left:2rem;
`;


export default Recipe
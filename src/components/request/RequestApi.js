import { useState, useEffect } from 'react';
import CardProject from '../layout/card/CardProject';

function RequesteApi( { onRequestComplete }) {

  const [data, setData] = useState([]);
  const [FilterData, setFilterData] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      if (onRequestComplete) {
        onRequestComplete();
      }
      fetch('http://localhost:5000/projects')
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok')
          }
          return response.json();
        })
        .then(data => {
          setData(data);
        })
        .catch(error => {
          console.error('Erro ao buscar dados da API:', error);
        });
    }, 3000)
  }, [onRequestComplete]);

  useEffect(() => {
    const results = data;
    setFilterData(results);
  },)

  return (
    <div>
      <div className="card_container">
        {FilterData.map(item => (
          <CardProject name={item.name} price={item.price} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default RequesteApi;
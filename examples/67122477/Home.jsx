import services from './services/patientServices';
import React, { useState, useEffect } from 'react';

export const Home = () => {
  const [patientSets, setPatientSets] = useState([]);

  const fetchPatientSets = async () => {
    try {
      const result = await services.patientSets();
      console.log('Data => ', result);
      setPatientSets(result.data);
    } catch (err) {}
  };

  useEffect(() => {
    fetchPatientSets();
  }, []);

  return (
    <div>
      <ul>
        {patientSets.map((p) => {
          return <li key={p.id}>{p.name}</li>;
        })}
      </ul>
    </div>
  );
};

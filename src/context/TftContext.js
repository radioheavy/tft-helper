import React, { createContext, useContext, useState, useEffect } from 'react';
import tftData from '../data/tftData';

const TftContext = createContext();

export const TftProvider = ({ children }) => {
  const [champions, setChampions] = useState([]);
  const [traits, setTraits] = useState({});
  const [classes, setClasses] = useState({});

  useEffect(() => {
    setChampions(tftData.champions);
    setTraits(tftData.traits);
    setClasses(tftData.classes);
  }, []);

  const value = {
    champions,
    traits,
    classes,
    // Buraya daha fazla state ve fonksiyon eklenebilir
  };

  return <TftContext.Provider value={value}>{children}</TftContext.Provider>;
};

export const useTftContext = () => useContext(TftContext);

import { useContext } from 'react';
import { LevelContext } from '../context/LevelContext';

export const Section = ({ children }) => {
  const level = useContext(LevelContext);

  return (
    <section className="section">
      <LevelContext.Provider value={level + 1}>
        {children}
      </LevelContext.Provider>
    </section>
  );
};

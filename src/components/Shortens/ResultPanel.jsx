import { useContext } from 'react';
import LinkContext from '../../context/LinkContext';

const ResultPanel = () => {
  const { link } = useContext(LinkContext);
  const kurwa = chooseRandomKurwa();
  const result = link ? `Ваша ссылка: https://kurwa_${kurwa}.${link}` : '';
  return <h2>{result}</h2>;
};

const chooseRandomKurwa = () => {
  const kurwas = ['panda', 'bober', 'ratatui', 'elen'];
  const randomIndex = Math.floor(Math.random() * kurwas.length);
  return kurwas[randomIndex];
};

export default ResultPanel;

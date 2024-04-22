import { createContext } from 'react';

const LinkContext = createContext({
  link: '',
  changeLink: () => {},
});

export default LinkContext;

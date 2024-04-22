import { useState } from 'react';
import Button from '../UI/Button';
import styles from './MainForm.module.css';
import { useContext } from 'react';
import LinkContext from '../../context/LinkContext';

const MainForm = () => {
  const [linkInput, setLinkInput] = useState('');
  const { link, changeLink } = useContext(LinkContext);

  function handleOnSubmit(event) {
    event.preventDefault();
    console.log(event.target.link.value);
    changeLink(event.target.link.value);
  }

  function handleInputChange(value) {
    setLinkInput(value);
  }
  return (
    <div className={styles.mainFormContainer}>
      <form onSubmit={handleOnSubmit}>
        <input
          type="text"
          name="link"
          value={linkInput}
          onChange={(e) => handleInputChange(e.target.value)}
        />
        <Button type="submit" title="Submit">
          Make short
        </Button>
      </form>
    </div>
  );
};

export default MainForm;

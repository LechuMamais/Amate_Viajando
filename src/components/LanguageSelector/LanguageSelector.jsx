import { Menu, MenuButton, MenuList, MenuItem, Button, Icon } from '@chakra-ui/react';
import { FaGlobe } from 'react-icons/fa';
import { languagesAvailable } from '../../utils/languagesAvailable';
import { useContext } from 'react';
import { LanguageContext } from '../../providers/LanguageProvider';

const LanguageSelector = () => {
  const { language, changeLanguage } = useContext(LanguageContext);
  return (
    <Menu>
      <MenuButton as={Button} leftIcon={<Icon as={FaGlobe} />} variant='subtle'>
        {language.name}
      </MenuButton>
      <MenuList className='lang-selector-menu-list' bgColor='var(--chakra-colors-gray-50)' w='100px !important'>
        {languagesAvailable.map((lang) => (
          <MenuItem key={lang.iso3code} onClick={() => changeLanguage(lang.iso3code)} bgColor='transparent'>
            {lang.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default LanguageSelector;

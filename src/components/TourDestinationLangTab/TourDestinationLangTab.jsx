import { Tab, TabIndicator, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import TourDestinationForm from '../TourDestinationForm/TourDestinationForm';
import { languagesAvailable } from '../../utils/languagesAvailable';
import ArticlesTextForm from '../ArticlesTextForm/ArticlesTextForm';

const TourDestinationLangTab = ({ register, errors, control, setValue = '', defaultValues = {}, article = false }) => {
  return (
    <Tabs variant='enclosed' colorScheme='green'>
      <TabList>
        {languagesAvailable.map((lang) => (
          <Tab key={lang.iso3code}>{lang.name}</Tab>
        ))}
      </TabList>
      <TabIndicator mt='-1.5px' height='2px' bg='green' borderRadius='1px' />
      <TabPanels>
        {languagesAvailable.map((lang) => (
          <TabPanel key={lang.iso2code} p='0px'>
            {!article ? (
              <TourDestinationForm
                register={register}
                errors={errors}
                lang={lang}
                setValue={setValue}
                defaultValues={defaultValues?.[lang.iso3code]}
              />
            ) : (
              <ArticlesTextForm register={register} errors={errors} lang={lang} control={control} />
            )}
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
};

export default TourDestinationLangTab;

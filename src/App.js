/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { TftProvider } from './context/TftContext';
import ChampionList from './components/ChampionList';
import ItemList from './components/ItemList';
import MetaComps from './components/MetaComps';
import PoolSimulator from './components/PoolSimulator';
import TeamBuilder from './components/TeamBuilder';

// Tema özelleştirme
const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: '#f7fafc',
        color: '#2d3748',
      },
    },
  },
  colors: {
    primary: '#2b6cb0',
    secondary: '#68d391',
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <TftProvider>
        <Container maxW="container.xl" centerContent>
          <Box w="100%" mt={5}>
            <Tabs variant="soft-rounded" colorScheme="primary" index={value} onChange={handleChange} isFitted>
              <TabList mb="1em">
                <Tab>Şampiyonlar</Tab>
                <Tab>Eşyalar</Tab>
                <Tab>Meta Kompozisyonlar</Tab>
                <Tab>Havuz Simülatörü</Tab>
                <Tab>Takım Oluşturucu</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <ChampionList />
                </TabPanel>
                <TabPanel>
                  <ItemList />
                </TabPanel>
                <TabPanel>
                  <MetaComps />
                </TabPanel>
                <TabPanel>
                  <PoolSimulator />
                </TabPanel>
                <TabPanel>
                  <TeamBuilder />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
        </Container>
      </TftProvider>
    </ChakraProvider>
  );
}

export default App;

import React, { useState } from 'react';
import {
  Box,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Tag,
  VStack,
} from '@chakra-ui/react';
import tftData from '../data/tftData';

function MetaComps() {
  const [value, setValue] = useState(0);

  const handleChange = (index) => {
    setValue(index);
  };

  const renderSynergies = (synergies) => (
    Object.entries(synergies).map(([key, synergy]) => (
      <AccordionItem key={key}>
        <AccordionButton>
          <Box flex="1" textAlign="left">
            <Text fontSize="lg" fontWeight="bold">{synergy.name}</Text>
          </Box>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel pb={4}>
          <Text mb={2}>{synergy.description}</Text>
          {synergy.levels && synergy.levels.map((level, levelIndex) => (
            <Text key={levelIndex}>
              <strong>{level.units} birim:</strong> {level.bonus}
            </Text>
          ))}
          <Text mt={4} fontWeight="bold">Şampiyonlar:</Text>
          <Box mt={2}>
            {tftData.champions.filter(champ =>
              champ.traits.includes(synergy.name) || champ.classes.includes(synergy.name)
            ).map(champ => (
              <Tag key={champ.name} m={1}>
                {champ.name}
              </Tag>
            ))}
          </Box>
        </AccordionPanel>
      </AccordionItem>
    ))
  );

  return (
    <Box>
      <Text fontSize="2xl" mb={4}>Sinerjiler</Text>
      <Tabs index={value} onChange={handleChange}>
        <TabList>
          <Tab>Özellikler</Tab>
          <Tab>Sınıflar</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Accordion allowMultiple>
              {renderSynergies(tftData.traits)}
            </Accordion>
          </TabPanel>
          <TabPanel>
            <Accordion allowMultiple>
              {renderSynergies(tftData.classes)}
            </Accordion>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}

export default MetaComps;

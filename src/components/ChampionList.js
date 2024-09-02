import React, { useState } from 'react';
import { 
  Box, Text, Grid, Input, Select, Accordion, AccordionItem, AccordionButton, 
  AccordionPanel, AccordionIcon, Card, CardBody, Heading, Stack, StackDivider 
} from '@chakra-ui/react';
import tftData from '../data/tftData';

const initialPoolSizes = {
  1: 29,
  2: 22,
  3: 18,
  4: 12,
  5: 10
};

function ChampionList() {
  const [filter, setFilter] = useState('');
  const [traitFilter, setTraitFilter] = useState('');
  const [classFilter, setClassFilter] = useState('');

  const filteredChampions = tftData.champions.filter(champion => 
    champion.name.toLowerCase().includes(filter.toLowerCase()) &&
    (traitFilter === '' || champion.traits.includes(traitFilter)) &&
    (classFilter === '' || champion.classes.includes(classFilter))
  );

  const groupedChampions = filteredChampions.reduce((acc, champion) => {
    if (!acc[champion.cost]) acc[champion.cost] = [];
    acc[champion.cost].push(champion);
    return acc;
  }, {});

  const allTraits = [...new Set(tftData.champions.flatMap(c => c.traits))];
  const allClasses = [...new Set(tftData.champions.flatMap(c => c.classes))];

  return (
    <Box>
      <Text fontSize="2xl" mb={4}>Şampiyon Listesi</Text>
      <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={6}>
        <Input 
          placeholder="Şampiyon Ara" 
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
        <Select placeholder="Özellik Filtrele" value={traitFilter} onChange={(e) => setTraitFilter(e.target.value)}>
          <option value="">Tümü</option>
          {allTraits.map(trait => (
            <option key={trait} value={trait}>{trait}</option>
          ))}
        </Select>
        <Select placeholder="Sınıf Filtrele" value={classFilter} onChange={(e) => setClassFilter(e.target.value)}>
          <option value="">Tümü</option>
          {allClasses.map(cls => (
            <option key={cls} value={cls}>{cls}</option>
          ))}
        </Select>
      </Grid>
      <Stack divider={<StackDivider />} spacing={4} mt={4}>
        {[1, 2, 3, 4, 5].map(cost => (
          <Accordion allowToggle key={cost}>
            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  {cost} Maliyetli Şampiyonlar
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel>
                <Grid templateColumns={{ base: "1fr", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }} gap={6}>
                  {groupedChampions[cost]?.map((champion) => (
                    <Card key={champion.name}>
                      <CardBody>
                        <Heading size="md">{champion.name}</Heading>
                        <Text fontSize="sm">Özellikler: {champion.traits.join(', ')}</Text>
                        <Text fontSize="sm">Sınıflar: {champion.classes.join(', ')}</Text>
                        <Text fontSize="sm">Havuz Boyutu: {initialPoolSizes[champion.cost]}</Text>
                        <Accordion allowToggle mt={2}>
                          <AccordionItem>
                            <AccordionButton>
                              <Box flex="1" textAlign="left">
                                Yetenek: {champion.ability.name}
                              </Box>
                              <AccordionIcon />
                            </AccordionButton>
                            <AccordionPanel pb={4}>
                              <Text fontSize="sm">{champion.ability.description}</Text>
                            </AccordionPanel>
                          </AccordionItem>
                        </Accordion>
                      </CardBody>
                    </Card>
                  ))}
                </Grid>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        ))}
      </Stack>
    </Box>
  );
}

export default ChampionList;

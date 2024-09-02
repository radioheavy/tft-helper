import React, { useState, useCallback, useMemo } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import {
  Box,
  Heading,
  SimpleGrid,
  Image,
  Text,
  Container,
  Wrap,
  WrapItem,
  Flex,
  VStack,
  HStack,
  Badge,
  Tooltip,
  Input,
  Select,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Progress,
  Grid,
  GridItem,
  ChakraProvider,
  extendTheme
} from '@chakra-ui/react';
import tftData from '../data/tftData';

// Custom theme
const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: 'gray.900',
        color: 'white',
      },
    },
  },
  components: {
    Heading: {
      baseStyle: {
        color: 'white',
      },
    },
    Text: {
      baseStyle: {
        color: 'gray.200',
      },
    },
  },
});

function ChampionCard({ champion, isDragging }) {
  return (
    <Tooltip label={`${champion.name} - ${champion.traits.join(', ')}`}>
      <Box
        borderWidth="2px"
        borderRadius="md"
        overflow="hidden"
        bg={isDragging ? "gray.700" : "gray.800"}
        boxShadow={isDragging ? "lg" : "base"}
        transition="all 0.2s"
        _hover={{ boxShadow: "md" }}
        w="60px"
        h="80px"
        position="relative"
      >
        <Image 
          src={`/champion-icons/${champion.name}.png`} 
          alt={champion.name} 
          w="full" 
          h="60px" 
          objectFit="cover" 
          fallbackSrc="/champion-icons/default.png"
        />
        <Box p="1" bg="gray.900">
          <Text fontSize="xs" fontWeight="bold" textAlign="center">{champion.name}</Text>
          <Badge
            position="absolute"
            bottom="1"
            right="1"
            colorScheme={['gray', 'green', 'blue', 'purple', 'gold'][champion.cost - 1]}
            fontSize="xs"
          >
            {champion.cost}
          </Badge>
        </Box>
      </Box>
    </Tooltip>
  );
}

function TeamBuilder() {
  const [availableChampions, setAvailableChampions] = useState(tftData.champions);
  const [team, setTeam] = useState(Array(21).fill(null));
  const [searchTerm, setSearchTerm] = useState('');
  const [traitFilter, setTraitFilter] = useState('');
  const [costFilter, setCostFilter] = useState('');

  const filteredChampions = useMemo(() => {
    return availableChampions.filter(champion => 
      champion.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (traitFilter === '' || champion.traits.includes(traitFilter)) &&
      (costFilter === '' || champion.cost === parseInt(costFilter))
    );
  }, [availableChampions, searchTerm, traitFilter, costFilter]);

  const onDragEnd = useCallback((result) => {
    if (!result.destination) return;

    const sourceIndex = result.source.index;
    const destIndex = parseInt(result.destination.droppableId.split('-')[1]);

    if (result.source.droppableId === 'champions' && result.destination.droppableId.startsWith('team-')) {
      const [removed] = availableChampions.splice(sourceIndex, 1);
      const newTeam = [...team];
      newTeam[destIndex] = removed;
      setTeam(newTeam);
      setAvailableChampions([...availableChampions]);
    } else if (result.source.droppableId.startsWith('team-') && result.destination.droppableId === 'champions') {
      const sourceTeamIndex = parseInt(result.source.droppableId.split('-')[1]);
      const removed = team[sourceTeamIndex];
      const newTeam = [...team];
      newTeam[sourceTeamIndex] = null;
      setTeam(newTeam);
      setAvailableChampions(prevChampions => [...prevChampions, removed]);
    } else if (result.source.droppableId.startsWith('team-') && result.destination.droppableId.startsWith('team-')) {
      const sourceTeamIndex = parseInt(result.source.droppableId.split('-')[1]);
      const newTeam = [...team];
      const [removed] = newTeam.splice(sourceTeamIndex, 1, null);
      newTeam[destIndex] = removed;
      setTeam(newTeam);
    }
  }, [availableChampions, team]);

  const hexSize = 70;
  const rows = 3;
  const cols = 7;

  const hexagonPositions = [
    [0, 1, 2, 3, 4, 5, 6],
    [0, 1, 2, 3, 4, 5, 6],
    [0, 1, 2, 3, 4, 5, 6],
  ];

  const activeTraits = useMemo(() => {
    const traitCounts = team.reduce((acc, champion) => {
      if (champion) {
        champion.traits.forEach(trait => {
          acc[trait] = (acc[trait] || 0) + 1;
        });
      }
      return acc;
    }, {});

    return Object.entries(traitCounts)
      .filter(([trait, count]) => {
        const traitData = tftData.traits[trait];
        return traitData && traitData.levels && traitData.levels.some(level => level.units <= count);
      })
      .map(([trait, count]) => {
        const traitData = tftData.traits[trait];
        const activeLevel = traitData.levels.filter(level => level.units <= count).pop();
        return { trait, count, level: activeLevel.units };
      })
      .sort((a, b) => b.count - a.count);
  }, [team]);

  return (
    <ChakraProvider theme={theme}>
      <Container maxW="container.xl" py={4}>
        <Heading as="h1" size="xl" mb={6} textAlign="center">
          TFT Takım Oluşturucu
        </Heading>
        <DragDropContext onDragEnd={onDragEnd}>
          <Grid templateColumns="repeat(12, 1fr)" gap={6}>
            <GridItem colSpan={4}>
              <VStack align="stretch" spacing={4}>
                <Heading as="h2" size="md">
                  Şampiyonlar
                </Heading>
                <Input 
                  placeholder="Şampiyon Ara" 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <HStack>
                  <Select 
                    placeholder="Özellik Filtrele" 
                    value={traitFilter} 
                    onChange={(e) => setTraitFilter(e.target.value)}
                  >
                    {Object.keys(tftData.traits).map(trait => (
                      <option key={trait} value={trait}>{trait}</option>
                    ))}
                  </Select>
                  <Select 
                    placeholder="Maliyet Filtrele" 
                    value={costFilter} 
                    onChange={(e) => setCostFilter(e.target.value)}
                  >
                    {[1, 2, 3, 4, 5].map(cost => (
                      <option key={cost} value={cost}>{cost}</option>
                    ))}
                  </Select>
                </HStack>
                <Droppable droppableId="champions">
                  {(provided) => (
                    <Wrap
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                      spacing={2}
                      justify="center"
                      maxH="500px"
                      overflowY="auto"
                    >
                      {filteredChampions.map((champion, index) => (
                        <Draggable key={`champ-${index}`} draggableId={`champ-${index}`} index={index}>
                          {(provided, snapshot) => (
                            <WrapItem
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                            >
                              <ChampionCard champion={champion} isDragging={snapshot.isDragging} />
                            </WrapItem>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </Wrap>
                  )}
                </Droppable>
              </VStack>
            </GridItem>
            <GridItem colSpan={8}>
              <VStack align="stretch" spacing={4}>
                <Heading as="h2" size="md">
                  Takımınız
                </Heading>
                <Box
                  bg="gray.800"
                  borderRadius="lg"
                  p={4}
                  position="relative"
                  width={`${cols * hexSize * 0.9}px`}
                  height={`${rows * hexSize * 0.8 + hexSize * 0.4}px`}
                >
                  {hexagonPositions.map((row, rowIndex) => (
                    <Flex key={rowIndex} justify="center" mt={rowIndex === 0 ? 0 : `-${hexSize * 0.25}px`}>
                      {row.map((col, colIndex) => {
                        const index = rowIndex * cols + colIndex;
                        return (
                          <Droppable key={index} droppableId={`team-${index}`}>
                            {(provided, snapshot) => (
                              <Box
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                                width={`${hexSize * 0.9}px`}
                                height={`${hexSize}px`}
                                position="relative"
                                ml={colIndex === 0 ? 0 : `-${hexSize * 0.22}px`}
                              >
                                <Box
                                  position="absolute"
                                  top="0"
                                  left="0"
                                  right="0"
                                  bottom="0"
                                  bg={snapshot.isDraggingOver ? "gray.600" : "gray.700"}
                                  clipPath="polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)"
                                  border="1px solid"
                                  borderColor="gray.500"
                                  transition="all 0.2s"
                                />
                                <Flex
                                  position="absolute"
                                  top="0"
                                  left="0"
                                  right="0"
                                  bottom="0"
                                  alignItems="center"
                                  justifyContent="center"
                                >
                                  {team[index] && (
                                    <Draggable key={`team-${index}`} draggableId={`team-${index}`} index={0}>
                                      {(provided, snapshot) => (
                                        <Box
                                          ref={provided.innerRef}
                                          {...provided.draggableProps}
                                          {...provided.dragHandleProps}
                                        >
                                          <ChampionCard champion={team[index]} isDragging={snapshot.isDragging} />
                                        </Box>
                                      )}
                                    </Draggable>
                                  )}
                                  {provided.placeholder}
                                </Flex>
                              </Box>
                            )}
                          </Droppable>
                        );
                      })}
                    </Flex>
                  ))}
                </Box>
                <Tabs>
                  <TabList>
                    <Tab>Aktif Özellikler</Tab>
                    <Tab>Takım Kompozisyonu</Tab>
                  </TabList>
                  <TabPanels>
                    <TabPanel>
                      <Wrap>
                        {activeTraits.map(({ trait, count, level }) => (
                          <Tooltip key={trait} label={tftData.traits[trait].description}>
                            <Badge 
                              colorScheme={count === level ? "purple" : "teal"} 
                              variant="solid" 
                              px={2} 
                              py={1} 
                              borderRadius="full"
                            >
                              {trait} ({count}/{level})
                            </Badge>
                          </Tooltip>
                        ))}
                      </Wrap>
                    </TabPanel>
                    <TabPanel>
                      <VStack align="stretch">
                        <Text>Toplam Şampiyon: {team.filter(Boolean).length}</Text>
                        <Text>Toplam Maliyet: {team.reduce((sum, champion) => sum + (champion ? champion.cost : 0), 0)}</Text>
                        <Text>Seviye: {Math.min(9, Math.floor(team.filter(Boolean).length / 2) + 4)}</Text>
                        <Progress value={(team.filter(Boolean).length / 9) * 100} colorScheme="blue" />
                      </VStack>
                    </TabPanel>
                  </TabPanels>
                </Tabs>
              </VStack>
            </GridItem>
          </Grid>
        </DragDropContext>
      </Container>
    </ChakraProvider>
  );
}

export default TeamBuilder;
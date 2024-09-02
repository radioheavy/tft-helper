/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useCallback, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import {
  Box,
  Heading,
  SimpleGrid,
  Image,
  Text,
  Badge,
  VStack,
  HStack,
  Container,
  Wrap,
  WrapItem,
  Tooltip,
  Flex
} from '@chakra-ui/react';
import tftData from '../data/tftData';

const costColors = {
  1: "gray.500",
  2: "green.500",
  3: "blue.500",
  4: "purple.500",
  5: "orange.500"
};

function ChampionCard({ champion, isDragging }) {
  return (
    <Box
      borderWidth="1px"
      borderRadius="full"
      overflow="hidden"
      bg={isDragging ? "gray.100" : "white"}
      boxShadow={isDragging ? "lg" : "base"}
      transition="all 0.2s"
      _hover={{ boxShadow: "md" }}
      w="70px"
      h="70px"
    >
      <Image 
        src={`/champion-icons/${champion.name}.png`} 
        alt={champion.name} 
        w="full" 
        h="full" 
        objectFit="cover" 
        fallbackSrc="/champion-icons/default.png"
      />
    </Box>
  );
}

function TeamBuilder() {
  const [availableChampions, setAvailableChampions] = useState(tftData.champions);
  const [team, setTeam] = useState([]);

  const onDragEnd = useCallback((result) => {
    if (!result.destination) return;

    const sourceIndex = result.source.index;
    const destIndex = result.destination.index;

    if (result.source.droppableId === 'champions' && result.destination.droppableId === 'team') {
      if (team.length < 9) {
        const [removed] = availableChampions.splice(sourceIndex, 1);
        setTeam(prevTeam => [...prevTeam, removed]);
        setAvailableChampions([...availableChampions]);
      }
    } else if (result.source.droppableId === 'team' && result.destination.droppableId === 'champions') {
      const [removed] = team.splice(sourceIndex, 1);
      setAvailableChampions(prevChampions => [...prevChampions, removed]);
      setTeam([...team]);
    }
  }, [availableChampions, team]);

  const getActiveTraits = useCallback(() => {
    const traitCounts = team.reduce((acc, champion) => {
      champion.traits.forEach((trait) => {
        acc[trait] = (acc[trait] || 0) + 1;
      });
      return acc;
    }, {});

    const activeTraits = Object.entries(traitCounts)
      .filter(([trait, count]) => {
        const traitData = tftData.traits[trait];
        return traitData && traitData.levels && traitData.levels.some(level => level.units <= count);
      })
      .map(([trait, count]) => {
        const traitData = tftData.traits[trait];
        const activeLevel = traitData.levels
          .filter(level => level.units <= count)
          .reduce((highest, current) => (current.units > highest.units ? current : highest), traitData.levels[0]);
        return {
          trait,
          level: activeLevel.units,
          bonus: activeLevel.bonus
        };
      });

    return activeTraits;
  }, [team]);

  useEffect(() => {
    const activeTraits = getActiveTraits();
  }, [team, getActiveTraits]);

  const hexLayout = [
    [0, 1, 2, 3],
    [4, 5, 6, 5, 7],
    [8, 9, 10, 11, 12, 13],
    [14, 15, 16, 15, 17],
    [18, 19, 20, 21]
  ];

  return (
    <Container maxW="container.xl" py={4}>
      <DragDropContext onDragEnd={onDragEnd}>
        <SimpleGrid columns={[1, null, 2]} spacing={8}>
          <Box>
            <Heading as="h4" size="md" mb={4}>
              Mevcut Şampiyonlar
            </Heading>
            <Droppable droppableId="champions">
              {(provided) => (
                <Wrap
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  spacing={4}
                  justify="center"
                >
                  {availableChampions.map((champion, index) => (
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
          </Box>

          <Box>
            <Heading as="h4" size="md" mb={4}>
              Takımınız
            </Heading>
            <Droppable droppableId="team">
              {(provided) => (
                <Flex
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  flexDirection="column"
                  alignItems="center"
                  bg="gray.50"
                  borderRadius="lg"
                  p={4}
                  minH="300px"
                >
                  {hexLayout.map((row, rowIndex) => (
                    <Flex key={rowIndex} justify="center" my={-2}>
                      {row.map((index) => (
                        <Box
                          key={index}
                          w="80px"
                          h="90px"
                          m={1}
                          borderRadius="full"
                          bg="gray.200"
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                        >
                          {team[index] && (
                            <Draggable key={`team-${index}`} draggableId={`team-${index}`} index={index}>
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
                        </Box>
                      ))}
                    </Flex>
                  ))}
                  {provided.placeholder}
                </Flex>
              )}
            </Droppable>
            <Heading as="h4" size="md" mt={6} mb={2}>
              Aktif Özellikler
            </Heading>
            <Wrap spacing={2}>
              {getActiveTraits().map(({ trait, level, bonus }) => {
                const traitData = tftData.traits[trait];
                const maxLevel = traitData.levels.length;
                const colorScheme = level === maxLevel ? "purple" : "blue";
                return (
                  <Tooltip key={trait} label={bonus}>
                    <Badge colorScheme={colorScheme} p={1} borderRadius="full">
                      <HStack spacing={1}>
                        <Image 
                          src={`/trait-icons/${trait}.png`} 
                          alt={trait} 
                          boxSize="20px" 
                          fallbackSrc="/trait-icons/default.png"
                        />
                        <Text>{trait}</Text>
                        <Text fontWeight="bold">{level}</Text>
                      </HStack>
                    </Badge>
                  </Tooltip>
                );
              })}
            </Wrap>
          </Box>
        </SimpleGrid>
      </DragDropContext>
    </Container>
  );
}

export default TeamBuilder;

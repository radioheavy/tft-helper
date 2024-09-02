import React, { useState, useEffect, useMemo } from 'react';
import {
  Box,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Select,
  Text,
  VStack,
  HStack,
  Progress,
  Tooltip
} from '@chakra-ui/react';
import tftData from '../data/tftData';

// TFT temalı renk paleti
const tftColors = {
  primary: "#C4973B",
  secondary: "#17A1BE",
  accent: "#73428F",
  background: "#0A0D13",
  cardBg: "#181C24",
  text: "#E5E5E5",
};

// Güncellenmiş havuz boyutları
const initialPoolSizes = {
  1: 30,
  2: 25,
  3: 18,
  4: 10,
  5: 9,
};

const levelOdds = {
  1: { 1: 100, 2: 0, 3: 0, 4: 0, 5: 0 },
  2: { 1: 100, 2: 0, 3: 0, 4: 0, 5: 0 },
  3: { 1: 75, 2: 25, 3: 0, 4: 0, 5: 0 },
  4: { 1: 55, 2: 30, 3: 15, 4: 0, 5: 0 },
  5: { 1: 45, 2: 33, 3: 20, 4: 2, 5: 0 },
  6: { 1: 30, 2: 40, 3: 25, 4: 5, 5: 0 },
  7: { 1: 19, 2: 30, 3: 40, 4: 10, 5: 1 },
  8: { 1: 18, 2: 27, 3: 32, 4: 20, 5: 3 },
  9: { 1: 15, 2: 20, 3: 25, 4: 30, 5: 10 },
  10: { 1: 5, 2: 10, 3: 20, 4: 40, 5: 25 },
};

function PoolSimulator() {
  const [pool, setPool] = useState({});
  const [playerLevel, setPlayerLevel] = useState(1);
  const [selectedCost, setSelectedCost] = useState(1);

  useEffect(() => {
    const initialPool = tftData.champions.reduce((acc, champion) => {
      acc[champion.name] = initialPoolSizes[champion.cost];
      return acc;
    }, {});
    setPool(initialPool);
  }, []);

  const updateChampionCount = (championName, count) => {
    setPool((prevPool) => ({
      ...prevPool,
      [championName]: Math.max(
        0,
        Math.min(count, initialPoolSizes[tftData.champions.find((c) => c.name === championName).cost])
      ),
    }));
  };

  const calculateProbability = (championName) => {
    const champion = tftData.champions.find((c) => c.name === championName);
    const totalChampionsOfCost = tftData.champions.filter((c) => c.cost === champion.cost).length;
    const remainingChampions = Object.values(pool).reduce((sum, count) => sum + count, 0);
    const championsInPool = pool[championName];
    const levelOdd = levelOdds[playerLevel][champion.cost];
    
    const probability = (championsInPool / remainingChampions) * (levelOdd / 100) * (1 / totalChampionsOfCost) * 100;
    return probability.toFixed(4);
  };

  const filteredChampions = useMemo(() => {
    return tftData.champions.filter(champion => champion.cost === selectedCost);
  }, [selectedCost]);

  return (
    <Box bg={tftColors.background} p={5} color={tftColors.text}>
      <Heading as="h2" size="xl" mb={4} color={tftColors.primary}>
        TFT Havuz Simülatörü
      </Heading>
      <HStack spacing={4} mb={4}>
        <VStack align="start">
          <Text>Oyuncu Seviyesi</Text>
          <NumberInput
            value={playerLevel}
            min={1}
            max={10}
            onChange={(valueString) => setPlayerLevel(parseInt(valueString) || 1)}
            maxWidth="100px"
            bg={tftColors.cardBg}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </VStack>
        <VStack align="start">
          <Text>Şampiyon Maliyeti</Text>
          <Select 
            value={selectedCost} 
            onChange={(e) => setSelectedCost(Number(e.target.value))}
            bg={tftColors.cardBg}
          >
            {[1, 2, 3, 4, 5].map(cost => (
              <option key={cost} value={cost}>{cost} Maliyet</option>
            ))}
          </Select>
        </VStack>
      </HStack>
      <Box mb={4}>
        <Text fontWeight="bold">Mevcut Seviyede Çekme Olasılıkları:</Text>
        <HStack spacing={4}>
          {Object.entries(levelOdds[playerLevel]).map(([cost, odd]) => (
            <Tooltip key={cost} label={`${cost} Maliyet: ${odd}%`}>
              <Progress value={odd} width="50px" colorScheme={cost === selectedCost.toString() ? "yellow" : "blue"} />
            </Tooltip>
          ))}
        </HStack>
      </Box>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th color={tftColors.secondary}>Şampiyon</Th>
              <Th color={tftColors.secondary}>Havuzda Kalan</Th>
              <Th color={tftColors.secondary}>Çekme Olasılığı (%)</Th>
              <Th color={tftColors.secondary}>Güncelle</Th>
            </Tr>
          </Thead>
          <Tbody>
            {filteredChampions.map((champion) => (
              <Tr key={champion.name}>
                <Td>{champion.name}</Td>
                <Td>{pool[champion.name]}</Td>
                <Td>{calculateProbability(champion.name)}</Td>
                <Td>
                  <NumberInput
                    value={pool[champion.name]}
                    min={0}
                    max={initialPoolSizes[champion.cost]}
                    onChange={(valueString) => updateChampionCount(champion.name, parseInt(valueString) || 0)}
                    size="sm"
                    maxWidth="70px"
                    bg={tftColors.cardBg}
                  >
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default PoolSimulator;
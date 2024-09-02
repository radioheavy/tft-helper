import React, { useState, useEffect } from 'react';
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
  Input,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react';
import tftData from '../data/tftData';

const initialPoolSizes = {
  1: 29,
  2: 22,
  3: 18,
  4: 12,
  5: 10,
};

function PoolSimulator() {
  const [pool, setPool] = useState({});
  const [playerLevel, setPlayerLevel] = useState(1);

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

    // Bu olasılık hesaplaması gerçek TFT mekaniklerini tam olarak yansıtmayabilir
    const probability = (championsInPool / remainingChampions) * (1 / totalChampionsOfCost) * 100;
    return probability.toFixed(2);
  };

  return (
    <Box>
      <Heading as="h2" size="xl" mb={4}>
        Havuz Simülatörü
      </Heading>
      <NumberInput
        label="Oyuncu Seviyesi"
        value={playerLevel}
        min={1}
        max={9}
        onChange={(valueString) => setPlayerLevel(parseInt(valueString) || 1)}
        mb={4}
        maxWidth="100px"
      >
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Şampiyon</Th>
              <Th>Maliyet</Th>
              <Th>Havuzda Kalan</Th>
              <Th>Çekme Olasılığı (%)</Th>
              <Th>Güncelle</Th>
            </Tr>
          </Thead>
          <Tbody>
            {tftData.champions.map((champion) => (
              <Tr key={champion.name}>
                <Td>{champion.name}</Td>
                <Td>{champion.cost}</Td>
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

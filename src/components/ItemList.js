import React from 'react';
import { Box, Text, Image, SimpleGrid, Card, CardBody, Heading, VStack, Stat, StatLabel, StatNumber } from '@chakra-ui/react';

const baseItems = [
  { name: 'B.F. Sword', stat: '+10% Attack Damage', image: '/images/items/bf-sword.webp' },
  { name: 'Chain Vest', stat: '+20 Armor', image: '/images/items/chain-vest.webp' },
  { name: "Giant's Belt", stat: '+150 Health', image: '/images/items/giants-belt.webp' },
  { name: 'Needlessly Large Rod', stat: '+10 Ability Power', image: '/images/items/needlessly-large-rod.webp' },
  { name: 'Negatron Cloak', stat: '+20 Magic Resist', image: '/images/items/negatron-cloak.webp' },
  { name: 'Recurve Bow', stat: '+10% Attack Speed', image: '/images/items/recurve-bow.webp' },
  { name: 'Sparring Gloves', stat: '+20% Crit Chance', image: '/images/items/sparring-gloves.webp' },
  { name: 'Spatula', stat: 'It must do something...', image: '/images/items/spatula.png' },
  { name: 'Tear of the Goddess', stat: '+15 Mana', image: '/images/items/tear-of-the-goddess.png' },
];

function ItemList() {
  return (
    <Box>
      <Text fontSize="2xl" mb={4}>Temel Bileşen Eşyaları</Text>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={4}>
        {baseItems.map((item, index) => (
          <Card key={index}>
            <CardBody>
              <VStack align="start" spacing={2}>
                <Image
                  src={item.image}
                  alt={item.name}
                  boxSize="50px"
                  objectFit="cover"
                />
                <Heading size="md">{item.name}</Heading>
                <Stat>
                  <StatLabel>Özellik</StatLabel>
                  <StatNumber>{item.stat}</StatNumber>
                </Stat>
              </VStack>
            </CardBody>
          </Card>
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default ItemList;
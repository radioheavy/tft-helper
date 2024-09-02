import React from 'react';
import { Box, Text, Image, SimpleGrid, Card, CardBody, Heading } from '@chakra-ui/react';

// Not: Gerçek veri olmadığı için örnek veriler kullanıyoruz.
const items = [
  { name: 'Sihirli Değnek', description: 'Büyü gücünü artırır', image: '/api/placeholder/50/50' },
  { name: 'Ejderha Pençesi', description: 'Büyü direncini artırır', image: '/api/placeholder/50/50' },
  { name: 'Sonsuzluk Kılıcı', description: 'Kritik vuruş şansını ve hasarını artırır', image: '/api/placeholder/50/50' },
];

function ItemList() {
  return (
    <Box>
      <Text fontSize="2xl" mb={4}>Eşya Listesi</Text>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={4}>
        {items.map((item, index) => (
          <Card key={index}>
            <Image
              src={item.image}
              alt={item.name}
              objectFit="cover"
              height="140px"
            />
            <CardBody>
              <Heading size="md" mb={2}>{item.name}</Heading>
              <Text fontSize="sm" color="gray.500">
                {item.description}
              </Text>
            </CardBody>
          </Card>
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default ItemList;

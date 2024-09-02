import React, { useState } from 'react';
import {
  Box,
  Text,
  Image,
  SimpleGrid,
  Card,
  CardBody,
  Heading,
  VStack,
  Stat,
  StatLabel,
  StatNumber,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Flex,
  Badge,
  Divider
} from '@chakra-ui/react';

// TFT temalı renk paleti
const tftColors = {
  primary: "#C4973B",
  secondary: "#17A1BE",
  accent: "#73428F",
  background: "#0A0D13",
  cardBg: "#181C24",
  text: "#E5E5E5",
};

const baseItems = [
  { name: 'B.F. Sword', stat: '+10% Attack Damage', image: '/images/items/bf-sword.webp', description: 'A mighty sword that boosts your attack damage.' },
  { name: 'Chain Vest', stat: '+20 Armor', image: '/images/items/chain-vest.webp', description: 'A sturdy vest that increases your armor.' },
  { name: "Giant's Belt", stat: '+150 Health', image: '/images/items/giants-belt.webp', description: 'A large belt that significantly increases your health.' },
  { name: 'Needlessly Large Rod', stat: '+10 Ability Power', image: '/images/items/needlessly-large-rod.webp', description: 'A magical rod that enhances your ability power.' },
  { name: 'Negatron Cloak', stat: '+20 Magic Resist', image: '/images/items/negatron-cloak.webp', description: 'A cloak that provides protection against magic damage.' },
  { name: 'Recurve Bow', stat: '+10% Attack Speed', image: '/images/items/recurve-bow.webp', description: 'A swift bow that increases your attack speed.' },
  { name: 'Sparring Gloves', stat: '+20% Crit Chance', image: '/images/items/sparring-gloves.webp', description: 'Gloves that increase your chance to land critical hits.' },
  { name: 'Spatula', stat: 'It must do something...', image: '/images/items/spatula.png', description: 'A mysterious item with unknown potential.' },
  { name: 'Tear of the Goddess', stat: '+15 Mana', image: '/images/items/tear-of-the-goddess.png', description: 'A magical tear that increases your mana pool.' },
];

function ItemCard({ item, onOpen }) {
  return (
    <Card 
      onClick={() => onOpen(item)} 
      cursor="pointer" 
      _hover={{ transform: 'scale(1.05)', transition: 'transform 0.2s' }}
      bg={tftColors.cardBg}
      borderColor={tftColors.primary}
      borderWidth="2px"
    >
      <CardBody>
        <VStack align="start" spacing={2}>
          <Image
            src={item.image}
            alt={item.name}
            boxSize="50px"
            objectFit="cover"
          />
          <Heading size="md" color={tftColors.primary}>{item.name}</Heading>
          <Badge bg={tftColors.secondary} color={tftColors.text}>{item.stat}</Badge>
        </VStack>
      </CardBody>
    </Card>
  );
}

function ItemDetailDrawer({ isOpen, onClose, item }) {
  if (!item) return null;

  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="md">
      <DrawerOverlay />
      <DrawerContent bg={tftColors.background}>
        <DrawerCloseButton color={tftColors.text} />
        <DrawerHeader color={tftColors.primary}>{item.name}</DrawerHeader>
        <DrawerBody>
          <VStack spacing={4} align="start">
            <Image
              src={item.image}
              alt={item.name}
              boxSize="100px"
              objectFit="cover"
            />
            <Stat>
              <StatLabel color={tftColors.secondary}>Özellik</StatLabel>
              <StatNumber color={tftColors.text}>{item.stat}</StatNumber>
            </Stat>
            <Divider borderColor={tftColors.accent} />
            <Text fontWeight="bold" color={tftColors.secondary}>Açıklama</Text>
            <Text color={tftColors.text}>{item.description}</Text>
            <Divider borderColor={tftColors.accent} />
            <Text fontWeight="bold" color={tftColors.secondary}>Kullanım İpuçları</Text>
            <Text color={tftColors.text}>Bu eşya genellikle X, Y ve Z şampiyonlarında etkilidir.</Text>
            <Button bg={tftColors.primary} color={tftColors.text} mt={4} _hover={{ bg: tftColors.secondary }}>
              Daha Fazla Bilgi
            </Button>
          </VStack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}

function ItemList() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    onOpen();
  };

  return (
    <Box bg={tftColors.background} p={5}>
      <Flex justify="space-between" align="center" mb={4}>
        <Heading as="h2" size="xl" color={tftColors.primary}>Temel Bileşen Eşyaları</Heading>
        <Button bg={tftColors.secondary} color={tftColors.text} _hover={{ bg: tftColors.accent }}>
          Tüm Eşyaları Göster
        </Button>
      </Flex>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={6}>
        {baseItems.map((item, index) => (
          <ItemCard key={index} item={item} onOpen={handleItemClick} />
        ))}
      </SimpleGrid>
      <ItemDetailDrawer isOpen={isOpen} onClose={onClose} item={selectedItem} />
    </Box>
  );
}

export default ItemList;
import React, { useState, useMemo, useCallback } from 'react';
import {
  Box,
  Flex,
  Text,
  Input,
  Select,
  SimpleGrid,
  Image,
  Badge,
  Tooltip,
  VStack,
  HStack,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Heading,
  Button,
  Tag,
  Wrap,
  useToast,
  Stat,
  StatLabel,
  StatNumber,
  Divider
} from '@chakra-ui/react';
import { InfoIcon, SearchIcon, StarIcon } from '@chakra-ui/icons';
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

const poolSizes = { 1: 29, 2: 22, 3: 18, 4: 12, 5: 10 };

function ChampionCard({ champion, onFavorite, isFavorite }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        bg={tftColors.cardBg}
        borderWidth="2px"
        borderColor={tftColors.primary}
        borderRadius="lg"
        overflow="hidden"
        _hover={{ shadow: 'lg', borderColor: tftColors.secondary }}
        transition="all 0.3s"
        position="relative"
      >
        <Image
          src={`/champion-icons/${champion.name}.png`}
          alt={champion.name}
          objectFit="cover"
          w="100%"
          h="120px"
          fallbackSrc="/champion-icons/default.png"
        />
        <VStack p={2} align="start">
          <Heading size="sm" color={tftColors.primary}>{champion.name}</Heading>
          <HStack>
            <Badge bg={tftColors.secondary} color={tftColors.text}>
              {champion.cost} Cost
            </Badge>
            <IconButton
              aria-label="Champion info"
              icon={<InfoIcon />}
              size="sm"
              onClick={onOpen}
              bg={tftColors.accent}
              color={tftColors.text}
              _hover={{ bg: tftColors.secondary }}
            />
            <IconButton
              aria-label="Favorite"
              icon={<StarIcon />}
              size="sm"
              colorScheme={isFavorite ? "yellow" : "gray"}
              onClick={() => onFavorite(champion)}
            />
          </HStack>
        </VStack>
        <Wrap position="absolute" top={1} left={1}>
          {champion.traits.map(trait => (
            <Tag key={trait} size="sm" bg={tftColors.accent} color={tftColors.text}>
              {trait}
            </Tag>
          ))}
        </Wrap>
      </Box>

      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="md">
        <DrawerOverlay />
        <DrawerContent bg={tftColors.background}>
          <DrawerCloseButton color={tftColors.text} />
          <DrawerHeader bg={tftColors.primary} color={tftColors.text}>
            <Flex align="center">
              <Image
                src={`/champion-icons/${champion.name}.png`}
                alt={champion.name}
                boxSize="50px"
                mr={3}
                fallbackSrc="/champion-icons/default.png"
              />
              <VStack align="start" spacing={0}>
                <Heading size="md">{champion.name}</Heading>
                <Text fontSize="sm">{champion.traits.join(' / ')}</Text>
              </VStack>
            </Flex>
          </DrawerHeader>
          <DrawerBody>
            <VStack align="start" spacing={6} color={tftColors.text}>
              <Box width="100%">
                <Heading size="sm" mb={2} color={tftColors.secondary}>Stats</Heading>
                <SimpleGrid columns={2} spacing={4}>
                  <Stat>
                    <StatLabel>Cost</StatLabel>
                    <StatNumber>{champion.cost}</StatNumber>
                  </Stat>
                  <Stat>
                    <StatLabel>Pool Size</StatLabel>
                    <StatNumber>{poolSizes[champion.cost]}</StatNumber>
                  </Stat>
                </SimpleGrid>
              </Box>

              <Divider borderColor={tftColors.accent} />

              <Box width="100%">
                <Heading size="sm" mb={2} color={tftColors.secondary}>Traits</Heading>
                <Wrap>
                  {champion.traits.map(trait => (
                    <Tag key={trait} size="md" bg={tftColors.accent} color={tftColors.text}>
                      {trait}
                    </Tag>
                  ))}
                </Wrap>
              </Box>

              <Box width="100%">
                <Heading size="sm" mb={2} color={tftColors.secondary}>Classes</Heading>
                <Wrap>
                  {champion.classes.map(cls => (
                    <Tag key={cls} size="md" bg={tftColors.secondary} color={tftColors.text}>
                      {cls}
                    </Tag>
                  ))}
                </Wrap>
              </Box>

              <Divider borderColor={tftColors.accent} />

              <Box width="100%">
                <Heading size="sm" mb={2} color={tftColors.secondary}>Ability: {champion.ability.name}</Heading>
                <Text>{champion.ability.description}</Text>
              </Box>

              <Divider borderColor={tftColors.accent} />

              <Box width="100%">
                <Heading size="sm" mb={2} color={tftColors.secondary}>Recommended Items</Heading>
                <Wrap>
                  {/* Bu kısım örnek amaçlıdır, gerçek veriyle değiştirilmelidir */}
                  <Tag size="md" bg={tftColors.primary} color={tftColors.text}>Item 1</Tag>
                  <Tag size="md" bg={tftColors.primary} color={tftColors.text}>Item 2</Tag>
                  <Tag size="md" bg={tftColors.primary} color={tftColors.text}>Item 3</Tag>
                </Wrap>
              </Box>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

function ChampionList() {
  const [filter, setFilter] = useState('');
  const [traitFilter, setTraitFilter] = useState('');
  const [classFilter, setClassFilter] = useState('');
  const [costFilter, setCostFilter] = useState('');
  const [favorites, setFavorites] = useState([]);
  const [showFavorites, setShowFavorites] = useState(false);
  const toast = useToast();

  const allTraits = useMemo(() => [...new Set(tftData.champions.flatMap(c => c.traits))], []);
  const allClasses = useMemo(() => [...new Set(tftData.champions.flatMap(c => c.classes))], []);

  const filteredChampions = useMemo(() => {
    let filtered = tftData.champions;
    
    if (showFavorites) {
      filtered = filtered.filter(champion => favorites.includes(champion.name));
    }
    
    return filtered.filter(champion =>
      champion.name.toLowerCase().includes(filter.toLowerCase()) &&
      (traitFilter === '' || champion.traits.includes(traitFilter)) &&
      (classFilter === '' || champion.classes.includes(classFilter)) &&
      (costFilter === '' || champion.cost === parseInt(costFilter))
    );
  }, [filter, traitFilter, classFilter, costFilter, favorites, showFavorites]);

  const handleFavorite = useCallback((champion) => {
    setFavorites(prev => {
      if (prev.includes(champion.name)) {
        toast({
          title: "Removed from favorites",
          description: `${champion.name} has been removed from your favorites.`,
          status: "info",
          duration: 2000,
          isClosable: true,
        });
        return prev.filter(name => name !== champion.name);
      } else {
        toast({
          title: "Added to favorites",
          description: `${champion.name} has been added to your favorites.`,
          status: "success",
          duration: 2000,
          isClosable: true,
        });
        return [...prev, champion.name];
      }
    });
  }, [toast]);

  return (
    <Box maxWidth="1200px" margin="auto" p={5} bg={tftColors.background}>
      <Heading as="h1" size="2xl" mb={6} textAlign="center" color={tftColors.primary}>TFT Champion Gallery</Heading>
      
      <VStack spacing={4} mb={8}>
        <Input
          placeholder="Search champions..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          leftElement={<SearchIcon color={tftColors.text} />}
          bg={tftColors.cardBg}
          color={tftColors.text}
          borderColor={tftColors.accent}
        />
        <HStack width="100%">
          <Select 
            placeholder="Filter by Trait" 
            value={traitFilter} 
            onChange={(e) => setTraitFilter(e.target.value)}
            bg={tftColors.cardBg}
            color={tftColors.text}
            borderColor={tftColors.accent}
          >
            <option value="">All Traits</option>
            {allTraits.map(trait => (
              <option key={trait} value={trait}>{trait}</option>
            ))}
          </Select>
          <Select 
            placeholder="Filter by Class" 
            value={classFilter} 
            onChange={(e) => setClassFilter(e.target.value)}
            bg={tftColors.cardBg}
            color={tftColors.text}
            borderColor={tftColors.accent}
          >
            <option value="">All Classes</option>
            {allClasses.map(cls => (
              <option key={cls} value={cls}>{cls}</option>
            ))}
          </Select>
          <Select 
            placeholder="Filter by Cost" 
            value={costFilter} 
            onChange={(e) => setCostFilter(e.target.value)}
            bg={tftColors.cardBg}
            color={tftColors.text}
            borderColor={tftColors.accent}
          >
            <option value="">All Costs</option>
            {[1, 2, 3, 4, 5].map(cost => (
              <option key={cost} value={cost}>{cost} Cost</option>
            ))}
          </Select>
        </HStack>
        <Button 
          onClick={() => setShowFavorites(!showFavorites)}
          bg={showFavorites ? tftColors.primary : tftColors.cardBg}
          color={tftColors.text}
          _hover={{ bg: tftColors.secondary }}
        >
          {showFavorites ? "Show All Champions" : "Show Favorites"}
        </Button>
      </VStack>

      <SimpleGrid columns={{ base: 2, sm: 3, md: 4, lg: 5 }} spacing={6}>
        {filteredChampions.map((champion) => (
          <ChampionCard 
            key={champion.name} 
            champion={champion} 
            onFavorite={handleFavorite}
            isFavorite={favorites.includes(champion.name)}
          />
        ))}
      </SimpleGrid>

      {filteredChampions.length === 0 && (
        <Text textAlign="center" fontSize="xl" mt={10} color={tftColors.text}>
          No champions found matching your criteria.
        </Text>
      )}
    </Box>
  );
}

export default ChampionList;
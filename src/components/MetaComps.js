import React, { useState, useMemo } from 'react';
import {
  Box,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  VStack,
  HStack,
  Heading,
  SimpleGrid,
  Badge,
  useColorModeValue,
  Collapse,
  Button,
  Image,
  Tooltip,
  Flex,
  Divider,
  useTheme
} from '@chakra-ui/react';
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
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

function SynergyCard({ synergy, type }) {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();

  const bgColor = useColorModeValue(tftColors.cardBg, 'gray.700');
  const borderColor = useColorModeValue(tftColors.primary, 'gray.600');
  const textColor = useColorModeValue(tftColors.text, 'white');

  const champions = useMemo(() => 
    tftData.champions.filter(champ => 
      type === 'trait' 
        ? champ.traits.includes(synergy.name)
        : champ.classes.includes(synergy.name)
    ),
    [synergy.name, type]
  );

  return (
    <Box
      borderWidth="2px"
      borderRadius="lg"
      overflow="hidden"
      bg={bgColor}
      borderColor={borderColor}
      p={4}
      boxShadow="lg"
      transition="all 0.3s"
      _hover={{ transform: 'translateY(-5px)', boxShadow: 'xl' }}
    >
      <VStack align="stretch" spacing={4}>
        <Flex justify="space-between" align="center">
          <Heading size="md" color={tftColors.primary}>{synergy.name}</Heading>
          <Button 
            size="sm" 
            onClick={() => setIsOpen(!isOpen)}
            rightIcon={isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
            bg={tftColors.secondary}
            color="white"
            _hover={{ bg: theme.colors.blue[600] }}
          >
            {isOpen ? 'Less' : 'More'}
          </Button>
        </Flex>
        
        <Text noOfLines={isOpen ? undefined : 2} color={textColor}>{synergy.description}</Text>
        
        <Collapse in={isOpen}>
          <VStack align="stretch" spacing={4}>
            {synergy.levels && (
              <Box>
                <Heading size="sm" mb={2} color={tftColors.secondary}>Levels</Heading>
                {synergy.levels.map((level, index) => (
                  <HStack key={index} justify="space-between">
                    <Badge colorScheme="purple">{level.units} units</Badge>
                    <Text color={textColor}>{level.bonus}</Text>
                  </HStack>
                ))}
              </Box>
            )}
            
            <Divider borderColor={tftColors.accent} />
            
            <Box>
              <Heading size="sm" mb={2} color={tftColors.secondary}>Champions</Heading>
              <SimpleGrid columns={4} spacing={2}>
                {champions.map(champ => (
                  <Tooltip key={champ.name} label={champ.name}>
                    <Image
                      src={`/champion-icons/${champ.name}.png`}
                      alt={champ.name}
                      boxSize="40px"
                      objectFit="cover"
                      borderRadius="full"
                      fallbackSrc="/champion-icons/default.png"
                      border="2px solid"
                      borderColor={tftColors.accent}
                    />
                  </Tooltip>
                ))}
              </SimpleGrid>
            </Box>
          </VStack>
        </Collapse>
      </VStack>
    </Box>
  );
}

function MetaComps() {
  const [tabIndex, setTabIndex] = useState(0);

  const renderSynergies = (synergies, type) => (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
      {Object.entries(synergies).map(([key, synergy]) => (
        <SynergyCard key={key} synergy={synergy} type={type} />
      ))}
    </SimpleGrid>
  );

  return (
    <Box maxWidth="1200px" margin="auto" p={5} bg={tftColors.background}>
      <Heading as="h1" size="2xl" mb={6} textAlign="center" color={tftColors.primary}>TFT Synergies</Heading>
      
      <Tabs index={tabIndex} onChange={setTabIndex} variant="soft-rounded" colorScheme="yellow">
        <TabList mb={4}>
          <Tab color={tftColors.text} _selected={{ color: 'white', bg: tftColors.primary }}>Traits</Tab>
          <Tab color={tftColors.text} _selected={{ color: 'white', bg: tftColors.primary }}>Classes</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            {renderSynergies(tftData.traits, 'trait')}
          </TabPanel>
          <TabPanel>
            {renderSynergies(tftData.classes, 'class')}
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}

export default MetaComps;
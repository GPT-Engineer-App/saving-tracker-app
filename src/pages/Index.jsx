import React, { useState } from "react";
import { Box, Button, Container, Flex, FormControl, FormLabel, Heading, Input, Progress, Stack, Text, VStack } from "@chakra-ui/react";
import { FaPiggyBank } from "react-icons/fa";

const Index = () => {
  const [goal, setGoal] = useState("");
  const [savings, setSavings] = useState("");
  const [totalSavings, setTotalSavings] = useState(0);
  const [goalAmount, setGoalAmount] = useState(0);

  const handleGoalChange = (event) => setGoal(event.target.value);
  const handleSavingsChange = (event) => setSavings(event.target.value);

  const handleSetGoal = () => {
    setGoalAmount(parseFloat(goal));
    setGoal("");
  };

  const handleAddSavings = () => {
    setTotalSavings(totalSavings + parseFloat(savings));
    setSavings("");
  };

  const progressPercentage = goalAmount > 0 ? (totalSavings / goalAmount) * 100 : 0;

  return (
    <Container maxW="container.md" py={8}>
      <VStack spacing={8}>
        <Heading as="h1" size="xl">
          Savings Tracker <FaPiggyBank />
        </Heading>

        <Box w="100%">
          <FormControl id="goal" isRequired>
            <FormLabel>Set your savings goal</FormLabel>
            <Flex>
              <Input placeholder="Enter goal amount" type="number" value={goal} onChange={handleGoalChange} mr={2} />
              <Button colorScheme="teal" onClick={handleSetGoal}>
                Set Goal
              </Button>
            </Flex>
          </FormControl>
        </Box>

        <Box w="100%">
          <FormControl id="savings" isRequired>
            <FormLabel>Add to savings</FormLabel>
            <Flex>
              <Input placeholder="Enter amount to save" type="number" value={savings} onChange={handleSavingsChange} mr={2} />
              <Button colorScheme="green" onClick={handleAddSavings}>
                Add Savings
              </Button>
            </Flex>
          </FormControl>
        </Box>

        <Box w="100%">
          <Text fontSize="lg">Goal: ${goalAmount.toFixed(2)}</Text>
          <Text fontSize="lg">Saved: ${totalSavings.toFixed(2)}</Text>
          <Progress colorScheme="green" size="lg" value={progressPercentage} />
        </Box>

        {progressPercentage >= 100 && (
          <Stack spacing={4} w="100%" alignItems="center">
            <Text fontSize="2xl" color="green.500">
              Congratulations! 🎉
            </Text>
            <Text>You have reached your savings goal!</Text>
          </Stack>
        )}
      </VStack>
    </Container>
  );
};

export default Index;

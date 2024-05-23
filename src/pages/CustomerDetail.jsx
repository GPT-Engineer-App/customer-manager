import { useParams } from "react-router-dom";
import { Container, VStack, Heading, Text, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const customers = [
  { id: 1, name: "John Doe", email: "john@example.com", phone: "123-456-7890" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", phone: "987-654-3210" },
  { id: 3, name: "Alice Johnson", email: "alice@example.com", phone: "555-555-5555" },
];

const CustomerDetail = () => {
  const { id } = useParams();
  const customer = customers.find((customer) => customer.id === parseInt(id));

  if (!customer) {
    return (
      <Container centerContent maxW="container.md" py={8}>
        <VStack spacing={4}>
          <Heading as="h2" size="xl">
            Customer Not Found
          </Heading>
          <Button as={RouterLink} to="/customers" colorScheme="teal">
            Back to Customer List
          </Button>
        </VStack>
      </Container>
    );
  }

  return (
    <Container centerContent maxW="container.md" py={8}>
      <VStack spacing={4}>
        <Heading as="h2" size="xl">
          Customer Detail
        </Heading>
        <Text fontSize="lg">
          <strong>Name:</strong> {customer.name}
        </Text>
        <Text fontSize="lg">
          <strong>Email:</strong> {customer.email}
        </Text>
        <Text fontSize="lg">
          <strong>Phone:</strong> {customer.phone}
        </Text>
        <Button as={RouterLink} to="/customers" colorScheme="teal">
          Back to Customer List
        </Button>
      </VStack>
    </Container>
  );
};

export default CustomerDetail;

import { Container, VStack, Heading, List, ListItem, ListIcon, Link } from "@chakra-ui/react";
import { FaUser } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";

const customers = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Smith" },
  { id: 3, name: "Alice Johnson" },
];

const CustomerList = () => {
  return (
    <Container centerContent maxW="container.md" py={8}>
      <VStack spacing={4}>
        <Heading as="h2" size="xl">
          Customer List
        </Heading>
        <List spacing={3} width="100%">
          {customers.map((customer) => (
            <ListItem key={customer.id}>
              <Link as={RouterLink} to={`/customer/${customer.id}`} color="teal.500">
                <ListIcon as={FaUser} color="teal.500" />
                {customer.name}
              </Link>
            </ListItem>
          ))}
        </List>
      </VStack>
    </Container>
  );
};

export default CustomerList;

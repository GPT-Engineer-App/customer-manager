import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Container, VStack, Button, Heading } from "@chakra-ui/react";
import { FaList, FaUser } from "react-icons/fa";
import CustomerList from "./CustomerList";
import CustomerDetail from "./CustomerDetail";

const Index = () => {
  return (
    <Router>
      <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <VStack spacing={4}>
          <Heading as="h1" size="2xl">
            Customer Management System
          </Heading>
          <Button as={Link} to="/customers" leftIcon={<FaList />} colorScheme="teal" size="lg">
            View Customers
          </Button>
          <Button as={Link} to="/customer/1" leftIcon={<FaUser />} colorScheme="teal" size="lg">
            View Customer Detail
          </Button>
        </VStack>
      </Container>
      <Routes>
        <Route path="/customers" element={<CustomerList />} />
        <Route path="/customer/:id" element={<CustomerDetail />} />
      </Routes>
    </Router>
  );
};

export default Index;

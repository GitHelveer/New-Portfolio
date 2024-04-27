import { Card, CardBody, CardFooter, Divider, Image, Stack, Heading, Text, Button, HStack } from "@chakra-ui/react";
import "./Card.css";
import bruchetta from "./bruchetta.jpg";
import macaroni from "./Macaroni.jpg";
import salad from "./greek salad.jpg";

function Cardcomp() {
  return (
    <div className="Cardcontainer1">
      <Card className="cardcard" maxW="sm" transition="all 0.3s" _hover={{ boxShadow: "lg", transform: "scale(1.05)" }}>
        <CardBody className="CardBody">
          <Image src={bruchetta} alt="Green double couch with wooden legs" borderRadius="lg" />
          <Stack mt="6" spacing="4">
            <HStack justifyContent="space-between" alignItems="center">
              <Heading className="smaller-heading" mb="0">Greek Salad</Heading>
              <Text className="Cardcontainer1text" color="blue.600" fontSize="2xl">
                $45
              </Text>
            </HStack>
            <Text className="Cardcontainer1text" mt="4">
              Lorem ipsum velit sed corper morbi tincidunt ornare massa eget egestas purus viverra accumsan in nisl nisi scelerisque eu ultrices vitae auctor eu augue ut lectus
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter justifyContent="flex-start" mt="4">
          <Button variant="solid" colorScheme="blue">
            Order now
          </Button>
        </CardFooter>
      </Card>

      <div style={{ marginBottom: "20px" }} /> {/* Add space between cards */}

      <Card className="cardcard2" maxW="sm" transition="all 0.3s" _hover={{ boxShadow: "lg", transform: "scale(1.05)" }}>
        <CardBody className="CardBody">
          <Image src={salad} alt="Green double couch with wooden legs" borderRadius="lg" />
          <Stack mt="6" spacing="4">
            <HStack justifyContent="space-between" alignItems="center">
              <Heading className="smaller-heading" mb="0">Brushetta</Heading>
              <Text className="Cardcontainer1text" color="blue.600" fontSize="2xl">
                $35
              </Text>
            </HStack>
            <Text className="Cardcontainer1text" mt="4">
              Lorem ipsum velit sed corper morbi tincidunt ornare massa eget egestas purus viverra accumsan in nisl nisi scelerisque eu ultrices vitae auctor eu augue ut lectus
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter justifyContent="flex-start" mt="4">
          <Button variant="solid" colorScheme="blue">
            Order now
          </Button>
        </CardFooter>
      </Card>

      <div style={{ marginBottom: "20px" }} /> {/* Add space between cards */}

      <Card className="cardcard3" maxW="sm" transition="all 0.3s" _hover={{ boxShadow: "lg", transform: "scale(1.05)" }}>
        <CardBody className="CardBody">
          <Image src={macaroni} alt="Green double couch with wooden legs" borderRadius="lg" />
          <Stack mt="6" spacing="4">
            <HStack justifyContent="space-between" alignItems="center">
              <Heading className="smaller-heading" mb="0">Macaroni</Heading>
              <Text className="Cardcontainer1text" color="blue.600" fontSize="2xl">
                $20
              </Text>
            </HStack>
            <Text className="Cardcontainer1text" mt="4">
              Lorem ipsum velit sed corper morbi tincidunt ornare massa eget egestas purus viverra accumsan in nisl nisi scelerisque eu ultrices vitae auctor eu augue ut lectus
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter justifyContent="flex-start" mt="4">
          <Button variant="solid" colorScheme="blue">
            Order now
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default Cardcomp;
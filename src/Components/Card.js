import { Card, CardBody, CardFooter, Divider, Image, Stack, Heading, Text, Button, HStack } from "@chakra-ui/react";
import "./Card.css";
import bruchetta from "./bruchetta.jpg";
import macaroni from "./Macaroni.jpg";
import salad from "./greek salad.jpg";

function Cardcomp() {
  return (
    <div className="Cardcontainer1">
      <Card className="cardcard" maxW="sm">
        <CardBody className="CardBody">
          <Image src={bruchetta} alt="Green double couch with wooden legs" borderRadius="lg" />
          <Stack mt="6" spacing="4">
            <HStack justifyContent="space-between" alignItems="center">
              <Heading className="smaller-heading" mb="0">{`Living room Sofa`}</Heading>
              <Text className="Cardcontainer1text" color="blue.600" fontSize="2xl">
                $450
              </Text>
            </HStack>
            <Text className="Cardcontainer1text" mt="4">
              This sofa is perfect for modern tropical spaces, baroque inspired spaces, earthy toned spaces, and for
              people who love a chic design with a sprinkle of vintage design.
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter justifyContent="flex-start" mt="4">
          <Button variant="solid" colorScheme="blue">
            Buy now
          </Button>
        </CardFooter>
      </Card>

      <div style={{ marginBottom: "20px" }} /> {/* Add space between cards */}

      <Card className="cardcard2" maxW="sm">
        <CardBody className="CardBody">
          <Image src={salad} alt="Green double couch with wooden legs" borderRadius="lg" />
          <Stack mt="6" spacing="4">
            <HStack justifyContent="space-between" alignItems="center">
              <Heading className="smaller-heading" mb="0">{`Living room Sofa`}</Heading>
              <Text className="Cardcontainer1text" color="blue.600" fontSize="2xl">
                $450
              </Text>
            </HStack>
            <Text className="Cardcontainer1text" mt="4">
              This sofa is perfect for modern tropical spaces, baroque inspired spaces, earthy toned spaces, and for
              people who love a chic design with a sprinkle of vintage design.
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter justifyContent="flex-start" mt="4">
          <Button variant="solid" colorScheme="blue">
            Buy now
          </Button>
        </CardFooter>
      </Card>

      <div style={{ marginBottom: "20px" }} /> {/* Add space between cards */}

      <Card className="cardcard3" maxW="sm">
        <CardBody className="CardBody">
          <Image src={macaroni} alt="Green double couch with wooden legs" borderRadius="lg" />
          <Stack mt="6" spacing="4">
            <HStack justifyContent="space-between" alignItems="center">
              <Heading className="smaller-heading" mb="0">{`Living room Sofa`}</Heading>
              <Text className="Cardcontainer1text" color="blue.600" fontSize="2xl">
                $450
              </Text>
            </HStack>
            <Text className="Cardcontainer1text" mt="4">
              This sofa is perfect for modern tropical spaces, baroque inspired spaces, earthy toned spaces, and for
              people who love a chic design with a sprinkle of vintage design.
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter justifyContent="flex-start" mt="4">
          <Button variant="solid" colorScheme="blue">
            Buy now
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default Cardcomp;
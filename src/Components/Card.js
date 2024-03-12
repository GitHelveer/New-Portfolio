import { Card, CardBody, CardFooter, Divider, Image, Stack, Heading, Text, ButtonGroup, Button } from "@chakra-ui/react";
import "./Card.css"
import bruchetta from "./bruchetta.jpg"
import macaroni from "./Macaroni.jpg"
import salad from "./greek salad.jpg"
function Cardcomp() {
    return (
        <article className="Cardcontainer">
<section>
<Card maxW='sm'>
  <CardBody>
    <Image
      src={bruchetta}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Living room Sofa</Heading>
      <Text>
        This sofa is perfect for modern tropical spaces, baroque inspired
        spaces, earthy toned spaces and for people who love a chic design with a
        sprinkle of vintage design.
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        $450
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
        </section>
        <section>
        <Card maxW='sm'>
          <CardBody>
            <Image
              src={salad}
              alt='Green double couch with wooden legs'
              borderRadius='lg'
            />
            <Stack mt='6' spacing='3'>
              <Heading size='md'>Living room Sofa</Heading>
              <Text>
                This sofa is perfect for modern tropical spaces, baroque inspired
                spaces, earthy toned spaces and for people who love a chic design with a
                sprinkle of vintage design.
              </Text>
              <Text color='blue.600' fontSize='2xl'>
                $450
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing='2'>
              <Button variant='solid' colorScheme='blue'>
                Buy now
              </Button>
              <Button variant='ghost' colorScheme='blue'>
                Add to cart
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
                </section>
                <section>
                <Card maxW='sm'>
                  <CardBody>
                    <Image
                      src={macaroni}
                      alt='Green double couch with wooden legs'
                      borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                      <Heading size='md'>Living room Sofa</Heading>
                      <Text>
                        This sofa is perfect for modern tropical spaces, baroque inspired
                        spaces, earthy toned spaces and for people who love a chic design with a
                        sprinkle of vintage design.
                      </Text>
                      <Text color='blue.600' fontSize='2xl'>
                        $450
                      </Text>
                    </Stack>
                  </CardBody>
                  <Divider />
                  <CardFooter>
                    <ButtonGroup spacing='2'>
                      <Button variant='solid' colorScheme='blue'>
                        Buy now
                      </Button>
                      <Button variant='ghost' colorScheme='blue'>
                        Add to cart
                      </Button>
                    </ButtonGroup>
                  </CardFooter>
                </Card>
                        </section>
        </article>
        

    );
}
export default Cardcomp;
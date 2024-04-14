import {
  Box,
  Divider,
  Flex,
  Heading,
  Icon,
  Text,
  Link,
} from "@chakra-ui/react";
import {
  FaFacebook,
  FaTwitter,
  FaEnvelope,
  FaPinterest,
  FaLinkedin,
} from "react-icons/fa";
import { useLocation } from "react-router-dom";

function Footer() {
  const location = useLocation();

  if (location.pathname === "/admin") {
    return;
  }

  return (
    <>
      <Divider orientation="horizontal" marginy="2rem" borderRadius="full" />
      <Box width="min(80rem,100%)" mx="auto" py={10} color="text" px={4}>
        {/* <Text
          fontFamily={"Kaushan Script"}
          fontSize="2xl"
          fontWeight="bold"
          marginBottom="2rem"
        >
          Home
          <Text display="inline" color="primary.500">
            Chef
          </Text> */}
        {/* </Text> */}
        <div style={{ width: "100px", objectFit: "cover" }}>
          <img src="./images/LOGO.jpg" alt="" />
        </div>
        <Flex wrap={"wrap"} gap={4} justifyContent="space-between">
          <Box>
            <Heading as="h6" size="MD" marginBottom="16px">
              <a href="#"> ABOUT NCG</a>
            </Heading>
            <Text>
              <Link to="#">Shop</Link>
            </Text>
            <Text>
              <Link to="#">About</Link>
            </Text>
            <Text>
              <Link to="#">Work with me</Link>
            </Text>
            <Text>
              <Link to="#">Contact</Link>
            </Text>
          </Box>
          <Box p={0} mr={4}>
            <Heading as="h6" size="MD" marginBottom="16px">
              EXPLORE
            </Heading>
            <Text>
              <Link to="#">Recipes</Link>
            </Text>
            <Text>
              <Link to="#">Fitness</Link>
            </Text>
            <Text>
              <Link to="#">Healthy living</Link>
            </Text>
            <Text>
              <Link to="#">Blogs</Link>
            </Text>
          </Box>
          <Box>
            <Heading as="h6" size="md" marginBottom="16px">
              Connect
            </Heading>
            <Flex alignItems="center">
              <Link href="https://www.facebook.com/" target="_blank">
                <Icon
                  as={FaFacebook}
                  boxSize={6}
                  marginRight="16px"
                  transition="0.2s ease-in"
                  _hover={{ color: "green" }}
                />
              </Link>
              <Link href="https://twitter.com/?lang=en" target="_blank">
                <Icon
                  as={FaTwitter}
                  transition="0.2s ease-in"
                  _hover={{ color: "green" }}
                  boxSize={6}
                  marginRight="16px"
                />
              </Link>
              <Link href="https://gmail.com/" target="_blank">
                <Icon
                  as={FaEnvelope}
                  transition="0.2s ease-in"
                  _hover={{ color: "green" }}
                  boxSize={6}
                  marginRight="16px"
                />
              </Link>
              <Link href="https://pintrest.com/" target="_blank">
                <Icon
                  as={FaPinterest}
                  transition="0.2s ease-in"
                  _hover={{ color: "green" }}
                  boxSize={6}
                  marginRight="16px"
                />
              </Link>
              <Link href="https://linkedin.com/" target="_blank">
                <Icon
                  as={FaLinkedin}
                  transition="0.2s ease-in"
                  _hover={{ color: "green" }}
                  boxSize={6}
                  marginRight="16px"
                />
              </Link>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </>
  );
}

export default Footer;

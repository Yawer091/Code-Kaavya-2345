import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Button,
  Divider,
  Flex,
  Grid,
  Heading,
  SimpleGrid,
  Text,
  useToast,
} from "@chakra-ui/react";
import styled from "styled-components";
import { getUserData, getUserRecipes } from "../redux/authReducer/actions";
import { Homecard } from "../components/home/HomeCard";
import InfoCard from "../components/home/Card";
import { RecipeCard } from "../components/home/RecipeCard";
import ImageGrid from "../components/home/ImageGrid";
import { Reveal } from "../components/common/Reveal";
import { useNavigate } from "react-router-dom";
const recipes = [
  {
    name: "Edli Samber",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHoHKkZwaE0Ej3QbVj1iDV8AQgJ7Z4T0fgAt-RGvlVK7D0n6F0Ngb-Fwf_VkmPsReGVuc&usqp=CAU",
  },
  {
    name: "Egg Curry",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmjrILK9SmfN8f5oK-uSuiTpxwFoFTScteZQ&usqp=CAU",
  },
  {
    name: "Mix Salad",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh2Up6qjroQS3llSnG__hO4lD_8ViMIfYEWGjEIrk76zk0p9VHK6-UPWNjk9ZBUKcDEpc&usqp=CAU",
  },
  {
    name: "Samosas",
    image:
      "data:image/jpeg;base64,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",
  },
  {
    name: "Kadhai Paneer",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR1LIM87XJaOuu2NCAPyuZbwRNkqBkHTDooVV2x_jxzOs-UthZJvOegFH5VoX6uK_TmAs&usqp=CAU",
  },
  {
    name: "Mix Vegitable Curry",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsRX2Z8V9VgdmFoG_RpMROfFSze1Ie8hIY6YEbWAIXCR2jB3JEgHKv9QGDQB8yUitpevw&usqp=CAU",
  },
];
let imageUrls = [
  "https://dev-to-uploads.s3.amazonaws.com/uploads/articles/okl0xaxft6552fjjtz2v.jpg",
  "https://dev-to-uploads.s3.amazonaws.com/uploads/articles/tont20fs91ztyywbv1w3.jpg",
  "https://dev-to-uploads.s3.amazonaws.com/uploads/articles/58q9ssssox2malve6cey.jpg",
  "https://dev-to-uploads.s3.amazonaws.com/uploads/articles/jep6d8153aqns3lmxkzz.jpg",
];
export const Home = () => {
  const dispatch = useDispatch();
  const toast = useToast();
  const token = localStorage.getItem("token") || "";
  const user = useSelector((store) => store.authReducer.loggedInUser);

  useEffect(() => {
    if (!user && token) {
      dispatch(getUserData(token, toast));
    }
  }, []);

  const [screenSize, setScreenSize] = useState(getScreenSize());

  function getScreenSize() {
    return window.innerWidth > 768
      ? "lg"
      : window.innerWidth > 480
      ? "md"
      : "base";
  }

  useEffect(() => {
    function handleResize() {
      setScreenSize(getScreenSize());
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const getRecipesToDisplay = () => {
    const recipesToShow = {
      lg: 6,
      md: 2,
      base: 1,
    };
    console.log(screenSize);
    return recipes.slice(0, recipesToShow[screenSize]);
  };

  return (
    <DIV>
      <Reveal>
        <Box className="cover">
          <img
            src="https://media.istockphoto.com/id/922783734/photo/assorted-indian-recipes-food-various.jpg?s=612x612&w=0&k=20&c=p8DepvymWfC5j7c6En2UsQ6sUM794SQMwceeBW3yQ9M="
            alt="Hero Background"
          />
          <div className="hero-content" style={{ paddingInline: "1rem" }}>
            <Heading
              as="h1"
              fontSize={{ lg: "3rem", md: "2.5rem", base: "2rem" }}
              fontWeight={{ lg: "800", md: "700", base: "600" }}
              textTransform="uppercase"
              textAlign="center"
              marginTop="2rem"
              noOfLines={2}
              mb="1rem"
              textShadow="3px 3px 4px white"
            >
              Healthy Cooking Recipes <br />
              and the right Nutrition.
            </Heading>
            <Text textAlign="center" mb="2rem">
              Find your new favorite meal with meal kits starting at{" "}
              <span style={{ fontWeight: "500" }}>$7.99</span> per serving
            </Text>
            <Button>MORE RECIPES</Button>
            <Grid
              mt="3rem"
              width={{ xl: "100%", lg: "80%", md: "60%", base: "60%" }}
              templateColumns={{
                lg: "repeat(3, 1fr)",
                md: "repeat(2,1fr)",
                base: "1fr",
              }}
              mx={{ base: "auto" }}
              justifyContent="center"
              alignItems={"center"}
              gap={{ lg: "3rem", md: "2rem", base: "1rem" }}
            >
              {getRecipesToDisplay().map((el, i) => {
                return (
                  <Reveal key={i} delay={1 + (i + 1) * 0.25}>
                    <Homecard {...el} />
                  </Reveal>
                );
              })}
            </Grid>
          </div>
        </Box>
      </Reveal>
      <Box py={{ lg: 20, md: 16, base: 10 }}>
        <Reveal>
          <InfoCard
            img={
              "data:image/jpeg;base64,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"
            }
            title={"HEALTHY AND QUALITY WITH A NEW FEEL"}
            direction={"row"}
            screenSize={screenSize}
            mb={"15rem"}
          />
        </Reveal>
        <Reveal>
          <InfoCard
            img={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnmtLHsz_1_msOjAdfnJesbyHdKoZRPNzRdQ&usqp=CAU"
            }
            screenSize={screenSize}
            title={"TASTE THE FUTURE OF GOOD FOOD"}
            direction={"row-reverse"}
          />
        </Reveal>
      </Box>
      <Reveal>
        <Box textAlign="center" py={{ lg: 20, md: 16, base: 10 }}>
          <Heading
            fontFamily={"Kaushan Script, sans-serif"}
            size={{ lg: "lg", md: "md", base: "sm" }}
            color="primary.500"
            mb="0.5rem"
          >
            More
          </Heading>
          <Heading
            fontWeight="800"
            lineHeight={1.15}
            mb="1rem"
            noOfLines={2}
            color="text"
            maxW="500px"
            mx="auto"
            size={{ lg: "xl", md: "lg", base: "md" }}
          >
            {" "}
            MOST POPULAR ITEM{" "}
          </Heading>
          <Text mb={"2rem"}>
            {" "}
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br />
            Odit id et est eveniet officiis.{" "}
          </Text>
          <Button mb={"4rem"}>Explore More</Button>
          <SimpleGrid
            columns={{ lg: 4, md: 2, base: 1 }}
            spacing={4}
            width="min(80rem,100%)"
            mx="auto"
            px={{ lg: 4, base: 8 }}
          >
            {imageUrls.map((el, i) => {
              return <RecipeCard key={i} img={el} />;
            })}
          </SimpleGrid>
        </Box>
      </Reveal>
      <Reveal>
        <Flex
          mx="auto"
          direction={{ lg: "row", md: "row", base: "column" }}
          paddingBlock={{ lg: "8rem 10rem", md: "5rem", base: "4rem" }}
          px={4}
          width="min(80rem,100%)"
          alignItems="center"
          justifyContent={"space-between"}
          gap="2rem"
        >
          <ImageGrid />
          <Box
            width={{ lg: "50%", base: "100%" }}
            textAlign={{ lg: "right", base: "center" }}
          >
            <Heading
              fontFamily={"Kaushan Script, sans-serif"}
              size={{ lg: "lg", md: "md", base: "sm" }}
              color="primary.500"
              mb="0.5rem"
            >
              About
            </Heading>
            <Heading
              fontWeight="800"
              lineHeight={1.15}
              mb="1rem"
              noOfLines={{ lg: 2 }}
              color="text"
              maxW={{ lg: "500px" }}
              ml="auto"
              size={{ lg: "xl", md: "lg", base: "md" }}
            >
              THAT'S WHAT OUR <br /> SAY CLIENT
            </Heading>
            <Text mb="2rem">
              This dish combines fresh, high-quality ingredients to create a
              wholesome and nutritious meal that your body will thank you for.
              With a unique twist and a burst of exciting flavors, it's the
              perfect choice for a healthy and satisfying dining experience. Get
              ready to impress your family and friends with this remarkable
              recipe.
            </Text>
            <Button>Explore More</Button>
          </Box>
        </Flex>
      </Reveal>
    </DIV>
  );
};

const DIV = styled.div`
  .cover {
    width: 100%;
    height: 90vh;
    text-align: center;
    position: relative;
    overflow: hidden;
    img {
      width: 100%;
      object-fit: cover;
      object-position: top;
    }
    .hero-content {
      position: absolute;
      width: min(80rem, 100%);
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 11;
    }
    &::before {
      content: "";
      position: absolute;
      inset: 0;
      background-color: #fff4;
      z-index: 1;
    }
  }
  @media screen and (max-width: 768px) {
    .cover {
      height: 70vh;
      img {
        width: 100%;
        min-height: 100%;
      }
    }
  }
`;

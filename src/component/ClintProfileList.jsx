import {
  Box,
  Center,
  Avatar,
  Stack,
  Heading,
  Button,
  Text,
  Flex,
  InputGroup,
  Input,
  InputRightElement,
  IconButton,
  Icon,
  Select,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getprofile } from "../Redux/Profile/action";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";


const ClintProfileList = () => {
  const [searchValue, setSearchValue] = useState("");
  const profile = useSelector((state) => state.Profilereducer.profile);
  const loading = useSelector((state) => state.Profilereducer.isLoading);


  const dispatch = useDispatch();

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
    // Perform search-related actions here if needed
  };

  const handleSearch = () => {
    // Perform search action with the searchValue
    console.log("Searching for:", searchValue);
  };

  const [filterValue, setFilterValue] = useState("");

  const handleFilterChange = (e) => {
    setFilterValue(e.target.value);
  };


  useEffect(() => {
    dispatch(getprofile( searchValue ,filterValue ));
  }, [dispatch,  searchValue , filterValue]);



  return (
    <Box w="full" p={5}>
      <Heading>Client Page</Heading>
      <Box w="50%" m="auto" mt="5">
        <InputGroup>
          <Input
            type="text"
            placeholder="Search..."
            value={searchValue}
            onChange={handleSearchChange}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
          />
          <InputRightElement width="3rem">
            <IconButton
              aria-label="Search"
              h="1.75rem"
              size="sm"
              onClick={handleSearch}
              icon={<Icon as={FaSearch} />}
            />
          </InputRightElement>
        </InputGroup>
        <Box p={4} boxShadow="base" rounded="md">
      <Stack spacing={4} direction="row">
        <Select   value={filterValue}
          onChange={handleFilterChange}>
          {/* Your filter options */}
           <option value="">Select Filter By UserName</option>
          <option value="Bret">Bret</option>
          <option value="Antonette">Antonette</option>
          <option value="Samantha">Samantha</option>
          <option value="Karianne">Karianne</option>
          <option value="Kamren">Kamren</option>
          <option value="Leopoldo_Corkery">Leopoldo_Corkery</option>
          <option value="Elwyn.Skiles">Elwyn.Skiles</option>
          <option value="Maxime_Nienow">Maxime_Nienow</option>
          <option value="Delphine">Delphine</option>
          <option value="Moriah.Stanton">Moriah.Stanton</option>
        </Select>

  

      
      </Stack>
    </Box>
      </Box>

      

      {loading ? (
        <Center mt="2">
          <Heading>Loading...</Heading>
        </Center>
      ) : (<Flex
        mt="5"
        justifyContent="center"
        w="100%"
        h="100%"
        wrap="wrap"
        gap="10"
      >
        {profile.length > 0 &&
          profile.map((el) => (
            <Center key={el.id} py={6}   _hover={{
                transform: "scale(1.05)",
                transition: "transform, 0.5s",
              }}>
              <Box
                maxW={"320px"}
                w={"full"}
                boxShadow={"2xl"}
                rounded={"lg"}
                p={6}
                textAlign={"center"}
              >
                <Avatar
                  size={"xl"}
                  src={
                    "https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                  }
                  mb={4}
                  pos={"relative"}
                  _after={{
                    content: '""',
                    w: 4,
                    h: 4,
                    bg: "green.300",
                    border: "2px solid white",
                    rounded: "full",
                    pos: "absolute",
                    bottom: 0,
                    right: 3,
                  }}
                />
                <Heading fontSize={"2xl"} fontFamily={"body"}>
                  {el.name}
                </Heading>
                <Text fontWeight={600} color={"gray.500"} mb={4}>
                  UserName: @{el.username}
                </Text>
                <Text fontWeight={600} color={"gray.500"} mb={4}>
                  Email:{el.email}
                </Text>

                <Text
                  textAlign={"center"}
                  fontWeight={600}
                  color={"gray.500"}
                  mb={4}
                >
                  Phone: {el.phone}
                </Text>

                <Text
                  textAlign={"center"}
                  fontWeight={600}
                  color={"gray.500"}
                  mb={4}
                >
                  {" "}
                  Website:
                  <a href="hildegard.org" target="_blank" color={"blue.400"}>
                    {" "}
                    {el.website}
                  </a>
                </Text>

                <Link to={`/singlepage/${el.id}`}>
                  <Stack mt={8} direction={"row"} spacing={4}>
                    <Button
                      flex={1}
                      fontSize={"sm"}
                      rounded={"full"}
                      bg={"blue.400"}
                      color={"white"}
                      boxShadow={
                        "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                      }
                      _hover={{
                        bg: "blue.500",
                      }}
                      _focus={{
                        bg: "blue.500",
                      }}
                    >
                      View More Deatils
                    </Button>
                  </Stack>
                </Link>
              </Box>
            </Center>
          ))}
      </Flex>)}

      
    </Box>
  );
};

export default ClintProfileList;

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getprofile } from '../Redux/Profile/action';
import { Link, useParams } from 'react-router-dom';
import { Box,  Center, Avatar,Stack, Heading, useColorModeValue, Button, Text, Flex, Modal, ModalOverlay, ModalContent,  ModalCloseButton, ModalBody, useDisclosure, Image,  AlertDialog, AlertDialogOverlay, AlertDialogContent, AlertDialogHeader, AlertDialogCloseButton, AlertDialogBody } from '@chakra-ui/react'

const SingleProfileList = () => {

    const profile  = useSelector((state)=> state.Profilereducer.profile)
   const [clint , setClint] = useState([])
    const dispatch = useDispatch();
    const { id } = useParams();
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { isOpen :isfade , onOpen :onfade, onClose :onfades } = useDisclosure()
    const cancelRef = React.useRef()


    useEffect(()=>{
        dispatch(getprofile())
      },[dispatch])

      useEffect(() => {
        const filteredProfile = profile.find((item) => item.id.toString() === id);
        if (filteredProfile) {
           const newProduct = []
           newProduct.push(filteredProfile)
            setClint(newProduct)
        }
    }, [id, profile]);

    
  return (
    <Box w="full"   p={5}>
    <Heading>Client Page</Heading>
<Flex mt="5"  justifyContent="center" w="100%" h="100%" wrap="wrap" gap="10" >
    {clint.length >0 && clint.map((el)=>(
    <Center key={el.id} py={6}>
  <Box
    maxW={'320px'}
    w={'full'}
    
    boxShadow={'2xl'}
    rounded={'lg'}
    p={6}
    textAlign={'center'}>
    <Avatar
      size={'xl'}
      src={
        'https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
      }
      mb={4}
      pos={'relative'}
      _after={{
        content: '""',
        w: 4,
        h: 4,
        bg: 'green.300',
        border: '2px solid white',
        rounded: 'full',
        pos: 'absolute',
        bottom: 0,
        right: 3,
      }}
    />
    <Heading fontSize={'2xl'} fontFamily={'body'}>
      {el.name}
    </Heading>
    <Text fontWeight={600} color={'gray.500'} mb={4}>
    UserName:  @{el.username}
    </Text>
    <Text  fontWeight={600} color={'gray.500'} mb={4}>
      Email:{el.email}
    </Text>
  
   <Text
      textAlign={'center'}
      fontWeight={600} color={'gray.500'} mb={4}>
     Phone: {el.phone}
   
    </Text>

    <Text  textAlign={'center'}
      fontWeight={600} color={'gray.500'} mb={4}> Website:
<a href='hildegard.org' target='_blank' color={'blue.400'}> {el.website}</a>
    </Text>
    <Stack mt={8} direction={'row'} spacing={4}>
          <Button 
          onClick={onOpen}
            flex={1}
            fontSize={'sm'}
            rounded={'full'}
            _focus={{
              bg: 'gray.200',
            }}>
            Address
          </Button>
          <Modal isOpen={isOpen} size={"xl"} onClose={onClose}>
        <ModalOverlay />
        <ModalContent  >
         
          <ModalCloseButton />
          <ModalBody>
          <Center py={6}>
      <Stack
       
        borderRadius="lg"
        w={{ sm: '100%', md: '540px' }}
        height={{ sm: '476px', md: '20rem' }}
        direction={{ base: 'column', md: 'row' }}
        // eslint-disable-next-line react-hooks/rules-of-hooks
        bg={useColorModeValue('white', 'gray.900')}
       
        padding={4}>
        <Flex flex={1} bg="blue.200">
          <Image
            objectFit="cover"
            boxSize="100%"
            src={
              'https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
            }
            alt="#"
          />
        </Flex>
        <Stack
          flex={1}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          p={1}
          pt={2}>
          <Heading fontSize={'2xl'} fontFamily={'body'}>
            Address
          </Heading>
          <Text mt={2} fontWeight={600} color={'gray.500'} size="sm" mb={4}>
            City : {el.address.city}
          </Text>
          <Text fontWeight={600} color={'gray.500'} size="sm" mb={4}>
          Suite : {el.address.suite}
          </Text>
          <Text fontWeight={600} color={'gray.500'} size="sm" mb={4}>
          Street : {el.address.street}
          </Text>
          <Text fontWeight={600} color={'gray.500'} size="sm" mb={4}>
            ZipCode : {el.address.zipcode}
          </Text>
      
         

        
        </Stack>
      </Stack>
    </Center>
          </ModalBody>

          
        </ModalContent>
      </Modal>
          <Button
        onClick={onfade}
            flex={1}
            fontSize={'sm'}
            rounded={'full'}
            bg={'blue.400'}
            color={'white'}
            boxShadow={
              '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
            }
            _hover={{
              bg: 'blue.500',
            }}
            _focus={{
              bg: 'blue.500',
            }}>
            Company
          </Button>
          <AlertDialog
        motionPreset='slideInBottom'
        leastDestructiveRef={cancelRef}
        onClose={onfades}
        isOpen={isfade}
        isCentered
      >
        <AlertDialogOverlay />

        <AlertDialogContent>
          <AlertDialogHeader>Company Details</AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogBody>
          <Text mt={2} fontWeight={600} color={'gray.500'} size="sm" mb={4}>
            Company Name : {el.company.name}
          </Text>
          <Text fontWeight={600} color={'gray.500'} size="sm" mb={4}>
          Catch Phrase : {el.company.catchPhrase}
          </Text>
          <Text fontWeight={600} color={'gray.500'} size="sm" mb={4}>
          BS : {el.company.bs}
          </Text>
        
          </AlertDialogBody>
       
        </AlertDialogContent>
      </AlertDialog>
        </Stack>

  </Box>
</Center>))}



</Flex>
   <Link to="/">
    <Button colorScheme='red'>Home</Button>
   </Link>
  
</Box>
  )
}

export default SingleProfileList
import { 
    Flex, 
    IconButton, 
    Tooltip, 
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverBody,
    Text,
    Box,
    Stack,
    HStack,
    Input,
    InputGroup,
    InputRightAddon
  } from "@chakra-ui/react";
  import { 
    BellIcon,
    CloseIcon,
    Search2Icon
  } from "@chakra-ui/icons";
  import { 
    FaThumbtack,
    FaEllipsisV,
    FaArchive 
  } from 'react-icons/fa';

const Search = ({
    filterSearch,
    buttonStyle,
    textStyle,
    stackStyle,
    toggle,
    pin,
    archive,
    toggleDelete,
    iconStyle,
    listStyle,
    onOpen,
    showModal,
    searchInput,
    setSearchInput,
    filterNote,
    setFilterSearch
}) => {
    const searchModal = {
        w: '100%',
        minH: '100vh',
        flexDir: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        position: 'fixed',
        gap: '20px',
        top: 0,
        left: 0,
        bg: 'rgba(50, 50, 50, 0.9)',
        color: '#fff',
        pt: '100px',
        zIndex: '100'
    }

  return filterSearch.length > 0 ? (
    <Box 
        sx={searchModal}
        display= {showModal ? 'flex' : 'none'}
    >
        <Flex display= {['flex', null, null, null, 'none']}>
            <InputGroup sx={{
            w: ['300px', null, null, null, '320px', '500px']
            }}>
            <Input 
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)} 
                onKeyUp={() => filterNote()}
                type={'text'} 
                variant={'outline'} 
            />
                <InputRightAddon
                onClick={() => {
                    setSearchInput('')
                    setFilterSearch('')
                }}
                sx={{
                    bg: '#fff',
                    color: '#000'
                }}
                children={ searchInput === '' ? <Search2Icon /> : <CloseIcon />} 
                cursor={'pointer'} 
                />
            </InputGroup>
        </Flex>

        {
        filterSearch.map(filter => (
          <Stack
              sx={stackStyle}
              m={'10px 0'}
              w={'300px'}
            >
              <Box>
                  <Flex sx={{
                      justifyContent: 'space-between',
                      alignItems: 'center'
                  }}>
                      <Text sx={{
                          pl: '10px'
                      }}>{filter.title}</Text>
  
                      <Tooltip label={filter.pin ? 'Unpin Note' : 'Pin Note'}>
                          <IconButton
                              onClick={() => {
                                  pin(filter.id)
                              }} 
                              icon={<FaThumbtack />}
                              sx={buttonStyle}
                              borderRadius={'100%'} 
                          />
                      </Tooltip>
                  </Flex>
  
                  <Box sx={textStyle}>{filter.body}</Box>
                  <Flex>
                {
                    filter.label !== '' ? (
                        <Flex sx={{
                            minW: '60px',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            bg: '#f0f0f0',
                            color: '#000',
                            borderRadius: '10px',
                            m: '0 10px',
                            p: '4px 7px'
                        }}>
                            <Box 
                                fontSize={'.7rem'}
                                fontWeight={'500'}
                            >{filter.label}</Box>
                        </Flex> 
                    ) : null
                }

                {
                    filter.reminderText !== '' ? (
                        <Flex sx={{
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            bg: '#f0f0f0',
                            color: '#000',
                            borderRadius: '10px',
                            m: '0 10px',
                            p: '4px 7px'
                        }}>
                            <Box 
                                fontSize={'.7rem'}
                                fontWeight={'500'}
                                marginRight={'5px'}
                            >{filter.reminderText}</Box>
                        </Flex>
                    ) : null
                }
            </Flex>
              </Box>
  
              <HStack spacing={[2, null, null, null, 5]}>
                  <Tooltip label='Remind me'>
                      <IconButton onClick={() => toggle(filter.id)} sx={iconStyle} icon={<BellIcon />} />
                  </Tooltip>
                  <Popover>
                      <PopoverTrigger>
                          <IconButton sx={iconStyle} icon={<FaEllipsisV />} />
                      </PopoverTrigger>
                      <PopoverContent sx={{
                          w: '200px',
                          bg: '#1A202C',
                          color: 'white',
                          listStyleType: 'none',
                          overflow: 'hidden'
                      }}>
                          <PopoverBody 
                              onClick={() => toggleDelete(filter.id)} 
                              sx={listStyle} 
                              cursor={'pointer'}>Delete note
                          </PopoverBody>
                          <PopoverBody 
                              sx={listStyle} 
                              cursor={'pointer'}>
                              <Text onClick={onOpen}>Add Label</Text>
                          </PopoverBody>
                          <PopoverBody sx={listStyle} cursor={'pointer'}>Add Drawing</PopoverBody>
                          <PopoverBody sx={listStyle} cursor={'pointer'}>Show Checkboxes</PopoverBody>
                      </PopoverContent>
                  </Popover>
                  <Tooltip label={filter.archive ? 'Unarchive' : 'Archive'}>
                      <IconButton onClick={() => archive(filter.id)} sx={iconStyle} icon={<FaArchive />} />
                  </Tooltip>
              </HStack>
          </Stack>
        ))
    }
    </Box>
  ) : (
    <Box 
        display= {showModal ? 'flex' : 'none'}
        sx={searchModal}
    >
        <Flex display= {['flex', null, null, null, 'none']}>
            <InputGroup sx={{
                w: ['300px', null, null, null, '320px', '500px']
            }}>
            <Input 
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)} 
                onKeyUp={() => filterNote()}
                type={'text'} 
                variant={'outline'} 
            />
                <InputRightAddon
                onClick={() => filterNote()}
                sx={{
                    bg: '#fff',
                    color: '#000'
                }}
                children={searchInput === '' ? <Search2Icon /> : <CloseIcon />} 
                cursor={'pointer'} 
                />
            </InputGroup>
        </Flex>
        <Text sx={{
            fontSize: '1.2rem'
        }}>Search for note by entering its <span style={{color: '#c5341b'}}>title</span></Text>
    </Box>
  )
}

export default Search
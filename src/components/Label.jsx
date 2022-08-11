import { useRef } from "react";
import { 
    Box,
    Modal,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    Input,
    InputGroup,
    InputLeftAddon,
    InputRightAddon,
    FormControl,
    Button,
    Tooltip
} from "@chakra-ui/react";
import { CheckIcon, SmallCloseIcon, DeleteIcon } from "@chakra-ui/icons";
import { CgTag } from 'react-icons/cg';

const Label = ({ 
    isOpen, 
    onClose,
    modalInput,
    setModalInput,
    modalContent,
    setModalContent,
    handleLabel 
}) => {
    const initialRef = useRef(null);
    const modalStyle = {
        mt: '120px',
        w: '300px'
    }

    const addOnStyle = {
        bg: 'transparent',
        border: 'none',
        cursor: 'pointer'
    }

    const handleAddContent = () => {
        modalInput !== '' && setModalContent([
            ...modalContent,
              {
                  id: Math.floor(Math.random() * 100),
                  text: modalInput
              }
          ]);
          setModalInput('');
    }

  return (
    <Box>
        <Modal 
            initialFocusRef={initialRef} 
            isOpen={isOpen} 
            onClose={onClose}
            motionPreset={'scale'}
        >
            <ModalContent sx={modalStyle}>
                <ModalHeader>Edit Label</ModalHeader>
                <ModalBody>
                    <FormControl>
                        <InputGroup>
                            <Tooltip label='Cancel'>
                                <InputLeftAddon
                                    onClick={() => setModalInput('')}
                                    sx={addOnStyle}
                                    pl={0}
                                    children={<SmallCloseIcon />} 
                                />
                            </Tooltip>
                                <Input 
                                    type={'text'}
                                    ref={initialRef} 
                                    placeholder='Create new label'
                                    variant={'flushed'}
                                    value={modalInput}
                                    onChange={(e) => setModalInput(e.target.value)} 
                                />
                            <Tooltip label='Create label'>
                                <InputRightAddon
                                    onClick={handleAddContent}
                                    sx={addOnStyle}
                                    pr={0}
                                    children={<CheckIcon />} 
                                />
                            </Tooltip>
                        </InputGroup>
                    </FormControl>

                    {modalContent.map(content => (
                        <Box sx={{
                            mt: '10px'
                        }} key={content.id}>
                            <InputGroup>
                                <InputLeftAddon
                                    sx={addOnStyle}
                                    pl={0}
                                    children={<CgTag />} 
                                />
                                    <Input
                                        onClick={() => handleLabel(content)}
                                        type={'text'}
                                        variant={'flushed'}
                                        defaultValue={content.text}
                                        cursor={'pointer'}
                                    />
                                <Tooltip label='Delete label'>
                                    <InputRightAddon
                                        onClick={() => {
                                            setModalContent(modalContent.filter(el => el.id !== content.id))
                                        }}
                                        sx={addOnStyle}
                                        pr={0}
                                        children={<DeleteIcon />} 
                                    />
                                </Tooltip>
                            </InputGroup>
                        </Box>
                    ))}
                </ModalBody>
                <ModalFooter>
                    <Button onClick={onClose}>Done</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    </Box>
  )
}

export default Label
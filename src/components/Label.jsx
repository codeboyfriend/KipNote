import { useRef } from "react";
import { 
    Box,
    Modal,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Input,
    InputGroup,
    InputLeftAddon,
    InputRightAddon,
    FormControl,
    Button
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
    handleLabel,
    labelhandler 
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
                <ModalCloseButton />
                <ModalBody>
                    <FormControl>
                        <InputGroup>
                            <InputLeftAddon
                                onClick={() => setModalInput('')}
                                sx={addOnStyle}
                                pl={0}
                                children={<SmallCloseIcon />} 
                            />
                                <Input 
                                    type={'text'}
                                    ref={initialRef} 
                                    placeholder='Create new label'
                                    variant={'flushed'}
                                    value={modalInput}
                                    onChange={(e) => setModalInput(e.target.value)} 
                                />
                            <InputRightAddon
                                onClick={handleAddContent}
                                sx={addOnStyle}
                                pr={0}
                                children={<CheckIcon />} 
                            />
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
                                <InputRightAddon
                                    onClick={() => {
                                        setModalContent(modalContent.filter(el => el.id !== content.id))
                                    }}
                                    sx={addOnStyle}
                                    pr={0}
                                    children={<DeleteIcon />} 
                                />
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
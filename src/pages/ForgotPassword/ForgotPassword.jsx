import { Box, Button, VStack, Text } from "@chakra-ui/react";
import EmailField from "../../components/userFormComponents/emailField/emailField";
import useForgotPassword from "../../customHooks/useForgotPassword/useForgotPassword";

const ForgotPassword = () => {
    const { register, errors, isSubmitting, onSubmit } = useForgotPassword();

    return (
        <Box as='main' flex='1'>
            <Box
                maxW='sm'
                mx='auto'
                mt={8}
                p={4}
                borderWidth={1}
                borderRadius='lg'
            >
                <VStack as='form' onSubmit={onSubmit} spacing={4}>
                    <Text fontSize='lg' mb={4}>
                        Recuperar Contraseña
                    </Text>

                    <EmailField register={register} error={errors.email} />

                    <Button
                        mt={4}
                        colorScheme='teal'
                        isLoading={isSubmitting}
                        type='submit'
                        spinnerPlacement='end'
                        loadingText='Recuperar contraseña'
                    >
                        Recuperar contraseña
                    </Button>
                </VStack>
            </Box>
        </Box>
    );
};

export default ForgotPassword;

import { Box, VStack, Text, Button } from "@chakra-ui/react";
import UserNameField from "../../components/userFormComponents/userNameField/userNameField";
import EmailField from "../../components/userFormComponents/emailField/emailField";
import PasswordField from "../../components/userFormComponents/passwordField/passwordField";
import ConfirmPasswordField from "../../components/userFormComponents/confirmPasswordField/confirmPasswordField";
import useRegisterForm from "../../customHooks/useRegisterForm/useRegisterForm";

const RegisterForm = () => {
    const {
        handleSubmit,
        formState,
        submit,
        showPassword,
        togglePasswordVisibility,
        handlePasswordChange,
        validatePassword,
        passwordSecurityLevel,
        loading,
        register,
        watch,
    } = useRegisterForm();

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
                <VStack as='form' onSubmit={handleSubmit(submit)} spacing={4}>
                    <Text fontSize='2xl' mb={4}>
                        Comencemos...
                    </Text>
                    <UserNameField
                        register={register}
                        error={formState.errors.userName}
                    />
                    <EmailField
                        register={register}
                        error={formState.errors.email}
                    />
                    <PasswordField
                        register={register}
                        error={formState.errors.password}
                        showPassword={showPassword}
                        togglePasswordVisibility={togglePasswordVisibility}
                        handlePasswordChange={handlePasswordChange}
                        validatePassword={validatePassword}
                        passwordSecurityLevel={passwordSecurityLevel}
                        isRegisterForm={true}
                    />
                    <ConfirmPasswordField
                        register={register}
                        error={formState.errors.confirmPassword}
                        watch={watch}
                    />
                    {formState.errors.server && (
                        <Text color='red.500'>
                            {formState.errors.server.message}
                        </Text>
                    )}
                    <Button
                        type='submit'
                        isDisabled={!formState.isDirty}
                        colorScheme='blue'
                        isLoading={loading}
                        spinnerPlacement='end'
                        loadingText='Registrarse'
                        w={{ base: "100%", md: "160px" }}
                    >
                        Registrarse
                    </Button>
                </VStack>
            </Box>
        </Box>
    );
};

export default RegisterForm;

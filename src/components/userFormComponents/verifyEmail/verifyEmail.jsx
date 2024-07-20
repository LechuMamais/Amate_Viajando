import { VStack, Text, Button, Input } from "@chakra-ui/react";

const VerifyEmail = ({
  verificationToken,
  setVerificationToken,
  formState,
  submitVerificationToken,
  loading,
}) => {
  return (
    <VStack spacing={4}>
      <Text fontSize="2xl" mb={4}>
        Verificación de correo
      </Text>
      <Text>Introduce el código de verificación enviado a tu correo:</Text>
      <Input
        type="text"
        value={verificationToken}
        onChange={(e) => setVerificationToken(e.target.value)}
        maxLength={6}
        placeholder="Código de verificación"
      />
      {formState.errors.verificationToken && (
        <Text color="red.500">{formState.errors.verificationToken.message}</Text>
      )}
      <Button
        onClick={submitVerificationToken}
        colorScheme="blue"
        isLoading={loading}
        spinnerPlacement="end"
        loadingText="Verificar"
        w={{ base: "100%" }}
      >
        Verificar
      </Button>
    </VStack>
  );
};

export default VerifyEmail;

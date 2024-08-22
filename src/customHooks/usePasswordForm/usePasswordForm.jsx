import { useState } from 'react';
import { checkPasswordStrength } from './usePasswordForm.functions';

const usePasswordForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [passwordSecurityLevel, setPasswordSecurityLevel] = useState(0);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handlePasswordChange = (e) => {
        checkPasswordStrength(setPasswordSecurityLevel, e.target.value);
    };

    const validatePassword = () => {
        return passwordSecurityLevel >= 3 || "Nivel mínimo requerido: Alto";
    };

    return {
        showPassword,
        togglePasswordVisibility,
        handlePasswordChange,
        validatePassword,
        passwordSecurityLevel
    };
};

export default usePasswordForm;

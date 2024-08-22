// Esquema de validación de Yup

import * as yup from "yup";

export const YupEmailAndPasswordSchema = yup.object().shape({
  email: yup
    .string()
    .email("Correo electrónico inválido")
    .required("El correo electrónico es obligatorio"),
  password: yup.string().required("La contraseña es obligatoria"),
});

export const YupEmailSchema = yup.object().shape({
  email: yup
    .string()
    .email("Correo electrónico inválido")
    .required("El correo electrónico es obligatorio"),
});


export const YupResetPasswordSchema = yup.object().shape({
  verificationToken: yup
    .string()
    .required("El código de verificación es obligatorio")
    .length(6, "El código de verificación debe tener 6 dígitos"),
  newPassword: yup
    .string()
    .required("La nueva contraseña es obligatoria")
    .min(8, "La contraseña debe tener al menos 8 caracteres")
    .matches(/[A-Z]/, "La contraseña debe tener al menos una letra mayúscula")
    .matches(/[a-z]/, "La contraseña debe tener al menos una letra minúscula")
    .matches(/[0-9]/, "La contraseña debe tener al menos un número"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('newPassword'), null], 'Las contraseñas no coinciden')
    .required("Confirma tu nueva contraseña"),
});

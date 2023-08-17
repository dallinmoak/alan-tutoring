export const translations = {
  applicationTitle: "Servicio de Tutorías Alan", //confirmed
  teacherDashboardTitle: (name) => `Panel de Tutor | ${name}`, //!
  teacherDashboardHeading: "Panel de Tutor", //!
  teacherDashboardGreeting: (email) => `Bienvenido, ${email}`, //!
  upcommingAppointmentsHeading: "Próximas Citas", //!
  clientDashboardTitle: (name) => `Panel de Cliente | ${name}`, //!
  clientDashboardHeading: "Panel de Cliente", //!
  clientDashboardGreeting: (email) => `Bienvenido, ${email}`, //!
  fieldLabels: {
    email: "Correo electrónico", //!
    password: "Contraseña", //!
    newPassword: "Nueva contraseña", //!
    appointmentType: "Tipo", //!
    appointmentClient: "Cliente", //!
    appointmentLocation: "Dirección" //!
  },
  fieldValues: {
    appointmentType: {
      online: "virtual", //!
      "in-person": "en persona",
    },
  },
  buttonlabels:{
    login: "Iniciar sesión", //!
    resetPassword: "Restablecer contraseña", //!
    sendPasswordResetRequest: "Enviar solicitud para restablecer contraseña", //!
    setNewPassword: "Establecer nueva contraseña", //!
    home: "Inicio", //!
    logout: "Cerrar sesión", //!
  },
  messages: {
    loginFailure: (error) => `Contraseña o correo incorrecta. Error de servidor: ${error}`, //!
    resetPasswordSuccess: (address)=> `Si existe una cuenta para ${address}, consulte la bandeja de entrada para restablecer contraseña`, //!
    updatePasswordSuccess: "Contreseña actualizada. Ya está conectado", //!
    updatePasswordFailure: (error) => `Error: ${error}` //!
  }
}
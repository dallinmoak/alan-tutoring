export const translations = {
  applicationTitle: "Servicio de Tutorías Alan", //confirmed
  teacherDashboardTitle: (name) => `Panel del Tutor | ${name}`, //!
  teacherDashboardHeading: "Panel del Tutor", //!
  teacherDashboardGreeting: (email) => `Bienvenido, ${email}`, //!
  upcommingAppointmentsHeading: "Próximas Citas", //!
  clientDashboardTitle: (name) => `Panel del Cliente | ${name}`, //!
  clientDashboardHeading: "Panel del Cliente", //!
  clientDashboardGreeting: (email) => `Bienvenido, ${email}`, //!
  loadingMsg: "Cargando",
  dropdownSelectPrompt: "select",
  fieldLabels: {
    email: "Correo electrónico", //!
    password: "Contraseña", //!
    newPassword: "Nueva contraseña", //!
    appointmentType: "Tipo", //!
    appointmentClient: "Cliente", //!
    appointmentLocation: "Dirección", //!
    appointmentDuration: (duration) => `Duración: ${duration} minutos`,
    appointmentDurationAlt: "Duración (minutos)",
    appointmentTopic: 'Tema',
    appointmentStudentName: 'Estudiante',
    appointmentStart: 'Start',
    appointmentClientProfileLink: 'Perfil del cliente',
    appointmentPaid: 'Pagó',
    appointmentPrice: (price) => `Precio: L${price}`,
    appointmentPriceAlt: "Precio (Lempiras)",
    teacherNavHome: "Inico",
    teacherNavNewAppointment: "Nueva Cita",
    teacherNaveNewClient: "Nuevo Cliente",
  },
  fieldValues: {
    appointmentType: {
      online: "virtual", //!
      "in-person": "presencial",
    },
    appointmentPaid: {
      true: 'Pagó',
      false: 'No Pagó',
    }
  },
  buttonlabels:{
    login: "Iniciar sesión", //!
    resetPassword: "Restablecer contraseña", //!
    sendPasswordResetRequest: "Enviar solicitud para restablecer contraseña", //!
    setNewPassword: "Establecer nueva contraseña", //!
    home: "Ir a la página de inicio", //!
    logout: "Cerrar sesión", //!
    createAppointment: "Crear Cita",
    formSubmit: "Submit",
    cancelForm: "Cancel",
  },
  messages: {
    loginFailure: (error) => `Contraseña o correo incorrecta. Error de servidor: ${error}`, //!
    resetPasswordSuccess: (address)=> `Si existe una cuenta para ${address}, consulte la bandeja de entrada para restablecer contraseña`, //!
    updatePasswordSuccess: "Contreseña actualizada. Ya está conectado", //!
    updatePasswordFailure: (error) => `Error: ${error}` //!
  }
}
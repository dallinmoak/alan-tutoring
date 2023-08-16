export const translations = {
  applicationTitle: "Servicio de Tutorías Alan", //confirmed
  teacherDashboardTitle: "Teacher Dashboard | Alan Tutoring", //!
  teacherDashboardHeading: "Teacher Dashboard",
  teacherDashboardGreeting: (email) => `Welcome, ${email}`, //!
  upcommingAppointmentsHeading: "Upcoming Appointments", //!
  clientDashboardTitle: "Client Dashboard | Alan Tutoring", //!
  clientDashboardHeading: "ClientDashboard", //!
  clientDashboardGreeting: (email) => `Welcome, ${email}`, //!
  fieldLabels: {
    email: "Correo electrónico", //!
    password: "Contraseña", //!
    newPassword: "Contraseña nueva", //!
    appointmentType: "Type", //!
    appointmentClient: "Client", //!
  },
  buttonlabels:{
    login: "Iniciar sesión", //!
    resetPassword: "Restablecer Contraseña", //!
    sendPasswordResetRequest: "Enviar solicitud de restablecimiento de contraseña", //!
    setNewPassword: "Establecer nueva contraseña", //!
    home: "Inicio", //!
    logout: "Logout", //!
  },
  messages: {
    loginFailure: (error) => `Contraseña o correo incorrecta. Error de servidor: ${error}`, //!
    resetPasswordSuccess: (address)=> `Si existe una cuenta para ${address}, consulte la inbox de ${address} para obtener la link restablecimiento de contraseña`, //!
    updatePasswordSuccess: "Password Updated. You are now signed in", //!
    updatePasswordFailure: (error) => `Update Error: ${error}` //!
  }
}
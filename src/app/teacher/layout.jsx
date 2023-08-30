import UserDash from "@/componnents/dashboard/main";
import TeacherNav from "@/componnents/dashboard/teacherNav";

export default function Layout({ children }) {
  return (
    <>
      <TeacherNav />
      <UserDash>{children}</UserDash>
    </>
  );
}

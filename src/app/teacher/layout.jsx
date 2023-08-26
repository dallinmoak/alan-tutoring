import UserDash from "@/componnents/dashboard/main";
import TeacherNav from "@/componnents/dashboard/teacherNav";
import Heading from "@/UI/heading";
import { translations } from "@/utils/translations";

export default function Layout({ children }) {
  return (
    <>
      <TeacherNav />
      <UserDash>{children}</UserDash>
    </>
  );
}

"use client";

export default function TeacherDash({ user, children }) {
  return (
    <div className="w-full max-w-lg">
      <div className="pt-1">
        <div className="flex flex-col items-center mx-1">{children}</div>
      </div>
    </div>
  );
}

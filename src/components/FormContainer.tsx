import React from "react";

type FormContainerProps = {
  action: (formData: FormData) => Promise<void>;
  children: React.ReactNode;
};

export default function FormContainer({ action, children }: FormContainerProps) {
  return (
    <div className="w-full flex justify-center">
      <form
        action={action}
        className="bg-white shadow p-8 rounded w-full max-w-4x1 space-y-8"
      >
        {children}
      </form>
    </div>
  );
}

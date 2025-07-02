import React from "react"

type PageContainerProps = {
  children: React.ReactNode,
};

export default function PageContainer({ children }: PageContainerProps) {
  return (
    <div className="px-8 my-6">
      {children}
    </div>
  )
}

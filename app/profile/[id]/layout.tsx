import type { Metadata } from "next";
import { employees } from "@/lib/employees";

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const employee = employees[id];

  if (!employee) {
    return {
      title: "Profile Not Found",
    };
  }

  return {
    title: `${employee.name} | Black Unique Diamond`,
    description: `Connect with ${employee.name}, ${employee.title} at Black Unique Diamond.`,
    openGraph: {
      title: `${employee.name} | Profile`,
      description: `Connect with ${employee.name}, ${employee.title} at Black Unique Diamond.`,
      images: [employee.image],
    },
  };
}

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

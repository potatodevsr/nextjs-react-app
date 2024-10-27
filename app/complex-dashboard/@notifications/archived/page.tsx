import Card from "@/src/components/card";
import Link from "next/link";

export default function ArchivedNotifications() {
  return (
    <Card>
      <div>Archived Notifications</div>
      <Link href="/complex-dashboard" style={{ textDecoration: "underline" }}>
        Defult
      </Link>
    </Card>
  );
}

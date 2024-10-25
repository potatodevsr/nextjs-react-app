import UserAnalytics from "@/components/UserAnalytics";
import RevenueMetrics from "@/components/RevenueMetrics";
import Notifications from "@/components/Notification";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div>{children}</div> {/* Content from page.tsx*/}
      <UserAnalytics /> {/* Component from user-analytics*/}
      <RevenueMetrics /> {/* Component from revenueMetrics*/}
      <Notifications /> {/* Component from  notification*/}
    </>
  );
}

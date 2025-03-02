import CookieSetting from "@/components/CookieSetting/CookieSetting";
import CreateAccount from "@/components/CreateAccount/CreateAccount";
import Notifications from "@/components/Notifications/Notifications";
import PaymentMethod from "@/components/PaymentMethod/PaymentMethod";
import PickDate from "@/components/PickDate/PickDate";
import ReportIssue from "@/components/ReportIssue/ReportIssue";
import Shadcn from "@/components/Shadcn/Shadcn";
import ShareDocument from "@/components/ShareDocument/ShareDocument";
import TeamMembers from "@/components/TeamMembers/TeamMembers";

export default function Home() {
  return (
    <main className="w-[90%] py-10 mx-auto grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:w-[80%] xl:w-[70%] ">
      <div className=" max-w-[450px] space-y-5">
        <CreateAccount />
        <PaymentMethod />
      </div>
      <div className=" max-w-[450px] space-y-5">
        <TeamMembers />
        <ShareDocument />
        <PickDate />
        <Notifications />
      </div>
      <div className=" max-w-[450px] space-y-5">
        <ReportIssue />
        <Shadcn />
        <CookieSetting />
      </div>
    </main>
  );
}

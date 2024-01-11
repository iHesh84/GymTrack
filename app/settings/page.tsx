import { CardTitle, Card } from "@/components/ui/card";
import Link from "next/link";

export default function Settings() {
  return (
    <main className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
      <header className="w-full p-4 bg-white dark:bg-gray-800 shadow-md fixed top-0">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200 text-center">
          Settings
        </h1>
      </header>
      <div className="flex flex-col items-center justify-center mt-24 w-full px-4">
        <Link href="#">
          <Card className="flex flex-row items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md w-full mb-4">
            <div className="flex flex-row items-center">
              <UserIcon className="h-6 w-6 text-gray-800 dark:text-gray-200 mr-2" />
              <CardTitle className="text-gray-800 dark:text-gray-200">
                Profile
              </CardTitle>
            </div>
            <ArrowRightIcon className="h-6 w-6 text-gray-800 dark:text-gray-200" />
          </Card>
        </Link>
        <Link href="#">
          <Card className="flex flex-row items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md w-full mb-4">
            <div className="flex flex-row items-center">
              <SignalIcon className="h-6 w-6 text-gray-800 dark:text-gray-200 mr-2" />
              <CardTitle className="text-gray-800 dark:text-gray-200">
                Notifications
              </CardTitle>
            </div>
            <ArrowRightIcon className="h-6 w-6 text-gray-800 dark:text-gray-200" />
          </Card>
        </Link>
        <Link href="#">
          <Card className="flex flex-row items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md w-full mb-4">
            <div className="flex flex-row items-center">
              <SettingsIcon className="h-6 w-6 text-gray-800 dark:text-gray-200 mr-2" />
              <CardTitle className="text-gray-800 dark:text-gray-200">
                Privacy
              </CardTitle>
            </div>
            <ArrowRightIcon className="h-6 w-6 text-gray-800 dark:text-gray-200" />
          </Card>
        </Link>
        <Link href="#">
          <Card className="flex flex-row items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md w-full mb-4">
            <div className="flex flex-row items-center">
              <LightbulbOffIcon className="h-6 w-6 text-gray-800 dark:text-gray-200 mr-2" />
              <CardTitle className="text-gray-800 dark:text-gray-200">
                Dark Mode
              </CardTitle>
            </div>
            <ArrowRightIcon className="h-6 w-6 text-gray-800 dark:text-gray-200" />
          </Card>
        </Link>
      </div>
    </main>
  );
}

function UserIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function ArrowRightIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function SignalIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 20h.01" />
      <path d="M7 20v-4" />
      <path d="M12 20v-8" />
      <path d="M17 20V8" />
      <path d="M22 4v16" />
    </svg>
  );
}

function SettingsIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function LightbulbOffIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16.8 11.2c.8-.9 1.2-2 1.2-3.2a6 6 0 0 0-9.3-5" />
      <path d="m2 2 20 20" />
      <path d="M6.3 6.3a4.67 4.67 0 0 0 1.2 5.2c.7.7 1.3 1.5 1.5 2.5" />
      <path d="M9 18h6" />
      <path d="M10 22h4" />
    </svg>
  );
}

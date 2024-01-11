import { CardTitle, Card } from "@/components/ui/card";
import Link from "next/link";

export default function Component() {
  return (
    <main className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-8">
        Choose Your Workout
      </h1>
      <div className="grid grid-cols-2 gap-4">
        <Link href="#">
          <Card className="flex flex-col items-center justify-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <MoveIcon className="h-12 w-12 text-gray-800 dark:text-gray-200" />
            <CardTitle className="mt-2 text-gray-800 dark:text-gray-200">
              Push
            </CardTitle>
          </Card>
        </Link>
        <Link href="#">
          <Card className="flex flex-col items-center justify-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <GitPullRequestIcon className="h-12 w-12 text-gray-800 dark:text-gray-200" />
            <CardTitle className="mt-2 text-gray-800 dark:text-gray-200">
              Pull
            </CardTitle>
          </Card>
        </Link>
        <Link href="#">
          <Card className="flex flex-col items-center justify-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <FlagIcon className="h-12 w-12 text-gray-800 dark:text-gray-200" />
            <CardTitle className="mt-2 text-gray-800 dark:text-gray-200">
              Legs
            </CardTitle>
          </Card>
        </Link>
        <Link href="#">
          <Card className="flex flex-col items-center justify-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <UserIcon className="h-12 w-12 text-gray-800 dark:text-gray-200" />
            <CardTitle className="mt-2 text-gray-800 dark:text-gray-200">
              Custom
            </CardTitle>
          </Card>
        </Link>
      </div>
      
    </main>
  );
}

function FlagIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
      <line x1="4" x2="4" y1="22" y2="15" />
    </svg>
  );
}

function GitPullRequestIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <circle cx="18" cy="18" r="3" />
      <circle cx="6" cy="6" r="3" />
      <path d="M13 6h3a2 2 0 0 1 2 2v7" />
      <line x1="6" x2="6" y1="9" y2="21" />
    </svg>
  );
}


function MoveIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <polyline points="5 9 2 12 5 15" />
      <polyline points="9 5 12 2 15 5" />
      <polyline points="15 19 12 22 9 19" />
      <polyline points="19 9 22 12 19 15" />
      <line x1="2" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="22" />
    </svg>
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

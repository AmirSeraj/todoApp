import ButtonComp from "./ButtonComp";
import { SidebarType } from "../lib/types";

export default function Sidebar({ children }: SidebarType) {
  const isAuthenticated = false;
  return (
    <div className="bg-gray-200 sm:p-4 p-2 flex flex-col justify-between w-full">
      {children}
      <div className="flex flex-col gap-2">
        {isAuthenticated ? (
          <ButtonComp color="danger" className="w-full">
            Log out
          </ButtonComp>
        ) : (
          <>
            <ButtonComp color="default">Log in</ButtonComp>
            <ButtonComp color="primary">Register</ButtonComp>
          </>
        )}
      </div>
    </div>
  );
}

import Link from "next/link";
import { routes } from "@/data/data";
import { buttonVariants } from "../ui/button";
import {
  RegisterLink,
  LoginLink,
  LogoutLink
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Image from "next/image";

export async function Navbar() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  return (
    <nav className="py-5 flex items-center justify-between">
      <div className="flex items-center gap-6">
        <Link href={"/"}>
          <h1 className="text-3xl font-semibold">
            Blog <span className="text-blue-500">Nu7as</span>
          </h1>
        </Link>

        <div className="hidden sm:flex items-center gap-6">
          {routes.map((route) => {
            return (
              <Link
                className="text-sm font-medium transition-colors hover:text-blue-500"
                key={route.id}
                href={route.path}
              >
                {route.name}
              </Link>
            );
          })}
        </div>
      </div>
      {user ? (
        <div className="flex gap-4">
          <p className="text-2xl">{user.given_name}</p>
          <LogoutLink className={buttonVariants({variant: "secondary"})}>Logout</LogoutLink>
        </div>
      ) : (
        <div className="flex items-center gap-4">
          <LoginLink className={buttonVariants()}>Login</LoginLink>
          <RegisterLink className={buttonVariants({ variant: "secondary" })}>
            Rigister
          </RegisterLink>
        </div>
      )}
    </nav>
  );
}

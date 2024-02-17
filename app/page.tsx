import logo from "./logo.png";
import Home from "./home.png";
import Image from "next/image";
import { CpuIcon, LogInIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/ThemeToggle";
import { getUserAuth } from "@/lib/auth/utils";
import { signOut } from "next-auth/react";
import { Logout } from "@/components/layout/logout-button";

export default async function LandingPage() {
  const { session } = await getUserAuth();

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-24 w-full flex items-center justify-center shadow-lg fixed backdrop-blur-lg">
        <Link className="flex items-center justify-center" href="#">
          {/* <MountainIcon className="h-6 w-6" /> */}
          <CpuIcon className="md:block lg:block hidden" />
          <span className="sr-only">Acme Inc</span>
        </Link>
        <nav className="ml-auto w-1/2  md:flex hidden md:flex-row lg:flex-row md:items-center md:justify-evenly">
          <Link
            className="text-xl font-medium duration-200 hover:underline underline-offset-4"
            href="#features"
          >
            Features
          </Link>
          <Link
            className="text-xl font-medium duration-200 hover:underline underline-offset-4"
            href="#features"
          >
            Account
          </Link>
          <Link
            className="text-xl font-medium duration-200 hover:underline underline-offset-4"
            href="#features"
          >
            Pricing
          </Link>
          {!session ? (
            <Link
              className="text-sm font-medium hover:underline underline-offset-4"
              href="/sign-in"
            >
              <Button>
                {" "}
                Sign In <LogInIcon />
              </Button>
            </Link>
          ) : (
            <div className="flex items-center gap-6">
            <Link
              className="text-sm font-medium hover:underline underline-offset-4"
              href="/dashboard"
            >
              <Button>
                Dashboard 
              </Button>
            </Link>

            <Logout/>
            </div>
          )}
          <ModeToggle />
        </nav>
        <div className="block md:hidden lg:hidden  md:ml-0 lg:ml-0 sm:ml-20">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="/sign-in"
          >
            <Button>
              Sign In <LogInIcon />
            </Button>
          </Link>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-6 sm:py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <Image
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
                height="600"
                src={Home}
                width="600"
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Personalized Financial Advice
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    Get the insights you need to make smarter financial
                    decisions. Sign up today to access our budgeting tools,
                    investment recommendations, and personalized advice.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    href="#"
                  >
                    Get Started
                  </Link>
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200  bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50  dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                    href="#"
                  >
                    Contact Sales
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-neutral-100 px-3 py-1 text-sm dark:bg-neutral-800">
                  Key Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Faster iteration. More innovation.
                </h2>
                <p className="max-w-[900px] text-neutral-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-neutral-400">
                  The platform for rapid progress. Let your team focus on
                  shipping features instead of managing infrastructure with
                  automated CI/CD.
                </p>
              </div>
            </div>
            <section className="w-full ">
              <div className="container px-4 md:px-6">
                <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                  <Image
                    alt="Hero"
                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
                    height="600"
                    src={logo}
                    width="600"
                  />
                  <div className="flex flex-col justify-center space-y-4">
                    <div className="space-y-2">
                      <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                        Personalized Financial Advice
                      </h1>
                      <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                        Get the insights you need to make smarter financial
                        decisions. Sign up today to access our budgeting tools,
                        investment recommendations, and personalized advice.
                      </p>
                    </div>
                    <div className="flex flex-col gap-2 min-[400px]:flex-row">
                      <Link
                        className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                        href="#"
                      >
                        Get Started
                      </Link>
                      <Link
                        className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                        href="#"
                      >
                        Contact Sales
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Sign Up for Updates
                </h2>
                <p className="max-w-[600px] text-neutral-500 md:text-xl dark:text-neutral-400">
                  Stay updated with the latest product news and updates.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex sm:flex-row flex-col space-y-2 sm:space-y-0 sm:space-x-2">
                  <input
                    className="max-w-lg flex-1 px-4 py-2 border-border border rounded-md "
                    placeholder="Enter your email"
                    type="email"
                  />
                  <button
                    type="submit"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-neutral-900 px-4 text-sm font-medium text-neutral-50 shadow transition-colors hover:bg-neutral-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-50/90 dark:focus-visible:ring-neutral-300"
                  >
                    Sign Up
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-neutral-500 dark:text-neutral-400">
          © 2024 Acme Inc. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}


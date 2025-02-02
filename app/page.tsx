import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Footer from "./footer/footer"

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-dark text-foreground">
      <header className="flex items-center h-14 px-4 lg:px-6 bg-darkPurple">
        <Link href="#" className="flex items-center gap-2 text-primary" prefetch={false}>
          <SquareIcon className="h-6 w-6" />
          <span className="font-semibold">Community</span>
        </Link>
        <nav className="ml-auto hidden lg:flex gap-4 sm:gap-6">
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4 text-primary" prefetch={false}>
            Home
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4 text-primary" prefetch={false}>
            News
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4 text-primary" prefetch={false}>
            Events
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4 text-primary" prefetch={false}>
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-40 bg-gradient-to-r from-darkPurple via-blue to-black">
  <div className="container flex flex-col items-center justify-center gap-4 px-4 text-center md:px-6">
    <div className="space-y-3">
      <div className="inline-block rounded-lg bg-dark px-3 py-1 text-sm text-foreground">Welcome</div>
      <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-silverWhite">Welcome to the Community</h1>
      <p className="mx-auto max-w-[600px] text-muted md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
        Connect with your peers, stay up to date with the latest news, and join us at our upcoming events.
      </p>
    </div>
    <div className="mx-auto w-full max-w-sm space-y-2">
      <form className="flex space-x-2">
        <Input type="email" placeholder="Enter your email" className="max-w-lg flex-1" />
        <Button type="submit" className="bg-primary text-foreground">Sign Up</Button>
      </form>
      <p className="text-xs text-muted">
        Sign up to get notified when we launch.
        <Link href="#" className="underline underline-offset-2 text-primary" prefetch={false}>
          Terms &amp; Conditions
        </Link>
      </p>
    </div>
  </div>
</section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-dark">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-dark px-3 py-1 text-sm text-foreground">News</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-silverWhite">Latest Community News</h2>
              </div>
              <div className="grid gap-4 sm:gap-6">
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold text-silverWhite">Introducing our new community platform</h3>
                  <p className="text-sm text-muted">Published on January 23, 2023</p>
                </div>
                <p className="text-sm text-muted md:text-base/relaxed lg:text-xl/relaxed xl:text-base/relaxed">
                  We are excited to announce the launch of our new community platform. With this platform, we aim to
                  provide a more engaging and seamless experience for our community members. ...
                </p>
                <Link href="#" className="inline-flex h-8 items-center underline underline-offset-2 text-primary" prefetch={false}>
                  Read more
                  <ChevronRightIcon className="w-4 h-4 ml-1.5 inline-block" />
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-darkPurple">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-dark px-3 py-1 text-sm text-foreground">Events</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-silverWhite">Upcoming Events</h2>
              </div>
              <div className="grid gap-4 sm:gap-6">
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold text-silverWhite">Community Meetup: Building the Web Together</h3>
                  <p className="text-sm text-muted">March 10, 2023 | 10:00 AM - 12:00 PM</p>
                </div>
                <p className="text-sm text-muted md:text-base/relaxed lg:text-xl/relaxed xl:text-base/relaxed">
                  Join us for our first community meetup where we&apos;ll be discussing the latest trends in web
                  development and sharing tips and tricks for building amazing web experiences.
                </p>
                <Link
                  href="#"
                  className="inline-flex h-8 items-center rounded-md border border-border bg-dark text-foreground px-4 shadow-sm text-sm font-medium transition-colors hover:bg-darkPurple hover:text-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  prefetch={false}
                >
                  Register
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-dark">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-dark px-3 py-1 text-sm text-foreground">
                  Testimonials
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-silverWhite">
                  What our Members are Saying
                </h2>
              </div>
              <div className="grid gap-4 sm:gap-6">
                <blockquote className="text-base italic text-muted md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  &quot;The community has been an invaluable resource for learning from experts and connecting with
                  peers. I&apos;ve made some great friends and collaborators through the community and look forward to
                  the events and discussions ahead.&quot;
                </blockquote>
                <cite className="not-italic text-sm font-semibold text-muted">
                  &mdash; Jane Doe, Web Developer
                </cite>
              </div>
            </div>
          </div>
        </section>
      </main>
      <div className="flex flex-col min-h-[100dvh] bg-dark text-foreground">
        <aside className="flex-1 border-t border-border">
          <div className="container px-4 md:px-6">
            <div className="grid items-center gap-4 sm:gap-6 lg:gap-10">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-silverWhite">Resources</h2>
                <p className="max-w-[600px] text-muted md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Access the resources available to community members.
                </p>
              </div>
              <nav className="flex flex-col gap-2 min-h-[300px]:flex-row shrink-0">
                <Link
                  href="#"
                  className="flex-1 inline-flex items-center justify-center rounded-md border border-border bg-dark text-foreground shadow-sm py-4 text-sm transition-colors hover:bg-darkPurple hover:text-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  prefetch={false}
                >
                  Community Guidelines
                </Link>
                <Link
                  href="#"
                  className="flex-1 inline-flex items-center justify-center rounded-md border border-border bg-dark text-foreground shadow-sm py-4 text-sm transition-colors hover:bg-darkPurple hover:text-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  prefetch={false}
                >
                  Knowledge Base
                </Link>
                <Link
                  href="#"
                  className="flex-1 inline-flex items-center justify-center rounded-md border border-border bg-dark text-foreground shadow-sm py-4 text-sm transition-colors hover:bg-darkPurple hover:text-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  prefetch={false}
                >
                  Discussion Forums
                </Link>
                <Link
                  href="#"
                  className="flex-1 inline-flex items-center justify-center rounded-md border border-border bg-dark text-foreground shadow-sm py-4 text-sm transition-colors hover:bg-darkPurple hover:text-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  prefetch={false}
                >
                  Contact Support
                </Link>
              </nav>
            </div>
          </div>
        </aside>
      </div>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-border bg-dark text-foreground">
        <Footer/>
        <p className="text-xs text-muted">&copy; 2024 Community Inc. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4 text-primary" prefetch={false}>
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4 text-primary" prefetch={false}>
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

function ChevronRightIcon(props) {
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
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}


function SquareIcon(props) {
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
      <rect width="18" height="18" x="3" y="3" rx="2" />
    </svg>
  )
}

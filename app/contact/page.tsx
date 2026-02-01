"use client";

import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Textarea } from "@/app/components/ui/textarea";
import { Mail, Phone, ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-12 px-4 sm:px-6 lg:px-8 font-mono">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column - Info Card */}
          <div className="bg-zinc-100 text-black rounded-[2.5rem] p-8 lg:p-12 flex flex-col justify-between min-h-[600px] relative overflow-hidden">
            <div>
              <h1 className="text-6xl font-semibold tracking-tight mb-6">
                We’re just a<br />
                click away
              </h1>
              <p className="text-zinc-500 mb-10 max-w-sm">
                Have a question about our gear? Need help with an order? Our
                team is ready to assist you.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-500 font-medium uppercase tracking-wider">
                      Email address
                    </p>
                    <p className="font-semibold">info@gadget.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-500 font-medium uppercase tracking-wider">
                      Phone number
                    </p>
                    <p className="font-semibold">(414) 695 - 70234</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial Card */}
            <div className="mt-12 bg-zinc-50 rounded-3xl p-6 border border-zinc-100">
              <p className="text-md font-medium mb-6">
                Lumen glasses help me stay focused without distractions. I get
                subtle updates, directions, and reminders—without breaking my
                workflow
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden bg-zinc-300 relative">
                    {/* Avatar Placeholder */}
                    <Image
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop&q=60"
                      alt="John Carter"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-md">John Carter</p>
                    <p className="text-sm text-zinc-500">
                      VP of Design at Converra
                    </p>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button
                    size="icon"
                    variant="outline"
                    className="rounded-full w-10 h-10 border-black bg-white hover:bg-black hover:text-white"
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </Button>
                  <Button
                    size="icon"
                    variant="outline"
                    className="rounded-full w-10 h-10 border-black bg-white hover:bg-black hover:text-white"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-transparent text-foreground p-4 lg:p-8 flex flex-col justify-center">
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium ml-1">First name</label>
                  <Input
                    placeholder="First name"
                    className="bg-white border-zinc-200 text-black placeholder:text-zinc-400 focus-visible:ring-black/5"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium ml-1">Last name</label>
                  <Input
                    placeholder="Last Name"
                    className="bg-white border-zinc-200 text-black placeholder:text-zinc-400 focus-visible:ring-black/5"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium ml-1">
                  Email address
                </label>
                <Input
                  placeholder="example@youremail.com"
                  className="bg-white border-zinc-200 text-black placeholder:text-zinc-400 focus-visible:ring-black/5"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium ml-1">
                    Phone number
                  </label>
                  <Input
                    placeholder="(123) 456 - 7890"
                    className="bg-white border-zinc-200 text-black placeholder:text-zinc-400 focus-visible:ring-black/5"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium ml-1">Subject</label>
                  {/* Simulate Select with Input for now or use standard select styled similarly */}
                  <div className="relative">
                    <Input
                      placeholder="Support request"
                      className="bg-white border-zinc-200 text-black placeholder:text-zinc-400 focus-visible:ring-black/5 cursor-pointer"
                      readOnly
                    />
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-500">
                      <svg
                        width="10"
                        height="6"
                        viewBox="0 0 10 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 1L5 5L9 1"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium ml-1">Message</label>
                <Textarea
                  placeholder="Write your message here..."
                  className="bg-white border-zinc-200 text-black placeholder:text-zinc-400 focus-visible:ring-black/5 min-h-[160px] resize-none"
                />
              </div>

              <div className="pt-2">
                <Button
                  size="lg"
                  className="w-full sm:w-auto rounded-full px-10 py-6 bg-black text-white hover:bg-zinc-800 font-semibold text-base transition-all hover:scale-105 active:scale-95"
                >
                  Send message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

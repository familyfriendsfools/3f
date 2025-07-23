import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

//imagens
import Introduction from "@/assets/gifs/index/introduction.webp";
import Calculator from "@/assets/gifs/index/calculator.webp";
import Community from "@/assets/gifs/Index/community.webp";
import Scratch from "@/assets/images/Index/scratch.webp";
import Goals from "@/assets/images/Index/goals.webp";
import Dreams from "@/assets/images/Index/dreams.webp";
import Contract from "@/assets/images/Index/contract.webp";
import Payments from "@/assets/images/Index/payments.webp";
import Document from "@/assets/images/Index/document.webp";
import Info from "@/assets/images/Index/info.webp";
import Funded from "@/assets/images/Index/funded.webp";
import Changes from "@/assets/images/Index/changes.webp";
import Success from "@/assets/gifs/Index/success.webp";
import Campaign from "@/assets/gifs/Index/Campaign.webp";
import Fees from "@/assets/images/Index/fees.webp";
import People from "@/assets/images/Index/people.webp";
import Environment from "@/assets/images/Index/environment.webp";
import Contact from "@/assets/images/Index/contact.webp";

export default function Home() {
  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <section className="text-center flex items-center bg-[#F1E8CB]">
        <Image
          src={Introduction}
          alt="A Woman Writing on a Blank Paper"
          className="h-[calc(100dvh-112px)] object-cover max-w-[60%]"
        />

        <div className="flex flex-col h-full grow justify-center items-center text-center">
          <h1 className="text-5xl font-bold mt-8">What is this?</h1>
          <p className="text-xl max-w-2xl mt-4">
            3F is a tool to help capacitate early-stage entrepreneurs with
            transparent, quick, and seamless processes to secure and manage
            private loans.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 text-center">
        <h2 className="text-4xl font-bold">Is it for me?</h2>
        <div className="grid md:grid-cols-2 gap-8 mt-10">
          <div>
            <p className="text-xl font-medium">
              Do you have an idea and want to create a business or a product
              from scratch?
            </p>
            <Image
              src={Scratch}
              alt="A Woman Writing on a Blank Paper"
              className="mt-4 rounded-lg h-[400px] w-full object-cover"
            />
          </div>
          <div>
            <p className="text-xl font-medium">
              Do you struggle finding ways to get money to put your idea into
              practice?
            </p>
            <Image
              src={Calculator}
              alt="A Person Using a Calculator"
              className="mt-4 rounded-lg h-[400px] w-full object-cover"
            />
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8 mt-10">
          <div>
            <p className="text-xl font-medium">
              You don't have a money tree on your backyard, but believe in the
              power of a strong community?
            </p>
            <Image
              src={Community}
              alt="A Woman Writing on a Blank Paper"
              className="mt-4 rounded-lg h-[400px] w-full object-cover"
            />
          </div>
          <div>
            <p className="text-xl font-medium">
              Then 3F can help you reach your goals! See how
            </p>
            <Image
              src={Goals}
              alt="A Person Using a Calculator"
              className="mt-4 rounded-lg h-[400px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-20 px-4 text-center">
        <h2 className="text-4xl font-bold">Service</h2>
        <div className="grid md:grid-cols-2 gap-8 mt-10">
          <div>
            <p className="text-xl font-medium">
              Creating the campaign is EASY Follow our step-by-step tips for a
              great campaign
            </p>
            <Image
              src={Campaign}
              alt="A Woman Writing on a Blank Paper"
              className="mt-4 rounded-lg h-[400px] w-full object-cover"
            />
          </div>
          <div>
            <p className="text-xl font-medium">
              It's IMMEDIATE When funded, get your money right away
            </p>
            <Image
              src={Funded}
              alt="A Person Using a Calculator"
              className="mt-4 rounded-lg h-[400px] w-full object-cover"
            />
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8 mt-10">
          <div>
            <p className="text-xl font-medium">
              Your success is our SUCCESS Create your campaign for free. We only
              charge a fee when you get funded
            </p>
            <Image
              src={Success}
              alt="A Woman Writing on a Blank Paper"
              className="mt-4 rounded-lg h-[400px] w-full object-cover"
            />
          </div>
          <div>
            <p className="text-xl font-medium">
              Increase the chances of getting funded and the AMOUNT RAISED By
              using a formal, transparent and easy to follow-up process
            </p>
            <Image
              src={Changes}
              alt="A Person Using a Calculator"
              className="mt-4 rounded-lg h-[400px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-4xl font-bold">Features</h2>
        <p className="text-xl max-w-4xl mx-auto mt-4 font-medium">
          Empower your entrepreneurial dreams with our all-in-one tool, making
          it easy to secure funding from Family & Friends by simplifying every
          step and fostering a supportive community.
        </p>
        <Image
          src={Dreams}
          alt="A Person using Laptop while Working"
          className="mt-6 mx-auto h-[700px] w-full object-cover"
        />
      </section>

      <section className="py-20 px-4 text-center">
        <div className="grid md:grid-cols-2 gap-8 mt-10">
          <div>
            <p className="text-xl font-medium">
              The information is shared in a transparent way to everyone at once
            </p>
            <Image
              src={Info}
              alt="A Woman Writing on a Blank Paper"
              className="mt-4 rounded-lg h-[400px] w-full object-cover"
            />
          </div>
          <div>
            <p className="text-xl font-medium">
              Contracts are signed, validated and securelly stored on the
              platform
            </p>
            <Image
              src={Contract}
              alt="A Person Using a Calculator"
              className="mt-4 rounded-lg h-[400px] object-bottom w-full object-cover"
            />
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8 mt-10">
          <div>
            <p className="text-xl font-medium">Payments are fast and easy</p>
            <Image
              src={Payments}
              alt="A Woman Writing on a Blank Paper"
              className="mt-4 rounded-lg h-[400px] w-full object-cover"
            />
          </div>
          <div>
            <p className="text-xl font-medium">
              No more excel spreadshits, Word documents, bank apps and calendar
              alerts!
            </p>
            <Image
              src={Document}
              alt="A Person Using a Calculator"
              className="mt-4 rounded-lg h-[400px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="h-screen flex flex-col justify-center items-center text-center">
        <h1 className="text-5xl font-bold">Fees and Conditions</h1>
        <p className="text-xl max-w-4xl mt-4 font-medium">
          ZERO fees to create your campaign | ZERO fees to invest in a project |
          x% over the total amount raised + y€ transaction fee
        </p>
        <Button className="mt-6 mb-4">Prices and Tariffs</Button>
        <Image
          src={Fees}
          alt="A Woman Writing on a Blank Paper"
          className="mt-4 w-full h-[700px] object-cover"
        />
      </section>

      <div className="py-10 tex-center w-full flex justify-center text-[30px]">
        FAQ
      </div>

      <section className="py-20 px-4 text-center">
        <h2 className="text-4xl font-bold">About Us</h2>
        <p className="text-xl max-w-4xl mx-auto mt-4 font-medium">
          We're just a group of wanna-be-entrepreneurs that wanted to make life
          easier for us and for everyone that wants to develop a business idea
          and need a little push
        </p>
        <div className="grid md:grid-cols-2 gap-8 mt-10">
          <div>
            <p className="text-xl font-medium">
              We believe in the power of community and in reaching out to those
              who are the first to believe and bet on our success
            </p>
            <Image
              src={People}
              alt="A Woman Writing on a Blank Paper"
              className="mt-4 rounded-lg h-[520px] w-full object-cover"
            />
          </div>
          <div>
            <p className="text-xl font-medium">
              We want to bring formality and accessability, in a safe
              environment, that fosters confidence to everyone involved
            </p>
            <Image
              src={Environment}
              alt="A Person Using a Calculator"
              className="mt-4 rounded-lg h-[520px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-20 px-4 text-center">
        <h2 className="text-4xl font-bold">Newsletter</h2>
        <div className="grid md:grid-cols-2 gap-8 mt-10">
          <Image
            src={Contact}
            alt="A Woman Writing on a Blank Paper"
            className="mt-4 rounded-lg h-[520px] w-full object-cover"
          />
          <div>
            <div className="mt-6 flex flex-col gap-6 h-full justify-start">
              <div className="flex gap-4">
                <Input
                  type="text"
                  placeholder="First Name"
                  className="p-4 h-12 rounded-l-lg grow mx-auto"
                />
                <Input
                  type="text"
                  placeholder="Last Name"
                  className="p-4 h-12 rounded-l-lg grow mx-auto"
                />
              </div>
              <Input
                type="email"
                placeholder="Enter your email"
                className="p-4 h-12 rounded-l-lg w-full"
              />
              <Button className="rounded-r-lg w-1/4 mx-auto bg-[#FC9701] text-white font-semibold text-xl p-6 border-[3px]">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

// src/components/PortfolioPage.jsx

"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ButtonGreen from "@/components/ButtonGreen";

const PortfolioPage = ({ portfolioItems }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleImageClick = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <>
      <div className="grid gap-2 lg:grid-cols-6 md:grid-cols-4 md:gap-4 mt-10">
        <div className="col-span-2 mb-8">
          <p className="w-72 text-xl md:text-lg mb-8">
            Resultaten van oefeningen, opdrachten en vrij werk door studenten
            uit het atelier Grafisch ontwerp & illustratie aan de Sint-Lukas
            Academie in Schaarbeek, sinds 2020.
          </p>
          <Link href="/over-het-atelier">
            <ButtonGreen>Lees Meer</ButtonGreen>
          </Link>
        </div>
        {portfolioItems.map((item) => (
          <div
            key={item.id}
            className={`relative h-80 cursor-pointer ${
              item.isPortrait ? "col-span-1" : "col-span-2"
            }`}
            onClick={() => handleImageClick(item)}
          >
            <Image
              src={item.imageurl}
              alt={item.title}
              layout="fill"
              objectFit="cover"
            />
          </div>
        ))}
      </div>
      {selectedItem && (
        <Dialog open={selectedItem !== null} onOpenChange={closeModal}>
          <DialogTrigger asChild>
            <div />
          </DialogTrigger>
          <DialogContent
            className={`w-full ${
              selectedItem.isPortrait
                ? "h-auto max-h-screen max-w-md"
                : "h-auto max-h-screen max-w-4xl"
            }`}
          >
            <DialogHeader>
              <DialogTitle>{selectedItem.title}</DialogTitle>
              <DialogDescription>
                <Image
                  src={selectedItem.imageurl}
                  alt={selectedItem.title}
                  layout="responsive"
                  width={selectedItem.isPortrait ? 400 : 1200}
                  height={selectedItem.isPortrait ? 600 : 800}
                  objectFit="cover"
                />
                <div className="mt-4">
                  <h2>{selectedItem.name}</h2>
                  <p>{selectedItem.description}</p>
                </div>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};

export default PortfolioPage;

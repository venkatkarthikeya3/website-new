"use client";

import { useState } from "react";
import Image from "next/image";
import { PhotoSlider } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ProjectCarouselProps {
  images: { src: string; description?: string }[];
}

export function ProjectCarousel({ images }: ProjectCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSliderOpen, setIsSliderOpen] = useState(false);

  const goToPrevious = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent triggering the slider
    const newIndex = (currentIndex - 1 + images.length) % images.length; // Loop back to the last image
    setCurrentIndex(newIndex);
  };

  const goToNext = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent triggering the slider
    const newIndex = (currentIndex + 1) % images.length; // Loop back to the first image
    setCurrentIndex(newIndex);
  };

  const openSlider = () => {
    setIsSliderOpen(true);
  };

  const closeSlider = () => {
    setIsSliderOpen(false);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="relative w-full h-auto rounded-lg overflow-hidden">
      {/* Navigation Buttons */}
      <div className="absolute inset-0 flex items-center justify-between px-4 pointer-events-none z-10">
        <div className="pointer-events-auto">
          <Button
            variant="ghost"
            size="icon"
            className="h-10 w-10 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background/90"
            onClick={goToPrevious}
          >
            <ChevronLeft className="h-6 w-6" />
            <span className="sr-only">Previous slide</span>
          </Button>
        </div>
        <div className="pointer-events-auto">
          <Button
            variant="ghost"
            size="icon"
            className="h-10 w-10 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background/90"
            onClick={goToNext}
          >
            <ChevronRight className="h-6 w-6" />
            <span className="sr-only">Next slide</span>
          </Button>
        </div>
      </div>

      {/* Image Display */}
      <div
        className="relative h-[300px] md:h-[400px] w-full cursor-pointer"
        onClick={openSlider} // Open slider on image click
      >
        {images[currentIndex] ? (
          <Image
            src={images[currentIndex]?.src || "/placeholder.svg"}
            alt={images[currentIndex]?.description || `Project screenshot ${currentIndex + 1}`}
            layout="fill"
            objectFit="contain"
            className="transition-all duration-500"
            priority
          />
        ) : (
          <div className="flex items-center justify-center h-full w-full bg-gray-200">
            <p className="text-gray-500">No images available</p>
          </div>
        )}
        {/* Description Overlay */}
        {images[currentIndex]?.description && (
          <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-sm p-2 text-center">
            {images[currentIndex]?.description}
          </div>
        )}
      </div>

      {/* Slide Indicators */}
      <div className="mt-4 flex justify-center gap-2">
        {images.map((_, slideIndex) => (
          <button
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={cn(
              "w-2.5 h-2.5 rounded-full transition-all",
              currentIndex === slideIndex ? "bg-primary" : "bg-primary/30 hover:bg-primary/50"
            )}
            aria-label={`Go to slide ${slideIndex + 1}`}
          />
        ))}
      </div>

      {/* Photo Slider */}
      {isSliderOpen && (
        <PhotoSlider
          images={images.map((img) => ({
            src: img.src,
            intro: img.description || "No description available",
          }))}
          visible={isSliderOpen}
          onClose={closeSlider}
          index={currentIndex}
          onIndexChange={(index) => setCurrentIndex(index)}
          overlayRender={({ index }) => (
            <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-sm p-2 text-center">
              {images[index]?.description || "No description available"}
            </div>
          )}
        />
      )}
    </div>
  );
}
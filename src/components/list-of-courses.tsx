import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CourseCard } from "./course-card";
import clsx from "clsx";

export function ListCourses(props: any) {
  const { type } = props;

  return (
    <div className="flex justify-center items-center">
      <Carousel className="max-w-7xl">
        <CarouselContent className="-ml-1">
          {Array.from({ length: 10 }).map((_, index) => (
            <CarouselItem
              key={index}
              className={clsx("pl-1 md:basis-1/2", {
                "lg:basis-2/3": type === "banner",
                "lg:basis-1/5": type === "card",
              })}
            >
              <div className="p-1">
                <CourseCard
                  header={`Card ${index + 1}`}
                  description={`This is card ${index + 1}`}
                  content={index + 1}
                  type={type}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

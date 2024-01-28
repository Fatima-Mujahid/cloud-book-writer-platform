import React from "react";
import { Link } from "react-router-dom";
import { DashboardWrapper, Collaborators } from "@/components/app";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const BookSections = () => {
  return (
    <DashboardWrapper tab="books">
      <div className="flex flex-col gap-8 p-8 w-full max-w-[600px]">
        <div className="flex items-center justify-between">
          <h2 className="text-xl">Book Sections</h2>
          <Collaborators>
            <Button variant="outline">Collaborators</Button>
          </Collaborators>
        </div>
        <div className={cn("flex flex-col gap-6 w-full")}>
          <div className="flex justify-between items-center">
            <p>Section 1</p>
          </div>
          <div className="flex justify-between items-center">
            <p>Section 2</p>
          </div>
        </div>
      </div>
    </DashboardWrapper>
  );
};

export { BookSections };

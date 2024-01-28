import React from "react";
import { DashboardWrapper, Collaborators, Section } from "@/components/app";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useSelector, useDispatch } from "react-redux";

const BookSections = () => {
  const book = useSelector((state) => state.book.book);

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
          {book.sections.map((section) => (
            <Section key={section.id} parentId={null} section={section} />
          ))}
        </div>
        <Button>Add Section</Button>
      </div>
    </DashboardWrapper>
  );
};

export { BookSections };

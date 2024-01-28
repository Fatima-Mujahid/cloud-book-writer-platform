import React from "react";
import { Link } from "react-router-dom";
import { DashboardWrapper } from "@/components/app";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const Books = () => {
  return (
    <DashboardWrapper tab="books">
      <div className="flex flex-col gap-8 p-8 w-full max-w-[600px]">
        <h2 className="text-xl">Books</h2>
        <div className={cn("flex flex-col gap-6 w-full")}>
          <div className="flex justify-between items-center">
            <p>Book 1</p>
            <div className="flex gap-2">
              <Button>Edit</Button>
              <Link to="/books/1">
                <Button>View</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </DashboardWrapper>
  );
};

export { Books };

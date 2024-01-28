import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { DashboardWrapper } from "@/components/app";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useLazyGetBooksQuery } from "@/redux/services/book";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [getBooks, { error }] = useLazyGetBooksQuery();

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await getBooks();
      setBooks(response.data);
    };

    fetchBooks();
  }, []);

  return (
    <DashboardWrapper tab="books">
      <div className="flex flex-col gap-8 p-8 w-full max-w-[600px]">
        <h2 className="text-xl font-bold">Books</h2>
        <div className={cn("flex flex-col gap-6 w-full")}>
          {books?.map((book) => (
            <div key={book.id} className="flex justify-between items-center">
              <p>{book.title}</p>
              <div className="flex gap-2">
                <Button>Edit</Button>
                <Link to={`/books/${book.id}`}>
                  <Button>View</Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardWrapper>
  );
};

export { Books };

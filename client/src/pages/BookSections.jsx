import React, { useEffect } from "react";
import { DashboardWrapper, Collaborators, Section } from "@/components/app";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useSelector, useDispatch } from "react-redux";
import { addSection } from "@/redux/slices/book";
import {
  useLazyGetBookQuery,
  useUpdateBookMutation,
} from "@/redux/services/book";
import { setBook } from "@/redux/slices/book";
import { useParams } from "react-router-dom";

const BookSections = () => {
  const book = useSelector((state) => state.book.book);
  const dispatch = useDispatch();
  let { id } = useParams();
  const [getBook, { error }] = useLazyGetBookQuery();
  const [updateBook, { error: updateError }] = useUpdateBookMutation();

  useEffect(() => {
    const fetchBook = async () => {
      const response = await getBook({ id });
      dispatch(setBook(response.data));
    };

    fetchBook();
  }, [id]);

  const saveBook = async () => {
    const response = await updateBook({ id, book });
    console.log(response);
  };

  return (
    <DashboardWrapper tab="books">
      <div className="flex flex-col gap-8 p-8 w-full max-w-[600px]">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold">Book Sections</h2>
          <Collaborators>
            <Button variant="outline">Collaborators</Button>
          </Collaborators>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-md">
            <span className="font-semibold">Book Title:</span> {book?.title}
          </h2>
          <h2 className="text-md">
            <span className="font-semibold">Author:</span> {}
          </h2>
        </div>
        <div className={cn("flex flex-col gap-6 w-full")}>
          {book?.sections.map((section) => (
            <Section key={section.id} parentId={null} section={section} />
          ))}
        </div>
        <Button onClick={() => dispatch(addSection(null))}>Add Section</Button>
        <Button onClick={saveBook}>Save changes</Button>
      </div>
    </DashboardWrapper>
  );
};

export { BookSections };

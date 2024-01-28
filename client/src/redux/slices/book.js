import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  book: {
    title: "First Book",
    sections: [
      {
        id: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
        title: "Introduction",
        description: "",
        subsections: [
          {
            id: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb55",
            title: "Intro to Platform",
            description: "",
            subsections: [
              {
                id: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb44",
                title: "Intro to Platform (Menu Bar)",
                description: "",
                subsections: [],
              },
            ],
          },
          {
            id: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb33",
            title: "Intro to Book Writing",
            description: "",
            subsections: [],
          },
        ],
      },
    ],
  },
};

export const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    setTitle: (state, action) => {
      state.book = { ...state.book, title: action.payload };
    },
    addSection: (state, action) => {
      const updateState = (sections) => {
        return sections.map((section) => {
          if (section.id === action.payload.parentId) {
            return {
              ...section,
              subsections: [
                ...section.subsections,
                {
                  id: uuidv4(),
                  title: "New subsection",
                  description: "",
                  subsections: [],
                },
              ],
            };
          } else if (section.subsections.length > 0) {
            return {
              ...section,
              subsections: updateState(section.subsections),
            };
          }
          return section;
        });
      };

      state.book = {
        title: state.book.title,
        sections: updateState(state.book.sections),
      };
    },
    removeSection: (state, action) => {
      const updateState = (sections) => {
        return sections.map((section) => {
          if (section.id === action.payload.parentId) {
            return {
              ...section,
              subsections: section.subsections.filter(
                (subsection) => subsection.id !== action.payload.id
              ),
            };
          } else if (section.subsections.length > 0) {
            return {
              ...section,
              subsections: updateState(section.subsections),
            };
          }
          return section;
        });
      };

      state.book = {
        title: state.book.title,
        sections: updateState(state.book.sections),
      };
    },
    setSectionTitle: (state, action) => {
      const updateState = (sections) => {
        return sections.map((section) => {
          if (section.id === action.payload.id) {
            return {
              ...section,
              title: action.payload.title,
            };
          } else if (section.subsections.length > 0) {
            return {
              ...section,
              subsections: updateState(section.subsections),
            };
          }
          return section;
        });
      };

      state.book = {
        title: state.book.title,
        sections: updateState(state.book.sections),
      };
    },
  },
});

export const { setTitle, addSection, removeSection, setSectionTitle } =
  bookSlice.actions;

export default bookSlice.reducer;
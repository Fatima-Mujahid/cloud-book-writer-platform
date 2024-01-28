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

const findSection = (sections, id) => {
  for (const section of sections) {
    if (section.id === id) {
      return section;
    }
    const foundSubsection = findSection(section.subsections, id);
    if (foundSubsection) {
      return foundSubsection;
    }
  }
  return null;
};

export const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    setTitle: (state, action) => {
      state.book = { ...state.book, title: action.payload };
    },
    addSection: (state, action) => {
      console.log(action.payload);
      // const parentSection = findSection(state.book.sections, action.payload.parentId);
      // parentSection.subsections.push({
      //   id: newSubsectionId,
      //   title: `New Subsection ${newSubsectionId}`,
      //   description: "",
      //   subsections: [],
      // });
      // setSections([...sections]);
    },
    removeSection: (state, action) => {
      console.log(action.payload);
    },
    setSectionTitle: (state, action) => {
      console.log(action.payload);
    },
  },
});

export const { setTitle, addSection, removeSection, setSectionTitle } =
  bookSlice.actions;

export default bookSlice.reducer;

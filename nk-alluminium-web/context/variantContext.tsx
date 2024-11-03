// context/VariantContext.tsx
import React, { createContext, useContext } from "react";

interface Variant {
  variant: string;
  props: { [key: string]: any }; // Adjust types as necessary
}

interface VariantContextType {
  variants: Variant[];
}

const VariantContext = createContext<VariantContextType | undefined>(undefined);

export const useVariantContext = () => {
  const context = useContext(VariantContext);
  if (!context) {
    throw new Error("useVariantContext must be used within a VariantProvider");
  }
  return context;
};

export const VariantProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const variantsData = [
    {
      variant: "hero-banner",
      props: {
        title: "Title Media Variant",
        description: "This variant shows a title with media.",
      },
    },
    {
      variant: "card-with-hover",
      props: {
        items: [
          {
            title: "Glass Door",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit.Excepturi totam ex obcaecati delectus? Inventore, eligendi.Consectetur consequuntur",
            image: "https://i.postimg.cc/SxQ28bWq/pexels-ashwinalok-418806.jpg",
          },
          {
            title: "Glass Door",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit.Excepturi totam ex obcaecati delectus? Inventore, eligendi.Consectetur consequuntur",
            image:
              "https://i.postimg.cc/CMHx46MK/pexels-enil-oan-1235239773-29123201.jpg",
          },
          {
            title: "Glass Door",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit.Excepturi totam ex obcaecati delectus? Inventore, eligendi.Consectetur consequuntur",
            image: "https://i.postimg.cc/SxQ28bWq/pexels-ashwinalok-418806.jpg",
          },
          {
            title: "Glass Door",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit.Excepturi totam ex obcaecati delectus? Inventore, eligendi.Consectetur consequuntur",
            image:
              "https://i.postimg.cc/CMHx46MK/pexels-enil-oan-1235239773-29123201.jpg",
          },
        ],
      },
    },
    {
      variant: "carousal-with-arrows",
      props: {
        items: [
          {
            image: "https://i.postimg.cc/Y0s9BfNh/pexels-pixabay-277559.jpg",
            title: "Glass door",
            buttonTitle: "more",
          },
          {
            image: "https://i.postimg.cc/brsygSX8/pexels-wb2008-2290609.jpg",
            title: "Glass door",
            buttonTitle: "more",
          },
          {
            image: "https://i.postimg.cc/Y0s9BfNh/pexels-pixabay-277559.jpg",
            title: "Glass door",
            buttonTitle: "more",
          },
          {
            image: "https://i.postimg.cc/brsygSX8/pexels-wb2008-2290609.jpg",
            title: "Glass door",
            buttonTitle: "more",
          },
          {
            image: "https://i.postimg.cc/Y0s9BfNh/pexels-pixabay-277559.jpg",
            title: "Glass door",
            buttonTitle: "more",
          },
          {
            image: "https://i.postimg.cc/brsygSX8/pexels-wb2008-2290609.jpg",
            title: "Glass door",
            buttonTitle: "more",
          },
          {
            image: "https://i.postimg.cc/Y0s9BfNh/pexels-pixabay-277559.jpg",
            title: "Glass door",
            buttonTitle: "more",
          },
          {
            image: "https://i.postimg.cc/brsygSX8/pexels-wb2008-2290609.jpg",
            title: "Glass door",
            buttonTitle: "more",
          },
        ],
      },
    },

    // Add more variants here as needed
  ];

  return (
    <VariantContext.Provider value={{ variants: variantsData }}>
      {children}
    </VariantContext.Provider>
  );
};

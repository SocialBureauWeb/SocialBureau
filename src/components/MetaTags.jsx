import { useEffect } from "react";

const MetaTags = ({ title, description }) => {
  useEffect(() => {
    document.title = title;

    const meta = document.querySelector("meta[name='description']");
    if (meta) {
      meta.setAttribute("content", description);
    } else {
      const metaTag = document.createElement("meta");
      metaTag.name = "description";
      metaTag.content = description;
      document.head.appendChild(metaTag);
    }
  }, [title, description]);

  return null;
};

export default MetaTags;

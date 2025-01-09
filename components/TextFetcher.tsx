"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

interface TextFetcherProps {
  readonly url: string;
  readonly loadingComponent?: React.ReactNode;
  readonly className?: string;
}

const TextFetcher = ({
  url,
  loadingComponent,
  className,
}: Readonly<TextFetcherProps>) => {
  const [textContent, setTextContent] = useState<string | null>(null);

  useEffect(() => {
    const fetchTextContent = async () => {
      try {
        const response = await axios.get(url, {
          responseType: "text",
          headers: { Accept: "text/plain" },
          timeout: 10000,
        });

        if (response.status === 200) {
          setTextContent(response.data);
        } else {
          console.error(
            `Failed to fetch content. Status: ${response.status} for URL: ${url}`
          );
        }
      } catch (error) {
        console.error("Error during axios request:", error);
        if (axios.isAxiosError(error)) {
          console.error("Axios error details:", error.toJSON());
          if (error.response) {
            console.error("Response data:", error.response.data);
            console.error("Response status:", error.response.status);
            console.error("Response headers:", error.response.headers);
          }
        }
      }
    };

    fetchTextContent();
  }, [url]);

  if (!textContent) {
    return loadingComponent || <div>Loading...</div>;
  }

  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{
        __html: textContent.replace(/\n/g, "<br>"),
      }}
    />
  );
};

export default TextFetcher;

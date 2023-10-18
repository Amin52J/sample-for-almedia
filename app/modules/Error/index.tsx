import React from "react";
import NextError from "next/error";
import { ErrorProps } from "@Modules/Error/types";
import { ErrorContainer, Image, NotFoundTitle } from "@Modules/Error/styles";

const Error = ({ status, children }: ErrorProps) => {
  if (status > 400) {
    if (status === 404) {
      return (
        <ErrorContainer>
          <Image />
          <NotFoundTitle>Seite konnte nicht gefunden werden</NotFoundTitle>
        </ErrorContainer>
      );
    }
    return <NextError statusCode={status} />;
  }
  return children;
};

export default Error;

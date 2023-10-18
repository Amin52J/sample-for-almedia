import React from "react";
import { useRouter } from "next/router";
import Header from "@aroundhome/around-kit/components/Header";
import BackButton from "@Shared/components/BackButton";

const HeaderWithBack = () => {
  const {
    query: { product_request_id: productRequestId },
  } = useRouter();

  return (
    <Header>
      {productRequestId && (
        <BackButton isInline productRequestId={productRequestId} />
      )}
    </Header>
  );
};

export default HeaderWithBack;

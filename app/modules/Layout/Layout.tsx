import React, { Fragment, useMemo } from "react";
import { useRouter } from "next/router";
import HorizontalNav from "@Shared/components/HorizontalNav";
import AccordionNav from "@Shared/components/AccordionNav";
import BackButton from "@Shared/components/BackButton";
import CategoryTags from "@Modules/Layout/components/CategoryTags";
import AggregateRatings from "@Modules/Layout/components/AggregateRatings";
import {
  CardColumn,
  CardColumnHeader,
  CompanyInfoSection,
  CompanyLogo,
  CompanyTitle,
  HideOnDesktop,
  HideOnMobile,
  LogoContainer,
  PageContainer,
} from "@Modules/Layout/Layout.styles";
import { generateLinks } from "@Modules/Layout/Layout.constants";
import { LayoutProps } from "./Layout.d";
import ProfileHead from "./components/ProfileHead";
import Contacts from "./components/Contacts";
import Info from "./components/Info";

const Layout: React.FC<LayoutProps> = ({
  children,
  profile,
  vendorAverage,
}) => {
  const { companyName, logoUrl, slug, products = [], hideRatingComments } =
    profile || {};

  const {
    query: { product_request_id: productRequestId, page },
  } = useRouter();

  const normalizedLinks = useMemo(
    () => generateLinks(slug, productRequestId, hideRatingComments, page),
    [slug, productRequestId, hideRatingComments, page],
  );

  const ratingProps = children?.props?.data;

  if (!profile) return <>{children}</>;

  return (
    <Fragment>
      <ProfileHead
        profile={profile}
        vendorAverage={vendorAverage}
        ratingProps={ratingProps}
      />
      {productRequestId && (
        <PageContainer noPaddingBottom>
          <BackButton productRequestId={productRequestId} />
        </PageContainer>
      )}
      <PageContainer noPaddingTop={!!productRequestId}>
        <Info profile={profile} productRequestId={productRequestId} />
        <CardColumn>
          <CardColumnHeader>
            <LogoContainer hideOnDesktop>
              <CompanyLogo src={logoUrl?.default} alt={companyName} isSmall />
            </LogoContainer>
            <CompanyInfoSection>
              <CompanyTitle>{companyName}</CompanyTitle>
              <CategoryTags tags={products} />
              <AggregateRatings
                profile={profile}
                vendorAverage={vendorAverage}
                hideRatingComments={hideRatingComments}
              />
              <Contacts profile={profile} />
            </CompanyInfoSection>
          </CardColumnHeader>
          <HorizontalNav profile={profile} navigationData={normalizedLinks} />
          <HideOnDesktop>
            <AccordionNav profile={profile} navigationData={normalizedLinks}>
              {children}
            </AccordionNav>
          </HideOnDesktop>
          <HideOnMobile>{children}</HideOnMobile>
        </CardColumn>
      </PageContainer>
    </Fragment>
  );
};

export default Layout;

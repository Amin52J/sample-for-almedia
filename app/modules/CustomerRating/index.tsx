import React from "react";
import Pagination from "@aroundhome/around-kit/components/Pagination/Pagination";
import HeadlineRating from "@App/modules/CustomerRating/components/HeadlineRating";
import RatingCard from "@App/modules/CustomerRating/components/RatingCard";
import type { Rating, VendorAverage } from "@Shared/types/rating";
import {
  RatingsTabContainer,
  CustomerRatingsContainer,
  NoCustomerRatings,
} from "@App/modules/CustomerRating/styles";

export interface PropsI {
  totalCount?: number;
  ratings: Rating[];
  vendorAverage: VendorAverage;
  handlePageChange: (page: number) => void;
  selectedPage: number;
}

const CustomerRating = ({
  totalCount,
  ratings,
  vendorAverage,
  handlePageChange,
  selectedPage,
}: PropsI) => {
  return (
    <RatingsTabContainer>
      {ratings && ratings.length >= 1 ? (
        <Pagination
          pages={Math.ceil(totalCount / 5)}
          currentPage={selectedPage}
          onPageChange={handlePageChange}
          totalCount={totalCount}
          hasHeader={false}
          footerProps={{ style: { margin: "auto" } }}
        >
          <>
            <HeadlineRating vendorAverage={vendorAverage} />
            <CustomerRatingsContainer>
              {ratings.map(
                (rating, index) =>
                  rating.customer && (
                    <RatingCard
                      key={`${index + 1}${rating.customer.lastName}${
                        rating.createdAt
                      }`}
                      rating={rating}
                    />
                  ),
              )}
            </CustomerRatingsContainer>
          </>
        </Pagination>
      ) : (
        <NoCustomerRatings>
          Die Firma ist neu bei Aroundhome und hat noch keine Bewertung
          erhalten.
        </NoCustomerRatings>
      )}
    </RatingsTabContainer>
  );
};

export default CustomerRating;

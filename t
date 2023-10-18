[1mdiff --git a/app/modules/CustomerRating/index.tsx b/app/modules/CustomerRating/index.tsx[m
[1mindex 874070a..2365ed0 100644[m
[1m--- a/app/modules/CustomerRating/index.tsx[m
[1m+++ b/app/modules/CustomerRating/index.tsx[m
[36m@@ -30,20 +30,22 @@[m [mconst CustomerRating = ({[m
           <RatingCard key={rating.submittedAt} rating={rating} />[m
         ))}[m
       </CustomerRatingsContainer>[m
[31m-      <ReactPaginate[m
[31m-        pageCount={Math.ceil(vendorAverage.count / 5)}[m
[31m-        pageRangeDisplayed={2}[m
[31m-        marginPagesDisplayed={1}[m
[31m-        activeClassName="active"[m
[31m-        previousClassName="prev"[m
[31m-        breakLabel="..."[m
[31m-        previousLabel="Zurück"[m
[31m-        nextLabel="Vor"[m
[31m-        breakClassName="ellipsis"[m
[31m-        containerClassName="pagination"[m
[31m-        forcePage={selectedPage}[m
[31m-        onPageChange={handlePageChange}[m
[31m-      />[m
[32m+[m[32m      {ratings.length > 1 && ([m
[32m+[m[32m        <ReactPaginate[m
[32m+[m[32m          pageCount={Math.ceil(vendorAverage.count / 5)}[m
[32m+[m[32m          pageRangeDisplayed={2}[m
[32m+[m[32m          marginPagesDisplayed={1}[m
[32m+[m[32m          activeClassName="active"[m
[32m+[m[32m          previousClassName="prev"[m
[32m+[m[32m          breakLabel="..."[m
[32m+[m[32m          previousLabel="Zurück"[m
[32m+[m[32m          nextLabel="Vor"[m
[32m+[m[32m          breakClassName="ellipsis"[m
[32m+[m[32m          containerClassName="pagination"[m
[32m+[m[32m          forcePage={selectedPage}[m
[32m+[m[32m          onPageChange={handlePageChange}[m
[32m+[m[32m        />[m
[32m+[m[32m      )}[m
     </RatingsTabContainer>[m
   );[m
 };[m
[1mdiff --git a/pages/[slug]/ratings/[[...page]].tsx b/pages/[slug]/ratings/[[...page]].tsx[m
[1mindex 42a15d1..88d6158 100644[m
[1m--- a/pages/[slug]/ratings/[[...page]].tsx[m
[1m+++ b/pages/[slug]/ratings/[[...page]].tsx[m
[36m@@ -70,7 +70,8 @@[m [mexport const getServerSideProps = async (context) => {[m
         query: GET_RATING,[m
         variables: {[m
           vendorUuids:[m
[31m-            "8b9ca97085b40135e7c23085a9a906d7" || data.profile.vendorUuid,[m
[32m+[m[32m            // "8b9ca97085b40135e7c23085a9a906d7" ||[m
[32m+[m[32m            data.profile.vendorUuid,[m
           page: +context.params.page?.[0] || 1,[m
         },[m
       });[m

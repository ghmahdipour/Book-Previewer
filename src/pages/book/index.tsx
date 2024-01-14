import React, {useEffect} from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Row, Col, Card } from "react-bootstrap";
import LazyImage from "@components/LazyImage";
import { useGetBookDetailQuery } from "@api/books/bookApi"
import Loading from "@components/Loading";

const Book: React.FC<{}> = () => {
  const { t } = useTranslation();
  let { bookId } = useParams<"bookId">();
  const { data: book, isLoading, isFetching,isError, refetch } = useGetBookDetailQuery(bookId);

  useEffect(() => {
    refetch();
  }, [bookId]);

  if(isLoading || isFetching) return <Loading />;
  if(isError) return <p>{t("Error fetching data")}</p>;

  // const _data = data.find((_b: any) => { return (_b.id).toString() === bookId });

  return (
      <Card>
        <Row className="g-0 align-items-center">
          {!isLoading && (<>
              <Col md={5}>
              <div className="w-72 h-60">
                <LazyImage src={book.image} alt={`img-${book.id}` } />
              </div>
            </Col>
  
            <Col md={7}>
              <Card.Body>
                <div className="flex flex-row pb-5">
                  <Card.Title as="h5" className="fs-16">
                    {book.title}
                  </Card.Title>
                  <small className="text-muted"> {book.author}</small>
                </div>
                <Card.Text>
                {book.description}
                </Card.Text>
              </Card.Body>
            </Col>
            </>)
          }
        </Row>
      </Card>
  );
};

export default Book;

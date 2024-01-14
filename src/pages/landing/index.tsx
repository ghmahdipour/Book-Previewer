import React, { useEffect, Profiler } from "react";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "@redux/hooks";
import { useGetBooksQuery } from "@api/books/bookApi"
import { Row, Col, Card } from "react-bootstrap";
import Table from "@components/Table";
import { setBooks } from "@slices/bookSlice"
import Loading from "@components/Loading";

const Landing: React.FC<{}> = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { data } = useAppSelector((state) => state.book)
  const { data: books = [], isLoading, isFetching, isError } = useGetBooksQuery({});
 
  useEffect(() => {
    if (books.length > 0 && data.length === 0 && !isLoading) {
      dispatch(setBooks(books))
    }
  }, [books, dispatch]);

  const columns = [
    {
      Header: "",
      accessor: "id",
      sort: false,
    },
    {
      Header: "Title",
      accessor: "title",
      sort: false,
    },
    {
      Header: "Author",
      accessor: "author",
      sort: false,
    },
    {
      Header: "Link",
      accessor: "image",
      sort: false,
    },
    {
      Header: "Description",
      accessor: "description",
      sort: false,
    },
  ];
  
  // const sizePerPageList = [
  //   {
  //     text: "5",
  //     value: 5,
  //   },
  //   {
  //     text: "10",
  //     value: 10,
  //   },
  //   {
  //     text: "25",
  //     value: 25,
  //   },
  //   {
  //     text: "All",
  //     value: 30,
  //   },
  // ];
  
  if(isLoading || isFetching) return <Loading />;
  if(isError) return <p>{t("Error fetching data")}</p>;

  const onRenderCallback: React.ProfilerOnRenderCallback = (
      id,
      actualDuration,
      baseDuration,
      intractions
  ) => {
    console.log(`${id} - ${baseDuration} ms - ${actualDuration}`)
  }

  return (
    <Profiler id="Landing" onRender={onRenderCallback}>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <h4 className="header-title pb-4">{t("Book Previewer")}</h4>
              {!isLoading && data.length > 0 && <Table
                columns={columns}
                data={data}
                pageSize={5}
                // sizePerPageList={sizePerPageList}
                isSortable={true}
                pagination={true}
              />}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Profiler>  
  );
};

export default Landing;

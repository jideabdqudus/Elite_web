<Row>
                    <Col xl={3}>
                      <Card>
                        <a href={news.url} target="__blank">
                          <CardImg
                            top
                            width="100%"
                            src={
                              news.urlToImage ? `${news.urlToImage}` : `${Man}`
                            }
                            alt="Card image cap"
                          />
                          <CardBody>
                            <CardTitle tag="h5" className="newsTitle">
                              {`${news.title}`.substring(0, 100)}..
                            </CardTitle>
                            <CardSubtitle
                              tag="h6"
                              className="mb-2 text-muted"
                            ></CardSubtitle>
                            {/* <CardText className="newsTitle">
                            {news.description
                              ? `${news.description}`.substring(0, 100)
                              : `${news.content}`.substring(0, 100)}
                            ...
                          </CardText> */}
                            {/* <Button>
                            <a href={news.url} target="__blank">
                              Read more
                            </a>
                          </Button> */}
                            <br />
                            <span className="source">{news.source.name}</span>
                          </CardBody>
                        </a>
                      </Card>
                    </Col>
                  </Row>
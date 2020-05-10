import React from "react";
import { Route, Link } from 'react-router-dom';

// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";
import axios from "axios";

class Header extends React.Component {
  state = {
    isLoading: false,
    accessId: '',
    matchResult: []
  };

  // 매치 상세 기록 조회
  _getMatchIdDetail = () => {
    let MatchIdList = this.state.matchIdList;
    let matchResultArray = [];

    for (let i = 0; i < MatchIdList.length; i++) {
      if(MatchIdList.length === 0){
        return;
      }else{
        let getMatchIdDetail = 'https://api.nexon.co.kr/fifaonline4/v1.0/matches/' + MatchIdList[i];
        try{
          axios.get(getMatchIdDetail, {
            // 헤더 값 : 권한 시리얼 정보
            headers: {Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50X2lkIjoiMTIyNDc2MTUyOSIsImF1dGhfaWQiOiIyIiwidG9rZW5fdHlwZSI6IkFjY2Vzc1Rva2VuIiwic2VydmljZV9pZCI6IjQzMDAxMTQ4MSIsIlgtQXBwLVJhdGUtTGltaXQiOiIyMDAwMDoxMCIsIm5iZiI6MTU3NzAwODc3MywiZXhwIjoxNjQwMDgwNzczLCJpYXQiOjE1NzcwMDg3NzN9.Pv1OIow11dye_uv69wnVleR93fa4fDrmup1oTXVuUuo'}
          }).then(response => {
            matchResultArray.push(response.data);
            this.setState({
              matchResult: matchResultArray,
              isLoading: false
            })
          })
        }catch(error){
          console.error(error);
        }
      }
    }
  };

  // 경기 결과 버튼 색깔
  handleButton = (matchResult) => {
    if(matchResult === "승"){
      let bg_color = "success";
      return bg_color;
    }else if(matchResult === "패"){
      let bg_color = "warning";
      return bg_color;
    }else if(matchResult === "무"){
      let bg_color = "secondary";
      return bg_color;
    }
  };

  componentDidMount= () => {
   // const search = this.props; //.location.search;
   /* console.log("search::", search);

    const params = new URLSearchParams(search);*/
  /*  const accessId = params.get("accessId");
    console.log("accessId:: ", accessId);

    this.setState({
      accessId: accessId
    });*/
  };

  render() {
    const search = this.props;

    const {accessId, matchResult, isLoading} = this.props;

    if(!isLoading){
      console.log("test:", matchResult)
    }

    return (
      <>
        <div className="header bg-gradient-default pb-8 pt-5 pt-md-8">
          <Container fluid>
            <div className="header-body">
              {/* Card stats */}
              <Row>
                <Col lg="6" xl="3">
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h5"
                            className="text-uppercase text-muted mb-0"
                          >
                            총 경기수
                          </CardTitle>
                          <span className="h2 font-weight-bold mb-0">
                            22
                          </span>
                        </div>
                        <Col className="col-auto">
                          <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                            <i className="fas fa-chart-bar" />
                          </div>
                        </Col>
                      </Row>
                      <p className="mt-3 mb-0 text-muted text-sm">
                        <span className="text-success mr-2">
                          <i className="fa fa-arrow-up" /> 3.48%
                        </span>{" "}
                        <span className="text-nowrap">Since last month</span>
                      </p>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="6" xl="3">
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h5"
                            className="text-uppercase text-muted mb-0"
                          >
                            승리 횟수
                          </CardTitle>
                          <span className="h2 font-weight-bold mb-0">
                            50%
                          </span>
                        </div>
                        <Col className="col-auto">
                          <div className="icon icon-shape bg-warning text-white rounded-circle shadow">
                            <i className="fas fa-chart-pie" />
                          </div>
                        </Col>
                      </Row>
                      <p className="mt-3 mb-0 text-muted text-sm">
                        <span className="text-danger mr-2">
                          <i className="fas fa-arrow-down" /> 50%
                        </span>{" "}
                        <span className="text-nowrap">최근 100 경기 중</span>
                      </p>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="6" xl="3">
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h5"
                            className="text-uppercase text-muted mb-0"
                          >
                            패배 횟수
                          </CardTitle>
                          <span className="h2 font-weight-bold mb-0">30%</span>
                        </div>
                        <Col className="col-auto">
                          <div className="icon icon-shape bg-yellow text-white rounded-circle shadow">
                            <i className="fas fa-users" />
                          </div>
                        </Col>
                      </Row>
                      <p className="mt-3 mb-0 text-muted text-sm">
                        <span className="text-warning mr-2">
                          <i className="fas fa-arrow-down" /> 30%
                        </span>{" "}
                        <span className="text-nowrap">최근 100 경기 중</span>
                      </p>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="6" xl="3">
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h5"
                            className="text-uppercase text-muted mb-0"
                          >
                            무승부 횟수
                          </CardTitle>
                          <span className="h2 font-weight-bold mb-0">20%</span>
                        </div>
                        <Col className="col-auto">
                          <div className="icon icon-shape bg-info text-white rounded-circle shadow">
                            <i className="fas fa-percent" />
                          </div>
                        </Col>
                      </Row>
                      <p className="mt-3 mb-0 text-muted text-sm">
                        <span className="text-success mr-2">
                          <i className="fas fa-arrow-up" /> 20%
                        </span>{" "}
                        <span className="text-nowrap">최근 100 경기 중</span>
                      </p>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      </>
    );
  }
}

export default Header;

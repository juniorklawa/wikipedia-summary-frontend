import React, { useEffect, useState } from "react";
import api from "../../services/api";
import {
  Container,
  FeaturedArticleContent,
  ArticleTitle,
  FeaturedArticleContainer,
  FeaturedArticleImage,
  DidYouKnowContainer,
  DidYouKnowContent,
  DidYouKnowImage,
  DidYouKnowTitle,
} from "./styles";

function Dashboard() {
  const [data, setData] = useState({});

  useEffect(() => {
    async function loadData() {
      const { data } = await api.get("/summary");
      setData(data);
      console.log(data);
    }

    loadData();
  }, []);

  return (
    <Container>
      <FeaturedArticleContainer>
        <FeaturedArticleContent>
          <ArticleTitle>Today featured Article</ArticleTitle>
          <div
            dangerouslySetInnerHTML={{ __html: data.todayFeaturedArticle }}
          />
        </FeaturedArticleContent>
      </FeaturedArticleContainer>
      <DidYouKnowContainer>
        <DidYouKnowContent>
          <DidYouKnowTitle>Did you know?</DidYouKnowTitle>
          <ul>
            <div dangerouslySetInnerHTML={{ __html: data.didYouKnow }} />
          </ul>
        </DidYouKnowContent>
      </DidYouKnowContainer>
    </Container>
  );
}

export default Dashboard;

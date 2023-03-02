import Content from "./Content/Content";
import image_1 from "./main_1.png";
import image_2 from "./main_2.png";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import "./index.css";
import HomePost from "./Api/HomePost";
const anchors = ["firstPage", "secondPage", "thirdPage"];

export const FullPageWrapper = () => {
  const navigation = useLocation();
  const [homePosts, setHomePosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  async function fetchPosts() {
    setHomePosts(await HomePost.getAll());
  }

  return (
    <>
      {navigation.pathname === "/" ? (
        <ReactFullpage
          anchors={anchors}
          navigation
          navigat
          scrollOverflow={true}
          loopTop={true}
          loopBottom={true}
          onLeave={() => {}}
          render={({}) => {
            return (
              <div>
                {/* Основной блок */}
                <div
                  className="section"
                  style={{
                    backgroundImage: `url(${image_1})`,
                    backgroundSize: "100%",
                  }}
                >
                  <Content />
                </div>
                {/* Основной блок */}

                {/* Добавочный блоки */}
                {homePosts.map((homePost) => (
                  <div
                    className="section"
                    style={{
                      backgroundImage: `url(${image_2})`,
                      backgroundSize: "100%",
                    }}
                  >
                    <Content homePost={homePost} key={homePost.id} />
                  </div>
                ))}
                {/* Добавочный блоки */}
              </div>
            );
          }}
        />
      ) : (
        <>
          <Content />
        </>
      )}
    </>
  );
};

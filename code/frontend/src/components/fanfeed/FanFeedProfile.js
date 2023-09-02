import React from "react";
import "../../style/fanfeed/FanFeedProfile.css";
import { useNavigate } from "react-router-dom";

function FanFeedProfile({ groupInfo, userInfo }) {
  // console.log(userInfo)
  const navigate = useNavigate();

  const onProfileClick = () => {
    navigate(`/mypage`);
  };

  return (
    <>
      {groupInfo && userInfo ? (
        <div>
          <div className="fanFeedProfileGroupContainer">
            <img
              className="fanFeedProfileGroupImg"
              src={`https://localhost:8000/file/getimg/group-img/${groupInfo[0]?.filePath}`}
              alt="ff"
            />
            <div className="fanFeedProfileGroupNamespace">
              {groupInfo[0]?.name}
            </div>
          </div>
          {/* 마이페이지 구현 후 연결 필요 */}
          <div className="fanFeedProfileUserContainer" onClick={onProfileClick}>
            <div className="fanFeedProfileUserImgContainer">
              {userInfo?.profileFileDto ? (
                <img
                  className="fanFeedProfileUserImg"
                  src={`https://localhost:8000/file/getimg/profile?id=${userInfo?.profileFileDto.id}`}
                  alt="ff"
                />
              ) : (
                <img
                  className="fanFeedProfileUserImg"
                  src={`https://localhost:8000/file/getimg/profile?id=1`}
                  alt="ff"
                />
              )}
            </div>
            {userInfo?.nickname}
            <div className="fanFeedProfileUserUnderline"></div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default FanFeedProfile;

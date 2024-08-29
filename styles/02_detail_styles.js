import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  /* height: 1847px; */
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 100px;
  padding-top: 80px;
  padding-left: 102px;
  padding-right: 102px;
  box-shadow: 0px 0px 30px gray;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export const Account = styled.div`
  width: 100%;
  margin-left: 18px;
  cursor: pointer;
`;

export const Writer = styled.div`
  font-size: 24px;
  cursor: pointer;
`;

export const Date = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: #828282;
`;

export const Icons = styled.div`
  display: flex;
  cursor: pointer;
`;

export const Iconbox = styled.div`
  margin-right: 20px;
`;

export const Bar = styled.div`
  width: 100%;
  height: 1px;
  background-color: rgba(0, 0, 0, 0.3);
  margin-top: 12px;
  margin-bottom: 80px;
`;

export const Middle = styled.div`
  width: 100%;
  borer: 1px solid black;
`;

export const Title = styled.div`
  font-size: 36px;
  font-weight: 700;
  line-height: 53.28px;
  margin-bottom: 30px;
`;

export const Image = styled.div`
  width: 996px;
  height: 480px;
  border: 1px solid rgba(0, 0, 0, 0.3);
`;

export const Contents = styled.div`
  margin-top: 40px;
  width: 100%;
  font-size: 20px;
  font-weight: 400;
  line-height: 23.68px;
`;

export const Video = styled.div`
  width: 486px;
  height: 240px;
  border: 1px solid rgba(0, 0, 0, 0.3);
`;

export const VideoBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 120px;
`;

export const Bottom = styled.div`
  width: 100%;
  margin: 150px 0 100px 0;
  display: flex;
  justify-content: center;
`;

export const Like = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5px 22px 5px 22px;
  color: #ffd600;
  font-size: 24px;
  cursor: pointer;
`;

export const Num = styled.div``;

export const Dislike = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5px 22px 5px 22px;
  color: gray;
  font-size: 24px;
  cursor: pointer;
`;

import { useRouter } from "next/router";
import {
  Wrapper,
  Header,
  Account,
  Writer,
  Date,
  Icons,
  Bar,
  Middle,
  Title,
  Image,
  Iconbox,
  Contents,
  Video,
  VideoBox,
  Bottom,
  Like,
  Dislike,
  Num,
} from "../../styles/02_detail_styles";
import { useQuery, gql } from "@apollo/client";
import { MdAccountCircle } from "react-icons/md";
import { IoMdLink } from "react-icons/io";
import { SlLocationPin } from "react-icons/sl";
import { AiOutlineLike } from "react-icons/ai";
import { BiDislike } from "react-icons/bi";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function DetailPage() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router.query.detailid,
    },
  });
  console.log(data);

  return (
    <Wrapper>
      <Header>
        <MdAccountCircle size={56} color="rgba(0,0,0,0.3)"></MdAccountCircle>
        <Account>
          <Writer>{data?.fetchBoard?.writer}</Writer>
          <Date>Date: {data?.fetchBoard?.createdAt}</Date>
        </Account>
        <Icons>
          <Iconbox>
            <IoMdLink size={32} color="ffd600"></IoMdLink>
          </Iconbox>
          <SlLocationPin size={27} color="ffd600"></SlLocationPin>
        </Icons>
      </Header>

      <Bar></Bar>

      <Middle>
        <Title>{data?.fetchBoard?.title}</Title>
        <Image></Image>
        <Contents>{data?.fetchBoard?.contents}</Contents>
        <VideoBox>
          <Video></Video>
        </VideoBox>
      </Middle>

      <Bottom>
        <Like>
          <AiOutlineLike />
          <Num>1920</Num>
        </Like>
        <Dislike>
          <BiDislike />
          <Num>20</Num>
        </Dislike>
      </Bottom>
    </Wrapper>
  );
}

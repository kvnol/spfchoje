import { MdCalendarToday, MdStadium } from 'react-icons/md';
import * as S from './style';
import { BsYoutube } from 'react-icons/bs';

type TCard = {
  item: {
    DATA: string;
    COMPETIÇÃO: string;
    ESTÁDIO: string;
    PLACAR: string;
    ADVERSÁRIO: string;
  }
}

export const Card = ({item}: TCard) => {
  return (
    <S.Card>
      <S.CardHeader>
        <S.CardHeaderTitle>{item.COMPETIÇÃO}</S.CardHeaderTitle>
        <S.CardHeaderLink href={`https://www.youtube.com/results?search_query=${item.COMPETIÇÃO} São Paulo ${item.PLACAR} ${item.ADVERSÁRIO} ${item.DATA}`} target='_blank'><BsYoutube/> Assistir no YouTube</S.CardHeaderLink>
      </S.CardHeader>
      <S.CardScore>
        <S.CardScoreTeam>São Paulo FC</S.CardScoreTeam>
        <S.CardScoreResult>
          <strong>{item.PLACAR.split('x')[0]}</strong>
          <span>x</span>
          <strong>{item.PLACAR.split('x')[1]}</strong>
        </S.CardScoreResult>
        <S.CardScoreTeam>{item.ADVERSÁRIO}</S.CardScoreTeam>
      </S.CardScore>
      <S.CardTags>
        <S.CardTag><MdCalendarToday /> {item.DATA}</S.CardTag>
        <S.CardTag><MdStadium /> {item.ESTÁDIO}</S.CardTag>
      </S.CardTags>
    </S.Card>
  )
}